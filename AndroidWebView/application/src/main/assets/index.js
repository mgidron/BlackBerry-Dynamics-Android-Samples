var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var a=0;return function(b){return $jscomp.SYMBOL_PREFIX+(b||"")+a++}}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();$jscomp.initSymbol();$jscomp.initSymbolIterator();var b=a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
var bridge,Bridge=function(){this._settings={links:[],intercept:!0,injectHTML:!1,nslookup:!0,apacheRedirect:!0,retrieve:!1,debugEnabled:!0,allowCache:!0,stripContentSecurityPolicy:!0,appKinetics:!1}};Bridge.prototype.getTitle=function(){return"Bridge Test"};Bridge.prototype.getSettings=function(){return JSON.stringify(this._settings)};Bridge.prototype.mergeSettings=function(a){this._settings=JSON.parse(a);return this.getSettings()};Bridge.prototype.getStr=function(){return"Bridge test class"};
var Utility=function(){};Utility.element=function(a,b){var c=document.createElement(a);if(null!==b){var d=document.createTextNode(b);c.appendChild(d)}return c};Utility.link_element=function(a){var b=Utility.element("a",a);b.setAttribute("href",a);return b};
var Control=function(a,b){var c=this;this._controlName=a;this._label=a+": ";this._element=b;this.update();b.addEventListener("click",function(a){a.stopPropagation();c._value=!c._value;c._element.textContent="Updating";a={};a[c._controlName]=c._value;bridge.mergeSettings(JSON.stringify(a));c.update()})};Control.prototype.update=function(){this._value=JSON.parse(bridge.getSettings())[this._controlName];this._element.textContent=this._label+this._value};var Main=function(){this._controls=[]};
Main.prototype.initialise=function(a,b,c){var d=Utility;alert("Test for alert notification to WebChromeClient.");var g=document.getElementById(b);if(null===g)document.body.appendChild(d.element("p","getElementById("+b+") null."));else{var h=document.getElementById(c);if(null===h)document.body.appendChild(d.element("p","getElementById("+c+") null."));else{var e=document.getElementById(a);if(null===e)document.body.appendChild(d.element("p","getElementById("+a+") null."));else{void 0===bridge&&(bridge=
new Bridge);e.textContent=bridge.getTitle();var k=bridge.getSettings(),f=JSON.parse(k);e="p";"ul"===g.tagName.toLowerCase()&&(e="li");h.appendChild(d.element("p","main("+a+","+b+","+c+') "'+e+'" <'+g.tagName+'> "'+bridge.getStr()+'" JSON"'+k+'" Object'+JSON.stringify(f)+"."));a=null;b=$jscomp.makeIterator(f.links);for(c=b.next();!c.done;c=b.next())c=c.value,null===a&&(a=d.element(e,null),g.appendChild(a)),c.startsWith("http")?(a.appendChild(d.link_element(c)),a=null):a.appendChild(d.element("span",
c+" "));f=$jscomp.makeIterator(Object.keys(f).sort());for(a=f.next();!a.done;a=f.next())a=a.value,"links"!==a&&(b=d.element(e,null),this._controls.push(new Control(a,b)),g.appendChild(b));h.appendChild(d.element("p","End of main()."))}}}};var main=new Main;