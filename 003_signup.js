let state = "off";
/* img-status 이미지 변경 */
function checkIcon() {
    console.log("ddd");
    
    let checkStatus = document.getElementById("img-status");
    
    if(state == "off"){
        checkStatus.src = "images/icon_check.png";
        state = "on";
    } else if(state == "on"){
        checkStatus.src = "images/icon_check_empty.png";
        state = "off";
    }
}