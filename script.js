// **************************Calculator Body*****************

const calciBody = document.getElementById("calci-body");


// ****************************Status Bar *******************

const statusBar = document.createElement("div")
statusBar.id = "status-bar"
statusBar.innerHTML = `<div class="time-dark" >12:50</div>
                        <div id="device-status" ></div>`
calciBody.appendChild(statusBar)


const deviceStatus = document.getElementById("device-status")
deviceStatus.innerHTML = `<div style="height:20px;" > <img class="device-status-dark" width="16px" " src="/assets/signal-status.png"  /> </div>
                          <div style="height:20px;" > <img class="device-status-dark" width="16px" " src="/assets/wifi.png"  /> </div>
                          <div style="height:14px;" > <img class="device-status-dark" width="16px" " src="/assets/battery.png"  /> </div>`
statusBar.appendChild(deviceStatus)



// *********************************Mode Button*************************

const modeButtonDiv = document.createElement("div")
modeButtonDiv.id = "mode-button-div";
modeButtonDiv.innerHTML = `<div class="mode-icon" id="moon" > <img src="/assets/moon.png" width="28px" /> </div>
                            <div id="mode-button" class="mode-button-dark"></div>
                            <div class="mode-icon" id="sun" > <img src="/assets/sun.png" width="100%" /> </div>`
calciBody.appendChild(modeButtonDiv)



const modeButton = document.getElementById("mode-button")
modeButton.innerHTML = `<button id="dark-mode" class="dark-mode" ></button>`

const toggleButton = document.getElementById("dark-mode")
const time = document.getElementsByClassName("time-dark")[0]


toggleButton.addEventListener('click',()=>{
    
    toggleButton.classList.toggle("light-mode")
    modeButton.classList.toggle("mode-button-light")
    time.classList.toggle("time-light")
    statusBar.classList.toggle("status-bar-light")
    modeButtonDiv.classList.toggle("calci-body-light")
    displayScreen.classList.toggle("display-screen-light")
    keypad.classList.toggle("keypad-light")
    calciBody.classList.toggle("calci-body-light")
    
    for(let i=0; i<3; i++){
        const deviceStatusLight = document.getElementsByClassName("device-status-dark")[i]
        deviceStatusLight.classList.toggle("device-status-light")
    }
})


// ***********************************Display Screen***************************

const displayScreen = document.createElement("input")
displayScreen.id = "display-screen"
calciBody.appendChild(displayScreen)



// ****************************************Keypad**************************************


const keypad = document.createElement('div')
keypad.id = "keypad"
calciBody.appendChild(keypad)


const keyArray = ["AC","⌫","%","÷","7","8","9","×","4","5","6","-","1","2","3","+","🔍","0",".","="]

for(let i=1; i<=20; i++){
    const key = document.createElement('button')
    key.id = `key${i}`
    key.className = "keys"
    key.value = `${keyArray[i-1]}`
    key.innerHTML = `${keyArray[i-1]}`
    keypad.appendChild(key)
}


document.addEventListener("DOMContentLoaded", () => {
    const displayScreen = document.getElementById("display-screen");
    const keys = document.querySelectorAll(".keys");

    keys.forEach((key) => {
        key.addEventListener("click", () => {
            const keyValue = key.value;

            if (keyValue === "AC") {
                displayScreen.value = "";
            }else if (keyValue === "⌫") {
                displayScreen.value = displayScreen.value.slice(0, -1);
            } else if (keyValue === "=") {
                try {
                    displayScreen.value = eval(displayScreen.value.replace("×","*").replace("÷","/"));
                } catch (error) {
                    displayScreen.value = "Error";
                }
            } else {
                displayScreen.value += keyValue;
            }
        });
    });


   
});
