import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as htmlText from 'nodemailer-html-to-text'
import * as nodemailer from 'nodemailer'


@Injectable()
export class AppService {
  private readonly transporter: any;
  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      // host: this.configService.get('SMTP_HOST'),
      // port: 2525,
      // secure: false,
      // requireTLS: false,
      service: 'hotmail',
      auth: {
        user: this.configService.get('SMTP_USER'),
        pass: this.configService.get('SMTP_PASS'),
      },
      logger: true,
      // dkim: {
      //   domainName: this.configService.get('DKIM_DOMAINNAME'),
      //   keySelector: this.configService.get('DKIM_KEYSELECTOR'),
      //   privateKey: this.configService.get('DKIM_PRIVATEKEY')
      // }
    });
    this.transporter.use('compile', htmlText.htmlToText())
  }
  getHello(): string {

    const email = {
      from: 'ifeanyichukwuadams@outlook.com',
      to: 'kingifean@gmail.com',
      subject: 'TEst this out',
      text: 'Well it worked out fine!!'
    }

    this.transporter.sendMail(email)
    
    return 'Hello World!';
  }
}
