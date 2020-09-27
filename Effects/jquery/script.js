$(document).ready(function() {
    
});



///////////////////////////// التسلسل //////////////////////////////
/*
    $("button").click(function(){
        $("p").css("color","red")
            .slideUp(2000)
            .slideDown(2000);
    });
*/

/////////////////// رد الإتصال ////////////////////////
/*
    $("button").click(function(){
        $("p").hide("slow", function(){
            alert('This is a paragraph with little content.');
        });
    });
*/

/////////////////////////// Stop التوقف //////////////////////////////////////////
/*
    $("#flip").click(function(){
        $("#panel").slideDown(5000);
    });
    $("button").click(function(){
        $("#panel").stop();
    });
*/

//////////////////////// أنيميشن ////////////////////////////////
/*
    $("div").animate({
        left: '250px',
        width: '+=150px',
        height: '+=150px'
        height: "toggle"
    });
        

    $("div").animate({height:'300px' , opacity: '0.4'},"slow");
    $("div").animate({width:'300px' , opacity: '0.8'},"slow");
    $("div").animate({height:'100px' , opacity: '0.4'},"slow");
    $("div").animate({width:'100px' , opacity: '1'},"slow");
        

    $("div").animate({left: '200px'}, "slow");
    $("div").animate({fontSize: '30px'}, "slow");
*/

/////////////////////////// كما هو موضح ///////////////////////////////////
/*
    // slideDown(لإنزال شيئ) - slideUp(لإطلاع شيئ) - slideToggle(لإنزال وإطلاع شيئ)
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
*/

////////////////////////////// تتلاشى ////////////////////////////////////////
/*
    // fadeIn(الظهور للالوان) - fadeOut(الإخفاء للالوان) - fadeToggle(الإخفاء والظهور للالوان) - fadeTo(متحكر كل شيئ كما آخر مثال)
    $("#fade").click(function(){
        $("#div1").fadeTo("slow",0.5);
        $("#div2").fadeTo("slow",0.3);
        $("#div3").fadeTo("slow",0.1);
    });
*/

/////////////////// إخفاء و إظهار ////////////////////////
/*
    $("#toggle").click(function(){
        $("p").toggle(500);
    });

    $("#hide").click(function(){
        $("p").hide(1000);
    });
    $("#show").click(function(){
        $("p").show();
    });
*/