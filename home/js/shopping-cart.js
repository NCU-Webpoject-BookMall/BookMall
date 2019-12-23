window.onload=function () {
    /*屏幕物理分辨率的宽： window.screen.width*/
    var setWidth=document.getElementsByClassName("screen-width");
    for (let i=0;i<setWidth.length;i++){
        let width=window.screen.width-18;
        setWidth[i].style.width=width+"px";
    }
    /*根据不同页面调整配送地址区域位置*/
    var showArea=document.getElementsByClassName("show-area")[0];
    var rest_margin01=window.screen.width-18-960;
    showArea.style.margin="0 "+rest_margin01/2+"px";
    /*根据不同页面调整中间区域位置*/
    var content_middle=document.getElementsByClassName("content-middle")[0];
    var rest_margin02=window.screen.width-18-960;
    content_middle.style.margin="20px "+rest_margin02/2+"px";

    /*登录后-点击退出登录 后显示 “登录”*/
    var logout=document.getElementById("logout");
    var successLogin=document.getElementsByClassName("success-login")[0];
    var notLogin=document.getElementsByClassName("not-login")[0];
    notLogin.style.display="none";
    logout.onclick=function () {
        successLogin.style.display="none";
        notLogin.style.display="inline-block";
    };

    /*计算购物车里的物品数*/
    var bookNum=document.getElementsByClassName("a-book");
    /*更改页面顶部的工具条中的数字*/
    var show_book_num_01=document.getElementsByClassName("books-num")[0];
    show_book_num_01.innerHTML=bookNum.length+"";
    /*更改结算栏中的物品件数*/
    var show_book_num_02=document.getElementById("select-book-num");
    show_book_num_02.innerHTML=" "+bookNum.length+" ";
};