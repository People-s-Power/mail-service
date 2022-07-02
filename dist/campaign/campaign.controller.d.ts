import { RmqContext } from '@nestjs/microservices';
import { CampaignService } from './campaign.service';
export declare class CampaignController {
    private campaignService;
    constructor(campaignService: CampaignService);
    campaignCreated(data: any, ctx: RmqContext): void;
}
