import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as htmlText from 'nodemailer-html-to-text'
import * as nodemailer from 'nodemailer'
import { ConfirmEmail } from './templates/confirm-email-template';

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
  async getHello() {

    const email = {
      from: 'ifeanyichukwuadams@outlook.com',
      to: 'kingifean@gmail.com',
      subject: 'TEst this out',
      text: 'Well it worked out fine!!'
      
    }
    try {
        await this.transporter.sendMail({
          from: 'ifeanyichukwuadams@outlook.com',
          to: 'kingifean@gmail.com',
          subject: 'Verify your email address',
          text: 'Weldone',
          htmlText: ConfirmEmail(),
         // html: ConfirmEmail(user, host),
          headers: { 'x-myheader': 'test header' }
        });
      } catch (error) {
        console.log(error);      
        // Logger.error(`NODE-MAILER.sendHtmlMailAsync: ${error.toString()}`);
      }
    
    return 'Hello World!';
  }
}
