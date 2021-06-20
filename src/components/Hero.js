import React from "react";
import IMG_LOGO from "../assets/logo512.jpeg";


export default function Chart() {
    return (
    	<div class="con_staking">
          <div class="con_staking">
            <div class="spin_select">
              <input type="checkbox" class="sc-cBNfnY hrtCUK"/>
              <div class="sc-gWHgXt kGCxUh">
              </div>
            </div>
              <div color="text" class="spin_text"> Staked only
              </div>
            </div>
            <div class="active_div">
              <button type="button" class="active">Active</button>
              <button class="inactive" type="button">Inactive</button>
          </div>
        </div>
    )
}