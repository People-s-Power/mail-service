import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as htmlText from 'nodemailer-html-to-text'
import * as nodemailer from 'nodemailer'
import { ConfirmEmail } from './templates/confirm-email-template';
import { SES } from 'aws-sdk';
import * as Mailjet from 'node-mailjet'
import { ConfirmUserDTO } from './dto';


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
    // this.transporter.use('compile', htmlText.htmlToText())

    
  }
    private SES_CONFIG = {
        apiVersion: "2010-12-01",
        accessKeyId: this.configService.get("Access_Key_ID"),
        secretAccessKey: this.configService.get("Secret_Access_Key"),
        region: this.configService.get("Region"),
    };

    private AWS_SES = new SES(this.SES_CONFIG);

  async confirmUser(data: ConfirmUserDTO) {

    try {
        await this.transporter.sendMail({
          from: 'ifeanyichukwuadams@outlook.com',
          to: data.email,
          subject: 'Verify your email address',
          text: 'Weldone',
          html: ConfirmEmail(data.username, data.code),
          // htmlText: ConfirmEmail(),
         // html: ConfirmEmail(user, host),
          headers: { 'x-myheader': 'test header' }
        });
        // const params = {
        //   Source: 'People-power <evansb45@yahoo.com>',
        //   Destination: {
        //     ToAddresses: [
        //       'ifeanyichukwuadams@outlook.com'
        //     ],
        //   },
        //   Message: {
        //     Body: {
        //       Html: {
        //         Charset: 'UTF-8',
        //         Data: ConfirmEmail(),
        //       },
        //     },
        //     Subject: {
        //       Charset: 'UTF-8',
        //       Data: `Verify your email address`,
        //     }
        //   },
        // };
        // return this.AWS_SES.sendEmail(params).promise();
      } catch (error) {
        console.log(error);      
        // Logger.error(`NODE-MAILER.sendHtmlMailAsync: ${error.toString()}`);
      }
  }
}
