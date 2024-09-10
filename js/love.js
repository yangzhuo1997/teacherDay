function inner() {

    var box = document.getElementsByClassName('photo')[0];
    if (box) {


        function init() {
            var width = box.offsetWidth;
            var count = parseInt(width / 1920 * 1280);
            for (var i = 0; i < count; i++) {
                var size = parseInt(ran(200, 120) / 10);
                var ele = document.createElement('div');
                ele.classList.add('item');
                ele.style.width = size + 'px';
                ele.style.height = size + 'px';
                ele.style.left = ran(0, 95) + '%';
                ele.style.top = ran(20, 80) + '%';
                ele.style.animationDelay = ran(0, 30) / 10 + 's';
                box.appendChild(ele);
            }
        }

        function ran(min, max) {
            min = parseInt(min);
            max = parseInt(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        init();


        setInterval(function() {
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w1').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w2').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w3').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w4').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w5').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w6').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w7').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w8').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w9').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w10').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w11').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w12').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w13').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w14').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w15').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w16').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w17').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w18').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w19').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w20').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w21').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w22').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w23').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w24').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w25').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w26').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w27').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w28').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w29').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w30').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w31').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w32').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w33').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w34').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w35').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w36').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w37').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w38').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w39').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w40').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w41').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w42').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w43').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w44').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w45').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w46').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w47').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w48').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w49').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
        }, 2000)

    }
}
// var usename = ['wjy', 'hyj', 'sjb']
var use_name = document.getElementById('use')
var btn = document.getElementById('btn');
//  var body = document.getElementsByTagName('body')[0]
//  console.log(body)
btn.onclick = function() {
    // if(use_name.value === 'Aria希斌'){
    //     zxb()
    // }else if(use_name.value === '赵建利'){
    //     zjl()
    // }else if(use_name.value === '单海英'){
    //     shy()
    // }else{
    //     alert('没你啥事')
    // }
  
 zxb();
    inner()
}

function zxb() {
    document.body.innerHTML = `<div class="photo">
                                    <video src="../video/love.mp4" controls = 'controls' autoplay="autoplay" loop='loop' preload></video>
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/儿歌 - 虫儿飞.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" ></embed>
                                <div class='w' id="w1">教师节快乐</div>
                                <div class='w' id="w2">您的教诲如春风细雨，滋润着我们成长的心田</div>
                                <div class='w' id="w3">您是点亮学生未来道路的明灯，我们永远感激您的辛勤付出</div>
                                <div class='w' id="w4">教师节快乐</div>
                                <div class='w' id="w5">老师永远年轻</div>
                                <div class='w' id="w6">Aria老师身体健康</div>
                                <div class='w' id="w7">Aria老师天天开心</div>
                                <div class='w' id="w8">Aria老师一天比一天美</div>
                                <div class='w' id="w9">您用心灵之光点亮了我们前行的道路，您的教诲将永远激励着我们</div>
                                <div class='w' id="w10">您是我们心中永远的楷模，您的善良和慈爱让我们感受到了无限温暖</div>
                                <div class='w' id="w11">感谢您的耐心和关怀，您的教导让我们变得更加坚强和自信</div>
                                <div class='w' id="w12">在您的教导下，我们不断进步，感谢您为我们的未来铺就了坚实的基石</div>
                                <div class='w' id="w13">您的爱心和耐心让我们感受到了家的温暖，在您身边我们感到无比安心</div>
                                <div class='w' id="w14">感谢您无私的奉献和悉心的教导，您是我们永远的良师益友</div>
                                <div class='w' id="w15">Aria老师越活越年轻</div>
                                <div class='w' id="w16">Aria老师风流倜傥</div>
                                <div class='w' id="w17">Aria老师天天开心</div>
                                <div class='w' id="w18">Aria老师一天比一天美</div>
                                <div class='w' id="w19">Aria老师你最好</div>
                                <div class='w' id="w20">Aria老师教师节快乐</div>
                                <div class='w' id="w21">AriaAria老师幸福每一天</div>
                                <div class='w' id="w22">Aria老师风度翩翩</div>
                                <div class='w' id="w23">Aria老师你真帅</div>
                                <div class='w' id="w24">Aria老师你是世界上最棒的人</div>
                                <div class='w' id="w25">您的爱心和耐心让我们感受到了家的温暖，在您身边我们感到无比安心</div>
                                <div class='w' id="w26">您的爱心和耐心让我们感受到了家的温暖，在您身边我们感到无比安心</div>
                                <div class='w' id="w27">Aria老师越活越年轻</div>
                                <div class='w' id="w28">AriaAria老师身体健康</div>
                                <div class='w' id="w29">Aria老师天天开心</div>
                                <div class='w' id="w30">您的爱心和耐心让我们感受到了家的温暖，在您身边我们感到无比安心</div>
                                <div class='w' id="w31">老师器宇轩昂</div>
                                <div class='w' id="w32">Aria老师教师节快乐</div>
                                <div class='w' id="w33">Aria老师你最美</div>
                                <div class='w' id="w34">Aria老师英明神武</div>
                                <div class='w' id="w35">Aria老师越来越白</div>
                                <div class='w' id="w36">Aria老师教师节快乐</div>
                                <div class='w' id="w37">Aria老师越活越年轻</div>
                                <div class='w' id="w38">AriaAria老师身体健康</div>
                                <div class='w' id="w39">Aria老师风流倜傥</div>
                                <div class='w' id="w40">Aria老师一天比一天帅</div>
                                <div class='w' id="w41">感谢您无私的奉献和悉心的教导，您是我们永远的良师益友</div>
                                <div class='w' id="w42">Aria老师教师节快乐</div>
                                <div class='w' id="w43">AriaAria老师幸福每一天</div>
                                <div class='w' id="w44">Aria老师玉树临风</div>
                                <div class='w' id="w45">Aria老师你最帅</div>
                                <div class='w' id="w46">感谢您无私的奉献和悉心的教导，您是我们永远的良师益友</div>
                                <div class='w' id="w47">Aria老师教师节快乐</div>
                                <div class='w' id="w48">感谢您无私的奉献和悉心的教导，您是我们永远的良师益友</div>
                                <div class='w' id="w49">感谢您无私的奉献和悉心的教导，您是我们永远的良师益友</div>
                                <div class='w' id="w50">感谢您无私的奉献和悉心的教导，您是我们永远的良师益友</div>`
}