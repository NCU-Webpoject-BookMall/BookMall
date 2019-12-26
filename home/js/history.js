window.onload=function () {
    header();
    /*轮播图效果：*/
    roll();
    /*新书上架-分页*/
    newBook_changePages();

};

/*主编推荐-分页*/
function newBook_changePages() {
    //小圆点
    var change_page_dot=document.getElementsByClassName("change-page-dot");
    //所有的页
    var pages=document.getElementsByClassName("books-page");
    console.log(pages);
    //第一步 ：第一个按钮设置为红色
    change_page_dot[0].style.backgroundColor = "red";
    pages[0].classList.add("current-show");
    //第二步：自动循环换页
    var timer=setInterval(beginloop,5000);
    var currentNum=1;
    function beginloop() {
        currentNum++;
        change_page();
    }
    function change_page() {
        if(currentNum == 0) {
            currentNum = 4;
        }
        if(currentNum == 5) {
            currentNum = 1;
        }
        //先隐藏所有页
        for (let i=0;i<pages.length;i++){
            pages[i].classList.remove("current-show");
        }
        //再显示正确页
        pages[currentNum-1].classList.add("current-show");
        //先清除所有圆点颜色
        for (let i=0;i<change_page_dot.length;i++){
            change_page_dot[i].style.backgroundColor="#17a2b8";
        }
        //再设置当前圆点的颜色
        change_page_dot[currentNum-1].style.backgroundColor="red";
    }
    //第三步：鼠标手动换页
    for (let i=0;i<change_page_dot.length;i++){
        change_page_dot[i].literature=i+1;
        change_page_dot[i].addEventListener("mouseover",function () {
            change_page_dot[0].style.backgroundColor = "#17a2b8";
            currentNum=this.literature;
            change_page();
        },false);
    }
}
/*轮播图*/
function roll() {
    var roll=document.getElementsByClassName("roll")[0];
    var box =document.getElementById("box");
    var ul = document.getElementById("list");
    var img =document.getElementById("pic");
    var left_btn =document.getElementById("left");
    var right_btn = document.getElementById("right");
    var allLi =document.getElementsByClassName("li");
    var currentNUM = 1;
    allLi[0].style.backgroundColor = "red";
    var timer = setInterval(startloop, 2000);
    function startloop() {
        currentNUM++;
        changeIMG();
    }
    function changeIMG() {
        if(currentNUM == 0) {
            currentNUM = 8;
        }
        if(currentNUM == 9) {
            currentNUM = 1;
        }
        img.src="images/history/roll-0"+currentNUM+".jpg";
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

    //第四步：小圆点的转换
    for(var i = 0; i < allLi.length; i++) {
        allLi[i].literature = i + 1;
        allLi[i].addEventListener("mouseover", function() {
            allLi[0].style.backgroundColor = "#aaa";
            currentNUM = this.literature;
            //console.log(currentNUM);
            changeIMG();
        }, false);
    }
}

//将NodeList转换成Array
function transformList(list) {
    var arr = [];
    for(var i = 0; i < list.length; i++) {
        arr.push(list[i]);
    }
    return arr;
}
//查找一个父节点下指定类名的子节点
function getParentdElement(parentNode, childName) {
    //如果父节点parentNode含有指定类名childName，这个节点就是目标节点
    if (parentNode.className.search(childName) !== -1) {
        console.log("if------");
        console.log(parentNode);
        return parentNode;
    } else {
        //父节点不含有指定类名childName，递归查找它的子节点。
        var nodes = parentNode.childNodes;
        //将子节点的list转换成标准数组并且过滤掉Text元素
        nodes = transformList(nodes).filter(function(item){
            if(item.nodeType !== 3) {
                return item;
            } else{ }
        });
        //如果子节点数组中有值，则递归查找
        if(nodes.length) {
            nodes.forEach(function(item) {
                getParentdElement(item, childName);
            });
        }
        console.log("else------");
        console.log(nodes);
    }
}