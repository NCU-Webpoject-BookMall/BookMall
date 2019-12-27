window.onload=function () {
    header();
    roll();
    pages();
};
function roll() {
    var roll=document.getElementsByClassName("roll")[0];
    var box =document.getElementById("box");
    var ul = document.getElementById("list");
    var img =document.getElementById("pic");
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
        for(var i = 0; i < allLi.length; i++) {
            allLi[i].style.backgroundColor = "#aaa";
        }
        allLi[currentNUM - 1].style.backgroundColor = "red";
    };
    for(var i = 0; i < allLi.length; i++) {
        allLi[i].literature = i + 1;
        allLi[i].addEventListener("mouseover", function() {
            allLi[0].style.backgroundColor = "#aaa";
            currentNUM = this.literature;
            changeIMG();
        }, false);
    }
}
function pages() {
    var change_page_dot=document.getElementsByClassName("change-page-dot");
    var pages=document.getElementsByClassName("books-page");
    console.log(pages);
    change_page_dot[0].style.backgroundColor = "red";
    pages[0].classList.add("current-show");
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
        for (let i=0;i<pages.length;i++){
            pages[i].classList.remove("current-show");
        }
        pages[currentNum-1].classList.add("current-show");
        for (let i=0;i<change_page_dot.length;i++){
            change_page_dot[i].style.backgroundColor="#17a2b8";
        }
        change_page_dot[currentNum-1].style.backgroundColor="red";
    }
    for (let i=0;i<change_page_dot.length;i++){
        change_page_dot[i].literature=i+1;
        change_page_dot[i].addEventListener("mouseover",function () {
            change_page_dot[0].style.backgroundColor = "#17a2b8";
            currentNum=this.literature;
            change_page();
        },false);
    }
}
