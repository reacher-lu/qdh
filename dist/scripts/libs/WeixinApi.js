var WeixinApi = (function () {

    "use strict";
    function weixinShareTimeline(data, callbacks) {
        callbacks = callbacks || {};
        var shareTimeline = function (theData) {

            alert(theData.imgUrl);
            WeixinJSBridge.invoke('shareTimeline', {
                "appid":theData.appId ? theData.appId : '',
                "img_url":theData.imgUrl,
                "link":theData.link,
                "desc":theData.title,
                "title":theData.desc, // 注意这里要分享出去的内容是desc
                "img_width":"640",
                "img_height":"640"
            }, function (resp) {
                switch (resp.err_msg) {
                    // share_timeline:cancel 用户取消
                    case 'share_timeline:cancel':
                        callbacks.cancel && callbacks.cancel(resp);
                        break;
                    // share_timeline:confirm 发送成功
                    case 'share_timeline:confirm':
                    case 'share_timeline:ok':
                        callbacks.confirm && callbacks.confirm(resp);
                        break;
                    // share_timeline:fail　发送失败
                    case 'share_timeline:fail':
                    default:
                        callbacks.fail && callbacks.fail(resp);
                        break;
                }
                // 无论成功失败都会执行的回调
                callbacks.all && callbacks.all(resp);
            });
        };
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            if (callbacks.async && callbacks.ready) {
                window["_wx_loadedCb_"] = callbacks.dataLoaded || new Function();
                if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_") > 0) {
                    window["_wx_loadedCb_"] = new Function();
                }
                callbacks.dataLoaded = function (newData) {
                    window["_wx_loadedCb_"](newData);
                    shareTimeline(newData);
                };
                // 然后就绪
                callbacks.ready && callbacks.ready(argv);
            } else {
                // 就绪状态
                callbacks.ready && callbacks.ready(argv);
                shareTimeline(data);
            }
        });
    }

    function weixinSendAppMessage(data, callbacks) {
        callbacks = callbacks || {};
        var sendAppMessage = function (theData) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "appid":theData.appId ? theData.appId : '',
                "img_url":theData.imgUrl,
                "link":theData.link,
                "desc":theData.desc,
                "title":theData.title,
                "img_width":"640",
                "img_height":"640"
            }, function (resp) {
                switch (resp.err_msg) {
                    // send_app_msg:cancel 用户取消
                    case 'send_app_msg:cancel':
                        callbacks.cancel && callbacks.cancel(resp);
                        break;
                    // send_app_msg:confirm 发送成功
                    case 'send_app_msg:confirm':
                    case 'send_app_msg:ok':
                        callbacks.confirm && callbacks.confirm(resp);
                        break;
                    // send_app_msg:fail　发送失败
                    case 'send_app_msg:fail':
                    default:
                        callbacks.fail && callbacks.fail(resp);
                        break;
                }
                // 无论成功失败都会执行的回调
                callbacks.all && callbacks.all(resp);
            });
        };
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            if (callbacks.async && callbacks.ready) {
                window["_wx_loadedCb_"] = callbacks.dataLoaded || new Function();
                if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_") > 0) {
                    window["_wx_loadedCb_"] = new Function();
                }
                callbacks.dataLoaded = function (newData) {
                    window["_wx_loadedCb_"](newData);
                    sendAppMessage(newData);
                };
                // 然后就绪
                callbacks.ready && callbacks.ready(argv);
            } else {
                // 就绪状态
                callbacks.ready && callbacks.ready(argv);
                sendAppMessage(data);
            }
        });
    }

    function weixinShareWeibo(data, callbacks) {
        callbacks = callbacks || {};
        var shareWeibo = function (theData) {
            WeixinJSBridge.invoke('shareWeibo', {
                "content":theData.desc,
                "url":theData.link
            }, function (resp) {
                switch (resp.err_msg) {
                    // share_weibo:cancel 用户取消
                    case 'share_weibo:cancel':
                        callbacks.cancel && callbacks.cancel(resp);
                        break;
                    // share_weibo:confirm 发送成功
                    case 'share_weibo:confirm':
                    case 'share_weibo:ok':
                        callbacks.confirm && callbacks.confirm(resp);
                        break;
                    // share_weibo:fail　发送失败
                    case 'share_weibo:fail':
                    default:
                        callbacks.fail && callbacks.fail(resp);
                        break;
                }
                // 无论成功失败都会执行的回调
                callbacks.all && callbacks.all(resp);
            });
        };
        WeixinJSBridge.on('menu:share:weibo', function (argv) {
            if (callbacks.async && callbacks.ready) {
                window["_wx_loadedCb_"] = callbacks.dataLoaded || new Function();
                if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_") > 0) {
                    window["_wx_loadedCb_"] = new Function();
                }
                callbacks.dataLoaded = function (newData) {
                    window["_wx_loadedCb_"](newData);
                    shareWeibo(newData);
                };
                // 然后就绪
                callbacks.ready && callbacks.ready(argv);
            } else {
                // 就绪状态
                callbacks.ready && callbacks.ready(argv);
                shareWeibo(data);
            }
        });
    }

    function weixinGeneralShare(data, callbacks) {
        callbacks = callbacks || {};
        var generalShare = function (general,theData) {

            // 如果是分享到朋友圈，则需要把title和desc交换一下
            if(general.shareTo == 'timeline') {
                var title = theData.title;
                theData.title = theData.desc || title;
                theData.desc = title;
            }

            // 分享出去
            general.generalShare({
                "appid":theData.appId ? theData.appId : '',
                "img_url":theData.imgUrl,
                "link":theData.link,
                "desc":theData.desc,
                "title":theData.title,
                "img_width":"640",
                "img_height":"640"
            }, function (resp) {
                switch (resp.err_msg) {
                    // general_share:cancel 用户取消
                    case 'general_share:cancel':
                        callbacks.cancel && callbacks.cancel(resp ,general.shareTo);
                        break;
                    // general_share:confirm 发送成功
                    case 'general_share:confirm':
                    case 'general_share:ok':
                        callbacks.confirm && callbacks.confirm(resp ,general.shareTo);
                        break;
                    // general_share:fail　发送失败
                    case 'general_share:fail':
                    default:
                        callbacks.fail && callbacks.fail(resp ,general.shareTo);
                        break;
                }
                // 无论成功失败都会执行的回调
                callbacks.all && callbacks.all(resp ,general.shareTo);
            });
        };
        WeixinJSBridge.on('menu:general:share', function (general) {
            if (callbacks.async && callbacks.ready) {
                window["_wx_loadedCb_"] = callbacks.dataLoaded || new Function();
                if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_") > 0) {
                    window["_wx_loadedCb_"] = new Function();
                }
                callbacks.dataLoaded = function (newData) {
                    window["_wx_loadedCb_"](newData);
                    generalShare(general,newData);
                };
                // 然后就绪
                callbacks.ready && callbacks.ready(general,general.shareTo);
            } else {
                // 就绪状态
                callbacks.ready && callbacks.ready(general,general.shareTo);
                generalShare(general,data);
            }
        });
    }

    function addContact(appWeixinId,callbacks){
        callbacks = callbacks || {};
        WeixinJSBridge.invoke("addContact", {
            webtype: "1",
            username: appWeixinId
        }, function (resp) {
            var success = !resp.err_msg || "add_contact:ok" == resp.err_msg || "add_contact:added" == resp.err_msg;
            if(success) {
                callbacks.success && callbacks.success(resp);
            }else{
                callbacks.fail && callbacks.fail(resp);
            }
        })
    }

    function imagePreview(curSrc,srcList) {
        if(!curSrc || !srcList || srcList.length == 0) {
            return;
        }
        WeixinJSBridge.invoke('imagePreview', {
            'current' : curSrc,
            'urls' : srcList
        });
    }
    function showOptionMenu() {
        WeixinJSBridge.call('showOptionMenu');
    }
    function hideOptionMenu() {
        WeixinJSBridge.call('hideOptionMenu');
    }
    function showToolbar() {
        WeixinJSBridge.call('showToolbar');
    }
    function hideToolbar() {
        WeixinJSBridge.call('hideToolbar');
    }
    function getNetworkType(callback) {
        if (callback && typeof callback == 'function') {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                // 在这里拿到e.err_msg，这里面就包含了所有的网络类型
                callback(e.err_msg);
            });
        }
    }
    function closeWindow(callbacks) {
        callbacks = callbacks || {};
        WeixinJSBridge.invoke("closeWindow",{},function(resp){
            switch (resp.err_msg) {
                // 关闭成功
                case 'close_window:ok':
                    callbacks.success && callbacks.success(resp);
                    break;

                // 关闭失败
                default :
                    callbacks.fail && callbacks.fail(resp);
                    break;
            }
        });
    }
    function wxJsBridgeReady(readyCallback) {
        if (readyCallback && typeof readyCallback == 'function') {
            var Api = this;
            var wxReadyFunc = function () {
                readyCallback(Api);
            };
            if (typeof window.WeixinJSBridge == "undefined"){
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady', wxReadyFunc, false);
                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', wxReadyFunc);
                    document.attachEvent('onWeixinJSBridgeReady', wxReadyFunc);
                }
            }else{
                wxReadyFunc();
            }
        }
    }
    function openInWeixin(){
        return /MicroMessenger/i.test(navigator.userAgent);
    }
    function scanQRCode (callbacks) {
        callbacks = callbacks || {};
        WeixinJSBridge.invoke("scanQRCode",{},function(resp){
            switch (resp.err_msg) {
                // 打开扫描器成功
                case 'scan_qrcode:ok':
                    callbacks.success && callbacks.success(resp);
                    break;

                // 打开扫描器失败
                default :
                    callbacks.fail && callbacks.fail(resp);
                    break;
            }
        });
    }
    function getInstallState(data, callbacks) {
        callbacks = callbacks || {};

        WeixinJSBridge.invoke("getInstallState", { 
            "packageUrl": data.packageUrl || "",
            "packageName": data.packageName || ""
        }, function(resp) {
            var msg = resp.err_msg, match = msg.match(/state:yes_?(.*)$/);
            if (match) {
                resp.version = match[1] || "";
                callbacks.success && callbacks.success(resp);
            } else {
                callbacks.fail && callbacks.fail(resp);
            }

            callbacks.all && callbacks.all(resp);
        });
    }

    function enableDebugMode(callback){
       
        window.onerror = function(errorMessage, scriptURI, lineNumber,columnNumber) {

            // 有callback的情况下，将错误信息传递到options.callback中
            if(typeof callback === 'function'){
                callback({
                    message : errorMessage,
                    script : scriptURI,
                    line : lineNumber,
                    column : columnNumber
                });
            }else{
                // 其他情况，都以alert方式直接提示错误信息
                var msgs = [];
                msgs.push("额，代码有错。。。");
                msgs.push("\n错误信息：" , errorMessage);
                msgs.push("\n出错文件：" , scriptURI);
                msgs.push("\n出错位置：" , lineNumber + '行，' + columnNumber + '列');
                alert(msgs.join(''));
            }
        }
    }

    return {
        version         :"2.5",
        enableDebugMode :enableDebugMode,
        ready           :wxJsBridgeReady,
        shareToTimeline :weixinShareTimeline,
        shareToWeibo    :weixinShareWeibo,
        shareToFriend   :weixinSendAppMessage,
        generalShare    :weixinGeneralShare,
        addContact      :addContact,
        showOptionMenu  :showOptionMenu,
        hideOptionMenu  :hideOptionMenu,
        showToolbar     :showToolbar,
        hideToolbar     :hideToolbar,
        getNetworkType  :getNetworkType,
        imagePreview    :imagePreview,
        closeWindow     :closeWindow,
        openInWeixin    :openInWeixin,
        getInstallState :getInstallState,
        scanQRCode      :scanQRCode
    };
})();




function weixin(data) {
  this.init(data);
}

weixin.prototype = {
    init: function(data) {
        var self = this;
        $("#weixinShare").on("click",function(){
            self.popup(data);
        });
    },

    // 判断终端
    browser: { //this.browser.versions.mobile
      versions: function() {
        var u = navigator.userAgent,
          app = navigator.appVersion;
        return {
          mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
        };
      }()
    },

    popup: function(data) {

      var self = this;

      $("body").append(this.tmpl);

      this.fullScreen();

      $("#popbox").append(data.html);

      // 定位
      // IOS会默认忽略scrollTop
      var s = this.browser.versions.android ? $(window).scrollTop() : 0,
        d = $(document).height(),
        h = $("#pop").height(),
        w = $(window).height();

        // alert(s);
    
      $("#popup").css({
        "max-height": w * 0.8,
        "top": 30 + s
      });

      // $("#pop").fadeIn(100, function() {
      // alert(11);
      $("#popup").removeClass("hide");
      // });

      // 关闭按钮事件
      $("#popClose,#popbg").off("click").on("click", function() {
        
        self.unFullScreen();
        
        $("#popup").addClass("hide");
        setTimeout(function() {
          $("#pop").fadeOut(300, function() {
            $("#pop").remove();
          });
        }, 300);
      });

      // 回调
      data.callback(data.Api,this.fullScreen,this.unFullScreen);
    },

    fullScreen : function(){
      $("html,body").css({
        width : $(window).width(),
        height : $(window).height(),
        "overflow":"hidden",
        "position":"relative"
      });
    },

    unFullScreen : function(){
      $("html,body").css({
        width : '100%',
        height : 'auto',
        "overflow":"auto",
        "position":"static"
      });

      if($(window).height()>$("body").height())
      {
        $("body").css('min-height',$(window).height());
      }
    },

    tmpl:'<div id="pop">\
        <section id="popup" class="hide">\
        <div id="popbox">\
          <span id="popClose"></span>\
        </div>\
        </section>\
        <section id="popbg"></section>\
    </div>'
};


window.weixinShareHtml = '<h2>填写信息</h2>\
    <div class="weixin-box">\
    <p><span>姓名:</span><input id="weixinShareName" type="text"></p>\
    <p><span>手机:</span><input id="weixinShareTel" type="number"></p>\
    <p><button id="weixinShareSubmit">立即分享</button></p>\
</div>';

function wShare(Api,full){
    $("#popClose").trigger("click");

    // 显示
    Api.showOptionMenu();

    setTimeout(function(){
        full();
        $("body").append('<div id="shareRemind"><span class="text">点击右上角分享</span></div>');
        $("#shareRemind").height($(document).height()).on("click",function(){
            $(this).remove();
            Api.hideOptionMenu();
        });
    },300);

}



function shareCode(Api,wxData){
  // 分享的回调
  var wxCallbacks = {
      // 分享被用户自动取消
      cancel : function(resp) {
          // 你可以在你的页面上给用户一个小Tip，为什么要取消呢？
          alert("分享被取消");
          Api.hideOptionMenu();
      },
      // 分享成功
      confirm : function(resp) {
          // 分享成功了，我们是不是可以做一些分享统计呢？
          alert("分享成功!");
          $("#shareRemind").trigger("click");
      }
  };

  // 点击分享给好友
  Api.shareToFriend(wxData, wxCallbacks);
  // 点击分享到朋友圈
  Api.shareToTimeline(wxData, wxCallbacks);
}






