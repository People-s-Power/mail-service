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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const campaign_dto_1 = require("./campaign.dto");
const campaign_service_1 = require("./campaign.service");
let CampaignController = class CampaignController {
    constructor(campaignService) {
        this.campaignService = campaignService;
    }
    campaignCreated(data, ctx) {
        const channel = ctx.getChannelRef();
        const originalMsg = ctx.getMessage();
        this.campaignService.createdCampaign(data);
        channel.ack(originalMsg);
    }
    endorsedMail(data, ctx) {
        const channel = ctx.getChannelRef();
        const originalMsg = ctx.getMessage();
        this.campaignService.endosedMail(data);
        channel.ack(originalMsg);
    }
};
__decorate([
    (0, microservices_1.EventPattern)('campaign-created'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [campaign_dto_1.payloadDTO, microservices_1.RmqContext]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "campaignCreated", null);
__decorate([
    (0, microservices_1.EventPattern)('campaign-endorsed'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [campaign_dto_1.endorsedDTO, microservices_1.RmqContext]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "endorsedMail", null);
CampaignController = __decorate([
    (0, common_1.Controller)('campaign'),
    __metadata("design:paramtypes", [campaign_service_1.CampaignService])
], CampaignController);
exports.CampaignController = CampaignController;
//# sourceMappingURL=campaign.controller.js.map