var me=e=>{throw TypeError(e)};var ge=(e,t,n)=>t.has(e)||me("Cannot "+n);var M=(e,t,n)=>(ge(e,t,"read from private field"),n?n.call(e):t.get(e)),F=(e,t,n)=>t.has(e)?me("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),B=(e,t,n,_)=>(ge(e,t,"write to private field"),_?_.call(e,n):t.set(e,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))_(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&_(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Y,p,Re,H,ye,We,oe,Fe,ue,ie,le,O={},Be=[],tt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ee=Array.isArray;function $(e,t){for(var n in t)e[n]=t[n];return e}function fe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function K(e,t,n){var _,r,o,l={};for(o in t)o=="key"?_=t[o]:o=="ref"?r=t[o]:l[o]=t[o];if(arguments.length>2&&(l.children=arguments.length>3?Y.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return j(e,l,_,r,null)}function j(e,t,n,_,r){var o={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Re,__i:-1,__u:0};return r==null&&p.vnode!=null&&p.vnode(o),o}function L(e){return e.children}function P(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?T(e):null}function qe(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return qe(e)}}function be(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!G.__r++||ye!==p.debounceRendering)&&((ye=p.debounceRendering)||We)(G)}function G(){var e,t,n,_,r,o,l,a;for(H.sort(oe);e=H.shift();)e.__d&&(t=H.length,_=void 0,o=(r=(n=e).__v).__e,l=[],a=[],n.__P&&((_=$({},r)).__v=r.__v+1,p.vnode&&p.vnode(_),pe(n.__P,_,r,n.__n,n.__P.namespaceURI,32&r.__u?[o]:null,l,o??T(r),!!(32&r.__u),a),_.__v=r.__v,_.__.__k[_.__i]=_,ze(l,_,a),_.__e!=o&&qe(_)),H.length>t&&H.sort(oe));G.__r=0}function Ve(e,t,n,_,r,o,l,a,s,c,d){var i,h,f,b,w,k,v=_&&_.__k||Be,m=t.length;for(s=nt(n,t,v,s),i=0;i<m;i++)(f=n.__k[i])!=null&&(h=f.__i===-1?O:v[f.__i]||O,f.__i=i,k=pe(e,f,h,r,o,l,a,s,c,d),b=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&de(h.ref,null,f),d.push(f.ref,f.__c||b,f)),w==null&&b!=null&&(w=b),4&f.__u||h.__k===f.__k?s=je(f,s,e):typeof f.type=="function"&&k!==void 0?s=k:b&&(s=b.nextSibling),f.__u&=-7);return n.__e=w,s}function nt(e,t,n,_){var r,o,l,a,s,c=t.length,d=n.length,i=d,h=0;for(e.__k=[],r=0;r<c;r++)(o=t[r])!=null&&typeof o!="boolean"&&typeof o!="function"?(a=r+h,(o=e.__k[r]=typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?j(null,o,null,null,null):ee(o)?j(L,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?j(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,l=null,(s=o.__i=_t(o,n,a,i))!==-1&&(i--,(l=n[s])&&(l.__u|=2)),l==null||l.__v===null?(s==-1&&h--,typeof o.type!="function"&&(o.__u|=4)):s!==a&&(s==a-1?h--:s==a+1?h++:(s>a?h--:h++,o.__u|=4))):o=e.__k[r]=null;if(i)for(r=0;r<d;r++)(l=n[r])!=null&&!(2&l.__u)&&(l.__e==_&&(_=T(l)),Je(l,l));return _}function je(e,t,n){var _,r;if(typeof e.type=="function"){for(_=e.__k,r=0;_&&r<_.length;r++)_[r]&&(_[r].__=e,t=je(_[r],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=T(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Z(e,t){return t=t||[],e==null||typeof e=="boolean"||(ee(e)?e.some(function(n){Z(n,t)}):t.push(e)),t}function _t(e,t,n,_){var r=e.key,o=e.type,l=n-1,a=n+1,s=t[n];if(s===null||s&&r==s.key&&o===s.type&&!(2&s.__u))return n;if((typeof o!="function"||o===L||r)&&_>(s!=null&&!(2&s.__u)?1:0))for(;l>=0||a<t.length;){if(l>=0){if((s=t[l])&&!(2&s.__u)&&r==s.key&&o===s.type)return l;l--}if(a<t.length){if((s=t[a])&&!(2&s.__u)&&r==s.key&&o===s.type)return a;a++}}return-1}function ke(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||tt.test(t)?n:n+"px"}function q(e,t,n,_,r){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||ke(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||ke(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(Fe,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?_?n.u=_.u:(n.u=ue,e.addEventListener(t,o?le:ie,o)):e.removeEventListener(t,o?le:ie,o);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function we(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ue++;else if(t.t<n.u)return;return n(p.event?p.event(t):t)}}}function pe(e,t,n,_,r,o,l,a,s,c){var d,i,h,f,b,w,k,v,m,I,N,R,U,ve,W,te,ne,C=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),o=[a=t.__e=n.__e]),(d=p.__b)&&d(t);e:if(typeof C=="function")try{if(v=t.props,m="prototype"in C&&C.prototype.render,I=(d=C.contextType)&&_[d.__c],N=d?I?I.props.value:d.__:_,n.__c?k=(i=t.__c=n.__c).__=i.__E:(m?t.__c=i=new C(v,N):(t.__c=i=new P(v,N),i.constructor=C,i.render=ot),I&&I.sub(i),i.props=v,i.state||(i.state={}),i.context=N,i.__n=_,h=i.__d=!0,i.__h=[],i._sb=[]),m&&i.__s==null&&(i.__s=i.state),m&&C.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=$({},i.__s)),$(i.__s,C.getDerivedStateFromProps(v,i.__s))),f=i.props,b=i.state,i.__v=t,h)m&&C.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),m&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(m&&C.getDerivedStateFromProps==null&&v!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(v,N),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(v,i.__s,N)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(i.props=v,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(A){A&&(A.__=t)}),R=0;R<i._sb.length;R++)i.__h.push(i._sb[R]);i._sb=[],i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(v,i.__s,N),m&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,b,w)})}if(i.context=N,i.props=v,i.__P=e,i.__e=!1,U=p.__r,ve=0,m){for(i.state=i.__s,i.__d=!1,U&&U(t),d=i.render(i.props,i.state,i.context),W=0;W<i._sb.length;W++)i.__h.push(i._sb[W]);i._sb=[]}else do i.__d=!1,U&&U(t),d=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++ve<25);i.state=i.__s,i.getChildContext!=null&&(_=$($({},_),i.getChildContext())),m&&!h&&i.getSnapshotBeforeUpdate!=null&&(w=i.getSnapshotBeforeUpdate(f,b)),a=Ve(e,ee(te=d!=null&&d.type===L&&d.key==null?d.props.children:d)?te:[te],t,n,_,r,o,l,a,s,c),i.base=t.__e,t.__u&=-161,i.__h.length&&l.push(i),k&&(i.__E=i.__=null)}catch(A){if(t.__v=null,s||o!=null)if(A.then){for(t.__u|=s?160:128;a&&a.nodeType===8&&a.nextSibling;)a=a.nextSibling;o[o.indexOf(a)]=null,t.__e=a}else for(ne=o.length;ne--;)fe(o[ne]);else t.__e=n.__e,t.__k=n.__k;p.__e(A,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):a=t.__e=rt(n.__e,t,n,_,r,o,l,s,c);return(d=p.diffed)&&d(t),128&t.__u?void 0:a}function ze(e,t,n){for(var _=0;_<n.length;_++)de(n[_],n[++_],n[++_]);p.__c&&p.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){p.__e(o,r.__v)}})}function rt(e,t,n,_,r,o,l,a,s){var c,d,i,h,f,b,w,k=n.props,v=t.props,m=t.type;if(m==="svg"?r="http://www.w3.org/2000/svg":m==="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),o!=null){for(c=0;c<o.length;c++)if((f=o[c])&&"setAttribute"in f==!!m&&(m?f.localName===m:f.nodeType===3)){e=f,o[c]=null;break}}if(e==null){if(m===null)return document.createTextNode(v);e=document.createElementNS(r,m,v.is&&v),a&&(p.__m&&p.__m(t,o),a=!1),o=null}if(m===null)k===v||a&&e.data===v||(e.data=v);else{if(o=o&&Y.call(e.childNodes),k=n.props||O,!a&&o!=null)for(k={},c=0;c<e.attributes.length;c++)k[(f=e.attributes[c]).name]=f.value;for(c in k)if(f=k[c],c!="children"){if(c=="dangerouslySetInnerHTML")i=f;else if(!(c in v)){if(c=="value"&&"defaultValue"in v||c=="checked"&&"defaultChecked"in v)continue;q(e,c,null,f,r)}}for(c in v)f=v[c],c=="children"?h=f:c=="dangerouslySetInnerHTML"?d=f:c=="value"?b=f:c=="checked"?w=f:a&&typeof f!="function"||k[c]===f||q(e,c,f,k[c],r);if(d)a||i&&(d.__html===i.__html||d.__html===e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(i&&(e.innerHTML=""),Ve(e,ee(h)?h:[h],t,n,_,m==="foreignObject"?"http://www.w3.org/1999/xhtml":r,o,l,o?o[0]:n.__k&&T(n,0),a,s),o!=null)for(c=o.length;c--;)fe(o[c]);a||(c="value",m==="progress"&&b==null?e.removeAttribute("value"):b!==void 0&&(b!==e[c]||m==="progress"&&!b||m==="option"&&b!==k[c])&&q(e,c,b,k[c],r),c="checked",w!==void 0&&w!==e[c]&&q(e,c,w,k[c],r))}return e}function de(e,t,n){try{if(typeof e=="function"){var _=typeof e.__u=="function";_&&e.__u(),_&&t==null||(e.__u=e(t))}else e.current=t}catch(r){p.__e(r,n)}}function Je(e,t,n){var _,r;if(p.unmount&&p.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||de(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){p.__e(o,t)}_.base=_.__P=null}if(_=e.__k)for(r=0;r<_.length;r++)_[r]&&Je(_[r],t,n||typeof e.type!="function");n||fe(e.__e),e.__c=e.__=e.__e=void 0}function ot(e,t,n){return this.constructor(e,n)}function it(e,t,n){var _,r,o,l;t===document&&(t=document.documentElement),p.__&&p.__(e,t),r=(_=typeof n=="function")?null:t.__k,o=[],l=[],pe(t,e=(!_&&n||t).__k=K(L,null,[e]),r||O,O,t.namespaceURI,!_&&n?[n]:r?null:t.firstChild?Y.call(t.childNodes):null,o,!_&&n?n:r?r.__e:t.firstChild,_,l),ze(o,e,l)}Y=Be.slice,p={__e:function(e,t,n,_){for(var r,o,l;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),l=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,_||{}),l=r.__d),l)return r.__E=r}catch(a){e=a}throw e}},Re=0,P.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},n),this.props)),e&&$(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),be(this))},P.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),be(this))},P.prototype.render=L,H=[],We=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,oe=function(e,t){return e.__v.__b-t.__v.__b},G.__r=0,Fe=/(PointerCapture)$|Capture$/i,ue=0,ie=we(!1),le=we(!0);var lt=0;function u(e,t,n,_,r,o){t||(t={});var l,a,s=t;"ref"in t&&(l=t.ref,delete t.ref);var c={type:e,props:s,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--lt,__i:-1,__u:0,__source:r,__self:o};if(typeof e=="function"&&(l=e.defaultProps))for(a in l)s[a]===void 0&&(s[a]=l[a]);return p.vnode&&p.vnode(c),c}var Q,g,_e,Ce,se=0,Ke=[],y=p,Se=y.__b,Pe=y.__r,Ne=y.diffed,xe=y.__c,$e=y.unmount,Ee=y.__;function Ge(e,t){y.__h&&y.__h(g,e,se||t),se=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function E(e){return se=1,st(Ze,e)}function st(e,t,n){var _=Ge(Q++,2);if(_.t=e,!_.__c&&(_.__=[n?n(t):Ze(void 0,t),function(a){var s=_.__N?_.__N[0]:_.__[0],c=_.t(s,a);s!==c&&(_.__N=[c,_.__[1]],_.__c.setState({}))}],_.__c=g,!g.u)){var r=function(a,s,c){if(!_.__c.__H)return!0;var d=_.__c.__H.__.filter(function(h){return!!h.__c});if(d.every(function(h){return!h.__N}))return!o||o.call(this,a,s,c);var i=_.__c.props!==a;return d.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(i=!0)}}),o&&o.call(this,a,s,c)||i};g.u=!0;var o=g.shouldComponentUpdate,l=g.componentWillUpdate;g.componentWillUpdate=function(a,s,c){if(this.__e){var d=o;o=void 0,r(a,s,c),o=d}l&&l.call(this,a,s,c)},g.shouldComponentUpdate=r}return _.__N||_.__}function at(e,t){var n=Ge(Q++,3);!y.__s&&ft(n.__H,t)&&(n.__=e,n.i=t,g.__H.__h.push(n))}function ct(){for(var e;e=Ke.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(z),e.__H.__h.forEach(ae),e.__H.__h=[]}catch(t){e.__H.__h=[],y.__e(t,e.__v)}}y.__b=function(e){g=null,Se&&Se(e)},y.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ee&&Ee(e,t)},y.__r=function(e){Pe&&Pe(e),Q=0;var t=(g=e.__c).__H;t&&(_e===g?(t.__h=[],g.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(z),t.__h.forEach(ae),t.__h=[],Q=0)),_e=g},y.diffed=function(e){Ne&&Ne(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ke.push(t)!==1&&Ce===y.requestAnimationFrame||((Ce=y.requestAnimationFrame)||ut)(ct)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),_e=g=null},y.__c=function(e,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(_){return!_.__||ae(_)})}catch(_){t.some(function(r){r.__h&&(r.__h=[])}),t=[],y.__e(_,n.__v)}}),xe&&xe(e,t)},y.unmount=function(e){$e&&$e(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{z(_)}catch(r){t=r}}),n.__H=void 0,t&&y.__e(t,n.__v))};var Le=typeof requestAnimationFrame=="function";function ut(e){var t,n=function(){clearTimeout(_),Le&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);Le&&(t=requestAnimationFrame(n))}function z(e){var t=g,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),g=t}function ae(e){var t=g;e.__c=e.__(),g=t}function ft(e,t){return!e||e.length!==t.length||t.some(function(n,_){return n!==e[_]})}function Ze(e,t){return typeof t=="function"?t(e):t}function J({value:e,onChange:t,type:n,placeholder:_,onEnter:r,autofocus:o}){return u("div",{class:"TextInput",children:[u("input",{type:n,value:e,onInput:l=>t(l.currentTarget.value),autofocus:o,onKeyDown:r?l=>{l.key==="Enter"&&r()}:void 0}),u("label",{class:e?"subsided":void 0,children:_})]})}var D,x;class pt{constructor(){F(this,D,new WebSocket("wss://kliensoldali.azurewebsites.net/"));F(this,x,[]);M(this,D).addEventListener("message",t=>{var _;let n=JSON.parse(t.data);switch(console.log(n),n.type){case"error":alert(n.message);break;case"login":this.inbox=n.inbox;break;case"message":let r=n.channelId;(_=this.inbox.conversations.find(o=>o.channelId===r))==null||_.lastMessages.push(n.message);break;case"conversationAdded":this.inbox.conversations.push(n.conversation);break}for(let r of M(this,x))r()})}send(t){M(this,D).send(JSON.stringify(t))}addListener(t){B(this,x,[...M(this,x),t])}removeListener(t){B(this,x,M(this,x).filter(n=>n!==t))}}D=new WeakMap,x=new WeakMap;const S=new pt;function he({iconName:e,text:t,onClick:n}){return u("button",{type:"button",className:"IconButton",onClick:n,children:[u("span",{class:"material-symbols-outlined",children:e}),t]})}function dt(){let[e,t]=E(""),[n,_]=E(!1),[r,o]=E(""),[l,a]=E("");function s(){n?S.send({type:"register",email:r,password:l,displayName:e,staySignedIn:!0}):S.send({type:"login",email:r,password:l,staySignedIn:!0})}return u("div",{class:"Login",children:[u("span",{class:"logo",onClick:()=>{document.documentElement.classList.toggle("theme-light"),localStorage.theme=localStorage.theme?"":"light"},children:"🗪"}),u(J,{type:"email",placeholder:"Email (someone@example.com)",value:r,onChange:o,autofocus:!0,onEnter:s}),u(J,{type:"password",placeholder:"Password",value:l,onChange:a,onEnter:s}),n&&u(J,{type:"text",placeholder:"Display Name (Agent Smith)",value:e,onChange:t,onEnter:s}),u(he,{iconName:"login",text:n?"Register":"Login",onClick:s}),u("p",{children:[n?"Switch back to ":"Have no account yet? Go and ",u("a",{href:"",onClick:d=>{d.preventDefault(),_(!n)},children:n?"Login":"Register"})]})]})}function Qe({iconName:e,buttonContent:t,onClick:n,..._}){return u("div",{class:"TextInputAndButton",children:[u(J,{..._,onEnter:n}),u(he,{iconName:e,text:t,onClick:n})]})}function ht({conversation:e,selected:t,onSelect:n}){let _=e.lastMessages.length>0?e.lastMessages[e.lastMessages.length-1]:null,r=_&&new Date(_.timeStamp).toLocaleDateString();return u("div",{class:"ConversationCard"+(t?" selected":""),onClick:()=>n(),children:[u("div",{children:[u("h3",{children:e.name}),u("time",{datetime:r,children:r})]}),u("span",{children:_==null?void 0:_.content})]})}function vt({selected:e,onSelect:t}){let[n,_]=E("");return u("div",{class:"LeftPane",children:[u("p",{children:["My tag: ",S.inbox.user.tag]}),u(Qe,{iconName:"add",value:n,onChange:_,buttonContent:"Invite",placeholder:"Tag",onClick:()=>{n&&(_(""),S.send({type:"contactRequest",email:n,firstMessage:"Hello"}))}}),u("div",{className:"conversations",children:S.inbox.conversations.map(r=>u(ht,{conversation:r,selected:r===e,onSelect:()=>t(r)},r.channelId))})]})}function ce(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var _ in t)if(_!=="__source"&&e[_]!==t[_])return!0;return!1}function He(e,t){this.props=e,this.context=t}function mt(e,t){function n(r){var o=this.props.ref,l=o==r.ref;return!l&&o&&(o.call?o(null):o.current=null),t?!t(this.props,r)||!l:ce(this.props,r)}function _(r){return this.shouldComponentUpdate=n,K(e,r)}return _.displayName="Memo("+(e.displayName||e.name)+")",_.prototype.isReactComponent=!0,_.__f=!0,_}(He.prototype=new P).isPureReactComponent=!0,He.prototype.shouldComponentUpdate=function(e,t){return ce(this.props,e)||ce(this.state,t)};var Me=p.__b;p.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Me&&Me(e)};var gt=p.__e;p.__e=function(e,t,n,_){if(e.then){for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}gt(e,t,n,_)};var Te=p.unmount;function Xe(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(_){typeof _.__c=="function"&&_.__c()}),e.__c.__H=null),(e=function(_,r){for(var o in r)_[o]=r[o];return _}({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(_){return Xe(_,t,n)})),e}function Ye(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(_){return Ye(_,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function re(){this.__u=0,this.o=null,this.__b=null}function et(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function V(){this.i=null,this.l=null}p.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Te&&Te(e)},(re.prototype=new P).__c=function(e,t){var n=t.__c,_=this;_.o==null&&(_.o=[]),_.o.push(n);var r=et(_.__v),o=!1,l=function(){o||(o=!0,n.__R=null,r?r(a):a())};n.__R=l;var a=function(){if(!--_.__u){if(_.state.__a){var s=_.state.__a;_.__v.__k[0]=Ye(s,s.__c.__P,s.__c.__O)}var c;for(_.setState({__a:_.__b=null});c=_.o.pop();)c.forceUpdate()}};_.__u++||32&t.__u||_.setState({__a:_.__b=_.__v.__k[0]}),e.then(l,l)},re.prototype.componentWillUnmount=function(){this.o=[]},re.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=Xe(this.__b,n,_.__O=_.__P)}this.__b=null}var r=t.__a&&K(L,null,e.fallback);return r&&(r.__u&=-33),[K(L,null,t.__a?null:e.children),r]};var Ie=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(V.prototype=new P).__a=function(e){var t=this,n=et(t.__v),_=t.l.get(e);return _[0]++,function(r){var o=function(){t.props.revealOrder?(_.push(r),Ie(t,e,_)):r()};n?n(o):o()}},V.prototype.render=function(e){this.i=null,this.l=new Map;var t=Z(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Ie(e,n,t)})};var yt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,bt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,kt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,wt=/[A-Z0-9]/g,Ct=typeof document<"u",St=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};P.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(P.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Ue=p.event;function Pt(){}function Nt(){return this.cancelBubble}function xt(){return this.defaultPrevented}p.event=function(e){return Ue&&(e=Ue(e)),e.persist=Pt,e.isPropagationStopped=Nt,e.isDefaultPrevented=xt,e.nativeEvent=e};var $t={enumerable:!1,configurable:!0,get:function(){return this.class}},Ae=p.vnode;p.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,_=t.type,r={},o=_.indexOf("-")===-1;for(var l in n){var a=n[l];if(!(l==="value"&&"defaultValue"in n&&a==null||Ct&&l==="children"&&_==="noscript"||l==="class"||l==="className")){var s=l.toLowerCase();l==="defaultValue"&&"value"in n&&n.value==null?l="value":l==="download"&&a===!0?a="":s==="translate"&&a==="no"?a=!1:s[0]==="o"&&s[1]==="n"?s==="ondoubleclick"?l="ondblclick":s!=="onchange"||_!=="input"&&_!=="textarea"||St(n.type)?s==="onfocus"?l="onfocusin":s==="onblur"?l="onfocusout":kt.test(l)&&(l=s):s=l="oninput":o&&bt.test(l)?l=l.replace(wt,"-$&").toLowerCase():a===null&&(a=void 0),s==="oninput"&&r[l=s]&&(l="oninputCapture"),r[l]=a}}_=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=Z(n.children).forEach(function(c){c.props.selected=r.value.indexOf(c.props.value)!=-1})),_=="select"&&r.defaultValue!=null&&(r.value=Z(n.children).forEach(function(c){c.props.selected=r.multiple?r.defaultValue.indexOf(c.props.value)!=-1:r.defaultValue==c.props.value})),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",$t)):(n.className&&!n.class||n.class&&n.className)&&(r.class=r.className=n.className),t.props=r}(e),e.$$typeof=yt,Ae&&Ae(e)};var Oe=p.__r;p.__r=function(e){Oe&&Oe(e),e.__c};var De=p.diffed;p.diffed=function(e){De&&De(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};const Et=mt(({message:e,own:t})=>u("div",{className:"MessageCard"+(t?" own":""),children:u("div",{className:"bubble",children:[u("span",{className:"text",children:e.content}),u("span",{className:"time",children:new Date(e.timeStamp).toLocaleDateString()})]})}));function Lt({conversation:e,onBack:t=()=>{}}){let[n,_]=E("");return u("div",{class:"RightPane",children:!!e&&u(L,{children:[u("div",{class:"conversation-header",children:[u("p",{children:e.name}),u(he,{iconName:"arrow_back",text:"Back",onClick:t})]}),u("div",{class:"messages",children:e.lastMessages.map(r=>u(Et,{message:r,own:r.senderId===S.inbox.user.id},r.timeStamp))}),u(Qe,{iconName:"send",value:n,onChange:_,buttonContent:"Send",placeholder:"Write a message...",onClick:()=>{S.send({type:"message",channelId:e.channelId,referenceTo:0,contentType:0,content:n}),_("")}})]})})}function Ht(){let[e,t]=E();return u("div",{class:e?"Main right":"Main left",children:[u(vt,{selected:e,onSelect:t}),u(Lt,{conversation:e,onBack:e=void 0})]})}var X;class Mt{constructor(){F(this,X);isSecureContext&&(async()=>B(this,X,await navigator.serviceWorker.register("sw.js")))()}}X=new WeakMap;new Mt;function Tt(){let[e,t]=E(1);return console.log("App render count: "+e),at(()=>{const n=()=>t(_=>_+1);return S.addListener(n),()=>S.removeListener(n)},[]),S.inbox?u(Ht,{}):u(dt,{})}it(u(Tt,{}),document.getElementById("app"));let It=localStorage.theme;It==="light"&&document.documentElement.classList.toggle("theme-light");
