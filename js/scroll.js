$(document).ready(function(){var e=CONFIG.header&&CONFIG.header.enable,s=e&&CONFIG.header.showOnPost,a=0,o=!1,l=!0;function d(){var d=!!$("#is-post").length,r=!e||d&&!s,t=$(".header-nav"),i=Math.floor($(window).scrollTop()),n=Math.floor(i-a);if(0===i)r&&setTimeout(function(){t.addClass("slider--clear"),l=!1},200),t.removeClass("header-nav--sticky"),t.removeClass("slider--up"),t.addClass("slider--down");else{if(r&&i<t.height())return!1;Math.abs(n)>5?(r&&(l?t.removeClass("slider--clear"):l=!0),o?t.addClass("header-nav--sticky"):o=!0,n>0?(t.removeClass("slider--down"),t.addClass("slider--up")):(t.removeClass("slider--up"),t.addClass("slider--down"))):t.addClass("header-nav--sticky")}a=i}var r=CONFIG.back2top&&CONFIG.back2top.enable,t=!1;function i(){var e=$("#back2top");0!==$(window).scrollTop()?t||(e.addClass("back2top--show"),e.removeClass("back2top--hide"),t=!0):(e.addClass("back2top--hide"),e.removeClass("back2top--show"),t=!1)}r&&(i(),$("#back2top").on("click",function(){$("body").velocity("stop").velocity("scroll")})),d(),$(window).on("scroll",Stun.utils.throttle(function(){d(),r&&i()},100))});