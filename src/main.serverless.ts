/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { INestApplication } from '@nestjs/common';
import { Handler, Context, Callback } from 'aws-lambda';

let cachedServer: Handler;

// Função para inicializar o Nest.js
async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  await app.init(); // Importante: use app.init() em vez de app.listen()
  return app;
}

// Exportamos o 'handler' que o Netlify/AWS Lambda irá chamar
export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  // Se o servidor ainda não foi inicializado (primeira requisição, "cold start"),
  // nós o criamos e o colocamos em cache.
  if (!cachedServer) {
    const nestApp = await bootstrap();
    const expressApp = nestApp.getHttpAdapter().getInstance();
    cachedServer = serverlessExpress({ app: expressApp });
  }

  // Passa a requisição para o handler em cache.
  return cachedServer(event, context, callback);
};
