import { ConfigService } from '@nestjs/config';
import { ConfirmUserDTO } from './dto';
export declare class AppService {
    private readonly configService;
    private readonly transporter;
    constructor(configService: ConfigService);
    private SES_CONFIG;
    private AWS_SES;
    confirmUser(data: ConfirmUserDTO): Promise<void>;
}
