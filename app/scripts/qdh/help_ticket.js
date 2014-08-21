var helpTicket = {
  init : function(){
    this.switchs();
  },

  switchs : function(){
    $("#ticketBar li").on("click",function(){
      $("#ticketBar li").removeClass("action");
      $(this).addClass("action");
      $(".tab-content").find(".content").hide();
      $(".tab-content").find(".content:eq("+$(this).index()+")").fadeIn(300);
    });
  }


};

helpTicket.init();