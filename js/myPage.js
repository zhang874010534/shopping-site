window.onkeydown=function(e){
    console.log(e.key)
};
$(function () {
    var bug = 0;
    $("#fullpage").fullpage({
        navigation: true,
        //导航小圆点位置
        // navigationPosition:"left"
        scrollingSpeed: 700,
        afterLoad: function (origin, destination, direction) {
            // if (origin.index==0){
            //     bug++;
            // }
            // 导航小圆点位置alert(destination);
            // alert(direction);
            // var loadedSection = this;
            if (destination.index == 1 && bug == 0) {
                bug++;
                // $(".section2").animate({"backgroundPositionX":"-1000px"},4000);
                $(".search").show().animate({
                    "marginLeft": "-100px"
                }, 1500, function () {
                    $(".search-words").fadeIn(1500, function () {
                        $(".search").hide();
                        $(".search-img").show().animate({
                            "height": 30,
                            "marginLeft": "100px",
                            "bottom": "450px"
                        }, 1000);
                        $(".section2-sofa").show().animate({
                            "width":472
                        },1000)
                    })
                })
            }
            if (destination.index ==7 ){
                $(".beginShopping").mouseover(function () {
                    $(".begin-img1").hide();
                    $(".begin-img2").show();
                }).mouseleave(function () {
                    $(".begin-img1").show();
                    $(".begin-img2").hide();
                });
                $(document).mousemove(function (e) {
                    // console.log(e.pageX);
                    $(".section8-hand").css({"left":e.pageX-60,"top":e.pageY+20});
                });
                $(".section8-again").on("click",function () {
                    fullpage_api.moveTo(0)
                })
            }
        },
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
    })

});
