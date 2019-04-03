var a = document.querySelector("#b1");
var b = document.querySelector(".title");

a.addEventListener("mousedown",bt1,false);
a.addEventListener("mouseup",bt2,false);

function bt1 (){
    b.textContent = "還沒開始更新拉 幹!";
    a.textContent = "返回";
    b.className = "title1";
    
}
function bt2 (){
    b.textContent = "藍奕濡的個人介紹網站";
    a.textContent = "看更多";
    b.className = "title";
}