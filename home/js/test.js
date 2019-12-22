window.onload = function() {
    var box = document.getElementById("box");
    var ul = document.getElementById("list");
    var img = document.getElementById("pic");
    var left_btn = document.getElementById("left");
    var right_btn = document.getElementById("right");
    var allLi = document.getElementsByTagName("li");
    //第一步 ：第一个按钮设置为红色
    var currentNUM = 1;
    allLi[0].style.backgroundColor = "red";
    //第二步：让图片循环改变
    var timer = setInterval(startloop, 2000);
    function startloop() {
        currentNUM++
        changeIMG()
    }
    function changeIMG() {
        if(currentNUM == 0) {
            currentNUM = 8;
        }
        if(currentNUM == 9) {
            currentNUM = 1;
        }
        //img.src = "img/" + currentNUM + ".jpg";
        img.src="images/index/lun-bo-tu-0"+currentNUM+".jpg";
        //清空小圆点颜色，改变下一个颜色
        for(var i = 0; i < allLi.length; i++) {
            allLi[i].style.backgroundColor = "#aaa";
        }
        allLi[currentNUM - 1].style.backgroundColor = "red"; //设置当前的颜色的
    };

    //第三步：鼠标进入box和离开
    box.addEventListener("mouseover", function() {
        //左右显示出来
        left_btn.style.display = "block";
        right_btn.style.display = "block";
        window.clearInterval(timer);
    }, false);
    box.addEventListener("mouseout", function() {
        left_btn.style.display = "none";
        right_btn.style.display = "none";
        timer = setInterval(startloop, 2000);
    }, false);
    //第四步： 点击左右按钮
    left_btn.addEventListener("mouseover", deep, false);
    left_btn.addEventListener("mouseout", nodeep, false);
    right_btn.addEventListener("mouseover", deep, false);
    right_btn.addEventListener("mouseout", nodeep, false);
    left_btn.addEventListener("click", function() {
        currentNUM--;
        changeIMG();
    }, false);
    right_btn.addEventListener("click", startloop, false);

    function deep() {
        this.style.backgroundColor = "rgba(0,0,0,0.4)";
    };
    function nodeep() {
        this.style.backgroundColor = "rgba(0,0,0,0.2)";
    };
    //第五步：小圆点的转换
    for(var i = 0; i < allLi.length; i++) {
        allLi[i].index = i + 1;
        allLi[i].addEventListener("mouseover", function() {
            allLi[0].style.backgroundColor = "#aaa"
            currentNUM = this.index;
            console.log(currentNUM)
            changeIMG();
        }, false);
    }

};