import React,{useState} from "react";
import Tier from "./Tier";
import TimeFrame from "./TimeFrame";
import ToggleSwitch from "./ToggleSwitch";
import { BiChevronDown } from 'react-icons/bi';
import ToggleSwitch2 from "./ToggleSwitch2";


function MainCard(props) {
  const [value, setValue] = useState(false);
  function slide() {
  var elem = document.getElementById("box");
  elem.classList.toggle('hide');
}

const handleOnClick = () => {
  props.mode("USD");
}

  return (
    <div className="main-card">
      <div className="container">
        <h1 className="head">ROI Calculator</h1>
        
        <div className="toggle">
          <h4>CAKE</h4> &nbsp;
          <ToggleSwitch onClick={handleOnClick} /> &nbsp;
          <h4>USD</h4>
        </div>

        <br />

        <div className="input-container">
          <input type="number" name="value" placeholder="0.000" id=" "  />
          <span className="unit">{props.current}</span>
        </div>

        <div className="options">
          <div className="options-useBal">USE BALANCE</div>
            <div className="options-d">$1000</div>
            <div className="options-d2">$100</div>
        </div>

         <br /> <br /> <br />   

        <TimeFrame />

        <div style={{display: "flex", justifyContent:"space-between", margin: "15px 0"}}>
           <h3>Enable Accelerated APY</h3>
           <div style={{float:"right"}}>

          <ToggleSwitch2 
          isOn={value}
          onColor="#f8c400"
          handleToggle={() => setValue(!value)}
           />
           </div>
        </div>

        <Tier />
        <div className="input-container">
          <p>ROI at Current Rate</p>
          <input type="number" name="value" placeholder="0.000" id=" " style={{margin: "10px 0"}} />
          <span className="unit2">USD</span>
          <p>~ 0.000 CAKE + 0.000000 DON</p>
        </div>

        <div className="buttons">
        <button type="button" className="btn btn-dark">Apply</button>
        <button type="button" className="btn btn-outline-dark">Cancel</button>
        </div>  

        <div className="toggleDetails">
        
            <p>Show Details</p> 
            <button onClick={slide} >

            <BiChevronDown size={25}/>
            </button>
            
          
        </div>

      </div>
        <div className="box" id="box">
          <div className="hidden-notes">
            <div className="hid-head">

          <h3>APY</h3>

            </div>
              <ul>
                <li>Calculated based on current rates.</li>
                <li>All figures are estimates provided for your convenience only, and by no means represent guaranted returns.</li>
              </ul>
          </div>
              
            </div>
    </div>
  );
}


export default MainCard;
