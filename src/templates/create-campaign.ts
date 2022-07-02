import { campaignDTO } from "src/campaign/campaign.dto";

export function createCampaign(username: string, campaign: campaignDTO, promotedCampaigns: campaignDTO[]): string {
  return `
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
      * {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          font-family: sans-serif;
      }

      .container {
          border-radius: 10px;
          width: 900px;
          margin: 10px auto;
          text-align: center;
          padding: 20px 100px;
      }

      h2 {
          text-align: center;
      }

      #evans {
          margin: 20px 0;
          font-size: 13px;
      }

      button {
          width: 50%;
          font-size: 1em;
          background-color: #cc1b1b;
          border: none;
          padding: 8px;
      }

      h5 {
          margin: 20px 0;
      }

      #first-paragraph {
          margin: 30px 0;
          text-align: left;
          line-height: 22px;
      }

      a {
          color: blue;
      }

      p {
          text-align: left;
      }

      #block {
          background-color: #b6b6b6;
          padding: 35px;
          margin: 30px 0;
          text-align: left;
          width: 70%;
          margin: 20px auto;
      }

      #block p {
          margin: 0 0 30px 0;
      }

      #block a {
          margin-top: 20px;
          color: red;
      }

      .img {
          margin-top: 20px;
          -webkit-box-align: left;
          -ms-flex-align: left;
          align-items: left;
      }

      #the-person {
          margin: 50px 0;
          font-size: 13px;
      }

      #user {
          font-size: 12px;
          text-align: left;
      }

      h3 {
          margin: 40px;
      }

      #class {
          text-align: left;
      }

      .buttons {
          margin: 20px 0;
      }

      .button {
          border: 1px solid black;
          margin-top: 20px;
          font-size: 14px;
      }

      #facebook {
          background-color: #8585f0;
      }

      #tweet {
          background: none;
      }

      #whatsapp {
          background: none;
      }

      .remove {
          font-size: 15px;
      }

      .explore {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
      }

      .explore p {
          font-size: 15px;
      }

      .explore a {
          font-size: 15px;
      }

      .explore .explore1 {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          margin-top: 15px;
      }

      .explore .explore1 div {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          margin-left: 20px;
      }

      .explore .explore2 {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          margin-top: 15px;
      }

      .explore .explore2 div {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          text-align: left;
          margin-left: 20px;
      }

      .icon {
          width: 20px;
          margin-right: 10px;
      }

      /*# sourceMappingURL=style.css.map */
  </style>
</head>

<body>
  <div class="container">
      <h2>PEOPLE-S-POWER</h2>
      <p id="evans">${username} — There’s a new campaign taking off on <b>People-s-PowerTechnology</b> and we think you
          might be interested in endorsing it. </p>
      <img src="${campaign.image}"
          alt="">
      <h2>${campaign.aim}</h2>
      <h5>946 have endorsed Madeleine Roberts’s campaign. Let’s get to 1,000!</h5>
      <button>ENDORSE NOW WITH A CLICK</button>
      <p id="first-paragraph">After the devastating news this weekend of the death of four young people, including two
          students at Newcastle University due to drug related incidents, it has been made very clear that the
          availability of free drug testing kits being made easily accessible to young people <b>would drastically
              reduce the risk of another tragedy like this reoccurring.</b>
          Drug testing kits are able to detect dangerous substances in drugs that can be potentially life threatening
          and this will allow those who choose to take drugs to be better equipped and have a greater understanding of
          what they are putting into their bodies, leading them to <b>make a more educated, and therefore safer,
              decision.</b>
          The Students’ Union have a responsibility to make sure that university students stay safe and therefore we
          believe that the SU is the ideal place to offer these testing kits, much like free condoms and STI kits are
          made available to encourage safe sex. The SU is accessible to all students and has the ability to make
          picking up a drug testing kit free, easy and anonymous.
          Understandably, the safest way to take drugs is to not take them at all, however we know that people still
          choose to do them and in 2018, the National Union of Students found that around 2 in 5 students have taken
          drugs.
          This demonstrates just how many people are at risk every year <b>and how many lives can be saved by offering
              these tests for free.</b> In no way will the availability of tests encourage more people to take drugs,
          but it will make it much more safe for the thousands of students who choose to.
      </p>
      <a href="">Visit Campaign Page</a>
      <div id="block">
          <p>At People-s-Power, we believe that with our collective voice we can cause the change that we need within
              our local communities. Do you have any social policy matter or human right issues within your local
              community that you would love to change?</p>
          <a href="">Start a Campaign Today</a>
      </div>
      <p id="the-person"> The person (or organisation) who started this campaign is not affiliated with People-s-Power
          Technology. People-s-Power Technologydid not start this campaign and is not responsible for the campaign
          content.
      </p>
      <a href="">
          <p>Unsubscribe from this kind of emails</p>
      </a>
      <a href="">
          <p> Unsubscribe from all People-s-Power Technology emails</p>
      </a>
      <a href="">
          <p> Manage your email preferences · Privacy policy</p>
      </a>
      <a href="">
          <p>We’d love to hear from you! Contact us through our help desk.</p>
      </a>

      <h3>People-s-Power</h3>
      <p>Thanks Evans for endorsing <b>NIGERIA, SUPPORT YOUR SMALL BUSINESSES TO SURVIVE COVID-19</b></p>
      <div class="img"><img id="me" width="350px" height="250px"
              src="https://images.unsplash.com/photo-1655618746151-aed1c3eb718c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""></div>
      <h3 id="class">Take the next step to help this Campaign</h3>
      <p>You are a hero for endorsing, Evans! Can you now share this campaign to help reach its campaign goal?</p>
      <div class="buttons">
          <button class="button" id="facebook">
              <a href="">
                  <img class="icon"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
                      alt="">
                  Facebook
              </a>
          </button>
          <button class="button" id="whatsapp"><a href="">
                  <img src="https://thumbs.dreamstime.com/b/whatsapp-icon-isolated-white-vector-file-included-whatsapp-flat-icon-164609425.jpg"
                      alt="" class="icon">
                  Send a message via whatsapp
              </a>
          </button>
          <button class="button" id="tweet">
              <a href="">
                  <img src="https://cdn.freebiesupply.com/logos/large/2x/twitter-3-logo-png-transparent.png" class="icon" alt="">
                  Tweet your followers
              </a>
          </button>
      </div>
      <p class="remove">Didn’t endorse this campaign? <a href="">Remove your endorsement</a></p>
      <h3>Explore other campaigns promoted by People-s-Powerusers</h3>
      <div class="explore">
          <div class="explore1">
              <img width="150px" height="100px"
                  src="https://images.unsplash.com/photo-1655618746151-aed1c3eb718c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="">
              <div>
                  <p><b>ID2020</b></p>
                  <a href="">View Campaign</a>
              </div>
          </div>
          <div class="explore2">
              <img width="150px" height="100px"
                  src="https://images.unsplash.com/photo-1655618746151-aed1c3eb718c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="">
              <div>
                  <p><b>Sack Racist Dr Jean-Paul Mira and Camille Locht Now</b></p>
                  <a href="">View Campaign</a>
              </div>
          </div>
      </div>

  </div>
</body>
  `
}