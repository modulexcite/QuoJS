/*!
 * QuoJS 1.0 ~ Copyright (c) 2011, 2012 Javi Jiménez Villar (@soyjavi)
 * http://quojs.tapquo.com
 * Released under MIT license, https://raw.github.com/soyjavi/QuoJS/master/LICENSE.txt
 */

var Quo=function(){function a(f,b){f=f||j;f.__proto__=a.prototype;f.selector=b||"";return f}function h(f){if(f){var b=h.getDomainSelector(f);return a(b,f)}else return a()}var j=[];h.extend=function(f){Array.prototype.slice.call(arguments,1).forEach(function(b){for(key in b)f[key]=b[key]});return f};a.prototype=h.fn={};return h}();window.Quo=Quo;"$$"in window||(window.$$=Quo);(function(a){function h(b){return b.filter(function(g){return g!==undefined&&g!==null})}var j=Object.prototype,f=[];a.toType=function(b){return j.toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()};a.isOwnProperty=function(b,g){return j.hasOwnProperty.call(b,g)};a.getDomainSelector=function(b){var g=null,d=[1,9,11],l=a.toType(b);if(l==="array")g=h(b);else if(l==="string")g=a.query(document,b);else if(d.indexOf(b.nodeType)>=0||b===window)g=[b];return g};a.map=function(b,g){var d=[],l;if(a.toType(b)===
"array")for(l=0;l<b.length;l++){var k=g(b[l],l);k!=null&&d.push(k)}else for(l in b){k=g(b[l],l);k!=null&&d.push(k)}return d.length>0?[].concat.apply([],d):d};a.each=function(b,g){var d;if(a.toType(b)==="array")for(d=0;d<b.length;d++){if(g.call(b[d],d,b[d])===false)break}else for(d in b)if(g.call(b[d],d,b[d])===false)break;return b};a.mix=function(){for(var b={},g=0,d=arguments.length;g<d;g++){var l=arguments[g],k;for(k in l)if(a.isOwnProperty(l,k)&&l[k]!==undefined)b[k]=l[k]}return b};a.fn.forEach=
f.forEach;a.fn.indexOf=f.indexOf;a.fn.map=function(b){return a.map(this,function(g,d){return b.call(g,d,g)})};a.fn.instance=function(b){return this.map(function(){return this[b]})};a.fn.filter=function(b){return a([].filter.call(this,function(g){return g.parentNode&&a.query(g.parentNode,b).indexOf(g)>=0}))}})(Quo);(function(a){a.fn.attr=function(h,j){return a.toType(h)==="string"&&j===undefined?this[0].getAttribute(h):this.each(function(){this.setAttribute(h,j)})};a.fn.data=function(h,j){return this.attr("data-"+h,j)};a.fn.val=function(h){return h?this.each(function(){this.value=h}):this.length>0?this[0].value:null};a.fn.show=function(){return this.style("display","block")};a.fn.hide=function(){return this.style("display","none")};a.fn.height=function(){return this.offset().height};a.fn.width=function(){return this.offset().width};
a.fn.offset=function(){var h=this[0].getBoundingClientRect();return{left:h.left+window.pageXOffset,top:h.top+window.pageYOffset,width:h.width,height:h.height}};a.fn.remove=function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})}})(Quo);(function(a){var h=/WebKit\/([\d.]+)/,j={android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,blackberry:/(BlackBerry).*Version\/([\d.]+)/,webos:/(webOS|hpwOS)[\s\/]([\d.]+)/},f=null;a.isMobile=function(){f=f||b();return f.isMobile};a.environment=function(){return f=f||b()};a.isOnline=function(){return navigator.onLine};var b=function(){var g=navigator.userAgent,d={},l=g.match(h);d.browser=l?l[0]:g;var k;for(os in j)if(l=g.match(j[os])){k={name:os==="iphone"||
os==="ipad"?"ios":os,version:l[2]};break}d.os=k;d.isMobile=d.os?true:false;return d}})(Quo);(function(a){a.fn.text=function(h){return!h?this[0].textContent:this.each(function(){this.textContent=h})};a.fn.html=function(h){return!h?this[0].innerHTML:this.each(function(){this.innerHTML=h})};a.fn.append=function(h){return this.each(function(){if(a.toType(h)==="string"){var j=document.createElement();j.innerHTML=h;this.appendChild(j.firstChild)}else this.parentNode.insertBefore(h)})};a.fn.prepend=function(h){return this.each(function(){if(a.toType(h)==="string")this.innerHTML=h+this.innerHTML;
else{var j=this.parentNode;j.insertBefore(h,j.firstChild)}})};a.fn.empty=function(){return this.each(function(){this.innerHTML=null})}})(Quo);(function(a){a.query=function(f,b){var g=document.querySelectorAll(b);return g=Array.prototype.slice.call(g)};a.fn.parent=function(f){var b=f?h(this):this.instance("parentNode");return j(b,f)};a.fn.siblings=function(f){var b=this.map(function(g,d){return Array.prototype.slice.call(d.parentNode.children).filter(function(l){return l!==d})});return j(b,f)};a.fn.children=function(f){var b=this.map(function(){return Array.prototype.slice.call(this.children)});return j(b,f)};a.fn.get=function(f){return f===
undefined?this:this[f]};a.fn.first=function(){return a(this[0])};a.fn.last=function(){return a(this[this.length-1])};a.fn.closest=function(f,b){var g=this[0],d=a(f);for(d.length||(g=null);g&&d.indexOf(g)<0;)g=g!==b&&g!==document&&g.parentNode;return a(g)};a.fn.each=function(f){this.forEach(function(b,g){f.call(b,g,b)});return this};var h=function(f){for(var b=[];f.length>0;)f=a.map(f,function(g){if((g=g.parentNode)&&g!==document&&b.indexOf(g)<0){b.push(g);return g}});return b},j=function(f,b){return b===
undefined?a(f):a(f).filter(b)}})(Quo);(function(a){function h(j,f){return f.split(/\s+/g).indexOf(j)>=0}a.fn.addClass=function(j){return this.each(function(){h(j,this.className)||(this.className+=" "+j)})};a.fn.removeClass=function(j){var f=RegExp("(^|\\s+)"+j+"(\\s+|$)");return this.each(function(){if(h(j,this.className))this.className=this.className.replace(f," ")})};a.fn.toggleClass=function(j){var f=RegExp("(^|\\s+)"+j+"(\\s+|$)");return this.each(function(){if(h(j,this.className))this.className=this.className.replace(f,"");else this.className+=
" "+j})};a.fn.hasClass=function(j){return h(j,this[0].className)};a.fn.style=function(j,f){return!f?this[0].style[j]||document.defaultView.getComputedStyle(this[0],"")[j]:this.each(function(){this.style[j]=f})}})(Quo);(function(a){function h(k,c){if(c.contentType)c.headers["Content-Type"]=c.contentType;if(c.dataType)c.headers.Accept=g[c.dataType];for(header in c.headers)k.setRequestHeader(header,c.headers[header])}function j(k,c){k.onreadystatechange={};k.abort();c.error.call(c.context,"QuoJS \u00bb $$.ajax : timeout exceeded",k,c)}function f(k,c){var e=k.responseText;if(c.dataType===b.MIME)try{e=JSON.parse(e)}catch(i){e=i;c.error.call(c.context,"Parse Error",k,c)}return e}var b={TYPE:"GET",MIME:"json"},g={script:"text/javascript, application/javascript",
json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},d=0;a.ajaxSettings={type:b.TYPE,async:true,success:{},error:{},context:null,dataType:b.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:false,timeout:0};a.ajax=function(k){var c=a.mix(a.ajaxSettings,k);if(/=\?/.test(c.url))return a.jsonp(c);var e=c.xhr();e.onreadystatechange=function(){if(e.readyState===4){clearTimeout(i);if(e.status===200){if(c.async){var m=f(e,c);c.success.call(c.context,
m,e)}}else c.error.call(c.context,"QuoJS \u00bb $$.ajax",e,c)}};e.open(c.type,c.url,c.async);h(e,c);if(c.timeout>0)var i=setTimeout(function(){j(e,c)},c.timeout);e.send(c.data);return c.async?e:f(e,c)};a.jsonp=function(k){var c="jsonp"+ ++d,e=document.createElement("script"),i={abort:function(){a(e).remove();if(c in window)window[c]={}}},m;window[c]=function(o){clearTimeout(m);a(e).remove();delete window[c];k.success.call(k.context,o,i)};e.src=k.url.replace(/=\?/,"="+c);a("head").append(e);if(k.timeout>
0)m=setTimeout(function(){j(i,k)},k.timeout);return i};a.get=function(k,c,e,i){k+=l(c);return a.ajax({url:k,success:e,dataType:i})};a.post=function(k,c,e,i){return a.ajax({type:"POST",url:k,data:c,success:e,dataType:i,contentType:"application/x-www-form-urlencoded"})};a.json=function(k,c,e){k+=l(c);return a.ajax({url:k,success:e,dataType:b.MIME})};var l=function(k){var c="?",e;for(e in k)if(k.hasOwnProperty(e)){if(c!=="?")c+="&";c+=e+"="+k[e]}return c==="?"?"":c}})(Quo);(function(a){var h={touch:"touchstart",tap:"tap"},j=/complete|loaded|interactive/;["touch","tap"].forEach(function(f){a.fn[f]=function(b){a(document.body).delegate(this.selector,h[f],b);return this}});a.fn.on=function(f,b,g){return b===undefined||a.toType(b)==="function"?this.bind(f,b):this.delegate(b,f,g)};a.fn.off=function(f,b,g){return b===undefined||a.toType(b)==="function"?this.unbind(f,b):this.undelegate(b,f,g)};a.fn.ready=function(f){j.test(document.readyState)?f(a):document.addEventListener("DOMContentLoaded",
function(){f(a)},false);return this}})(Quo);(function(a){function h(e,i,m,o,n){i=a.isMobile()?i:c[i];var p=e._id||(e._id=d++);p=l[p]||(l[p]=[]);n=n&&n(m,i);i={event:i,callback:m,selector:o,proxy:f(n,m,e),delegate:n,index:p.length};p.push(i);e.addEventListener(i.event,i.proxy,false)}function j(e,i,m,o){i=a.isMobile()?i:c[i];var n=e._id||(e._id=d++);b(n,i,m,o).forEach(function(p){delete l[n][p.index];e.removeEventListener(p.event,p.proxy,false)})}function f(e,i,m){i=e||i;return function(o){var n=i.apply(m,[o].concat(o.data));n===false&&o.preventDefault();
return n}}function b(e,i,m,o){return(l[e]||[]).filter(function(n){return n&&(!i||n.event==i)&&(!m||n.fn==m)&&(!o||n.selector==o)})}function g(e){var i=a.extend({originalEvent:e},e);a.each(k,function(m,o){i[m]=function(){this[o]=function(){return true};return e[m].apply(e,arguments)};i[o]=function(){return false}});return i}var d=1,l={},k={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},c={touchstart:"mousedown",touchmove:"mousemove",
touchend:"mouseup",tap:"click",doubletap:"dblclick",orientationchange:"resize"};a.Event=function(e){var i=document.createEvent("Events");i.initEvent(e,true,true,null,null,null,null,null,null,null,null,null,null,null,null);return i};a.fn.bind=function(e,i){return this.each(function(){h(this,e,i)})};a.fn.unbind=function(e,i){return this.each(function(){j(this,e,i)})};a.fn.delegate=function(e,i,m){return this.each(function(o,n){h(n,i,m,e,function(p){return function(r){var q=a(r.target).closest(e,n).get(0);
if(q){var s=a.extend(g(r),{currentTarget:q,liveFired:n});return p.apply(q,[s].concat([].slice.call(arguments,1)))}}})})};a.fn.undelegate=function(e,i,m){return this.each(function(){j(this,i,m,e)})};a.fn.trigger=function(e){a.isMobile()||console.log("Event "+e+" captured.");if(a.toType(e)==="string")e=a.Event(e);return this.each(function(){this.dispatchEvent(e)})}})(Quo);(function(a){function h(c){var e=Date.now(),i=e-(d.last||e);c=a.isMobile()?c.touches[0]:c;l&&clearTimeout(l);d={el:a("tagName"in c.target?c.target:c.target.parentNode),x1:c.pageX,y1:c.pageY,isDoubleTap:i>0&&i<=250?true:false,last:e};setTimeout(g,k)}function j(c){c=a.isMobile()?c.touches[0]:c;d.x2=c.pageX;d.y2=c.pageY}function f(){if(d.isDoubleTap){d.el.trigger("doubleTap");d={}}else if(d.x2>0||d.y2>0){(Math.abs(d.x1-d.x2)>30||Math.abs(d.y1-d.y2)>30)&&d.el.trigger("swipe")&&d.el.trigger("swipe"+(Math.abs(d.x1-
d.x2)>=Math.abs(d.y1-d.y2)?d.x1-d.x2>0?"Left":"Right":d.y1-d.y2>0?"Up":"Down"));d.x1=d.x2=d.y1=d.y2=d.last=0;d={}}else{d.el.trigger("tap");l=setTimeout(function(){l=null;d={}},250)}}function b(){d={};clearTimeout(l)}function g(){if(d.last&&Date.now()-d.last>=k){d.el.trigger("longTap");d={}}}var d={},l,k=750;["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","longTap"].forEach(function(c){a.fn[c]=function(e){return this.on(c,e)}});a(document).ready(function(){var c=a(document.body);
c.bind("touchstart",h);c.bind("touchmove",j);c.bind("touchend",f);c.bind("touchcancel",b)})})(Quo);
