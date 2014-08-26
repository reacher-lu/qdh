var uc = {
  init : function(){
    this.submit();

  },

  submit : function(){

    var self = this;
        
    // 登录
    $("#login").on("click", function(){
      var phone = $.trim($("#phone").val()),
          password = $.trim($("#password").val());
      if(self.check.isEmpty(phone))
      {
        alert("用户名不能为空");
        return false;
      }
      if(self.check.isEmpty(password))
      {
        alert("密码不能为空");
        return false;
      }
    });

    //注册-获取验证码 
    $("#getCode").on("click", function(){
      var phone = $.trim($("#phone").val());
      if(self.check.isEmpty(phone))
      {
        alert("手机号码不能为空");
        return false;
      }
      if(!self.check.isPhone(phone))
      {
        alert("手机号码格式错误");
        return false;
      }
    });

    // 注册-提交验证码
    $("#postCode").on("click", function(){
      var code = $.trim($("#code").val());
      if(self.check.isEmpty(code))
      {
        alert("验证码不能为空");
        return false;
      }
    });

    // 注册-完成注册
    $("#regComplete").on("click", function(){
      var password = $.trim($("#password").val());
      if(self.check.isEmpty(password))
      {
        alert("密码不能为空");
        return false;
      }
    });

  },

  check : {

    isEmpty : function(value){
      if(value === "") return true;
      else return false;
    },

    isEmail : function(value){
      // var reg = /\w@\w*\.\w/;
      var reg = /^([a-z0-9A-Z]+[-|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/;
      if(reg.test(value)) return true;
      else return false;
    },

    isPhone : function(value){
      var reg = /^0{0,1}(13[0-9]|15[0-9]||17[0-9]|18[0-9])[0-9]{8}$/;
      if(reg.test(value)) return true;
      else return false;
    },

    isZipCode : function(value){
      var reg = /^[1-9]\d{5}$/;
      if(reg.test(value)) return true;
      else return false;
    }
  }



};

uc.init();