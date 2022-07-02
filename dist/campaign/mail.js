"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_mailjet_1 = require("node-mailjet");
const create_campaign_1 = require("../templates/create-campaign");
require('dotenv').config();
const mailjet = new node_mailjet_1.default({
    apiKey: process.env.MAILJET_KEY,
    apiSecret: process.env.MAILJET_SECRET
});
const sendMail = (user, campaign, campaigns) => {
    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
        "Messages": [
            {
                "From": {
                    "Email": user.email,
                    "Name": user.username
                },
                "Subject": "Greetings from Mailjet.",
                "TextPart": "My first Mailjet email",
                "HTMLPart": (0, create_campaign_1.createCampaign)(user, campaign, campaigns),
                "CustomID": "AppGettingStartedTest"
            }
        ]
    });
    request
        .then((result) => {
        console.log(result.body);
    })
        .catch((err) => {
        console.log(err.statusCode);
    });
};
exports.default = sendMail;
//# sourceMappingURL=mail.js.map