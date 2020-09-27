$(document).ready(function() {

});





//////////////////////// jQuery أبعاد ///////////////////////////////
/*
    $("#btn1").click(function(){
        var txt = "";

        txt += "Width of div: " + $("#div1").width() + "<br>";
        txt += "Heigth of div: " + $("#div1").height() + "<br>";
        txt += "Inner width of div: " + $("#div1").innerWidth() + "<br>";
        txt += "Inner heigth of div" + $("#div1").innerHeight() + "<br>";
        txt += "Outer width of div" + $("#div1").outerWidth() + "<br>";
        txt += "Outer height of div" + $("#div1").outerHeight();

        $("#div1").html(txt);
        // alert(txt);
    });
    $("#btn2").click(function(){
        $("#div1").width(250).height(250);
    });
*/


///////////////////////// Css jQuery //////////////////////////////
/*
    $("#btn1").click(function(){
        $("h1 , p").addClass("color1");
        $("h2").addClass("color2");
    });
    $("#btn2").click(function(){
        $("h1 , p").removeClass("color1");
    });
    $("#btn3").click(function(){
        $("h2").toggleClass("color3");
    });

    $("#btn4").click(function(){
        $("h3").css({
            "color": "yellow",
            "font-size": "50px"
        });
    });
*/


///////////////////// إزالة العناصر /////////////////////////////
/*
    // remove(حذف) - empty(إفراغ)
    $("#btn1").click(function(){
        $("#div1").remove();
    });
    $("#btn2").click(function(){
        $("#div1").empty();
    });
    $("#btn3").click(function(){
        $(".test").remove();
    });
*/


/////////////////////////// اضافة العناصر كما موضح ///////////////////////////
/*
    // append(نهاية العنصر المحدد) - prepend(بداية العنصر المحدد) - after(بعد) - before(قبل)
    $("#btn1").click(function(){
        $("ol").prepend("<li>Khaled</li>");
    });
    $("#btn2").click(function(){
        $("ol").append("<li>Khairallah</li>");
    });
*/


///////////////////////// تعيين المحتوى والسمات //////////////////////////////
/*
    $("#btn1").click(function(){
        $("#google").attr("href", function(i, origHref){
            return origHref + "/login/";
        });
    });
    $("#btn1").click(function(){
        $("#google").attr("href","https://coder.com");
    });
    
    $("#btn1").click(function(){
        $("#test1").text(function(i, origText){
            return "Old Text: " + origText + "New Text: Hello World! (index: "+ i +")";
        });
    });
    $("#btn2").click(function(){
        $("#test2").html(function(i, origHtml){
            return "Old HTML: " + origHtml + " New <b>HTML: </b> Hello <b>World!</b> (index: "+ i +")";
        });
    });
    
    $("#btn1").click(function(){
        $("#test1").text("Hello World !!!");
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello World !!</b>");
    });
    $("#btn3").click(function(){
        $("#test3").val("Welcome Khairallah");
    });
*/


////////////////////// الحصول على المحتوى او السمات ///////////////////////////////////
/*
    // text() - html() - val() - attr()

    $("#btn1").click(function(){
        alert("Value href: " + $("#google").attr("href"));
    });
    
    $("#btn1").click(function(){
        alert("Value: " + $("#test").val());
    });
    
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });

    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    });
*/