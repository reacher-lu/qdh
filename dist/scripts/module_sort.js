var moduleSort = {
  init : function(obj){
    obj = obj || ".head_img";
    this.binds(obj);
  },

  binds : function(obj){
    var self = this;
    $("[data-type]").on("click.type",function(){
      var type = $(this).data("type");
      self.addDom(type);
    });
  },

  addDom : function(type){
    if(document.querySelector("#popbox")) return;
    $("body").append('<div id="popbox"></div><div id="popbg"></div>');

    $("#popbg,html,body").removeClass("auto").css({
      width : $(window).width(),
      height : $(window).height(),
      overflow : "hidden"
    });

    $("#popbg").fadeIn(300).on("click",function(){
      $("#popbox").addClass("hide-y");
      $("#popbg").fadeOut(500,function(){
        $("#popbg,#popbox").remove();
        $("html,body").addClass("auto");
      });
    });

    switch (type){
      case "search":
        $("#popbox").addClass("hide-y").html('\
          <ul class="sort">\
            <li class="clearfix action"><a href="javascript:void(0);"><i></i><span>默认排序</span></a></li>\
            <li class="clearfix"><a href="javascript:void(0);"><i></i><span>价格从低到高</span></a></li>\
            <li class="clearfix"><a href="javascript:void(0);"><i></i><span>价格从高到低</span></a></li>\
            <li class="clearfix"><a href="javascript:void(0);"><i></i><span>距离从近到远</span></a></li>\
            <li class="clearfix"><a href="javascript:void(0);"><i></i><span>用户评分低到高</span></a></li>\
          </ul>\
        ');
        setTimeout(function(){$("#popbox").addClass("trans").removeClass("hide-y")},100);
        break;
      case "sort":
        $("#popbox").addClass("hide-y").html('\
          <ul class="sort">\
            <li class="clearfix action"><a href="javascript:void(0);"><i></i><span>全部</span></a></li>\
            <li class="clearfix"><a href="javascript:void(0);"><i></i><span>奢华</span></a></li>\
            <li class="clearfix"><a href="javascript:void(0);"><i></i><span>高档</span></a></li>\
            <li class="clearfix"><a href="javascript:void(0);"><i></i><span>舒适</span></a></li>\
            <li class="clearfix"><a href="javascript:void(0);"><i></i><span>经济</span></a></li>\
          </ul>\
        ');
        setTimeout(function(){$("#popbox").addClass("trans").removeClass("hide-y")},100);
        break;
      // case "hotel":
      //   $("#popbox").addClass("hide-y").html('');
      //   break;
    }

    // $("#popbox").css({
    //   width : $(window).width(),
    //   height : $(window).height()
    // });
  }





};

moduleSort.init();