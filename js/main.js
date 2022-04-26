;(function() {
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        handleFontSize();
    } else {
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
        } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", handleFontSize);
            document.attachEvent("onWeixinJSBridgeReady", handleFontSize);  }
    }
    function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function() {
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        });
    }
  //  头部导航点击实践
  $(".togoNav").click(function (){
    $('.navigation').toggle(300)
    $(this).hide().siblings().show()
    $('.gray').toggle()
  })
  $(".gray").click(function (){
    $(this).hide()
    $('.navigation').toggle(300)
  })
  $('.operation').on('click','span',function (){
    $(this).addClass('active').siblings().removeClass('active')
  })
  $('.md_right').on('click','.language',function (){
    $(this).find('i').addClass('active').parent().siblings().find('i').removeClass('active')
  })
  $(".navigation").on('click','.clas_a',function (){
    if($(this).hasClass('has_ol')) {
      $(this).find('.right_case').toggle(300)
      $(this).siblings().find('.right_case').hide(300)
      $(this).toggleClass('rote')
    } else {
      $(this).addClass('active').siblings().removeClass('active rote').find('.clas_b').removeClass('active').parents('.right_case').hide(300)
    }
  }).on('click','.clas_b',function (e){
    e.stopPropagation();
    $(this).addClass('active').siblings().removeClass('active').parents('.clas_a').siblings().removeClass('active').find('.clas_b').removeClass('active')
  })

})();
