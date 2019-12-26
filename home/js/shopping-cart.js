var selectedBookNum=0;
var total_money=0;
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



    /*全选与取消*/
    var all01=document.getElementById("all-select-input");//获取到点击全选的那个复选框
    var all02=document.getElementById("all-select-input02");
    var  all03=document.getElementById("all-select-input01");
    var one=document.getElementsByClassName("select-book");//获取到所有复选框
    all01.onclick=function(){
        if (isSelectAll()) {
            selectNone();
        }
        else selectAll();
        countSelectedNum();
        order_money();
};
    all02.onclick=function(){
        if (isSelectAll()) {
            selectNone();
        }
        else selectAll();
        countSelectedNum();
        order_money();
    };
    all03.onclick=function(){
        if (isSelectAll()) {
            selectNone();
        }
        else selectAll();
        countSelectedNum();
        order_money();
    };
    /*计算购物车里的物品数*/
    countGoodsNum();
    /*获取被选中的商品数*/
    var books=document.getElementsByClassName("select-one-book");
    for (let i=0;i<books.length;i++){
        books[i].onclick=function () {
            countSelectedNum();
            order_money();
        };
    }
    /*改变一本书的数量*/
    var change_num=document.getElementsByClassName("input-num");
    for (let i=0;i<change_num.length;i++){
        change_num[i].onchange=function(){
            countMoney();
            order_money();
        };
        change_num[i].onpropertychange=function () {
            countMoney();
            order_money();
        };
        change_num[i].oninput=function () {
            countMoney();
            order_money();
        };
    }

    /*移入收藏夹或者删除*/
    var operate=document.getElementsByClassName("op");
    var delBook=document.getElementsByClassName("a-book");
    for (let i=0;i<operate.length;i++){
        let j=Math.floor(i/2);
        operate[i].onclick=function () {
            console.log(i+" "+j);
            delBook[j].style.display="none";
            countGoodsNum();
        }
    }
    /*点击结算 跳到下单页面*/
    var to_pay=document.getElementsByClassName("to-pay")[0];
    to_pay.onclick=function () {
        let page="place-order.html?";
        this.href=page+"total="+total_money;
    }

};
/*计算购物车里的物品数*/
function countGoodsNum() {
    var bookNum=document.getElementsByClassName("a-book");
    /*更改页面顶部的工具条中的数字*/
    var show_book_num_01=document.getElementsByClassName("books-num")[0];
    show_book_num_01.innerHTML=bookNum.length+"";
}
/*全选*/
function selectAll() {
    let all01=document.getElementById("all-select-input");//获取到点击全选的那个复选框
    let all02=document.getElementById("all-select-input02");
    let all03=document.getElementById("all-select-input01");
    let one=document.getElementsByClassName("select-book");//获取到所有复选框
    if(all01.checked==true||all02.checked==true||all03.checked==true){
        for(let i=0;i<one.length;i++){
            one[i].checked=true;
        }
    }else{
        for(let j=0;j<one.length;j++){
            one[j].checked=false;
        }
    }

}
/*取消全选*/
function selectNone() {
    let one=document.getElementsByClassName("select-book");//获取到所有复选框
    for(let i=0;i<one.length;i++){
        one[i].checked=false;
    }
}
/*判断是否全选*/
function isSelectAll() {
    var selectedBook=document.getElementsByClassName("select-one-book");
    let flag=true;
    for (let i=0;i<selectedBook.length;i++){
        if (selectedBook[i].checked==false){
            flag=false;
        }
    }
    return flag;
}
/*计算选中的数量*/
function countSelectedNum() {
    var selectedBook=document.getElementsByClassName("select-one-book");
    selectedBookNum=0;
    for (let i=0;i<selectedBook.length;i++){
        if (selectedBook[i].checked==true)
            selectedBookNum++;
    }
    /*更改结算栏中的物品件数*/
    var show_book_num_02=document.getElementById("select-book-num");
    show_book_num_02.innerHTML=" "+selectedBookNum+" ";
    //console.log(selectedBookNum);
}
/*根据数量和单价计算总金额*/
function countMoney() {
   // let final_order_money=0;
    /*一本书的单价*/
    var single_price=document.getElementsByClassName("single-price");
    /*这本书的数量*/
    var book_num=document.getElementsByClassName("input-num");
    /*这本书的总金额*/
    var sum=document.getElementsByClassName("book-sum-price");

    for (let i=0;i<sum.length;i++){
        let money=parseFloat(single_price[i].innerHTML.split("￥")[1])*parseFloat(book_num[i].value);
        if (isNaN(money)||book_num[i].value==0){
            book_num[i].value=1;
            money=parseFloat(single_price[i].innerHTML.split("￥")[1]);
        }
        sum[i].innerHTML="￥"+money.toFixed(2);
       // final_order_money+=money;
    }
    //total_price.innerHTML="￥"+final_order_money.toFixed(2);
}
/*计算订单总金额*/
function order_money() {
    var final_order_money=0;
    /*订单总金额*/
    var total_price=document.getElementsByClassName("total-price")[0];
    /*某本书的总金额*/
    var  sum=document.getElementsByClassName("book-sum-price");
    /*书本选中情况*/
    var books=document.getElementsByClassName("select-one-book");
    for (let i=0;i<books.length;i++){
      if (books[i].checked){
          final_order_money+=parseFloat(sum[i].innerHTML.split("￥")[1]);
      }
    }
   // console.log(final_order_money);
    total_price.innerHTML="￥"+final_order_money.toFixed(2);
    total_money=total_price.innerHTML;
}