var gM=Object.defineProperty,yM=Object.defineProperties;var vM=Object.getOwnPropertyDescriptors;var pg=Object.getOwnPropertySymbols;var _M=Object.prototype.hasOwnProperty,xM=Object.prototype.propertyIsEnumerable;var mg=(n,e,t)=>e in n?gM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,it=(n,e)=>{for(var t in e||={})_M.call(e,t)&&mg(n,t,e[t]);if(pg)for(var t of pg(e))xM.call(e,t)&&mg(n,t,e[t]);return n},gt=(n,e)=>yM(n,vM(e));var Bd;function tc(){return Bd}function Qn(n){let e=Bd;return Bd=n,e}var gg=Symbol("NotFound");function ls(n){return n===gg||n?.name==="\u0275NotFound"}function oc(n,e){return Object.is(n,e)}var qt=null,nc=!1,Hd=1,MM=null,on=Symbol("SIGNAL");function Ve(n){let e=qt;return qt=n,e}function ac(){return qt}var _r={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function cc(n){if(nc)throw new Error("");if(qt===null)return;qt.consumerOnSignalRead(n);let e=qt.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=qt.recomputing;if(i&&(t=e!==void 0?e.nextProducer:qt.producers,t!==void 0&&t.producer===n)){qt.producersTail=t,t.lastReadVersion=n.version;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===qt&&(!i||bM(r,qt)))return;let s=ds(qt),o={producer:n,consumer:qt,nextProducer:t,prevConsumer:r,lastReadVersion:n.version,nextConsumer:void 0};qt.producersTail=o,e!==void 0?e.nextProducer=o:qt.producers=o,s&&vg(n,o)}function yg(){Hd++}function lc(n){if(!(ds(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Hd)){if(!n.producerMustRecompute(n)&&!uc(n)){sc(n);return}n.producerRecomputeValue(n),sc(n)}}function zd(n){if(n.consumers===void 0)return;let e=nc;nc=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||EM(i)}}finally{nc=e}}function Gd(){return qt?.consumerAllowSignalWrites!==!1}function EM(n){n.dirty=!0,zd(n),n.consumerMarkedDirty?.(n)}function sc(n){n.dirty=!1,n.lastCleanEpoch=Hd}function us(n){return n&&(n.producersTail=void 0,n.recomputing=!0),Ve(n)}function Mo(n,e){if(Ve(e),!n)return;n.recomputing=!1;let t=n.producersTail,i=t!==void 0?t.nextProducer:n.producers;if(i!==void 0){if(ds(n))do i=Wd(i);while(i!==void 0);t!==void 0?t.nextProducer=void 0:n.producers=void 0}}function uc(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(lc(t),i!==t.version))return!0}return!1}function dc(n){if(ds(n)){let e=n.producers;for(;e!==void 0;)e=Wd(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function vg(n,e){let t=n.consumersTail,i=ds(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)vg(r.producer,r)}function Wd(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!ds(e)){let s=e.producers;for(;s!==void 0;)s=Wd(s)}return t}function ds(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function fc(n){MM?.(n)}function bM(n,e){let t=e.producersTail;if(t!==void 0){let i=e.producers;do{if(i===n)return!0;if(i===t)break;i=i.nextProducer}while(i!==void 0)}return!1}function hc(n,e){let t=Object.create(SM);t.computation=n,e!==void 0&&(t.equal=e);let i=()=>{if(lc(t),cc(t),t.value===xo)throw t.error;return t.value};return i[on]=t,fc(t),i}var ic=Symbol("UNSET"),rc=Symbol("COMPUTING"),xo=Symbol("ERRORED"),SM=gt(it({},_r),{value:ic,dirty:!0,error:null,equal:oc,kind:"computed",producerMustRecompute(n){return n.value===ic||n.value===rc},producerRecomputeValue(n){if(n.value===rc)throw new Error("");let e=n.value;n.value=rc;let t=us(n),i,r=!1;try{i=n.computation(),Ve(null),r=e!==ic&&e!==xo&&i!==xo&&n.equal(e,i)}catch(s){i=xo,n.error=s}finally{Mo(n,t)}if(r){n.value=e;return}n.value=i,n.version++}});function wM(){throw new Error}var _g=wM;function xg(n){_g(n)}function jd(n){_g=n}var TM=null;function $d(n,e){let t=Object.create(Eg);t.value=n,e!==void 0&&(t.equal=e);let i=()=>Mg(t);return i[on]=t,fc(t),[i,o=>pc(t,o),o=>qd(t,o)]}function Mg(n){return cc(n),n.value}function pc(n,e){Gd()||xg(n),n.equal(n.value,e)||(n.value=e,CM(n))}function qd(n,e){Gd()||xg(n),pc(n,e(n.value))}var Eg=gt(it({},_r),{equal:oc,value:void 0,kind:"signal"});function CM(n){n.version++,yg(),zd(n),TM?.(n)}function st(n){return typeof n=="function"}function mc(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var gc=mc(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Eo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var tn=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(st(i))try{i()}catch(s){e=s instanceof gc?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{bg(s)}catch(o){e=e??[],o instanceof gc?e=[...e,...o.errors]:e.push(o)}}if(e)throw new gc(e)}}add(e){var t;if(e&&e!==this)if(this.closed)bg(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Eo(t,e)}remove(e){let{_finalizers:t}=this;t&&Eo(t,e),e instanceof n&&e._removeParent(this)}};tn.EMPTY=(()=>{let n=new tn;return n.closed=!0,n})();var Xd=tn.EMPTY;function yc(n){return n instanceof tn||n&&"closed"in n&&st(n.remove)&&st(n.add)&&st(n.unsubscribe)}function bg(n){st(n)?n():n.unsubscribe()}var Bn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var fs={setTimeout(n,e,...t){let{delegate:i}=fs;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=fs;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function vc(n){fs.setTimeout(()=>{let{onUnhandledError:e}=Bn;if(e)e(n);else throw n})}function Yd(){}var Sg=Zd("C",void 0,void 0);function wg(n){return Zd("E",void 0,n)}function Tg(n){return Zd("N",n,void 0)}function Zd(n,e,t){return{kind:n,value:e,error:t}}var xr=null;function hs(n){if(Bn.useDeprecatedSynchronousErrorHandling){let e=!xr;if(e&&(xr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=xr;if(xr=null,t)throw i}}else n()}function Cg(n){Bn.useDeprecatedSynchronousErrorHandling&&xr&&(xr.errorThrown=!0,xr.error=n)}var Mr=class extends tn{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,yc(e)&&e.add(this)):this.destination=DM}static create(e,t,i){return new ps(e,t,i)}next(e){this.isStopped?Kd(Tg(e),this):this._next(e)}error(e){this.isStopped?Kd(wg(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Kd(Sg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},IM=Function.prototype.bind;function Jd(n,e){return IM.call(n,e)}var Qd=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){_c(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){_c(i)}else _c(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){_c(t)}}},ps=class extends Mr{constructor(e,t,i){super();let r;if(st(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Bn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Jd(e.next,s),error:e.error&&Jd(e.error,s),complete:e.complete&&Jd(e.complete,s)}):r=e}this.destination=new Qd(r)}};function _c(n){Bn.useDeprecatedSynchronousErrorHandling?Cg(n):vc(n)}function AM(n){throw n}function Kd(n,e){let{onStoppedNotification:t}=Bn;t&&fs.setTimeout(()=>t(n,e))}var DM={closed:!0,next:Yd,error:AM,complete:Yd};var ms=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Ig(n){return n}function Ag(n){return n.length===0?Ig:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var Pt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=NM(t)?t:new ps(t,i,r);return hs(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Dg(i),new i((r,s)=>{let o=new ps({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[ms](){return this}pipe(...t){return Ag(t)(this)}toPromise(t){return t=Dg(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Dg(n){var e;return(e=n??Bn.Promise)!==null&&e!==void 0?e:Promise}function RM(n){return n&&st(n.next)&&st(n.error)&&st(n.complete)}function NM(n){return n&&n instanceof Mr||RM(n)&&yc(n)}function PM(n){return st(n?.lift)}function gs(n){return e=>{if(PM(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ys(n,e,t,i,r){return new ef(n,e,t,i,r)}var ef=class extends Mr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var Rg=mc(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var ei=(()=>{class n extends Pt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new xc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Rg}next(t){hs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){hs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){hs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Xd:(this.currentObservers=null,s.push(t),new tn(()=>{this.currentObservers=null,Eo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new Pt;return t.source=this,t}}return n.create=(e,t)=>new xc(e,t),n})(),xc=class extends ei{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Xd}};var bo=class extends ei{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};function OM(n){return n[n.length-1]}function Ng(n){return st(OM(n))?n.pop():void 0}function Og(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Pg(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Er(n){return this instanceof Er?(this.v=n,this):new Er(n)}function Lg(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(y){return new Promise(function(m,p){s.push([h,y,m,p])>1||c(h,y)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(y){f(s[0][3],y)}}function l(h){h.value instanceof Er?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Fg(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Pg=="function"?Pg(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Mc=n=>n&&typeof n.length=="number"&&typeof n!="function";function Ec(n){return st(n?.then)}function bc(n){return st(n[ms])}function Sc(n){return Symbol.asyncIterator&&st(n?.[Symbol.asyncIterator])}function wc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function LM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Tc=LM();function Cc(n){return st(n?.[Tc])}function Ic(n){return Lg(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Er(t.read());if(r)return yield Er(void 0);yield yield Er(i)}}finally{t.releaseLock()}})}function Ac(n){return st(n?.getReader)}function Ui(n){if(n instanceof Pt)return n;if(n!=null){if(bc(n))return FM(n);if(Mc(n))return kM(n);if(Ec(n))return UM(n);if(Sc(n))return kg(n);if(Cc(n))return VM(n);if(Ac(n))return BM(n)}throw wc(n)}function FM(n){return new Pt(e=>{let t=n[ms]();if(st(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function kM(n){return new Pt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function UM(n){return new Pt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,vc)})}function VM(n){return new Pt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function kg(n){return new Pt(e=>{HM(n,e).catch(t=>e.error(t))})}function BM(n){return kg(Ic(n))}function HM(n,e){var t,i,r,s;return Og(this,void 0,void 0,function*(){try{for(t=Fg(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function ti(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Dc(n,e=0){return gs((t,i)=>{t.subscribe(ys(i,r=>ti(i,n,()=>i.next(r),e),()=>ti(i,n,()=>i.complete(),e),r=>ti(i,n,()=>i.error(r),e)))})}function Rc(n,e=0){return gs((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Ug(n,e){return Ui(n).pipe(Rc(e),Dc(e))}function Vg(n,e){return Ui(n).pipe(Rc(e),Dc(e))}function Bg(n,e){return new Pt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Hg(n,e){return new Pt(t=>{let i;return ti(t,e,()=>{i=n[Tc](),ti(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>st(i?.return)&&i.return()})}function Nc(n,e){if(!n)throw new Error("Iterable cannot be null");return new Pt(t=>{ti(t,e,()=>{let i=n[Symbol.asyncIterator]();ti(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function zg(n,e){return Nc(Ic(n),e)}function Gg(n,e){if(n!=null){if(bc(n))return Ug(n,e);if(Mc(n))return Bg(n,e);if(Ec(n))return Vg(n,e);if(Sc(n))return Nc(n,e);if(Cc(n))return Hg(n,e);if(Ac(n))return zg(n,e)}throw wc(n)}function tf(n,e){return e?Gg(n,e):Ui(n)}function br(n,e){return gs((t,i)=>{let r=0;t.subscribe(ys(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:zM}=Array;function GM(n,e){return zM(e)?n(...e):n(e)}function Wg(n){return br(e=>GM(n,e))}var{isArray:WM}=Array,{getPrototypeOf:jM,prototype:$M,keys:qM}=Object;function jg(n){if(n.length===1){let e=n[0];if(WM(e))return{args:e,keys:null};if(XM(e)){let t=qM(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function XM(n){return n&&typeof n=="object"&&jM(n)===$M}function $g(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function nf(...n){let e=Ng(n),{args:t,keys:i}=jg(n),r=new Pt(s=>{let{length:o}=t;if(!o){s.complete();return}let a=new Array(o),c=o,l=o;for(let u=0;u<o;u++){let d=!1;Ui(t[u]).subscribe(ys(s,f=>{d||(d=!0,l--),a[u]=f},()=>c--,void 0,()=>{(!c||!d)&&(l||s.next(i?$g(i,a):a),s.complete())}))}});return e?r.pipe(Wg(e)):r}function qg(n){let e=Ve(null);try{return n()}finally{Ve(e)}}var mf="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",Ye=class extends Error{code;constructor(e,t){super(kc(e,t)),this.code=e}};function YM(n){return`NG0${Math.abs(n)}`}function kc(n,e){return`${YM(n)}${e?": "+e:""}`}function ut(n){for(let e in n)if(n[e]===ut)return e;throw Error("")}function Zg(n,e){for(let t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}function Vi(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(Vi).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function gf(n,e){return n?e?`${n} ${e}`:n:e||""}var ZM=ut({__forward_ref__:ut});function zi(n){return n.__forward_ref__=zi,n.toString=function(){return Vi(this())},n}function Wt(n){return yf(n)?n():n}function yf(n){return typeof n=="function"&&n.hasOwnProperty(ZM)&&n.__forward_ref__===zi}function Jg(n,e){n==null&&vf(e,n,null,"!=")}function vf(n,e,t,i){throw new Error(`ASSERTION ERROR: ${n}`+(i==null?"":` [Expected=> ${t} ${i} ${e} <=Actual]`))}function yt(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function _s(n){return{providers:n.providers||[],imports:n.imports||[]}}function Uc(n){return JM(n,Vc)}function JM(n,e){return n.hasOwnProperty(e)&&n[e]||null}function KM(n){let e=n?.[Vc]??null;return e||null}function sf(n){return n&&n.hasOwnProperty(Oc)?n[Oc]:null}var Vc=ut({\u0275prov:ut}),Oc=ut({\u0275inj:ut}),qe=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=yt({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function _f(n){return n&&!!n.\u0275providers}var xf=ut({\u0275cmp:ut}),Mf=ut({\u0275dir:ut}),Ef=ut({\u0275pipe:ut});var To=ut({\u0275fac:ut}),Ar=ut({__NG_ELEMENT_ID__:ut}),Xg=ut({__NG_ENV_ID__:ut});function bf(n){return typeof n=="string"?n:n==null?"":String(n)}function Lc(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():bf(n)}var Sf=ut({ngErrorCode:ut}),Kg=ut({ngErrorMessage:ut}),wo=ut({ngTokenPath:ut});function wf(n,e){return Qg("",-200,e)}function Bc(n,e){throw new Ye(-201,!1)}function QM(n,e){n[wo]??=[];let t=n[wo],i;typeof e=="object"&&"multi"in e&&e?.multi===!0?(Jg(e.provide,"Token with multi: true should have a provide property"),i=Lc(e.provide)):i=Lc(e),t[0]!==i&&n[wo].unshift(i)}function eE(n,e){let t=n[wo],i=n[Sf],r=n[Kg]||n.message;return n.message=nE(r,i,t,e),n}function Qg(n,e,t){let i=new Ye(e,n);return i[Sf]=e,i[Kg]=n,t&&(i[wo]=t),i}function tE(n){return n[Sf]}function nE(n,e,t=[],i=null){let r="";t&&t.length>1&&(r=` Path: ${t.join(" -> ")}.`);let s=i?` Source: ${i}.`:"";return kc(e,`${n}${s}${r}`)}var of;function ey(){return of}function mn(n){let e=of;return of=n,e}function Tf(n,e,t){let i=Uc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;Bc(n,"Injector")}var iE={},Sr=iE,rE="__NG_DI_FLAG__",af=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=wr(t)||0;try{return this.injector.get(e,i&8?null:Sr,i)}catch(r){if(ls(r))return r;throw r}}};function sE(n,e=0){let t=tc();if(t===void 0)throw new Ye(-203,!1);if(t===null)return Tf(n,void 0,e);{let i=oE(e),r=t.retrieve(n,i);if(ls(r)){if(i.optional)return null;throw r}return r}}function ot(n,e=0){return(ey()||sE)(Wt(n),e)}function ze(n,e){return ot(n,wr(e))}function wr(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function oE(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function cf(n){let e=[];for(let t=0;t<n.length;t++){let i=Wt(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ye(900,!1);let r,s=0;for(let o=0;o<i.length;o++){let a=i[o],c=aE(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(ot(r,s))}else e.push(ot(i))}return e}function aE(n){return n[rE]}function Tr(n,e){let t=n.hasOwnProperty(To);return t?n[To]:null}function ty(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function ny(n){return n.flat(Number.POSITIVE_INFINITY)}function Hc(n,e){n.forEach(t=>Array.isArray(t)?Hc(t,e):e(t))}function Cf(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Io(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function iy(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function ry(n,e,t){let i=xs(n,e);return i>=0?n[i|1]=t:(i=~i,iy(n,i,e,t)),i}function zc(n,e){let t=xs(n,e);if(t>=0)return n[t|1]}function xs(n,e){return cE(n,e,1)}function cE(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var Gi={},gn=[],Wi=new qe(""),If=new qe("",-1),Af=new qe(""),Co=class{get(e,t=Sr){if(t===Sr){let r=Qg("",-201);throw r.name="\u0275NotFound",r}return t}};function Dr(n){return n[xf]||null}function Df(n){return n[Mf]||null}function sy(n){return n[Ef]||null}function Ao(n){return{\u0275providers:n}}function oy(n){return Ao([{provide:Wi,multi:!0,useValue:n}])}function ay(...n){return{\u0275providers:Rf(!0,n),\u0275fromNgModule:!0}}function Rf(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Hc(e,o=>{let a=o;Fc(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&cy(r,s),t}function cy(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Nf(r,s=>{e(s,i)})}}function Fc(n,e,t,i){if(n=Wt(n),!n)return!1;let r=null,s=sf(n),o=!s&&Dr(n);if(!s&&!o){let c=n.ngModule;if(s=sf(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Fc(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Hc(s.imports,u=>{Fc(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&cy(l,e)}if(!a){let l=Tr(r)||(()=>new r);e({provide:r,useFactory:l,deps:gn},r),e({provide:Af,useValue:r,multi:!0},r),e({provide:Wi,useValue:()=>ot(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Nf(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Nf(n,e){for(let t of n)_f(t)&&(t=t.\u0275providers),Array.isArray(t)?Nf(t,e):e(t)}var lE=ut({provide:String,useValue:ut});function ly(n){return n!==null&&typeof n=="object"&&lE in n}function uE(n){return!!(n&&n.useExisting)}function dE(n){return!!(n&&n.useFactory)}function Cr(n){return typeof n=="function"}function uy(n){return!!n.useClass}var Do=new qe(""),Pc={},Yg={},rf;function Ro(){return rf===void 0&&(rf=new Co),rf}var Cn=class{},Ir=class extends Cn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,uf(e,o=>this.processProvider(o)),this.records.set(If,vs(void 0,this)),r.has("environment")&&this.records.set(Cn,vs(void 0,this));let s=this.records.get(Do);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Af,gn,{self:!0}))}retrieve(e,t){let i=wr(t)||0;try{return this.get(e,Sr,i)}catch(r){if(ls(r))return r;throw r}}destroy(){So(this),this._destroyed=!0;let e=Ve(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Ve(e)}}onDestroy(e){return So(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){So(this);let t=Qn(this),i=mn(void 0),r;try{return e()}finally{Qn(t),mn(i)}}get(e,t=Sr,i){if(So(this),e.hasOwnProperty(Xg))return e[Xg](this);let r=wr(i),s,o=Qn(this),a=mn(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=gE(e)&&Uc(e);u&&this.injectableDefInScope(u)?l=vs(lf(e),Pc):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?Ro():this.parent;return t=r&8&&t===Sr?null:t,c.get(e,t)}catch(c){let l=tE(c);throw l===-200||l===-201?new Ye(l,null):c}finally{mn(a),Qn(o)}}resolveInjectorInitializers(){let e=Ve(null),t=Qn(this),i=mn(void 0),r;try{let s=this.get(Wi,gn,{self:!0});for(let o of s)o()}finally{Qn(t),mn(i),Ve(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(Vi(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Wt(e);let t=Cr(e)?e:Wt(e&&e.provide),i=hE(e);if(!Cr(e)&&e.multi===!0){let r=this.records.get(t);r||(r=vs(void 0,Pc,!0),r.factory=()=>cf(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=Ve(null);try{if(t.value===Yg)throw wf(Vi(e));return t.value===Pc&&(t.value=Yg,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&mE(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Ve(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Wt(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function lf(n){let e=Uc(n),t=e!==null?e.factory:Tr(n);if(t!==null)return t;if(n instanceof qe)throw new Ye(204,!1);if(n instanceof Function)return fE(n);throw new Ye(204,!1)}function fE(n){if(n.length>0)throw new Ye(204,!1);let t=KM(n);return t!==null?()=>t.factory(n):()=>new n}function hE(n){if(ly(n))return vs(void 0,n.useValue);{let e=Pf(n);return vs(e,Pc)}}function Pf(n,e,t){let i;if(Cr(n)){let r=Wt(n);return Tr(r)||lf(r)}else if(ly(n))i=()=>Wt(n.useValue);else if(dE(n))i=()=>n.useFactory(...cf(n.deps||[]));else if(uE(n))i=(r,s)=>ot(Wt(n.useExisting),s!==void 0&&s&8?8:void 0);else{let r=Wt(n&&(n.useClass||n.provide));if(pE(n))i=()=>new r(...cf(n.deps));else return Tr(r)||lf(r)}return i}function So(n){if(n.destroyed)throw new Ye(205,!1)}function vs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function pE(n){return!!n.deps}function mE(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function gE(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function uf(n,e){for(let t of n)Array.isArray(t)?uf(t,e):t&&_f(t)?uf(t.\u0275providers,e):e(t)}function Gc(n,e){let t;n instanceof Ir?(So(n),t=n):t=new af(n);let i,r=Qn(t),s=mn(void 0);try{return e()}finally{Qn(r),mn(s)}}function dy(){return ey()!==void 0||tc()!=null}var Hn=0,Pe=1,Fe=2,Ht=3,In=4,An=5,No=6,Ms=7,jt=8,Rr=9,vi=10,Ot=11,Es=12,Of=13,Nr=14,Dn=15,ji=16,Pr=17,ii=18,Po=19,Lf=20,gi=21,Wc=22,Oo=23,yn=24,jc=25,Xt=26,fy=1;var $i=7,Lo=8,Or=9,Yt=10;function ri(n){return Array.isArray(n)&&typeof n[fy]=="object"}function zn(n){return Array.isArray(n)&&n[fy]===!0}function Ff(n){return(n.flags&4)!==0}function qi(n){return n.componentOffset>-1}function $c(n){return(n.flags&1)===1}function si(n){return!!n.template}function bs(n){return(n[Fe]&512)!==0}function Lr(n){return(n[Fe]&256)===256}var hy="svg",py="math";function Rn(n){for(;Array.isArray(n);)n=n[Hn];return n}function kf(n,e){return Rn(e[n])}function oi(n,e){return Rn(e[n.index])}function Fo(n,e){return n.data[e]}function Nn(n,e){let t=e[n];return ri(t)?t:t[Hn]}function my(n){return(n[Fe]&4)===4}function qc(n){return(n[Fe]&128)===128}function gy(n){return zn(n[Ht])}function Xi(n,e){return e==null?null:n[e]}function Uf(n){n[Pr]=0}function Vf(n){n[Fe]&1024||(n[Fe]|=1024,qc(n)&&Uo(n))}function yy(n,e){for(;n>0;)e=e[Nr],n--;return e}function ko(n){return!!(n[Fe]&9216||n[yn]?.dirty)}function Xc(n){n[vi].changeDetectionScheduler?.notify(8),n[Fe]&64&&(n[Fe]|=1024),ko(n)&&Uo(n)}function Uo(n){n[vi].changeDetectionScheduler?.notify(0);let e=Bi(n);for(;e!==null&&!(e[Fe]&8192||(e[Fe]|=8192,!qc(e)));)e=Bi(e)}function Bf(n,e){if(Lr(n))throw new Ye(911,!1);n[gi]===null&&(n[gi]=[]),n[gi].push(e)}function vy(n,e){if(n[gi]===null)return;let t=n[gi].indexOf(e);t!==-1&&n[gi].splice(t,1)}function Bi(n){let e=n[Ht];return zn(e)?e[Ht]:e}function Hf(n){return n[Ms]??=[]}function zf(n){return n.cleanup??=[]}function _y(n,e,t,i){let r=Hf(e);r.push(t),n.firstCreatePass&&zf(n).push(i,r.length-1)}var Ze={lFrame:Py(null),bindingsEnabled:!0,skipHydrationRootTNode:null},Vo=function(n){return n[n.Off=0]="Off",n[n.Exhaustive=1]="Exhaustive",n[n.OnlyDirtyViews=2]="OnlyDirtyViews",n}(Vo||{}),yE=0,df=!1;function xy(){return Ze.lFrame.elementDepthCount}function My(){Ze.lFrame.elementDepthCount++}function Gf(){Ze.lFrame.elementDepthCount--}function Ey(){return Ze.bindingsEnabled}function by(){return Ze.skipHydrationRootTNode!==null}function Wf(n){return Ze.skipHydrationRootTNode===n}function jf(){Ze.skipHydrationRootTNode=null}function at(){return Ze.lFrame.lView}function an(){return Ze.lFrame.tView}function cn(n){return Ze.lFrame.contextLView=n,n[jt]}function ln(n){return Ze.lFrame.contextLView=null,n}function nn(){let n=$f();for(;n!==null&&n.type===64;)n=n.parent;return n}function $f(){return Ze.lFrame.currentTNode}function Sy(){let n=Ze.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Ss(n,e){let t=Ze.lFrame;t.currentTNode=n,t.isParent=e}function qf(){return Ze.lFrame.isParent}function wy(){Ze.lFrame.isParent=!1}function Xf(n){vf("Must never be called in production mode"),yE=n}function Yf(){return df}function Zf(n){let e=df;return df=n,e}function Ty(n){return Ze.lFrame.bindingIndex=n}function Yc(){return Ze.lFrame.bindingIndex++}function Cy(n){let e=Ze.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function Iy(){return Ze.lFrame.inI18n}function Ay(n,e){let t=Ze.lFrame;t.bindingIndex=t.bindingRootIndex=n,Zc(e)}function Dy(){return Ze.lFrame.currentDirectiveIndex}function Zc(n){Ze.lFrame.currentDirectiveIndex=n}function Ry(n){let e=Ze.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function Jf(){return Ze.lFrame.currentQueryIndex}function Jc(n){Ze.lFrame.currentQueryIndex=n}function vE(n){let e=n[Pe];return e.type===2?e.declTNode:e.type===1?n[An]:null}function Kf(n,e,t){if(t&4){let r=e,s=n;for(;r=r.parent,r===null&&!(t&1);)if(r=vE(s),r===null||(s=s[Nr],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Ze.lFrame=Ny();return i.currentTNode=e,i.lView=n,!0}function Kc(n){let e=Ny(),t=n[Pe];Ze.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Ny(){let n=Ze.lFrame,e=n===null?null:n.child;return e===null?Py(n):e}function Py(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Oy(){let n=Ze.lFrame;return Ze.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Qf=Oy;function Qc(){let n=Oy();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Ly(n){return(Ze.lFrame.contextLView=yy(n,Ze.lFrame.contextLView))[jt]}function Fr(){return Ze.lFrame.selectedIndex}function Yi(n){Ze.lFrame.selectedIndex=n}function Fy(){let n=Ze.lFrame;return Fo(n.tView,n.selectedIndex)}function ky(){return Ze.lFrame.currentNamespace}var Uy=!0;function el(){return Uy}function tl(n){Uy=n}function ff(n,e=null,t=null,i){let r=Vy(n,e,t,i);return r.resolveInjectorInitializers(),r}function Vy(n,e=null,t=null,i,r=new Set){let s=[t||gn,ay(n)];return i=i||(typeof n=="object"?void 0:Vi(n)),new Ir(s,e||Ro(),i||null,r)}var yi=class n{static THROW_IF_NOT_FOUND=Sr;static NULL=new Co;static create(e,t){if(Array.isArray(e))return ff({name:""},t,e,"");{let i=e.name??"";return ff({name:i},e.parent,e.providers,i)}}static \u0275prov=yt({token:n,providedIn:"any",factory:()=>ot(If)});static __NG_ELEMENT_ID__=-1},Pn=new qe(""),ws=(()=>{class n{static __NG_ELEMENT_ID__=_E;static __NG_ENV_ID__=t=>t}return n})(),hf=class extends ws{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Lr(this._lView)}onDestroy(e){let t=this._lView;return Bf(t,e),()=>vy(t,e)}};function _E(){return new hf(at())}var ni=class{_console=console;handleError(e){this._console.error("ERROR",e)}},_i=new qe("",{providedIn:"root",factory:()=>{let n=ze(Cn),e;return t=>{n.destroyed&&!e?setTimeout(()=>{throw t}):(e??=n.get(ni),e.handleError(t))}}}),By={provide:Wi,useValue:()=>void ze(ni),multi:!0},xE=new qe("",{providedIn:"root",factory:()=>{let n=ze(Pn).defaultView;if(!n)return;let e=ze(_i),t=s=>{e(s.reason),s.preventDefault()},i=s=>{s.error?e(s.error):e(new Error(s.message,{cause:s})),s.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),ze(ws).onDestroy(()=>{n.removeEventListener("error",i),n.removeEventListener("unhandledrejection",t)})}});function eh(){return Ao([oy(()=>void ze(xE))])}function th(n){return typeof n=="function"&&n[on]!==void 0}function Lt(n,e){let[t,i,r]=$d(n,e?.equal),s=t,o=s[on];return s.set=i,s.update=r,s.asReadonly=Hy.bind(s),s}function Hy(){let n=this[on];if(n.readonlyFn===void 0){let e=()=>this();e[on]=n,n.readonlyFn=e}return n.readonlyFn}function nh(n){return th(n)&&typeof n.set=="function"}var Hi=class{},Bo=new qe("",{providedIn:"root",factory:()=>!1});var ih=new qe(""),nl=new qe("");var kr=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new bo(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new Pt(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=yt({token:n,providedIn:"root",factory:()=>new n})}return n})();function Ho(...n){}var rh=(()=>{class n{static \u0275prov=yt({token:n,providedIn:"root",factory:()=>new pf})}return n})(),pf=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}};function Jo(n){return{toString:n}.toString()}function PE(n){return typeof n=="function"}var cl=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function yv(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var zh=(()=>{let n=()=>vv;return n.ngInherit=!0,n})();function vv(n){return n.type.prototype.ngOnChanges&&(n.setInput=LE),OE}function OE(){let n=xv(this),e=n?.current;if(e){let t=n.previous;if(t===Gi)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function LE(n,e,t,i,r){let s=this.declaredInputs[i],o=xv(n)||FE(n,{previous:Gi,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new cl(l&&l.currentValue,t,c===Gi),yv(n,e,r,t)}var _v="__ngSimpleChanges__";function xv(n){return n[_v]||null}function FE(n,e){return n[_v]=e}var zy=[];var ht=function(n,e=null,t){for(let i=0;i<zy.length;i++){let r=zy[i];r(n,e,t)}};function kE(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=vv(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function UE(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function rl(n,e,t){Mv(n,e,3,t)}function sl(n,e,t,i){(n[Fe]&3)===t&&Mv(n,e,t,i)}function sh(n,e){let t=n[Fe];(t&3)===e&&(t&=16383,t+=1,n[Fe]=t)}function Mv(n,e,t,i){let r=i!==void 0?n[Pr]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Pr]+=65536),(a<s||s==-1)&&(VE(n,t,e,c),n[Pr]=(n[Pr]&4294901760)+c+2),c++}function Gy(n,e){ht(4,n,e);let t=Ve(null);try{e.call(n)}finally{Ve(t),ht(5,n,e)}}function VE(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Fe]>>14<n[Pr]>>16&&(n[Fe]&3)===e&&(n[Fe]+=16384,Gy(a,s)):Gy(a,s)}var Cs=-1,Vr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function BE(n){return(n.flags&8)!==0}function HE(n){return(n.flags&16)!==0}function zE(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];WE(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function GE(n){return n===3||n===4||n===6}function WE(n){return n.charCodeAt(0)===64}function Is(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Wy(n,t,r,null,e[++i]):Wy(n,t,r,null,null))}}return n}function Wy(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function Ev(n){return n!==Cs}function ll(n){return n&32767}function jE(n){return n>>16}function ul(n,e){let t=jE(n),i=e;for(;t>0;)i=i[Nr],t--;return i}var mh=!0;function jy(n){let e=mh;return mh=n,e}var $E=256,bv=$E-1,Sv=5,qE=0,ai={};function XE(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Ar)&&(i=t[Ar]),i==null&&(i=t[Ar]=qE++);let r=i&bv,s=1<<r;e.data[n+(r>>Sv)]|=s}function dl(n,e){let t=wv(n,e);if(t!==-1)return t;let i=e[Pe];i.firstCreatePass&&(n.injectorIndex=e.length,oh(i.data,n),oh(e,null),oh(i.blueprint,null));let r=Gh(n,e),s=n.injectorIndex;if(Ev(r)){let o=ll(r),a=ul(r,e),c=a[Pe].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function oh(n,e){n.push(0,0,0,0,0,0,0,0,e)}function wv(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Gh(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Dv(r),i===null)return Cs;if(t++,r=r[Nr],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Cs}function gh(n,e,t){XE(n,e,t)}function Tv(n,e,t){if(t&8||n!==void 0)return n;Bc(e,"NodeInjector")}function Cv(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[Rr],s=mn(void 0);try{return r?r.get(e,i,t&8):Tf(e,i,t&8)}finally{mn(s)}}return Tv(i,e,t)}function Iv(n,e,t,i=0,r){if(n!==null){if(e[Fe]&2048&&!(i&2)){let o=KE(n,e,t,i,ai);if(o!==ai)return o}let s=Av(n,e,t,i,ai);if(s!==ai)return s}return Cv(e,t,i,r)}function Av(n,e,t,i,r){let s=ZE(t);if(typeof s=="function"){if(!Kf(e,n,i))return i&1?Tv(r,t,i):Cv(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&8))Bc(t);else return o}finally{Qf()}}else if(typeof s=="number"){let o=null,a=wv(n,e),c=Cs,l=i&1?e[Dn][An]:null;for((a===-1||i&4)&&(c=a===-1?Gh(n,e):e[a+8],c===Cs||!qy(i,!1)?a=-1:(o=e[Pe],a=ll(c),e=ul(c,e)));a!==-1;){let u=e[Pe];if($y(s,a,u.data)){let d=YE(a,e,t,o,i,l);if(d!==ai)return d}c=e[a+8],c!==Cs&&qy(i,e[Pe].data[a+8]===l)&&$y(s,a,e)?(o=u,a=ll(c),e=ul(c,e)):a=-1}}return r}function YE(n,e,t,i,r,s){let o=e[Pe],a=o.data[n+8],c=i==null?qi(a)&&mh:i!=o&&(a.type&3)!==0,l=r&1&&s===a,u=ol(a,o,t,c,l);return u!==null?Wo(e,o,u,a,r):ai}function ol(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&si(h)&&h.type===t)return c}return null}function Wo(n,e,t,i,r){let s=n[t],o=e.data;if(s instanceof Vr){let a=s;if(a.resolving){let h=Lc(o[t]);throw wf(h)}let c=jy(a.canSeeViewProviders);a.resolving=!0;let l=o[t].type||o[t],u,d=a.injectImpl?mn(a.injectImpl):null,f=Kf(n,i,0);try{s=n[t]=a.factory(void 0,r,o,n,i),e.firstCreatePass&&t>=i.directiveStart&&kE(t,o[t],e)}finally{d!==null&&mn(d),jy(c),a.resolving=!1,Qf()}}return s}function ZE(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Ar)?n[Ar]:void 0;return typeof e=="number"?e>=0?e&bv:JE:e}function $y(n,e,t){let i=1<<n;return!!(t[e+(n>>Sv)]&i)}function qy(n,e){return!(n&2)&&!(n&1&&e)}var Ur=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Iv(this._tNode,this._lView,e,wr(i),t)}};function JE(){return new Ur(nn(),at())}function Wh(n){return Jo(()=>{let e=n.prototype.constructor,t=e[To]||yh(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[To]||yh(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function yh(n){return yf(n)?()=>{let e=yh(Wt(n));return e&&e()}:Tr(n)}function KE(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Fe]&2048&&!bs(o);){let a=Av(s,o,t,i|2,ai);if(a!==ai)return a;let c=s.parent;if(!c){let l=o[Lf];if(l){let u=l.get(t,ai,i);if(u!==ai)return u}c=Dv(o),o=o[Nr]}s=c}return r}function Dv(n){let e=n[Pe],t=e.type;return t===2?e.declTNode:t===1?n[An]:null}function QE(){return Rs(nn(),at())}function Rs(n,e){return new Ei(oi(n,e))}var Ei=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=QE}return n})();function eb(n){return n instanceof Ei?n.nativeElement:n}function tb(){return this._results[Symbol.iterator]()}var fl=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new ei}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=ny(e);(this._changesDetected=!ty(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=tb};function Rv(n){return(n.flags&128)===128}var jh=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(jh||{}),Nv=new Map,nb=0;function ib(){return nb++}function rb(n){Nv.set(n[Po],n)}function vh(n){Nv.delete(n[Po])}var Xy="__ngContext__";function As(n,e){ri(e)?(n[Xy]=e[Po],rb(e)):n[Xy]=e}function Pv(n){return Lv(n[Es])}function Ov(n){return Lv(n[In])}function Lv(n){for(;n!==null&&!zn(n);)n=n[In];return n}var _h;function $h(n){_h=n}function Fv(){if(_h!==void 0)return _h;if(typeof document<"u")return document;throw new Ye(210,!1)}var xl=new qe("",{providedIn:"root",factory:()=>sb}),sb="ng",Ml=new qe(""),Ns=new qe("",{providedIn:"platform",factory:()=>"unknown"});var El=new qe("",{providedIn:"root",factory:()=>Fv().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var ob="h",ab="b";var kv=!1,Uv=new qe("",{providedIn:"root",factory:()=>kv});var cb=(n,e,t,i)=>{};function lb(n,e,t,i){cb(n,e,t,i)}function qh(n){return(n.flags&32)===32}var ub=()=>null;function Vv(n,e,t=!1){return ub(n,e,t)}function Bv(n,e){let t=n.contentQueries;if(t!==null){let i=Ve(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Jc(s),a.contentQueries(2,e[o],o)}}}finally{Ve(i)}}}function xh(n,e,t){Jc(0);let i=Ve(null);try{e(n,t)}finally{Ve(i)}}function Hv(n,e,t){if(Ff(e)){let i=Ve(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{Ve(i)}}}var xi=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(xi||{});var Mh=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${mf})`}};function zv(n){return n instanceof Mh?n.changingThisBreaksApplicationSecurity:n}function db(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var Gv="ng-template";function fb(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&db(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Xh(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Xh(n){return n.type===4&&n.value!==Gv}function hb(n,e,t){let i=n.type===4&&!t?Gv:n.value;return e===i}function pb(n,e,t){let i=4,r=n.attrs,s=r!==null?yb(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Gn(i)&&!Gn(c))return!1;if(o&&Gn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!hb(n,c,t)||c===""&&e.length===1){if(Gn(i))return!1;o=!0}}else if(i&8){if(r===null||!fb(n,r,c,t)){if(Gn(i))return!1;o=!0}}else{let l=e[++a],u=mb(c,r,Xh(n),t);if(u===-1){if(Gn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Gn(i))return!1;o=!0}}}}return Gn(i)||o}function Gn(n){return(n&1)===0}function mb(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return vb(e,n)}function gb(n,e,t=!1){for(let i=0;i<e.length;i++)if(pb(n,e[i],t))return!0;return!1}function yb(n){for(let e=0;e<n.length;e++){let t=n[e];if(GE(t))return e}return n.length}function vb(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Yy(n,e){return n?":not("+e.trim()+")":e}function _b(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Gn(o)&&(e+=Yy(s,r),r=""),i=o,s=s||!Gn(i);t++}return r!==""&&(e+=Yy(s,r)),e}function xb(n){return n.map(_b).join(",")}function Mb(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Gn(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var bi={};function Eb(n,e){return n.createText(e)}function bb(n,e,t){n.setValue(e,t)}function Wv(n,e,t){return n.createElement(e,t)}function hl(n,e,t,i,r){n.insertBefore(e,t,i,r)}function jv(n,e,t){n.appendChild(e,t)}function Zy(n,e,t,i,r){i!==null?hl(n,e,t,i,r):jv(n,e,t)}function Sb(n,e,t){n.removeChild(null,e,t)}function wb(n,e,t){n.setAttribute(e,"style",t)}function Tb(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function $v(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&zE(n,e,i),r!==null&&Tb(n,e,r),s!==null&&wb(n,e,s)}function Yh(n,e,t,i,r,s,o,a,c,l,u){let d=Xt+i,f=d+r,h=Cb(d,f),g=typeof l=="function"?l():l;return h[Pe]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function Cb(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:bi);return t}function Ib(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Yh(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Zh(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[Hn]=r,d[Fe]=i|4|128|8|64|1024,(l!==null||n&&n[Fe]&2048)&&(d[Fe]|=2048),Uf(d),d[Ht]=d[Nr]=n,d[jt]=t,d[vi]=o||n&&n[vi],d[Ot]=a||n&&n[Ot],d[Rr]=c||n&&n[Rr]||null,d[An]=s,d[Po]=ib(),d[No]=u,d[Lf]=l,d[Dn]=e.type==2?n[Dn]:d,d}function Ab(n,e,t){let i=oi(e,n),r=Ib(t),s=n[vi].rendererFactory,o=Jh(n,Zh(n,r,null,qv(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function qv(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function Xv(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Jh(n,e){return n[Es]?n[Of][In]=e:n[Es]=e,n[Of]=e,e}function bt(n=1){Yv(an(),at(),Fr()+n,!1)}function Yv(n,e,t,i){if(!i)if((e[Fe]&3)===3){let s=n.preOrderCheckHooks;s!==null&&rl(e,s,t)}else{let s=n.preOrderHooks;s!==null&&sl(e,s,0,t)}Yi(t)}var bl=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(bl||{});function Eh(n,e,t,i){let r=Ve(null);try{let[s,o,a]=n.inputs[t],c=null;(o&bl.SignalBased)!==0&&(c=e[s][on]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):yv(e,c,s,i)}finally{Ve(r)}}var Mi=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Mi||{}),Db;function Kh(n,e){return Db(n,e)}function Ts(n,e,t,i,r){if(i!=null){let s,o=!1;zn(i)?s=i:ri(i)&&(o=!0,i=i[Hn]);let a=Rn(i);n===0&&t!==null?r==null?jv(e,t,a):hl(e,t,a,r||null,!0):n===1&&t!==null?hl(e,t,a,r||null,!0):n===2?Sb(e,a,o):n===3&&e.destroyNode(a),s!=null&&zb(e,n,s,t,r)}}function Rb(n,e){Zv(n,e),e[Hn]=null,e[An]=null}function Nb(n,e,t,i,r,s){i[Hn]=r,i[An]=e,Sl(n,i,t,1,r,s)}function Zv(n,e){e[vi].changeDetectionScheduler?.notify(9),Sl(n,e,e[Ot],2,null,null)}function Pb(n){let e=n[Es];if(!e)return ah(n[Pe],n);for(;e;){let t=null;if(ri(e))t=e[Es];else{let i=e[Yt];i&&(t=i)}if(!t){for(;e&&!e[In]&&e!==n;)ri(e)&&ah(e[Pe],e),e=e[Ht];e===null&&(e=n),ri(e)&&ah(e[Pe],e),t=e&&e[In]}e=t}}function Qh(n,e){let t=n[Or],i=t.indexOf(e);t.splice(i,1)}function ep(n,e){if(Lr(e))return;let t=e[Ot];t.destroyNode&&Sl(n,e,t,3,null,null),Pb(e)}function ah(n,e){if(Lr(e))return;let t=Ve(null);try{e[Fe]&=-129,e[Fe]|=256,e[yn]&&dc(e[yn]),Lb(n,e),Ob(n,e),e[Pe].type===1&&e[Ot].destroy();let i=e[ji];if(i!==null&&zn(e[Ht])){i!==e[Ht]&&Qh(i,e);let r=e[ii];r!==null&&r.detachView(n)}vh(e)}finally{Ve(t)}}function Ob(n,e){let t=n.cleanup,i=e[Ms];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Ms]=null);let r=e[gi];if(r!==null){e[gi]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Oo];if(s!==null){e[Oo]=null;for(let o of s)o.destroy()}}function Lb(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Vr)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];ht(4,a,c);try{c.call(a)}finally{ht(5,a,c)}}else{ht(4,r,s);try{s.call(r)}finally{ht(5,r,s)}}}}}function Fb(n,e,t){return kb(n,e.parent,t)}function kb(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[Hn];if(qi(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===xi.None||r===xi.Emulated)return null}return oi(i,t)}function Ub(n,e,t){return Bb(n,e,t)}function Vb(n,e,t){return n.type&40?oi(n,t):null}var Bb=Vb,Jy;function tp(n,e,t,i){let r=Fb(n,i,e),s=e[Ot],o=i.parent||e[An],a=Ub(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Zy(s,r,t[c],a,!1);else Zy(s,r,t,a,!1);Jy!==void 0&&Jy(s,i,e,t,r)}function zo(n,e){if(e!==null){let t=e.type;if(t&3)return oi(e,n);if(t&4)return bh(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return zo(n,i);{let r=n[e.index];return zn(r)?bh(-1,r):Rn(r)}}else{if(t&128)return zo(n,e.next);if(t&32)return Kh(e,n)()||Rn(n[e.index]);{let i=Jv(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Bi(n[Dn]);return zo(r,i)}else return zo(n,e.next)}}}return null}function Jv(n,e){if(e!==null){let i=n[Dn][An],r=e.projection;return i.projection[r]}return null}function bh(n,e){let t=Yt+n+1;if(t<e.length){let i=e[t],r=i[Pe].firstChild;if(r!==null)return zo(i,r)}return e[$i]}function np(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&As(Rn(a),i),t.flags|=2),!qh(t))if(c&8)np(n,e,t.child,i,r,s,!1),Ts(e,n,r,a,s);else if(c&32){let l=Kh(t,i),u;for(;u=l();)Ts(e,n,r,u,s);Ts(e,n,r,a,s)}else c&16?Hb(n,e,i,t,r,s):Ts(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Sl(n,e,t,i,r,s){np(t,i,n.firstChild,e,r,s,!1)}function Hb(n,e,t,i,r,s){let o=t[Dn],c=o[An].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Ts(e,n,r,u,s)}else{let l=c,u=o[Ht];Rv(i)&&(l.flags|=128),np(n,e,l,u,r,s,!0)}}function zb(n,e,t,i,r){let s=t[$i],o=Rn(t);s!==o&&Ts(e,n,i,s,r);for(let a=Yt;a<t.length;a++){let c=t[a];Sl(c[Pe],c,n,e,i,s)}}function Gb(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:Mi.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=Mi.Important),n.setStyle(t,i,r,s))}}function Kv(n,e,t,i,r){let s=Fr(),o=i&2;try{Yi(-1),o&&e.length>Xt&&Yv(n,e,Xt,!1),ht(o?2:0,r,t),t(i,r)}finally{Yi(s),ht(o?3:1,r,t)}}function Qv(n,e,t){Jb(n,e,t),(t.flags&64)===64&&Kb(n,e,t)}function ip(n,e,t=oi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Wb(n,e,t,i){let s=i.get(Uv,kv)||t===xi.ShadowDom,o=n.selectRootElement(e,s);return jb(o),o}function jb(n){$b(n)}var $b=()=>null;function qb(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function Xb(n,e,t,i,r,s){let o=e[Pe];if(rp(n,o,e,t,i)){qi(n)&&Zb(e,n.index);return}n.type&3&&(t=qb(t)),Yb(n,e,t,i,r,s)}function Yb(n,e,t,i,r,s){if(n.type&3){let o=oi(n,e);i=s!=null?s(i,n.value||"",t):i,r.setProperty(o,t,i)}else n.type&12}function Zb(n,e){let t=Nn(e,n);t[Fe]&16||(t[Fe]|=64)}function Jb(n,e,t){let i=t.directiveStart,r=t.directiveEnd;qi(t)&&Ab(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||dl(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Wo(e,n,o,t);if(As(c,e),s!==null&&tS(e,o-i,c,a,t,s),si(a)){let l=Nn(t.index,e);l[jt]=Wo(e,n,o,t)}}}function Kb(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=Dy();try{Yi(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Zc(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&Qb(c,l)}}finally{Yi(-1),Zc(o)}}function Qb(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function eS(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];gb(e,s.selectors,!1)&&(i??=[],si(s)?i.unshift(s):i.push(s))}return i}function tS(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];Eh(i,t,c,l)}}function e_(n,e,t,i,r){let s=Xt+t,o=e[Pe],a=r(o,e,n,i,t);e[s]=a,Ss(n,!0);let c=n.type===2;return c?($v(e[Ot],a,n),(xy()===0||$c(n))&&As(a,e),My()):As(a,e),el()&&(!c||!qh(n))&&tp(o,e,a,n),n}function t_(n){let e=n;return qf()?wy():(e=e.parent,Ss(e,!1)),e}function nS(n,e){let t=n[Rr];if(!t)return;t.get(_i,null)?.(e)}function rp(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];Eh(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];Eh(u,l,i,r),a=!0}return a}function iS(n,e){let t=Nn(e,n),i=t[Pe];rS(i,t);let r=t[Hn];r!==null&&t[No]===null&&(t[No]=Vv(r,t[Rr])),ht(18),sp(i,t,t[jt]),ht(19,t[jt])}function rS(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function sp(n,e,t){Kc(e);try{let i=n.viewQuery;i!==null&&xh(1,i,t);let r=n.template;r!==null&&Kv(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[ii]?.finishViewCreation(n),n.staticContentQueries&&Bv(n,e),n.staticViewQueries&&xh(2,n.viewQuery,t);let s=n.components;s!==null&&sS(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Fe]&=-5,Qc()}}function sS(n,e){for(let t=0;t<e.length;t++)iS(n,e[t])}function n_(n,e,t,i){let r=Ve(null);try{let s=e.tView,a=n[Fe]&4096?4096:16,c=Zh(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[ji]=l;let u=n[ii];return u!==null&&(c[ii]=u.createEmbeddedView(s)),sp(s,c,t),c}finally{Ve(r)}}function Sh(n,e){return!e||e.firstChild===null||Rv(n)}var Ky=!1,oS=new qe("");function jo(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Rn(s)),zn(s)&&i_(s,i);let o=t.type;if(o&8)jo(n,e,t.child,i);else if(o&32){let a=Kh(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=Jv(e,t);if(Array.isArray(a))i.push(...a);else{let c=Bi(e[Dn]);jo(c[Pe],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function i_(n,e){for(let t=Yt;t<n.length;t++){let i=n[t],r=i[Pe].firstChild;r!==null&&jo(i[Pe],i,r,e)}n[$i]!==n[Hn]&&e.push(n[$i])}function r_(n){if(n[jc]!==null){for(let e of n[jc])e.impl.addSequence(e);n[jc].length=0}}var s_=[];function aS(n){return n[yn]??cS(n)}function cS(n){let e=s_.pop()??Object.create(uS);return e.lView=n,e}function lS(n){n.lView[yn]!==n&&(n.lView=null,s_.push(n))}var uS=gt(it({},_r),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Uo(n.lView)},consumerOnSignalRead(){this.lView[yn]=this}});function dS(n){let e=n[yn]??Object.create(fS);return e.lView=n,e}var fS=gt(it({},_r),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Bi(n.lView);for(;e&&!o_(e[Pe]);)e=Bi(e);e&&Vf(e)},consumerOnSignalRead(){this.lView[yn]=this}});function o_(n){return n.type!==2}function a_(n){if(n[Oo]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Oo])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Fe]&8192)}}var hS=100;function op(n,e=0){let i=n[vi].rendererFactory,r=!1;r||i.begin?.();try{pS(n,e)}finally{r||i.end?.()}}function pS(n,e){let t=Yf();try{Zf(!0),wh(n,e);let i=0;for(;ko(n);){if(i===hS)throw new Ye(103,!1);i++,wh(n,1)}}finally{Zf(t)}}function c_(n,e){Xf(e?Vo.Exhaustive:Vo.OnlyDirtyViews);try{op(n)}finally{Xf(Vo.Off)}}function mS(n,e,t,i){if(Lr(e))return;let r=e[Fe],s=!1,o=!1;Kc(e);let a=!0,c=null,l=null;s||(o_(n)?(l=aS(e),c=us(l)):ac()===null?(a=!1,l=dS(e),c=us(l)):e[yn]&&(dc(e[yn]),e[yn]=null));try{Uf(e),Ty(n.bindingStartIndex),t!==null&&Kv(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&rl(e,h,null)}else{let h=n.preOrderHooks;h!==null&&sl(e,h,0,null),sh(e,0)}if(o||gS(e),a_(e),l_(e,0),n.contentQueries!==null&&Bv(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&rl(e,h)}else{let h=n.contentHooks;h!==null&&sl(e,h,1),sh(e,1)}vS(n,e);let d=n.components;d!==null&&d_(e,d,0);let f=n.viewQuery;if(f!==null&&xh(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&rl(e,h)}else{let h=n.viewHooks;h!==null&&sl(e,h,2),sh(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Wc]){for(let h of e[Wc])h();e[Wc]=null}s||(r_(e),e[Fe]&=-73)}catch(u){throw s||Uo(e),u}finally{l!==null&&(Mo(l,c),a&&lS(l)),Qc()}}function l_(n,e){for(let t=Pv(n);t!==null;t=Ov(t))for(let i=Yt;i<t.length;i++){let r=t[i];u_(r,e)}}function gS(n){for(let e=Pv(n);e!==null;e=Ov(e)){if(!(e[Fe]&2))continue;let t=e[Or];for(let i=0;i<t.length;i++){let r=t[i];Vf(r)}}}function yS(n,e,t){ht(18);let i=Nn(e,n);u_(i,t),ht(19,i[jt])}function u_(n,e){qc(n)&&wh(n,e)}function wh(n,e){let i=n[Pe],r=n[Fe],s=n[yn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&uc(s)),o||=!1,s&&(s.dirty=!1),n[Fe]&=-9217,o)mS(i,n,i.template,n[jt]);else if(r&8192){let a=Ve(null);try{a_(n),l_(n,1);let c=i.components;c!==null&&d_(n,c,1),r_(n)}finally{Ve(a)}}}function d_(n,e,t){for(let i=0;i<e.length;i++)yS(n,e[i],t)}function vS(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Yi(~r);else{let s=r,o=t[++i],a=t[++i];Ay(o,s);let c=e[s];ht(24,c),a(2,c),ht(25,c)}}}finally{Yi(-1)}}function ap(n,e){let t=Yf()?64:1088;for(n[vi].changeDetectionScheduler?.notify(e);n;){n[Fe]|=t;let i=Bi(n);if(bs(n)&&!i)return n;n=i}return null}function f_(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function _S(n,e){let t=Yt+e;if(t<n.length)return n[t]}function h_(n,e,t,i=!0){let r=e[Pe];if(MS(r,e,n,t),i){let o=bh(t,n),a=e[Ot],c=a.parentNode(n[$i]);c!==null&&Nb(r,n[An],a,e,c,o)}let s=e[No];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function xS(n,e){let t=pl(n,e);return t!==void 0&&ep(t[Pe],t),t}function pl(n,e){if(n.length<=Yt)return;let t=Yt+e,i=n[t];if(i){let r=i[ji];r!==null&&r!==n&&Qh(r,i),e>0&&(n[t-1][In]=i[In]);let s=Io(n,Yt+e);Rb(i[Pe],i);let o=s[ii];o!==null&&o.detachView(s[Pe]),i[Ht]=null,i[In]=null,i[Fe]&=-129}return i}function MS(n,e,t,i){let r=Yt+i,s=t.length;i>0&&(t[r-1][In]=e),i<s-Yt?(e[In]=t[r],Cf(t,Yt+i,e)):(t.push(e),e[In]=null),e[Ht]=t;let o=e[ji];o!==null&&t!==o&&p_(o,e);let a=e[ii];a!==null&&a.insertView(n),Xc(e),e[Fe]|=128}function p_(n,e){let t=n[Or],i=e[Ht];if(ri(i))n[Fe]|=2;else{let r=i[Ht][Dn];e[Dn]!==r&&(n[Fe]|=2)}t===null?n[Or]=[e]:t.push(e)}var Zi=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[Pe];return jo(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[jt]}set context(e){this._lView[jt]=e}get destroyed(){return Lr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Ht];if(zn(e)){let t=e[Lo],i=t?t.indexOf(this):-1;i>-1&&(pl(e,i),Io(t,i))}this._attachedToViewContainer=!1}ep(this._lView[Pe],this._lView)}onDestroy(e){Bf(this._lView,e)}markForCheck(){ap(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Fe]&=-129}reattach(){Xc(this._lView),this._lView[Fe]|=128}detectChanges(){this._lView[Fe]|=1024,op(this._lView)}checkNoChanges(){return;try{this.exhaustive??=this._lView[Rr].get(oS,Ky)}catch{this.exhaustive=Ky}}attachToViewContainerRef(){if(this._appRef)throw new Ye(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=bs(this._lView),t=this._lView[ji];t!==null&&!e&&Qh(t,this._lView),Zv(this._lView[Pe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ye(902,!1);this._appRef=e;let t=bs(this._lView),i=this._lView[ji];i!==null&&!t&&p_(i,this._lView),Xc(this._lView)}};var $o=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=ES;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let s=n_(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new Zi(s)}}return n})();function ES(){return cp(nn(),at())}function cp(n,e){return n.type&4?new $o(e,n,Rs(n,e)):null}function wl(n,e,t,i,r){let s=n.data[e];if(s===null)s=bS(n,e,t,i,r),Iy()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Sy();s.injectorIndex=o===null?-1:o.injectorIndex}return Ss(s,!0),s}function bS(n,e,t,i,r){let s=$f(),o=qf(),a=o?s:s&&s.parent,c=n.data[e]=wS(n,a,t,e,i,r);return SS(n,c,s,o),c}function SS(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function wS(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return by()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var uF=new RegExp(`^(\\d+)*(${ab}|${ob})*(.*)`);var TS=()=>null,CS=()=>null;function Qy(n,e){return TS(n,e)}function IS(n,e,t){return CS(n,e,t)}var m_=class{},Tl=class{},Th=class{resolveComponentFactory(e){throw new Ye(917,!1)}},Cl=class{static NULL=new Th},Br=class{},Ko=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>AS()}return n})();function AS(){let n=at(),e=nn(),t=Nn(e.index,n);return(ri(t)?t:n)[Ot]}var g_=(()=>{class n{static \u0275prov=yt({token:n,providedIn:"root",factory:()=>null})}return n})();var al={},Ch=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,al,i);return r!==al||t===al?r:this.parentInjector.get(e,t,i)}};function ml(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=gf(r,a);else if(s==2){let c=a,l=e[++o];i=gf(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function St(n,e=0){let t=at();if(t===null)return ot(n,e);let i=nn();return Iv(i,t,Wt(n),e)}function DS(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a=o,c=null,l=null;for(let u of o)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(o);break}PS(n,e,t,a,s,c,l)}s!==null&&i!==null&&RS(t,i,s)}function RS(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ye(-301,!1);i.push(e[r],s)}}function NS(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function PS(n,e,t,i,r,s,o){let a=i.length,c=!1;for(let f=0;f<a;f++){let h=i[f];!c&&si(h)&&(c=!0,NS(n,t,f)),gh(dl(t,e),n,h.type)}VS(t,n.data.length,a);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=Xv(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=Is(t.mergedAttrs,h.hostAttrs),LS(n,t,e,d,h),US(d,h,r),o!==null&&o.has(h)){let[y,m]=o.get(h);t.directiveToIndex.set(h.type,[d,y+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}OS(n,t,s)}function OS(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))ev(0,e,r,i),ev(1,e,r,i),nv(e,i,!1);else{let s=t.get(r);tv(0,e,s,i),tv(1,e,s,i),nv(e,i,!0)}}}function ev(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),y_(e,s)}}function tv(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),y_(e,o)}}function y_(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function nv(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||Xh(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function LS(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Tr(r.type,!0)),o=new Vr(s,si(r),St,null);n.blueprint[i]=o,t[i]=o,FS(n,e,i,Xv(n,t,r.hostVars,bi),r)}function FS(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;kS(o)!=a&&o.push(a),o.push(t,i,s)}}function kS(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function US(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;si(e)&&(t[""]=n)}}function VS(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function v_(n,e,t,i,r,s,o,a){let c=e[Pe],l=c.consts,u=Xi(l,o),d=wl(c,n,t,i,u);return s&&DS(c,e,d,Xi(l,a),r),d.mergedAttrs=Is(d.mergedAttrs,d.attrs),d.attrs!==null&&ml(d,d.attrs,!1),d.mergedAttrs!==null&&ml(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function __(n,e){UE(n,e),Ff(e)&&n.queries.elementEnd(e)}function BS(n,e,t,i,r,s){let o=e.consts,a=Xi(o,r),c=wl(e,n,t,i,a);if(c.mergedAttrs=Is(c.mergedAttrs,c.attrs),s!=null){let l=Xi(o,s);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&ml(c,c.attrs,!1),c.mergedAttrs!==null&&ml(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Il(n,e,t){if(t===bi)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function ch(n,e,t){return function i(r){let s=qi(n)?Nn(n.index,e):e;ap(s,5);let o=e[jt],a=iv(e,o,t,r),c=i.__ngNextListenerFn__;for(;c;)a=iv(e,o,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function iv(n,e,t,i){let r=Ve(null);try{return ht(6,e,t),t(i)!==!1}catch(s){return nS(n,s),!1}finally{ht(7,e,t),Ve(r)}}function HS(n,e,t,i,r,s,o,a){let c=$c(n),l=!1,u=null;if(!i&&c&&(u=zS(e,t,s,n.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=o,u.__ngLastListenerFn__=o,l=!0}else{let d=oi(n,t),f=i?i(d):d;lb(t,f,s,a);let h=r.listen(f,s,a),g=i?y=>i(Rn(y[n.index])):n.index;x_(g,e,t,s,a,h,!1)}return l}function zS(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Ms],c=r[s+2];return a&&a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function x_(n,e,t,i,r,s,o){let a=e.firstCreatePass?zf(e):null,c=Hf(t),l=c.length;c.push(r,s),a&&a.push(i,n,l,(l+1)*(o?-1:1))}function rv(n,e,t,i,r,s){let o=e[t],a=e[Pe],l=a.data[t].outputs[i],d=o[l].subscribe(s);x_(n.index,a,e,r,s,d,!0)}var Ih=Symbol("BINDING");var Ah=class extends Cl{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Dr(e);return new qo(t,this.ngModule)}};function GS(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&bl.SignalBased)!==0};return r&&(s.transform=r),s})}function WS(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function jS(n,e,t){let i=e instanceof Cn?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Ch(t,i):t}function $S(n){let e=n.get(Br,null);if(e===null)throw new Ye(407,!1);let t=n.get(g_,null),i=n.get(Hi,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1}}function qS(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return Wv(e,t,t==="svg"?hy:t==="math"?py:null)}var qo=class extends Tl{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=GS(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=WS(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=xb(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,s,o){ht(22);let a=Ve(null);try{let c=this.componentDef,l=XS(i,c,o,s),u=jS(c,r||this.ngModule,e),d=$S(u),f=d.rendererFactory.createRenderer(null,c),h=i?Wb(f,i,c.encapsulation,u):qS(c,f),g=o?.some(sv)||s?.some(p=>typeof p!="function"&&p.bindings.some(sv)),y=Zh(null,l,null,512|qv(c),null,null,d,f,u,null,Vv(h,u,!0));y[Xt]=h,Kc(y);let m=null;try{let p=v_(Xt,y,2,"#host",()=>l.directiveRegistry,!0,0);h&&($v(f,h,p),As(h,y)),Qv(l,y,p),Hv(l,p,y),__(l,p),t!==void 0&&ZS(p,this.ngContentSelectors,t),m=Nn(p.index,y),y[jt]=m[jt],sp(l,y,null)}catch(p){throw m!==null&&vh(m),vh(y),p}finally{ht(23),Qc()}return new gl(this.componentType,y,!!g)}finally{Ve(a)}}};function XS(n,e,t,i){let r=n?["ng-version","20.1.6"]:Mb(e.selectors[0]),s=null,o=null,a=0;if(t)for(let u of t)a+=u[Ih].requiredVars,u.create&&(u.targetIdx=0,(s??=[]).push(u)),u.update&&(u.targetIdx=0,(o??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[Ih].requiredVars;let h=u+1;f.create&&(f.targetIdx=h,(s??=[]).push(f)),f.update&&(f.targetIdx=h,(o??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=Df(d);c.push(f)}return Yh(0,null,YS(s,o),1,a,c,null,null,null,[r],null)}function YS(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function sv(n){let e=n[Ih].kind;return e==="input"||e==="twoWay"}var gl=class extends m_{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=Fo(t[Pe],Xt),this.location=Rs(this._tNode,t),this.instance=Nn(this._tNode.index,t)[jt],this.hostView=this.changeDetectorRef=new Zi(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=rp(i,r[Pe],r,e,t);this.previousInputValues.set(e,t);let o=Nn(i.index,r);ap(o,1)}get injector(){return new Ur(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function ZS(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Al=(()=>{class n{static __NG_ELEMENT_ID__=JS}return n})();function JS(){let n=nn();return E_(n,at())}var KS=Al,M_=class extends KS{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Rs(this._hostTNode,this._hostLView)}get injector(){return new Ur(this._hostTNode,this._hostLView)}get parentInjector(){let e=Gh(this._hostTNode,this._hostLView);if(Ev(e)){let t=ul(e,this._hostLView),i=ll(e),r=t[Pe].data[i+8];return new Ur(r,t)}else return new Ur(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=ov(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Yt}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Qy(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Sh(this._hostTNode,o)),a}createComponent(e,t,i,r,s,o,a){let c=e&&!PE(e),l;if(c)l=t;else{let m=t||{};l=m.index,i=m.injector,r=m.projectableNodes,s=m.environmentInjector||m.ngModuleRef,o=m.directives,a=m.bindings}let u=c?e:new qo(Dr(e)),d=i||this.parentInjector;if(!s&&u.ngModule==null){let p=(c?d:this.parentInjector).get(Cn,null);p&&(s=p)}let f=Dr(u.componentType??{}),h=Qy(this._lContainer,f?.id??null),g=h?.firstChild??null,y=u.create(d,r,g,s,o,a);return this.insertImpl(y.hostView,l,Sh(this._hostTNode,h)),y}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(gy(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Ht],l=new M_(c,c[An],c[Ht]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return h_(o,r,s,i),e.attachToViewContainerRef(),Cf(lh(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=ov(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=pl(this._lContainer,t);i&&(Io(lh(this._lContainer),t),ep(i[Pe],i))}detach(e){let t=this._adjustIndex(e,-1),i=pl(this._lContainer,t);return i&&Io(lh(this._lContainer),t)!=null?new Zi(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function ov(n){return n[Lo]}function lh(n){return n[Lo]||(n[Lo]=[])}function E_(n,e){let t,i=e[n.index];return zn(i)?t=i:(t=f_(i,e,null,n),e[n.index]=t,Jh(e,t)),ew(t,e,n,i),new M_(t,n,e)}function QS(n,e){let t=n[Ot],i=t.createComment(""),r=oi(e,n),s=t.parentNode(r);return hl(t,s,i,t.nextSibling(r),!1),i}var ew=iw,tw=()=>!1;function nw(n,e,t){return tw(n,e,t)}function iw(n,e,t,i){if(n[$i])return;let r;t.type&8?r=Rn(i):r=QS(e,t),n[$i]=r}var Dh=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Rh=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)lp(e,t).matches!==null&&this.queries[t].setDirty()}},Nh=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=dw(e):this.predicate=e}},Ph=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Oh=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,rw(t,s)),this.matchTNodeWithReadOption(e,t,ol(t,e,s,!1,!1))}else i===$o?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,ol(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Ei||r===Al||r===$o&&t.type&4)this.addMatch(t.index,-2);else{let s=ol(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function rw(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function sw(n,e){return n.type&11?Rs(n,e):n.type&4?cp(n,e):null}function ow(n,e,t,i){return t===-1?sw(e,n):t===-2?aw(n,e,i):Wo(n,n[Pe],t,e)}function aw(n,e,t){if(t===Ei)return Rs(e,n);if(t===$o)return cp(e,n);if(t===Al)return E_(e,n)}function b_(n,e,t,i){let r=e[ii].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(ow(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Lh(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=b_(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=Yt;d<u.length;d++){let f=u[d];f[ji]===f[Ht]&&Lh(f[Pe],f,l,i)}if(u[Or]!==null){let d=u[Or];for(let f=0;f<d.length;f++){let h=d[f];Lh(h[Pe],h,l,i)}}}}}return i}function cw(n,e){return n[ii].queries[e].queryList}function lw(n,e,t){let i=new fl((t&4)===4);return _y(n,e,i,i.destroy),(e[ii]??=new Rh).queries.push(new Dh(i))-1}function uw(n,e,t){let i=an();return i.firstCreatePass&&(fw(i,new Nh(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),lw(i,at(),e)}function dw(n){return n.split(",").map(e=>e.trim())}function fw(n,e,t){n.queries===null&&(n.queries=new Ph),n.queries.track(new Oh(e,t))}function lp(n,e){return n.queries.getByIndex(e)}function hw(n,e){let t=n[Pe],i=lp(t,e);return i.crossesNgTemplate?Lh(t,n,e,[]):b_(t,n,i,e)}var av=new Set;function Ps(n){av.has(n)||(av.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var yl=class{};var Xo=class extends yl{injector;componentFactoryResolver=new Ah(this);instance=null;constructor(e){super();let t=new Ir([...e.providers,{provide:yl,useValue:this},{provide:Cl,useValue:this.componentFactoryResolver}],e.parent||Ro(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function S_(n,e,t=null){return new Xo({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var pw=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Rf(!1,t.type),r=i.length>0?S_([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=yt({token:n,providedIn:"environment",factory:()=>new n(ot(Cn))})}return n})();function zr(n){return Jo(()=>{let e=w_(n),t=gt(it({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===jh.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(pw).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||xi.Emulated,styles:n.styles||gn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Ps("NgStandalone"),T_(t);let i=n.dependencies;return t.directiveDefs=cv(i,mw),t.pipeDefs=cv(i,sy),t.id=vw(t),t})}function mw(n){return Dr(n)||Df(n)}function Qo(n){return Jo(()=>({type:n.type,bootstrap:n.bootstrap||gn,declarations:n.declarations||gn,imports:n.imports||gn,exports:n.exports||gn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function gw(n,e){if(n==null)return Gi;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=bl.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function yw(n){if(n==null)return Gi;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Ji(n){return Jo(()=>{let e=w_(n);return T_(e),e})}function w_(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Gi,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||gn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:gw(n.inputs,e),outputs:yw(n.outputs),debugInfo:null}}function T_(n){n.features?.forEach(e=>e(n))}function cv(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let s=e(r);s!==null&&i.push(s)}return i}:null}function vw(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function _w(n){return Object.getPrototypeOf(n.prototype).constructor}function Ki(n){let e=_w(n.type),t=!0,i=[n];for(;e;){let r;if(si(n))r=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new Ye(903,!1);r=e.\u0275dir}if(r){if(t){i.push(r);let o=n;o.inputs=uh(n.inputs),o.declaredInputs=uh(n.declaredInputs),o.outputs=uh(n.outputs);let a=r.hostBindings;a&&Sw(n,a);let c=r.viewQuery,l=r.contentQueries;if(c&&Ew(n,c),l&&bw(n,l),xw(n,r),Zg(n.outputs,r.outputs),si(r)&&r.data.animation){let u=n.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let s=r.features;if(s)for(let o=0;o<s.length;o++){let a=s[o];a&&a.ngInherit&&a(n),a===Ki&&(t=!1)}}e=Object.getPrototypeOf(e)}Mw(i)}function xw(n,e){for(let t in e.inputs){if(!e.inputs.hasOwnProperty(t)||n.inputs.hasOwnProperty(t))continue;let i=e.inputs[t];i!==void 0&&(n.inputs[t]=i,n.declaredInputs[t]=e.declaredInputs[t])}}function Mw(n){let e=0,t=null;for(let i=n.length-1;i>=0;i--){let r=n[i];r.hostVars=e+=r.hostVars,r.hostAttrs=Is(r.hostAttrs,t=Is(t,r.hostAttrs))}}function uh(n){return n===Gi?{}:n===gn?[]:n}function Ew(n,e){let t=n.viewQuery;t?n.viewQuery=(i,r)=>{e(i,r),t(i,r)}:n.viewQuery=e}function bw(n,e){let t=n.contentQueries;t?n.contentQueries=(i,r,s)=>{e(i,r,s),t(i,r,s)}:n.contentQueries=e}function Sw(n,e){let t=n.hostBindings;t?n.hostBindings=(i,r)=>{e(i,r),t(i,r)}:n.hostBindings=e}function ww(n,e,t,i,r,s,o,a){if(t.firstCreatePass){n.mergedAttrs=Is(n.mergedAttrs,n.attrs);let u=n.tView=Yh(2,n,r,s,o,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,n),u.queries=t.queries.embeddedTView(n))}a&&(n.flags|=a),Ss(n,!1);let c=Tw(t,e,n,i);el()&&tp(t,e,c,n),As(c,e);let l=f_(c,e,c,n);e[i+Xt]=l,Jh(e,l),nw(l,n,e)}function C_(n,e,t,i,r,s,o,a,c,l,u){let d=t+Xt,f;if(e.firstCreatePass){if(f=wl(e,d,4,o||null,a||null),l!=null){let h=Xi(e.consts,l);f.localNames=[];for(let g=0;g<h.length;g+=2)f.localNames.push(h[g],-1)}}else f=e.data[d];return ww(f,n,e,t,i,r,s,c),l!=null&&ip(n,f,u),f}var Tw=Cw;function Cw(n,e,t,i){return tl(!0),e[Ot].createComment("")}var up=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(up||{}),ea=new qe(""),I_=!1,Fh=class extends ei{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,dy()&&(this.destroyRef=ze(ws,{optional:!0})??void 0,this.pendingTasks=ze(kr,{optional:!0})??void 0)}emit(e){let t=Ve(null);try{super.next(e)}finally{Ve(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof tn&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},vn=Fh;function A_(n){let e,t;function i(){n=Ho;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function lv(n){return queueMicrotask(()=>n()),()=>{n=Ho}}var dp="isAngularZone",vl=dp+"_ID",Iw=0,zt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new vn(!1);onMicrotaskEmpty=new vn(!1);onStable=new vn(!1);onError=new vn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=I_}=e;if(typeof Zone>"u")throw new Ye(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,Rw(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(dp)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ye(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ye(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,Aw,Ho,Ho);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},Aw={};function fp(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function Dw(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){A_(()=>{n.callbackScheduled=!1,kh(n),n.isCheckStableRunning=!0,fp(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),kh(n)}function Rw(n){let e=()=>{Dw(n)},t=Iw++;n._inner=n._inner.fork({name:"angular",properties:{[dp]:!0,[vl]:t,[vl+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(Nw(c))return i.invokeTask(s,o,a,c);try{return uv(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),dv(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return uv(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!Pw(c)&&e(),dv(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,kh(n),fp(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function kh(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function uv(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function dv(n){n._nesting--,fp(n)}var Yo=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new vn;onMicrotaskEmpty=new vn;onStable=new vn;onError=new vn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function Nw(n){return D_(n,"__ignore_ng_zone__")}function Pw(n){return D_(n,"__scheduler_tick__")}function D_(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var R_=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=yt({token:n,providedIn:"root",factory:()=>new n})}return n})();var hp=new qe("");function ta(n){return!!n&&typeof n.then=="function"}function N_(n){return!!n&&typeof n.subscribe=="function"}var P_=new qe("");var pp=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=ze(P_,{optional:!0})??[];injector=ze(yi);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=Gc(this.injector,r);if(ta(s))t.push(s);else if(N_(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),O_=new qe("");function L_(){jd(()=>{let n="";throw new Ye(600,n)})}function F_(n){return n.isBoundToModule}var Ow=10;var Os=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ze(_i);afterRenderManager=ze(R_);zonelessEnabled=ze(Bo);rootEffectScheduler=ze(rh);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new ei;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=ze(kr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(br(t=>!t))}constructor(){ze(ea,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=ze(Cn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=yi.NULL){return this._injector.get(zt).run(()=>{ht(10);let o=t instanceof Tl;if(!this._injector.get(pp).done){let g="";throw new Ye(405,g)}let c;o?c=t:c=this._injector.get(Cl).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=F_(c)?void 0:this._injector.get(yl),u=i||c.selector,d=c.create(r,[],u,l),f=d.location.nativeElement,h=d.injector.get(hp,null);return h?.registerApplication(f),d.onDestroy(()=>{this.detachView(d.hostView),Go(this.components,d),h?.unregisterApplication(f)}),this._loadComponent(d),ht(11,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ht(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(up.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new Ye(101,!1);let t=Ve(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Ve(t),this.afterTick.next(),ht(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Br,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<Ow;)ht(14),this.synchronizeOnce(),ht(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!ko(r))continue;let s=i&&!this.zonelessEnabled?0:1;op(r,s),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>ko(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Go(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(O_,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Go(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ye(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Go(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Dl(n,e,t,i,r,s,o,a){Ps("NgControlFlow");let c=at(),l=an(),u=Xi(l.consts,s);return C_(c,l,n,e,t,i,r,u,256,o,a),mp}function mp(n,e,t,i,r,s,o,a){Ps("NgControlFlow");let c=at(),l=an(),u=Xi(l.consts,s);return C_(c,l,n,e,t,i,r,u,512,o,a),mp}function Rl(n,e){Ps("NgControlFlow");let t=at(),i=Yc(),r=t[i]!==bi?t[i]:-1,s=r!==-1?fv(t,Xt+r):void 0,o=0;if(Il(t,i,n)){let a=Ve(null);try{if(s!==void 0&&xS(s,o),n!==-1){let c=Xt+n,l=fv(t,c),u=Lw(t[Pe],c),d=IS(l,u,t),f=n_(t,u,e,{dehydratedView:d});h_(l,f,o,Sh(u,d))}}finally{Ve(a)}}else if(s!==void 0){let a=_S(s,o);a!==void 0&&(a[jt]=e)}}function fv(n,e){return n[e]}function Lw(n,e){return Fo(n,e)}function hv(n,e,t,i,r){rp(e,n,t,r?"class":"style",i)}function Se(n,e,t,i){let r=at(),s=r[Pe],o=n+Xt,a=s.firstCreatePass?v_(o,r,2,e,eS,Ey(),t,i):s.data[o];if(e_(a,r,n,e,k_),$c(a)){let c=r[Pe];Qv(c,r,a),Hv(c,a,r)}return i!=null&&ip(r,a),Se}function Ie(){let n=an(),e=nn(),t=t_(e);return n.firstCreatePass&&__(n,t),Wf(t)&&jf(),Gf(),t.classesWithoutHost!=null&&BE(t)&&hv(n,t,at(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&HE(t)&&hv(n,t,at(),t.stylesWithoutHost,!1),Ie}function On(n,e,t,i){return Se(n,e,t,i),Ie(),On}function na(n,e,t,i){let r=at(),s=r[Pe],o=n+Xt,a=s.firstCreatePass?BS(o,s,2,e,t,i):s.data[o];return e_(a,r,n,e,k_),i!=null&&ip(r,a),na}function ia(){let n=nn(),e=t_(n);return Wf(e)&&jf(),Gf(),ia}function Nl(n,e,t,i){return na(n,e,t,i),ia(),Nl}var k_=(n,e,t,i,r)=>(tl(!0),Wv(e[Ot],i,ky()));function gp(){return at()}var ra="en-US";var Fw=ra;function U_(n){typeof n=="string"&&(Fw=n.toLowerCase().replace(/_/g,"-"))}function un(n,e,t){let i=at(),r=an(),s=nn();return V_(r,i,i[Ot],s,n,e,t),un}function V_(n,e,t,i,r,s,o){let a=!0,c=null;if((i.type&3||o)&&(c??=ch(i,e,s),HS(i,n,e,o,t,r,s,c)&&(a=!1)),a){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let d=0;d<u.length;d+=2){let f=u[d],h=u[d+1];c??=ch(i,e,s),rv(i,e,f,h,r,c)}if(l&&l.length)for(let d of l)c??=ch(i,e,s),rv(i,e,d,r,r,c)}}function yp(n=1){return Ly(n)}function vp(n,e,t){uw(n,e,t)}function _p(n){let e=at(),t=an(),i=Jf();Jc(i+1);let r=lp(t,i);if(n.dirty&&my(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=hw(e,i);n.reset(s,eb),n.notifyOnChanges()}return!0}return!1}function xp(){return cw(at(),Jf())}function il(n,e){return n<<17|e<<2}function Hr(n){return n>>17&32767}function kw(n){return(n&2)==2}function Uw(n,e){return n&131071|e<<17}function Uh(n){return n|2}function Ds(n){return(n&131068)>>2}function dh(n,e){return n&-131069|e<<2}function Vw(n){return(n&1)===1}function Vh(n){return n|1}function Bw(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=Hr(o),c=Ds(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||xs(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=Hr(n[a+1]);n[i+1]=il(f,a),f!==0&&(n[f+1]=dh(n[f+1],i)),n[a+1]=Uw(n[a+1],i)}else n[i+1]=il(a,0),a!==0&&(n[a+1]=dh(n[a+1],i)),a=i;else n[i+1]=il(c,0),a===0?a=i:n[c+1]=dh(n[c+1],i),c=i;l&&(n[i+1]=Uh(n[i+1])),pv(n,u,i,!0),pv(n,u,i,!1),Hw(e,u,n,i,s),o=il(a,c),s?e.classBindings=o:e.styleBindings=o}function Hw(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&xs(s,e)>=0&&(t[i+1]=Vh(t[i+1]))}function pv(n,e,t,i){let r=n[t+1],s=e===null,o=i?Hr(r):Ds(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];zw(c,e)&&(a=!0,n[o+1]=i?Vh(l):Uh(l)),o=i?Hr(l):Ds(l)}a&&(n[t+1]=i?Uh(r):Vh(r))}function zw(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?xs(n,e)>=0:!1}function Ln(n,e){return Gw(n,e,null,!0),Ln}function Gw(n,e,t,i){let r=at(),s=an(),o=Cy(2);if(s.firstUpdatePass&&jw(s,n,o,i),e!==bi&&Il(r,o,e)){let a=s.data[Fr()];Zw(s,a,r,r[Ot],n,r[o+1]=Jw(e,t),i,o)}}function Ww(n,e){return e>=n.expandoStartIndex}function jw(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[Fr()],o=Ww(n,t);Kw(s,i)&&e===null&&!o&&(e=!1),e=$w(r,s,e,i),Bw(r,s,e,t,o,i)}}function $w(n,e,t,i){let r=Ry(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=fh(null,n,e,t,i),t=Zo(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=fh(r,n,e,t,i),s===null){let c=qw(n,e,i);c!==void 0&&Array.isArray(c)&&(c=fh(null,n,e,c[1],i),c=Zo(c,e.attrs,i),Xw(n,e,i,c))}else s=Yw(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function qw(n,e,t){let i=t?e.classBindings:e.styleBindings;if(Ds(i)!==0)return n[Hr(i)]}function Xw(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Hr(r)]=i}function Yw(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Zo(i,o,t)}return Zo(i,e.attrs,t)}function fh(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Zo(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Zo(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),ry(n,o,t?!0:e[++s]))}return n===void 0?null:n}function Zw(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=Vw(l)?mv(c,e,t,r,Ds(l),o):void 0;if(!_l(u)){_l(s)||kw(l)&&(s=mv(c,null,t,r,a,o));let d=kf(Fr(),t);Gb(i,o,d,r,s)}}function mv(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===bi&&(f=d?gn:void 0);let h=d?zc(f,i):u===i?f:void 0;if(l&&!_l(h)&&(h=zc(c,i)),_l(h)&&(a=h,o))return a;let g=n[r+1];r=o?Hr(g):Ds(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=zc(c,i))}return a}function _l(n){return n!==void 0}function Jw(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=Vi(zv(n)))),n}function Kw(n,e){return(n.flags&(e?8:16))!==0}function Le(n,e=""){let t=at(),i=an(),r=n+Xt,s=i.firstCreatePass?wl(i,r,1,e,null):i.data[r],o=Qw(i,t,s,e,n);t[r]=o,el()&&tp(i,t,o,s),Ss(s,!1)}var Qw=(n,e,t,i,r)=>(tl(!0),Eb(e[Ot],i));function eT(n,e,t,i=""){return Il(n,Yc(),t)?e+bf(t)+i:bi}function Pl(n){return Fn("",n),Pl}function Fn(n,e,t){let i=at(),r=eT(i,n,e,t);return r!==bi&&tT(i,Fr(),r),Fn}function tT(n,e,t){let i=kf(e,n);bb(n[Ot],i,t)}function Ls(n,e,t){nh(e)&&(e=e());let i=at(),r=Yc();if(Il(i,r,e)){let s=an(),o=Fy();Xb(o,i,n,e,i[Ot],t)}return Ls}function sa(n,e){let t=nh(n);return t&&n.set(e),t}function Fs(n,e){let t=at(),i=an(),r=nn();return V_(i,t,t[Ot],r,n,e),Fs}function nT(n,e,t){let i=an();if(i.firstCreatePass){let r=si(n);Bh(t,i.data,i.blueprint,r,!0),Bh(e,i.data,i.blueprint,r,!1)}}function Bh(n,e,t,i,r){if(n=Wt(n),Array.isArray(n))for(let s=0;s<n.length;s++)Bh(n[s],e,t,i,r);else{let s=an(),o=at(),a=nn(),c=Cr(n)?n:Wt(n.provide),l=Pf(n),u=a.providerIndexes&1048575,d=a.directiveStart,f=a.providerIndexes>>20;if(Cr(n)||!n.multi){let h=new Vr(l,r,St,null),g=ph(c,e,r?u:u+f,d);g===-1?(gh(dl(a,o),s,c),hh(s,n,e.length),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(h),o.push(h)):(t[g]=h,o[g]=h)}else{let h=ph(c,e,u+f,d),g=ph(c,e,u,u+f),y=h>=0&&t[h],m=g>=0&&t[g];if(r&&!m||!r&&!y){gh(dl(a,o),s,c);let p=sT(r?rT:iT,t.length,r,i,l,n);!r&&m&&(t[g].providerFactory=p),hh(s,n,e.length,0),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(p),o.push(p)}else{let p=B_(t[r?g:h],l,!r&&i);hh(s,n,h>-1?h:g,p)}!r&&i&&m&&t[g].componentProviders++}}}function hh(n,e,t,i){let r=Cr(e),s=uy(e);if(r||s){let c=(s?Wt(e.useClass):e).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){let u=l.indexOf(t);u===-1?l.push(t,[i,c]):l[u+1].push(i,c)}else l.push(t,c)}}}function B_(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function ph(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function iT(n,e,t,i,r){return Hh(this.multi,[])}function rT(n,e,t,i,r){let s=this.multi,o;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=Wo(i,i[Pe],this.providerFactory.index,r);o=c.slice(0,a),Hh(s,o);for(let l=a;l<c.length;l++)o.push(c[l])}else o=[],Hh(s,o);return o}function Hh(n,e){for(let t=0;t<n.length;t++){let i=n[t];e.push(i())}return e}function sT(n,e,t,i,r,s){let o=new Vr(n,t,St,null);return o.multi=[],o.index=e,o.componentProviders=0,B_(o,r,i&&!t),o}function oa(n,e=[]){return t=>{t.providersResolver=(i,r)=>nT(i,r?r(n):n,e)}}var oT=(()=>{class n{zone=ze(zt);changeDetectionScheduler=ze(Hi);applicationRef=ze(Os);applicationErrorHandler=ze(_i);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(t){this.applicationErrorHandler(t)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function H_({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new zt(gt(it({},z_()),{scheduleInRootZone:t})),[{provide:zt,useFactory:n},{provide:Wi,multi:!0,useFactory:()=>{let i=ze(oT,{optional:!0});return()=>i.initialize()}},{provide:Wi,multi:!0,useFactory:()=>{let i=ze(aT);return()=>{i.initialize()}}},e===!0?{provide:ih,useValue:!0}:[],{provide:nl,useValue:t??I_},{provide:_i,useFactory:()=>{let i=ze(zt),r=ze(Cn),s;return o=>{i.runOutsideAngular(()=>{r.destroyed&&!s?setTimeout(()=>{throw o}):(s??=r.get(ni),s.handleError(o))})}}}]}function z_(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var aT=(()=>{class n{subscription=new tn;initialized=!1;zone=ze(zt);pendingTasks=ze(kr);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{zt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{zt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Mp=(()=>{class n{applicationErrorHandler=ze(_i);appRef=ze(Os);taskService=ze(kr);ngZone=ze(zt);zonelessEnabled=ze(Bo);tracing=ze(ea,{optional:!0});disableScheduling=ze(ih,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new tn;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(vl):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ze(nl,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Yo||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?lv:A_;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(vl+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.taskService.remove(t),this.applicationErrorHandler(i)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,lv(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ep(){return Ps("NgZoneless"),Ao([{provide:Hi,useExisting:Mp},{provide:zt,useClass:Yo},{provide:Bo,useValue:!0},{provide:nl,useValue:!1},[]])}function cT(){return typeof $localize<"u"&&$localize.locale||ra}var bp=new qe("",{providedIn:"root",factory:()=>ze(bp,{optional:!0,skipSelf:!0})||cT()});function Qi(n){return qg(n)}function aa(n,e){return hc(n,e?.equal)}var G_=class{[on];constructor(e){this[on]=e}destroy(){this[on].destroy()}};var gT=new qe("");gT.__NG_ELEMENT_ID__=n=>{let e=nn();if(e===null)throw new Ye(204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new Ye(204,!1)};var Sp=new qe(""),yT=new qe("");function ca(n){return!n.moduleRef}function vT(n){let e=ca(n)?n.r3Injector:n.moduleRef.injector,t=e.get(zt);return t.run(()=>{ca(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(_i),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),ca(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Sp);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Sp);o.add(s),n.moduleRef.onDestroy(()=>{Go(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return xT(i,t,()=>{let s=e.get(kr),o=s.add(),a=e.get(pp);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(bp,ra);if(U_(c||ra),!e.get(yT,!0))return ca(n)?e.get(Os):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(ca(n)){let u=e.get(Os);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return _T?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>void s.remove(o))})})}var _T;function xT(n,e,t){try{let i=t();return ta(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var Ol=null;function MT(n=[],e){return yi.create({name:e,providers:[{provide:Do,useValue:"platform"},{provide:Sp,useValue:new Set([()=>Ol=null])},...n]})}function ET(n=[]){if(Ol)return Ol;let e=MT(n);return Ol=e,L_(),bT(e),e}function bT(n){let e=n.get(Ml,null);Gc(n,()=>{e?.forEach(t=>t())})}var W_=(()=>{class n{static __NG_ELEMENT_ID__=ST}return n})();function ST(n){return wT(nn(),at(),(n&16)===16)}function wT(n,e,t){if(qi(n)&&!t){let i=Nn(n.index,e);return new Zi(i,i)}else if(n.type&175){let i=e[Dn];return new Zi(i,e)}return null}function j_(n){ht(8);try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=ET(i),s=[H_({}),{provide:Hi,useExisting:Mp},By,...t||[]],o=new Xo({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return vT({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}finally{ht(9)}}function $_(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}var q_=null;function er(){return q_}function Tp(n){q_??=n}var la=class{};function Cp(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var ua=class{};var X_="browser";var Fl=new qe(""),Np=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Ye(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(ot(Fl),ot(zt))};static \u0275prov=yt({token:n,factory:n.\u0275fac})}return n})(),da=class{_doc;constructor(e){this._doc=e}manager},Ip="ng-app-id";function Y_(n){for(let e of n)e.remove()}function Z_(n,e){let t=e.createElement("style");return t.textContent=n,t}function TT(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Ip}="${e}"],link[${Ip}="${e}"]`);if(r)for(let s of r)s.removeAttribute(Ip),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Dp(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Pp=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,TT(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,Z_);i?.forEach(r=>this.addUsage(r,this.external,Dp))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(Y_(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Y_(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,Z_(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Dp(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(ot(Pn),ot(xl),ot(El,8),ot(Ns))};static \u0275prov=yt({token:n,factory:n.\u0275fac})}return n})(),Ap={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Op=/%COMP%/g;var K_="%COMP%",CT=`_nghost-${K_}`,IT=`_ngcontent-${K_}`,AT=!0,DT=new qe("",{providedIn:"root",factory:()=>AT});function RT(n){return IT.replace(Op,n)}function NT(n){return CT.replace(Op,n)}function Q_(n,e){return e.map(t=>t.replace(Op,n))}var Lp=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=!1,this.defaultRenderer=new fa(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof Ll?r.applyToHost(t):r instanceof ha&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case xi.Emulated:s=new Ll(c,l,i,this.appId,u,o,a,d,f);break;case xi.ShadowDom:return new Rp(c,l,t,i,o,a,this.nonce,d,f);default:s=new ha(c,l,i,u,o,a,d,f);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(ot(Np),ot(Pp),ot(xl),ot(DT),ot(Pn),ot(Ns),ot(zt),ot(El),ot(ea,8))};static \u0275prov=yt({token:n,factory:n.\u0275fac})}return n})(),fa=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Ap[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(J_(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(J_(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ye(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Ap[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Ap[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Mi.DashCase|Mi.Important)?e.style.setProperty(t,i,r&Mi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Mi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=er().getGlobalEventTarget(this.doc,e),!e))throw new Ye(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function J_(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Rp=class extends fa{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Q_(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=Dp(f,s);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ha=class extends fa{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?Q_(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ll=class extends ha{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=RT(u),this.hostAttr=NT(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var kl=class n extends la{supportsDOMEvents=!0;static makeCurrent(){Tp(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=PT();return t==null?null:OT(t)}resetBaseElement(){pa=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Cp(document.cookie,e)}},pa=null;function PT(){return pa=pa||document.head.querySelector("base"),pa?pa.getAttribute("href"):null}function OT(n){return new URL(n,document.baseURI).pathname}var LT=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac})}return n})(),t0=(()=>{class n extends da{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(ot(Pn))};static \u0275prov=yt({token:n,factory:n.\u0275fac})}return n})(),e0=["alt","control","meta","shift"],FT={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},kT={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},n0=(()=>{class n extends da{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>er().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),e0.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=FT[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),e0.forEach(o=>{if(o!==r){let a=kT[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(ot(Pn))};static \u0275prov=yt({token:n,factory:n.\u0275fac})}return n})();function Fp(n,e){let t=it({rootComponent:n},UT(e));return j_(t)}function UT(n){return{appProviders:[...GT,...n?.providers??[]],platformProviders:zT}}function VT(){kl.makeCurrent()}function BT(){return new ni}function HT(){return $h(document),document}var zT=[{provide:Ns,useValue:X_},{provide:Ml,useValue:VT,multi:!0},{provide:Pn,useFactory:HT}];var GT=[{provide:Do,useValue:"root"},{provide:ni,useFactory:BT},{provide:Fl,useClass:t0,multi:!0,deps:[Pn]},{provide:Fl,useClass:n0,multi:!0,deps:[Pn]},Lp,Pp,Np,{provide:Br,useExisting:Lp},{provide:ua,useClass:LT},[]];var i0={providers:[eh(),Ep()]};var d0=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(St(Ko),St(Ei))};static \u0275dir=Ji({type:n})}return n})(),f0=(()=>{class n extends d0{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Wh(n)))(r||n)}})();static \u0275dir=Ji({type:n,features:[Ki]})}return n})(),Hp=new qe("");var WT={provide:Hp,useExisting:zi(()=>zl),multi:!0};function jT(){let n=er()?er().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var $T=new qe(""),zl=(()=>{class n extends d0{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!jT())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(St(Ko),St(Ei),St($T,8))};static \u0275dir=Ji({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&un("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[oa([WT]),Ki]})}return n})();var qT=new qe(""),XT=new qe("");function h0(n){return n!=null}function p0(n){return ta(n)?tf(n):n}function m0(n){let e={};return n.forEach(t=>{e=t!=null?it(it({},e),t):e}),Object.keys(e).length===0?null:e}function g0(n,e){return e.map(t=>t(n))}function YT(n){return!n.validate}function y0(n){return n.map(e=>YT(e)?e:t=>e.validate(t))}function ZT(n){if(!n)return null;let e=n.filter(h0);return e.length==0?null:function(t){return m0(g0(t,e))}}function v0(n){return n!=null?ZT(y0(n)):null}function JT(n){if(!n)return null;let e=n.filter(h0);return e.length==0?null:function(t){let i=g0(t,e).map(p0);return nf(i).pipe(br(m0))}}function _0(n){return n!=null?JT(y0(n)):null}function r0(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function KT(n){return n._rawValidators}function QT(n){return n._rawAsyncValidators}function kp(n){return n?Array.isArray(n)?n:[n]:[]}function Vl(n,e){return Array.isArray(n)?n.includes(e):n===e}function s0(n,e){let t=kp(e);return kp(n).forEach(r=>{Vl(t,r)||t.push(r)}),t}function o0(n,e){return kp(e).filter(t=>!Vl(n,t))}var Bl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=v0(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=_0(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Up=class extends Bl{name;get formDirective(){return null}get path(){return null}},Vs=class extends Bl{_parent=null;name=null;valueAccessor=null},Vp=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},eC={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},xz=gt(it({},eC),{"[class.ng-submitted]":"isSubmitted"}),x0=(()=>{class n extends Vp{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(St(Vs,2))};static \u0275dir=Ji({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&Ln("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ki]})}return n})();var ma="VALID",Ul="INVALID",ks="PENDING",ga="DISABLED",Bs=class{},Hl=class extends Bs{value;source;constructor(e,t){super(),this.value=e,this.source=t}},ya=class extends Bs{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},va=class extends Bs{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},Us=class extends Bs{status;source;constructor(e,t){super(),this.status=e,this.source=t}};function tC(n){return(Gl(n)?n.validators:n)||null}function nC(n){return Array.isArray(n)?v0(n):n||null}function iC(n,e){return(Gl(e)?e.asyncValidators:n)||null}function rC(n){return Array.isArray(n)?_0(n):n||null}function Gl(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var Bp=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return Qi(this.statusReactive)}set status(e){Qi(()=>this.statusReactive.set(e))}_status=aa(()=>this.statusReactive());statusReactive=Lt(void 0);get valid(){return this.status===ma}get invalid(){return this.status===Ul}get pending(){return this.status==ks}get disabled(){return this.status===ga}get enabled(){return this.status!==ga}errors;get pristine(){return Qi(this.pristineReactive)}set pristine(e){Qi(()=>this.pristineReactive.set(e))}_pristine=aa(()=>this.pristineReactive());pristineReactive=Lt(!0);get dirty(){return!this.pristine}get touched(){return Qi(this.touchedReactive)}set touched(e){Qi(()=>this.touchedReactive.set(e))}_touched=aa(()=>this.touchedReactive());touchedReactive=Lt(!1);get untouched(){return!this.touched}_events=new ei;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(s0(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(s0(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(o0(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(o0(e,this._rawAsyncValidators))}hasValidator(e){return Vl(this._rawValidators,e)}hasAsyncValidator(e){return Vl(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(gt(it({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new va(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new va(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(gt(it({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new ya(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new ya(!0,i))}markAsPending(e={}){this.status=ks;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Us(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(gt(it({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=ga,this.errors=null,this._forEachChild(r=>{r.disable(gt(it({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Hl(this.value,i)),this._events.next(new Us(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(gt(it({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=ma,this._forEachChild(i=>{i.enable(gt(it({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(gt(it({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ma||this.status===ks)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Hl(this.value,t)),this._events.next(new Us(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(gt(it({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ga:ma}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=ks,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let i=p0(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new Us(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new vn,this.statusChanges=new vn}_calculateStatus(){return this._allControlsDisabled()?ga:this.errors?Ul:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ks)?ks:this._anyControlsHaveStatus(Ul)?Ul:ma}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new ya(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new va(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Gl(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=nC(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=rC(this._rawAsyncValidators)}};var zp=new qe("",{providedIn:"root",factory:()=>Wl}),Wl="always";function sC(n,e){return[...e.path,n]}function oC(n,e,t=Wl){cC(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),lC(n,e),dC(n,e),uC(n,e),aC(n,e)}function a0(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function aC(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function cC(n,e){let t=KT(n);e.validator!==null?n.setValidators(r0(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=QT(n);e.asyncValidator!==null?n.setAsyncValidators(r0(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();a0(e._rawValidators,r),a0(e._rawAsyncValidators,r)}function lC(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&M0(n,e)})}function uC(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&M0(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function M0(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function dC(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function fC(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function hC(n){return Object.getPrototypeOf(n.constructor)===f0}function pC(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(s=>{s.constructor===zl?t=s:hC(s)?i=s:r=s}),r||i||t||null}function c0(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function l0(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var mC=class extends Bp{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(tC(t),iC(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Gl(t)&&(t.nonNullable||t.initialValueIsDefault)&&(l0(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){c0(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){c0(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){l0(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var gC={provide:Vs,useExisting:zi(()=>Gp)},u0=Promise.resolve(),Gp=(()=>{class n extends Vs{_changeDetectorRef;callSetDisabledState;control=new mC;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new vn;constructor(t,i,r,s,o,a){super(),this._changeDetectorRef=o,this.callSetDisabledState=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=pC(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),fC(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){oC(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){u0.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&$_(i);u0.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?sC(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(St(Up,9),St(qT,10),St(XT,10),St(Hp,10),St(W_,8),St(zp,8))};static \u0275dir=Ji({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[oa([gC]),Ki,zh]})}return n})();var yC={provide:Hp,useExisting:zi(()=>Wp),multi:!0};var vC=(()=>{class n{_accessors=[];add(t,i){this._accessors.push([t,i])}remove(t){for(let i=this._accessors.length-1;i>=0;--i)if(this._accessors[i][1]===t){this._accessors.splice(i,1);return}}select(t){this._accessors.forEach(i=>{this._isSameGroup(i,t)&&i[1]!==t&&i[1].fireUncheck(t.value)})}_isSameGroup(t,i){return t[0].control?t[0]._parent===i._control._parent&&t[1].name===i.name:!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Wp=(()=>{class n extends f0{_registry;_injector;_state;_control;_fn;setDisabledStateFired=!1;onChange=()=>{};name;formControlName;value;callSetDisabledState=ze(zp,{optional:!0})??Wl;constructor(t,i,r,s){super(t,i),this._registry=r,this._injector=s}ngOnInit(){this._control=this._injector.get(Vs),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this.setProperty("checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}setDisabledState(t){(this.setDisabledStateFired||t||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",t),this.setDisabledStateFired=!0}fireUncheck(t){this.writeValue(t)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}static \u0275fac=function(i){return new(i||n)(St(Ko),St(Ei),St(vC),St(yi))};static \u0275dir=Ji({type:n,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(i,r){i&1&&un("change",function(){return r.onChange()})("blur",function(){return r.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},standalone:!1,features:[oa([yC]),Ki]})}return n})();var _C=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Qo({type:n});static \u0275inj=_s({})}return n})();var E0=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:zp,useValue:t.callSetDisabledState??Wl}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=Qo({type:n});static \u0275inj=_s({imports:[_C]})}return n})();var jl=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=zr({type:n,selectors:[["app-crosshair"]],decls:4,vars:0,consts:[[1,"crosshair"],[1,"crosshair-line","horizontal"],[1,"crosshair-line","vertical"],[1,"crosshair-center"]],template:function(t,i){t&1&&(na(0,"div",0),Nl(1,"div",1)(2,"div",2)(3,"div",3),ia())},styles:[".crosshair[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1000;pointer-events:none}.crosshair-line[_ngcontent-%COMP%]{position:absolute;background-color:#fffc;border:1px solid rgba(0,0,0,.5)}.crosshair-line.horizontal[_ngcontent-%COMP%]{width:20px;height:2px;top:-1px;left:-10px}.crosshair-line.vertical[_ngcontent-%COMP%]{width:2px;height:20px;top:-10px;left:-1px}.crosshair-center[_ngcontent-%COMP%]{position:absolute;width:4px;height:4px;background-color:#ffffffe6;border:1px solid rgba(0,0,0,.7);border-radius:50%;top:-2px;left:-2px}"]})};var ku="179";var $0=0,Tm=1,q0=2;var Cm=1,Uu=2,di=3,Di=0,$t=1,fi=2,Li=0,Yr=1,Im=2,Am=3,Dm=4,X0=5,lr=100,Y0=101,Z0=102,J0=103,K0=104,Q0=200,ex=201,tx=202,nx=203,hu=204,pu=205,ix=206,rx=207,sx=208,ox=209,ax=210,cx=211,lx=212,ux=213,dx=214,Vu=0,Bu=1,Hu=2,Zr=3,zu=4,Gu=5,Wu=6,ju=7,$u=0,fx=1,hx=2,Fi=0,px=1,mx=2,gx=3,yx=4,vx=5,_x=6,xx=7;var gm=300,ts=301,ns=302,qu=303,Xu=304,Wa=306,mu=1e3,cr=1001,gu=1002,Un=1003,Mx=1004;var ja=1005;var Xn=1006,Yu=1007;var pr=1008;var Jn=1009,Rm=1010,Nm=1011,uo=1012,Zu=1013,mr=1014,hi=1015,fo=1016,Ju=1017,Ku=1018,ho=1020,Pm=35902,Om=1021,Lm=1022,Vn=1023,eo=1026,po=1027,Fm=1028,Qu=1029,km=1030,ed=1031;var td=1033,$a=33776,qa=33777,Xa=33778,Ya=33779,nd=35840,id=35841,rd=35842,sd=35843,od=36196,ad=37492,cd=37496,ld=37808,ud=37809,dd=37810,fd=37811,hd=37812,pd=37813,md=37814,gd=37815,yd=37816,vd=37817,_d=37818,xd=37819,Md=37820,Ed=37821,Za=36492,bd=36494,Sd=36495,Um=36283,wd=36284,Td=36285,Cd=36286;var wa=2300,yu=2301,fu=2302,ym=2400,vm=2401,_m=2402;var Ex=3200,bx=3201;var Vm=0,Sx=1,ki="",Mn="srgb",Jr="srgb-linear",Ta="linear",ct="srgb";var Xr=7680;var xm=519,wx=512,Tx=513,Cx=514,Bm=515,Ix=516,Ax=517,Dx=518,Rx=519,Mm=35044;var Hm="300 es",qn=2e3,Ca=2001;var Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jp=Math.PI/180,vu=180/Math.PI;function Ja(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function MC(n,e){return(n%e+e)%e}function $p(n,e,t){return(1-t)*n+t*e}function _a(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ge=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ni=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*y,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let C=Math.sqrt(b),I=Math.atan2(C,p*S);m=Math.sin(m*I)/C,a=Math.sin(a*I)/C}let x=a*S;if(c=c*m+f*x,l=l*m+h*x,u=u*m+g*x,d=d*m+y*x,m===1-a){let C=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=C,l*=C,u*=C,d*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(b0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(b0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qp.copy(this).projectOnVector(e),this.sub(qp)}reflect(e){return this.sub(qp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qp=new L,b0=new Ni,Be=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=r[0],m=r[3],p=r[6],S=r[1],b=r[4],x=r[7],C=r[2],I=r[5],A=r[8];return s[0]=o*y+a*S+c*C,s[3]=o*m+a*b+c*I,s[6]=o*p+a*x+c*A,s[1]=l*y+u*S+d*C,s[4]=l*m+u*b+d*I,s[7]=l*p+u*x+d*A,s[2]=f*y+h*S+g*C,s[5]=f*m+h*b+g*I,s[8]=f*p+h*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=h*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xp.makeScale(e,t)),this}rotate(e){return this.premultiply(Xp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xp=new Be;function zm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Nx(){let n=Ia("canvas");return n.style.display="block",n}var S0={};function Kr(n){n in S0||(S0[n]=!0,console.warn(n))}function Px(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var w0=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),T0=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EC(){let n={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=Qs(r.r),r.g=Qs(r.g),r.b=Qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ki?Ta:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Jr]:{primaries:e,whitePoint:i,transfer:Ta,toXYZ:w0,fromXYZ:T0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:w0,fromXYZ:T0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),n}var et=EC();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hs,_u=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=Ia("canvas")),Hs.width=e.width,Hs.height=e.height;let r=Hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ia("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ai(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bC=0,to=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bC++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yp(r[o].image)):s.push(Yp(r[o]))}else s=Yp(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Yp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_u.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var SC=0,Zp=new L,gr=(()=>{class n extends Ri{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=cr,s=cr,o=Xn,a=pr,c=Vn,l=Jn,u=n.DEFAULT_ANISOTROPY,d=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SC++}),this.uuid=Ja(),this.name="",this.source=new to(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zp).x}get height(){return this.source.getSize(Zp).y}get depth(){return this.source.getSize(Zp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mu:t.x=t.x-Math.floor(t.x);break;case cr:t.x=t.x<0?0:1;break;case gu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mu:t.y=t.y-Math.floor(t.y);break;case cr:t.y=t.y<0?0:1;break;case gu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=gm,n.DEFAULT_ANISOTROPY=1,n})(),It=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,x=(h+1)/2,C=(p+1)/2,I=(u+f)/4,A=(d+y)/4,R=(g+m)/4;return b>x&&b>C?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=I/i,s=A/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=I/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=R/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-y)/S,this.z=(f-u)/S,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xu=class extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new gr(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new to(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends xu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Aa=class extends gr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mu=class extends gr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$l.copy(i.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),ql.subVectors(this.max,xa),zs.subVectors(e.a,xa),Gs.subVectors(e.b,xa),Ws.subVectors(e.c,xa),tr.subVectors(Gs,zs),nr.subVectors(Ws,Gs),Wr.subVectors(zs,Ws);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Wr.z,Wr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Wr.z,0,-Wr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Wr.y,Wr.x,0];return!Jp(t,zs,Gs,Ws,ql)||(t=[1,0,0,0,1,0,0,0,1],!Jp(t,zs,Gs,Ws,ql))?!1:(Xl.crossVectors(tr,nr),t=[Xl.x,Xl.y,Xl.z],Jp(t,zs,Gs,Ws,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Si=[new L,new L,new L,new L,new L,new L,new L,new L],Wn=new L,$l=new ur,zs=new L,Gs=new L,Ws=new L,tr=new L,nr=new L,Wr=new L,xa=new L,ql=new L,Xl=new L,jr=new L;function Jp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){jr.fromArray(n,s);let a=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),c=e.dot(jr),l=t.dot(jr),u=i.dot(jr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var wC=new ur,Ma=new L,Kp=new L,Qr=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):wC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);let t=Ma.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(Kp)),this.expandByPoint(Ma.copy(e.center).sub(Kp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wi=new L,Qp=new L,Yl=new L,ir=new L,em=new L,Zl=new L,tm=new L,no=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qp.copy(e).add(t).multiplyScalar(.5),Yl.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(Qp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Yl),a=ir.dot(this.direction),c=-ir.dot(Yl),l=ir.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qp).addScaledVector(Yl,f),h}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,r,s){em.subVectors(t,e),Zl.subVectors(i,e),tm.crossVectors(em,Zl);let o=this.direction.dot(tm),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);let c=a*this.direction.dot(Zl.crossVectors(ir,Zl));if(c<0)return null;let l=a*this.direction.dot(em.cross(ir));if(l<0||c+l>o)return null;let u=-a*ir.dot(tm);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/js.setFromMatrixColumn(e,0).length(),s=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TC,e,CC)}lookAt(e,t,i){let r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),rr.crossVectors(i,_n),rr.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),rr.crossVectors(i,_n)),rr.normalize(),Jl.crossVectors(_n,rr),r[0]=rr.x,r[4]=Jl.x,r[8]=_n.x,r[1]=rr.y,r[5]=Jl.y,r[9]=_n.y,r[2]=rr.z,r[6]=Jl.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],m=i[10],p=i[14],S=i[3],b=i[7],x=i[11],C=i[15],I=r[0],A=r[4],R=r[8],E=r[12],M=r[1],T=r[5],k=r[9],B=r[13],H=r[2],$=r[6],q=r[10],Y=r[14],z=r[3],se=r[7],ue=r[11],Ee=r[15];return s[0]=o*I+a*M+c*H+l*z,s[4]=o*A+a*T+c*$+l*se,s[8]=o*R+a*k+c*q+l*ue,s[12]=o*E+a*B+c*Y+l*Ee,s[1]=u*I+d*M+f*H+h*z,s[5]=u*A+d*T+f*$+h*se,s[9]=u*R+d*k+f*q+h*ue,s[13]=u*E+d*B+f*Y+h*Ee,s[2]=g*I+y*M+m*H+p*z,s[6]=g*A+y*T+m*$+p*se,s[10]=g*R+y*k+m*q+p*ue,s[14]=g*E+y*B+m*Y+p*Ee,s[3]=S*I+b*M+x*H+C*z,s[7]=S*A+b*T+x*$+C*se,s[11]=S*R+b*k+x*q+C*ue,s[15]=S*E+b*B+x*Y+C*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+y*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=d*m*l-y*f*l+y*c*h-a*m*h-d*c*p+a*f*p,b=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,x=u*y*l-g*d*l+g*a*h-o*y*h-u*a*p+o*d*p,C=g*d*c-u*y*c-g*a*f+o*y*f+u*a*m-o*d*m,I=t*S+i*b+r*x+s*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/I;return e[0]=S*A,e[1]=(y*f*s-d*m*s-y*r*h+i*m*h+d*r*p-i*f*p)*A,e[2]=(a*m*s-y*c*s+y*r*l-i*m*l-a*r*p+i*c*p)*A,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*A,e[4]=b*A,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*A,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*A,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*A,e[8]=x*A,e[9]=(g*d*s-u*y*s-g*i*h+t*y*h+u*i*p-t*d*p)*A,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*p+t*a*p)*A,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*A,e[12]=C*A,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*A,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*m-t*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,y=o*u,m=o*d,p=a*d,S=c*l,b=c*u,x=c*d,C=i.x,I=i.y,A=i.z;return r[0]=(1-(y+p))*C,r[1]=(h+x)*C,r[2]=(g-b)*C,r[3]=0,r[4]=(h-x)*I,r[5]=(1-(f+p))*I,r[6]=(m+S)*I,r[7]=0,r[8]=(g+b)*A,r[9]=(m-S)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=js.set(r[0],r[1],r[2]).length(),o=js.set(r[4],r[5],r[6]).length(),a=js.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);let l=1/s,u=1/o,d=1/a;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,t.setFromRotationMatrix(jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=qn,c=!1){let l=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),g,y;if(c)g=s/(o-s),y=o*s/(o-s);else if(a===qn)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ca)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=qn,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),g,y;if(c)g=1/(o-s),y=o/(o-s);else if(a===qn)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===Ca)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},js=new L,jn=new Tt,TC=new L(0,0,0),CC=new L(1,1,1),rr=new L,Jl=new L,_n=new L,C0=new Tt,I0=new Ni,dr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return C0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(C0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return I0.setFromEuler(this),this.setFromQuaternion(I0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),io=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},IC=0,A0=new L,$s=new Ni,Ti=new Tt,Kl=new L,Ea=new L,AC=new L,DC=new Ni,D0=new L(1,0,0),R0=new L(0,1,0),N0=new L(0,0,1),P0={type:"added"},RC={type:"removed"},qs={type:"childadded",child:null},nm={type:"childremoved",child:null},Yn=(()=>{class n extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IC++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,i=new dr,r=new Ni,s=new L(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Be}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return $s.setFromAxisAngle(t,i),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,i){return $s.setFromAxisAngle(t,i),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis(D0,t)}rotateY(t){return this.rotateOnAxis(R0,t)}rotateZ(t){return this.rotateOnAxis(N0,t)}translateOnAxis(t,i){return A0.copy(t).applyQuaternion(this.quaternion),this.position.add(A0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(D0,t)}translateY(t){return this.translateOnAxis(R0,t)}translateZ(t){return this.translateOnAxis(N0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Kl.copy(t):Kl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Ea,Kl,this.up):Ti.lookAt(Kl,Ea,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Ti),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(P0),qs.child=t,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(RC),nm.child=t,this.dispatchEvent(nm),nm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(P0),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,t,AC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,DC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>gt(it({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>it({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new L(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),$n=new L,Ci=new L,im=new L,Ii=new L,Xs=new L,Ys=new L,O0=new L,rm=new L,sm=new L,om=new L,am=new It,cm=new It,lm=new It,ar=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$n.subVectors(e,t),r.cross($n);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$n.subVectors(r,t),Ci.subVectors(i,t),im.subVectors(e,t);let o=$n.dot($n),a=$n.dot(Ci),c=$n.dot(im),l=Ci.dot(Ci),u=Ci.dot(im),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ii.x),c.addScaledVector(o,Ii.y),c.addScaledVector(a,Ii.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return am.setScalar(0),cm.setScalar(0),lm.setScalar(0),am.fromBufferAttribute(e,t),cm.fromBufferAttribute(e,i),lm.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(am,s.x),o.addScaledVector(cm,s.y),o.addScaledVector(lm,s.z),o}static isFrontFacing(e,t,i,r){return $n.subVectors(i,t),Ci.subVectors(e,t),$n.cross(Ci).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),$n.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Xs.subVectors(r,i),Ys.subVectors(s,i),rm.subVectors(e,i);let c=Xs.dot(rm),l=Ys.dot(rm);if(c<=0&&l<=0)return t.copy(i);sm.subVectors(e,r);let u=Xs.dot(sm),d=Ys.dot(sm);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Xs,o);om.subVectors(e,s);let h=Xs.dot(om),g=Ys.dot(om);if(g>=0&&h<=g)return t.copy(s);let y=h*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ys,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return O0.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(O0,a);let p=1/(m+y+f);return o=y*p,a=f*p,t.copy(i).addScaledVector(Xs,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function um(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var we=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=MC(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=um(o,s,e+1/3),this.g=um(o,s,e),this.b=um(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){let i=Ox[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return et.workingToColorSpace(Jt.copy(this),e),Math.round(Ke(Jt.r*255,0,255))*65536+Math.round(Ke(Jt.g*255,0,255))*256+Math.round(Ke(Jt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Jt.copy(this),t);let i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Mn){et.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,i=Jt.g,r=Jt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(Ql);let i=$p(sr.h,Ql.h,t),r=$p(sr.s,Ql.s,t),s=$p(sr.l,Ql.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new we;we.NAMES=Ox;var NC=0,Pi=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NC++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Yr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=pu,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hu&&(i.blendSrc=this.blendSrc),this.blendDst!==pu&&(i.blendDst=this.blendDst),this.blendEquation!==lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Oi=class extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new L,eu=new Ge,PC=0,En=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mm,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eu.fromBufferAttribute(this,t),eu.applyMatrix3(e),this.setXY(t,eu.x,eu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_a(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_a(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_a(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_a(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_a(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mm&&(e.usage=this.usage),e}};var Da=class extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ra=class extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ct=class extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}},OC=0,kn=new Tt,dm=new Yn,Zs=new L,xn=new ur,ba=new ur,Gt=new L,rn=class n extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OC++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zm(e)?Ra:Da)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return dm.lookAt(e),dm.updateMatrix(),this.applyMatrix4(dm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ba.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(xn.min,ba.min),xn.expandByPoint(Gt),Gt.addVectors(xn.max,ba.max),xn.expandByPoint(Gt)):(xn.expandByPoint(ba.min),xn.expandByPoint(ba.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Gt.fromBufferAttribute(a,l),c&&(Zs.fromBufferAttribute(e,l),Gt.add(Zs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new L,c[R]=new L;let l=new L,u=new L,d=new L,f=new Ge,h=new Ge,g=new Ge,y=new L,m=new L;function p(R,E,M){l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,R),h.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let T=1/(h.x*g.y-g.x*h.y);isFinite(T)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(T),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(T),a[R].add(y),a[E].add(y),a[M].add(y),c[R].add(m),c[E].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,E=S.length;R<E;++R){let M=S[R],T=M.start,k=M.count;for(let B=T,H=T+k;B<H;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new L,x=new L,C=new L,I=new L;function A(R){C.fromBufferAttribute(r,R),I.copy(C);let E=a[R];b.copy(E),b.sub(C.multiplyScalar(C.dot(E))).normalize(),x.crossVectors(I,E);let T=x.dot(c[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,T)}for(let R=0,E=S.length;R<E;++R){let M=S[R],T=M.start,k=M.count;for(let B=T,H=T+k;B<H;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?h=c[y]*a.data.stride+a.offset:h=c[y]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new En(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},L0=new Tt,$r=new no,tu=new Qr,F0=new L,nu=new L,iu=new L,ru=new L,fm=new L,su=new L,k0=new L,ou=new L,_e=class extends Yn{constructor(e=new rn,t=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){su.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(fm.fromBufferAttribute(d,e),o?su.addScaledVector(fm,u):su.addScaledVector(fm.sub(t),u))}t.add(su)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tu.copy(i.boundingSphere),tu.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(tu.containsPoint($r.origin)===!1&&($r.intersectSphere(tu,F0)===null||$r.origin.distanceToSquared(F0)>(e.far-e.near)**2))&&(L0.copy(s).invert(),$r.copy(e.ray).applyMatrix4(L0),!(i.boundingBox!==null&&$r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=S,C=b;x<C;x+=3){let I=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);r=au(this,p,e,i,l,u,d,I,A,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let S=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);r=au(this,o,e,i,l,u,d,S,b,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,h.start),b=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let x=S,C=b;x<C;x+=3){let I=x,A=x+1,R=x+2;r=au(this,p,e,i,l,u,d,I,A,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(c.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let S=m,b=m+1,x=m+2;r=au(this,o,e,i,l,u,d,S,b,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function LC(n,e,t,i,r,s,o,a){let c;if(e.side===$t?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Di,a),c===null)return null;ou.copy(a),ou.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ou);return l<t.near||l>t.far?null:{distance:l,point:ou.clone(),object:n}}function au(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,nu),n.getVertexPosition(c,iu),n.getVertexPosition(l,ru);let u=LC(n,e,t,i,nu,iu,ru,k0);if(u){let d=new L;ar.getBarycoord(k0,nu,iu,ru,d),r&&(u.uv=ar.getInterpolatedAttribute(r,a,c,l,d,new Ge)),s&&(u.uv1=ar.getInterpolatedAttribute(s,a,c,l,d,new Ge)),o&&(u.normal=ar.getInterpolatedAttribute(o,a,c,l,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};ar.getNormal(nu,iu,ru,f.normal),u.face=f,u.barycoord=d}return u}var kt=class n extends rn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(d,2));function g(y,m,p,S,b,x,C,I,A,R,E){let M=x/A,T=C/R,k=x/2,B=C/2,H=I/2,$=A+1,q=R+1,Y=0,z=0,se=new L;for(let ue=0;ue<q;ue++){let Ee=ue*T-B;for(let je=0;je<$;je++){let _t=je*M-k;se[y]=_t*S,se[m]=Ee*b,se[p]=H,l.push(se.x,se.y,se.z),se[y]=0,se[m]=0,se[p]=I>0?1:-1,u.push(se.x,se.y,se.z),d.push(je/A),d.push(1-ue/R),Y+=1}}for(let ue=0;ue<R;ue++)for(let Ee=0;Ee<A;Ee++){let je=f+Ee+$*ue,_t=f+Ee+$*(ue+1),dt=f+(Ee+1)+$*(ue+1),j=f+(Ee+1)+$*ue;c.push(je,_t,j),c.push(_t,dt,j),z+=6}a.addGroup(h,z,E),h+=z,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Qt(n){let e={};for(let t=0;t<n.length;t++){let i=is(n[t]);for(let r in i)e[r]=i[r]}return e}function FC(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Lx={clone:is,merge:Qt},kC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kC,this.fragmentShader=UC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=FC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Na=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},or=new L,U0=new Ge,V0=new Ge,Kt=class extends Na{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vu*2*Math.atan(Math.tan(jp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,U0,V0),t.subVectors(V0,U0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jp*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Js=-90,Ks=1,Eu=class extends Yn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kt(Js,Ks,e,t);r.layers=this.layers,this.add(r);let s=new Kt(Js,Ks,e,t);s.layers=this.layers,this.add(s);let o=new Kt(Js,Ks,e,t);o.layers=this.layers,this.add(o);let a=new Kt(Js,Ks,e,t);a.layers=this.layers,this.add(a);let c=new Kt(Js,Ks,e,t);c.layers=this.layers,this.add(c);let l=new Kt(Js,Ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Pa=class extends gr{constructor(e=[],t=ts,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bu=class extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new kt(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Li});s.uniforms.tEquirect.value=t;let o=new _e(r,s),a=t.minFilter;return t.minFilter===pr&&(t.minFilter=Xn),new Eu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},wt=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},VC={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VC)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new wt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var so=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Oa=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var hm=new L,BC=new L,HC=new Be,ci=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=hm.subVectors(i,t).cross(BC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(hm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||HC.getNormalMatrix(e),r=this.coplanarPoint(hm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qr=new Qr,zC=new Ge(.5,.5),cu=new L,oo=class{constructor(e=new ci,t=new ci,i=new ci,r=new ci,s=new ci,o=new ci){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],y=s[9],m=s[10],p=s[11],S=s[12],b=s[13],x=s[14],C=s[15];if(r[0].setComponents(l-o,h-u,p-g,C-S).normalize(),r[1].setComponents(l+o,h+u,p+g,C+S).normalize(),r[2].setComponents(l+a,h+d,p+y,C+b).normalize(),r[3].setComponents(l-a,h-d,p-y,C-b).normalize(),i)r[4].setComponents(c,f,m,x).normalize(),r[5].setComponents(l-c,h-f,p-m,C-x).normalize();else if(r[4].setComponents(l-c,h-f,p-m,C-x).normalize(),t===qn)r[5].setComponents(l+c,h+f,p+m,C+x).normalize();else if(t===Ca)r[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);let t=zC.distanceTo(e.center);return qr.radius=.7071067811865476+t,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(cu.x=r.normal.x>0?e.max.x:e.min.x,cu.y=r.normal.y>0?e.max.y:e.min.y,cu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ao=class extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Su=new L,wu=new L,B0=new Tt,Sa=new no,lu=new Qr,pm=new L,H0=new L,La=class extends Yn{constructor(e=new rn,t=new ao){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Su.fromBufferAttribute(t,r-1),wu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Su.distanceTo(wu);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lu.copy(i.boundingSphere),lu.applyMatrix4(r),lu.radius+=s,e.ray.intersectsSphere(lu)===!1)return;B0.copy(r).invert(),Sa.copy(e.ray).applyMatrix4(B0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=h,m=g-1;y<m;y+=l){let p=u.getX(y),S=u.getX(y+1),b=uu(this,e,Sa,c,p,S,y);b&&t.push(b)}if(this.isLineLoop){let y=u.getX(g-1),m=u.getX(h),p=uu(this,e,Sa,c,y,m,g-1);p&&t.push(p)}}else{let h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=h,m=g-1;y<m;y+=l){let p=uu(this,e,Sa,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=uu(this,e,Sa,c,g-1,h,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function uu(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Su.fromBufferAttribute(a,r),wu.fromBufferAttribute(a,s),t.distanceSqToSegment(Su,wu,pm,H0)>i)return;pm.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(pm);if(!(l<e.near||l>e.far))return{distance:l,point:H0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Fa=class extends gr{constructor(e,t,i=mr,r,s,o,a=Un,c=Un,l,u=eo,d=1){if(u!==eo&&u!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var bn=class n extends rn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],h=[],g=0,y=[],m=i/2,p=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(h,2));function S(){let x=new L,C=new L,I=0,A=(t-e)/i;for(let R=0;R<=s;R++){let E=[],M=R/s,T=M*(t-e)+e;for(let k=0;k<=r;k++){let B=k/r,H=B*c+a,$=Math.sin(H),q=Math.cos(H);C.x=T*$,C.y=-M*i+m,C.z=T*q,d.push(C.x,C.y,C.z),x.set($,A,q).normalize(),f.push(x.x,x.y,x.z),h.push(B,1-M),E.push(g++)}y.push(E)}for(let R=0;R<r;R++)for(let E=0;E<s;E++){let M=y[E][R],T=y[E+1][R],k=y[E+1][R+1],B=y[E][R+1];(e>0||E!==0)&&(u.push(M,T,B),I+=3),(t>0||E!==s-1)&&(u.push(T,k,B),I+=3)}l.addGroup(p,I,0),p+=I}function b(x){let C=g,I=new Ge,A=new L,R=0,E=x===!0?e:t,M=x===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,m*M,0),f.push(0,M,0),h.push(.5,.5),g++;let T=g;for(let k=0;k<=r;k++){let H=k/r*c+a,$=Math.cos(H),q=Math.sin(H);A.x=E*q,A.y=m*M,A.z=E*$,d.push(A.x,A.y,A.z),f.push(0,M,0),I.x=$*.5+.5,I.y=q*.5*M+.5,h.push(I.x,I.y),g++}for(let k=0;k<r;k++){let B=C+k,H=T+k;x===!0?u.push(H,H+1,B):u.push(H+1,H,B),R+=3}l.addGroup(p,R,x===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},co=class n extends bn{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Tu=class n extends rn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(s.slice(),3)),this.setAttribute("uv",new Ct(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let b=new L,x=new L,C=new L;for(let I=0;I<t.length;I+=3)h(t[I+0],b),h(t[I+1],x),h(t[I+2],C),c(b,x,C,S)}function c(S,b,x,C){let I=C+1,A=[];for(let R=0;R<=I;R++){A[R]=[];let E=S.clone().lerp(x,R/I),M=b.clone().lerp(x,R/I),T=I-R;for(let k=0;k<=T;k++)k===0&&R===I?A[R][k]=E:A[R][k]=E.clone().lerp(M,k/T)}for(let R=0;R<I;R++)for(let E=0;E<2*(I-R)-1;E++){let M=Math.floor(E/2);E%2===0?(f(A[R][M+1]),f(A[R+1][M]),f(A[R][M])):(f(A[R][M+1]),f(A[R+1][M+1]),f(A[R+1][M]))}}function l(S){let b=new L;for(let x=0;x<s.length;x+=3)b.x=s[x+0],b.y=s[x+1],b.z=s[x+2],b.normalize().multiplyScalar(S),s[x+0]=b.x,s[x+1]=b.y,s[x+2]=b.z}function u(){let S=new L;for(let b=0;b<s.length;b+=3){S.x=s[b+0],S.y=s[b+1],S.z=s[b+2];let x=m(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;o.push(x,1-C)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){let b=o[S+0],x=o[S+2],C=o[S+4],I=Math.max(b,x,C),A=Math.min(b,x,C);I>.9&&A<.1&&(b<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function h(S,b){let x=S*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){let S=new L,b=new L,x=new L,C=new L,I=new Ge,A=new Ge,R=new Ge;for(let E=0,M=0;E<s.length;E+=9,M+=6){S.set(s[E+0],s[E+1],s[E+2]),b.set(s[E+3],s[E+4],s[E+5]),x.set(s[E+6],s[E+7],s[E+8]),I.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),C.copy(S).add(b).add(x).divideScalar(3);let T=m(C);y(I,M+0,S,T),y(A,M+2,b,T),y(R,M+4,x,T)}}function y(S,b,x,C){C<0&&S.x===1&&(o[b]=S.x-1),x.x===0&&x.z===0&&(o[b]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},ka=class n extends Tu{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ui=class n extends rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let S=p*f-o;for(let b=0;b<l;b++){let x=b*d-s;g.push(x,-S,0),y.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let b=S+l*p,x=S+l*(p+1),C=S+1+l*(p+1),I=S+1+l*p;h.push(b,x,I),h.push(x,C,I)}this.setIndex(h),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ua=class n extends rn{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],c=[],l=[],u=[],d=e,f=(t-e)/r,h=new L,g=new Ge;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){let p=s+m/i*o;h.x=d*Math.cos(p),h.y=d*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let y=0;y<r;y++){let m=y*(i+1);for(let p=0;p<i;p++){let S=p+m,b=S,x=S+i+1,C=S+i+2,I=S+1;a.push(b,x,I),a.push(x,C,I)}}this.setIndex(a),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var fn=class n extends rn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new L,f=new L,h=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let S=[],b=p/i,x=0;p===0&&o===0?x=.5/t:p===i&&c===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){let I=C/t;d.x=-e*Math.cos(r+I*s)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(r+I*s)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(I+x,1-b),S.push(l++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let b=u[p][S+1],x=u[p][S],C=u[p+1][S],I=u[p+1][S+1];(p!==0||o>0)&&h.push(b,x,I),(p!==i-1||c<Math.PI)&&h.push(x,C,I)}this.setIndex(h),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xe=class extends Pi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vm,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cu=class extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Iu=class extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function du(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function GC(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var es=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Au=class extends es{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ym,endingEnd:ym}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case vm:s=e,a=2*t-i;break;case _m:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case vm:o=e,c=2*i-t;break;case _m:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,S=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,b=(-1-h)*m+(1.5+h)*y+.5*g,x=h*m-h*y;for(let C=0;C!==a;++C)s[C]=p*o[u+C]+S*o[l+C]+b*o[c+C]+x*o[d+C];return s}},Du=class extends es{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},Ru=class extends es{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Sn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=du(t,this.TimeBufferType),this.values=du(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:du(e.times,Array),values:du(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Au(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wa:t=this.InterpolantFactoryMethodDiscrete;break;case yu:t=this.InterpolantFactoryMethodLinear;break;case fu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wa;case this.InterpolantFactoryMethodLinear:return yu;case this.InterpolantFactoryMethodSmooth:return fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&GC(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===fu,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=yu;var fr=class extends Sn{constructor(e,t,i){super(e,t,i)}};fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=wa;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Nu=class extends Sn{constructor(e,t,i,r){super(e,t,i,r)}};Nu.prototype.ValueTypeName="color";var Pu=class extends Sn{constructor(e,t,i,r){super(e,t,i,r)}};Pu.prototype.ValueTypeName="number";var Ou=class extends es{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Ni.slerpFlat(s,0,o,l-a,o,l,c);return s}},Va=class extends Sn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Ou(this.times,this.values,this.getValueSize(),e)}};Va.prototype.ValueTypeName="quaternion";Va.prototype.InterpolantFactoryMethodSmooth=void 0;var hr=class extends Sn{constructor(e,t,i){super(e,t,i)}};hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=wa;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Lu=class extends Sn{constructor(e,t,i,r){super(e,t,i,r)}};Lu.prototype.ValueTypeName="vector";var Ba=class extends Yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var mm=new Tt,z0=new L,G0=new L,Em=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;z0.setFromMatrixPosition(e.matrixWorld),t.position.copy(z0),G0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(G0),t.updateMatrixWorld(),mm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mm,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ha=class extends Na{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bm=class extends Em{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lo=class extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new bm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},za=class extends Ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Fu=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Wm="\\[\\]\\.:\\/",WC=new RegExp("["+Wm+"]","g"),jm="[^"+Wm+"]",jC="[^"+Wm.replace("\\.","")+"]",$C=/((?:WC+[\/:])*)/.source.replace("WC",jm),qC=/(WCOD+)?/.source.replace("WCOD",jC),XC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jm),YC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jm),ZC=new RegExp("^"+$C+qC+XC+YC+"$"),JC=["material","materials","bones","map"],Sm=class{constructor(e,t,i){let r=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(WC,"")}static parseTrackName(t){let i=ZC.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);JC.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Sm,n})();Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sz=new Float32Array(1);var W0=new Tt,Ga=class{constructor(e,t,i=0,r=1/0){this.ray=new no(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return W0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(W0),this}intersectObject(e,t=!0,i=[]){return wm(e,this,i,t),i.sort(j0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)wm(e[r],this,i,t);return i.sort(j0),i}};function j0(n,e){return n.distance-e.distance}function wm(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)wm(s[o],e,t,!0)}}function $m(n,e,t,i){let r=KC(i);switch(t){case Om:return n*e;case Fm:return n*e/r.components*r.byteLength;case Qu:return n*e/r.components*r.byteLength;case km:return n*e*2/r.components*r.byteLength;case ed:return n*e*2/r.components*r.byteLength;case Lm:return n*e*3/r.components*r.byteLength;case Vn:return n*e*4/r.components*r.byteLength;case td:return n*e*4/r.components*r.byteLength;case $a:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case id:case sd:return Math.max(n,16)*Math.max(e,8)/4;case nd:case rd:return Math.max(n,8)*Math.max(e,8)/2;case od:case ad:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _d:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Md:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Za:case bd:case Sd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Um:case wd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Td:case Cd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KC(n){switch(n){case Jn:case Rm:return{byteLength:1,components:1};case uo:case Nm:case fo:return{byteLength:2,components:1};case Ju:case Ku:return{byteLength:2,components:4};case mr:case Zu:case hi:return{byteLength:4,components:1};case Pm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ku);function sM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function QC(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let y=d[h];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var eI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tI=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nI=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rI=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oI=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cI=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fI=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hI=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pI=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mI=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_I=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bI=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SI=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wI=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,II=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DI="gl_FragColor = linearToOutputTexel( gl_FragColor );",RI=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,PI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OI=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HI=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WI=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jI=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$I=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XI=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZI=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JI=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KI=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QI=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_A=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,FA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$A=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,QA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_D=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ED=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ID=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ND=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:eI,alphahash_pars_fragment:tI,alphamap_fragment:nI,alphamap_pars_fragment:iI,alphatest_fragment:rI,alphatest_pars_fragment:sI,aomap_fragment:oI,aomap_pars_fragment:aI,batching_pars_vertex:cI,batching_vertex:lI,begin_vertex:uI,beginnormal_vertex:dI,bsdfs:fI,iridescence_fragment:hI,bumpmap_pars_fragment:pI,clipping_planes_fragment:mI,clipping_planes_pars_fragment:gI,clipping_planes_pars_vertex:yI,clipping_planes_vertex:vI,color_fragment:_I,color_pars_fragment:xI,color_pars_vertex:MI,color_vertex:EI,common:bI,cube_uv_reflection_fragment:SI,defaultnormal_vertex:wI,displacementmap_pars_vertex:TI,displacementmap_vertex:CI,emissivemap_fragment:II,emissivemap_pars_fragment:AI,colorspace_fragment:DI,colorspace_pars_fragment:RI,envmap_fragment:NI,envmap_common_pars_fragment:PI,envmap_pars_fragment:OI,envmap_pars_vertex:LI,envmap_physical_pars_fragment:$I,envmap_vertex:FI,fog_vertex:kI,fog_pars_vertex:UI,fog_fragment:VI,fog_pars_fragment:BI,gradientmap_pars_fragment:HI,lightmap_pars_fragment:zI,lights_lambert_fragment:GI,lights_lambert_pars_fragment:WI,lights_pars_begin:jI,lights_toon_fragment:qI,lights_toon_pars_fragment:XI,lights_phong_fragment:YI,lights_phong_pars_fragment:ZI,lights_physical_fragment:JI,lights_physical_pars_fragment:KI,lights_fragment_begin:QI,lights_fragment_maps:eA,lights_fragment_end:tA,logdepthbuf_fragment:nA,logdepthbuf_pars_fragment:iA,logdepthbuf_pars_vertex:rA,logdepthbuf_vertex:sA,map_fragment:oA,map_pars_fragment:aA,map_particle_fragment:cA,map_particle_pars_fragment:lA,metalnessmap_fragment:uA,metalnessmap_pars_fragment:dA,morphinstance_vertex:fA,morphcolor_vertex:hA,morphnormal_vertex:pA,morphtarget_pars_vertex:mA,morphtarget_vertex:gA,normal_fragment_begin:yA,normal_fragment_maps:vA,normal_pars_fragment:_A,normal_pars_vertex:xA,normal_vertex:MA,normalmap_pars_fragment:EA,clearcoat_normal_fragment_begin:bA,clearcoat_normal_fragment_maps:SA,clearcoat_pars_fragment:wA,iridescence_pars_fragment:TA,opaque_fragment:CA,packing:IA,premultiplied_alpha_fragment:AA,project_vertex:DA,dithering_fragment:RA,dithering_pars_fragment:NA,roughnessmap_fragment:PA,roughnessmap_pars_fragment:OA,shadowmap_pars_fragment:LA,shadowmap_pars_vertex:FA,shadowmap_vertex:kA,shadowmask_pars_fragment:UA,skinbase_vertex:VA,skinning_pars_vertex:BA,skinning_vertex:HA,skinnormal_vertex:zA,specularmap_fragment:GA,specularmap_pars_fragment:WA,tonemapping_fragment:jA,tonemapping_pars_fragment:$A,transmission_fragment:qA,transmission_pars_fragment:XA,uv_pars_fragment:YA,uv_pars_vertex:ZA,uv_vertex:JA,worldpos_vertex:KA,background_vert:QA,background_frag:eD,backgroundCube_vert:tD,backgroundCube_frag:nD,cube_vert:iD,cube_frag:rD,depth_vert:sD,depth_frag:oD,distanceRGBA_vert:aD,distanceRGBA_frag:cD,equirect_vert:lD,equirect_frag:uD,linedashed_vert:dD,linedashed_frag:fD,meshbasic_vert:hD,meshbasic_frag:pD,meshlambert_vert:mD,meshlambert_frag:gD,meshmatcap_vert:yD,meshmatcap_frag:vD,meshnormal_vert:_D,meshnormal_frag:xD,meshphong_vert:MD,meshphong_frag:ED,meshphysical_vert:bD,meshphysical_frag:SD,meshtoon_vert:wD,meshtoon_frag:TD,points_vert:CD,points_frag:ID,shadow_vert:AD,shadow_frag:DD,sprite_vert:RD,sprite_frag:ND},re={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},pi={basic:{uniforms:Qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new we(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Qt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Qt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new we(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Qt([re.points,re.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Qt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Qt([re.common,re.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Qt([re.sprite,re.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Qt([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Qt([re.lights,re.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};pi.physical={uniforms:Qt([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Id={r:0,b:0,g:0},rs=new dr,PD=new Tt;function OD(n,e,t,i,r,s,o){let a=new we(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function y(b){let x=!1,C=g(b);C===null?p(a,c):C&&C.isColor&&(p(C,1),x=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,x){let C=g(x);C&&(C.isCubeTexture||C.mapping===Wa)?(u===void 0&&(u=new _e(new kt(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:is(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),rs.copy(x.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(PD.makeRotationFromEuler(rs)),u.material.toneMapped=et.getTransfer(C.colorSpace)!==ct,(d!==C||f!==C.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new _e(new ui(2,2),new Zn({name:"BackgroundMaterial",uniforms:is(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=et.getTransfer(C.colorSpace)!==ct,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,x){b.getRGB(Id,Gm(n)),i.buffers.color.setClear(Id.r,Id.g,Id.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:y,addToRenderList:m,dispose:S}}function LD(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(M,T,k,B,H){let $=!1,q=d(B,k,T);s!==q&&(s=q,l(s.object)),$=h(M,B,k,H),$&&g(M,B,k,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(M,T,k,B),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,T,k){let B=k.wireframe===!0,H=i[M.id];H===void 0&&(H={},i[M.id]=H);let $=H[T.id];$===void 0&&($={},H[T.id]=$);let q=$[B];return q===void 0&&(q=f(c()),$[B]=q),q}function f(M){let T=[],k=[],B=[];for(let H=0;H<t;H++)T[H]=0,k[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:k,attributeDivisors:B,object:M,attributes:{},index:null}}function h(M,T,k,B){let H=s.attributes,$=T.attributes,q=0,Y=k.getAttributes();for(let z in Y)if(Y[z].location>=0){let ue=H[z],Ee=$[z];if(Ee===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor)),ue===void 0||ue.attribute!==Ee||Ee&&ue.data!==Ee.data)return!0;q++}return s.attributesNum!==q||s.index!==B}function g(M,T,k,B){let H={},$=T.attributes,q=0,Y=k.getAttributes();for(let z in Y)if(Y[z].location>=0){let ue=$[z];ue===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));let Ee={};Ee.attribute=ue,ue&&ue.data&&(Ee.data=ue.data),H[z]=Ee,q++}s.attributes=H,s.attributesNum=q,s.index=B}function y(){let M=s.newAttributes;for(let T=0,k=M.length;T<k;T++)M[T]=0}function m(M){p(M,0)}function p(M,T){let k=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;k[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),H[M]!==T&&(n.vertexAttribDivisor(M,T),H[M]=T)}function S(){let M=s.newAttributes,T=s.enabledAttributes;for(let k=0,B=T.length;k<B;k++)T[k]!==M[k]&&(n.disableVertexAttribArray(k),T[k]=0)}function b(M,T,k,B,H,$,q){q===!0?n.vertexAttribIPointer(M,T,k,H,$):n.vertexAttribPointer(M,T,k,B,H,$)}function x(M,T,k,B){y();let H=B.attributes,$=k.getAttributes(),q=T.defaultAttributeValues;for(let Y in $){let z=$[Y];if(z.location>=0){let se=H[Y];if(se===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){let ue=se.normalized,Ee=se.itemSize,je=e.get(se);if(je===void 0)continue;let _t=je.buffer,dt=je.type,j=je.bytesPerElement,oe=dt===n.INT||dt===n.UNSIGNED_INT||se.gpuType===Zu;if(se.isInterleavedBufferAttribute){let ne=se.data,Ae=ne.stride,De=se.offset;if(ne.isInstancedInterleavedBuffer){for(let ke=0;ke<z.locationSize;ke++)p(z.location+ke,ne.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ke=0;ke<z.locationSize;ke++)m(z.location+ke);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let ke=0;ke<z.locationSize;ke++)b(z.location+ke,Ee/z.locationSize,dt,ue,Ae*j,(De+Ee/z.locationSize*ke)*j,oe)}else{if(se.isInstancedBufferAttribute){for(let ne=0;ne<z.locationSize;ne++)p(z.location+ne,se.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ne=0;ne<z.locationSize;ne++)m(z.location+ne);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let ne=0;ne<z.locationSize;ne++)b(z.location+ne,Ee/z.locationSize,dt,ue,Ee*j,Ee/z.locationSize*ne*j,oe)}}else if(q!==void 0){let ue=q[Y];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(z.location,ue);break;case 3:n.vertexAttrib3fv(z.location,ue);break;case 4:n.vertexAttrib4fv(z.location,ue);break;default:n.vertexAttrib1fv(z.location,ue)}}}}S()}function C(){R();for(let M in i){let T=i[M];for(let k in T){let B=T[k];for(let H in B)u(B[H].object),delete B[H];delete T[k]}delete i[M]}}function I(M){if(i[M.id]===void 0)return;let T=i[M.id];for(let k in T){let B=T[k];for(let H in B)u(B[H].object),delete B[H];delete T[k]}delete i[M.id]}function A(M){for(let T in i){let k=i[T];if(k[M.id]===void 0)continue;let B=k[M.id];for(let H in B)u(B[H].object),delete B[H];delete k[M.id]}}function R(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function FD(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function kD(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Vn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let R=A===fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Jn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==hi&&!R)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:C,maxSamples:I}}function UD(n){let e=this,t=null,i=0,r=!1,s=!1,o=new ci,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let S=s?0:i,b=S*4,x=p.clippingState||null;c.value=x,x=u(g,f,b,h);for(let C=0;C!==b;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=h+y*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=h;b!==y;++b,x+=4)o.copy(d[b]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function VD(n){let e=new WeakMap;function t(o,a){return a===qu?o.mapping=ts:a===Xu&&(o.mapping=ns),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===qu||a===Xu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new bu(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var go=4,Fx=[.125,.215,.35,.446,.526,.582],as=20,qm=new Ha,kx=new we,Xm=null,Ym=0,Zm=0,Jm=!1,os=(1+Math.sqrt(5))/2,mo=1/os,Ux=[new L(-os,mo,0),new L(os,mo,0),new L(-mo,0,os),new L(mo,0,os),new L(0,os,-mo),new L(0,os,mo),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],BD=new L,Rd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=BD}=s;Xm=this._renderer.getRenderTarget(),Ym=this._renderer.getActiveCubeFace(),Zm=this._renderer.getActiveMipmapLevel(),Jm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xm,Ym,Zm),this._renderer.xr.enabled=Jm,e.scissorTest=!1,Ad(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xm=this._renderer.getRenderTarget(),Ym=this._renderer.getActiveCubeFace(),Zm=this._renderer.getActiveMipmapLevel(),Jm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:fo,format:Vn,colorSpace:Jr,depthBuffer:!1},r=Vx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vx(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HD(s)),this._blurMaterial=zD(s,e,t)}return r}_compileMaterial(e){let t=new _e(this._lodPlanes[0],e);this._renderer.compile(t,qm)}_sceneToCubeUV(e,t,i,r,s){let c=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(kx),d.toneMapping=Fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let y=new Oi({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),m=new _e(new kt,y),p=!1,S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,p=!0):(y.color.copy(kx),p=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):x===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));let C=this._cubeSize;Ad(r,x*C,b>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ts||e.mapping===ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bx());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new _e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Ad(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,qm)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ux[(r-s-1)%Ux.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new _e(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*as-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):as;m>as&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);let p=[],S=0;for(let A=0;A<as;++A){let R=A/y,E=Math.exp(-R*R/2);p.push(E),A===0?S+=E:A<m&&(S+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let x=this._sizeLods[r],C=3*x*(r>b-go?r-b+go:0),I=4*(this._cubeSize-x);Ad(t,C,I,3*x,2*x),c.setRenderTarget(t),c.render(d,qm)}};function HD(n){let e=[],t=[],i=[],r=n,s=n-go+1+Fx.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-go?c=Fx[o-n+go-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,y=3,m=2,p=1,S=new Float32Array(y*g*h),b=new Float32Array(m*g*h),x=new Float32Array(p*g*h);for(let I=0;I<h;I++){let A=I%3*2/3-1,R=I>2?0:-1,E=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];S.set(E,y*g*I),b.set(f,m*g*I);let M=[I,I,I,I,I,I];x.set(M,p*g*I)}let C=new rn;C.setAttribute("position",new En(S,y)),C.setAttribute("uv",new En(b,m)),C.setAttribute("faceIndex",new En(x,p)),e.push(C),r>go&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vx(n,e,t){let i=new li(n,e,t);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ad(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function zD(n,e,t){let i=new Float32Array(as),r=new L(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ag(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Bx(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ag(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Hx(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ag(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ag(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GD(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===qu||c===Xu,u=c===ts||c===ns;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Rd(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Rd(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function WD(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Kr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jD(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,y=0;if(h!==null){let S=h.array;y=h.version;for(let b=0,x=S.length;b<x;b+=3){let C=S[b+0],I=S[b+1],A=S[b+2];f.push(C,I,I,A,A,C)}}else if(g!==void 0){let S=g.array;y=g.version;for(let b=0,x=S.length/3-1;b<x;b+=3){let C=b+0,I=b+1,A=b+2;f.push(C,I,I,A,A,C)}}else return;let m=new(zm(f)?Ra:Da)(f,1);m.version=y;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function $D(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,y,0,g);let p=0;for(let S=0;S<g;S++)p+=h[S]*y[S];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function qD(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function XD(n,e,t){let i=new WeakMap,r=new It;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var h=M;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,I=1;C>e.maxTextureSize&&(I=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let A=new Float32Array(C*I*4*d),R=new Aa(A,C,I,d);R.type=hi,R.needsUpdate=!0;let E=x*4;for(let T=0;T<d;T++){let k=p[T],B=S[T],H=b[T],$=C*I*4*T;for(let q=0;q<k.count;q++){let Y=q*E;g===!0&&(r.fromBufferAttribute(k,q),A[$+Y+0]=r.x,A[$+Y+1]=r.y,A[$+Y+2]=r.z,A[$+Y+3]=0),y===!0&&(r.fromBufferAttribute(B,q),A[$+Y+4]=r.x,A[$+Y+5]=r.y,A[$+Y+6]=r.z,A[$+Y+7]=0),m===!0&&(r.fromBufferAttribute(H,q),A[$+Y+8]=r.x,A[$+Y+9]=r.y,A[$+Y+10]=r.z,A[$+Y+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new Ge(C,I)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function YD(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var oM=new gr,zx=new Fa(1,1),aM=new Aa,cM=new Mu,lM=new Pa,Gx=[],Wx=[],jx=new Float32Array(16),$x=new Float32Array(9),qx=new Float32Array(4);function vo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Gx[r];if(s===void 0&&(s=new Float32Array(r),Gx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Od(n,e){let t=Wx[e];t===void 0&&(t=new Int32Array(e),Wx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ZD(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function JD(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function KD(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function QD(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function eR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ut(t,i))return;qx.set(i),n.uniformMatrix2fv(this.addr,!1,qx),Vt(t,i)}}function tR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ut(t,i))return;$x.set(i),n.uniformMatrix3fv(this.addr,!1,$x),Vt(t,i)}}function nR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ut(t,i))return;jx.set(i),n.uniformMatrix4fv(this.addr,!1,jx),Vt(t,i)}}function iR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function sR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function oR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function aR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function lR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function uR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function dR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zx.compareFunction=Bm,s=zx):s=oM,t.setTexture2D(e||s,r)}function fR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cM,r)}function hR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||lM,r)}function pR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||aM,r)}function mR(n){switch(n){case 5126:return ZD;case 35664:return JD;case 35665:return KD;case 35666:return QD;case 35674:return eR;case 35675:return tR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return rR;case 35668:case 35672:return sR;case 35669:case 35673:return oR;case 5125:return aR;case 36294:return cR;case 36295:return lR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return dR;case 35679:case 36299:case 36307:return fR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return pR}}function gR(n,e){n.uniform1fv(this.addr,e)}function yR(n,e){let t=vo(e,this.size,2);n.uniform2fv(this.addr,t)}function vR(n,e){let t=vo(e,this.size,3);n.uniform3fv(this.addr,t)}function _R(n,e){let t=vo(e,this.size,4);n.uniform4fv(this.addr,t)}function xR(n,e){let t=vo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function MR(n,e){let t=vo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ER(n,e){let t=vo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bR(n,e){n.uniform1iv(this.addr,e)}function SR(n,e){n.uniform2iv(this.addr,e)}function wR(n,e){n.uniform3iv(this.addr,e)}function TR(n,e){n.uniform4iv(this.addr,e)}function CR(n,e){n.uniform1uiv(this.addr,e)}function IR(n,e){n.uniform2uiv(this.addr,e)}function AR(n,e){n.uniform3uiv(this.addr,e)}function DR(n,e){n.uniform4uiv(this.addr,e)}function RR(n,e,t){let i=this.cache,r=e.length,s=Od(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||oM,s[o])}function NR(n,e,t){let i=this.cache,r=e.length,s=Od(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||cM,s[o])}function PR(n,e,t){let i=this.cache,r=e.length,s=Od(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||lM,s[o])}function OR(n,e,t){let i=this.cache,r=e.length,s=Od(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||aM,s[o])}function LR(n){switch(n){case 5126:return gR;case 35664:return yR;case 35665:return vR;case 35666:return _R;case 35674:return xR;case 35675:return MR;case 35676:return ER;case 5124:case 35670:return bR;case 35667:case 35671:return SR;case 35668:case 35672:return wR;case 35669:case 35673:return TR;case 5125:return CR;case 36294:return IR;case 36295:return AR;case 36296:return DR;case 35678:case 36198:case 36298:case 36306:case 35682:return RR;case 35679:case 36299:case 36307:return NR;case 35680:case 36300:case 36308:case 36293:return PR;case 36289:case 36303:case 36311:case 36292:return OR}}var Qm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mR(t.type)}},eg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LR(t.type)}},tg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Km=/(\w+)(\])?(\[|\.)?/g;function Xx(n,e){n.seq.push(e),n.map[e.id]=e}function FR(n,e,t){let i=n.name,r=i.length;for(Km.lastIndex=0;;){let s=Km.exec(i),o=Km.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Xx(t,l===void 0?new Qm(a,n,e):new eg(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new tg(a),Xx(t,d)),t=d}}}var yo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);FR(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function Yx(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var kR=37297,UR=0;function VR(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Zx=new Be;function BR(n){et._getMatrix(Zx,et.workingColorSpace,n);let e=`mat3( ${Zx.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Ta:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jx(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+VR(n.getShaderSource(e),a)}else return s}function HR(n,e){let t=BR(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zR(n,e){let t;switch(e){case px:t="Linear";break;case mx:t="Reinhard";break;case gx:t="Cineon";break;case yx:t="ACESFilmic";break;case _x:t="AgX";break;case xx:t="Neutral";break;case vx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dd=new L;function GR(){et.getLuminanceCoefficients(Dd);let n=Dd.x.toFixed(4),e=Dd.y.toFixed(4),t=Dd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function jR(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $R(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ka(n){return n!==""}function Kx(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ng(n){return n.replace(qR,YR)}var XR=new Map;function YR(n,e){let t=We[e];if(t===void 0){let i=XR.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ng(t)}var ZR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eM(n){return n.replace(ZR,JR)}function JR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tM(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function QR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ts:case ns:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ns:e="ENVMAP_MODE_REFRACTION";break}return e}function t1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $u:e="ENVMAP_BLENDING_MULTIPLY";break;case fx:e="ENVMAP_BLENDING_MIX";break;case hx:e="ENVMAP_BLENDING_ADD";break}return e}function n1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function i1(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=KR(t),l=QR(t),u=e1(t),d=t1(t),f=n1(t),h=WR(t),g=jR(s),y=r.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ka).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ka).join(`
`),p.length>0&&(p+=`
`)):(m=[tM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),p=[tM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?We.tonemapping_pars_fragment:"",t.toneMapping!==Fi?zR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,HR("linearToOutputTexel",t.outputColorSpace),GR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),o=ng(o),o=Kx(o,t),o=Qx(o,t),a=ng(a),a=Kx(a,t),a=Qx(a,t),o=eM(o),a=eM(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=S+m+o,x=S+p+a,C=Yx(r,r.VERTEX_SHADER,b),I=Yx(r,r.FRAGMENT_SHADER,x);r.attachShader(y,C),r.attachShader(y,I),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(T){if(n.debug.checkShaderErrors){let k=r.getProgramInfoLog(y)||"",B=r.getShaderInfoLog(C)||"",H=r.getShaderInfoLog(I)||"",$=k.trim(),q=B.trim(),Y=H.trim(),z=!0,se=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,C,I);else{let ue=Jx(r,C,"vertex"),Ee=Jx(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+$+`
`+ue+`
`+Ee)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(q===""||Y==="")&&(se=!1);se&&(T.diagnostics={runnable:z,programLog:$,vertexShader:{log:q,prefix:m},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(C),r.deleteShader(I),R=new yo(r,y),E=$R(r,y)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,kR)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UR++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=I,this}var r1=0,ig=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new rg(e),t.set(e,i)),i}},rg=class{constructor(e){this.id=r1++,this.code=e,this.usedTimes=0}};function s1(n,e,t,i,r,s,o){let a=new io,c=new ig,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,T,k,B){let H=k.fog,$=B.geometry,q=E.isMeshStandardMaterial?k.environment:null,Y=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),z=Y&&Y.mapping===Wa?Y.image.height:null,se=g[E.type];E.precision!==null&&(h=r.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));let ue=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ee=ue!==void 0?ue.length:0,je=0;$.morphAttributes.position!==void 0&&(je=1),$.morphAttributes.normal!==void 0&&(je=2),$.morphAttributes.color!==void 0&&(je=3);let _t,dt,j,oe;if(se){let rt=pi[se];_t=rt.vertexShader,dt=rt.fragmentShader}else _t=E.vertexShader,dt=E.fragmentShader,c.update(E),j=c.getVertexShaderID(E),oe=c.getFragmentShaderID(E);let ne=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),De=B.isInstancedMesh===!0,ke=B.isBatchedMesh===!0,Rt=!!E.map,Qe=!!E.matcap,D=!!Y,pt=!!E.aoMap,Te=!!E.lightMap,nt=!!E.bumpMap,Me=!!E.normalMap,xt=!!E.displacementMap,he=!!E.emissiveMap,$e=!!E.metalnessMap,Bt=!!E.roughnessMap,Nt=E.anisotropy>0,w=E.clearcoat>0,v=E.dispersion>0,F=E.iridescence>0,W=E.sheen>0,Z=E.transmission>0,G=Nt&&!!E.anisotropyMap,xe=w&&!!E.clearcoatMap,te=w&&!!E.clearcoatNormalMap,ge=w&&!!E.clearcoatRoughnessMap,ye=F&&!!E.iridescenceMap,Q=F&&!!E.iridescenceThicknessMap,le=W&&!!E.sheenColorMap,Ne=W&&!!E.sheenRoughnessMap,ve=!!E.specularMap,ae=!!E.specularColorMap,He=!!E.specularIntensityMap,N=Z&&!!E.transmissionMap,ee=Z&&!!E.thicknessMap,ie=!!E.gradientMap,fe=!!E.alphaMap,J=E.alphaTest>0,X=!!E.alphaHash,me=!!E.extensions,Ue=Fi;E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ue=n.toneMapping);let mt={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:_t,fragmentShader:dt,defines:E.defines,customVertexShaderID:j,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:ke,batchingColor:ke&&B._colorsTexture!==null,instancing:De,instancingColor:De&&B.instanceColor!==null,instancingMorph:De&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Jr,alphaToCoverage:!!E.alphaToCoverage,map:Rt,matcap:Qe,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:z,aoMap:pt,lightMap:Te,bumpMap:nt,normalMap:Me,displacementMap:f&&xt,emissiveMap:he,normalMapObjectSpace:Me&&E.normalMapType===Sx,normalMapTangentSpace:Me&&E.normalMapType===Vm,metalnessMap:$e,roughnessMap:Bt,anisotropy:Nt,anisotropyMap:G,clearcoat:w,clearcoatMap:xe,clearcoatNormalMap:te,clearcoatRoughnessMap:ge,dispersion:v,iridescence:F,iridescenceMap:ye,iridescenceThicknessMap:Q,sheen:W,sheenColorMap:le,sheenRoughnessMap:Ne,specularMap:ve,specularColorMap:ae,specularIntensityMap:He,transmission:Z,transmissionMap:N,thicknessMap:ee,gradientMap:ie,opaque:E.transparent===!1&&E.blending===Yr&&E.alphaToCoverage===!1,alphaMap:fe,alphaTest:J,alphaHash:X,combine:E.combine,mapUv:Rt&&y(E.map.channel),aoMapUv:pt&&y(E.aoMap.channel),lightMapUv:Te&&y(E.lightMap.channel),bumpMapUv:nt&&y(E.bumpMap.channel),normalMapUv:Me&&y(E.normalMap.channel),displacementMapUv:xt&&y(E.displacementMap.channel),emissiveMapUv:he&&y(E.emissiveMap.channel),metalnessMapUv:$e&&y(E.metalnessMap.channel),roughnessMapUv:Bt&&y(E.roughnessMap.channel),anisotropyMapUv:G&&y(E.anisotropyMap.channel),clearcoatMapUv:xe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:te&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:le&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(E.sheenRoughnessMap.channel),specularMapUv:ve&&y(E.specularMap.channel),specularColorMapUv:ae&&y(E.specularColorMap.channel),specularIntensityMapUv:He&&y(E.specularIntensityMap.channel),transmissionMapUv:N&&y(E.transmissionMap.channel),thicknessMapUv:ee&&y(E.thicknessMap.channel),alphaMapUv:fe&&y(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Me||Nt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Rt||fe),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ae,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:je,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Rt&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===ct,decodeVideoTextureEmissive:he&&E.emissiveMap.isVideoTexture===!0&&et.getTransfer(E.emissiveMap.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fi,flipSided:E.side===$t,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:me&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&E.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let T in E.defines)M.push(T),M.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(S(M,E),b(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function S(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){let M=g[E.type],T;if(M){let k=pi[M];T=Lx.clone(k.uniforms)}else T=E.uniforms;return T}function C(E,M){let T;for(let k=0,B=u.length;k<B;k++){let H=u[k];if(H.cacheKey===M){T=H,++T.usedTimes;break}}return T===void 0&&(T=new i1(n,M,E,s),u.push(T)),T}function I(E){if(--E.usedTimes===0){let M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function A(E){c.remove(E)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:I,releaseShaderCache:A,programs:u,dispose:R}}function o1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function a1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function iM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||a1),i.length>1&&i.sort(f||nM),r.length>1&&r.sort(f||nM)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function c1(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new iM,n.set(i,[o])):r>=s.length?(o=new iM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function l1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new we};break;case"SpotLight":t={position:new L,direction:new L,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function u1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var d1=0;function f1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function h1(n){let e=new l1,t=u1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);let r=new L,s=new Tt,o=new Tt;function a(l){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,g=0,y=0,m=0,p=0,S=0,b=0,x=0,C=0,I=0,A=0;l.sort(f1);for(let E=0,M=l.length;E<M;E++){let T=l[E],k=T.color,B=T.intensity,H=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=k.r*B,d+=k.g*B,f+=k.b*B;else if(T.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(T.sh.coefficients[q],B);A++}else if(T.isDirectionalLight){let q=e.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Y=T.shadow,z=t.get(T);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,i.directionalShadow[h]=z,i.directionalShadowMap[h]=$,i.directionalShadowMatrix[h]=T.shadow.matrix,S++}i.directional[h]=q,h++}else if(T.isSpotLight){let q=e.get(T);q.position.setFromMatrixPosition(T.matrixWorld),q.color.copy(k).multiplyScalar(B),q.distance=H,q.coneCos=Math.cos(T.angle),q.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),q.decay=T.decay,i.spot[y]=q;let Y=T.shadow;if(T.map&&(i.spotLightMap[C]=T.map,C++,Y.updateMatrices(T),T.castShadow&&I++),i.spotLightMatrix[y]=Y.matrix,T.castShadow){let z=t.get(T);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,i.spotShadow[y]=z,i.spotShadowMap[y]=$,x++}y++}else if(T.isRectAreaLight){let q=e.get(T);q.color.copy(k).multiplyScalar(B),q.halfWidth.set(T.width*.5,0,0),q.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=q,m++}else if(T.isPointLight){let q=e.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity),q.distance=T.distance,q.decay=T.decay,T.castShadow){let Y=T.shadow,z=t.get(T);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=T.shadow.matrix,b++}i.point[g]=q,g++}else if(T.isHemisphereLight){let q=e.get(T);q.skyColor.copy(T.color).multiplyScalar(B),q.groundColor.copy(T.groundColor).multiplyScalar(B),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==b||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+C-I,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=A,R.directionalLength=h,R.pointLength=g,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=b,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=A,i.version=d1++)}function c(l,u){let d=0,f=0,h=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let b=l[p];if(b.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(b.isSpotLight){let x=i.spot[h];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(b.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let x=i.hemi[y];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function rM(n){let e=new h1(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function p1(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new rM(n),e.set(r,[a])):s>=o.length?(a=new rM(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y1(n,e,t){let i=new oo,r=new Ge,s=new Ge,o=new It,a=new Cu({depthPacking:bx}),c=new Iu,l={},u=t.maxTextureSize,d={[Di]:$t,[$t]:Di,[fi]:fi},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new rn;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new _e(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cm;let p=this.type;this.render=function(I,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let E=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Li),k.buffers.depth.getReversed()?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let B=p!==di&&this.type===di,H=p===di&&this.type!==di;for(let $=0,q=I.length;$<q;$++){let Y=I[$],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let se=z.getFrameExtents();if(r.multiply(se),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,z.mapSize.y=s.y)),z.map===null||B===!0||H===!0){let Ee=this.type!==di?{minFilter:Un,magFilter:Un}:{};z.map!==null&&z.map.dispose(),z.map=new li(r.x,r.y,Ee),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let ue=z.getViewportCount();for(let Ee=0;Ee<ue;Ee++){let je=z.getViewport(Ee);o.set(s.x*je.x,s.y*je.y,s.x*je.z,s.y*je.w),k.viewport(o),z.updateMatrices(Y,Ee),i=z.getFrustum(),x(A,R,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===di&&S(z,R),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,T)};function S(I,A){let R=e.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new li(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(A,null,R,f,y,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(A,null,R,h,y,null)}function b(I,A,R,E){let M=null,T=R.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(T!==void 0)M=T;else if(M=R.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let k=M.uuid,B=A.uuid,H=l[k];H===void 0&&(H={},l[k]=H);let $=H[B];$===void 0&&($=M.clone(),H[B]=$,A.addEventListener("dispose",C)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,E===di?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=n.properties.get(M);k.light=R}return M}function x(I,A,R,E,M){if(I.visible===!1)return;if(I.layers.test(A.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===di)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,I.matrixWorld);let B=e.update(I),H=I.material;if(Array.isArray(H)){let $=B.groups;for(let q=0,Y=$.length;q<Y;q++){let z=$[q],se=H[z.materialIndex];if(se&&se.visible){let ue=b(I,se,E,M);I.onBeforeShadow(n,I,A,R,B,ue,z),n.renderBufferDirect(R,null,B,ue,I,z),I.onAfterShadow(n,I,A,R,B,ue,z)}}}else if(H.visible){let $=b(I,H,E,M);I.onBeforeShadow(n,I,A,R,B,$,null),n.renderBufferDirect(R,null,B,$,I,null),I.onAfterShadow(n,I,A,R,B,$,null)}}let k=I.children;for(let B=0,H=k.length;B<H;B++)x(k[B],A,R,E,M)}function C(I){I.target.removeEventListener("dispose",C);for(let R in l){let E=l[R],M=I.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var v1={[Vu]:Bu,[Hu]:Wu,[zu]:ju,[Zr]:Gu,[Bu]:Vu,[Wu]:Hu,[ju]:zu,[Gu]:Zr};function _1(n,e){function t(){let N=!1,ee=new It,ie=null,fe=new It(0,0,0,0);return{setMask:function(J){ie!==J&&!N&&(n.colorMask(J,J,J,J),ie=J)},setLocked:function(J){N=J},setClear:function(J,X,me,Ue,mt){mt===!0&&(J*=Ue,X*=Ue,me*=Ue),ee.set(J,X,me,Ue),fe.equals(ee)===!1&&(n.clearColor(J,X,me,Ue),fe.copy(ee))},reset:function(){N=!1,ie=null,fe.set(-1,0,0,0)}}}function i(){let N=!1,ee=!1,ie=null,fe=null,J=null;return{setReversed:function(X){if(ee!==X){let me=e.get("EXT_clip_control");X?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ee=X;let Ue=J;J=null,this.setClear(Ue)}},getReversed:function(){return ee},setTest:function(X){X?ne(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(X){ie!==X&&!N&&(n.depthMask(X),ie=X)},setFunc:function(X){if(ee&&(X=v1[X]),fe!==X){switch(X){case Vu:n.depthFunc(n.NEVER);break;case Bu:n.depthFunc(n.ALWAYS);break;case Hu:n.depthFunc(n.LESS);break;case Zr:n.depthFunc(n.LEQUAL);break;case zu:n.depthFunc(n.EQUAL);break;case Gu:n.depthFunc(n.GEQUAL);break;case Wu:n.depthFunc(n.GREATER);break;case ju:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=X}},setLocked:function(X){N=X},setClear:function(X){J!==X&&(ee&&(X=1-X),n.clearDepth(X),J=X)},reset:function(){N=!1,ie=null,fe=null,J=null,ee=!1}}}function r(){let N=!1,ee=null,ie=null,fe=null,J=null,X=null,me=null,Ue=null,mt=null;return{setTest:function(rt){N||(rt?ne(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(rt){ee!==rt&&!N&&(n.stencilMask(rt),ee=rt)},setFunc:function(rt,mi,Kn){(ie!==rt||fe!==mi||J!==Kn)&&(n.stencilFunc(rt,mi,Kn),ie=rt,fe=mi,J=Kn)},setOp:function(rt,mi,Kn){(X!==rt||me!==mi||Ue!==Kn)&&(n.stencilOp(rt,mi,Kn),X=rt,me=mi,Ue=Kn)},setLocked:function(rt){N=rt},setClear:function(rt){mt!==rt&&(n.clearStencil(rt),mt=rt)},reset:function(){N=!1,ee=null,ie=null,fe=null,J=null,X=null,me=null,Ue=null,mt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,S=null,b=null,x=null,C=null,I=null,A=new we(0,0,0),R=0,E=!1,M=null,T=null,k=null,B=null,H=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Y=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),q=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),q=Y>=2);let se=null,ue={},Ee=n.getParameter(n.SCISSOR_BOX),je=n.getParameter(n.VIEWPORT),_t=new It().fromArray(Ee),dt=new It().fromArray(je);function j(N,ee,ie,fe){let J=new Uint8Array(4),X=n.createTexture();n.bindTexture(N,X),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<ie;me++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(ee+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return X}let oe={};oe[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(Zr),nt(!1),Me(Tm),ne(n.CULL_FACE),pt(Li);function ne(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Ae(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function De(N,ee){return d[N]!==ee?(n.bindFramebuffer(N,ee),d[N]=ee,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ee),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function ke(N,ee){let ie=h,fe=!1;if(N){ie=f.get(ee),ie===void 0&&(ie=[],f.set(ee,ie));let J=N.textures;if(ie.length!==J.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let X=0,me=J.length;X<me;X++)ie[X]=n.COLOR_ATTACHMENT0+X;ie.length=J.length,fe=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,fe=!0);fe&&n.drawBuffers(ie)}function Rt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let Qe={[lr]:n.FUNC_ADD,[Y0]:n.FUNC_SUBTRACT,[Z0]:n.FUNC_REVERSE_SUBTRACT};Qe[J0]=n.MIN,Qe[K0]=n.MAX;let D={[Q0]:n.ZERO,[ex]:n.ONE,[tx]:n.SRC_COLOR,[hu]:n.SRC_ALPHA,[ax]:n.SRC_ALPHA_SATURATE,[sx]:n.DST_COLOR,[ix]:n.DST_ALPHA,[nx]:n.ONE_MINUS_SRC_COLOR,[pu]:n.ONE_MINUS_SRC_ALPHA,[ox]:n.ONE_MINUS_DST_COLOR,[rx]:n.ONE_MINUS_DST_ALPHA,[cx]:n.CONSTANT_COLOR,[lx]:n.ONE_MINUS_CONSTANT_COLOR,[ux]:n.CONSTANT_ALPHA,[dx]:n.ONE_MINUS_CONSTANT_ALPHA};function pt(N,ee,ie,fe,J,X,me,Ue,mt,rt){if(N===Li){y===!0&&(Ae(n.BLEND),y=!1);return}if(y===!1&&(ne(n.BLEND),y=!0),N!==X0){if(N!==m||rt!==E){if((p!==lr||x!==lr)&&(n.blendEquation(n.FUNC_ADD),p=lr,x=lr),rt)switch(N){case Yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Im:n.blendFunc(n.ONE,n.ONE);break;case Am:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Im:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Am:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,b=null,C=null,I=null,A.set(0,0,0),R=0,m=N,E=rt}return}J=J||ee,X=X||ie,me=me||fe,(ee!==p||J!==x)&&(n.blendEquationSeparate(Qe[ee],Qe[J]),p=ee,x=J),(ie!==S||fe!==b||X!==C||me!==I)&&(n.blendFuncSeparate(D[ie],D[fe],D[X],D[me]),S=ie,b=fe,C=X,I=me),(Ue.equals(A)===!1||mt!==R)&&(n.blendColor(Ue.r,Ue.g,Ue.b,mt),A.copy(Ue),R=mt),m=N,E=!1}function Te(N,ee){N.side===fi?Ae(n.CULL_FACE):ne(n.CULL_FACE);let ie=N.side===$t;ee&&(ie=!ie),nt(ie),N.blending===Yr&&N.transparent===!1?pt(Li):pt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let fe=N.stencilWrite;a.setTest(fe),fe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),he(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function Me(N){N!==$0?(ne(n.CULL_FACE),N!==T&&(N===Tm?n.cullFace(n.BACK):N===q0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),T=N}function xt(N){N!==k&&(q&&n.lineWidth(N),k=N)}function he(N,ee,ie){N?(ne(n.POLYGON_OFFSET_FILL),(B!==ee||H!==ie)&&(n.polygonOffset(ee,ie),B=ee,H=ie)):Ae(n.POLYGON_OFFSET_FILL)}function $e(N){N?ne(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function Bt(N){N===void 0&&(N=n.TEXTURE0+$-1),se!==N&&(n.activeTexture(N),se=N)}function Nt(N,ee,ie){ie===void 0&&(se===null?ie=n.TEXTURE0+$-1:ie=se);let fe=ue[ie];fe===void 0&&(fe={type:void 0,texture:void 0},ue[ie]=fe),(fe.type!==N||fe.texture!==ee)&&(se!==ie&&(n.activeTexture(ie),se=ie),n.bindTexture(N,ee||oe[N]),fe.type=N,fe.texture=ee)}function w(){let N=ue[se];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(N){_t.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),_t.copy(N))}function Ne(N){dt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),dt.copy(N))}function ve(N,ee){let ie=l.get(ee);ie===void 0&&(ie=new WeakMap,l.set(ee,ie));let fe=ie.get(N);fe===void 0&&(fe=n.getUniformBlockIndex(ee,N.name),ie.set(N,fe))}function ae(N,ee){let fe=l.get(ee).get(N);c.get(ee)!==fe&&(n.uniformBlockBinding(ee,fe,N.__bindingPointIndex),c.set(ee,fe))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,ue={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,S=null,b=null,x=null,C=null,I=null,A=new we(0,0,0),R=0,E=!1,M=null,T=null,k=null,B=null,H=null,_t.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:Ae,bindFramebuffer:De,drawBuffers:ke,useProgram:Rt,setBlending:pt,setMaterial:Te,setFlipSided:nt,setCullFace:Me,setLineWidth:xt,setPolygonOffset:he,setScissorTest:$e,activeTexture:Bt,bindTexture:Nt,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:ye,texImage3D:Q,updateUBOMapping:ve,uniformBlockBinding:ae,texStorage2D:te,texStorage3D:ge,texSubImage2D:W,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:xe,scissor:le,viewport:Ne,reset:He}}function x1(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return h?new OffscreenCanvas(w,v):Ia("canvas")}function y(w,v,F){let W=1,Z=Nt(w);if((Z.width>F||Z.height>F)&&(W=F/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let G=Math.floor(W*Z.width),xe=Math.floor(W*Z.height);d===void 0&&(d=g(G,xe));let te=v?g(G,xe):d;return te.width=G,te.height=xe,te.getContext("2d").drawImage(w,0,0,G,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+xe+")."),te}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,v,F,W,Z=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=v;if(v===n.RED&&(F===n.FLOAT&&(G=n.R32F),F===n.HALF_FLOAT&&(G=n.R16F),F===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.R8UI),F===n.UNSIGNED_SHORT&&(G=n.R16UI),F===n.UNSIGNED_INT&&(G=n.R32UI),F===n.BYTE&&(G=n.R8I),F===n.SHORT&&(G=n.R16I),F===n.INT&&(G=n.R32I)),v===n.RG&&(F===n.FLOAT&&(G=n.RG32F),F===n.HALF_FLOAT&&(G=n.RG16F),F===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RG8UI),F===n.UNSIGNED_SHORT&&(G=n.RG16UI),F===n.UNSIGNED_INT&&(G=n.RG32UI),F===n.BYTE&&(G=n.RG8I),F===n.SHORT&&(G=n.RG16I),F===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGB8UI),F===n.UNSIGNED_SHORT&&(G=n.RGB16UI),F===n.UNSIGNED_INT&&(G=n.RGB32UI),F===n.BYTE&&(G=n.RGB8I),F===n.SHORT&&(G=n.RGB16I),F===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),F===n.UNSIGNED_INT&&(G=n.RGBA32UI),F===n.BYTE&&(G=n.RGBA8I),F===n.SHORT&&(G=n.RGBA16I),F===n.INT&&(G=n.RGBA32I)),v===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),v===n.RGBA){let xe=Z?Ta:et.getTransfer(W);F===n.FLOAT&&(G=n.RGBA32F),F===n.HALF_FLOAT&&(G=n.RGBA16F),F===n.UNSIGNED_BYTE&&(G=xe===ct?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(w,v){let F;return w?v===null||v===mr||v===ho?F=n.DEPTH24_STENCIL8:v===hi?F=n.DEPTH32F_STENCIL8:v===uo&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mr||v===ho?F=n.DEPTH_COMPONENT24:v===hi?F=n.DEPTH_COMPONENT32F:v===uo&&(F=n.DEPTH_COMPONENT16),F}function C(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Un&&w.minFilter!==Xn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function I(w){let v=w.target;v.removeEventListener("dispose",I),R(v),v.isVideoTexture&&u.delete(v)}function A(w){let v=w.target;v.removeEventListener("dispose",A),M(v)}function R(w){let v=i.get(w);if(v.__webglInit===void 0)return;let F=w.source,W=f.get(F);if(W){let Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(w),Object.keys(W).length===0&&f.delete(F)}i.remove(w)}function E(w){let v=i.get(w);n.deleteTexture(v.__webglTexture);let F=w.source,W=f.get(F);delete W[v.__cacheKey],o.memory.textures--}function M(w){let v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=w.textures;for(let W=0,Z=F.length;W<Z;W++){let G=i.get(F[W]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(F[W])}i.remove(w)}let T=0;function k(){T=0}function B(){let w=T;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),T+=1,w}function H(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function $(w,v){let F=i.get(w);if(w.isVideoTexture&&$e(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(F,w,v);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function q(w,v){let F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){oe(F,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function Y(w,v){let F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){oe(F,w,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function z(w,v){let F=i.get(w);if(w.version>0&&F.__version!==w.version){ne(F,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}let se={[mu]:n.REPEAT,[cr]:n.CLAMP_TO_EDGE,[gu]:n.MIRRORED_REPEAT},ue={[Un]:n.NEAREST,[Mx]:n.NEAREST_MIPMAP_NEAREST,[ja]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[Yu]:n.LINEAR_MIPMAP_NEAREST,[pr]:n.LINEAR_MIPMAP_LINEAR},Ee={[wx]:n.NEVER,[Rx]:n.ALWAYS,[Tx]:n.LESS,[Bm]:n.LEQUAL,[Cx]:n.EQUAL,[Dx]:n.GEQUAL,[Ix]:n.GREATER,[Ax]:n.NOTEQUAL};function je(w,v){if(v.type===hi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Xn||v.magFilter===Yu||v.magFilter===ja||v.magFilter===pr||v.minFilter===Xn||v.minFilter===Yu||v.minFilter===ja||v.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,se[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,se[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,se[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Un||v.minFilter!==ja&&v.minFilter!==pr||v.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function _t(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",I));let W=v.source,Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));let G=H(v);if(G!==w.__cacheKey){Z[G]===void 0&&(Z[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[G].usedTimes++;let xe=Z[w.__cacheKey];xe!==void 0&&(Z[w.__cacheKey].usedTimes--,xe.usedTimes===0&&E(v)),w.__cacheKey=G,w.__webglTexture=Z[G].texture}return F}function dt(w,v,F){return Math.floor(Math.floor(w/F)/v)}function j(w,v,F,W){let G=w.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,W,v.data);else{G.sort((Q,le)=>Q.start-le.start);let xe=0;for(let Q=1;Q<G.length;Q++){let le=G[xe],Ne=G[Q],ve=le.start+le.count,ae=dt(Ne.start,v.width,4),He=dt(le.start,v.width,4);Ne.start<=ve+1&&ae===He&&dt(Ne.start+Ne.count-1,v.width,4)===ae?le.count=Math.max(le.count,Ne.start+Ne.count-le.start):(++xe,G[xe]=Ne)}G.length=xe+1;let te=n.getParameter(n.UNPACK_ROW_LENGTH),ge=n.getParameter(n.UNPACK_SKIP_PIXELS),ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Q=0,le=G.length;Q<le;Q++){let Ne=G[Q],ve=Math.floor(Ne.start/4),ae=Math.ceil(Ne.count/4),He=ve%v.width,N=Math.floor(ve/v.width),ee=ae,ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,He,N,ee,ie,F,W,v.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,te),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function oe(w,v,F){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);let Z=_t(w,v),G=v.source;t.bindTexture(W,w.__webglTexture,n.TEXTURE0+F);let xe=i.get(G);if(G.version!==xe.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);let te=et.getPrimaries(et.workingColorSpace),ge=v.colorSpace===ki?null:et.getPrimaries(v.colorSpace),ye=v.colorSpace===ki||te===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Q=y(v.image,!1,r.maxTextureSize);Q=Bt(v,Q);let le=s.convert(v.format,v.colorSpace),Ne=s.convert(v.type),ve=b(v.internalFormat,le,Ne,v.colorSpace,v.isVideoTexture);je(W,v);let ae,He=v.mipmaps,N=v.isVideoTexture!==!0,ee=xe.__version===void 0||Z===!0,ie=G.dataReady,fe=C(v,Q);if(v.isDepthTexture)ve=x(v.format===po,v.type),ee&&(N?t.texStorage2D(n.TEXTURE_2D,1,ve,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ve,Q.width,Q.height,0,le,Ne,null));else if(v.isDataTexture)if(He.length>0){N&&ee&&t.texStorage2D(n.TEXTURE_2D,fe,ve,He[0].width,He[0].height);for(let J=0,X=He.length;J<X;J++)ae=He[J],N?ie&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Ne,ae.data):t.texImage2D(n.TEXTURE_2D,J,ve,ae.width,ae.height,0,le,Ne,ae.data);v.generateMipmaps=!1}else N?(ee&&t.texStorage2D(n.TEXTURE_2D,fe,ve,Q.width,Q.height),ie&&j(v,Q,le,Ne)):t.texImage2D(n.TEXTURE_2D,0,ve,Q.width,Q.height,0,le,Ne,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){N&&ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,ve,He[0].width,He[0].height,Q.depth);for(let J=0,X=He.length;J<X;J++)if(ae=He[J],v.format!==Vn)if(le!==null)if(N){if(ie)if(v.layerUpdates.size>0){let me=$m(ae.width,ae.height,v.format,v.type);for(let Ue of v.layerUpdates){let mt=ae.data.subarray(Ue*me/ae.data.BYTES_PER_ELEMENT,(Ue+1)*me/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ue,ae.width,ae.height,1,le,mt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,Q.depth,le,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ve,ae.width,ae.height,Q.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,Q.depth,le,Ne,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ve,ae.width,ae.height,Q.depth,0,le,Ne,ae.data)}else{N&&ee&&t.texStorage2D(n.TEXTURE_2D,fe,ve,He[0].width,He[0].height);for(let J=0,X=He.length;J<X;J++)ae=He[J],v.format!==Vn?le!==null?N?ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ve,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ie&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Ne,ae.data):t.texImage2D(n.TEXTURE_2D,J,ve,ae.width,ae.height,0,le,Ne,ae.data)}else if(v.isDataArrayTexture)if(N){if(ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,ve,Q.width,Q.height,Q.depth),ie)if(v.layerUpdates.size>0){let J=$m(Q.width,Q.height,v.format,v.type);for(let X of v.layerUpdates){let me=Q.data.subarray(X*J/Q.data.BYTES_PER_ELEMENT,(X+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,Q.width,Q.height,1,le,Ne,me)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,Ne,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,Q.width,Q.height,Q.depth,0,le,Ne,Q.data);else if(v.isData3DTexture)N?(ee&&t.texStorage3D(n.TEXTURE_3D,fe,ve,Q.width,Q.height,Q.depth),ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,Ne,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ve,Q.width,Q.height,Q.depth,0,le,Ne,Q.data);else if(v.isFramebufferTexture){if(ee)if(N)t.texStorage2D(n.TEXTURE_2D,fe,ve,Q.width,Q.height);else{let J=Q.width,X=Q.height;for(let me=0;me<fe;me++)t.texImage2D(n.TEXTURE_2D,me,ve,J,X,0,le,Ne,null),J>>=1,X>>=1}}else if(He.length>0){if(N&&ee){let J=Nt(He[0]);t.texStorage2D(n.TEXTURE_2D,fe,ve,J.width,J.height)}for(let J=0,X=He.length;J<X;J++)ae=He[J],N?ie&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le,Ne,ae):t.texImage2D(n.TEXTURE_2D,J,ve,le,Ne,ae);v.generateMipmaps=!1}else if(N){if(ee){let J=Nt(Q);t.texStorage2D(n.TEXTURE_2D,fe,ve,J.width,J.height)}ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Ne,Q)}else t.texImage2D(n.TEXTURE_2D,0,ve,le,Ne,Q);m(v)&&p(W),xe.__version=G.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ne(w,v,F){if(v.image.length!==6)return;let W=_t(w,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);let G=i.get(Z);if(Z.version!==G.__version||W===!0){t.activeTexture(n.TEXTURE0+F);let xe=et.getPrimaries(et.workingColorSpace),te=v.colorSpace===ki?null:et.getPrimaries(v.colorSpace),ge=v.colorSpace===ki||xe===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let ye=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,le=[];for(let X=0;X<6;X++)!ye&&!Q?le[X]=y(v.image[X],!0,r.maxCubemapSize):le[X]=Q?v.image[X].image:v.image[X],le[X]=Bt(v,le[X]);let Ne=le[0],ve=s.convert(v.format,v.colorSpace),ae=s.convert(v.type),He=b(v.internalFormat,ve,ae,v.colorSpace),N=v.isVideoTexture!==!0,ee=G.__version===void 0||W===!0,ie=Z.dataReady,fe=C(v,Ne);je(n.TEXTURE_CUBE_MAP,v);let J;if(ye){N&&ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,He,Ne.width,Ne.height);for(let X=0;X<6;X++){J=le[X].mipmaps;for(let me=0;me<J.length;me++){let Ue=J[me];v.format!==Vn?ve!==null?N?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,0,0,Ue.width,Ue.height,ve,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,He,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,0,0,Ue.width,Ue.height,ve,ae,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,He,Ue.width,Ue.height,0,ve,ae,Ue.data)}}}else{if(J=v.mipmaps,N&&ee){J.length>0&&fe++;let X=Nt(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,He,X.width,X.height)}for(let X=0;X<6;X++)if(Q){N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,le[X].width,le[X].height,ve,ae,le[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,He,le[X].width,le[X].height,0,ve,ae,le[X].data);for(let me=0;me<J.length;me++){let mt=J[me].image[X].image;N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,0,0,mt.width,mt.height,ve,ae,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,He,mt.width,mt.height,0,ve,ae,mt.data)}}else{N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ve,ae,le[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,He,ve,ae,le[X]);for(let me=0;me<J.length;me++){let Ue=J[me];N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,0,0,ve,ae,Ue.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,He,ve,ae,Ue.image[X])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),G.__version=Z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ae(w,v,F,W,Z,G){let xe=s.convert(F.format,F.colorSpace),te=s.convert(F.type),ge=b(F.internalFormat,xe,te,F.colorSpace),ye=i.get(v),Q=i.get(F);if(Q.__renderTarget=v,!ye.__hasExternalTextures){let le=Math.max(1,v.width>>G),Ne=Math.max(1,v.height>>G);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,G,ge,le,Ne,v.depth,0,xe,te,null):t.texImage2D(Z,G,ge,le,Ne,0,xe,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),he(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,Q.__webglTexture,0,xt(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,Q.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(w,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){let W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,G=x(v.stencilBuffer,Z),xe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=xt(v);he(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,G,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,w)}else{let W=v.textures;for(let Z=0;Z<W.length;Z++){let G=W[Z],xe=s.convert(G.format,G.colorSpace),te=s.convert(G.type),ge=b(G.internalFormat,xe,te,G.colorSpace),ye=xt(v);F&&he(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ge,v.width,v.height):he(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ge,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ge,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);let Z=W.__webglTexture,G=xt(v);if(v.depthTexture.format===eo)he(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===po)he(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Rt(w){let v=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let W=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let W=w.texture.mipmaps;W&&W.length>0?ke(v.__webglFramebuffer[0],w):ke(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),De(v.__webglDepthbuffer[W],w,!1);else{let Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,G)}}else{let W=w.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),De(v.__webglDepthbuffer,w,!1);else{let Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(w,v,F){let W=i.get(w);v!==void 0&&Ae(W.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Rt(w)}function D(w){let v=w.texture,F=i.get(w),W=i.get(v);w.addEventListener("dispose",A);let Z=w.textures,G=w.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),G){F.__webglFramebuffer=[];for(let te=0;te<6;te++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[te]=[];for(let ge=0;ge<v.mipmaps.length;ge++)F.__webglFramebuffer[te][ge]=n.createFramebuffer()}else F.__webglFramebuffer[te]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let te=0;te<v.mipmaps.length;te++)F.__webglFramebuffer[te]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xe)for(let te=0,ge=Z.length;te<ge;te++){let ye=i.get(Z[te]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&he(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let te=0;te<Z.length;te++){let ge=Z[te];F.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[te]);let ye=s.convert(ge.format,ge.colorSpace),Q=s.convert(ge.type),le=b(ge.internalFormat,ye,Q,ge.colorSpace,w.isXRRenderTarget===!0),Ne=xt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,le,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,F.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),De(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),je(n.TEXTURE_CUBE_MAP,v);for(let te=0;te<6;te++)if(v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)Ae(F.__webglFramebuffer[te][ge],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge);else Ae(F.__webglFramebuffer[te],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let te=0,ge=Z.length;te<ge;te++){let ye=Z[te],Q=i.get(ye),le=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),je(le,ye),Ae(F.__webglFramebuffer,w,ye,n.COLOR_ATTACHMENT0+te,le,0),m(ye)&&p(le)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(te=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,W.__webglTexture),je(te,v),v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)Ae(F.__webglFramebuffer[ge],w,v,n.COLOR_ATTACHMENT0,te,ge);else Ae(F.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,te,0);m(v)&&p(te),t.unbindTexture()}w.depthBuffer&&Rt(w)}function pt(w){let v=w.textures;for(let F=0,W=v.length;F<W;F++){let Z=v[F];if(m(Z)){let G=S(w),xe=i.get(Z).__webglTexture;t.bindTexture(G,xe),p(G),t.unbindTexture()}}}let Te=[],nt=[];function Me(w){if(w.samples>0){if(he(w)===!1){let v=w.textures,F=w.width,W=w.height,Z=n.COLOR_BUFFER_BIT,G=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(w),te=v.length>1;if(te)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let ge=w.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);let Q=i.get(v[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,Z,n.NEAREST),c===!0&&(Te.length=0,nt.length=0,Te.push(n.COLOR_ATTACHMENT0+ye),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Te.push(G),nt.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);let Q=i.get(v[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function xt(w){return Math.min(r.maxSamples,w.samples)}function he(w){let v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function $e(w){let v=o.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function Bt(w,v){let F=w.colorSpace,W=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Jr&&F!==ki&&(et.getTransfer(F)===ct?(W!==Vn||Z!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Nt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=Qe,this.setupRenderTarget=D,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=he}function M1(n,e){function t(i,r=ki){let s,o=et.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===Ju)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ku)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rm)return n.BYTE;if(i===Nm)return n.SHORT;if(i===uo)return n.UNSIGNED_SHORT;if(i===Zu)return n.INT;if(i===mr)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===fo)return n.HALF_FLOAT;if(i===Om)return n.ALPHA;if(i===Lm)return n.RGB;if(i===Vn)return n.RGBA;if(i===eo)return n.DEPTH_COMPONENT;if(i===po)return n.DEPTH_STENCIL;if(i===Fm)return n.RED;if(i===Qu)return n.RED_INTEGER;if(i===km)return n.RG;if(i===ed)return n.RG_INTEGER;if(i===td)return n.RGBA_INTEGER;if(i===$a||i===qa||i===Xa||i===Ya)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$a)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$a)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nd||i===id||i===rd||i===sd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===id)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===od||i===ad||i===cd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===od||i===ad)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ld||i===ud||i===dd||i===fd||i===hd||i===pd||i===md||i===gd||i===yd||i===vd||i===_d||i===xd||i===Md||i===Ed)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ld)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ud)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===md)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_d)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Md)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ed)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Za||i===bd||i===Sd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Za)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Um||i===wd||i===Td||i===Cd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Za)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Td)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Nd=class extends gr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}},E1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,sg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Nd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Zn({vertexShader:E1,fragmentShader:b1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _e(new ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},og=class extends Ri{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,y=new sg,m={},p=t.getContextAttributes(),S=null,b=null,x=[],C=[],I=new Ge,A=null,R=new Kt;R.viewport=new It;let E=new Kt;E.viewport=new It;let M=[R,E],T=new Fu,k=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let oe=x[j];return oe===void 0&&(oe=new ro,x[j]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(j){let oe=x[j];return oe===void 0&&(oe=new ro,x[j]=oe),oe.getGripSpace()},this.getHand=function(j){let oe=x[j];return oe===void 0&&(oe=new ro,x[j]=oe),oe.getHandSpace()};function H(j){let oe=C.indexOf(j.inputSource);if(oe===-1)return;let ne=x[oe];ne!==void 0&&(ne.update(j.inputSource,j.frame,l||o),ne.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let j=0;j<x.length;j++){let oe=C[j];oe!==null&&(C[j]=null,x[j].disconnect(oe))}k=null,B=null,y.reset();for(let j in m)delete m[j];e.setRenderTarget(S),h=null,f=null,d=null,r=null,b=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Ae=null,De=null;p.depth&&(De=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?po:eo,Ae=p.stencil?ho:mr);let ke={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};f=d.createProjectionLayer(ke),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new li(f.textureWidth,f.textureHeight,{format:Vn,type:Jn,depthTexture:new Fa(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new li(h.framebufferWidth,h.framebufferHeight,{format:Vn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(j){for(let oe=0;oe<j.removed.length;oe++){let ne=j.removed[oe],Ae=C.indexOf(ne);Ae>=0&&(C[Ae]=null,x[Ae].disconnect(ne))}for(let oe=0;oe<j.added.length;oe++){let ne=j.added[oe],Ae=C.indexOf(ne);if(Ae===-1){for(let ke=0;ke<x.length;ke++)if(ke>=C.length){C.push(ne),Ae=ke;break}else if(C[ke]===null){C[ke]=ne,Ae=ke;break}if(Ae===-1)break}let De=x[Ae];De&&De.connect(ne)}}let Y=new L,z=new L;function se(j,oe,ne){Y.setFromMatrixPosition(oe.matrixWorld),z.setFromMatrixPosition(ne.matrixWorld);let Ae=Y.distanceTo(z),De=oe.projectionMatrix.elements,ke=ne.projectionMatrix.elements,Rt=De[14]/(De[10]-1),Qe=De[14]/(De[10]+1),D=(De[9]+1)/De[5],pt=(De[9]-1)/De[5],Te=(De[8]-1)/De[0],nt=(ke[8]+1)/ke[0],Me=Rt*Te,xt=Rt*nt,he=Ae/(-Te+nt),$e=he*-Te;if(oe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX($e),j.translateZ(he),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),De[10]===-1)j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let Bt=Rt+he,Nt=Qe+he,w=Me-$e,v=xt+(Ae-$e),F=D*Qe/Nt*Bt,W=pt*Qe/Nt*Bt;j.projectionMatrix.makePerspective(w,v,F,W,Bt,Nt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ue(j,oe){oe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(oe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let oe=j.near,ne=j.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(ne=y.depthFar)),T.near=E.near=R.near=oe,T.far=E.far=R.far=ne,(k!==T.near||B!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),k=T.near,B=T.far),T.layers.mask=j.layers.mask|6,R.layers.mask=T.layers.mask&3,E.layers.mask=T.layers.mask&5;let Ae=j.parent,De=T.cameras;ue(T,Ae);for(let ke=0;ke<De.length;ke++)ue(De[ke],Ae);De.length===2?se(T,R,E):T.projectionMatrix.copy(R.projectionMatrix),Ee(j,T,Ae)};function Ee(j,oe,ne){ne===null?j.matrix.copy(oe.matrixWorld):(j.matrix.copy(ne.matrixWorld),j.matrix.invert(),j.matrix.multiply(oe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vu*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(T)},this.getCameraTexture=function(j){return m[j]};let je=null;function _t(j,oe){if(u=oe.getViewerPose(l||o),g=oe,u!==null){let ne=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Ae=!1;ne.length!==T.cameras.length&&(T.cameras.length=0,Ae=!0);for(let Qe=0;Qe<ne.length;Qe++){let D=ne[Qe],pt=null;if(h!==null)pt=h.getViewport(D);else{let nt=d.getViewSubImage(f,D);pt=nt.viewport,Qe===0&&(e.setRenderTargetTextures(b,nt.colorTexture,nt.depthStencilTexture),e.setRenderTarget(b))}let Te=M[Qe];Te===void 0&&(Te=new Kt,Te.layers.enable(Qe),Te.viewport=new It,M[Qe]=Te),Te.matrix.fromArray(D.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(D.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(pt.x,pt.y,pt.width,pt.height),Qe===0&&(T.matrix.copy(Te.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ae===!0&&T.cameras.push(Te)}let De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let Qe=d.getDepthInformation(ne[0]);Qe&&Qe.isValid&&Qe.texture&&y.init(Qe,r.renderState)}if(De&&De.includes("camera-access")&&(e.state.unbindTexture(),d))for(let Qe=0;Qe<ne.length;Qe++){let D=ne[Qe].camera;if(D){let pt=m[D];pt||(pt=new Nd,m[D]=pt);let Te=d.getCameraImage(D);pt.sourceTexture=Te}}}for(let ne=0;ne<x.length;ne++){let Ae=C[ne],De=x[ne];Ae!==null&&De!==void 0&&De.update(Ae,oe,l||o)}je&&je(j,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let dt=new sM;dt.setAnimationLoop(_t),this.setAnimationLoop=function(j){je=j},this.dispose=function(){}}},ss=new dr,S1=new Tt;function w1(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),b=S.envMap,x=S.envMapRotation;b&&(m.envMap.value=b,ss.copy(x),ss.x*=-1,ss.y*=-1,ss.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.envMapRotation.value.setFromMatrix4(S1.makeRotationFromEuler(ss)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function T1(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let x=b.program;i.uniformBlockBinding(S,x)}function l(S,b){let x=r[S.id];x===void 0&&(g(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",m));let C=b.program;i.updateUBOMapping(S,C);let I=e.render.frame;s[S.id]!==I&&(f(S),s[S.id]=I)}function u(S){let b=d();S.__bindingPointIndex=b;let x=n.createBuffer(),C=S.__size,I=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let b=r[S.id],x=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let I=0,A=x.length;I<A;I++){let R=Array.isArray(x[I])?x[I]:[x[I]];for(let E=0,M=R.length;E<M;E++){let T=R[E];if(h(T,I,E,C)===!0){let k=T.__offset,B=Array.isArray(T.value)?T.value:[T.value],H=0;for(let $=0;$<B.length;$++){let q=B[$],Y=y(q);typeof q=="number"||typeof q=="boolean"?(T.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,k+H,T.__data)):q.isMatrix3?(T.__data[0]=q.elements[0],T.__data[1]=q.elements[1],T.__data[2]=q.elements[2],T.__data[3]=0,T.__data[4]=q.elements[3],T.__data[5]=q.elements[4],T.__data[6]=q.elements[5],T.__data[7]=0,T.__data[8]=q.elements[6],T.__data[9]=q.elements[7],T.__data[10]=q.elements[8],T.__data[11]=0):(q.toArray(T.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,b,x,C){let I=S.value,A=b+"_"+x;if(C[A]===void 0)return typeof I=="number"||typeof I=="boolean"?C[A]=I:C[A]=I.clone(),!0;{let R=C[A];if(typeof I=="number"||typeof I=="boolean"){if(R!==I)return C[A]=I,!0}else if(R.equals(I)===!1)return R.copy(I),!0}return!1}function g(S){let b=S.uniforms,x=0,C=16;for(let A=0,R=b.length;A<R;A++){let E=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,T=E.length;M<T;M++){let k=E[M],B=Array.isArray(k.value)?k.value:[k.value];for(let H=0,$=B.length;H<$;H++){let q=B[H],Y=y(q),z=x%C,se=z%Y.boundary,ue=z+se;x+=se,ue!==0&&C-ue<Y.storage&&(x+=C-ue),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=Y.storage}}}let I=x%C;return I>0&&(x+=C-I),S.__size=x,S.__cache={},this}function y(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(let S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Pd=class{constructor(e={}){let{canvas:t=Nx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,C=!1;this._outputColorSpace=Mn;let I=0,A=0,R=null,E=-1,M=null,T=new It,k=new It,B=null,H=new we(0),$=0,q=t.width,Y=t.height,z=1,se=null,ue=null,Ee=new It(0,0,q,Y),je=new It(0,0,q,Y),_t=!1,dt=new oo,j=!1,oe=!1,ne=new Tt,Ae=new L,De=new It,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function Qe(){return R===null?z:1}let D=i;function pt(_,P){return t.getContext(_,P)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ku}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",J,!1),D===null){let P="webgl2";if(D=pt(P,_),D===null)throw pt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Te,nt,Me,xt,he,$e,Bt,Nt,w,v,F,W,Z,G,xe,te,ge,ye,Q,le,Ne,ve,ae,He;function N(){Te=new WD(D),Te.init(),ve=new M1(D,Te),nt=new kD(D,Te,e,ve),Me=new _1(D,Te),nt.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),xt=new qD(D),he=new o1,$e=new x1(D,Te,Me,he,nt,ve,xt),Bt=new VD(x),Nt=new GD(x),w=new QC(D),ae=new LD(D,w),v=new jD(D,w,xt,ae),F=new YD(D,v,w,xt),Q=new XD(D,nt,$e),te=new UD(he),W=new s1(x,Bt,Nt,Te,nt,ae,te),Z=new w1(x,he),G=new c1,xe=new p1(Te),ye=new OD(x,Bt,Nt,Me,F,h,c),ge=new y1(x,F,nt),He=new T1(D,xt,nt,Me),le=new FD(D,Te,xt),Ne=new $D(D,Te,xt),xt.programs=W.programs,x.capabilities=nt,x.extensions=Te,x.properties=he,x.renderLists=G,x.shadowMap=ge,x.state=Me,x.info=xt}N();let ee=new og(x,D);this.xr=ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let _=Te.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Te.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(_){_!==void 0&&(z=_,this.setSize(q,Y,!1))},this.getSize=function(_){return _.set(q,Y)},this.setSize=function(_,P,U=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=_,Y=P,t.width=Math.floor(_*z),t.height=Math.floor(P*z),U===!0&&(t.style.width=_+"px",t.style.height=P+"px"),this.setViewport(0,0,_,P)},this.getDrawingBufferSize=function(_){return _.set(q*z,Y*z).floor()},this.setDrawingBufferSize=function(_,P,U){q=_,Y=P,z=U,t.width=Math.floor(_*U),t.height=Math.floor(P*U),this.setViewport(0,0,_,P)},this.getCurrentViewport=function(_){return _.copy(T)},this.getViewport=function(_){return _.copy(Ee)},this.setViewport=function(_,P,U,V){_.isVector4?Ee.set(_.x,_.y,_.z,_.w):Ee.set(_,P,U,V),Me.viewport(T.copy(Ee).multiplyScalar(z).round())},this.getScissor=function(_){return _.copy(je)},this.setScissor=function(_,P,U,V){_.isVector4?je.set(_.x,_.y,_.z,_.w):je.set(_,P,U,V),Me.scissor(k.copy(je).multiplyScalar(z).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(_){Me.setScissorTest(_t=_)},this.setOpaqueSort=function(_){se=_},this.setTransparentSort=function(_){ue=_},this.getClearColor=function(_){return _.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(_=!0,P=!0,U=!0){let V=0;if(_){let O=!1;if(R!==null){let K=R.texture.format;O=K===td||K===ed||K===Qu}if(O){let K=R.texture.type,ce=K===Jn||K===mr||K===uo||K===ho||K===Ju||K===Ku,pe=ye.getClearColor(),de=ye.getClearAlpha(),Re=pe.r,Oe=pe.g,be=pe.b;ce?(g[0]=Re,g[1]=Oe,g[2]=be,g[3]=de,D.clearBufferuiv(D.COLOR,0,g)):(y[0]=Re,y[1]=Oe,y[2]=be,y[3]=de,D.clearBufferiv(D.COLOR,0,y))}else V|=D.COLOR_BUFFER_BIT}P&&(V|=D.DEPTH_BUFFER_BIT),U&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ye.dispose(),G.dispose(),xe.dispose(),he.dispose(),Bt.dispose(),Nt.dispose(),F.dispose(),ae.dispose(),He.dispose(),W.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Kn),ee.removeEventListener("sessionend",cg),yr.stop()};function ie(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let _=xt.autoReset,P=ge.enabled,U=ge.autoUpdate,V=ge.needsUpdate,O=ge.type;N(),xt.autoReset=_,ge.enabled=P,ge.autoUpdate=U,ge.needsUpdate=V,ge.type=O}function J(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function X(_){let P=_.target;P.removeEventListener("dispose",X),me(P)}function me(_){Ue(_),he.remove(_)}function Ue(_){let P=he.get(_).programs;P!==void 0&&(P.forEach(function(U){W.releaseProgram(U)}),_.isShaderMaterial&&W.releaseShaderCache(_))}this.renderBufferDirect=function(_,P,U,V,O,K){P===null&&(P=ke);let ce=O.isMesh&&O.matrixWorld.determinant()<0,pe=uM(_,P,U,V,O);Me.setMaterial(V,ce);let de=U.index,Re=1;if(V.wireframe===!0){if(de=v.getWireframeAttribute(U),de===void 0)return;Re=2}let Oe=U.drawRange,be=U.attributes.position,Je=Oe.start*Re,lt=(Oe.start+Oe.count)*Re;K!==null&&(Je=Math.max(Je,K.start*Re),lt=Math.min(lt,(K.start+K.count)*Re)),de!==null?(Je=Math.max(Je,0),lt=Math.min(lt,de.count)):be!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,be.count));let At=lt-Je;if(At<0||At===1/0)return;ae.setup(O,V,pe,U,de);let vt,ft=le;if(de!==null&&(vt=w.get(de),ft=Ne,ft.setIndex(vt)),O.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*Qe()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(O.isLine){let Ce=V.linewidth;Ce===void 0&&(Ce=1),Me.setLineWidth(Ce*Qe()),O.isLineSegments?ft.setMode(D.LINES):O.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else O.isPoints?ft.setMode(D.POINTS):O.isSprite&&ft.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))ft.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ce=O._multiDrawStarts,Mt=O._multiDrawCounts,tt=O._multiDrawCount,hn=de?w.get(de).bytesPerElement:1,cs=he.get(V).currentProgram.getUniforms();for(let pn=0;pn<tt;pn++)cs.setValue(D,"_gl_DrawID",pn),ft.render(Ce[pn]/hn,Mt[pn])}else if(O.isInstancedMesh)ft.renderInstances(Je,At,O.count);else if(U.isInstancedBufferGeometry){let Ce=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Mt=Math.min(U.instanceCount,Ce);ft.renderInstances(Je,At,Mt)}else ft.render(Je,At)};function mt(_,P,U){_.transparent===!0&&_.side===fi&&_.forceSinglePass===!1?(_.side=$t,_.needsUpdate=!0,ec(_,P,U),_.side=Di,_.needsUpdate=!0,ec(_,P,U),_.side=fi):ec(_,P,U)}this.compile=function(_,P,U=null){U===null&&(U=_),p=xe.get(U),p.init(P),b.push(p),U.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),_!==U&&_.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let V=new Set;return _.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let K=O.material;if(K)if(Array.isArray(K))for(let ce=0;ce<K.length;ce++){let pe=K[ce];mt(pe,U,O),V.add(pe)}else mt(K,U,O),V.add(K)}),p=b.pop(),V},this.compileAsync=function(_,P,U=null){let V=this.compile(_,P,U);return new Promise(O=>{function K(){if(V.forEach(function(ce){he.get(ce).currentProgram.isReady()&&V.delete(ce)}),V.size===0){O(_);return}setTimeout(K,10)}Te.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let rt=null;function mi(_){rt&&rt(_)}function Kn(){yr.stop()}function cg(){yr.start()}let yr=new sM;yr.setAnimationLoop(mi),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(_){rt=_,ee.setAnimationLoop(_),_===null?yr.stop():yr.start()},ee.addEventListener("sessionstart",Kn),ee.addEventListener("sessionend",cg),this.render=function(_,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(P),P=ee.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,P,R),p=xe.get(_,b.length),p.init(P),b.push(p),ne.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),dt.setFromProjectionMatrix(ne,qn,P.reversedDepth),oe=this.localClippingEnabled,j=te.init(this.clippingPlanes,oe),m=G.get(_,S.length),m.init(),S.push(m),ee.enabled===!0&&ee.isPresenting===!0){let K=x.xr.getDepthSensingMesh();K!==null&&Ud(K,P,-1/0,x.sortObjects)}Ud(_,P,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(se,ue),Rt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Rt&&ye.addToRenderList(m,_),this.info.render.frame++,j===!0&&te.beginShadows();let U=p.state.shadowsArray;ge.render(U,_,P),j===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,O=m.transmissive;if(p.setupLights(),P.isArrayCamera){let K=P.cameras;if(O.length>0)for(let ce=0,pe=K.length;ce<pe;ce++){let de=K[ce];ug(V,O,_,de)}Rt&&ye.render(_);for(let ce=0,pe=K.length;ce<pe;ce++){let de=K[ce];lg(m,_,de,de.viewport)}}else O.length>0&&ug(V,O,_,P),Rt&&ye.render(_),lg(m,_,P);R!==null&&A===0&&($e.updateMultisampleRenderTarget(R),$e.updateRenderTargetMipmap(R)),_.isScene===!0&&_.onAfterRender(x,_,P),ae.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],j===!0&&te.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ud(_,P,U,V){if(_.visible===!1)return;if(_.layers.test(P.layers)){if(_.isGroup)U=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(P);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||dt.intersectsSprite(_)){V&&De.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ne);let ce=F.update(_),pe=_.material;pe.visible&&m.push(_,ce,pe,U,De.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||dt.intersectsObject(_))){let ce=F.update(_),pe=_.material;if(V&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),De.copy(_.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),De.copy(ce.boundingSphere.center)),De.applyMatrix4(_.matrixWorld).applyMatrix4(ne)),Array.isArray(pe)){let de=ce.groups;for(let Re=0,Oe=de.length;Re<Oe;Re++){let be=de[Re],Je=pe[be.materialIndex];Je&&Je.visible&&m.push(_,ce,Je,U,De.z,be)}}else pe.visible&&m.push(_,ce,pe,U,De.z,null)}}let K=_.children;for(let ce=0,pe=K.length;ce<pe;ce++)Ud(K[ce],P,U,V)}function lg(_,P,U,V){let O=_.opaque,K=_.transmissive,ce=_.transparent;p.setupLightsView(U),j===!0&&te.setGlobalState(x.clippingPlanes,U),V&&Me.viewport(T.copy(V)),O.length>0&&Qa(O,P,U),K.length>0&&Qa(K,P,U),ce.length>0&&Qa(ce,P,U),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function ug(_,P,U,V){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new li(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?fo:Jn,minFilter:pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let K=p.state.transmissionRenderTarget[V.id],ce=V.viewport||T;K.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);let pe=x.getRenderTarget(),de=x.getActiveCubeFace(),Re=x.getActiveMipmapLevel();x.setRenderTarget(K),x.getClearColor(H),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Rt&&ye.render(U);let Oe=x.toneMapping;x.toneMapping=Fi;let be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),j===!0&&te.setGlobalState(x.clippingPlanes,V),Qa(_,U,V),$e.updateMultisampleRenderTarget(K),$e.updateRenderTargetMipmap(K),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let lt=0,At=P.length;lt<At;lt++){let vt=P[lt],ft=vt.object,Ce=vt.geometry,Mt=vt.material,tt=vt.group;if(Mt.side===fi&&ft.layers.test(V.layers)){let hn=Mt.side;Mt.side=$t,Mt.needsUpdate=!0,dg(ft,U,V,Ce,Mt,tt),Mt.side=hn,Mt.needsUpdate=!0,Je=!0}}Je===!0&&($e.updateMultisampleRenderTarget(K),$e.updateRenderTargetMipmap(K))}x.setRenderTarget(pe,de,Re),x.setClearColor(H,$),be!==void 0&&(V.viewport=be),x.toneMapping=Oe}function Qa(_,P,U){let V=P.isScene===!0?P.overrideMaterial:null;for(let O=0,K=_.length;O<K;O++){let ce=_[O],pe=ce.object,de=ce.geometry,Re=ce.group,Oe=ce.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),pe.layers.test(U.layers)&&dg(pe,P,U,de,Oe,Re)}}function dg(_,P,U,V,O,K){_.onBeforeRender(x,P,U,V,O,K),_.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),O.onBeforeRender(x,P,U,V,_,K),O.transparent===!0&&O.side===fi&&O.forceSinglePass===!1?(O.side=$t,O.needsUpdate=!0,x.renderBufferDirect(U,P,V,O,_,K),O.side=Di,O.needsUpdate=!0,x.renderBufferDirect(U,P,V,O,_,K),O.side=fi):x.renderBufferDirect(U,P,V,O,_,K),_.onAfterRender(x,P,U,V,O,K)}function ec(_,P,U){P.isScene!==!0&&(P=ke);let V=he.get(_),O=p.state.lights,K=p.state.shadowsArray,ce=O.state.version,pe=W.getParameters(_,O.state,K,P,U),de=W.getProgramCacheKey(pe),Re=V.programs;V.environment=_.isMeshStandardMaterial?P.environment:null,V.fog=P.fog,V.envMap=(_.isMeshStandardMaterial?Nt:Bt).get(_.envMap||V.environment),V.envMapRotation=V.environment!==null&&_.envMap===null?P.environmentRotation:_.envMapRotation,Re===void 0&&(_.addEventListener("dispose",X),Re=new Map,V.programs=Re);let Oe=Re.get(de);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===ce)return hg(_,pe),Oe}else pe.uniforms=W.getUniforms(_),_.onBeforeCompile(pe,x),Oe=W.acquireProgram(pe,de),Re.set(de,Oe),V.uniforms=pe.uniforms;let be=V.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(be.clippingPlanes=te.uniform),hg(_,pe),V.needsLights=fM(_),V.lightsStateVersion=ce,V.needsLights&&(be.ambientLightColor.value=O.state.ambient,be.lightProbe.value=O.state.probe,be.directionalLights.value=O.state.directional,be.directionalLightShadows.value=O.state.directionalShadow,be.spotLights.value=O.state.spot,be.spotLightShadows.value=O.state.spotShadow,be.rectAreaLights.value=O.state.rectArea,be.ltc_1.value=O.state.rectAreaLTC1,be.ltc_2.value=O.state.rectAreaLTC2,be.pointLights.value=O.state.point,be.pointLightShadows.value=O.state.pointShadow,be.hemisphereLights.value=O.state.hemi,be.directionalShadowMap.value=O.state.directionalShadowMap,be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,be.spotShadowMap.value=O.state.spotShadowMap,be.spotLightMatrix.value=O.state.spotLightMatrix,be.spotLightMap.value=O.state.spotLightMap,be.pointShadowMap.value=O.state.pointShadowMap,be.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function fg(_){if(_.uniformsList===null){let P=_.currentProgram.getUniforms();_.uniformsList=yo.seqWithValue(P.seq,_.uniforms)}return _.uniformsList}function hg(_,P){let U=he.get(_);U.outputColorSpace=P.outputColorSpace,U.batching=P.batching,U.batchingColor=P.batchingColor,U.instancing=P.instancing,U.instancingColor=P.instancingColor,U.instancingMorph=P.instancingMorph,U.skinning=P.skinning,U.morphTargets=P.morphTargets,U.morphNormals=P.morphNormals,U.morphColors=P.morphColors,U.morphTargetsCount=P.morphTargetsCount,U.numClippingPlanes=P.numClippingPlanes,U.numIntersection=P.numClipIntersection,U.vertexAlphas=P.vertexAlphas,U.vertexTangents=P.vertexTangents,U.toneMapping=P.toneMapping}function uM(_,P,U,V,O){P.isScene!==!0&&(P=ke),$e.resetTextureUnits();let K=P.fog,ce=V.isMeshStandardMaterial?P.environment:null,pe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Jr,de=(V.isMeshStandardMaterial?Nt:Bt).get(V.envMap||ce),Re=V.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Oe=!!U.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!U.morphAttributes.position,Je=!!U.morphAttributes.normal,lt=!!U.morphAttributes.color,At=Fi;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(At=x.toneMapping);let vt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ft=vt!==void 0?vt.length:0,Ce=he.get(V),Mt=p.state.lights;if(j===!0&&(oe===!0||_!==M)){let en=_===M&&V.id===E;te.setState(V,_,en)}let tt=!1;V.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Mt.state.version||Ce.outputColorSpace!==pe||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==de||V.fog===!0&&Ce.fog!==K||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==te.numPlanes||Ce.numIntersection!==te.numIntersection)||Ce.vertexAlphas!==Re||Ce.vertexTangents!==Oe||Ce.morphTargets!==be||Ce.morphNormals!==Je||Ce.morphColors!==lt||Ce.toneMapping!==At||Ce.morphTargetsCount!==ft)&&(tt=!0):(tt=!0,Ce.__version=V.version);let hn=Ce.currentProgram;tt===!0&&(hn=ec(V,P,O));let cs=!1,pn=!1,_o=!1,Et=hn.getUniforms(),wn=Ce.uniforms;if(Me.useProgram(hn.program)&&(cs=!0,pn=!0,_o=!0),V.id!==E&&(E=V.id,pn=!0),cs||M!==_){Me.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Et.setValue(D,"projectionMatrix",_.projectionMatrix),Et.setValue(D,"viewMatrix",_.matrixWorldInverse);let sn=Et.map.cameraPosition;sn!==void 0&&sn.setValue(D,Ae.setFromMatrixPosition(_.matrixWorld)),nt.logarithmicDepthBuffer&&Et.setValue(D,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Et.setValue(D,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,pn=!0,_o=!0)}if(O.isSkinnedMesh){Et.setOptional(D,O,"bindMatrix"),Et.setOptional(D,O,"bindMatrixInverse");let en=O.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Et.setValue(D,"boneTexture",en.boneTexture,$e))}O.isBatchedMesh&&(Et.setOptional(D,O,"batchingTexture"),Et.setValue(D,"batchingTexture",O._matricesTexture,$e),Et.setOptional(D,O,"batchingIdTexture"),Et.setValue(D,"batchingIdTexture",O._indirectTexture,$e),Et.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Et.setValue(D,"batchingColorTexture",O._colorsTexture,$e));let Tn=U.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Q.update(O,U,hn),(pn||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,Et.setValue(D,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(wn.envMap.value=de,wn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&P.environment!==null&&(wn.envMapIntensity.value=P.environmentIntensity),pn&&(Et.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&dM(wn,_o),K&&V.fog===!0&&Z.refreshFogUniforms(wn,K),Z.refreshMaterialUniforms(wn,V,z,Y,p.state.transmissionRenderTarget[_.id]),yo.upload(D,fg(Ce),wn,$e)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(yo.upload(D,fg(Ce),wn,$e),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Et.setValue(D,"center",O.center),Et.setValue(D,"modelViewMatrix",O.modelViewMatrix),Et.setValue(D,"normalMatrix",O.normalMatrix),Et.setValue(D,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let en=V.uniformsGroups;for(let sn=0,Vd=en.length;sn<Vd;sn++){let vr=en[sn];He.update(vr,hn),He.bind(vr,hn)}}return hn}function dM(_,P){_.ambientLightColor.needsUpdate=P,_.lightProbe.needsUpdate=P,_.directionalLights.needsUpdate=P,_.directionalLightShadows.needsUpdate=P,_.pointLights.needsUpdate=P,_.pointLightShadows.needsUpdate=P,_.spotLights.needsUpdate=P,_.spotLightShadows.needsUpdate=P,_.rectAreaLights.needsUpdate=P,_.hemisphereLights.needsUpdate=P}function fM(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(_,P,U){let V=he.get(_);V.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),he.get(_.texture).__webglTexture=P,he.get(_.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:U,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,P){let U=he.get(_);U.__webglFramebuffer=P,U.__useDefaultFramebuffer=P===void 0};let hM=D.createFramebuffer();this.setRenderTarget=function(_,P=0,U=0){R=_,I=P,A=U;let V=!0,O=null,K=!1,ce=!1;if(_){let de=he.get(_);if(de.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(de.__webglFramebuffer===void 0)$e.setupRenderTarget(_);else if(de.__hasExternalTextures)$e.rebindTextures(_,he.get(_.texture).__webglTexture,he.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let be=_.depthTexture;if(de.__boundDepthTexture!==be){if(be!==null&&he.has(be)&&(_.width!==be.image.width||_.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(_)}}let Re=_.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ce=!0);let Oe=he.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Oe[P])?O=Oe[P][U]:O=Oe[P],K=!0):_.samples>0&&$e.useMultisampledRTT(_)===!1?O=he.get(_).__webglMultisampledFramebuffer:Array.isArray(Oe)?O=Oe[U]:O=Oe,T.copy(_.viewport),k.copy(_.scissor),B=_.scissorTest}else T.copy(Ee).multiplyScalar(z).floor(),k.copy(je).multiplyScalar(z).floor(),B=_t;if(U!==0&&(O=hM),Me.bindFramebuffer(D.FRAMEBUFFER,O)&&V&&Me.drawBuffers(_,O),Me.viewport(T),Me.scissor(k),Me.setScissorTest(B),K){let de=he.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,de.__webglTexture,U)}else if(ce){let de=P;for(let Re=0;Re<_.textures.length;Re++){let Oe=he.get(_.textures[Re]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Re,Oe.__webglTexture,U,de)}}else if(_!==null&&U!==0){let de=he.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,U)}E=-1},this.readRenderTargetPixels=function(_,P,U,V,O,K,ce,pe=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=he.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de){Me.bindFramebuffer(D.FRAMEBUFFER,de);try{let Re=_.textures[pe],Oe=Re.format,be=Re.type;if(!nt.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=_.width-V&&U>=0&&U<=_.height-O&&(_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),D.readPixels(P,U,V,O,ve.convert(Oe),ve.convert(be),K))}finally{let Re=R!==null?he.get(R).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(_,P,U,V,O,K,ce,pe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=he.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de)if(P>=0&&P<=_.width-V&&U>=0&&U<=_.height-O){Me.bindFramebuffer(D.FRAMEBUFFER,de);let Re=_.textures[pe],Oe=Re.format,be=Re.type;if(!nt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Je),D.bufferData(D.PIXEL_PACK_BUFFER,K.byteLength,D.STREAM_READ),_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),D.readPixels(P,U,V,O,ve.convert(Oe),ve.convert(be),0);let lt=R!==null?he.get(R).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,lt);let At=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Px(D,At,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,K),D.deleteBuffer(Je),D.deleteSync(At),K}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,P=null,U=0){let V=Math.pow(2,-U),O=Math.floor(_.image.width*V),K=Math.floor(_.image.height*V),ce=P!==null?P.x:0,pe=P!==null?P.y:0;$e.setTexture2D(_,0),D.copyTexSubImage2D(D.TEXTURE_2D,U,0,0,ce,pe,O,K),Me.unbindTexture()};let pM=D.createFramebuffer(),mM=D.createFramebuffer();this.copyTextureToTexture=function(_,P,U=null,V=null,O=0,K=null){K===null&&(O!==0?(Kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),K=O,O=0):K=0);let ce,pe,de,Re,Oe,be,Je,lt,At,vt=_.isCompressedTexture?_.mipmaps[K]:_.image;if(U!==null)ce=U.max.x-U.min.x,pe=U.max.y-U.min.y,de=U.isBox3?U.max.z-U.min.z:1,Re=U.min.x,Oe=U.min.y,be=U.isBox3?U.min.z:0;else{let Tn=Math.pow(2,-O);ce=Math.floor(vt.width*Tn),pe=Math.floor(vt.height*Tn),_.isDataArrayTexture?de=vt.depth:_.isData3DTexture?de=Math.floor(vt.depth*Tn):de=1,Re=0,Oe=0,be=0}V!==null?(Je=V.x,lt=V.y,At=V.z):(Je=0,lt=0,At=0);let ft=ve.convert(P.format),Ce=ve.convert(P.type),Mt;P.isData3DTexture?($e.setTexture3D(P,0),Mt=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?($e.setTexture2DArray(P,0),Mt=D.TEXTURE_2D_ARRAY):($e.setTexture2D(P,0),Mt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);let tt=D.getParameter(D.UNPACK_ROW_LENGTH),hn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),cs=D.getParameter(D.UNPACK_SKIP_PIXELS),pn=D.getParameter(D.UNPACK_SKIP_ROWS),_o=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,vt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,be);let Et=_.isDataArrayTexture||_.isData3DTexture,wn=P.isDataArrayTexture||P.isData3DTexture;if(_.isDepthTexture){let Tn=he.get(_),en=he.get(P),sn=he.get(Tn.__renderTarget),Vd=he.get(en.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,sn.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Vd.__webglFramebuffer);for(let vr=0;vr<de;vr++)Et&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,he.get(_).__webglTexture,O,be+vr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,he.get(P).__webglTexture,K,At+vr)),D.blitFramebuffer(Re,Oe,ce,pe,Je,lt,ce,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||_.isRenderTargetTexture||he.has(_)){let Tn=he.get(_),en=he.get(P);Me.bindFramebuffer(D.READ_FRAMEBUFFER,pM),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,mM);for(let sn=0;sn<de;sn++)Et?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tn.__webglTexture,O,be+sn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tn.__webglTexture,O),wn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,en.__webglTexture,K,At+sn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,en.__webglTexture,K),O!==0?D.blitFramebuffer(Re,Oe,ce,pe,Je,lt,ce,pe,D.COLOR_BUFFER_BIT,D.NEAREST):wn?D.copyTexSubImage3D(Mt,K,Je,lt,At+sn,Re,Oe,ce,pe):D.copyTexSubImage2D(Mt,K,Je,lt,Re,Oe,ce,pe);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else wn?_.isDataTexture||_.isData3DTexture?D.texSubImage3D(Mt,K,Je,lt,At,ce,pe,de,ft,Ce,vt.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(Mt,K,Je,lt,At,ce,pe,de,ft,vt.data):D.texSubImage3D(Mt,K,Je,lt,At,ce,pe,de,ft,Ce,vt):_.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,K,Je,lt,ce,pe,ft,Ce,vt.data):_.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,K,Je,lt,vt.width,vt.height,ft,vt.data):D.texSubImage2D(D.TEXTURE_2D,K,Je,lt,ce,pe,ft,Ce,vt);D.pixelStorei(D.UNPACK_ROW_LENGTH,tt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,hn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,cs),D.pixelStorei(D.UNPACK_SKIP_ROWS,pn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_o),K===0&&P.generateMipmaps&&D.generateMipmap(Mt),Me.unbindTexture()},this.copyTextureToTexture3D=function(_,P,U=null,V=null,O=0){return Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,P,U,V,O)},this.initRenderTarget=function(_){he.get(_).__webglFramebuffer===void 0&&$e.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?$e.setTextureCube(_,0):_.isData3DTexture?$e.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?$e.setTexture2DArray(_,0):$e.setTexture2D(_,0),Me.unbindTexture()},this.resetState=function(){I=0,A=0,R=null,Me.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var Ld=class n{scene;camera;renderer;raycaster;mouse=new Ge;targets=[];targetCount=0;animationId=null;score=Lt(0);isGameActive=Lt(!1);timeRemaining=Lt(120);gameEnded=Lt(!1);gameMode=Lt("target-practice");warningMessage=Lt("");gameTimer=null;gameDuration=120;warningTimeout=null;escalationTimer=null;spawnTimer=null;banditSpawnRate=Lt(1);escalationInterval=30;difficulty=Lt("easy");difficultySpawnRates={easy:1,medium:2,hard:3};cameraRotation={x:0,y:0};sensitivity=.002;isPointerLocked=!1;isScoped=Lt(!1);baseFOV=75;scopedFOV=18.75;constructor(){this.raycaster=new Ga}initGame(e,t="target-practice",i="easy"){this.gameMode.set(t),this.difficulty.set(i),this.setupScene(),this.setupCamera(),this.setupRenderer(e),this.setupLighting(),this.setupGround(),this.setupSkybox(),this.setupEnvironment(),this.setupShooterFigure(),this.setupMouseControls(e),this.setupKeyboardControls(),this.startGameLoop(),this.spawnInitialTargets(),this.startGameTimer(),t==="survival"&&(this.banditSpawnRate.set(this.difficultySpawnRates[i]),this.startEscalationTimer(),this.startSpawnTimer()),this.isGameActive.set(!0)}setupScene(){this.scene=new Oa,this.scene.fog=new so(8900331,50,200)}setupCamera(){this.camera=new Kt(this.baseFOV,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,5,0)}setupRenderer(e){this.renderer=new Pd({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Uu,this.renderer.setClearColor(8900331,1),e.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>this.onWindowResize())}setupLighting(){let e=new za(4210752,.4);this.scene.add(e);let t=new lo(16775388,.8);t.position.set(30,80,40),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=.5,t.shadow.camera.far=200,t.shadow.camera.left=-100,t.shadow.camera.right=100,t.shadow.camera.top=100,t.shadow.camera.bottom=-100,this.scene.add(t);let i=new lo(8900331,.3);i.position.set(-20,40,-30),this.scene.add(i),this.scene.fog=new so(11065578,80,300)}setupGround(){let e=new ui(300,300,32,32),t=new Xe({color:new we(.2,.6,.2),transparent:!0,opacity:.95}),i=new _e(e,t);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,this.scene.add(i),this.createGrassPatches(),this.createScatteredLeaves()}createGrassPatches(){for(let e=0;e<80;e++){let t=new ui(5+Math.random()*8,5+Math.random()*8),i=Math.random()*.3,r=new Xe({color:new we(.15+i,.6+i,.15+i),transparent:!0,opacity:.8}),s=new _e(t,r);s.rotation.x=-Math.PI/2,s.position.set((Math.random()-.5)*180,.015,(Math.random()-.5)*180),s.rotation.z=Math.random()*Math.PI*2,this.scene.add(s)}this.createGrassBlades()}createGrassBlades(){for(let e=0;e<200;e++){let t=new ui(.2+Math.random()*.3,1+Math.random()*1.5),i=Math.random()*.2,r=new Xe({color:new we(.1+i,.5+i,.1+i),transparent:!0,opacity:.7}),s=new _e(t,r);s.rotation.x=-Math.PI/2+(Math.random()-.5)*.3,s.rotation.z=Math.random()*Math.PI*2,s.position.set((Math.random()-.5)*160,.02,(Math.random()-.5)*160),this.scene.add(s)}}createScatteredLeaves(){for(let e=0;e<100;e++){let t=new ui(.3+Math.random()*.4,.2+Math.random()*.3),i=[9127187,14329120,16747520,2263842,6636321],r=new Xe({color:i[Math.floor(Math.random()*i.length)],transparent:!0,opacity:.8}),s=new _e(t,r);s.rotation.x=-Math.PI/2+(Math.random()-.5)*.5,s.rotation.z=Math.random()*Math.PI*2,s.position.set((Math.random()-.5)*120,.02,(Math.random()-.5)*120),this.scene.add(s)}}setupSkybox(){let e=new fn(500,32,32),t=new Oi({color:8900331,side:$t}),i=new _e(e,t);this.scene.add(i)}setupEnvironment(){this.createClouds(),this.createTrees(),this.createBushes()}createClouds(){let e=new wt;for(let t=0;t<20;t++){let i=new wt;for(let r=0;r<5;r++){let s=new fn(8+Math.random()*4,8,8),o=new Oi({color:16777215,transparent:!0,opacity:.7}),a=new _e(s,o);a.position.x=(Math.random()-.5)*20,a.position.y=(Math.random()-.5)*5,a.position.z=(Math.random()-.5)*20,i.add(a)}i.position.x=(Math.random()-.5)*400,i.position.y=50+Math.random()*30,i.position.z=(Math.random()-.5)*400,e.add(i)}this.scene.add(e)}createTrees(){for(let t=0;t<35;t++){let i=Math.random(),r;i<.4?r=this.createRealisticPineTree():i<.7?r=this.createBranchedTree():r=this.createBirchTree();let s=Math.floor(t/12),o=t/12*Math.PI*2+(Math.random()-.5)*.8,c=50+s*25+Math.random()*20;r.position.x=Math.cos(o)*c,r.position.z=Math.sin(o)*c,r.position.y=0,r.rotation.y=Math.random()*Math.PI*2;let l=.6+Math.random()*.8;r.scale.set(l,l,l),this.scene.add(r)}for(let t=0;t<8;t++){let i=this.createBranchedTree(),r=Math.random()*Math.PI*2,s=25+Math.random()*25;i.position.x=Math.cos(r)*s,i.position.z=Math.sin(r)*s,i.position.y=0,i.rotation.y=Math.random()*Math.PI*2;let o=.4+Math.random()*.6;i.scale.set(o,o,o),this.scene.add(i)}}createRealisticPineTree(){let e=new wt,t=new bn(.3,1.2,12,8),i=new Xe({color:new we(.3,.2,.1)}),r=new _e(t,i);r.position.y=6,r.castShadow=!0,e.add(r);let s=7;for(let o=0;o<s;o++){let a=4+o*1.5,c=2.5-o*.2,l=new co(c,3,8),u=new we().setHSL(.33,.6,.15+o*.02),d=new Xe({color:u}),f=new _e(l,d);f.position.y=a,f.castShadow=!0,e.add(f);for(let h=0;h<6;h++){let g=h/6*Math.PI*2,y=new bn(.05,.1,1.5),m=new _e(y,i);m.position.set(Math.cos(g)*c*.7,a-.5,Math.sin(g)*c*.7),m.rotation.z=Math.cos(g)*.3,m.rotation.x=Math.sin(g)*.3,e.add(m)}}return e}createBranchedTree(){let e=new wt,t=new bn(.4,1,10,8),i=new Xe({color:new we(.35,.25,.15)}),r=new _e(t,i);r.position.y=5,r.castShadow=!0,e.add(r);let s=6;for(let a=0;a<s;a++){let c=this.createBranch(.8,4,3),l=a/s*Math.PI*2,u=7+Math.random()*3;c.position.set(Math.cos(l)*.5,u,Math.sin(l)*.5),c.rotation.z=Math.cos(l)*.4,c.rotation.x=Math.sin(l)*.4,e.add(c)}let o=12;for(let a=0;a<o;a++){let c=this.createFoliageCluster(),l=Math.random()*Math.PI*2,u=2+Math.random()*3,d=8+Math.random()*4;c.position.set(Math.cos(l)*u,d,Math.sin(l)*u),e.add(c)}return e}createBirchTree(){let e=new wt,t=new bn(.25,.4,14,8),i=new Xe({color:new we(.9,.9,.85)}),r=new _e(t,i);r.position.y=7,r.castShadow=!0,e.add(r);for(let o=0;o<4;o++){let a=new Ua(.25,.3,8),c=new Xe({color:new we(.1,.1,.1),transparent:!0,opacity:.8}),l=new _e(a,c);l.position.y=3+o*3,l.rotation.x=Math.PI/2,e.add(l)}let s=8;for(let o=0;o<s;o++){let a=o/s*Math.PI*2,c=10+Math.random()*4,l=new bn(.05,.08,3),u=new Xe({color:4865064}),d=new _e(l,u);d.position.set(Math.cos(a)*1.5,c,Math.sin(a)*1.5),d.rotation.z=Math.cos(a)*.6+.3,e.add(d);let f=new fn(.8,6,4),h=new Xe({color:new we(.4,.7,.3),transparent:!0,opacity:.9}),g=new _e(f,h);g.position.set(Math.cos(a)*2.5,c-1,Math.sin(a)*2.5),e.add(g)}return e}createBranch(e,t,i){let r=new wt;if(i<=0||t<1)return r;let s=new bn(e*.7,e,t,6),o=new Xe({color:new we(.3,.2,.1)}),a=new _e(s,o);if(a.position.y=t/2,a.castShadow=!0,r.add(a),i>1){let c=2+Math.floor(Math.random()*2);for(let l=0;l<c;l++){let u=this.createBranch(e*.6,t*.7,i-1),d=l/c*Math.PI*2+Math.random()*.5,f=t*.6+Math.random()*t*.3;u.position.set(Math.cos(d)*e,f,Math.sin(d)*e),u.rotation.z=(Math.random()-.5)*.8,u.rotation.x=(Math.random()-.5)*.6,r.add(u)}}return r}createFoliageCluster(){let e=new wt,t=3+Math.floor(Math.random()*4);for(let i=0;i<t;i++){let r=new fn(.6+Math.random()*.4,6,4),s=Math.random()*.1,o=new Xe({color:new we(.1+s,.5+s,.1),transparent:!0,opacity:.85}),a=new _e(r,o),c=Math.random()*Math.PI*2,l=Math.random()*.8;a.position.set(Math.cos(c)*l,Math.random()*.5,Math.sin(c)*l),a.castShadow=!0,e.add(a)}return e}createBushes(){for(let e=0;e<40;e++){let t=Math.random(),i;t<.6?i=this.createDenseBush():t<.8?i=this.createFern():i=this.createRock();let r=Math.random()*Math.PI*2,s=20+Math.random()*80;i.position.x=Math.cos(r)*s,i.position.z=Math.sin(r)*s,i.position.y=0,i.rotation.y=Math.random()*Math.PI*2;let o=.7+Math.random()*.6;i.scale.set(o,o,o),this.scene.add(i)}for(let e=0;e<8;e++){let t=this.createFallenLog(),i=Math.random()*Math.PI*2,r=30+Math.random()*50;t.position.x=Math.cos(i)*r,t.position.z=Math.sin(i)*r,t.position.y=.2,t.rotation.y=Math.random()*Math.PI*2,this.scene.add(t)}}createDenseBush(){let e=new wt,t=3+Math.floor(Math.random()*3);for(let i=0;i<t;i++){let r=new fn(1+Math.random()*.8,8,6),s=Math.random()*.3,o=new Xe({color:new we(.1+s,.4+s,.1)}),a=new _e(r,o),c=i/t*Math.PI*2,l=Math.random()*1.5;a.position.set(Math.cos(c)*l,1+Math.random()*.5,Math.sin(c)*l),a.castShadow=!0,e.add(a)}return e}createFern(){let e=new wt,t=6+Math.floor(Math.random()*4);for(let i=0;i<t;i++){let r=new co(.1,2.5,3),s=new Xe({color:new we(.2,.6,.1),transparent:!0,opacity:.8}),o=new _e(r,s),a=i/t*Math.PI*2;o.position.set(Math.cos(a)*.3,1.25,Math.sin(a)*.3),o.rotation.z=Math.cos(a)*.3,o.rotation.x=Math.sin(a)*.3,o.castShadow=!0,e.add(o)}return e}createRock(){let e=new ka(1+Math.random()*.8),t=new Xe({color:new we(.4,.4,.35)}),i=new _e(e,t);return i.position.y=.5,i.castShadow=!0,i.receiveShadow=!0,i.scale.set(.8+Math.random()*.4,.6+Math.random()*.8,.8+Math.random()*.4),i}createFallenLog(){let e=new wt,t=new bn(.3,.4,6,8),i=new Xe({color:new we(.35,.25,.15)}),r=new _e(t,i);r.rotation.z=Math.PI/2,r.castShadow=!0,r.receiveShadow=!0,e.add(r);for(let s=0;s<3;s++){let o=new fn(.2,6,4),a=new Xe({color:new we(.1,.3,.1)}),c=new _e(o,a);c.position.set((Math.random()-.5)*5,.3,(Math.random()-.5)*.8),c.scale.set(1,.5,1),e.add(c)}return e}setupShooterFigure(){if(this.gameMode()==="survival"){let e=this.createShooterFigure();e.position.set(0,0,0),this.scene.add(e)}}createShooterFigure(){let e=new wt,t=3100463,i=16767916,r=new kt(1,1.8,.5),s=new Xe({color:t}),o=new _e(r,s);o.position.y=2.2,o.castShadow=!0,e.add(o);let a=new fn(.4,16,16),c=new Xe({color:i}),l=new _e(a,c);l.position.y=3.5,l.castShadow=!0,e.add(l);let u=new fn(.45,16,16),d=new Xe({color:2263842}),f=new _e(u,d);f.position.y=3.5,f.castShadow=!0,e.add(f);let h=new kt(.25,1.3,.25),g=new Xe({color:t}),y=new _e(h,g);y.position.set(-.65,2.2,0),y.castShadow=!0,e.add(y);let m=new _e(h,g);m.position.set(.65,2.2,0),m.castShadow=!0,e.add(m);let p=new wt,S=new bn(.03,.03,1.2,8),b=new Xe({color:2894892}),x=new _e(S,b);x.rotation.z=Math.PI/2,x.position.set(.6,0,0),p.add(x);let C=new kt(.4,.08,.06),I=new Xe({color:9127187}),A=new _e(C,I);A.position.set(-.2,0,0),p.add(A),p.position.set(0,2.5,.4),e.add(p);let R=new kt(.3,1.6,.3),E=new Xe({color:t}),M=new _e(R,E);M.position.set(-.25,.8,0),M.castShadow=!0,e.add(M);let T=new _e(R,E);T.position.set(.25,.8,0),T.castShadow=!0,e.add(T);let k=new kt(.35,.15,.5),B=new Xe({color:0}),H=new _e(k,B);H.position.set(-.25,.075,.1),H.castShadow=!0,e.add(H);let $=new _e(k,B);return $.position.set(.25,.075,.1),$.castShadow=!0,e.add($),e}setupMouseControls(e){e.addEventListener("click",()=>{console.log("Click detected, requesting pointer lock"),e.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===e,console.log("Pointer lock changed:",this.isPointerLocked)}),document.addEventListener("mousemove",t=>{this.isPointerLocked&&(this.cameraRotation.y-=t.movementX*this.sensitivity,this.cameraRotation.x-=t.movementY*this.sensitivity,this.cameraRotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.cameraRotation.x)),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.cameraRotation.y,this.camera.rotation.x=this.cameraRotation.x)}),e.addEventListener("mousedown",t=>{t.preventDefault(),t.stopPropagation(),console.log("Container mouse event:",t.button,"Pointer locked:",this.isPointerLocked),t.button===0?(console.log("Left click detected - shooting"),this.isPointerLocked&&this.shoot()):t.button===2&&(console.log("Right click detected - toggling scope"),this.toggleScope())}),e.addEventListener("contextmenu",t=>{t.preventDefault()}),document.addEventListener("contextmenu",t=>{t.preventDefault()})}setupKeyboardControls(){document.addEventListener("keydown",e=>{this.gameMode()==="target-practice"&&this.isGameActive()&&(e.key==="r"||e.key==="R")&&(e.preventDefault(),this.refreshBanditPositions()),(e.key==="s"||e.key==="S")&&(e.preventDefault(),console.log("S key pressed - toggling scope"),this.toggleScope())})}refreshBanditPositions(){this.targets.forEach(e=>{if(!e.isHit){let t=20+Math.random()*40,i=(Math.random()-.5)*Math.PI,r=0,s=new L(Math.sin(i)*t,r,-Math.cos(i)*t);e.position.copy(s),e.mesh.position.copy(s)}}),this.warningMessage.set("Bandits Repositioned!"),this.warningTimeout&&clearTimeout(this.warningTimeout),this.warningTimeout=window.setTimeout(()=>{this.warningMessage.set("")},1500)}shoot(){console.log("Shooting!",this.targets.length,"targets available"),this.raycaster.setFromCamera(new Ge(0,0),this.camera);let e=this.raycaster.intersectObjects(this.targets.map(t=>t.mesh),!0);if(console.log("Intersects found:",e.length),this.createBulletTrail(),e.length>0){let t=e[0].point,i=e[0].object;console.log("Hit object:",i);let r=this.targets.find(s=>s.mesh===i||s.mesh.children.includes(i));console.log("Target found:",r?"yes":"no"),r&&!r.isHit&&(console.log("Hitting target!"),this.hitTarget(r,t))}}createBulletTrail(){let e=this.camera.position.clone(),t=new L;this.camera.getWorldDirection(t);let i=e.clone().add(t.multiplyScalar(100)),r=new rn().setFromPoints([e,i]),s=new ao({color:16776960,transparent:!0,opacity:.8}),o=new La(r,s);this.scene.add(o);let a=.8,c=()=>{if(a-=.1,s.opacity=a,a<=0){this.scene.remove(o);return}requestAnimationFrame(c)};c()}hitTarget(e,t){e.isHit=!0,this.score.update(i=>i+10),t&&this.createHitEffect(t),this.animateFall(e)}targetReachedPlayer(e){this.gameMode()==="survival"&&(this.score.update(t=>Math.max(0,t-50)),this.showWarning("BANDIT REACHED YOU! -50 POINTS"),this.removeTarget(e),this.spawnNewTarget())}showWarning(e){this.warningMessage.set(e),this.warningTimeout&&clearTimeout(this.warningTimeout),this.warningTimeout=window.setTimeout(()=>{this.warningMessage.set("")},3e3)}createHitEffect(e){let i=new wt;for(let s=0;s<20;s++){let o=new fn(.02,8,8),a=new Oi({color:16711680,transparent:!0,opacity:.8}),c=new _e(o,a),l=new L((Math.random()-.5)*2,Math.random(),(Math.random()-.5)*2).normalize();c.position.copy(e),c.userData={velocity:l.multiplyScalar(Math.random()*.5+.2),gravity:-.02,life:1},i.add(c)}this.scene.add(i);let r=()=>{let s=!0;if(i.children.forEach(o=>{let a=o.userData;a.life>0&&(s=!1,o.position.add(a.velocity),a.velocity.y+=a.gravity,a.life-=.02,o instanceof _e&&(o.material.opacity=a.life))}),s){this.scene.remove(i);return}requestAnimationFrame(r)};r()}animateFall(e){let i=Date.now(),r=e.mesh.rotation.clone(),s=e.mesh.position.clone(),o=Math.random()>.5?1:-1,a=()=>{let c=Date.now()-i,l=Math.min(c/2e3,1),u=1-Math.pow(1-l,3);e.mesh.rotation.x=r.x+Math.PI/2*u*o,e.mesh.position.z=s.z+1*u*o;let d=1-u*.3;e.mesh.scale.setScalar(d),l<1?requestAnimationFrame(a):this.slowDisappear(e)};a()}slowDisappear(e){let i=Date.now(),r=()=>{let s=Date.now()-i,o=Math.min(s/3e3,1),a=.7-o*.7;e.mesh.scale.setScalar(Math.max(0,a)),o<1?requestAnimationFrame(r):(this.removeTarget(e),this.spawnNewTarget())};r()}spawnInitialTargets(){if(this.gameMode()==="survival")this.spawnNewTarget();else for(let e=0;e<5;e++)this.spawnNewTarget()}spawnNewTarget(){let e=this.createHumanFigure();e.castShadow=!0;let t=this.gameMode(),i,r,s;if(t==="survival"){i=60+Math.random()*40;let o=(Math.random()-.5)*Math.PI,a=0;r=new L(Math.sin(o)*i,a,-Math.cos(o)*i),e.position.copy(r),this.scene.add(e);let l=new L(0,0,0).clone().sub(r).normalize(),u=.08+Math.random()*.05;s={id:`target-${this.targetCount++}`,mesh:e,position:r,isHit:!1,speed:u,direction:l,isMoving:!0}}else{i=20+Math.random()*40;let o=(Math.random()-.5)*Math.PI,a=0;r=new L(Math.sin(o)*i,a,-Math.cos(o)*i),e.position.copy(r),this.scene.add(e),s={id:`target-${this.targetCount++}`,mesh:e,position:r,isHit:!1,isMoving:!1}}this.targets.push(s),t==="target-practice"&&setTimeout(()=>{s.isHit||(this.removeTarget(s),this.spawnNewTarget())},15e3)}createHumanFigure(){let e=new wt,t=[6636321,3100463,9127187,5597999,7372944,6908265],i=t[Math.floor(Math.random()*t.length)],r=16767916,s=new kt(1.2,2,.6),o=new Xe({color:i}),a=new _e(s,o);a.position.y=2.5,a.castShadow=!0,e.add(a);let c=new fn(.5,16,16),l=new Xe({color:r}),u=new _e(c,l);u.position.y=4,u.castShadow=!0,e.add(u);let d=new kt(1.1,.2,.1),f=new Xe({color:0}),h=new _e(d,f);h.position.set(0,4.1,.45),h.castShadow=!0,e.add(h);let g=new kt(.3,1.5,.3),y=new Xe({color:r}),m=new _e(g,y);m.position.set(-.8,2.5,0),m.castShadow=!0,e.add(m);let p=new _e(g,y);p.position.set(.8,2.5,0),p.castShadow=!0,e.add(p);let S=new wt,b=new kt(.05,.8,.1),x=new Xe({color:12632256}),C=new _e(b,x);C.position.set(0,.4,0),S.add(C);let I=new kt(.08,.3,.08),A=new Xe({color:9127187}),R=new _e(I,A);R.position.set(0,-.15,0),S.add(R),S.position.set(.8,3.2,.2),S.rotation.z=-Math.PI/6,e.add(S);let E=new kt(.4,1.8,.4),M=new Xe({color:2899536}),T=new _e(E,M);T.position.set(-.3,.9,0),T.castShadow=!0,e.add(T);let k=new _e(E,M);k.position.set(.3,.9,0),k.castShadow=!0,e.add(k);let B=new kt(1.3,.15,.7),H=new Xe({color:6636321}),$=new _e(B,H);return $.position.set(0,1.7,0),$.castShadow=!0,e.add($),e.userData={animationPhase:Math.random()*Math.PI*2,animationSpeed:.02+Math.random()*.02},e}removeTarget(e){this.scene.remove(e.mesh),this.targets=this.targets.filter(t=>t.id!==e.id)}startGameLoop(){let e=()=>{this.animationId=requestAnimationFrame(e),this.targets.forEach(t=>{if(!t.isHit&&t.mesh.userData){let i=t.mesh.userData;if(i.animationPhase+=i.animationSpeed,t.mesh.rotation.y=Math.sin(i.animationPhase)*.1,t.mesh.children.length>1){let r=t.mesh.children[1];r.rotation.x=Math.sin(i.animationPhase*1.5)*.05}if(t.isMoving&&t.direction&&t.speed){let r=t.direction.clone().multiplyScalar(t.speed);t.mesh.position.add(r),t.position.copy(t.mesh.position);let s=new L(0,0,0);t.mesh.position.distanceTo(s)<4&&this.targetReachedPlayer(t)}}}),this.renderer.render(this.scene,this.camera)};e()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}startGameTimer(){this.timeRemaining.set(this.gameDuration),this.gameEnded.set(!1),this.gameTimer=window.setInterval(()=>{let e=this.timeRemaining();e<=0?this.endGame():this.timeRemaining.set(e-1)},1e3)}startEscalationTimer(){this.escalationTimer=window.setInterval(()=>{if(this.isGameActive()&&this.gameMode()==="survival"){let e=this.banditSpawnRate();this.banditSpawnRate.set(e*2),this.spawnEscalatedBandits(),console.log(`Escalation! New bandit spawn rate: ${this.banditSpawnRate()}`)}},this.escalationInterval*1e3)}startSpawnTimer(){let t=1e3/this.difficultySpawnRates[this.difficulty()];this.spawnTimer=window.setInterval(()=>{if(this.isGameActive()&&this.gameMode()==="survival"){let i=this.banditSpawnRate();this.targets.filter(s=>!s.isHit).length<i&&this.spawnNewTarget()}},t)}spawnEscalatedBandits(){let e=this.banditSpawnRate(),t=this.targets.filter(r=>!r.isHit).length,i=Math.max(0,e-t);for(let r=0;r<i;r++)this.spawnNewTarget()}endGame(){this.isGameActive.set(!1),this.gameEnded.set(!0),this.gameTimer&&(clearInterval(this.gameTimer),this.gameTimer=null),this.spawnTimer&&(clearInterval(this.spawnTimer),this.spawnTimer=null),this.escalationTimer&&(clearInterval(this.escalationTimer),this.escalationTimer=null),this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null),console.log("Game ended! Final score:",this.score())}stopGame(){this.isGameActive.set(!1),this.gameEnded.set(!1),this.gameTimer&&(clearInterval(this.gameTimer),this.gameTimer=null),this.warningTimeout&&(clearTimeout(this.warningTimeout),this.warningTimeout=null),this.spawnTimer&&(clearInterval(this.spawnTimer),this.spawnTimer=null),this.escalationTimer&&(clearInterval(this.escalationTimer),this.escalationTimer=null),this.animationId&&cancelAnimationFrame(this.animationId),this.targets.forEach(e=>{this.scene.remove(e.mesh)}),this.targets=[],this.score.set(0),this.timeRemaining.set(this.gameDuration),this.warningMessage.set("")}resetGame(){this.stopGame(),this.score.set(0),this.timeRemaining.set(120),this.warningMessage.set(""),this.gameMode()==="survival"?this.banditSpawnRate.set(this.difficultySpawnRates[this.difficulty()]):this.banditSpawnRate.set(1),this.spawnInitialTargets(),this.startGameLoop(),this.startGameTimer(),this.gameMode()==="survival"&&(this.startEscalationTimer(),this.startSpawnTimer()),this.isGameActive.set(!0)}completeReset(){this.stopGame(),this.score.set(0),this.timeRemaining.set(120),this.gameEnded.set(!1),this.isGameActive.set(!1),this.warningMessage.set(""),this.banditSpawnRate.set(1),this.isScoped.set(!1),this.camera&&(this.camera.fov=this.baseFOV,this.camera.updateProjectionMatrix()),this.targetCount=0,console.log("Complete game reset performed")}resetToHomeScreen(){this.completeReset(),this.gameMode.set("target-practice"),this.difficulty.set("easy")}goToHomeScreen(){this.resetToHomeScreen()}getFormattedTime(){let e=this.timeRemaining(),t=Math.floor(e/60),i=e%60;return`${t}:${i.toString().padStart(2,"0")}`}getCurrentSpawnRate(){return this.difficultySpawnRates[this.difficulty()]}toggleScope(){let e=!this.isScoped();this.isScoped.set(e);let t=e?this.scopedFOV:this.baseFOV;this.camera.fov=t,this.camera.updateProjectionMatrix(),console.log("Scope toggled:",e?"ON":"OFF")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})};var A1=["gameContainer"];function D1(n,e){if(n&1&&(On(0,"br"),Se(1,"span",47),Le(2),Ie(),On(3,"br"),Se(4,"span",47),Le(5),Ie()),n&2){let t=yp();bt(2),Fn("Spawn Rate: ",t.gameService.getCurrentSpawnRate(),"/sec"),bt(3),Fn("Bandits: x",t.gameService.banditSpawnRate())}}function R1(n,e){n&1&&(Se(0,"p"),Le(1,"\u2022 Press 'R' to refresh bandit positions"),Ie())}var Fd=class n{constructor(e){this.gameService=e}gameContainer;isInstructionsHidden=Lt(!1);selectedDifficulty="easy";ngOnInit(){this.gameService.difficulty.set(this.selectedDifficulty)}ngOnDestroy(){this.gameService.stopGame()}startTargetPractice(){this.gameService.completeReset(),this.gameService.initGame(this.gameContainer.nativeElement,"target-practice")}startSurvival(){this.gameService.completeReset(),this.gameService.initGame(this.gameContainer.nativeElement,"survival",this.selectedDifficulty)}hideInstructions(){this.isInstructionsHidden.set(!0)}restartGame(){this.completeReset()}completeReset(){this.selectedDifficulty="easy",this.isInstructionsHidden.set(!1),this.gameService.resetToHomeScreen(),this.gameService.difficulty.set(this.selectedDifficulty)}goHome(){this.completeReset()}getAccuracyText(){let e=this.gameService.score();if(e===0)return"No hits";let t=Math.max(e/10,1);return`${Math.min(e/10/t*100,100).toFixed(0)}%`}getGameModeText(){return this.gameService.gameMode()==="target-practice"?"Target Practice":"Survival Mode"}onDifficultyChange(){this.gameService.difficulty.set(this.selectedDifficulty),console.log("Difficulty changed to:",this.selectedDifficulty)}getDifficultyText(){switch(this.selectedDifficulty){case"easy":return"Easy";case"medium":return"Medium";case"hard":return"Hard";default:return"Easy"}}static \u0275fac=function(t){return new(t||n)(St(Ld))};static \u0275cmp=zr({type:n,selectors:[["app-game"]],viewQuery:function(t,i){if(t&1&&vp(A1,7),t&2){let r;_p(r=xp())&&(i.gameContainer=r.first)}},decls:122,vars:28,consts:[["gameContainer",""],[1,"game-container"],[1,"ui-overlay"],[1,"scope-overlay"],[1,"scope-circle"],[1,"scope-crosshair"],[1,"scope-line","horizontal"],[1,"scope-line","vertical"],[1,"scope-center-dot"],[1,"scope-markings"],[1,"scope-marking","top"],[1,"scope-marking","bottom"],[1,"scope-marking","left"],[1,"scope-marking","right"],[1,"scope-info"],[1,"scope-magnification"],[1,"score-display"],[1,"timer-display"],[1,"warning-display"],[1,"instructions"],[1,"instruction-box"],[1,"close-btn",3,"click"],[1,"start-screen"],[1,"start-content"],[1,"game-modes"],[1,"mode-card"],[1,"mode-features"],[1,"feature"],[1,"mode-btn","practice-btn",3,"click"],[1,"difficulty-selection"],[1,"radio-group-compact"],[1,"radio-option-compact"],["type","radio","name","difficulty","value","easy","checked","",3,"ngModelChange","change","ngModel"],[1,"radio-label-compact"],["type","radio","name","difficulty","value","medium",3,"ngModelChange","change","ngModel"],["type","radio","name","difficulty","value","hard",3,"ngModelChange","change","ngModel"],[1,"mode-btn","survival-btn",3,"click"],[1,"general-info"],[1,"end-game-screen"],[1,"end-game-content"],[1,"final-score"],[1,"score-number"],[1,"score-text"],[1,"game-stats"],[1,"end-game-buttons"],[1,"restart-btn",3,"click"],[1,"home-btn",3,"click"],[1,"bandit-rate"]],template:function(t,i){if(t&1){let r=gp();On(0,"div",1,0),Se(2,"div",2),On(3,"app-crosshair"),Se(4,"div",3)(5,"div",4)(6,"div",5),On(7,"div",6)(8,"div",7)(9,"div",8),Ie(),Se(10,"div",9),On(11,"div",10)(12,"div",11)(13,"div",12)(14,"div",13),Ie(),Se(15,"div",14)(16,"span",15),Le(17,"4x"),Ie()()()(),Se(18,"div",16),Le(19),On(20,"br"),Se(21,"small"),Le(22),Ie()(),Se(23,"div",17),Le(24),Dl(25,D1,6,2),Ie(),Se(26,"div",18),Le(27),Ie(),Se(28,"div",19)(29,"div",20)(30,"h3"),Le(31,"How to Play"),Ie(),Se(32,"p"),Le(33,"\u2022 Click to lock mouse cursor"),Ie(),Se(34,"p"),Le(35,"\u2022 Move mouse to look around"),Ie(),Se(36,"p"),Le(37,"\u2022 Left-click to shoot"),Ie(),Se(38,"p"),Le(39,"\u2022 Right-click to toggle 4X scope (or press 'S')"),Ie(),Se(40,"p"),Le(41,"\u2022 Hit the bandit targets to score points"),Ie(),Dl(42,R1,2,0,"p"),Se(43,"button",21),un("click",function(){return cn(r),ln(i.hideInstructions())}),Le(44,"Got it!"),Ie()()()(),Se(45,"div",22)(46,"div",23)(47,"h1"),Le(48,"\u{1F52B} FPS Shooting Range \u{1F52B}"),Ie(),Se(49,"p"),Le(50,"Lock, load, and test your marksmanship!"),Ie(),Se(51,"div",24)(52,"div",25)(53,"h3"),Le(54,"\u{1F3AF} Target Practice"),Ie(),Se(55,"p"),Le(56,"Static targets \u2022 Perfect for beginners"),Ie(),Se(57,"div",26)(58,"span",27),Le(59,"\u{1F4CD} Fixed positions"),Ie(),Se(60,"span",27),Le(61,"\u{1F504} Press 'R' to refresh"),Ie(),Se(62,"span",27),Le(63,"\u{1F3AF} Focus on accuracy"),Ie()(),Se(64,"button",28),un("click",function(){return cn(r),ln(i.startTargetPractice())}),Le(65,"\u{1F3AF} Start Practice"),Ie()(),Se(66,"div",25)(67,"h3"),Le(68,"\u2694\uFE0F Survival Mode"),Ie(),Se(69,"p"),Le(70,"Moving targets \u2022 High intensity challenge"),Ie(),Se(71,"div",26)(72,"span",27),Le(73,"\u{1F3C3} Moving bandits"),Ie(),Se(74,"span",27),Le(75,"\u{1F494} -50 points if they reach you"),Ie(),Se(76,"span",27),Le(77,"\u26A1 Escalating difficulty"),Ie()(),Se(78,"div",29)(79,"h4"),Le(80,"\u{1F39A}\uFE0F Difficulty"),Ie(),Se(81,"div",30)(82,"label",31)(83,"input",32),Fs("ngModelChange",function(o){return cn(r),sa(i.selectedDifficulty,o)||(i.selectedDifficulty=o),ln(o)}),un("change",function(){return cn(r),ln(i.onDifficultyChange())}),Ie(),Se(84,"span",33),Le(85,"Easy"),Ie()(),Se(86,"label",31)(87,"input",34),Fs("ngModelChange",function(o){return cn(r),sa(i.selectedDifficulty,o)||(i.selectedDifficulty=o),ln(o)}),un("change",function(){return cn(r),ln(i.onDifficultyChange())}),Ie(),Se(88,"span",33),Le(89,"Medium"),Ie()(),Se(90,"label",31)(91,"input",35),Fs("ngModelChange",function(o){return cn(r),sa(i.selectedDifficulty,o)||(i.selectedDifficulty=o),ln(o)}),un("change",function(){return cn(r),ln(i.onDifficultyChange())}),Ie(),Se(92,"span",33),Le(93,"Hard"),Ie()()()(),Se(94,"button",36),un("click",function(){return cn(r),ln(i.startSurvival())}),Le(95," \u{1F525} Start Survival "),Ie()()(),Se(96,"div",37)(97,"p"),Le(98,"\u{1F5B1}\uFE0F Mouse to look around \u2022 Left-click to shoot \u2022 Right-click for 4X scope \u2022 2 minutes to score!"),Ie()()()(),Se(99,"div",38)(100,"div",39)(101,"h1"),Le(102,"Game Over!"),Ie(),Se(103,"div",40)(104,"h2"),Le(105,"Your Final Score"),Ie(),Se(106,"div",41),Le(107),Ie(),Se(108,"p",42),Le(109,"Bandits Eliminated"),Ie()(),Se(110,"div",43)(111,"p"),Le(112),Ie(),Se(113,"p"),Le(114,"Time Survived: 2:00"),Ie(),Se(115,"p"),Le(116),Ie()(),Se(117,"div",44)(118,"button",45),un("click",function(){return cn(r),ln(i.restartGame())}),Le(119,"New Game"),Ie(),Se(120,"button",46),un("click",function(){return cn(r),ln(i.goHome())}),Le(121,"Main Menu"),Ie()()()()}t&2&&(bt(2),Ln("hidden",!i.gameService.isGameActive()),bt(),Ln("hidden",i.gameService.isScoped()),bt(),Ln("active",i.gameService.isScoped()),bt(15),Fn(" Score: ",i.gameService.score()," "),bt(3),Fn("Scope: ",i.gameService.isScoped()?"ON":"OFF"),bt(2),Fn(" Time: ",i.gameService.getFormattedTime()," "),bt(),Rl(i.gameService.gameMode()==="survival"?25:-1),bt(),Ln("show",i.gameService.warningMessage())("hidden",!i.gameService.warningMessage()),bt(),Fn(" ",i.gameService.warningMessage()," "),bt(),Ln("fade-out",i.isInstructionsHidden()),bt(14),Rl(i.gameService.gameMode()==="target-practice"?42:-1),bt(3),Ln("hidden",i.gameService.isGameActive()||i.gameService.gameEnded()),bt(38),Ls("ngModel",i.selectedDifficulty),bt(4),Ls("ngModel",i.selectedDifficulty),bt(4),Ls("ngModel",i.selectedDifficulty),bt(8),Ln("hidden",!i.gameService.gameEnded()),bt(8),Pl(i.gameService.score()),bt(5),Fn("Mode: ",i.getGameModeText()),bt(4),Fn("Accuracy: ",i.getAccuracyText()))},dependencies:[jl,E0,zl,Wp,x0,Gp],styles:[".game-container[_ngcontent-%COMP%]{width:100vw;height:100vh;overflow:hidden;cursor:none;background:#87ceeb}.ui-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:100;transition:opacity .3s ease}.ui-overlay.hidden[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.scope-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:transparent;display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;transition:all .2s ease;z-index:150;pointer-events:none}.scope-overlay.active[_ngcontent-%COMP%]{opacity:1;visibility:visible}.scope-circle[_ngcontent-%COMP%]{width:400px;height:400px;border:3px solid rgba(0,0,0,.8);border-radius:50%;background:transparent;position:relative;box-shadow:inset 0 0 30px #0000004d,0 0 0 9999px #0006}.scope-crosshair[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%}.scope-line[_ngcontent-%COMP%]{position:absolute;background:#000;opacity:.7;box-shadow:0 0 2px #ffffff80}.scope-line.horizontal[_ngcontent-%COMP%]{top:50%;left:20%;right:20%;height:2px;transform:translateY(-50%)}.scope-line.vertical[_ngcontent-%COMP%]{left:50%;top:20%;bottom:20%;width:2px;transform:translate(-50%)}.scope-center-dot[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:4px;height:4px;background:#000;border:1px solid #fff;border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 0 3px #fffc}.scope-markings[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.scope-marking[_ngcontent-%COMP%]{position:absolute;background:#000;opacity:.7;box-shadow:0 0 2px #ffffff80}.scope-marking.top[_ngcontent-%COMP%]{top:10px;left:50%;width:2px;height:20px;transform:translate(-50%)}.scope-marking.bottom[_ngcontent-%COMP%]{bottom:10px;left:50%;width:2px;height:20px;transform:translate(-50%)}.scope-marking.left[_ngcontent-%COMP%]{left:10px;top:50%;width:20px;height:2px;transform:translateY(-50%)}.scope-marking.right[_ngcontent-%COMP%]{right:10px;top:50%;width:20px;height:2px;transform:translateY(-50%)}.scope-info[_ngcontent-%COMP%]{position:absolute;bottom:20px;right:20px}.scope-magnification[_ngcontent-%COMP%]{color:#000;font-size:14px;font-weight:700;text-shadow:0 0 3px rgba(255,255,255,.8);background:#fff3;padding:2px 6px;border-radius:3px}.score-display[_ngcontent-%COMP%]{position:fixed;top:20px;left:20px;color:#fff;font-size:24px;font-weight:700;text-shadow:2px 2px 4px rgba(0,0,0,.7);font-family:Arial,sans-serif}.timer-display[_ngcontent-%COMP%]{position:fixed;top:20px;right:20px;color:#fff;font-size:24px;font-weight:700;text-shadow:2px 2px 4px rgba(0,0,0,.7);font-family:Arial,sans-serif;background:#0000004d;padding:10px 15px;border-radius:8px;border:2px solid rgba(255,255,255,.3)}.bandit-rate[_ngcontent-%COMP%]{color:#ff6b6b;font-size:18px;animation:_ngcontent-%COMP%_pulse 2s infinite}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.7}to{opacity:1}}.warning-display[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#e74c3cf2;color:#fff;font-size:32px;font-weight:700;padding:20px 40px;border-radius:10px;border:3px solid #c0392b;text-align:center;z-index:2000;font-family:Arial,sans-serif;text-shadow:2px 2px 4px rgba(0,0,0,.8);box-shadow:0 8px 32px #e74c3c99;opacity:0;transition:opacity .3s ease;pointer-events:none}.warning-display.show[_ngcontent-%COMP%]{opacity:1;animation:_ngcontent-%COMP%_warningPulse .5s ease-in-out}.warning-display.hidden[_ngcontent-%COMP%]{opacity:0}@keyframes _ngcontent-%COMP%_warningPulse{0%{transform:translate(-50%,-50%) scale(.8)}50%{transform:translate(-50%,-50%) scale(1.1)}to{transform:translate(-50%,-50%) scale(1)}}.instructions[_ngcontent-%COMP%]{position:fixed;top:50%;right:20px;transform:translateY(-50%);background:#000c;color:#fff;padding:20px;border-radius:10px;max-width:300px;font-family:Arial,sans-serif;pointer-events:auto;transition:opacity .5s ease}.instructions.fade-out[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.instruction-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 15px;color:#4caf50}.instruction-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0;font-size:14px}.close-btn[_ngcontent-%COMP%]{background:#4caf50;color:#fff;border:none;padding:8px 16px;border-radius:5px;cursor:pointer;margin-top:15px;font-size:14px;transition:background-color .3s ease}.close-btn[_ngcontent-%COMP%]:hover{background:#45a049}.start-screen[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;z-index:1000;transition:opacity .5s ease}.start-screen.hidden[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.start-content[_ngcontent-%COMP%]{text-align:center;color:#fff;font-family:Arial,sans-serif;max-width:750px;padding:30px 20px}.game-modes[_ngcontent-%COMP%]{display:flex;gap:20px;margin:25px 0;justify-content:center;flex-wrap:wrap}.mode-card[_ngcontent-%COMP%]{background:#ffffff1a;border:2px solid rgba(255,255,255,.2);border-radius:15px;padding:20px;width:280px;min-height:320px;display:flex;flex-direction:column;justify-content:space-between;transition:all .3s ease}.mode-card[_ngcontent-%COMP%]:hover{background:#ffffff26;border-color:#fff6;transform:translateY(-5px)}.mode-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;margin:0 0 15px;color:#f39c12}.mode-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin:0 0 15px;color:#ecf0f1}.mode-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{text-align:left;margin:15px 0;padding-left:20px}.mode-features[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;margin:15px 0}.feature[_ngcontent-%COMP%]{color:#bdc3c7;font-size:13px;text-align:left;padding:4px 0}.difficulty-selection[_ngcontent-%COMP%]{margin:15px 0;padding:12px 0;border-top:1px solid rgba(255,255,255,.2);border-bottom:1px solid rgba(255,255,255,.2)}.difficulty-selection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 10px;color:#f39c12;font-size:14px;text-align:center;font-weight:700}.radio-group-compact[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:4px}.radio-option-compact[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:8px 4px;transition:all .3s ease;border-radius:6px;flex:1}.radio-option-compact[_ngcontent-%COMP%]:hover{background:#ffffff1a}.radio-option-compact[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{margin-bottom:4px;accent-color:#e74c3c;cursor:pointer}.radio-label-compact[_ngcontent-%COMP%]{font-size:11px;color:#bdc3c7;cursor:pointer;text-align:center;line-height:1.2}.mode-btn[_ngcontent-%COMP%]{width:100%;padding:15px;font-size:16px;border:none;border-radius:8px;cursor:pointer;font-weight:700;text-transform:uppercase;letter-spacing:1px;transition:all .3s ease;margin-top:15px}.practice-btn[_ngcontent-%COMP%]{background:#27ae60;color:#fff}.practice-btn[_ngcontent-%COMP%]:hover{background:#2ecc71;transform:translateY(-2px);box-shadow:0 4px 12px #2ecc7166}.survival-btn[_ngcontent-%COMP%]{background:#e74c3c;color:#fff}.survival-btn[_ngcontent-%COMP%]:hover{background:#ec7063;transform:translateY(-2px);box-shadow:0 4px 12px #e74c3c66}.general-info[_ngcontent-%COMP%]{margin-top:20px;font-size:13px;color:#bdc3c7}.general-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}.start-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:42px;margin-bottom:15px;text-shadow:2px 2px 4px rgba(0,0,0,.5);line-height:1.2}.start-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;margin-bottom:20px;opacity:.9}.start-btn[_ngcontent-%COMP%]{background:#4caf50;color:#fff;border:none;padding:15px 40px;font-size:20px;border-radius:10px;cursor:pointer;transition:all .3s ease;text-transform:uppercase;font-weight:700;letter-spacing:1px}.start-btn[_ngcontent-%COMP%]:hover{background:#45a049;transform:translateY(-2px);box-shadow:0 4px 8px #0000004d}.game-info[_ngcontent-%COMP%]{margin-top:30px;font-size:16px;opacity:.8}.game-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0;font-size:16px}.end-game-screen[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,#2c3e50,#3498db);display:flex;align-items:center;justify-content:center;z-index:1000;transition:opacity .5s ease}.end-game-screen.hidden[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.end-game-content[_ngcontent-%COMP%]{text-align:center;color:#fff;font-family:Arial,sans-serif;max-width:600px;padding:40px;background:#0000004d;border-radius:20px;border:2px solid rgba(255,255,255,.2)}.end-game-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:48px;margin-bottom:30px;text-shadow:2px 2px 4px rgba(0,0,0,.5);color:#e74c3c}.final-score[_ngcontent-%COMP%]{margin:30px 0}.final-score[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;margin-bottom:15px;color:#f39c12}.score-number[_ngcontent-%COMP%]{font-size:72px;font-weight:700;margin:20px 0;color:#2ecc71;text-shadow:3px 3px 6px rgba(0,0,0,.5)}.score-text[_ngcontent-%COMP%]{font-size:18px;color:#bdc3c7;margin:0}.game-stats[_ngcontent-%COMP%]{margin:30px 0;font-size:16px;color:#ecf0f1}.game-stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0}.end-game-buttons[_ngcontent-%COMP%]{margin-top:40px}.restart-btn[_ngcontent-%COMP%], .home-btn[_ngcontent-%COMP%]{background:#27ae60;color:#fff;border:none;padding:15px 30px;font-size:18px;border-radius:10px;cursor:pointer;margin:0 10px;transition:all .3s ease;text-transform:uppercase;font-weight:700;letter-spacing:1px}.restart-btn[_ngcontent-%COMP%]:hover{background:#2ecc71;transform:translateY(-2px);box-shadow:0 4px 8px #0000004d}.home-btn[_ngcontent-%COMP%]{background:#3498db}.home-btn[_ngcontent-%COMP%]:hover{background:#5dade2;transform:translateY(-2px);box-shadow:0 4px 8px #0000004d}@media (max-width: 768px){.instructions[_ngcontent-%COMP%]{right:10px;left:10px;max-width:none}.score-display[_ngcontent-%COMP%]{font-size:20px;top:10px;left:10px}.timer-display[_ngcontent-%COMP%]{font-size:20px;top:10px;right:10px;padding:8px 12px}.start-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:36px}.start-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}.start-btn[_ngcontent-%COMP%]{padding:12px 30px;font-size:18px}}"]})};var kd=class n{title=Lt("shooting-game");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=zr({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){t&1&&On(0,"app-game")},dependencies:[Fd],encapsulation:2})};Fp(kd,i0).catch(n=>console.error(n));
