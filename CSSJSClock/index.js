const sec = document.querySelector(".clock__sec");
const min = document.querySelector(".clock__min");
const hrs = document.querySelector(".clock__hrs");

function setDate() {
    const now = new Date();

    const secNow = now.getSeconds();
    const secDeg = secNow * 6 + 90;
    sec.style.transform = `rotate(${secDeg}deg)`;

    const minNow = now.getMinutes();
    const minDeg = minNow * 6 + 90;
    min.style.transform = `rotate(${minDeg}deg)`;

    const hrsNow = now.getHours();
    const hrsDeg = hrsNow * 30 + 90;
    hrs.style.transform = `rotate(${hrsDeg}deg)`;
}

setInterval(setDate, 1000);