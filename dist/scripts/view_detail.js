function Swipe(a,b){"use strict";function c(){o=r.children,p=new Array(o.length),q=a.getBoundingClientRect().width||a.offsetWidth,r.style.width=o.length*q+"px";for(var b=o.length;b--;){var c=o[b];c.style.width=q+"px",c.setAttribute("data-index",b),n.transitions&&(c.style.left=b*-q+"px",g(b,s>b?-q:b>s?q:0,0))}n.transitions||(r.style.left=s*-q+"px"),a.style.visibility="visible"}function d(){s?f(s-1):b.continuous&&f(o.length-1)}function e(){s<o.length-1?f(s+1):b.continuous&&f(0)}function f(a,c){if(s!=a){if(n.transitions){for(var d=Math.abs(s-a)-1,e=Math.abs(s-a)/(s-a);d--;)g((a>s?a:s)-d-1,q*e,0);g(s,q*e,c||t),g(a,0,c||t)}else i(s*-q,a*-q,c||t);s=a,m(b.callback&&b.callback(s,o[s]))}}function g(a,b,c){h(a,b,c),p[a]=b}function h(a,b,c){var d=o[a],e=d&&d.style;e&&(e.webkitTransitionDuration=e.MozTransitionDuration=e.msTransitionDuration=e.OTransitionDuration=e.transitionDuration=c+"ms",e.webkitTransform="translate("+b+"px,0)translateZ(0)",e.msTransform=e.MozTransform=e.OTransform="translateX("+b+"px)")}function i(a,c,d){if(!d)return void(r.style.left=c+"px");var e=+new Date,f=setInterval(function(){var g=+new Date-e;return g>d?(r.style.left=c+"px",w&&j(),b.transitionEnd&&b.transitionEnd.call(event,s,o[s]),void clearInterval(f)):void(r.style.left=(c-a)*(Math.floor(g/d*100)/100)+a+"px")},4)}function j(){u=setTimeout(e,w)}function k(){w=0,clearTimeout(u)}var l=function(){},m=function(a){setTimeout(a||l,0)},n={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(a){var b=["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"];for(var c in b)if(void 0!==a.style[b[c]])return!0;return!1}(document.createElement("swipe"))};if(a){var o,p,q,r=a.children[0];b=b||{};var s=parseInt(b.startSlide,10)||0,t=b.speed||300;b.continuous=b.continuous?b.continuous:!0;var u,v,w=b.auto||0,x={},y={},z={handleEvent:function(a){switch(a.type){case"touchstart":this.start(a);break;case"touchmove":this.move(a);break;case"touchend":m(this.end(a));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":m(this.transitionEnd(a));break;case"resize":m(c.call())}b.stopPropagation&&a.stopPropagation()},start:function(a){b.beforeCallback&&b.beforeCallback();var c=a.touches[0];x={x:c.pageX,y:c.pageY,time:+new Date},v=void 0,y={},r.addEventListener("touchmove",this,!1),r.addEventListener("touchend",this,!1)},move:function(a){if(!(a.touches.length>1||a.scale&&1!==a.scale)){b.disableScroll&&a.preventDefault();var c=a.touches[0];y={x:c.pageX-x.x,y:c.pageY-x.y},"undefined"==typeof v&&(v=!!(v||Math.abs(y.x)<Math.abs(y.y))),v||(a.preventDefault(),k(),y.x=y.x/(!s&&y.x>0||s==o.length-1&&y.x<0?Math.abs(y.x)/q+1:1),h(s-1,y.x+p[s-1],0),h(s,y.x+p[s],0),h(s+1,y.x+p[s+1],0))}},end:function(){var a,c=+new Date-x.time,d=Number(c)<250&&Math.abs(y.x)>20||Math.abs(y.x)>q/2,e=!s&&y.x>0||s==o.length-1&&y.x<0,f=y.x<0;v||(d&&!e?(f?(a="left",g(s-1,-q,0),g(s,p[s]-q,t),g(s+1,p[s+1]-q,t),s+=1):(a="right",g(s+1,q,0),g(s,p[s]+q,t),g(s-1,p[s-1]+q,t),s+=-1),b.callback&&b.callback(s,o[s],a)):(a=f?"left":"right",(Math.abs(y.x)>20||Math.abs(y.x)>q/2)&&b.callback&&b.callback(s,o[s],a),g(s-1,-q,t),g(s,0,t),g(s+1,q,t))),r.removeEventListener("touchmove",z,!1),r.removeEventListener("touchend",z,!1)},transitionEnd:function(a){parseInt(a.target.getAttribute("data-index"),10)==s&&(w&&j(),b.transitionEnd&&b.transitionEnd.call(a,s,o[s]))}};return c(),w&&j(),n.addEventListener?(n.touch&&r.addEventListener("touchstart",z,!1),n.transitions&&(r.addEventListener("webkitTransitionEnd",z,!1),r.addEventListener("msTransitionEnd",z,!1),r.addEventListener("oTransitionEnd",z,!1),r.addEventListener("otransitionend",z,!1),r.addEventListener("transitionend",z,!1)),window.addEventListener("resize",z,!1)):window.onresize=function(){c()},{setup:function(){c()},slide:function(a,b){f(a,b)},prev:function(){k(),d()},next:function(){k(),e()},getPos:function(){return s},kill:function(){k(),r.style.width="auto",r.style.left=0;for(var a=o.length;a--;){var b=o[a];b.style.width="100%",b.style.left=0,n.transitions&&h(a,0,0)}n.addEventListener?(r.removeEventListener("touchstart",z,!1),r.removeEventListener("webkitTransitionEnd",z,!1),r.removeEventListener("msTransitionEnd",z,!1),r.removeEventListener("oTransitionEnd",z,!1),r.removeEventListener("otransitionend",z,!1),r.removeEventListener("transitionend",z,!1),window.removeEventListener("resize",z,!1)):window.onresize=null}}}}(window.jQuery||window.Zepto)&&!function(a){a.fn.Swipe=function(b){return this.each(function(){a(this).data("Swipe",new Swipe(a(this)[0],b))})}}(window.jQuery||window.Zepto);var viewDetail={init:function(){this.focus()},focus:function(){for(var a=0;a<$("#focusWrap .single").length;a++)$("#focusCtrol").append("<li></li>");$("#focusCtrol").find("li:first").addClass("cur");{var b=this;new Swipe(document.getElementById("focusWrap"),{startSlide:0,speed:400,continuous:!0,disableScroll:!1,stopPropagation:!1,beforeCallback:function(){},callback:function(){},transitionEnd:function(a){b.pointPosition(a)}})}},pointPosition:function(a){$("#focusCtrol").find("li").removeClass("cur"),$("#focusCtrol").find("li:eq("+a+")").addClass("cur")}};viewDetail.init();