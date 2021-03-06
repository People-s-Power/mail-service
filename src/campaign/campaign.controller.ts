import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext} from '@nestjs/microservices';
import { endorsedDTO, payloadDTO } from './campaign.dto';
import { CampaignService } from './campaign.service';
// import {  }

@Controller('campaign')
export class CampaignController {
  constructor(private campaignService: CampaignService){}

  @EventPattern('campaign-created')
  campaignCreated(@Payload() data: payloadDTO, @Ctx() ctx: RmqContext) {
    const channel = ctx.getChannelRef()
    const originalMsg = ctx.getMessage()
    this.campaignService.createdCampaign(data)
    channel.ack(originalMsg)
  }
  
  @EventPattern('campaign-endorsed')
  endorsedMail(@Payload() data: endorsedDTO, @Ctx() ctx: RmqContext) {
    const channel = ctx.getChannelRef()
    const originalMsg = ctx.getMessage()
    this.campaignService.endosedMail(data)
    channel.ack(originalMsg)
  }
}
