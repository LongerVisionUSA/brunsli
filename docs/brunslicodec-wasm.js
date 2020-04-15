
var BrunsliCodecModule = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(BrunsliCodecModule) {
  BrunsliCodecModule = BrunsliCodecModule || {};


var c;c||(c=typeof BrunsliCodecModule !== 'undefined' ? BrunsliCodecModule : {});var l={},r;for(r in c)c.hasOwnProperty(r)&&(l[r]=c[r]);var t="./this.program";function u(a,d){throw d;}var v=!1,w=!1,x=!1,aa=!1;v="object"===typeof window;w="function"===typeof importScripts;x="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;aa=!v&&!x&&!w;var y="",B,C,E,F;
if(x)y=w?require("path").dirname(y)+"/":__dirname+"/",B=function(a,d){E||(E=require("fs"));F||(F=require("path"));a=F.normalize(a);return E.readFileSync(a,d?null:"utf8")},C=function(a){a=B(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||G("Assertion failed: undefined");return a},1<process.argv.length&&(t=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(a){if(!(a instanceof ba))throw a;}),process.on("unhandledRejection",G),u=function(a){process.exit(a)},
c.inspect=function(){return"[Emscripten Module object]"};else if(aa)"undefined"!=typeof read&&(B=function(a){return read(a)}),C=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||G("Assertion failed: undefined");return a},"function"===typeof quit&&(u=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:
print);else if(v||w)w?y=self.location.href:document.currentScript&&(y=document.currentScript.src),_scriptDir&&(y=_scriptDir),0!==y.indexOf("blob:")?y=y.substr(0,y.lastIndexOf("/")+1):y="",B=function(a){var d=new XMLHttpRequest;d.open("GET",a,!1);d.send(null);return d.responseText},w&&(C=function(a){var d=new XMLHttpRequest;d.open("GET",a,!1);d.responseType="arraybuffer";d.send(null);return new Uint8Array(d.response)});var ca=c.print||console.log.bind(console),H=c.printErr||console.warn.bind(console);
for(r in l)l.hasOwnProperty(r)&&(c[r]=l[r]);l=null;c.thisProgram&&(t=c.thisProgram);c.quit&&(u=c.quit);var I;c.wasmBinary&&(I=c.wasmBinary);var noExitRuntime;c.noExitRuntime&&(noExitRuntime=c.noExitRuntime);"object"!==typeof WebAssembly&&H("no native wasm support detected");var J,da=new WebAssembly.Table({initial:358,maximum:358,element:"anyfunc"}),K=!1,ea="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function L(a,d,e){var f=d+e;for(e=d;a[e]&&!(e>=f);)++e;if(16<e-d&&a.subarray&&ea)return ea.decode(a.subarray(d,e));for(f="";d<e;){var h=a[d++];if(h&128){var g=a[d++]&63;if(192==(h&224))f+=String.fromCharCode((h&31)<<6|g);else{var n=a[d++]&63;h=224==(h&240)?(h&15)<<12|g<<6|n:(h&7)<<18|g<<12|n<<6|a[d++]&63;65536>h?f+=String.fromCharCode(h):(h-=65536,f+=String.fromCharCode(55296|h>>10,56320|h&1023))}}else f+=String.fromCharCode(h)}return f}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");
var M,N,O,P;function fa(a){M=a;c.HEAP8=N=new Int8Array(a);c.HEAP16=new Int16Array(a);c.HEAP32=P=new Int32Array(a);c.HEAPU8=O=new Uint8Array(a);c.HEAPU16=new Uint16Array(a);c.HEAPU32=new Uint32Array(a);c.HEAPF32=new Float32Array(a);c.HEAPF64=new Float64Array(a)}var ha=c.INITIAL_MEMORY||16777216;c.wasmMemory?J=c.wasmMemory:J=new WebAssembly.Memory({initial:ha/65536,maximum:32768});J&&(M=J.buffer);ha=M.byteLength;fa(M);P[120504]=5725056;
function Q(a){for(;0<a.length;){var d=a.shift();if("function"==typeof d)d(c);else{var e=d.I;"number"===typeof e?void 0===d.H?c.dynCall_v(e):c.dynCall_vi(e,d.H):e(void 0===d.H?null:d.H)}}}var ia=[],ja=[],ka=[],la=[];function ma(){var a=c.preRun.shift();ia.unshift(a)}var R=0,S=null,T=null;c.preloadedImages={};c.preloadedAudios={};function G(a){if(c.onAbort)c.onAbort(a);ca(a);H(a);K=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function na(){var a=U;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var U="brunslicodec-wasm.wasm";if(!na()){var oa=U;U=c.locateFile?c.locateFile(oa,y):y+oa}function pa(){try{if(I)return new Uint8Array(I);if(C)return C(U);throw"both async and sync fetching of the wasm failed";}catch(a){G(a)}}
function qa(){return I||!v&&!w||"function"!==typeof fetch?new Promise(function(a){a(pa())}):fetch(U,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+U+"'";return a.arrayBuffer()}).catch(function(){return pa()})}ja.push({I:function(){ra()}});var sa={},ta=[null,[],[]],ua={},ya={};
function za(){if(!Aa){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:t||"./this.program"},d;for(d in ya)a[d]=ya[d];var e=[];for(d in a)e.push(d+"="+a[d]);Aa=e}return Aa}var Aa;function V(a){return 0===a%4&&(0!==a%100||0===a%400)}function Ba(a,d){for(var e=0,f=0;f<=d;e+=a[f++]);return e}
var W=[31,29,31,30,31,30,31,31,30,31,30,31],X=[31,28,31,30,31,30,31,31,30,31,30,31];function Y(a,d){for(a=new Date(a.getTime());0<d;){var e=a.getMonth(),f=(V(a.getFullYear())?W:X)[e];if(d>f-a.getDate())d-=f-a.getDate()+1,a.setDate(1),11>e?a.setMonth(e+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+d);break}}return a}
function Ca(a,d,e,f){function h(b,k,m){for(b="number"===typeof b?b.toString():b||"";b.length<k;)b=m[0]+b;return b}function g(b,k){return h(b,k,"0")}function n(b,k){function m(va){return 0>va?-1:0<va?1:0}var z;0===(z=m(b.getFullYear()-k.getFullYear()))&&0===(z=m(b.getMonth()-k.getMonth()))&&(z=m(b.getDate()-k.getDate()));return z}function A(b){switch(b.getDay()){case 0:return new Date(b.getFullYear()-1,11,29);case 1:return b;case 2:return new Date(b.getFullYear(),0,3);case 3:return new Date(b.getFullYear(),
0,2);case 4:return new Date(b.getFullYear(),0,1);case 5:return new Date(b.getFullYear()-1,11,31);case 6:return new Date(b.getFullYear()-1,11,30)}}function D(b){b=Y(new Date(b.A+1900,0,1),b.G);var k=new Date(b.getFullYear()+1,0,4),m=A(new Date(b.getFullYear(),0,4));k=A(k);return 0>=n(m,b)?0>=n(k,b)?b.getFullYear()+1:b.getFullYear():b.getFullYear()-1}var q=P[f+40>>2];f={L:P[f>>2],K:P[f+4>>2],D:P[f+8>>2],C:P[f+12>>2],B:P[f+16>>2],A:P[f+20>>2],F:P[f+24>>2],G:P[f+28>>2],T:P[f+32>>2],J:P[f+36>>2],M:q?q?
L(O,q,void 0):"":""};e=e?L(O,e,void 0):"";q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var p in q)e=e.replace(new RegExp(p,"g"),q[p]);var wa="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
xa="January February March April May June July August September October November December".split(" ");q={"%a":function(b){return wa[b.F].substring(0,3)},"%A":function(b){return wa[b.F]},"%b":function(b){return xa[b.B].substring(0,3)},"%B":function(b){return xa[b.B]},"%C":function(b){return g((b.A+1900)/100|0,2)},"%d":function(b){return g(b.C,2)},"%e":function(b){return h(b.C,2," ")},"%g":function(b){return D(b).toString().substring(2)},"%G":function(b){return D(b)},"%H":function(b){return g(b.D,2)},
"%I":function(b){b=b.D;0==b?b=12:12<b&&(b-=12);return g(b,2)},"%j":function(b){return g(b.C+Ba(V(b.A+1900)?W:X,b.B-1),3)},"%m":function(b){return g(b.B+1,2)},"%M":function(b){return g(b.K,2)},"%n":function(){return"\n"},"%p":function(b){return 0<=b.D&&12>b.D?"AM":"PM"},"%S":function(b){return g(b.L,2)},"%t":function(){return"\t"},"%u":function(b){return b.F||7},"%U":function(b){var k=new Date(b.A+1900,0,1),m=0===k.getDay()?k:Y(k,7-k.getDay());b=new Date(b.A+1900,b.B,b.C);return 0>n(m,b)?g(Math.ceil((31-
m.getDate()+(Ba(V(b.getFullYear())?W:X,b.getMonth()-1)-31)+b.getDate())/7),2):0===n(m,k)?"01":"00"},"%V":function(b){var k=new Date(b.A+1901,0,4),m=A(new Date(b.A+1900,0,4));k=A(k);var z=Y(new Date(b.A+1900,0,1),b.G);return 0>n(z,m)?"53":0>=n(k,z)?"01":g(Math.ceil((m.getFullYear()<b.A+1900?b.G+32-m.getDate():b.G+1-m.getDate())/7),2)},"%w":function(b){return b.F},"%W":function(b){var k=new Date(b.A,0,1),m=1===k.getDay()?k:Y(k,0===k.getDay()?1:7-k.getDay()+1);b=new Date(b.A+1900,b.B,b.C);return 0>n(m,
b)?g(Math.ceil((31-m.getDate()+(Ba(V(b.getFullYear())?W:X,b.getMonth()-1)-31)+b.getDate())/7),2):0===n(m,k)?"01":"00"},"%y":function(b){return(b.A+1900).toString().substring(2)},"%Y":function(b){return b.A+1900},"%z":function(b){b=b.J;var k=0<=b;b=Math.abs(b)/60;return(k?"+":"-")+String("0000"+(b/60*100+b%60)).slice(-4)},"%Z":function(b){return b.M},"%%":function(){return"%"}};for(p in q)0<=e.indexOf(p)&&(e=e.replace(new RegExp(p,"g"),q[p](f)));p=Da(e);if(p.length>d)return 0;N.set(p,a);return p.length-
1}
function Da(a){for(var d=0,e=0;e<a.length;++e){var f=a.charCodeAt(e);55296<=f&&57343>=f&&(f=65536+((f&1023)<<10)|a.charCodeAt(++e)&1023);127>=f?++d:d=2047>=f?d+2:65535>=f?d+3:d+4}d=Array(d+1);f=d.length;e=0;if(0<f){f=e+f-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var n=a.charCodeAt(++h);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(e>=f)break;d[e++]=g}else{if(2047>=g){if(e+1>=f)break;d[e++]=192|g>>6}else{if(65535>=g){if(e+2>=f)break;d[e++]=224|g>>12}else{if(e+3>=f)break;d[e++]=
240|g>>18;d[e++]=128|g>>12&63}d[e++]=128|g>>6&63}d[e++]=128|g&63}}d[e]=0}return d}
var Fa={g:function(){c.___errno_location&&(P[c.___errno_location()>>2]=63);return-1},f:function(a,d){if(-1===(a|0)||0===d)a=-28;else{var e=sa[a];e&&d===e.R&&(sa[a]=null,e.N&&Ea(e.S));a=0}return a},a:function(){G()},m:function(a,d,e){O.copyWithin(a,d,d+e)},b:function(a){var d=O.length;if(2147483648<a)return!1;for(var e=1;4>=e;e*=2){var f=d*(1+.2/e);f=Math.min(f,a+100663296);f=Math.max(16777216,a,f);0<f%65536&&(f+=65536-f%65536);a:{try{J.grow(Math.min(2147483648,f)-M.byteLength+65535>>>16);fa(J.buffer);
var h=1;break a}catch(g){}h=void 0}if(h)return!0}return!1},h:function(a,d){var e=0;za().forEach(function(f,h){var g=d+e;h=P[a+4*h>>2]=g;for(g=0;g<f.length;++g)N[h++>>0]=f.charCodeAt(g);N[h>>0]=0;e+=f.length+1});return 0},i:function(a,d){var e=za();P[a>>2]=e.length;var f=0;e.forEach(function(h){f+=h.length+1});P[d>>2]=f;return 0},c:function(a){if(!noExitRuntime&&(K=!0,c.onExit))c.onExit(a);u(a,new ba(a))},k:function(){return 0},j:function(a,d,e,f){a=ua.P(a);d=ua.O(a,d,e);P[f>>2]=d;return 0},l:function(){},
d:function(a,d,e,f){for(var h=0,g=0;g<e;g++){for(var n=P[d+8*g>>2],A=P[d+(8*g+4)>>2],D=0;D<A;D++){var q=O[n+D],p=ta[a];0===q||10===q?((1===a?ca:H)(L(p,0)),p.length=0):p.push(q)}h+=A}P[f>>2]=h;return 0},memory:J,e:function(a,d,e,f){return Ca(a,d,e,f)},table:da},Ga=function(){function a(h){c.asm=h.exports;R--;c.monitorRunDependencies&&c.monitorRunDependencies(R);0==R&&(null!==S&&(clearInterval(S),S=null),T&&(h=T,T=null,h()))}function d(h){a(h.instance)}function e(h){return qa().then(function(g){return WebAssembly.instantiate(g,
f)}).then(h,function(g){H("failed to asynchronously prepare wasm: "+g);G(g)})}var f={a:Fa};R++;c.monitorRunDependencies&&c.monitorRunDependencies(R);if(c.instantiateWasm)try{return c.instantiateWasm(f,a)}catch(h){return H("Module.instantiateWasm callback failed with error: "+h),!1}(function(){if(I||"function"!==typeof WebAssembly.instantiateStreaming||na()||"function"!==typeof fetch)return e(d);fetch(U,{credentials:"same-origin"}).then(function(h){return WebAssembly.instantiateStreaming(h,f).then(d,
function(g){H("wasm streaming compile failed: "+g);H("falling back to ArrayBuffer instantiation");e(d)})})})();return{}}();c.asm=Ga;var ra=c.___wasm_call_ctors=function(){return(ra=c.___wasm_call_ctors=c.asm.n).apply(null,arguments)};c._BrunsliToJpeg=function(){return(c._BrunsliToJpeg=c.asm.o).apply(null,arguments)};c._GetJpegData=function(){return(c._GetJpegData=c.asm.p).apply(null,arguments)};c._GetJpegLength=function(){return(c._GetJpegLength=c.asm.q).apply(null,arguments)};
c._FreeJpeg=function(){return(c._FreeJpeg=c.asm.r).apply(null,arguments)};c._JpegToBrunsli=function(){return(c._JpegToBrunsli=c.asm.s).apply(null,arguments)};c._GetBrunsliData=function(){return(c._GetBrunsliData=c.asm.t).apply(null,arguments)};c._GetBrunsliLength=function(){return(c._GetBrunsliLength=c.asm.u).apply(null,arguments)};c._FreeBrunsli=function(){return(c._FreeBrunsli=c.asm.v).apply(null,arguments)};c._malloc=function(){return(c._malloc=c.asm.w).apply(null,arguments)};
var Ea=c._free=function(){return(Ea=c._free=c.asm.x).apply(null,arguments)};c.dynCall_vi=function(){return(c.dynCall_vi=c.asm.y).apply(null,arguments)};c.dynCall_v=function(){return(c.dynCall_v=c.asm.z).apply(null,arguments)};c.asm=Ga;var Z;c.then=function(a){if(Z)a(c);else{var d=c.onRuntimeInitialized;c.onRuntimeInitialized=function(){d&&d();a(c)}}return c};function ba(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}T=function Ha(){Z||Ia();Z||(T=Ha)};
function Ia(){function a(){if(!Z&&(Z=!0,c.calledRun=!0,!K)){Q(ja);Q(ka);if(c.onRuntimeInitialized)c.onRuntimeInitialized();if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var d=c.postRun.shift();la.unshift(d)}Q(la)}}if(!(0<R)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)ma();Q(ia);0<R||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1);a()},1)):a())}}c.run=Ia;
if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();noExitRuntime=!0;Ia();


  return BrunsliCodecModule
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = BrunsliCodecModule;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return BrunsliCodecModule; });
    else if (typeof exports === 'object')
      exports["BrunsliCodecModule"] = BrunsliCodecModule;
    