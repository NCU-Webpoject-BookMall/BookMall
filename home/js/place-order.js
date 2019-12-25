window.onload=function () {
    header();
    var p=GetRequest();
    var money=p["total"];
    if (typeof (money)=="undefined"){
        money="￥0.00";
    }
    var showMoney=document.getElementsByClassName("money")[0];
    showMoney.innerHTML=money;
};


/*获取登录页面传递的URL并提取出其中的参数*/
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    //console.log(theRequest["userName"]);
    return theRequest;
}