"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
const create_campaign_1 = require("../templates/create-campaign");
let CampaignService = class CampaignService {
    constructor(configService) {
        this.configService = configService;
        this.transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: this.configService.get('SMTP_USER'),
                pass: this.configService.get('SMTP_PASS'),
            },
            logger: true,
        });
    }
    createdCampaign(data) {
        const campaigns = data.campaigns;
        const promotedCampaigns = campaigns.filter(camp => camp.promoted === true);
        try {
            data.users.forEach(async (user) => {
                await this.transporter.sendMail({
                    from: 'ifeanyichukwuadams@outlook.com',
                    to: user.email,
                    subject: `Created campaign ${data.campaign.slug}`,
                    text: 'Weldone',
                    html: (0, create_campaign_1.createCampaign)(user.username, data.campaign, promotedCampaigns),
                    headers: { 'x-myheader': 'test header' }
                });
            });
        }
        catch (error) {
            throw error;
        }
    }
};
CampaignService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CampaignService);
exports.CampaignService = CampaignService;
//# sourceMappingURL=campaign.service.js.map