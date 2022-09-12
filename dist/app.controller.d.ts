import { RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';
import { ConfirmUserDTO } from './dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    handleResult(data: ConfirmUserDTO, ctx: RmqContext): void;
    test(): void;
    accumulate(data: number[]): number;
}
