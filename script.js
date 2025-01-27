// **************************Calculator Body*************************************

const calciBody = document.getElementById("calci-body");


// ****************************Status Bar *******************

const statusBar = document.createElement("div")
statusBar.id = "status-bar"
statusBar.innerHTML = `<div>12:50</div>
                        <div id="device-status" ></div>`
calciBody.appendChild(statusBar)


const deviceStatus = document.getElementById("device-status")
deviceStatus.innerHTML = `<div style="height:20px;" > <img width="16px" style=" filter:invert(100%); " src="/assets/signal-status.png"  /> </div>
                          <div style="height:20px;" > <img width="16px" style=" filter:invert(100%); " src="/assets/wifi.png"  /> </div>
                          <div style="height:14px;" > <img width="16px" style=" filter:invert(100%); " src="/assets/battery.png"  /> </div>`
statusBar.appendChild(deviceStatus)


// *********************************Mode Button*************************

const modeButton = document.createElement("div")
modeButton.id = "mode-button"
modeButton.innerHTML = `<div class="mode-icon" > <img width="100%" src="/assets/sun.png" /> </div>
                        <div class="mode-icon" > <img width="100%" src="/assets/moon.png" /> </div>`
calciBody.appendChild(modeButton)


// ***********************************Display Screen***************************

const displayScreen = document.createElement("input")
displayScreen.id = "display-screen"
calciBody.appendChild(displayScreen)

// ****************************************Keypad**************************************

const keypad = document.createElement("div")
keypad.id = "keypad"

const keyArray = [ ["AC","⌫","%","÷"], ["7","8","9","×"], ["4","5","6","-"], ["1","2","3","+"], ["z","0",".","="]  ]

for(let i=1; i<6; i++){
    const row = document.createElement("div")
    row.id = `row${i}`
    row.className = "rows"
    keypad.appendChild(row)

    for(let j=1; j<5; j++){
        const key = document.createElement("button")
        key.id = `row${i}-key${j}`
        key.className = "keys"
        key.innerHTML =`${keyArray[i-1][j-1]}`
        key.value =`${keyArray[i-1][j-1]}`
        row.appendChild(key)

        key.addEventListener('click',(event)=>{
            const keyValue = event.currentTarget.value
            if(keyValue === "AC"){
                displayScreen.value = "";
            } else if(keyValue === "⌫"){
                displayScreen.value = displayScreen.value.slice(0,-1);
            } else if(keyValue === "="){
                try{
                    displayScreen.value = eval(displayScreen.value.replace("×","*").replace("%","/"))
                } catch(error){
                    displayScreen.value = "Error";
                }
                
            } else{
                displayScreen.value += keyValue
            }
        })
    }
    
}



calciBody.appendChild(keypad)


