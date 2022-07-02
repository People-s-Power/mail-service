import { Injectable, Logger, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer'
import { infoAuthor } from 'src/templates/info-author';
import { createCampaign } from '../templates/create-campaign'
import { campaignDTO, endorsedDTO, payloadDTO, userDTO } from './campaign.dto';

@Injectable()
export class CampaignService {
  private readonly transporter: any;
  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: this.configService.get('SMTP_USER'),
        pass: this.configService.get('SMTP_PASS'),
      },
      logger: true,
    });
}

  createdCampaign (data: payloadDTO) {
    const campaigns: campaignDTO[] = data.campaigns
    const promotedCampaigns = campaigns.filter(camp => camp.promoted === true)
    // console.log(data.users)
    
    try {
      data.users.forEach(async user => {
        await this.transporter.sendMail({
          from: 'ifeanyichukwuadams@outlook.com',
          to: user.email,
          subject: `Created campaign ${data.campaign.slug}`,
          text: 'Weldone',
          html: createCampaign(user.username, data.campaign, promotedCampaigns),
          headers: { 'x-myheader': 'test header' }
        });
      })
      
    } catch (error) {
      throw error
    }
  }

  async endosedMail(data: endorsedDTO) {
    try {
      await this.transporter.sendMail({
        from: 'ifeanyichukwuadams@outlook.com',
        to: data.author.email,
        subject: `Endoserd campaign ${data.campaign.slug}`,
        text: '',
        html: infoAuthor(data.author, data.endorserName, data.campaign),
        headers: { 'x-myheader': 'test header' }
      });
    } catch (error) {
      throw error
    }
    
  }

}
