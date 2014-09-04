var uc = {
  init : function(){
    this.submit();
    this.share();
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

    // 找回密码
    $("#findPassSubmit").on("click", function(){
      var findTel = $.trim($("#findTel").val());
      if(self.check.isEmpty(findTel))
      {
        alert("手机号码不能为空");
        return false;
      }
      if(!self.check.isPhone(findTel))
      {
        alert("手机号码格式错误");
        return false;
      }
    });

    // 验证原手机号码
    $("#checkPhoneSubmit").on("click", function(){
      var checkPhone = $.trim($("#checkPhone").val());
      if(self.check.isEmpty(checkPhone))
      {
        alert("验证码不能为空");
        return false;
      }
    });

    // 详细资料修改
    $("#detailInfoSubmit").on("click", function(){
      var detailCode = $.trim($("#detailCode").val()),
          detailNewPass = $.trim($("#detailNewPass").val()),
          detailRePass = $.trim($("#detailRePass").val());
      if(self.check.isEmpty(detailCode))
      {
        alert("验证码不能为空");
        return false;
      }
      if(self.check.isEmpty(detailNewPass))
      {
        alert("新密码不能为空");
        return false;
      }
      if(self.check.isEmpty(detailRePass))
      {
        alert("请确认新密码");
        return false;
      }
      if(detailNewPass.length < 6)
      {
        alert("新密码长度不能小于6位");
        return false;
      }
      if(detailRePass !== detailRePass)
      {
        alert("两次密码输入不一致");
        return false;
      }
    });

    // 修改密码
    $("#modifyPassSubmit").on("click", function(){
      var modifyOldPass = $.trim($("#modifyOldPass").val()),
          modifyNewPass = $.trim($("#modifyNewPass").val()),
          modifyRePass = $.trim($("#modifyRePass").val());
      if(self.check.isEmpty(modifyOldPass))
      {
        alert("原密码不能为空");
        return false;
      }
      if(self.check.isEmpty(modifyNewPass))
      {
        alert("新密码不能为空");
        return false;
      }
      if(self.check.isEmpty(modifyRePass))
      {
        alert("请确认新密码");
        return false;
      }
      if(modifyNewPass.length<6 || modifyNewPass.length>20 )
      {
        alert("新密码长度介于6-20位之间");
        return false;
      }
      if(detailRePass !== detailRePass)
      {
        alert("两次密码输入不一致");
        return false;
      }
    });


    // 修改昵称
    $("#modifyNickSubmit").on("click", function(){
      var userNick = $.trim($("#userNick").val()),
          strLength = userNick.match(/[\u4e00-\u9fa5]/g) && userNick.match(/[\u4e00-\u9fa5]/g).length,
          numLength = userNick.match(/[a-zA-Z]/g) && userNick.match(/[a-zA-Z]/g).length,
          realLength = numLength + strLength*2;
      if(self.check.isEmpty(userNick))
      {
        alert("用户昵称不能为空");
        return false;
      }
      if(/[^a-zA-Z\u4e00-\u9fa5]/.test(userNick))
      {
        alert("用户昵称只能使用中文或者英文");
        return false;
      }
      if(realLength<4 || realLength>16 )
      {
        alert("用户昵称介于4-16字符之间");
        return false;
      }
    });

    // 修改地址
    $("#textareaSubmit").on("click", function(){
      var textarea = $.trim($("#textarea").val());
      if(self.check.isEmpty(textarea))
      {
        alert("收货地址不能为空");
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
    },

    isHanzi : function(value){
      var reg = /[\u4e00-\u9fa5]/;
      if(reg.test(value)) return true;
      else return false;
    }
  },

  share : function(){
    if(!$("body").hasClass("body-share")) return;
    $(".share-sidebar").height($(".share-box").height());


    var html='',
        l=$(".share-cont").find(".list").size();

    console.log(l);


    for(var i=0; i<l; i++)
    {
      html += '<div class="list"><i>'+(i+1)+'</i></div>';
    }

    console.log(html);

    $(".share-sidebar").append(html);
  }



};

uc.init();