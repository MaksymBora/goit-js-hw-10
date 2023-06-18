!function(){var e={};!function(e){"use strict";function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(){return v||"undefined"!=typeof window&&(v=window.gsap)&&v.registerPlugin&&v}function r(e,t){return~A.indexOf(e)&&A[A.indexOf(e)+1][t]}function i(e){return!!~T.indexOf(e)}function o(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})}function a(e,t,n,r){return e.removeEventListener(t,n,!!r)}function s(){return M&&M.isPressed||O.cache++}function l(e,t){function n(r){if(r||0===r){P&&(y.history.scrollRestoration="manual");var i=M&&M.isPressed;r=n.v=Math.round(r)||(M&&M.iOS?1:0),e(r),n.cacheID=O.cache,i&&R("ss",r)}else(t||O.cache!==n.cacheID||R("ref"))&&(n.cacheID=O.cache,n.v=e());return n.v+n.offset}return n.offset=0,e&&n}function c(e){return v.utils.toArray(e)[0]||("string"==typeof e&&!1!==v.config().nullTargetWarn?console.warn("Element not found:",e):null)}function u(e,t){var n=t.s,o=t.sc,a=O.indexOf(e),c=o===z.sc?1:2;return~a||(a=O.push(e)-1),O[a+c]||e.addEventListener("scroll",s),O[a+c]||(O[a+c]=l(r(e,n),!0)||(i(e)?o:l((function(t){return arguments.length?e[n]=t:e[n]}))))}function f(e,t,n){function r(e,t){var r=D();t||l<r-a?(o=i,i=e,s=a,a=r):n?i+=e:i=o+(e-o)/(r-s)*(a-s)}var i=e,o=e,a=D(),s=a,l=t||50,c=Math.max(500,3*l);return{update:r,reset:function(){o=i=n?0:i,s=a=0},getVelocity:function(e){var t=s,l=o,u=D();return!e&&0!==e||e===i||r(e),a===s||c<u-s?0:(i+(n?l:-l))/((n?u:a)-t)*1e3}}}function d(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e}function p(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n}function h(){var e,t,n,r;(S=v.core.globals().ScrollTrigger)&&S.core&&(e=S.core,t=e.bridge||{},n=e._scrollers,r=e._proxies,n.push.apply(n,O),r.push.apply(r,A),O=n,A=r,R=function(e,n){return t[e](n)})}function g(e){return(v=e||n())&&"undefined"!=typeof document&&document.body&&(y=window,x=(b=document).documentElement,w=b.body,T=[y,b,x,w],v.utils.clamp,k="onpointerenter"in w?"pointer":"mouse",_=B.isTouch=y.matchMedia&&y.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in y||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?2:0,E=B.eventTypes=("ontouchstart"in x?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in x?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout((function(){return P=0}),500),h(),m=1),m}var v,m,y,b,x,w,_,k,S,T,M,E,P=1,C=[],O=[],A=[],D=Date.now,R=function(e,t){return t},Y="scrollLeft",I="scrollTop",X={s:Y,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:l((function(e){return arguments.length?y.scrollTo(e,z.sc()):y.pageXOffset||b[Y]||x[Y]||w[Y]||0}))},z={s:I,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:X,sc:l((function(e){return arguments.length?y.scrollTo(X.sc(),e):y.pageYOffset||b[I]||x[I]||w[I]||0}))};X.op=z,O.cache=0;var B=(L.prototype.init=function(e){m||g(v)||console.warn("Please gsap.registerPlugin(Observer)"),S||h();var t=e.tolerance,n=e.dragMinimum,r=e.type,l=e.target,T=e.lineHeight,P=e.debounce,O=e.preventDefault,A=e.onStop,R=e.onStopDelay,Y=e.ignore,I=e.wheelSpeed,B=e.event,L=e.onDragStart,H=e.onDragEnd,F=e.onDrag,W=e.onPress,N=e.onRelease,V=e.onRight,q=e.onLeft,G=e.onUp,U=e.onDown,j=e.onChangeX,K=e.onChangeY,Z=e.onChange,$=e.onToggleX,J=e.onToggleY,Q=e.onHover,ee=e.onHoverEnd,te=e.onMove,ne=e.ignoreCheck,re=e.isNormalizer,ie=e.onGestureStart,oe=e.onGestureEnd,ae=e.onWheel,se=e.onEnable,le=e.onDisable,ce=e.onClick,ue=e.scrollSpeed,fe=e.capture,de=e.allowClicks,pe=e.lockAxis,he=e.onLockAxis;function ge(){return Ke=D()}function ve(e,t){return(ze.event=e)&&Y&&~Y.indexOf(e.target)||t&&Ve&&"touch"!==e.pointerType||ne&&ne(e,t)}function me(){var e=ze.deltaX=p(Ue),n=ze.deltaY=p(je),r=Math.abs(e)>=t,i=Math.abs(n)>=t;Z&&(r||i)&&Z(ze,e,n,Ue,je),r&&(V&&0<ze.deltaX&&V(ze),q&&ze.deltaX<0&&q(ze),j&&j(ze),$&&ze.deltaX<0!=Be<0&&$(ze),Be=ze.deltaX,Ue[0]=Ue[1]=Ue[2]=0),i&&(U&&0<ze.deltaY&&U(ze),G&&ze.deltaY<0&&G(ze),K&&K(ze),J&&ze.deltaY<0!=Le<0&&J(ze),Le=ze.deltaY,je[0]=je[1]=je[2]=0),(Re||De)&&(te&&te(ze),De&&(F(ze),De=!1),Re=!1),Ie&&(Ie=!1,!0)&&he&&he(ze),Ye&&(ae(ze),Ye=!1),Oe=0}function ye(e,t,n){Ue[n]+=e,je[n]+=t,ze._vx.update(e),ze._vy.update(t),P?Oe=Oe||requestAnimationFrame(me):me()}function be(e,t){pe&&!Xe&&(ze.axis=Xe=Math.abs(e)>Math.abs(t)?"x":"y",Ie=!0),"y"!==Xe&&(Ue[2]+=e,ze._vx.update(e,!0)),"x"!==Xe&&(je[2]+=t,ze._vy.update(t,!0)),P?Oe=Oe||requestAnimationFrame(me):me()}function xe(e){if(!ve(e,1)){var t=(e=d(e,O)).clientX,r=e.clientY,i=t-ze.x,o=r-ze.y,a=ze.isDragging;ze.x=t,ze.y=r,(a||Math.abs(ze.startX-t)>=n||Math.abs(ze.startY-r)>=n)&&(F&&(De=!0),a||(ze.isDragging=!0),be(i,o),a||L&&L(ze))}}function we(e){if(!ve(e,1)){a(re?l:Ge,E[1],xe,!0);var t=ze.isDragging&&(3<Math.abs(ze.x-ze.startX)||3<Math.abs(ze.y-ze.startY)),n=d(e);t||(ze._vx.reset(),ze._vy.reset(),O&&de&&v.delayedCall(.08,(function(){if(300<D()-Ke&&!e.defaultPrevented)if(e.target.click)e.target.click();else if(Ge.createEvent){var t=Ge.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,y,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}))),ze.isDragging=ze.isGesturing=ze.isPressed=!1,A&&!re&&Ae.restart(!0),H&&t&&H(ze),N&&N(ze,t)}}function _e(e){return e.touches&&1<e.touches.length&&(ze.isGesturing=!0)&&ie(e,ze.isDragging)}function ke(){return ze.isGesturing=!1,oe(ze)}function Se(e){if(!ve(e)){var t=He(),n=Fe();ye((t-We)*ue,(n-Ne)*ue,1),We=t,Ne=n,A&&Ae.restart(!0)}}function Te(e){if(!ve(e)){e=d(e,O),ae&&(Ye=!0);var t=(1===e.deltaMode?T:2===e.deltaMode?y.innerHeight:1)*I;ye(e.deltaX*t,e.deltaY*t,0),A&&!re&&Ae.restart(!0)}}function Me(e){if(!ve(e)){var t=e.clientX,n=e.clientY,r=t-ze.x,i=n-ze.y;ze.x=t,ze.y=n,Re=!0,(r||i)&&be(r,i)}}function Ee(e){ze.event=e,Q(ze)}function Pe(e){ze.event=e,ee(ze)}function Ce(e){return ve(e)||d(e,O)&&ce(ze)}this.target=l=c(l)||x,this.vars=e,Y=Y&&v.utils.toArray(Y),t=t||1e-9,n=n||0,I=I||1,ue=ue||1,r=r||"wheel,touch,pointer",P=!1!==P,T=T||parseFloat(y.getComputedStyle(w).lineHeight)||22;var Oe,Ae,De,Re,Ye,Ie,Xe,ze=this,Be=0,Le=0,He=u(l,X),Fe=u(l,z),We=He(),Ne=Fe(),Ve=~r.indexOf("touch")&&!~r.indexOf("pointer")&&"pointerdown"===E[0],qe=i(l),Ge=l.ownerDocument||b,Ue=[0,0,0],je=[0,0,0],Ke=0,Ze=ze.onPress=function(e){ve(e,1)||(ze.axis=Xe=null,Ae.pause(),ze.isPressed=!0,e=d(e),Be=Le=0,ze.startX=ze.x=e.clientX,ze.startY=ze.y=e.clientY,ze._vx.reset(),ze._vy.reset(),o(re?l:Ge,E[1],xe,O,!0),ze.deltaX=ze.deltaY=0,W&&W(ze))};Ae=ze._dc=v.delayedCall(R||.25,(function(){ze._vx.reset(),ze._vy.reset(),Ae.pause(),A&&A(ze)})).pause(),ze.deltaX=ze.deltaY=0,ze._vx=f(0,50,!0),ze._vy=f(0,50,!0),ze.scrollX=He,ze.scrollY=Fe,ze.isDragging=ze.isGesturing=ze.isPressed=!1,ze.enable=function(e){return ze.isEnabled||(o(qe?Ge:l,"scroll",s),0<=r.indexOf("scroll")&&o(qe?Ge:l,"scroll",Se,O,fe),0<=r.indexOf("wheel")&&o(l,"wheel",Te,O,fe),(0<=r.indexOf("touch")&&_||0<=r.indexOf("pointer"))&&(o(l,E[0],Ze,O,fe),o(Ge,E[2],we),o(Ge,E[3],we),de&&o(l,"click",ge,!1,!0),ce&&o(l,"click",Ce),ie&&o(Ge,"gesturestart",_e),oe&&o(Ge,"gestureend",ke),Q&&o(l,k+"enter",Ee),ee&&o(l,k+"leave",Pe),te&&o(l,k+"move",Me)),ze.isEnabled=!0,e&&e.type&&Ze(e),se&&se(ze)),ze},ze.disable=function(){ze.isEnabled&&(C.filter((function(e){return e!==ze&&i(e.target)})).length||a(qe?Ge:l,"scroll",s),ze.isPressed&&(ze._vx.reset(),ze._vy.reset(),a(re?l:Ge,E[1],xe,!0)),a(qe?Ge:l,"scroll",Se,fe),a(l,"wheel",Te,fe),a(l,E[0],Ze,fe),a(Ge,E[2],we),a(Ge,E[3],we),a(l,"click",ge,!0),a(l,"click",Ce),a(Ge,"gesturestart",_e),a(Ge,"gestureend",ke),a(l,k+"enter",Ee),a(l,k+"leave",Pe),a(l,k+"move",Me),ze.isEnabled=ze.isPressed=ze.isDragging=!1,le&&le(ze))},ze.kill=function(){ze.disable();var e=C.indexOf(ze);0<=e&&C.splice(e,1),M===ze&&(M=0)},C.push(ze),re&&i(l)&&(M=ze),ze.enable(B)},function(e,n,r){n&&t(e.prototype,n),r&&t(e,r)}(L,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),L);function L(e){this.init(e)}function H(){return Le=1}function F(){return Le=0}function W(e){return e}function N(e){return Math.round(1e5*e)/1e5||0}function V(){return"undefined"!=typeof window}function q(){return Me||V()&&(Me=window.gsap)&&Me.registerPlugin&&Me}function G(e){return!!~De.indexOf(e)}function U(e){return r(e,"getBoundingClientRect")||(G(e)?function(){return Nt.width=Pe.innerWidth,Nt.height=Pe.innerHeight,Nt}:function(){return kt(e)})}function j(e,t){var n=t.s,i=t.d2,o=t.d,a=t.a;return(a=r(e,n="scroll"+i))?a()-U(e)()[o]:G(e)?(Oe[n]||Ae[n])-(Pe["inner"+i]||Oe["client"+i]||Ae["client"+i]):e[n]-e["offset"+i]}function K(e,t){for(var n=0;n<Ve.length;n+=3)t&&!~t.indexOf(Ve[n+1])||e(Ve[n],Ve[n+1],Ve[n+2])}function Z(e){return"string"==typeof e}function $(e){return"function"==typeof e}function J(e){return"number"==typeof e}function Q(e){return"object"==typeof e}function ee(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()}function te(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}}function ne(e){return Pe.getComputedStyle(e)}function re(e,t){for(var n in t)n in e||(e[n]=t[n]);return e}function ie(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0}function oe(e){var t,n=[],r=e.labels,i=e.duration();for(t in r)n.push(r[t]/i);return n}function ae(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort((function(e,t){return e-t}));return n?function(e,r,i){var o;if(void 0===i&&(i=.001),!r)return t(e);if(0<r){for(e-=i,o=0;o<n.length;o++)if(n[o]>=e)return n[o];return n[o-1]}for(o=n.length,e+=i;o--;)if(n[o]<=e)return n[o];return n[0]}:function(n,r,i){void 0===i&&(i=.001);var o=t(n);return!r||Math.abs(o-n)<i||o-n<0==r<0?o:t(r<0?n-e:n+e)}}function se(e,t,n,r){return n.split(",").forEach((function(n){return e(t,n,r)}))}function le(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})}function ce(e,t,n,r){return e.removeEventListener(t,n,!!r)}function ue(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)}function fe(e,t){if(Z(e)){var n=e.indexOf("="),r=~n?(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Mt?Mt[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function de(e,t,n,i,o,a,s,l){var c=o.startColor,u=o.endColor,f=o.fontSize,d=o.indent,p=o.fontWeight,h=Ce.createElement("div"),g=G(n)||"fixed"===r(n,"pinType"),v=-1!==e.indexOf("scroller"),m=g?Ae:n,y=-1!==e.indexOf("start"),b=y?c:u,x="border-color:"+b+";font-size:"+f+";color:"+b+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((v||l)&&g?"fixed;":"absolute;"),!v&&!l&&g||(x+=(i===z?ut:ft)+":"+(a+parseFloat(d))+"px;"),s&&(x+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),h._isStart=y,h.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),h.style.cssText=x,h.innerText=t||0===t?e+"-"+t:e,m.children[0]?m.insertBefore(h,m.children[0]):m.appendChild(h),h._offset=h["offset"+i.op.d2],Et(h,0,i,y),h}function pe(){return 34<ot()-st&&Bt()}function he(){je&&je.isPressed&&!(je.startX>Ae.clientWidth)||(O.cache++,tt=tt||requestAnimationFrame(Bt),st||Dt("scrollStart"),st=ot())}function ge(){$e=Pe.innerWidth,Ze=Pe.innerHeight}function ve(){O.cache++,Be||Ue||Ce.fullscreenElement||Ce.webkitFullscreenElement||Ke&&$e===Pe.innerWidth&&!(Math.abs(Pe.innerHeight-Ze)>.25*Pe.innerHeight)||Re.restart(!0)}function me(){return ce(qt,"scrollEnd",me)||It(!0)}function ye(e){for(var t=0;t<Rt.length;t+=5)(!e||Rt[t+4]&&Rt[t+4].query===e)&&(Rt[t].style.cssText=Rt[t+1],Rt[t].getBBox&&Rt[t].setAttribute("transform",Rt[t+2]||""),Rt[t+3].uncache=1)}function be(e,t){var n;for(Fe=0;Fe<Pt.length;Fe++)!(n=Pt[Fe])||t&&n._ctx!==t||(e?n.kill(1):n.revert(!0,!0));t&&ye(t),t||Dt("revert")}function xe(){return O.cache++&&O.forEach((function(e){return $(e)&&(e.rec=0)}))}function we(e,t,n,r){if(!e._gsap.swappedIn){for(var i,o=Lt.length,a=t.style,s=e.style;o--;)a[i=Lt[o]]=n[i];a.position="absolute"===n.position?"absolute":"relative","inline"===n.display&&(a.display="inline-block"),s[ft]=s[ut]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[dt]=ie(e,X)+_t,a[pt]=ie(e,z)+_t,a[yt]=s[bt]=s.top=s.left="0",Wt(r),s[dt]=s.maxWidth=n[dt],s[pt]=s.maxHeight=n[pt],s[yt]=n[yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}}function _e(e){for(var t=Ht.length,n=e.style,r=[],i=0;i<t;i++)r.push(Ht[i],n[Ht[i]]);return r.t=e,r}function ke(e,t,n,r,i,o,a,s,l,u,f,d,p){$(e)&&(e=e(s)),Z(e)&&"max"===e.substr(0,3)&&(e=d+("="===e.charAt(4)?fe("0"+e.substr(3),n):0));var h,g,v,m=p?p.time():0;if(p&&p.seek(0),J(e))a&&Et(a,n,r,!0);else{$(t)&&(t=t(s));var y,b,x,w,_=(e||"0").split(" ");v=c(t)||Ae,(y=kt(v)||{}).left||y.top||"none"!==ne(v).display||(w=v.style.display,v.style.display="block",y=kt(v),w?v.style.display=w:v.style.removeProperty("display")),b=fe(_[0],y[r.d]),x=fe(_[1]||"0",n),e=y[r.p]-l[r.p]-u+b+i-x,a&&Et(a,x,r,n-x<20||a._isStart&&20<x),n-=n-x}if(o){var k=e+n,S=o._isStart;h="scroll"+r.d2,Et(o,k,r,S&&20<k||!S&&(f?Math.max(Ae[h],Oe[h]):o.parentNode[h])<=k+1),f&&(l=kt(a),f&&(o.style[r.op.p]=l[r.op.p]-r.op.m-o._offset+_t))}return p&&v&&(h=kt(v),p.seek(d),g=kt(v),p._caScrollDist=h[r.p]-g[r.p],e=e/p._caScrollDist*d),p&&p.seek(m),p?e:Math.round(e)}function Se(e,t,n,r){if(e.parentNode!==t){var i,o,a=e.style;if(t===Ae){for(i in e._stOrig=a.cssText,o=ne(e))+i||Vt.test(i)||!o[i]||"string"!=typeof a[i]||"0"===i||(a[i]=o[i]);a.top=n,a.left=r}else a.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}}function Te(e,t){function n(t,s,l,c,u){var f=n.tween,d=s.onComplete,p={};return l=l||o(),u=c&&u||0,c=c||t-l,f&&f.kill(),r=Math.round(l),s[a]=t,(s.modifiers=p)[a]=function(e){return(e=Math.round(o()))!==r&&e!==i&&3<Math.abs(e-r)&&3<Math.abs(e-i)?(f.kill(),n.tween=0):e=l+c*f.ratio+u*f.ratio*f.ratio,i=r,r=Math.round(e)},s.onComplete=function(){n.tween=0,d&&d.call(f)},f=n.tween=Me.to(e,s)}var r,i,o=u(e,t),a="_scroll"+t.p2;return(e[a]=o).wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},le(e,"wheel",o.wheelHandler),n}B.version="3.11.2",B.create=function(e){return new B(e)},B.register=g,B.getAll=function(){return C.slice()},B.getById=function(e){return C.filter((function(t){return t.vars.id===e}))[0]},n()&&v.registerPlugin(B);var Me,Ee,Pe,Ce,Oe,Ae,De,Re,Ye,Ie,Xe,ze,Be,Le,He,Fe,We,Ne,Ve,qe,Ge,Ue,je,Ke,Ze,$e,Je,Qe,et,tt,nt,rt,it=1,ot=Date.now,at=ot(),st=0,lt=0,ct=Math.abs,ut="right",ft="bottom",dt="width",pt="height",ht="Right",gt="Left",vt="Top",mt="Bottom",yt="padding",bt="margin",xt="Width",wt="Height",_t="px",kt=function(e,t){var n=t&&"matrix(1, 0, 0, 1, 0, 0)"!==ne(e)[He]&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},St={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Tt={toggleActions:"play",anticipatePin:0},Mt={top:0,left:0,center:.5,bottom:1,right:1},Et=function(e,t,n,r){var i={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,i[n.a+"Percent"]=r?-100:0,i[n.a]=r?"1px":0,i["border"+o+xt]=1,i["border"+a+xt]=0,i[n.p]=t+"px",Me.set(e,i)},Pt=[],Ct={},Ot={},At=[],Dt=function(e){return Ot[e]&&Ot[e].map((function(e){return e()}))||At},Rt=[],Yt=0,It=function(e,t){if(!st||e){nt=!0,O.forEach((function(e){return $(e)&&e.cacheID++}));var n=Dt("refreshInit");qe&&qt.sort(),t||be(),Pt.slice(0).forEach((function(e){return e.refresh()})),Pt.forEach((function(e){return"max"===e.vars.end&&e.setPositions(e.start,Math.max(e.start+1,j(e.scroller,e._dir)))})),n.forEach((function(e){return e&&e.render&&e.render(-1)})),O.forEach((function(e){return $(e)&&e(e.rec)})),xe(),Re.pause(),Yt++,Bt(2),nt=!1,Dt("refresh")}else le(qt,"scrollEnd",me)},Xt=0,zt=1,Bt=function(e){if(!nt||2===e){qt.isUpdating=!0,rt&&rt.update(0);var t=Pt.length,n=ot(),r=50<=n-at,i=t&&Pt[0].scroll();if(zt=i<Xt?-1:1,Xt=i,r&&(st&&!Le&&200<n-st&&(st=0,Dt("scrollEnd")),Xe=at,at=n),zt<0){for(Fe=t;0<Fe--;)Pt[Fe]&&Pt[Fe].update(0,r);zt=1}else for(Fe=0;Fe<t;Fe++)Pt[Fe]&&Pt[Fe].update(0,r);qt.isUpdating=!1}tt=0},Lt=["left","top",ft,ut,bt+mt,bt+ht,bt+vt,bt+gt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ht=Lt.concat([dt,pt,"boxSizing","max"+xt,"max"+wt,"position",bt,yt,yt+vt,yt+ht,yt+mt,yt+gt]),Ft=/([A-Z])/g,Wt=function(e){if(e){var t,n,r=e.t.style,i=e.length,o=0;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;o<i;o+=2)n=e[o+1],t=e[o],n?r[t]=n:r[t]&&r.removeProperty(t.replace(Ft,"-$1").toLowerCase())}},Nt={left:0,top:0},Vt=/(webkit|moz|length|cssText|inset)/i,qt=(Gt.prototype.init=function(e,t){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),lt){var n,i,o,a,s,l,f,d,p,h,g,v,m,y,b,x,w,_,k,S,T,M,E,P,C,O,D,R,Y,I,B,L,H,F,V,q,K,se,ue=(e=re(Z(e)||J(e)||e.nodeType?{trigger:e}:e,Tt)).onUpdate,pe=e.toggleClass,ge=e.id,ye=e.onToggle,be=e.onRefresh,xe=e.scrub,Ee=e.trigger,De=e.pin,Re=e.pinSpacing,ze=e.invalidateOnRefresh,He=e.anticipatePin,We=e.onScrubComplete,Ne=e.onSnapComplete,Ve=e.once,Ue=e.snap,je=e.pinReparent,Ke=e.pinSpacer,Ze=e.containerAnimation,$e=e.fastScrollEnd,Je=e.preventOverlaps,tt=e.horizontal||e.containerAnimation&&!1!==e.horizontal?X:z,at=!xe&&0!==xe,ut=c(e.scroller||Pe),ft=Me.core.getCache(ut),wt=G(ut),Mt="fixed"===("pinType"in e?e.pinType:r(ut,"pinType")||wt&&"fixed"),Et=[e.onEnter,e.onLeave,e.onEnterBack,e.onLeaveBack],Ot=at&&e.toggleActions.split(" "),At="markers"in e?e.markers:Tt.markers,Dt=wt?0:parseFloat(ne(ut)["border"+tt.p2+xt])||0,Rt=this,Yt=e.onRefreshInit&&function(){return e.onRefreshInit(Rt)},It=function(e,t,n){var i=n.d,o=n.d2,a=n.a;return(a=r(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Pe["inner"+o]:e["client"+o])||0}}(ut,wt,tt),Xt=function(e,t){return!t||~A.indexOf(e)?U(e):function(){return Nt}}(ut,wt),Bt=0,Lt=0,Ht=u(ut,tt);if(Qe(Rt),Rt._dir=tt,He*=45,Rt.scroller=ut,Rt.scroll=Ze?Ze.time.bind(Ze):Ht,a=Ht(),Rt.vars=e,t=t||e.animation,"refreshPriority"in e&&(qe=1,-9999===e.refreshPriority&&(rt=Rt)),ft.tweenScroll=ft.tweenScroll||{top:Te(ut,z),left:Te(ut,X)},Rt.tweenTo=n=ft.tweenScroll[tt.p],Rt.scrubDuration=function(e){(B=J(e)&&e)?I?I.duration(e):I=Me.to(t,{ease:"expo",totalProgress:"+=0.001",duration:B,paused:!0,onComplete:function(){return We&&We(Rt)}}):(I&&I.progress(1).kill(),I=0)},t&&(t.vars.lazy=!1,t._initted||!1!==t.vars.immediateRender&&!1!==e.immediateRender&&t.render(0,!0,!0),Rt.animation=t.pause(),(t.scrollTrigger=Rt).scrubDuration(xe),R=0,ge=ge||t.vars.id),Pt.push(Rt),Ue&&(Q(Ue)&&!Ue.push||(Ue={snapTo:Ue}),"scrollBehavior"in Ae.style&&Me.set(wt?[Ae,Oe]:ut,{scrollBehavior:"auto"}),o=$(Ue.snapTo)?Ue.snapTo:"labels"===Ue.snapTo?function(e){return function(t){return Me.utils.snap(oe(e),t)}}(t):"labelsDirectional"===Ue.snapTo?(Ut=t,function(e,t){return ae(oe(Ut))(e,t.direction)}):!1!==Ue.directional?function(e,t){return ae(Ue.snapTo)(e,ot()-Lt<500?0:t.direction)}:Me.utils.snap(Ue.snapTo),L=Q(L=Ue.duration||{min:.1,max:2})?Ie(L.min,L.max):Ie(L,L),H=Me.delayedCall(Ue.delay||B/2||.1,(function(){var e=Ht(),r=ot()-Lt<500,i=n.tween;if(!(r||Math.abs(Rt.getVelocity())<10)||i||Le||Bt===e)Rt.isActive&&Bt!==e&&H.restart(!0);else{var a=(e-l)/m,s=t&&!at?t.totalProgress():a,c=r?0:(s-Y)/(ot()-Xe)*1e3||0,u=Me.utils.clamp(-a,1-a,ct(c/2)*c/.185),d=a+(!1===Ue.inertia?0:u),p=Ie(0,1,o(d,Rt)),h=Math.round(l+p*m),g=Ue.onStart,v=Ue.onInterrupt,y=Ue.onComplete;if(e<=f&&l<=e&&h!==e){if(i&&!i._initted&&i.data<=ct(h-e))return;!1===Ue.inertia&&(u=p-a),n(h,{duration:L(ct(.185*Math.max(ct(d-s),ct(p-s))/c/.05||0)),ease:Ue.ease||"power3",data:ct(h-e),onInterrupt:function(){return H.restart(!0)&&v&&v(Rt)},onComplete:function(){Rt.update(),Bt=Ht(),R=Y=t&&!at?t.totalProgress():Rt.progress,Ne&&Ne(Rt),y&&y(Rt)}},e,u*m,h-e-u*m),g&&g(Rt,n.tween)}}})).pause()),ge&&(Ct[ge]=Rt),se=(se=(Ee=Rt.trigger=c(Ee||De))&&Ee._gsap&&Ee._gsap.stRevert)&&se(Rt),De=!0===De?Ee:c(De),Z(pe)&&(pe={targets:Ee,className:pe}),De&&(!1===Re||Re===bt||(Re=!(!Re&&"flex"===ne(De.parentNode).display)&&yt),Rt.pin=De,!1!==e.force3D&&Me.set(De,{force3D:!0}),(i=Me.core.getCache(De)).spacer?y=i.pinState:(Ke&&((Ke=c(Ke))&&!Ke.nodeType&&(Ke=Ke.current||Ke.nativeElement),i.spacerIsNative=!!Ke,Ke&&(i.spacerState=_e(Ke))),i.spacer=w=Ke||Ce.createElement("div"),w.classList.add("pin-spacer"),ge&&w.classList.add("pin-spacer-"+ge),i.pinState=y=_e(De)),Rt.spacer=w=i.spacer,D=ne(De),E=D[Re+tt.os2],k=Me.getProperty(De),S=Me.quickSetter(De,tt.a,_t),we(De,w,D),x=_e(De)),At){v=Q(At)?re(At,St):St,h=de("scroller-start",ge,ut,tt,v,0),g=de("scroller-end",ge,ut,tt,v,0,h),_=h["offset"+tt.op.d2];var Ft=c(r(ut,"content")||ut);d=this.markerStart=de("start",ge,Ft,tt,v,_,0,Ze),p=this.markerEnd=de("end",ge,Ft,tt,v,_,0,Ze),Ze&&(K=Me.quickSetter([d,p],tt.a,_t)),Mt||A.length&&!0===r(ut,"fixedMarkers")||(function(e){var t=ne(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(wt?Ae:ut),Me.set([h,g],{force3D:!0}),C=Me.quickSetter(h,tt.a,_t),O=Me.quickSetter(g,tt.a,_t))}if(Ze){var Vt=Ze.vars.onUpdate,qt=Ze.vars.onUpdateParams;Ze.eventCallback("onUpdate",(function(){Rt.update(0,0,1),Vt&&Vt.apply(qt||[])}))}Rt.previous=function(){return Pt[Pt.indexOf(Rt)-1]},Rt.next=function(){return Pt[Pt.indexOf(Rt)+1]},Rt.revert=function(e,n){if(!n)return Rt.kill(!0);var r=!1!==e||!Rt.enabled,i=Be;r!==Rt.isReverted&&(r&&(Rt.scroll.rec||!Be&&!nt||(Rt.scroll.rec=Ht(),nt&&Ht(0)),V=Math.max(Ht(),Rt.scroll.rec||0),F=Rt.progress,q=t&&t.progress()),d&&[d,p,h,g].forEach((function(e){return e.style.display=r?"none":"block"})),r&&(Be=1),Rt.update(r),Be=i,De&&(r?function(e,t,n){Wt(n);var r=e._gsap;if(r.spacerIsNative)Wt(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1}(De,w,y):je&&Rt.isActive||we(De,w,ne(De),P)),Rt.isReverted=r)},Rt.refresh=function(r,i){if(!Be&&Rt.enabled||i)if(De&&r&&st)le(Gt,"scrollEnd",me);else{!nt&&Yt&&Yt(Rt),Be=1,Lt=ot(),n.tween&&(n.tween.kill(),n.tween=0),I&&I.pause(),ze&&t&&t.revert().invalidate(),Rt.isReverted||Rt.revert(!0,!0);for(var o,v,_,S,E,C,O,A,D,R,Y=It(),B=Xt(),L=Ze?Ze.duration():j(ut,tt),W=0,N=0,G=e.end,U=e.endTrigger||Ee,K=e.start||(0!==e.start&&Ee?De?"0 0":"0 100%":0),Q=Rt.pinnedContainer=e.pinnedContainer&&c(e.pinnedContainer),ee=Ee&&Math.max(0,Pt.indexOf(Rt))||0,te=ee;te--;)(C=Pt[te]).end||C.refresh(0,1)||(Be=1),!(O=C.pin)||O!==Ee&&O!==De||C.isReverted||((R=R||[]).unshift(C),C.revert(!0,!0)),C!==Pt[te]&&(ee--,te--);for($(K)&&(K=K(Rt)),l=ke(K,Ee,Y,tt,Ht(),d,h,Rt,B,Dt,Mt,L,Ze)||(De?-.001:0),$(G)&&(G=G(Rt)),Z(G)&&!G.indexOf("+=")&&(~G.indexOf(" ")?G=(Z(K)?K.split(" ")[0]:"")+G:(W=fe(G.substr(2),Y),G=Z(K)?K:l+W,U=Ee)),f=Math.max(l,ke(G||(U?"100% 0":L),U,Y,tt,Ht()+W,p,g,Rt,B,Dt,Mt,L,Ze))||-.001,m=f-l||(l-=.01)&&.001,W=0,te=ee;te--;)(O=(C=Pt[te]).pin)&&C.start-C._pinPush<l&&!Ze&&0<C.end&&(o=C.end-C.start,O!==Ee&&O!==Q||J(K)||(W+=o*(1-C.progress)),O===De&&(N+=o));if(l+=W,f+=W,Rt._pinPush=N,d&&W&&((o={})[tt.a]="+="+W,Q&&(o[tt.p]="-="+Ht()),Me.set([d,p],o)),De)o=ne(De),S=tt===z,_=Ht(),T=parseFloat(k(tt.a))+N,!L&&1<f&&((wt?Ae:ut).style["overflow-"+tt.a]="scroll"),we(De,w,o),x=_e(De),v=kt(De,!0),A=Mt&&u(ut,S?X:z)(),Re&&((P=[Re+tt.os2,m+N+_t]).t=w,(te=Re===yt?ie(De,tt)+m+N:0)&&P.push(tt.d,te+_t),Wt(P),Mt&&Ht(V)),Mt&&((E={top:v.top+(S?_-l:A)+_t,left:v.left+(S?A:_-l)+_t,boxSizing:"border-box",position:"fixed"})[dt]=E.maxWidth=Math.ceil(v.width)+_t,E[pt]=E.maxHeight=Math.ceil(v.height)+_t,E[bt]=E[bt+vt]=E[bt+ht]=E[bt+mt]=E[bt+gt]="0",E[yt]=o[yt],E[yt+vt]=o[yt+vt],E[yt+ht]=o[yt+ht],E[yt+mt]=o[yt+mt],E[yt+gt]=o[yt+gt],b=function(e,t,n){for(var r,i=[],o=e.length,a=n?8:0;a<o;a+=2)r=e[a],i.push(r,r in t?t[r]:e[a+1]);return i.t=e.t,i}(y,E,je),nt&&Ht(0)),t?(D=t._initted,Ge(1),t.render(t.duration(),!0,!0),M=k(tt.a)-T+m+N,m!==M&&Mt&&b.splice(b.length-2,2),t.render(0,!0,!0),D||t.invalidate(),Ge(0)):M=m;else if(Ee&&Ht()&&!Ze)for(v=Ee.parentNode;v&&v!==Ae;)v._pinOffset&&(l-=v._pinOffset,f-=v._pinOffset),v=v.parentNode;R&&R.forEach((function(e){return e.revert(!1,!0)})),Rt.start=l,Rt.end=f,a=s=Ht(),Ze||nt||(a<V&&Ht(V),Rt.scroll.rec=0),Rt.revert(!1,!0),H&&(Bt=-1,Rt.isActive&&Ht(l+m*F),H.restart(!0)),Be=0,t&&at&&(t._initted||q)&&t.progress()!==q&&t.progress(q,!0).render(t.time(),!0,!0),F===Rt.progress&&!Ze||(t&&!at&&t.totalProgress(F,!0),Rt.progress=(a-l)/m===F?0:F),De&&Re&&(w._pinOffset=Math.round(Rt.progress*M)),be&&be(Rt)}},Rt.getVelocity=function(){return(Ht()-s)/(ot()-Xe)*1e3||0},Rt.endAnimation=function(){ee(Rt.callbackAnimation),t&&(I?I.progress(1):t.paused()?at||ee(t,Rt.direction<0,1):ee(t,t.reversed()))},Rt.labelToScroll=function(e){return t&&t.labels&&(l||Rt.refresh()||l)+t.labels[e]/t.duration()*m||0},Rt.getTrailing=function(e){var t=Pt.indexOf(Rt),n=0<Rt.direction?Pt.slice(0,t).reverse():Pt.slice(t+1);return(Z(e)?n.filter((function(t){return t.vars.preventOverlaps===e})):n).filter((function(e){return 0<Rt.direction?e.end<=l:e.start>=f}))},Rt.update=function(e,r,i){if(!Ze||i||e){var o,c,u,d,p,g,v,y=Rt.scroll(),_=e?0:(y-l)/m,k=_<0?0:1<_?1:_||0,P=Rt.progress;if(r&&(s=a,a=Ze?Ht():y,Ue&&(Y=R,R=t&&!at?t.totalProgress():k)),He&&!k&&De&&!Be&&!it&&st&&l<y+(y-s)/(ot()-Xe)*He&&(k=1e-4),k!==P&&Rt.enabled){if(d=(p=(o=Rt.isActive=!!k&&k<1)!=(!!P&&P<1))||!!k!=!!P,Rt.direction=P<k?1:-1,Rt.progress=k,d&&!Be&&(c=k&&!P?0:1===k?1:1===P?2:3,at&&(u=!p&&"none"!==Ot[c+1]&&Ot[c+1]||Ot[c],v=t&&("complete"===u||"reset"===u||u in t))),Je&&(p||v)&&(v||xe||!t)&&($(Je)?Je(Rt):Rt.getTrailing(Je).forEach((function(e){return e.endAnimation()}))),at||(!I||Be||it?t&&t.totalProgress(k,!!Be):((Ze||rt&&rt!==Rt)&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",k,t._tTime/t._tDur):(I.vars.totalProgress=k,I.invalidate().restart()))),De)if(e&&Re&&(w.style[Re+tt.os2]=E),Mt){if(d){if(g=!e&&P<k&&y<f+1&&y+1>=j(ut,tt),je)if(e||!o&&!g)Se(De,w);else{var A=kt(De,!0),D=y-l;Se(De,Ae,A.top+(tt===z?D:0)+_t,A.left+(tt===z?0:D)+_t)}Wt(o||g?b:x),M!==m&&k<1&&o||S(T+(1!==k||g?0:M))}}else S(N(T+M*k));!Ue||n.tween||Be||it||H.restart(!0),pe&&(p||Ve&&k&&(k<1||!et))&&Ye(pe.targets).forEach((function(e){return e.classList[o||Ve?"add":"remove"](pe.className)})),!ue||at||e||ue(Rt),d&&!Be?(at&&(v&&("complete"===u?t.pause().totalProgress(1):"reset"===u?t.restart(!0).pause():"restart"===u?t.restart(!0):t[u]()),ue&&ue(Rt)),!p&&et||(ye&&p&&te(Rt,ye),Et[c]&&te(Rt,Et[c]),Ve&&(1===k?Rt.kill(!1,1):Et[c]=0),p||Et[c=1===k?1:3]&&te(Rt,Et[c])),$e&&!o&&Math.abs(Rt.getVelocity())>(J($e)?$e:2500)&&(ee(Rt.callbackAnimation),I?I.progress(1):ee(t,"reverse"===u?1:!k,1))):at&&ue&&!Be&&ue(Rt)}if(O){var X=Ze?y/Ze.duration()*(Ze._caScrollDist||0):y;C(X+(h._isFlipped?1:0)),O(X)}K&&K(-y/Ze.duration()*(Ze._caScrollDist||0))}},Rt.enable=function(e,t){Rt.enabled||(Rt.enabled=!0,le(ut,"resize",ve),le(wt?Ce:ut,"scroll",he),Yt&&le(Gt,"refreshInit",Yt),!1!==e&&(Rt.progress=F=0,a=s=Bt=Ht()),!1!==t&&Rt.refresh())},Rt.getTween=function(e){return e&&n?n.tween:I},Rt.setPositions=function(e,t){De&&(T+=e-l,M+=t-e-m),Rt.start=l=e,Rt.end=f=t,m=t-e,Rt.update()},Rt.disable=function(e,t){if(Rt.enabled&&(!1!==e&&Rt.revert(!0,!0),Rt.enabled=Rt.isActive=!1,t||I&&I.pause(),V=0,i&&(i.uncache=1),Yt&&ce(Gt,"refreshInit",Yt),H&&(H.pause(),n.tween&&n.tween.kill()&&(n.tween=0)),!wt)){for(var r=Pt.length;r--;)if(Pt[r].scroller===ut&&Pt[r]!==Rt)return;ce(ut,"resize",ve),ce(ut,"scroll",he)}},Rt.kill=function(n,r){Rt.disable(n,r),I&&!r&&I.kill(),ge&&delete Ct[ge];var o=Pt.indexOf(Rt);0<=o&&Pt.splice(o,1),o===Fe&&0<zt&&Fe--,o=0,Pt.forEach((function(e){return e.scroller===Rt.scroller&&(o=1)})),o||nt||(Rt.scroll.rec=0),t&&(t.scrollTrigger=null,n&&t.render(-1),r||t.kill()),d&&[d,p,h,g].forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),rt===Rt&&(rt=0),De&&(i&&(i.uncache=1),o=0,Pt.forEach((function(e){return e.pin===De&&o++})),o||(i.spacer=0)),e.onKill&&e.onKill(Rt)},Rt.enable(!1,!1),se&&se(Rt),t&&t.add&&!m?Me.delayedCall(.01,(function(){return l||f||Rt.refresh()}))&&(m=.01)&&(l=f=0):Rt.refresh()}else this.update=this.refresh=this.kill=W;var Ut},Gt.register=function(e){return Ee||(Me=e||q(),V()&&window.document&&Gt.enable(),Ee=lt),Ee},Gt.defaults=function(e){if(e)for(var t in e)Tt[t]=e[t];return Tt},Gt.disable=function(e,t){lt=0,Pt.forEach((function(n){return n[t?"kill":"disable"](e)})),ce(Pe,"wheel",he),ce(Ce,"scroll",he),clearInterval(ze),ce(Ce,"touchcancel",W),ce(Ae,"touchstart",W),se(ce,Ce,"pointerdown,touchstart,mousedown",H),se(ce,Ce,"pointerup,touchend,mouseup",F),Re.kill(),K(ce);for(var n=0;n<O.length;n+=3)ue(ce,O[n],O[n+1]),ue(ce,O[n],O[n+2])},Gt.enable=function(){if(Pe=window,Ce=document,Oe=Ce.documentElement,Ae=Ce.body,Me&&(Ye=Me.utils.toArray,Ie=Me.utils.clamp,Qe=Me.core.context||W,Ge=Me.core.suppressOverwrites||W,Me.core.globals("ScrollTrigger",Gt),Ae)){lt=1,B.register(Me),Gt.isTouch=B.isTouch,Je=B.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),le(Pe,"wheel",he),De=[Pe,Ce,Oe,Ae],Me.matchMedia?(Gt.matchMedia=function(e){var t,n=Me.matchMedia();for(t in e)n.add(t,e[t]);return n},Me.addEventListener("matchMediaInit",(function(){return be()})),Me.addEventListener("matchMediaRevert",(function(){return ye()})),Me.addEventListener("matchMedia",(function(){It(0,1),Dt("matchMedia")})),Me.matchMedia("(orientation: portrait)",(function(){return ge(),ge}))):console.warn("Requires GSAP 3.11.0 or later"),le(Ce,"scroll",he);var e,t,n=Ae.style,r=n.borderTopStyle,i=Me.core.Animation.prototype;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",e=kt(Ae),z.m=Math.round(e.top+z.sc())||0,X.m=Math.round(e.left+X.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),ze=setInterval(pe,250),Me.delayedCall(.5,(function(){return it=0})),le(Ce,"touchcancel",W),le(Ae,"touchstart",W),se(le,Ce,"pointerdown,touchstart,mousedown",H),se(le,Ce,"pointerup,touchend,mouseup",F),He=Me.utils.checkPrefix("transform"),Ht.push(He),Ee=ot(),Re=Me.delayedCall(.2,It).pause(),Ve=[Ce,"visibilitychange",function(){var e=Pe.innerWidth,t=Pe.innerHeight;Ce.hidden?(We=e,Ne=t):We===e&&Ne===t||ve()},Ce,"DOMContentLoaded",It,Pe,"load",It,Pe,"resize",ve],K(le),Pt.forEach((function(e){return e.enable(0,1)})),t=0;t<O.length;t+=3)ue(ce,O[t],O[t+1]),ue(ce,O[t],O[t+2])}},Gt.config=function(e){"limitCallbacks"in e&&(et=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(ze)||(ze=t)&&setInterval(pe,t),"ignoreMobileResize"in e&&(Ke=1===Gt.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(K(ce)||K(le,e.autoRefreshEvents||"none"),Ue=-1===(e.autoRefreshEvents+"").indexOf("resize"))},Gt.scrollerProxy=function(e,t){var n=c(e),r=O.indexOf(n),i=G(n);~r&&O.splice(r,i?6:2),t&&(i?A.unshift(Pe,t,Ae,t,Oe,t):A.unshift(n,t))},Gt.clearMatchMedia=function(e){Pt.forEach((function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)}))},Gt.isInViewport=function(e,t,n){var r=(Z(e)?c(e):e).getBoundingClientRect(),i=r[n?dt:pt]*t||0;return n?0<r.right-i&&r.left+i<Pe.innerWidth:0<r.bottom-i&&r.top+i<Pe.innerHeight},Gt.positionInViewport=function(e,t,n){Z(e)&&(e=c(e));var r=e.getBoundingClientRect(),i=r[n?dt:pt],o=null==t?i/2:t in Mt?Mt[t]*i:~t.indexOf("%")?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+o)/Pe.innerWidth:(r.top+o)/Pe.innerHeight},Gt.killAll=function(e){if(Pt.forEach((function(e){return"ScrollSmoother"!==e.vars.id&&e.kill()})),!0!==e){var t=Ot.killAll||[];Ot={},t.forEach((function(e){return e()}))}},Gt);function Gt(e,t){Ee||Gt.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}function Ut(e,t,n,r){return r<t?e(r):t<0&&e(0),r<n?(r-t)/(n-t):n<0?t/(t-n):1}function jt(e,t){!0===t?e.style.removeProperty("touch-action"):e.style.touchAction=!0===t?"auto":t?"pan-"+t+(B.isTouch?" pinch-zoom":""):"none",e===Oe&&jt(Ae,t)}function Kt(e){var t,n=e.event,r=e.target,i=e.axis,o=(n.changedTouches?n.changedTouches[0]:n).target,a=o._gsap||Me.core.getCache(o),s=ot();if(!a._isScrollT||2e3<s-a._isScrollT){for(;o&&o.scrollHeight<=o.clientHeight;)o=o.parentNode;a._isScroll=o&&!G(o)&&o!==r&&(Qt[(t=ne(o)).overflowY]||Qt[t.overflowX]),a._isScrollT=s}!a._isScroll&&"x"!==i||(n.stopPropagation(),n._gsapAllow=!0)}function Zt(e,t,n,r){return B.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Kt,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&le(Ce,B.eventTypes[0],tn,!1,!0)},onDisable:function(){return ce(Ce,B.eventTypes[0],tn,!0)}})}function $t(e){function t(){return l=!1}function n(){a=j(y,z),A=Ie(Je?1:0,a),g&&(C=Ie(0,j(y,X))),s=Yt}function r(){w._gsap.y=N(parseFloat(w._gsap.y)+_.offset)+"px",w.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(w._gsap.y)+", 0, 1)",_.offset=_.cacheID=0}function i(){n(),f.isActive()&&f.vars.scrollY>a&&(_()>a?f.progress(1)&&_(a):f.resetTo("scrollY",a))}Q(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var o,a,s,l,f,d,p,h,g=e.normalizeScrollX,v=e.momentum,m=e.allowNestedScroll,y=c(e.target)||Oe,b=Me.core.globals().ScrollSmoother,x=b&&b.get(),w=Je&&(e.content&&c(e.content)||x&&!1!==e.content&&!x.smooth()&&x.content()),_=u(y,z),k=u(y,X),S=1,T=(B.isTouch&&Pe.visualViewport?Pe.visualViewport.scale*Pe.visualViewport.width:Pe.outerWidth)/Pe.innerWidth,M=0,E=$(v)?function(){return v(o)}:function(){return v||2.8},P=Zt(y,e.type,!0,m),C=W,A=W;return w&&Me.set(w,{y:"+=0"}),e.ignoreCheck=function(e){return Je&&"touchmove"===e.type&&function(){if(l){requestAnimationFrame(t);var e=N(o.deltaY/2),n=A(_.v-e);if(w&&n!==_.v+_.offset){_.offset=n-_.v;var i=N((parseFloat(w&&w._gsap.y)||0)-_.offset);w.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+i+", 0, 1)",w._gsap.y=i+"px",_.cacheID=O.cache,Bt()}return!0}_.offset&&r(),l=!0}()||1.05<S&&"touchstart"!==e.type||o.isGesturing||e.touches&&1<e.touches.length},e.onPress=function(){var e=S;S=N((Pe.visualViewport&&Pe.visualViewport.scale||1)/T),f.pause(),e!==S&&jt(y,1.01<S||!g&&"x"),d=k(),p=_(),n(),s=Yt},e.onRelease=e.onGestureStart=function(e,t){if(_.offset&&r(),t){O.cache++;var n,o,s=E();g&&(o=(n=k())+.05*s*-e.velocityX/.227,s*=Ut(k,n,o,j(y,X)),f.vars.scrollX=C(o)),o=(n=_())+.05*s*-e.velocityY/.227,s*=Ut(_,n,o,j(y,z)),f.vars.scrollY=A(o),f.invalidate().duration(s).play(.01),(Je&&f.vars.scrollY>=a||a-1<=n)&&Me.to({},{onUpdate:i,duration:s})}else h.restart(!0)},e.onWheel=function(){f._ts&&f.pause(),1e3<ot()-M&&(s=0,M=ot())},e.onChange=function(e,t,i,o,a){if(Yt!==s&&n(),t&&g&&k(C(o[2]===t?d+(e.startX-e.x):k()+t-o[1])),i){_.offset&&r();var l=a[2]===i,c=l?p+e.startY-e.y:_()+i-a[1],u=A(c);l&&c!==u&&(p+=u-c),_(u)}(i||t)&&Bt()},e.onEnable=function(){jt(y,!g&&"x"),le(Pe,"resize",i),P.enable()},e.onDisable=function(){jt(y,!0),ce(Pe,"resize",i),P.kill()},e.lockAxis=!1!==e.lockAxis,((o=new B(e)).iOS=Je)&&!_()&&_(1),Je&&Me.ticker.add(W),h=o._dc,f=Me.to(o,{ease:"power4",paused:!0,scrollX:g?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:h.vars.onComplete}),o}qt.version="3.11.2",qt.saveStyles=function(e){return e?Ye(e).forEach((function(e){if(e&&e.style){var t=Rt.indexOf(e);0<=t&&Rt.splice(t,5),Rt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),Qe())}})):Rt},qt.revert=function(e,t){return be(!e,t)},qt.create=function(e,t){return new qt(e,t)},qt.refresh=function(e){return e?ve():(Ee||qt.register())&&It(!0)},qt.update=Bt,qt.clearScrollMemory=xe,qt.maxScroll=function(e,t){return j(e,t?X:z)},qt.getScrollFunc=function(e,t){return u(c(e),t?X:z)},qt.getById=function(e){return Ct[e]},qt.getAll=function(){return Pt.filter((function(e){return"ScrollSmoother"!==e.vars.id}))},qt.isScrolling=function(){return!!st},qt.snapDirectional=ae,qt.addEventListener=function(e,t){var n=Ot[e]||(Ot[e]=[]);~n.indexOf(t)||n.push(t)},qt.removeEventListener=function(e,t){var n=Ot[e],r=n&&n.indexOf(t);0<=r&&n.splice(r,1)},qt.batch=function(e,t){function n(e,t){var n=[],r=[],i=Me.delayedCall(a,(function(){t(n,r),n=[],r=[]})).pause();return function(e){n.length||i.restart(!0),n.push(e.trigger),r.push(e),s<=n.length&&i.progress(1)}}var r,i=[],o={},a=t.interval||.016,s=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&$(t[r])&&"onRefreshInit"!==r?n(0,t[r]):t[r];return $(s)&&(s=s(),le(qt,"refresh",(function(){return s=t.batchMax()}))),Ye(e).forEach((function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,i.push(qt.create(t))})),i};var Jt,Qt={auto:1,scroll:1},en=/(input|label|select|textarea)/i,tn=function(e){var t=en.test(e.target.tagName);(t||Jt)&&(e._gsapAllow=!0,Jt=t)};qt.sort=function(e){return Pt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},qt.observe=function(e){return new B(e)},qt.normalizeScroll=function(e){if(void 0===e)return je;if(!0===e&&je)return je.enable();if(!1===e)return je&&je.kill();var t=e instanceof B?e:$t(e);return je&&je.target===t.target&&je.kill(),G(t.target)&&(je=t),t},qt.core={_getVelocityProp:f,_inputObserver:Zt,_scrollers:O,_proxies:A,bridge:{ss:function(){st||Dt("scrollStart"),st=ot()},ref:function(){return Be}}},q()&&Me.registerPlugin(qt),e.ScrollTrigger=qt,e.default=qt,"undefined"==typeof window||window!==e?Object.defineProperty(e,"__esModule",{value:!0}):delete e.default}(e)}();
//# sourceMappingURL=index.7efbe7ca.js.map
