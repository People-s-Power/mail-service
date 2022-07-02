import { RmqContext } from '@nestjs/microservices';
import { endorsedDTO, payloadDTO } from './campaign.dto';
import { CampaignService } from './campaign.service';
export declare class CampaignController {
    private campaignService;
    constructor(campaignService: CampaignService);
    campaignCreated(data: payloadDTO, ctx: RmqContext): void;
    endorsedMail(data: endorsedDTO, ctx: RmqContext): void;
}
