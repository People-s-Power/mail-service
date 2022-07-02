import { ConfigService } from '@nestjs/config';
export declare class CampaignService {
    private readonly configService;
    private readonly transporter;
    constructor(configService: ConfigService);
    createdCampaign(data: any): void;
}
