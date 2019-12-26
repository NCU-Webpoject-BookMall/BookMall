function onpicture(srcs) {
    var img_large=document.getElementById("BigImg");
    var s="images/book-details/big/"+srcs;
    img_large.setAttribute("src",s);
}

//商品被选中有阴影效果
function selected(n){
    var product="product_"+n;
    var product_n=document.getElementById(product);
    product_n.onmouseover=function show(){
        product_n.style.backgroundColor="lightgray";
    };
    product_n.onmouseleave= function hide(){
        product_n.style.backgroundColor="white";
    };
}


function inita(a){
    var shake=document.getElementById(a);
    shake.onmouseover=function showa(){
        shake.style.backgroundColor="#69bbd3";
        shake.style.color="lightgray";
    };
    shake.onmouseleave=function backa(){
        shake.style.backgroundColor="red";
        shake.style.color="white";
    };
}

function initb(b){
    var shake=document.getElementById(b);
    shake.onmouseover=function showb(){
        shake.style.backgroundColor="#69bbd3";
        shake.style.color="lightgray";
    };
    shake.onmouseleave=function backb(){
        shake.style.backgroundColor="blue";
        shake.style.color="white";
    };
}