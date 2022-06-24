"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const rmqUrl = process.env.RMQ_URL;
    const logger = new common_1.Logger('MAIN');
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: rmqUrl,
            queue: 'mail_queue',
            queueOptions: {
                durable: false
            }
        }
    });
    logger.log('microservices is listening');
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map