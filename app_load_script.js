var body = document.getElementsByTagName("body")[0];
var js = document.createElement("script");
js.id = "J---TK-load";
js.type = "text/javascript";
js.charset = "utf-8"; 
js.async = true;
js.src = "http://re.taotaosou.com/browser-static/mobile/api.js";
js.setAttribute("data-id","0003");
body.appendChild(js);



if(/taobao.com|tmall.com/.test(window.location.href))
{
  var head = document.getElementsByTagName("head")[0];
  var js = document.createElement("link");
  js.type = "text/css";
  js.rel = "stylesheet";
  js.href = "http://dapei.taotaosou.com/class/detail/app_tts_webview.css";
  head.appendChild(js);
}
