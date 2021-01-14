// var div=document.querySelector(".box");
var tou=document.getElementById("header");

// div.addEventListener("click",onclickFunc);
tou.addEventListener('click',onclickFunc);

function onclickFunc(e){
    console.log('点击了',e);
}

$("#footer").click(function (e) { 
    console.log('66666');
    // e.preventDefault();
    
});


$(document).on('mousewheel DOMMouseScroll', onMouseScroll);
function onMouseScroll(e){
    e.preventDefault();
    var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    var delta = Math.max(-1, Math.min(1, wheel) );
    if(delta<0){//向下滚动
        console.log('向下滚动');
        $(".content_1").slideUp(500,'linear');
        $(".content_2").show(); 

        // $(".content_2").slideToggle(500);
        // $(".content_1").hide();  //显示
        // // $(".content_2").show();  //隐藏
        // $(selector).slideToggle()
        $(".content_2").css({"display":"flex","justify-content":"center","align-items":"center"});
    }else{//向上滚动
        // console.log('向上滚动');
        // $(".content_2").slideUp();
        // $(".content_1").show(); 
        $(".content_1").slideDown(500,'linear');
      
        $(".content_2").slideUp(500,'linear');


// $("p").css({"background-color":"yellow","font-size":"200%"});
        // $("content_2").slideDown();
        // // $(".content_2").slideToggle(500);
        // // $(".content_2").hide();  //显示
        // $(".content_1").show();  //隐藏
    }    
}

$(".nextPage").click(function(){
    // alert("段落被点击了。");
    $(".content_1").slideUp(500,'linear');
    $(".content_2").show(); 
});
