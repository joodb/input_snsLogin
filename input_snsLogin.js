/* 로그인창 닫기  */
function closeBtn(){
    const close = document.querySelector("#cont-login");
    close.style.visibility = "hidden";
}

/* 아이디 확인 */
/* 수정 필요 */
function loginValidate(){
    const memberId = document.querySelector("#memberId");
    const memberPw = document.querySelector("#memberPw");
    const checkId = document.querySelector("#checkId");
    const checkMember = document.querySelector("#checkMember");

    if(memberId.value.trim().length == 0){
        memberId.focus();
        checkId.classList.add("input-validate");
        checkId.innerText = "아이디를 입력해주세요.";
        
        return;
    } else if(memberPw.value.trim().length == 0){
        memberPw.focus();
        memberId.classList.add("input-validate");
        checkId.innerText = "아이디 혹은 비밀번호과 일치하지 않습니다.";

        return;
    }
};


/* img-status 이미지 변경 */
let state = "off";

function checkIcon() {
    let checkStatus = document.getElementById("img-status");
    
    if(state == "off"){
        checkStatus.src = "images/icon_check.png";
        state = "on";
    } else if(state == "on"){
        checkStatus.src = "images/icon_check_empty.png";
        state = "off";
    }
}