// import { Employee } from "src/Entities/Employee.entity";
// import { JobGamLogo } from "./jobgamLogo";





export function ConfirmEmail(): string {
    return `
    <div style="word-spacing: normal; background-color: #d3e1f7; height: 100%">
    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="background-color: #f0f3f4; width: 100%; height: 100%"
    >
      <tbody>
        <tr>
          <td align="center">
            <div
              style="
                background: #f0f3f4;
                background-color: #f0f3f4;
                margin: 0px auto;
                max-width: 511px;
              "
            >
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="
                  background-color: #ffffff;
                  width: 100%;
                  margin-top: 50px;
                  margin-bottom: 15px;
                  padding: 25px;
                "
              >
                <tbody>
                  <tr>
                    <td
                      style="
                        font-size: 0px;
                        text-align: center;
                        vertical-align: middle;
                        text-align: center;
                      "
                    >
                    ${JobGamLogo()}
                     
                    </td>
                    <td style="text-align: right">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="48"
                          height="48"
                        >
                          <circle cx="24" cy="24" r="24" fill="#C4C4C4" />
                        </mask>
                        <g mask="url(#mask0)">
                          <rect
                            x="-9"
                            width="57"
                            height="92.1702"
                            fill="url(#pattern0)"
                          />
                        </g>
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlink:href="#image0"
                              transform="translate(0 -0.000456348) scale(0.00578035 0.00357469)"
                            />
                          </pattern>
                          
                        </defs>
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colspan="2"
                      style="padding: 40px 0px 10px 0px; font-weight: 600"
                    >
                      Hi, ${user.firstname}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding-bottom: 110px; color: #808080">
                      <p>
                        Thank you for joining Jobgam. You can now take advantage
                        of membership benefits.
                      </p>
  
                      <p>
                        Click the button below to confirm that this email is
                        yours. After that, we will be able to send you new
                        vacancies according to your subscriptions
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colspan="2"
                      style="text-align: center; padding-bottom: 20px"
                    >
                      <a href="${host}/verify/${user.verificationToken}/${1}/?utm_source=newsletter&utm_medium=email&utm_campaign=email" style="text-decoration: none">
                        <div
                          style="
                            background-color: #4caf50;
                            padding: 15px 0px;
                            color: #ffffff;
                            font-size: 1.3rem;
                            border-radius: 5px;
                          "
                        >
                          Confirm your email
                        </div></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style="text-align: center; padding-bottom: 30px">
                <tbody>
                  <tr>
                    <td>
                      <p style="margin-bottom: 0px">
                        <a href="${host}/privacy-policy">Privacy Policy</a> | Manage Settings
                      </p>
                      <p style="margin-top: 4px">
                        ©Jobgam Suit 15, Milkah Plaza, Mgbuoba 500272, Port
                        Harcourt
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
    `
}

