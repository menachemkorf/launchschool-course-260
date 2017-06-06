(function(){function t(t){function e(e,n,r,i,s,o){for(;s>=0&&s<o;s+=t){var a=i?i[s]:s;r=n(r,e[a],a,e)}return r}return function(n,r,i,s){r=_(r,s,4);var o=!S(n)&&y.keys(n),a=(o||n).length,u=t>0?0:a-1;return arguments.length<3&&(i=n[o?o[u]:u],u+=t),e(n,r,i,o,u,a)}}function e(t){return function(e,n,r){n=b(n,r);for(var i=j(e),s=t>0?0:i-1;s>=0&&s<i;s+=t)if(n(e[s],s,e))return s;return-1}}function n(t,e,n){return function(r,i,s){var o=0,a=j(r);if("number"==typeof s)t>0?o=s>=0?s:Math.max(s+a,o):a=s>=0?Math.min(s+1,a):s+a+1;else if(n&&s&&a)return s=n(r,i),r[s]===i?s:-1;if(i!==i)return s=e(l.call(r,o,a),y.isNaN),s>=0?s+o:-1;for(s=t>0?o:a-1;s>=0&&s<a;s+=t)if(r[s]===i)return s;return-1}}function r(t,e){var n=M.length,r=t.constructor,i=y.isFunction(r)&&r.prototype||a,s="constructor";for(y.has(t,s)&&!y.contains(e,s)&&e.push(s);n--;)(s=M[n])in t&&t[s]!==i[s]&&!y.contains(e,s)&&e.push(s)}var i=this,s=i._,o=Array.prototype,a=Object.prototype,u=Function.prototype,c=o.push,l=o.slice,h=a.toString,f=a.hasOwnProperty,d=Array.isArray,p=Object.keys,v=u.bind,g=Object.create,m=function(){},y=function(t){return t instanceof y?t:this instanceof y?void(this._wrapped=t):new y(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=y),exports._=y):i._=y,y.VERSION="1.8.3";var _=function(t,e,n){if(void 0===e)return t;switch(null==n?3:n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,s){return t.call(e,n,r,i,s)}}return function(){return t.apply(e,arguments)}},b=function(t,e,n){return null==t?y.identity:y.isFunction(t)?_(t,e,n):y.isObject(t)?y.matcher(t):y.property(t)};y.iteratee=function(t,e){return b(t,e,1/0)};var x=function(t,e){return function(n){var r=arguments.length;if(r<2||null==n)return n;for(var i=1;i<r;i++)for(var s=arguments[i],o=t(s),a=o.length,u=0;u<a;u++){var c=o[u];e&&void 0!==n[c]||(n[c]=s[c])}return n}},w=function(t){if(!y.isObject(t))return{};if(g)return g(t);m.prototype=t;var e=new m;return m.prototype=null,e},E=function(t){return function(e){return null==e?void 0:e[t]}},k=Math.pow(2,53)-1,j=E("length"),S=function(t){var e=j(t);return"number"==typeof e&&e>=0&&e<=k};y.each=y.forEach=function(t,e,n){e=_(e,n);var r,i;if(S(t))for(r=0,i=t.length;r<i;r++)e(t[r],r,t);else{var s=y.keys(t);for(r=0,i=s.length;r<i;r++)e(t[s[r]],s[r],t)}return t},y.map=y.collect=function(t,e,n){e=b(e,n);for(var r=!S(t)&&y.keys(t),i=(r||t).length,s=Array(i),o=0;o<i;o++){var a=r?r[o]:o;s[o]=e(t[a],a,t)}return s},y.reduce=y.foldl=y.inject=t(1),y.reduceRight=y.foldr=t(-1),y.find=y.detect=function(t,e,n){var r;if(void 0!==(r=S(t)?y.findIndex(t,e,n):y.findKey(t,e,n))&&-1!==r)return t[r]},y.filter=y.select=function(t,e,n){var r=[];return e=b(e,n),y.each(t,function(t,n,i){e(t,n,i)&&r.push(t)}),r},y.reject=function(t,e,n){return y.filter(t,y.negate(b(e)),n)},y.every=y.all=function(t,e,n){e=b(e,n);for(var r=!S(t)&&y.keys(t),i=(r||t).length,s=0;s<i;s++){var o=r?r[s]:s;if(!e(t[o],o,t))return!1}return!0},y.some=y.any=function(t,e,n){e=b(e,n);for(var r=!S(t)&&y.keys(t),i=(r||t).length,s=0;s<i;s++){var o=r?r[s]:s;if(e(t[o],o,t))return!0}return!1},y.contains=y.includes=y.include=function(t,e,n,r){return S(t)||(t=y.values(t)),("number"!=typeof n||r)&&(n=0),y.indexOf(t,e,n)>=0},y.invoke=function(t,e){var n=l.call(arguments,2),r=y.isFunction(e);return y.map(t,function(t){var i=r?e:t[e];return null==i?i:i.apply(t,n)})},y.pluck=function(t,e){return y.map(t,y.property(e))},y.where=function(t,e){return y.filter(t,y.matcher(e))},y.findWhere=function(t,e){return y.find(t,y.matcher(e))},y.max=function(t,e,n){var r,i,s=-1/0,o=-1/0;if(null==e&&null!=t)for(var a=0,u=(t=S(t)?t:y.values(t)).length;a<u;a++)(r=t[a])>s&&(s=r);else e=b(e,n),y.each(t,function(t,n,r){((i=e(t,n,r))>o||i===-1/0&&s===-1/0)&&(s=t,o=i)});return s},y.min=function(t,e,n){var r,i,s=1/0,o=1/0;if(null==e&&null!=t)for(var a=0,u=(t=S(t)?t:y.values(t)).length;a<u;a++)(r=t[a])<s&&(s=r);else e=b(e,n),y.each(t,function(t,n,r){((i=e(t,n,r))<o||i===1/0&&s===1/0)&&(s=t,o=i)});return s},y.shuffle=function(t){for(var e,n=S(t)?t:y.values(t),r=n.length,i=Array(r),s=0;s<r;s++)(e=y.random(0,s))!==s&&(i[s]=i[e]),i[e]=n[s];return i},y.sample=function(t,e,n){return null==e||n?(S(t)||(t=y.values(t)),t[y.random(t.length-1)]):y.shuffle(t).slice(0,Math.max(0,e))},y.sortBy=function(t,e,n){return e=b(e,n),y.pluck(y.map(t,function(t,n,r){return{value:t,index:n,criteria:e(t,n,r)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(n<r||void 0===r)return-1}return t.index-e.index}),"value")};var I=function(t){return function(e,n,r){var i={};return n=b(n,r),y.each(e,function(r,s){var o=n(r,s,e);t(i,r,o)}),i}};y.groupBy=I(function(t,e,n){y.has(t,n)?t[n].push(e):t[n]=[e]}),y.indexBy=I(function(t,e,n){t[n]=e}),y.countBy=I(function(t,e,n){y.has(t,n)?t[n]++:t[n]=1}),y.toArray=function(t){return t?y.isArray(t)?l.call(t):S(t)?y.map(t,y.identity):y.values(t):[]},y.size=function(t){return null==t?0:S(t)?t.length:y.keys(t).length},y.partition=function(t,e,n){e=b(e,n);var r=[],i=[];return y.each(t,function(t,n,s){(e(t,n,s)?r:i).push(t)}),[r,i]},y.first=y.head=y.take=function(t,e,n){if(null!=t)return null==e||n?t[0]:y.initial(t,t.length-e)},y.initial=function(t,e,n){return l.call(t,0,Math.max(0,t.length-(null==e||n?1:e)))},y.last=function(t,e,n){if(null!=t)return null==e||n?t[t.length-1]:y.rest(t,Math.max(0,t.length-e))},y.rest=y.tail=y.drop=function(t,e,n){return l.call(t,null==e||n?1:e)},y.compact=function(t){return y.filter(t,y.identity)};var A=function(t,e,n,r){for(var i=[],s=0,o=r||0,a=j(t);o<a;o++){var u=t[o];if(S(u)&&(y.isArray(u)||y.isArguments(u))){e||(u=A(u,e,n));var c=0,l=u.length;for(i.length+=l;c<l;)i[s++]=u[c++]}else n||(i[s++]=u)}return i};y.flatten=function(t,e){return A(t,e,!1)},y.without=function(t){return y.difference(t,l.call(arguments,1))},y.uniq=y.unique=function(t,e,n,r){y.isBoolean(e)||(r=n,n=e,e=!1),null!=n&&(n=b(n,r));for(var i=[],s=[],o=0,a=j(t);o<a;o++){var u=t[o],c=n?n(u,o,t):u;e?(o&&s===c||i.push(u),s=c):n?y.contains(s,c)||(s.push(c),i.push(u)):y.contains(i,u)||i.push(u)}return i},y.union=function(){return y.uniq(A(arguments,!0,!0))},y.intersection=function(t){for(var e=[],n=arguments.length,r=0,i=j(t);r<i;r++){var s=t[r];if(!y.contains(e,s)){for(var o=1;o<n&&y.contains(arguments[o],s);o++);o===n&&e.push(s)}}return e},y.difference=function(t){var e=A(arguments,!0,!0,1);return y.filter(t,function(t){return!y.contains(e,t)})},y.zip=function(){return y.unzip(arguments)},y.unzip=function(t){for(var e=t&&y.max(t,j).length||0,n=Array(e),r=0;r<e;r++)n[r]=y.pluck(t,r);return n},y.object=function(t,e){for(var n={},r=0,i=j(t);r<i;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n},y.findIndex=e(1),y.findLastIndex=e(-1),y.sortedIndex=function(t,e,n,r){for(var i=(n=b(n,r,1))(e),s=0,o=j(t);s<o;){var a=Math.floor((s+o)/2);n(t[a])<i?s=a+1:o=a}return s},y.indexOf=n(1,y.findIndex,y.sortedIndex),y.lastIndexOf=n(-1,y.findLastIndex),y.range=function(t,e,n){null==e&&(e=t||0,t=0),n=n||1;for(var r=Math.max(Math.ceil((e-t)/n),0),i=Array(r),s=0;s<r;s++,t+=n)i[s]=t;return i};var O=function(t,e,n,r,i){if(!(r instanceof e))return t.apply(n,i);var s=w(t.prototype),o=t.apply(s,i);return y.isObject(o)?o:s};y.bind=function(t,e){if(v&&t.bind===v)return v.apply(t,l.call(arguments,1));if(!y.isFunction(t))throw new TypeError("Bind must be called on a function");var n=l.call(arguments,2),r=function(){return O(t,r,e,this,n.concat(l.call(arguments)))};return r},y.partial=function(t){var e=l.call(arguments,1),n=function(){for(var r=0,i=e.length,s=Array(i),o=0;o<i;o++)s[o]=e[o]===y?arguments[r++]:e[o];for(;r<arguments.length;)s.push(arguments[r++]);return O(t,n,this,this,s)};return n},y.bindAll=function(t){var e,n,r=arguments.length;if(r<=1)throw new Error("bindAll must be passed function names");for(e=1;e<r;e++)t[n=arguments[e]]=y.bind(t[n],t);return t},y.memoize=function(t,e){var n=function(r){var i=n.cache,s=""+(e?e.apply(this,arguments):r);return y.has(i,s)||(i[s]=t.apply(this,arguments)),i[s]};return n.cache={},n},y.delay=function(t,e){var n=l.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},y.defer=y.partial(y.delay,y,1),y.throttle=function(t,e,n){var r,i,s,o=null,a=0;n||(n={});var u=function(){a=!1===n.leading?0:y.now(),o=null,s=t.apply(r,i),o||(r=i=null)};return function(){var c=y.now();a||!1!==n.leading||(a=c);var l=e-(c-a);return r=this,i=arguments,l<=0||l>e?(o&&(clearTimeout(o),o=null),a=c,s=t.apply(r,i),o||(r=i=null)):o||!1===n.trailing||(o=setTimeout(u,l)),s}},y.debounce=function(t,e,n){var r,i,s,o,a,u=function(){var c=y.now()-o;c<e&&c>=0?r=setTimeout(u,e-c):(r=null,n||(a=t.apply(s,i),r||(s=i=null)))};return function(){s=this,i=arguments,o=y.now();var c=n&&!r;return r||(r=setTimeout(u,e)),c&&(a=t.apply(s,i),s=i=null),a}},y.wrap=function(t,e){return y.partial(e,t)},y.negate=function(t){return function(){return!t.apply(this,arguments)}},y.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},y.after=function(t,e){return function(){if(--t<1)return e.apply(this,arguments)}},y.before=function(t,e){var n;return function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=null),n}},y.once=y.partial(y.before,2);var T=!{toString:null}.propertyIsEnumerable("toString"),M=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];y.keys=function(t){if(!y.isObject(t))return[];if(p)return p(t);var e=[];for(var n in t)y.has(t,n)&&e.push(n);return T&&r(t,e),e},y.allKeys=function(t){if(!y.isObject(t))return[];var e=[];for(var n in t)e.push(n);return T&&r(t,e),e},y.values=function(t){for(var e=y.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=t[e[i]];return r},y.mapObject=function(t,e,n){e=b(e,n);for(var r,i=y.keys(t),s=i.length,o={},a=0;a<s;a++)o[r=i[a]]=e(t[r],r,t);return o},y.pairs=function(t){for(var e=y.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=[e[i],t[e[i]]];return r},y.invert=function(t){for(var e={},n=y.keys(t),r=0,i=n.length;r<i;r++)e[t[n[r]]]=n[r];return e},y.functions=y.methods=function(t){var e=[];for(var n in t)y.isFunction(t[n])&&e.push(n);return e.sort()},y.extend=x(y.allKeys),y.extendOwn=y.assign=x(y.keys),y.findKey=function(t,e,n){e=b(e,n);for(var r,i=y.keys(t),s=0,o=i.length;s<o;s++)if(r=i[s],e(t[r],r,t))return r},y.pick=function(t,e,n){var r,i,s={},o=t;if(null==o)return s;y.isFunction(e)?(i=y.allKeys(o),r=_(e,n)):(i=A(arguments,!1,!1,1),r=function(t,e,n){return e in n},o=Object(o));for(var a=0,u=i.length;a<u;a++){var c=i[a],l=o[c];r(l,c,o)&&(s[c]=l)}return s},y.omit=function(t,e,n){if(y.isFunction(e))e=y.negate(e);else{var r=y.map(A(arguments,!1,!1,1),String);e=function(t,e){return!y.contains(r,e)}}return y.pick(t,e,n)},y.defaults=x(y.allKeys,!0),y.create=function(t,e){var n=w(t);return e&&y.extendOwn(n,e),n},y.clone=function(t){return y.isObject(t)?y.isArray(t)?t.slice():y.extend({},t):t},y.tap=function(t,e){return e(t),t},y.isMatch=function(t,e){var n=y.keys(e),r=n.length;if(null==t)return!r;for(var i=Object(t),s=0;s<r;s++){var o=n[s];if(e[o]!==i[o]||!(o in i))return!1}return!0};var N=function(t,e,n,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof y&&(t=t._wrapped),e instanceof y&&(e=e._wrapped);var i=h.call(t);if(i!==h.call(e))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:0==+t?1/+t==1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e}var s="[object Array]"===i;if(!s){if("object"!=typeof t||"object"!=typeof e)return!1;var o=t.constructor,a=e.constructor;if(o!==a&&!(y.isFunction(o)&&o instanceof o&&y.isFunction(a)&&a instanceof a)&&"constructor"in t&&"constructor"in e)return!1}n=n||[],r=r||[];for(var u=n.length;u--;)if(n[u]===t)return r[u]===e;if(n.push(t),r.push(e),s){if((u=t.length)!==e.length)return!1;for(;u--;)if(!N(t[u],e[u],n,r))return!1}else{var c,l=y.keys(t);if(u=l.length,y.keys(e).length!==u)return!1;for(;u--;)if(c=l[u],!y.has(e,c)||!N(t[c],e[c],n,r))return!1}return n.pop(),r.pop(),!0};y.isEqual=function(t,e){return N(t,e)},y.isEmpty=function(t){return null==t||(S(t)&&(y.isArray(t)||y.isString(t)||y.isArguments(t))?0===t.length:0===y.keys(t).length)},y.isElement=function(t){return!(!t||1!==t.nodeType)},y.isArray=d||function(t){return"[object Array]"===h.call(t)},y.isObject=function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},y.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){y["is"+t]=function(e){return h.call(e)==="[object "+t+"]"}}),y.isArguments(arguments)||(y.isArguments=function(t){return y.has(t,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(y.isFunction=function(t){return"function"==typeof t||!1}),y.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},y.isNaN=function(t){return y.isNumber(t)&&t!==+t},y.isBoolean=function(t){return!0===t||!1===t||"[object Boolean]"===h.call(t)},y.isNull=function(t){return null===t},y.isUndefined=function(t){return void 0===t},y.has=function(t,e){return null!=t&&f.call(t,e)},y.noConflict=function(){return i._=s,this},y.identity=function(t){return t},y.constant=function(t){return function(){return t}},y.noop=function(){},y.property=E,y.propertyOf=function(t){return null==t?function(){}:function(e){return t[e]}},y.matcher=y.matches=function(t){return t=y.extendOwn({},t),function(e){return y.isMatch(e,t)}},y.times=function(t,e,n){var r=Array(Math.max(0,t));e=_(e,n,1);for(var i=0;i<t;i++)r[i]=e(i);return r},y.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},y.now=Date.now||function(){return(new Date).getTime()};var P={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},R=y.invert(P),$=function(t){var e=function(e){return t[e]},n="(?:"+y.keys(t).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,e):t}};y.escape=$(P),y.unescape=$(R),y.result=function(t,e,n){var r=null==t?void 0:t[e];return void 0===r&&(r=n),y.isFunction(r)?r.call(t):r};var F=0;y.uniqueId=function(t){var e=++F+"";return t?t+e:e},y.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var H=/(.)^/,C={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},U=/\\|'|\r|\n|\u2028|\u2029/g,B=function(t){return"\\"+C[t]};y.template=function(t,e,n){!e&&n&&(e=n),e=y.defaults({},e,y.templateSettings);var r=RegExp([(e.escape||H).source,(e.interpolate||H).source,(e.evaluate||H).source].join("|")+"|$","g"),i=0,s="__p+='";t.replace(r,function(e,n,r,o,a){return s+=t.slice(i,a).replace(U,B),i=a+e.length,n?s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?s+="'+\n((__t=("+r+"))==null?'':__t)+\n'":o&&(s+="';\n"+o+"\n__p+='"),e}),s+="';\n",e.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var o=new Function(e.variable||"obj","_",s)}catch(t){throw t.source=s,t}var a=function(t){return o.call(this,t,y)},u=e.variable||"obj";return a.source="function("+u+"){\n"+s+"}",a},y.chain=function(t){var e=y(t);return e._chain=!0,e};var q=function(t,e){return t._chain?y(e).chain():e};y.mixin=function(t){y.each(y.functions(t),function(e){var n=y[e]=t[e];y.prototype[e]=function(){var t=[this._wrapped];return c.apply(t,arguments),q(this,n.apply(y,t))}})},y.mixin(y),y.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=o[t];y.prototype[t]=function(){var n=this._wrapped;return e.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0],q(this,n)}}),y.each(["concat","join","slice"],function(t){var e=o[t];y.prototype[t]=function(){return q(this,e.apply(this._wrapped,arguments))}}),y.prototype.value=function(){return this._wrapped},y.prototype.valueOf=y.prototype.toJSON=y.prototype.value,y.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return y})}).call(this),function(t){var e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(n,r,i){e.Backbone=t(e,i,n,r)});else if("undefined"!=typeof exports){var n,r=require("underscore");try{n=require("jquery")}catch(t){}t(e,exports,r,n)}else e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}(function(t,e,n,r){var i=t.Backbone,s=Array.prototype.slice;e.VERSION="1.3.3",e.$=r,e.noConflict=function(){return t.Backbone=i,this},e.emulateHTTP=!1,e.emulateJSON=!1;var o=function(t,e,r){switch(t){case 1:return function(){return n[e](this[r])};case 2:return function(t){return n[e](this[r],t)};case 3:return function(t,i){return n[e](this[r],u(t,this),i)};case 4:return function(t,i,s){return n[e](this[r],u(t,this),i,s)};default:return function(){var t=s.call(arguments);return t.unshift(this[r]),n[e].apply(n,t)}}},a=function(t,e,r){n.each(e,function(e,i){n[i]&&(t.prototype[i]=o(e,i,r))})},u=function(t,e){return n.isFunction(t)?t:n.isObject(t)&&!e._isModel(t)?c(t):n.isString(t)?function(e){return e.get(t)}:t},c=function(t){var e=n.matches(t);return function(t){return e(t.attributes)}},l=e.Events={},h=/\s+/,f=function(t,e,r,i,s){var o,a=0;if(r&&"object"==typeof r){void 0!==i&&"context"in s&&void 0===s.context&&(s.context=i);for(o=n.keys(r);a<o.length;a++)e=f(t,e,o[a],r[o[a]],s)}else if(r&&h.test(r))for(o=r.split(h);a<o.length;a++)e=t(e,o[a],i,s);else e=t(e,r,i,s);return e};l.on=function(t,e,n){return d(this,t,e,n)};var d=function(t,e,n,r,i){return t._events=f(p,t._events||{},e,n,{context:r,ctx:t,listening:i}),i&&((t._listeners||(t._listeners={}))[i.id]=i),t};l.listenTo=function(t,e,r){if(!t)return this;var i=t._listenId||(t._listenId=n.uniqueId("l")),s=this._listeningTo||(this._listeningTo={}),o=s[i];if(!o){var a=this._listenId||(this._listenId=n.uniqueId("l"));o=s[i]={obj:t,objId:i,id:a,listeningTo:s,count:0}}return d(t,e,r,this,o),this};var p=function(t,e,n,r){if(n){var i=t[e]||(t[e]=[]),s=r.context,o=r.ctx,a=r.listening;a&&a.count++,i.push({callback:n,context:s,ctx:s||o,listening:a})}return t};l.off=function(t,e,n){return this._events?(this._events=f(v,this._events,t,e,{context:n,listeners:this._listeners}),this):this},l.stopListening=function(t,e,r){var i=this._listeningTo;if(!i)return this;for(var s=t?[t._listenId]:n.keys(i),o=0;o<s.length;o++){var a=i[s[o]];if(!a)break;a.obj.off(e,r,this)}return this};var v=function(t,e,r,i){if(t){var s,o=0,a=i.context,u=i.listeners;if(e||r||a){for(var c=e?[e]:n.keys(t);o<c.length;o++){var l=t[e=c[o]];if(!l)break;for(var h=[],f=0;f<l.length;f++){var d=l[f];r&&r!==d.callback&&r!==d.callback._callback||a&&a!==d.context?h.push(d):(s=d.listening)&&0==--s.count&&(delete u[s.id],delete s.listeningTo[s.objId])}h.length?t[e]=h:delete t[e]}return t}for(var p=n.keys(u);o<p.length;o++)delete u[(s=u[p[o]]).id],delete s.listeningTo[s.objId]}};l.once=function(t,e,r){var i=f(g,{},t,e,n.bind(this.off,this));return"string"==typeof t&&null==r&&(e=void 0),this.on(i,e,r)},l.listenToOnce=function(t,e,r){var i=f(g,{},e,r,n.bind(this.stopListening,this,t));return this.listenTo(t,i)};var g=function(t,e,r,i){if(r){var s=t[e]=n.once(function(){i(e,s),r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;for(var e=Math.max(0,arguments.length-1),n=Array(e),r=0;r<e;r++)n[r]=arguments[r+1];return f(m,this._events,t,void 0,n),this};var m=function(t,e,n,r){if(t){var i=t[e],s=t.all;i&&s&&(s=s.slice()),i&&y(i,r),s&&y(s,[e].concat(r))}return t},y=function(t,e){var n,r=-1,i=t.length,s=e[0],o=e[1],a=e[2];switch(e.length){case 0:for(;++r<i;)(n=t[r]).callback.call(n.ctx);return;case 1:for(;++r<i;)(n=t[r]).callback.call(n.ctx,s);return;case 2:for(;++r<i;)(n=t[r]).callback.call(n.ctx,s,o);return;case 3:for(;++r<i;)(n=t[r]).callback.call(n.ctx,s,o,a);return;default:for(;++r<i;)(n=t[r]).callback.apply(n.ctx,e);return}};l.bind=l.on,l.unbind=l.off,n.extend(e,l);var _=e.Model=function(t,e){var r=t||{};e||(e={}),this.cid=n.uniqueId(this.cidPrefix),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(r=this.parse(r,e)||{});var i=n.result(this,"defaults");r=n.defaults(n.extend({},i,r),i),this.set(r,e),this.changed={},this.initialize.apply(this,arguments)};n.extend(_.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return n.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return n.escape(this.get(t))},has:function(t){return null!=this.get(t)},matches:function(t){return!!n.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(null==t)return this;var i;if("object"==typeof t?(i=t,r=e):(i={})[t]=e,r||(r={}),!this._validate(i,r))return!1;var s=r.unset,o=r.silent,a=[],u=this._changing;this._changing=!0,u||(this._previousAttributes=n.clone(this.attributes),this.changed={});var c=this.attributes,l=this.changed,h=this._previousAttributes;for(var f in i)e=i[f],n.isEqual(c[f],e)||a.push(f),n.isEqual(h[f],e)?delete l[f]:l[f]=e,s?delete c[f]:c[f]=e;if(this.idAttribute in i&&(this.id=this.get(this.idAttribute)),!o){a.length&&(this._pending=r);for(var d=0;d<a.length;d++)this.trigger("change:"+a[d],this,c[a[d]],r)}if(u)return this;if(!o)for(;this._pending;)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,n.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,n.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!n.isEmpty(this.changed):n.has(this.changed,t)},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&n.clone(this.changed);var e=this._changing?this._previousAttributes:this.attributes,r={};for(var i in t){var s=t[i];n.isEqual(e[i],s)||(r[i]=s)}return!!n.size(r)&&r},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return n.clone(this._previousAttributes)},fetch:function(t){var e=this,r=(t=n.extend({parse:!0},t)).success;return t.success=function(n){var i=t.parse?e.parse(n,t):n;if(!e.set(i,t))return!1;r&&r.call(t.context,e,n,t),e.trigger("sync",e,n,t)},U(this,t),this.sync("read",this,t)},save:function(t,e,r){var i;null==t||"object"==typeof t?(i=t,r=e):(i={})[t]=e;var s=(r=n.extend({validate:!0,parse:!0},r)).wait;if(i&&!s){if(!this.set(i,r))return!1}else if(!this._validate(i,r))return!1;var o=this,a=r.success,u=this.attributes;r.success=function(t){o.attributes=u;var e=r.parse?o.parse(t,r):t;if(s&&(e=n.extend({},i,e)),e&&!o.set(e,r))return!1;a&&a.call(r.context,o,t,r),o.trigger("sync",o,t,r)},U(this,r),i&&s&&(this.attributes=n.extend({},u,i));var c=this.isNew()?"create":r.patch?"patch":"update";"patch"!==c||r.attrs||(r.attrs=i);var l=this.sync(c,this,r);return this.attributes=u,l},destroy:function(t){var e=this,r=(t=t?n.clone(t):{}).success,i=t.wait,s=function(){e.stopListening(),e.trigger("destroy",e,e.collection,t)};t.success=function(n){i&&s(),r&&r.call(t.context,e,n,t),e.isNew()||e.trigger("sync",e,n,t)};var o=!1;return this.isNew()?n.defer(t.success):(U(this,t),o=this.sync("delete",this,t)),i||s(),o},url:function(){var t=n.result(this,"urlRoot")||n.result(this.collection,"url")||C();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},n.extend({},t,{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=n.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;return!r||(this.trigger("invalid",this,r,n.extend(e,{validationError:r})),!1)}}),a(_,{keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1},"attributes");var b=e.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,n.extend({silent:!0},e))},x={add:!0,remove:!0,merge:!0},w={add:!0,remove:!1},E=function(t,e,n){n=Math.min(Math.max(n,0),t.length);var r,i=Array(t.length-n),s=e.length;for(r=0;r<i.length;r++)i[r]=t[r+n];for(r=0;r<s;r++)t[r+n]=e[r];for(r=0;r<i.length;r++)t[r+s+n]=i[r]};n.extend(b.prototype,l,{model:_,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,n.extend({merge:!1},e,w))},remove:function(t,e){e=n.extend({},e);var r=!n.isArray(t);t=r?[t]:t.slice();var i=this._removeModels(t,e);return!e.silent&&i.length&&(e.changes={added:[],merged:[],removed:i},this.trigger("update",this,e)),r?i[0]:i},set:function(t,e){if(null!=t){(e=n.extend({},x,e)).parse&&!this._isModel(t)&&(t=this.parse(t,e)||[]);var r=!n.isArray(t);t=r?[t]:t.slice();var i=e.at;null!=i&&(i=+i),i>this.length&&(i=this.length),i<0&&(i+=this.length+1);var s,o,a=[],u=[],c=[],l=[],h={},f=e.add,d=e.merge,p=e.remove,v=!1,g=this.comparator&&null==i&&!1!==e.sort,m=n.isString(this.comparator)?this.comparator:null;for(o=0;o<t.length;o++){s=t[o];var y=this.get(s);if(y){if(d&&s!==y){var _=this._isModel(s)?s.attributes:s;e.parse&&(_=y.parse(_,e)),y.set(_,e),c.push(y),g&&!v&&(v=y.hasChanged(m))}h[y.cid]||(h[y.cid]=!0,a.push(y)),t[o]=y}else f&&(s=t[o]=this._prepareModel(s,e))&&(u.push(s),this._addReference(s,e),h[s.cid]=!0,a.push(s))}if(p){for(o=0;o<this.length;o++)h[(s=this.models[o]).cid]||l.push(s);l.length&&this._removeModels(l,e)}var b=!1,w=!g&&f&&p;if(a.length&&w?(b=this.length!==a.length||n.some(this.models,function(t,e){return t!==a[e]}),this.models.length=0,E(this.models,a,0),this.length=this.models.length):u.length&&(g&&(v=!0),E(this.models,u,null==i?this.length:i),this.length=this.models.length),v&&this.sort({silent:!0}),!e.silent){for(o=0;o<u.length;o++)null!=i&&(e.index=i+o),(s=u[o]).trigger("add",s,this,e);(v||b)&&this.trigger("sort",this,e),(u.length||l.length||c.length)&&(e.changes={added:u,removed:l,merged:c},this.trigger("update",this,e))}return r?t[0]:t}},reset:function(t,e){e=e?n.clone(e):{};for(var r=0;r<this.models.length;r++)this._removeReference(this.models[r],e);return e.previousModels=this.models,this._reset(),t=this.add(t,n.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,n.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,n.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(null!=t)return this._byId[t]||this._byId[this.modelId(t.attributes||t)]||t.cid&&this._byId[t.cid]},has:function(t){return null!=this.get(t)},at:function(t){return t<0&&(t+=this.length),this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,!0)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;return n.isFunction(e)&&(e=n.bind(e,this)),1===r||n.isString(e)?this.models=this.sortBy(e):this.models.sort(e),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return this.map(t+"")},fetch:function(t){var e=(t=n.extend({parse:!0},t)).success,r=this;return t.success=function(n){var i=t.reset?"reset":"set";r[i](n,t),e&&e.call(t.context,r,n,t),r.trigger("sync",r,n,t)},U(this,t),this.sync("read",this,t)},create:function(t,e){var r=(e=e?n.clone(e):{}).wait;if(!(t=this._prepareModel(t,e)))return!1;r||this.add(t,e);var i=this,s=e.success;return e.success=function(t,e,n){r&&i.add(t,n),s&&s.call(n.context,t,e,n)},t.save(null,e),t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(this._isModel(t))return t.collection||(t.collection=this),t;(e=e?n.clone(e):{}).collection=this;var r=new this.model(t,e);return r.validationError?(this.trigger("invalid",this,r.validationError,e),!1):r},_removeModels:function(t,e){for(var n=[],r=0;r<t.length;r++){var i=this.get(t[r]);if(i){var s=this.indexOf(i);this.models.splice(s,1),this.length--,delete this._byId[i.cid];var o=this.modelId(i.attributes);null!=o&&delete this._byId[o],e.silent||(e.index=s,i.trigger("remove",i,this,e)),n.push(i),this._removeReference(i,e)}}return n},_isModel:function(t){return t instanceof _},_addReference:function(t,e){this._byId[t.cid]=t;var n=this.modelId(t.attributes);null!=n&&(this._byId[n]=t),t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var n=this.modelId(t.attributes);null!=n&&delete this._byId[n],this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,n,r){if(e){if(("add"===t||"remove"===t)&&n!==this)return;if("destroy"===t&&this.remove(e,r),"change"===t){var i=this.modelId(e.previousAttributes()),s=this.modelId(e.attributes);i!==s&&(null!=i&&delete this._byId[i],null!=s&&(this._byId[s]=e))}}this.trigger.apply(this,arguments)}}),a(b,{forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3},"models");var k=e.View=function(t){this.cid=n.uniqueId("view"),n.extend(this,n.pick(t,S)),this._ensureElement(),this.initialize.apply(this,arguments)},j=/^(\S+)\s*(.*)$/,S=["model","collection","el","id","attributes","className","tagName","events"];n.extend(k.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this._removeElement(),this.stopListening(),this},_removeElement:function(){this.$el.remove()},setElement:function(t){return this.undelegateEvents(),this._setElement(t),this.delegateEvents(),this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0]},delegateEvents:function(t){if(t||(t=n.result(this,"events")),!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(n.isFunction(r)||(r=this[r]),r){var i=e.match(j);this.delegate(i[1],i[2],n.bind(r,this))}}return this},delegate:function(t,e,n){return this.$el.on(t+".delegateEvents"+this.cid,e,n),this},undelegateEvents:function(){return this.$el&&this.$el.off(".delegateEvents"+this.cid),this},undelegate:function(t,e,n){return this.$el.off(t+".delegateEvents"+this.cid,e,n),this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(this.el)this.setElement(n.result(this,"el"));else{var t=n.extend({},n.result(this,"attributes"));this.id&&(t.id=n.result(this,"id")),this.className&&(t.class=n.result(this,"className")),this.setElement(this._createElement(n.result(this,"tagName"))),this._setAttributes(t)}},_setAttributes:function(t){this.$el.attr(t)}}),e.sync=function(t,r,i){var s=I[t];n.defaults(i||(i={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var o={type:s,dataType:"json"};if(i.url||(o.url=n.result(r,"url")||C()),null!=i.data||!r||"create"!==t&&"update"!==t&&"patch"!==t||(o.contentType="application/json",o.data=JSON.stringify(i.attrs||r.toJSON(i))),i.emulateJSON&&(o.contentType="application/x-www-form-urlencoded",o.data=o.data?{model:o.data}:{}),i.emulateHTTP&&("PUT"===s||"DELETE"===s||"PATCH"===s)){o.type="POST",i.emulateJSON&&(o.data._method=s);var a=i.beforeSend;i.beforeSend=function(t){if(t.setRequestHeader("X-HTTP-Method-Override",s),a)return a.apply(this,arguments)}}"GET"===o.type||i.emulateJSON||(o.processData=!1);var u=i.error;i.error=function(t,e,n){i.textStatus=e,i.errorThrown=n,u&&u.call(i.context,t,e,n)};var c=i.xhr=e.ajax(n.extend(o,i));return r.trigger("request",r,c,i),c};var I={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var A=e.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},O=/\((.*?)\)/g,T=/(\(\?)?:\w+/g,M=/\*\w+/g,N=/[\-{}\[\]+?.,\\\^$|#\s]/g;n.extend(A.prototype,l,{initialize:function(){},route:function(t,r,i){n.isRegExp(t)||(t=this._routeToRegExp(t)),n.isFunction(r)&&(i=r,r=""),i||(i=this[r]);var s=this;return e.history.route(t,function(n){var o=s._extractParameters(t,n);!1!==s.execute(i,o,r)&&(s.trigger.apply(s,["route:"+r].concat(o)),s.trigger("route",r,o),e.history.trigger("route",s,r,o))}),this},execute:function(t,e,n){t&&t.apply(this,e)},navigate:function(t,n){return e.history.navigate(t,n),this},_bindRoutes:function(){if(this.routes){this.routes=n.result(this,"routes");for(var t,e=n.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(N,"\\$&").replace(O,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/?]+)"}).replace(M,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return n.map(r,function(t,e){return e===r.length-1?t||null:t?decodeURIComponent(t):null})}});var P=e.History=function(){this.handlers=[],this.checkUrl=n.bind(this.checkUrl,this),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},R=/^[#\/]|\s+$/g,$=/^\/+|\/+$/g,F=/#.*$/;P.started=!1,n.extend(P.prototype,l,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root&&!this.getSearch()},matchRoot:function(){return this.decodeFragment(this.location.pathname).slice(0,this.root.length-1)+"/"===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===t.charAt(0)?t.slice(1):t},getFragment:function(t){return null==t&&(t=this._usePushState||!this._wantsHashChange?this.getPath():this.getHash()),t.replace(R,"")},start:function(t){if(P.started)throw new Error("Backbone.history has already been started");if(P.started=!0,this.options=n.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._hasHashChange="onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=("/"+this.root+"/").replace($,"/"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";return this.location.replace(e+"#"+this.getPath()),!0}this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1;var r=document.body,i=r.insertBefore(this.iframe,r.firstChild).contentWindow;i.document.open(),i.document.close(),i.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState?s("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?s("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&t("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),P.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe&&(e=this.getHash(this.iframe.contentWindow)),e===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()},loadUrl:function(t){return!!this.matchRoot()&&(t=this.fragment=this.getFragment(t),n.some(this.handlers,function(e){if(e.route.test(t))return e.callback(t),!0}))},navigate:function(t,e){if(!P.started)return!1;e&&!0!==e||(e={trigger:!!e}),t=this.getFragment(t||"");var n=this.root;""!==t&&"?"!==t.charAt(0)||(n=n.slice(0,-1)||"/");var r=n+t;if(t=this.decodeFragment(t.replace(F,"")),this.fragment!==t){if(this.fragment=t,this._usePushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,r);else{if(!this._wantsHashChange)return this.location.assign(r);if(this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var i=this.iframe.contentWindow;e.replace||(i.document.open(),i.document.close()),this._updateHash(i.location,t,e.replace)}}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,n){if(n){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else t.hash="#"+e}}),e.history=new P;var H=function(t,e){var r,i=this;return r=t&&n.has(t,"constructor")?t.constructor:function(){return i.apply(this,arguments)},n.extend(r,i,e),r.prototype=n.create(i.prototype,t),r.prototype.constructor=r,r.__super__=i.prototype,r};_.extend=b.extend=A.extend=k.extend=P.extend=H;var C=function(){throw new Error('A "url" property or function must be specified')},U=function(t,e){var n=e.error;e.error=function(r){n&&n.call(e.context,t,r,e),t.trigger("error",t,r,e)}};return e});