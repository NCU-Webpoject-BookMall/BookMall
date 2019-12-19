window.onload=function () {
    /*头部左边：配送地区 移入-移出 事件*/
    var area=document.getElementsByClassName("tools_area")[0];
    var areaList=document.getElementsByClassName("areaList")[0];
    area.onmouseenter=function () {
        //alert("111");
        areaList.classList.add("currentShow");
    };
    area.onmouseleave=function () {
        areaList.classList.remove("currentShow");
    }

    /*点击某个城市*/
    var city=Array.from(areaList.getElementsByTagName("li"));
    var currentCity=document.getElementsByClassName("currentArea")[0];
    city.forEach(ele=>{
        ele.onclick = e=>{
            let cityFont=ele.getElementsByTagName("a")[0].text;
            currentCity.text=cityFont;
            //console.log(cityFont);
        }
    });
    /*屏幕物理分辨率的宽： window.screen.width*/
    var setWidth=document.getElementsByClassName("screen-width");
    for (let i=0;i<setWidth.length;i++){
        let width=window.screen.width-75;
        setWidth[i].style.width=width+"px";
    }
};