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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
const confirm_email_template_1 = require("./templates/confirm-email-template");
const aws_sdk_1 = require("aws-sdk");
let AppService = class AppService {
    constructor(configService) {
        this.configService = configService;
        this.SES_CONFIG = {
            apiVersion: "2010-12-01",
            accessKeyId: this.configService.get("Access_Key_ID"),
            secretAccessKey: this.configService.get("Secret_Access_Key"),
            region: this.configService.get("Region"),
        };
        this.AWS_SES = new aws_sdk_1.SES(this.SES_CONFIG);
        this.transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: this.configService.get('SMTP_USER'),
                pass: this.configService.get('SMTP_PASS'),
            },
            logger: true,
        });
    }
    async confirmUser(data) {
        try {
            await this.transporter.sendMail({
                from: 'ifeanyichukwuadams@outlook.com',
                to: data.email,
                subject: 'Verify your email address',
                text: 'Weldone',
                html: (0, confirm_email_template_1.ConfirmEmail)(data.username, data.code),
                headers: { 'x-myheader': 'test header' }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map