var viewDetail = {
  init : function(){
    this.focus();
    $("#focusBox,.swipe-wrap").height($(window).height()-$("#albumFocusCtrol").height());
  },

  focus : function(){

    $(".focus-cur").text(1);
    $(".focus-total").text($("#focusWrap .single").length);

    var self = this,
    mySwipe = new Swipe(document.getElementById('focusWrap'), {
      startSlide: 0,
      speed: 400,
      // auto: 3000,
      continuous: true,
      disableScroll: false,
      stopPropagation: false,
      beforeCallback:function(){},
      callback: function(index, elem) {},
      transitionEnd: function(index, elem) {
      // console.log(index);
        self.pointPosition(index);
      }
    });
  },

  pointPosition : function(index){
    $(".focus-cur").text(index+1);
  }



};

viewDetail.init();