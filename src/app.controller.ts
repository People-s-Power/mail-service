import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext} from '@nestjs/microservices';
import { AppService } from './app.service';
import { ConfirmUserDTO } from './dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello() {
  //   return this.appService.confirmUser();
  // }

  @EventPattern('confirm-user')
  handleResult(@Payload() data: ConfirmUserDTO, @Ctx() ctx: RmqContext) {
    const channel = ctx.getChannelRef()
    const originalMsg = ctx.getMessage()
    this.appService.confirmUser(data)
    channel.ack(originalMsg)
  }

  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}
