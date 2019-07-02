$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })

    $(".hjul li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".hjul_inner").hide().eq(index).fadeIn(200);
        })
    })
    $(".tabdl dd").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('dd').removeClass('hover');
             $(".table").hide().eq(index).fadeIn(200);
        })
    })


     var timer = setInterval(function(){
        var num = Math.floor(Math.random()*32);
        $(".calenda .course").hide()
        $(".calenda .course").eq(num).fadeIn()
        $(".calenda h4").removeClass("cur")
        $(".calenda h4").eq(num).addClass("cur")
        // console.log("num1",num)
    },1500)
   // $(".calenda td").each(function(index){
   //  $(this).hover(function(){
   //      // console.log(index)
   //      clearInterval(timer)
   //      $(".calenda h4").eq(index).hide()
   //      $(".calenda .course").hide()
   //      $(".calenda .course").eq(index).fadeIn()
   //      },function(){
   //              $(".calenda h4").eq(index).show()
   //              $(".calenda .course").hide()
   //               clearInterval(timer)
   //               timer = setInterval(function(){
   //              var num1 = Math.floor(Math.random()*32);
   //              // console.log("num2",num)
   //              $(".calenda .course").hide()
   //              $(".calenda .course").eq(num1).fadeIn()
   //              $(".calenda h4").removeClass("cur")
   //              $(".calenda h4").eq(num1).addClass("cur")
   //  },1500)
   //      });
   //  })
$(".calenda td").each(function(index){
    $(this).hover(function(){
        // console.log(index)
        clearInterval(timer)
       $(".calenda h4").removeClass("cur")
       $(".calenda h4").eq(index).addClass("cur")
        $(".calenda .course").hide()
        $(".calenda .course").eq(index).fadeIn()
         }
    // ,function(){
    //              clearInterval(timer)
    //              timer = setInterval(function(){
    //             var num1 = Math.floor(Math.random()*32);
    //             $(".calenda .course").hide()
    //             $(".calenda .course").eq(num1).fadeIn()
    //             $(".calenda h4").removeClass("cur")
    //             $(".calenda h4").eq(num1).addClass("cur")
    // },1500)
    //     }
    );
    })
    $(".pointer").click(function(){
        // var index = [-120,240,600,960]
        // var index = [1,2,3]
        // var i = Math.floor(Math.random()*4);
        var turntable = document.getElementById('plate');
        turntable.style.transform = "rotate("+960+"deg)";
        // turntable.style.transform = "rotate("+index[i]+"deg)";
        // turntable.style.transform = "rotate("+240*index[i]+"deg)";
    })


})