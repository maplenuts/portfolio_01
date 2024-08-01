
$(document).ready(function () {

   $(window).scroll(function () {
      let scrollT = $(this).scrollTop();
      if (scrollT > 832) {
         $("#header").css({ "background": "#fff" });
         $("#header .gnb > li > a ").css({ "color": "#080808" });
         $("#header h1 img").attr("src", "img/common/img_logo_red.svg");
         $("#header .util .lang li a").css({ "color": "#080808" });
         $("#header .util .btn_sitemap img").attr("src", "img/common/ham_red.png");

      } else {
         $("#header").css({ "background": "transparent" });
         $("#header .gnb > li > a ").css({ "color": "#fff" });
         $("#header .util .lang li a").css({ "color": "#fff" });
         $("#header h1 img").attr("src", "img/common/img_logo_wh.svg");
         $("#header .util .btn_sitemap img").attr("src", "img/common/ham.svg");
      }
   });

   // /* header 영역 */
   $(".depth2, .depth2_bg").hide();

   $(".gnb > li").mouseenter(function () {
      $("#header").addClass("active");
      $("#header h1 img").attr("src", "img/common/img_logo_red.svg");
      $("#header .util .btn_sitemap img").addClass("active");
      $(".depth2").stop().fadeIn();
      $(".depth2_bg").stop().fadeIn();
   });

   $(".gnb > li").mouseleave(function () {
      $("#header").removeClass("active");
      $("#header h1 img").attr("src", "img/common/img_logo_wh.svg");
      $("#header .util .btn_sitemap img").removeClass("active");
      $(".depth2").stop().fadeOut();
      $(".depth2_bg").stop().fadeOut();
   });

   $(".sitemap, .dim").hide();

   $(".btn_sitemap").click(function () {
      $(".sitemap, .dim").fadeIn();
   });

   $(".btn_sitemap_close").click(function () {
      $(".sitemap, .dim").fadeOut();
   });


   // $(".sitemap .map_gnb > li .map_depth2").show();

   $(window).resize(function () {
      let windowWidth = $(window).width();
      if (windowWidth < 630) {
         $(".map_depth2").removeClass("open").addClass("close");
      } else {
         $(".map_depth2").removeClass("close").addClass("open");
      }
   });

   $(".map_gnb > li").click(function () {
      $(this).find(".map_depth2.close").slideDown();
      $(this).siblings().find(".map_depth2.close").slideUp();
   });


   // main_visual
   var mv = new Swiper(".mv", {
      pagination: {
         el: ".swiper-pagination",
         type: "progressbar",
         clickable: true,
      },

      autoplay: {
         delay: 5500,
         disableOnIneraction: false,
      },

      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      loop: true,
   });

   $(".btn_play").hide();

   $(".btn_puase").click(function () {
      mv.autoplay.stop();
      $(".btn_puase").hide();
      $(".btn_play").show();
   })

   $(".btn_play").click(function () {
      mv.autoplay.start();
      $(".btn_puase").show();
      $(".btn_play").hide();
   });



   // prd
   var prd = new Swiper(".prd", {
      pagination: {
         el: ".swiper-pagination",
         type: "progressbar",
         clickable: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      loop: true,
   });


   // footer
   $(".f_depth2").hide();

   $(".familysite").click(function () {
      $(this).addClass(".active");
   });


   $(".go_top").click(function () {
      window.scrollTo(0, 0);
   });


});