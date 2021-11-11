const SB = document.getElementById("mySidebar");
const Openbtn = document.getElementById("openbutton")
const Menu1 = document.getElementById("menu1");
const Menu2 = document.getElementById("menu2");
const Menu3 = document.getElementById("menu3");
const Youtube = document.getElementById("yt");
const Title = document.getElementById("title");
const Text = document.getElementById("text");


// Control sidebar movement
Openbtn.onclick=function(){
    SB.classList.toggle('active');
}



function Num1Menu(){
    Title.innerHTML = "11/04";
    Text.innerHTML = "樂天 VS 中信"
    Youtube.src="https://www.youtube.com/embed/TEVQkPC1_ME";
    Youtube.style.visibility="inherit";
}

function Num2Menu(){
    Title.innerHTML = "11/04";
    Text.innerHTML = "富邦 VS 味全"
    Youtube.src="https://www.youtube.com/embed/rc1ny-FnILM";
    Youtube.style.visibility="inherit";
}
function Num3Menu(){
    Title.innerHTML = "11/03";
    Text.innerHTML = "富邦 VS 中信"
    Youtube.src="https://www.youtube.com/embed/1wKDApuqNm0";
    Youtube.style.visibility="inherit";
}