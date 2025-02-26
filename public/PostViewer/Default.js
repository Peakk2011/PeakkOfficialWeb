const Allcontent = document.getElementById("showallcontent");
const ViewerContent = document.getElementById("cardviewercontent");
const Unhighlight = document.getElementById("Unhighlight");
const PostDes = document.getElementById("PostDesip");

function UsingOverlay() {

    ViewerContent.style.opacity = "0";

    setTimeout(() => {
        Allcontent.style.display = "flex";
        setTimeout(() => {
            Allcontent.style.opacity = "1";
        }, 20);
    }, 250);

}

function UsingCloseOverlay() {

    Allcontent.style.opacity = "0";

    setTimeout(() => {
        ViewerContent.style.opacity = "1";
        Allcontent.style.display = "none";
    }, 300);

}

function FuncMatch(x, height) {
    if (x.matches) {
        Unhighlight.innerHTML = "แหล่งที่มาสําหรับโพสต์นี้";
    } else {
        Unhighlight.innerHTML = "แหล่งที่มา";
    }

    if (height.matches) {
        PostDes.innerHTML = "หากต้องการจะอ่านเนื่อหาในโพสต์กรุณากดปุ่ม 'อ่านข้อความทั้งหมด'";
    } else {
        PostDes.innerHTML = "พรุ่งนี้ก็ปีใหม่แล้วนะครับ ตอนนี้ @peakkofficial นั้นก็ได้รับทําเว็บมา 9 เดือนแล้วครับ และขอ Happy new year กับทุกคนและโชคดีกันครัับ...";
    }
}

var x = window.matchMedia("(max-width: 460px)");
var height = window.matchMedia("(max-height: 850px)");

FuncMatch(x, height);

x.addEventListener("change", function () {
    FuncMatch(x, height);
});

height.addEventListener("change", function () {
    FuncMatch(x, height);
});
