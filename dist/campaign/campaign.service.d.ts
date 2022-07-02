import { ConfigService } from '@nestjs/config';
import { payloadDTO } from './campaign.dto';
export declare class CampaignService {
    private readonly configService;
    private readonly transporter;
    constructor(configService: ConfigService);
    createdCampaign(data: payloadDTO): void;
}
