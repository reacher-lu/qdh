var hotelComment = {
  init : function(){
    this.process();
  },

  process : function(){
    $("[data-process]").each(function(){
      var score = parseFloat($(this).closest("li").find(".scores").text(),10)*2*10+"%";
      // console.log(score);
      $(this).find("i").animate({
        "width":score
      },1500);
    });
  }

};

hotelComment.init();