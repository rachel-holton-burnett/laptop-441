var pineappleSelector = "#pineapple";
var heartSelector= "#heart";
var allPineapples = new Array();

class PineappleInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

class HeartInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{
    var pineapple = new PineappleInfo("#pineapple", "images/pineapple2.png");

    var heart = new HeartInfo("#heart", "images/heart.png");

    allPineapples.push(pineapple);

    allPineapples.push(heart);
}


$(document).ready(function(){

    //$(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(allPineapples[0].theSelector).attr("src", allPineapples[0].theImagePath);

    $("button").click(function(){

        $(".first").fadeOut("slow").fadeIn("slow");
              setInterval(movePineapple, 1000);
              setInterval(moveHeart, 5000);
        $(".second").toggle().fadeOut("slow").fadeIn("slow");


        //$(allPineapples[0].theSelector).fadeOut("slow");

    });

});

function movePineapple()
{
    $("#pineapple").animate({left:1000}).fadeOut("slow").fadeIn("slow").animate({left:100});

}

function moveHeart()
{

    $("#heart").animate({left:20}).fadeOut("slow").fadeIn("slow").animate({left:1});
}
