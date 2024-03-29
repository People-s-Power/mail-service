import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices'
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const rmqUrl = process.env.RMQ_URL
  const logger = new Logger('MAIN');

  // const app = await NestFactory.createMicroservice(AppModule, {
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: rmqUrl,
  //     queue: 'mail_queue',
  //     noAck: false,
  //     queueOptions: {
  //       durable: false
  //     }
  //   } 
  // });

  const PORT = process.env.PORT

  const app = await NestFactory.create(AppModule)
  app.connectMicroservice({
      transport: Transport.RMQ,
      options: {
        urls: rmqUrl,
        queue: 'mail_queue',
        queueOptions: {
          durable: false
        }
      }
    })

    await app.startAllMicroservices()
  
  logger.log('microservices is listening')
  await app.listen(PORT, () => {
    Logger.log(`server started on port ${PORT}`);
  });
}
bootstrap();
