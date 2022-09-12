import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext} from '@nestjs/microservices';
import { AppService } from './app.service';
import { ConfirmUserDTO } from './dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return `Welcome to people's power's mail services`;
  }

  @EventPattern('confirm-user')
  handleResult(@Payload() data: ConfirmUserDTO, @Ctx() ctx: RmqContext) {
    const channel = ctx.getChannelRef()
    const originalMsg = ctx.getMessage()
    this.appService.confirmUser(data)
    channel.ack(originalMsg)
  }

  @EventPattern('test')
  test() {
    console.log('FirShotes')
  }

  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}
