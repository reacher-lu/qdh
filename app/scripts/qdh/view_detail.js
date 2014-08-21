var viewDetail = {
  init : function(){
    this.focus();
  },

  focus : function(){

    for(var i=0; i<$("#focusWrap .single").length; i++)
    {
      $("#focusCtrol").append('<li></li>');
    }
    $("#focusCtrol").find("li:first").addClass("cur");

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
    $("#focusCtrol").find("li").removeClass("cur");
    $("#focusCtrol").find("li:eq("+index+")").addClass("cur");
  }



};

viewDetail.init();