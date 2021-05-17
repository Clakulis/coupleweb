mai = document.getElementById("mai")
us = document.getElementById("us")
quan = document.getElementById("quan")
body = document.getElementById("body")
content = document.getElementById("content")
title = document.getElementById("title")
header = document.getElementById("header")

title.style.cursor = "pointer"
mai.style.cursor = "pointer"
us.style.cursor = "pointer"
quan.style.cursor = "pointer"

title.addEventListener("click", ()=>{
    header.style.backgroundColor = "white"
    content.innerHTML = `
<div id="home">
    <div id="home-1">
        <img src="images/4.jpg" alt="nmai" style="width: 300px;">
    </div>
    <div id="home-2">
        <p>Our love has been:</p>
        <p id="dateCount"></p>
    </div>
    <div id="home-3">
        <img src="images/5.jpg" alt="nmai" style="width:300px">
    </div>
</div>
            `
})

mai.addEventListener("click", ()=>{
    header.style.backgroundColor = "#b19cd9"
    content.innerHTML = `
    <div class="us-content">
                <img src="images/nmai/extra3.png" class = "us-img" alt="">
                đi chơi không quyên nhiệm vụ
            </div>
            <div class="us-content">
                <img src="images/nmai/21.01.01.png" class = "us-img" alt="">
                ca sí
            </div>
            <div class="us-content">
                <img src="images/nmai/21.01.02.png" class = "us-img" alt="">
                một cái mặt đang cười?
            </div>
            <div class="us-content">
                <img src="images/nmai/21.01.04.png" class = "us-img" alt="">
                quạu
            </div>
            <div class="us-content">
                <img src="images/nmai/21.01.05.png" class = "us-img" alt="">
                dọa ma
            </div>
            <div class="us-content">
                <img src="images/nmai/21.01.07.jpg" class = "us-img" alt="">
                hưởng thụ
            </div>
            <div class="us-content">
                <img src="images/nmai/21.01.08.jpg" class = "us-img" alt="">
                thông minh
            </div>
            <div class="us-content">
                <img src="images/nmai/21.01.09.jpg" class = "us-img" alt="">
                đeo lens
            </div>
            <div class="us-content">
                <img src="images/nmai/21.01.10.png" class = "us-img" alt="">
                dead
            </div>
            <div class="us-content">
                <img src="images/nmai/21.01.11.jpg" class = "us-img" alt="">
                nocmai the platypus
            </div>
            <div class="us-content">
                <img src="images/nmai/21.01.15.jpg" class = "us-img" alt="">
                ngủ say như heo
            </div>
            <div class="us-content">
                <img src="images/nmai/21.01.16.png" class = "us-img" alt="">
                chơi lô
            </div>
            <div class="us-content">
                <img src="images/nmai/21.01.17.png" class = "us-img" alt="">
                đắp cái mặt nạ hú hồn
            </div>
            <div class="us-content">
                <img src="images/nmai/21.02.05.png" class = "us-img" alt="">
                những chuỗi ngày kéo dài
            </div>
            <div class="us-content">
                <img src="images/nmai/21.02.06.png" class = "us-img" alt="">
                cùng chú áo đen
            </div>
            <div class="us-content">
                <img src="images/nmai/21.02.07.PNG" class = "us-img" alt="">
                và anh vịt vịt
            </div>
            <div class="us-content">
                <img src="images/nmai/21.02.08.png" class = "us-img" alt="">
                nhìn giề
            </div>
            <div class="us-content">
                <img src="images/nmai/21.02.12.png" class = "us-img" alt="">
                hắt xì hơi
            </div>
            <div class="us-content">
                <img src="images/nmai/21.02.13.png" class = "us-img" alt="">
                suprise!
            </div>
            <div class="us-content">
                <img src="images/nmai/extra1.png" class = "us-img" alt="">
                khó chịu
            </div>
            <div class="us-content">
                <img src="images/nmai/21.02.17.png" class = "us-img" alt="">
                dỗiiii
            </div>
            <div class="us-content">
                <img src="images/nmai/21.02.22.png" class = "us-img" alt="">
                nhìn t béo chưa này
            </div>
            <div class="us-content">
                <img src="images/nmai/21.05.12.png" class = "us-img" alt="">
                cây mai
            </div>`
})

us.addEventListener("click", ()=>{
    document.getElementById("header").style.backgroundColor = "pink"
    content.innerHTML = `
    <div class="us-content">
                <img src="images/5.5.jpg" class = "us-img" alt="">
                quen nhau qua orient
            </div>
            <div class="us-content">
                <img src="images/6.jpg" class = "us-img" alt="">
                chụp ảnh khai giảng cùng nhau
            </div>
            <div class="us-content">
                <img src="images/7.jpg" class = "us-img" alt="">
                lần đầu hẹn hò về nhận văn tế 
            </div>
            <div class="us-content">
                <img src="images/8.jpg" class = "us-img" alt="">
                đi ep
            </div>
            <div class="us-content">
                <img src="images/9.jpg" class = "us-img" alt="">
                2n1d
            </div>
            <div class="us-content">
                <img src="images/10.jpg" class = "us-img" alt="">
                ra sân bóng quay vid con rắn =))
            </div>
            <div class="us-content">
                <img src="images/11.jpg" class = "us-img" alt="">
                đập hộp 
            </div>
            <div class="us-content">
                <img src="images/12.jpg" class = "us-img" alt="">
                kỉ niệm 10p yêu nhau
            </div>
            <div class="us-content">
                <img src="images/13.jpg" class = "us-img" alt="">
                20/11
            </div>
            <div class="us-content">
                <img src="images/14.jpg" class = "us-img" alt="">
                1 tháng
            </div>
            <div class="us-content">
                <img src="images/15.jpg" class = "us-img" alt="">
                lần đầu tiên và duy nhất đi hẹn hò cách trường ams hơn 3km
            </div>
            <div class="us-content">
                <img src="images/16.jpg" class = "us-img" alt="">
                trist
            </div>
            <div class="us-content">
                <img src="images/17.jpg" class = "us-img" alt="">
                đi học bài ?
            </div>
            <div class="us-content">
                <img src="images/18.jpg" class = "us-img" alt="">
                đi ăn dooki bị mẹ gank =))
            </div>
            <div class="us-content">
                <img src="images/19.jpg" class = "us-img" alt="">
                lãi
            </div>
            <div class="us-content">
                <img src="images/20.jpg" class = "us-img" alt="">
                valentine
            </div>
            <div class="us-content">
                <img src="images/21.jpg" class = "us-img" alt="">
                1 phút tự thú
            </div>
            <div class="us-content">
                <img src="images/22.5.jpg" class = "us-img" alt="">
                độc thân
            </div>
            <div class="us-content">
                <img src="images/22.jpg" class = "us-img" alt="">
                thi toán
            </div>`
})

quan.addEventListener("click", ()=>{
    header.style.backgroundColor = "#85A1F2"
    content.innerHTML=''
})

var anniDate = new Date("Nov 18, 2020 22:07:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = now - anniDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24 ));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("dateCount").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
}, 1000);


