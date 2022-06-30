import { ConfigService } from '@nestjs/config';
export declare class AppService {
    private readonly configService;
    private readonly transporter;
    constructor(configService: ConfigService);
    getHello(): Promise<string>;
}
