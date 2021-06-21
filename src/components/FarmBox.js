import React from "react";
import IMG_LOGO from "../assets/logo512.jpeg";


export default function Chart() {
    return (
        <div class="farm_box">
          <div class="farm_box_bg"></div>
          <div class="farm_name">
            <div width="64" height="64" class="farm_banner_box">
              <img src="https://www.goosedefi.com/images/farms/egg-busd.png" alt="EGG" class="final_banner"/>
            </div>
            <div class="farm_name_box">
              <h2 color="text" class="final_name">GRAIL-USDC LP</h2>
              <div class="fees_box">
                <div class="fees">
                  <svg style={{fill: 'rgb(49, 208, 170)'}} viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ hMHdGP">
                    <path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z">
                    </path>
                  </svg>
                  No Fees
                </div>
                <div class="multiplier">
                  60X
                </div>
              </div>
            </div>
            </div>
            <div class="info_row">
                <div color="text" class="info_row_a">APR:</div>
                <div color="text" class="info_row_b" style={{display: 'flex', alignItems: 'center'}}>
                        <button class="sc-dlfnbm eSZGEW sc-hKgILt fwjcqd" type="button">
                        <svg viewBox="0 0 25 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg">
                            <path d="M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z" fill="#1FC7D4">
                            </path>
                            <path d="M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z" fill="#1FC7D4"></path>
                            <path d="M18.2 15.75H13.2V17.25H18.2V15.75Z" fill="#1FC7D4"></path>
                            <path d="M18.2 13.25H13.2V14.75H18.2V13.25Z" fill="#1FC7D4"></path>
                            <path d="M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z" fill="#1FC7D4"></path>
                            <path d="M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z" fill="#1FC7D4"></path>
                        </svg>
                        </button>0%
                </div>
            </div>
            <div class="sc-eCssSg info_row">
                <div color="text" class="sc-gsTCUz info_row_a">Stake:</div>
                <div color="text" class="sc-gsTCUz info_row_b">GRAIL-USDC LP</div>
            </div>
            <div class="sc-eCssSg info_row">
                <div color="text" class="sc-gsTCUz info_row_a">Earn:</div>
                <div color="text" class="sc-gsTCUz info_row_b">GRAIL</div>
            </div>
            <div class="sc-eCssSg info_row">
                <div color="text" class="sc-gsTCUz info_row_a" style={{fontSize: '24px'}}>Deposit Fee:</div>
                <div color="text" class="sc-gsTCUz info_row_b" style={{fontSize: '24px'}}>0%</div>
            </div>
            <div  style={{paddingTop:'16px'}}>
                <div class='earnings' style={{display:'flex'}}>
                    <div color="secondary" font-size="12px" class="sc-gsTCUz dXVGhj">GRAIL Earned</div>
                    
                </div>
                <div class="earnings_box">
                    <h2 color="textDisabled" class="sc-gsTCUz sc-idOhPF dcRjaX lnUPhx">0</h2>
                    <div class="sc-gInsOo grsaJH">
                        <button disabled="" type="button" class="sc-dlfnbm IcZWJ">Harvest</button>
                    </div>
                </div>
                <div class="staking_box">
                    <div color="secondary" font-size="12px" class="sc-gsTCUz dXVGhj">GRAIL-USDC LP Staked</div>
                    
                </div>
                <button type="button" class="approve_button">Approve Contract</button>
            </div>
            <div class="sc-tYoTV jYOTaZ"></div>
            <div aria-label="Hide or show expandable content" role="button" class="sc-bTvRPi bhoBuD">
                <div color="primary" class="sc-gsTCUz dCVmfN">Details</div>
                    <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                    </svg>
                </div>
            <div class="sc-biBrSq cjrMHQ">
                <div class="sc-kIeTtH cnxSGb">
                    <div class="sc-eCssSg info_row">
                        <div color="text" class="sc-gsTCUz info_row_a">Deposit:</div>
                            <a target="_blank" rel="noreferrer noopener" href="https://exchange.goosedefi.com/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xf952fc3ca7325cc27d15885d37117676d25bfda6" class="sc-gsTCUz sc-lmoMRL dCVmfN iqbrwR sc-hOqqkJ hShxNi" color="primary">GRAIL-USDC LP
                                <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ jcbDsj">
                                    <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="sc-eCssSg info_row">
                            <div color="text" class="sc-gsTCUz info_row_a">Total Value:</div>
                            <div color="text" class="sc-gsTCUz info_row_a">$0</div>
                        </div><div class="sc-eCssSg info_row">
                        <div color="text" class="sc-gsTCUz info_row_a">My Staked Value:</div>
                        <div color="text" class="sc-gsTCUz info_row_a">$0</div>
                    </div>
                    <div class="sc-eCssSg FgqtZ">
                        <a target="_blank" rel="noreferrer noopener" href="https://bscscan.com/token/0x19e7cbecdd23a16dfa5573df54d98f7caae03019" color="primary" class="scan">View on Etherscan</a>
                    </div>
                </div>
            </div>
        </div>
    )
}