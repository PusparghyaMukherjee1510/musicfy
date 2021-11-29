import React from "react";
import Script from "./script";
function Bottom(props){
    const myBottom=(<div class="bottom">
    <div class="progressbar" id="bar">
      <div class="progressed" id="ahead">
        
      </div>
  </div>
  <div>
      <span><img src="https://secure.webtoolhub.com/static/resources/icons/set68/a7321554.png" id="previous"/></span><span><img src="https://www.maxpixel.net/static/photo/1x/Audio-Start-Video-Sound-Play-Blue-Glossy-Button-158489.png" id="masterplay"/></span><span><img src="https://w1nnersclub.com/wp-content/uploads/2019/10/fast_forward.png" id="next"/></span>
  </div>
      
      <div class="songinfo">
        <img src="https://cdn.wallpapersafari.com/60/77/npx4Pk.gif" alt="music bar" width="42px" id="gif"/>
          
      </div>
  </div>
  );
    return(<div>
        {myBottom}
        </div>);
}
export default Bottom;