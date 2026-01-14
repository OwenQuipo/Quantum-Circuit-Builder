(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bo="161",wi={ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nu=0,Qo=1,Ou=2,mh=1,Fu=2,Cn=3,ei=0,je=1,Dn=2,Kn=0,Qi=1,to=2,tl=3,el=4,Bu=5,di=100,zu=101,Gu=102,nl=103,il=104,Hu=200,ku=201,Vu=202,Wu=203,eo=204,no=205,Xu=206,qu=207,Yu=208,$u=209,ju=210,Ku=211,Zu=212,Ju=213,Qu=214,td=0,ed=1,nd=2,Is=3,id=4,rd=5,sd=6,ad=7,To=0,od=1,ld=2,Zn=0,cd=1,hd=2,ud=3,dd=4,fd=5,pd=6,gh=300,or=301,lr=302,io=303,ro=304,Js=306,Ur=1e3,fn=1001,so=1002,me=1003,rl=1004,xr=1005,$e=1006,fa=1007,mi=1008,Jn=1009,md=1010,gd=1011,Ao=1012,_h=1013,jn=1014,In=1015,Nr=1016,vh=1017,xh=1018,_i=1020,_d=1021,pn=1023,vd=1024,xd=1025,vi=1026,cr=1027,Md=1028,Mh=1029,Sd=1030,Sh=1031,yh=1033,pa=33776,ma=33777,ga=33778,_a=33779,sl=35840,al=35841,ol=35842,ll=35843,Eh=36196,cl=37492,hl=37496,ul=37808,dl=37809,fl=37810,pl=37811,ml=37812,gl=37813,_l=37814,vl=37815,xl=37816,Ml=37817,Sl=37818,yl=37819,El=37820,bl=37821,va=36492,Tl=36494,Al=36495,yd=36283,wl=36284,Rl=36285,Cl=36286,bh=3e3,xi=3001,Ed=3200,bd=3201,wo=0,Td=1,on="",Le="srgb",Bn="srgb-linear",Ro="display-p3",Qs="display-p3-linear",Us="linear",le="srgb",Ns="rec709",Os="p3",Ci=7680,Ll=519,Ad=512,wd=513,Rd=514,Th=515,Cd=516,Ld=517,Pd=518,Dd=519,ao=35044,Pl="300 es",oo=1035,Un=2e3,Fs=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dl=1234567;const tr=Math.PI/180,Or=180/Math.PI;function On(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Co(i,t){return(i%t+t)%t}function Id(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Ud(i,t,e){return i!==t?(e-i)/(t-i):0}function Lr(i,t,e){return(1-e)*i+e*t}function Nd(i,t,e,n){return Lr(i,t,1-Math.exp(-e*n))}function Od(i,t=1){return t-Math.abs(Co(i,t*2)-t)}function Fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gd(i,t){return i+Math.random()*(t-i)}function Hd(i){return i*(.5-Math.random())}function kd(i){i!==void 0&&(Dl=i);let t=Dl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vd(i){return i*tr}function Wd(i){return i*Or}function lo(i){return(i&i-1)===0&&i!==0}function Xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qd(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ah={DEG2RAD:tr,RAD2DEG:Or,generateUUID:On,clamp:ze,euclideanModulo:Co,mapLinear:Id,inverseLerp:Ud,lerp:Lr,damp:Nd,pingpong:Od,smoothstep:Fd,smootherstep:Bd,randInt:zd,randFloat:Gd,randFloatSpread:Hd,seededRandom:kd,degToRad:Vd,radToDeg:Wd,isPowerOfTwo:lo,ceilPowerOfTwo:Xd,floorPowerOfTwo:Bs,setQuaternionFromProperEuler:qd,normalize:te,denormalize:mn};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,r,s,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],x=r[0],p=r[3],f=r[6],y=r[1],v=r[4],S=r[7],P=r[2],R=r[5],A=r[8];return s[0]=o*x+a*y+l*P,s[3]=o*p+a*v+l*R,s[6]=o*f+a*S+l*A,s[1]=c*x+h*y+u*P,s[4]=c*p+h*v+u*R,s[7]=c*f+h*S+u*A,s[2]=d*x+m*y+g*P,s[5]=d*p+m*v+g*R,s[8]=d*f+m*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,m=c*s-o*l,g=e*u+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(r*c-h*n)*x,t[2]=(a*n-r*o)*x,t[3]=d*x,t[4]=(h*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new Yt;function wh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){const i=Fr("canvas");return i.style.display="block",i}const Il={};function Mi(i){i in Il||(Il[i]=!0,console.warn(i))}const Ul=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nl=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[Bn]:{transfer:Us,primaries:Ns,toReference:i=>i,fromReference:i=>i},[Le]:{transfer:le,primaries:Ns,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qs]:{transfer:Us,primaries:Os,toReference:i=>i.applyMatrix3(Nl),fromReference:i=>i.applyMatrix3(Ul)},[Ro]:{transfer:le,primaries:Os,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nl),fromReference:i=>i.applyMatrix3(Ul).convertLinearToSRGB()}},$d=new Set([Bn,Qs]),ee={enabled:!0,_workingColorSpace:Bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$d.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=jr[t].toReference,r=jr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return jr[i].primaries},getTransfer:function(i){return i===on?Us:jr[i].transfer}};function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ma(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Li;class Rh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=Fr("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=er(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(er(e[n]/255)*255):e[n]=er(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jd=0;class Ch{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sa(r[o].image)):s.push(Sa(r[o]))}else s=Sa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kd=0;class Ge extends Ti{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=fn,r=fn,s=$e,o=mi,a=pn,l=Jn,c=Ge.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=On(),this.name="",this.source=new Ch(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===xi?Le:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ur:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ur:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Le?xi:bh}set encoding(t){Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===xi?Le:on}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=gh;Ge.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,r=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(m+1)/2,P=(f+1)/2,R=(h+d)/4,A=(u+x)/4,G=(g+p)/4;return v>S&&v>P?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=R/n,s=A/n):S>P?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=R/r,s=G/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=A/s,r=G/s),this.set(n,r,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zd extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Mi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xi?Le:on),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ge(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ch(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Zd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lh extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=me,this.minFilter=me,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jd extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=me,this.minFilter=me,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==m||h!==g){let p=1-a;const f=l*d+c*m+h*g+u*x,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,f*y);p=Math.sin(p*R)/P,a=Math.sin(a*R)/P}const S=a*y;if(l=l*p+d*S,c=c*p+m*S,h=h*p+g*S,u=u*p+x*S,p===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-a*m,t[e+2]=c*g+h*m+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),d=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new I,Ol=new Ei;class Vr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),Zr.subVectors(this.max,Mr),Pi.subVectors(t.a,Mr),Di.subVectors(t.b,Mr),Ii.subVectors(t.c,Mr),Gn.subVectors(Di,Pi),Hn.subVectors(Ii,Di),oi.subVectors(Pi,Ii);let e=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-oi.z,oi.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,oi.z,0,-oi.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-oi.y,oi.x,0];return!Ea(e,Pi,Di,Ii,Zr)||(e=[1,0,0,0,1,0,0,0,1],!Ea(e,Pi,Di,Ii,Zr))?!1:(Jr.crossVectors(Gn,Hn),e=[Jr.x,Jr.y,Jr.z],Ea(e,Pi,Di,Ii,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new I,new I,new I,new I,new I,new I,new I,new I],hn=new I,Kr=new Vr,Pi=new I,Di=new I,Ii=new I,Gn=new I,Hn=new I,oi=new I,Mr=new I,Zr=new I,Jr=new I,li=new I;function Ea(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){li.fromArray(i,s);const a=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),l=t.dot(li),c=e.dot(li),h=n.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qd=new Vr,Sr=new I,ba=new I;class ta{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qd.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Sr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(ba)),this.expandByPoint(Sr.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new I,Ta=new I,Qr=new I,kn=new I,Aa=new I,ts=new I,wa=new I;class Lo{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ta.copy(t).add(e).multiplyScalar(.5),Qr.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Ta);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Qr),a=kn.dot(this.direction),l=-kn.dot(Qr),c=kn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ta).addScaledVector(Qr,d),m}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),r=Tn.dot(Tn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,r,s){Aa.subVectors(e,t),ts.subVectors(n,t),wa.crossVectors(Aa,ts);let o=this.direction.dot(wa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const l=a*this.direction.dot(ts.crossVectors(kn,ts));if(l<0)return null;const c=a*this.direction.dot(Aa.cross(kn));if(c<0||l+c>o)return null;const h=-a*kn.dot(wa);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,r,s,o,a,l,c,h,u,d,m,g,x,p){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,d,m,g,x,p)}set(t,e,n,r,s,o,a,l,c,h,u,d,m,g,x,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ui.setFromMatrixColumn(t,0).length(),s=1/Ui.setFromMatrixColumn(t,1).length(),o=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,m=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,m=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,n){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Vn.crossVectors(n,Ze),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Vn.crossVectors(n,Ze)),Vn.normalize(),es.crossVectors(Ze,Vn),r[0]=Vn.x,r[4]=es.x,r[8]=Ze.x,r[1]=Vn.y,r[5]=es.y,r[9]=Ze.y,r[2]=Vn.z,r[6]=es.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],x=n[6],p=n[10],f=n[14],y=n[3],v=n[7],S=n[11],P=n[15],R=r[0],A=r[4],G=r[8],j=r[12],_=r[1],T=r[5],F=r[9],q=r[13],D=r[2],B=r[6],O=r[10],Y=r[14],K=r[3],H=r[7],$=r[11],Z=r[15];return s[0]=o*R+a*_+l*D+c*K,s[4]=o*A+a*T+l*B+c*H,s[8]=o*G+a*F+l*O+c*$,s[12]=o*j+a*q+l*Y+c*Z,s[1]=h*R+u*_+d*D+m*K,s[5]=h*A+u*T+d*B+m*H,s[9]=h*G+u*F+d*O+m*$,s[13]=h*j+u*q+d*Y+m*Z,s[2]=g*R+x*_+p*D+f*K,s[6]=g*A+x*T+p*B+f*H,s[10]=g*G+x*F+p*O+f*$,s[14]=g*j+x*q+p*Y+f*Z,s[3]=y*R+v*_+S*D+P*K,s[7]=y*A+v*T+S*B+P*H,s[11]=y*G+v*F+S*O+P*$,s[15]=y*j+v*q+S*Y+P*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],x=t[7],p=t[11],f=t[15];return g*(+s*l*u-r*c*u-s*a*d+n*c*d+r*a*m-n*l*m)+x*(+e*l*m-e*c*d+s*o*d-r*o*m+r*c*h-s*l*h)+p*(+e*c*u-e*a*m-s*o*u+n*o*m+s*a*h-n*c*h)+f*(-r*a*h-e*l*u+e*a*d+r*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],x=t[13],p=t[14],f=t[15],y=u*p*c-x*d*c+x*l*m-a*p*m-u*l*f+a*d*f,v=g*d*c-h*p*c-g*l*m+o*p*m+h*l*f-o*d*f,S=h*x*c-g*u*c+g*a*m-o*x*m-h*a*f+o*u*f,P=g*u*l-h*x*l-g*a*d+o*x*d+h*a*p-o*u*p,R=e*y+n*v+r*S+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=y*A,t[1]=(x*d*s-u*p*s-x*r*m+n*p*m+u*r*f-n*d*f)*A,t[2]=(a*p*s-x*l*s+x*r*c-n*p*c-a*r*f+n*l*f)*A,t[3]=(u*l*s-a*d*s-u*r*c+n*d*c+a*r*m-n*l*m)*A,t[4]=v*A,t[5]=(h*p*s-g*d*s+g*r*m-e*p*m-h*r*f+e*d*f)*A,t[6]=(g*l*s-o*p*s-g*r*c+e*p*c+o*r*f-e*l*f)*A,t[7]=(o*d*s-h*l*s+h*r*c-e*d*c-o*r*m+e*l*m)*A,t[8]=S*A,t[9]=(g*u*s-h*x*s-g*n*m+e*x*m+h*n*f-e*u*f)*A,t[10]=(o*x*s-g*a*s+g*n*c-e*x*c-o*n*f+e*a*f)*A,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*m-e*a*m)*A,t[12]=P*A,t[13]=(h*x*r-g*u*r+g*n*d-e*x*d-h*n*p+e*u*p)*A,t[14]=(g*a*r-o*x*r-g*n*l+e*x*l+o*n*p-e*a*p)*A,t[15]=(o*u*r-h*a*r+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,m=s*h,g=s*u,x=o*h,p=o*u,f=a*u,y=l*c,v=l*h,S=l*u,P=n.x,R=n.y,A=n.z;return r[0]=(1-(x+f))*P,r[1]=(m+S)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(d+f))*R,r[6]=(p+y)*R,r[7]=0,r[8]=(g+v)*A,r[9]=(p-y)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ui.set(r[0],r[1],r[2]).length();const o=Ui.set(r[4],r[5],r[6]).length(),a=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],un.copy(this);const c=1/s,h=1/o,u=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Un){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r);let m,g;if(a===Un)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Fs)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Un){const l=this.elements,c=1/(e-t),h=1/(n-r),u=1/(o-s),d=(e+t)*c,m=(n+r)*h;let g,x;if(a===Un)g=(o+s)*u,x=-2*u;else if(a===Fs)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new I,un=new ge,tf=new I(0,0,0),ef=new I(1,1,1),Vn=new I,es=new I,Ze=new I,Fl=new ge,Bl=new Ei;class ea{constructor(t=0,e=0,n=0,r=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class Ph{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nf=0;const zl=new I,Ni=new Ei,An=new ge,ns=new I,yr=new I,rf=new I,sf=new Ei,Gl=new I(1,0,0),Hl=new I(0,1,0),kl=new I(0,0,1),af={type:"added"},of={type:"removed"};class ye extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new I,e=new ea,n=new Ei,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ge},normalMatrix:{value:new Yt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(yr,ns,this.up):An.lookAt(ns,yr,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(An),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(af)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(of)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ye.DEFAULT_UP=new I(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new I,wn=new I,Ra=new I,Rn=new I,Oi=new I,Fi=new I,Vl=new I,Ca=new I,La=new I,Pa=new I;class ln{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),dn.subVectors(t,e),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){dn.subVectors(r,e),wn.subVectors(n,e),Ra.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(wn),l=dn.dot(Ra),c=wn.dot(wn),h=wn.dot(Ra),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static isFrontFacing(t,e,n,r){return dn.subVectors(n,e),wn.subVectors(t,e),dn.cross(wn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),dn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Oi.subVectors(r,n),Fi.subVectors(s,n),Ca.subVectors(t,n);const l=Oi.dot(Ca),c=Fi.dot(Ca);if(l<=0&&c<=0)return e.copy(n);La.subVectors(t,r);const h=Oi.dot(La),u=Fi.dot(La);if(h>=0&&u<=h)return e.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Oi,o);Pa.subVectors(t,s);const m=Oi.dot(Pa),g=Fi.dot(Pa);if(g>=0&&m<=g)return e.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Fi,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Vl.subVectors(s,r),a=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(Vl,a);const f=1/(p+x+d);return o=x*f,a=d*f,e.copy(n).addScaledVector(Oi,o).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},is={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ee.workingColorSpace){if(t=Co(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Da(o,s,t+1/3),this.g=Da(o,s,t),this.b=Da(o,s,t-1/3)}return ee.toWorkingColorSpace(this,r),this}setStyle(t,e=Le){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Dh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}copyLinearToSRGB(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ee.fromWorkingColorSpace(Ne.copy(this),t),Math.round(ze(Ne.r*255,0,255))*65536+Math.round(ze(Ne.g*255,0,255))*256+Math.round(ze(Ne.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,r=Ne.g,s=Ne.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Le){ee.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,r=Ne.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(is);const n=Lr(Wn.h,is.h,e),r=Lr(Wn.s,is.s,e),s=Lr(Wn.l,is.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new xt;xt.NAMES=Dh;let lf=0;class ri extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Qi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=no,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eo&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class na extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new I,rs=new yt;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Mi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rs.fromBufferAttribute(this,e),rs.applyMatrix3(t),this.setXY(e,rs.x,rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ao&&(t.usage=this.usage),t}}class Ih extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Uh extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cf=0;const nn=new ge,Ia=new ye,Bi=new I,Je=new Vr,Er=new Vr,Ae=new I;class De extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wh(t)?Uh:Ih)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Je.min,Er.min),Je.expandByPoint(Ae),Ae.addVectors(Je.max,Er.max),Je.expandByPoint(Ae)):(Je.expandByPoint(Er.min),Je.expandByPoint(Er.max))}Je.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ae));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(t,c),Ae.add(Bi)),r=Math.max(r,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let _=0;_<a;_++)c[_]=new I,h[_]=new I;const u=new I,d=new I,m=new I,g=new yt,x=new yt,p=new yt,f=new I,y=new I;function v(_,T,F){u.fromArray(r,_*3),d.fromArray(r,T*3),m.fromArray(r,F*3),g.fromArray(o,_*2),x.fromArray(o,T*2),p.fromArray(o,F*2),d.sub(u),m.sub(u),x.sub(g),p.sub(g);const q=1/(x.x*p.y-p.x*x.y);isFinite(q)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(q),y.copy(m).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(q),c[_].add(f),c[T].add(f),c[F].add(f),h[_].add(y),h[T].add(y),h[F].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let _=0,T=S.length;_<T;++_){const F=S[_],q=F.start,D=F.count;for(let B=q,O=q+D;B<O;B+=3)v(n[B+0],n[B+1],n[B+2])}const P=new I,R=new I,A=new I,G=new I;function j(_){A.fromArray(s,_*3),G.copy(A);const T=c[_];P.copy(T),P.sub(A.multiplyScalar(A.dot(T))).normalize(),R.crossVectors(G,T);const q=R.dot(h[_])<0?-1:1;l[_*4]=P.x,l[_*4+1]=P.y,l[_*4+2]=P.z,l[_*4+3]=q}for(let _=0,T=S.length;_<T;++_){const F=S[_],q=F.start,D=F.count;for(let B=q,O=q+D;B<O;B+=3)j(n[B+0]),j(n[B+1]),j(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new gn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new ge,ci=new Lo,ss=new ta,Xl=new I,zi=new I,Gi=new I,Hi=new I,Ua=new I,as=new I,os=new yt,ls=new yt,cs=new yt,ql=new I,Yl=new I,$l=new I,hs=new I,us=new I;class Pe extends ye{constructor(t=new De,e=new na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){as.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Ua.fromBufferAttribute(u,t),o?as.addScaledVector(Ua,h):as.addScaledVector(Ua.sub(e),h))}e.add(as)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(s),ci.copy(t.ray).recast(t.near),!(ss.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ss,Xl)===null||ci.origin.distanceToSquared(Xl)>(t.far-t.near)**2))&&(Wl.copy(s).invert(),ci.copy(t.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],f=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,P=v;S<P;S+=3){const R=a.getX(S),A=a.getX(S+1),G=a.getX(S+2);r=ds(this,f,t,n,c,h,u,R,A,G),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const y=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=ds(this,o,t,n,c,h,u,y,v,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],f=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,P=v;S<P;S+=3){const R=S,A=S+1,G=S+2;r=ds(this,f,t,n,c,h,u,R,A,G),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const y=p,v=p+1,S=p+2;r=ds(this,o,t,n,c,h,u,y,v,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function hf(i,t,e,n,r,s,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===ei,a),l===null)return null;us.copy(a),us.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(us);return c<e.near||c>e.far?null:{distance:c,point:us.clone(),object:i}}function ds(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,zi),i.getVertexPosition(l,Gi),i.getVertexPosition(c,Hi);const h=hf(i,t,e,n,zi,Gi,Hi,hs);if(h){r&&(os.fromBufferAttribute(r,a),ls.fromBufferAttribute(r,l),cs.fromBufferAttribute(r,c),h.uv=ln.getInterpolation(hs,zi,Gi,Hi,os,ls,cs,new yt)),s&&(os.fromBufferAttribute(s,a),ls.fromBufferAttribute(s,l),cs.fromBufferAttribute(s,c),h.uv1=ln.getInterpolation(hs,zi,Gi,Hi,os,ls,cs,new yt),h.uv2=h.uv1),o&&(ql.fromBufferAttribute(o,a),Yl.fromBufferAttribute(o,l),$l.fromBufferAttribute(o,c),h.normal=ln.getInterpolation(hs,zi,Gi,Hi,ql,Yl,$l,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};ln.getNormal(zi,Gi,Hi,u.normal),h.face=u}return h}class Wr extends De{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function g(x,p,f,y,v,S,P,R,A,G,j){const _=S/A,T=P/G,F=S/2,q=P/2,D=R/2,B=A+1,O=G+1;let Y=0,K=0;const H=new I;for(let $=0;$<O;$++){const Z=$*T-q;for(let lt=0;lt<B;lt++){const Rt=lt*_-F;H[x]=Rt*y,H[p]=Z*v,H[f]=D,c.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[f]=R>0?1:-1,h.push(H.x,H.y,H.z),u.push(lt/A),u.push(1-$/G),Y+=1}}for(let $=0;$<G;$++)for(let Z=0;Z<A;Z++){const lt=d+Z+B*$,Rt=d+Z+B*($+1),W=d+(Z+1)+B*($+1),J=d+(Z+1)+B*$;l.push(lt,Rt,J),l.push(Rt,W,J),K+=6}a.addGroup(m,K,j),m+=K,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=hr(i[e]);for(const r in n)t[r]=n[r]}return t}function uf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){return i.getRenderTarget()===null?i.outputColorSpace:ee.workingColorSpace}const df={clone:hr,merge:We};var ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ff,this.fragmentShader=pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Oh extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new I,jl=new yt,Kl=new yt;class rn extends Oh{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,jl,Kl),e.subVectors(Kl,jl)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Vi=1;class mf extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(ki,Vi,t,e);r.layers=this.layers,this.add(r);const s=new rn(ki,Vi,t,e);s.layers=this.layers,this.add(s);const o=new rn(ki,Vi,t,e);o.layers=this.layers,this.add(o);const a=new rn(ki,Vi,t,e);a.layers=this.layers,this.add(a);const l=new rn(ki,Vi,t,e);l.layers=this.layers,this.add(l);const c=new rn(ki,Vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fh extends Ge{constructor(t,e,n,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gf extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Mi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===xi?Le:on),this.texture=new Fh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wr(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Kn});s.uniforms.tEquirect.value=e;const o=new Pe(r,s),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=$e),new mf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Na=new I,_f=new I,vf=new Yt;class Yn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Na.subVectors(n,e).cross(_f.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Na),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vf.getNormalMatrix(t),r=this.coplanarPoint(Na).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new ta,fs=new I;class Po{constructor(t=new Yn,e=new Yn,n=new Yn,r=new Yn,s=new Yn,o=new Yn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],x=r[10],p=r[11],f=r[12],y=r[13],v=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,p-m,S-f).normalize(),n[1].setComponents(l+s,d+c,p+m,S+f).normalize(),n[2].setComponents(l+o,d+h,p+g,S+y).normalize(),n[3].setComponents(l-o,d-h,p-g,S-y).normalize(),n[4].setComponents(l-a,d-u,p-x,S-v).normalize(),e===Un)n[5].setComponents(l+a,d+u,p+x,S+v).normalize();else if(e===Fs)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(fs.x=r.normal.x>0?t.max.x:t.min.x,fs.y=r.normal.y>0?t.max.y:t.min.y,fs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bh(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function xf(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,d=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){const f=g[x];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,r(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Xr extends De{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,d=e/l,m=[],g=[],x=[],p=[];for(let f=0;f<h;f++){const y=f*d-o;for(let v=0;v<c;v++){const S=v*u-s;g.push(S,-y,0),x.push(0,0,1),p.push(v/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const v=y+c*f,S=y+c*(f+1),P=y+1+c*(f+1),R=y+1+c*f;m.push(v,S,R),m.push(S,P,R)}this.setIndex(m),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Af=`#ifdef USE_AOMAP
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
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,If=`#ifdef USE_IRIDESCENCE
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
#endif`,Uf=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vf=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Jf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
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
}`,lp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dp=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#endif`,xp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Mp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lp=`#if defined( USE_POINTS_UV )
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
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Np=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wm=`#define DISTANCE
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Om=`#define LAMBERT
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
}`,Fm=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define NORMAL
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
}`,Gm=`#define NORMAL
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
}`,Hm=`#define PHONG
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
}`,km=`#define PHONG
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
}`,Vm=`#define STANDARD
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,$m=`uniform vec3 diffuse;
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
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Km=`uniform vec3 color;
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
}`,Zm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Mf,alphahash_pars_fragment:Sf,alphamap_fragment:yf,alphamap_pars_fragment:Ef,alphatest_fragment:bf,alphatest_pars_fragment:Tf,aomap_fragment:Af,aomap_pars_fragment:wf,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:Lf,beginnormal_vertex:Pf,bsdfs:Df,iridescence_fragment:If,bumpmap_pars_fragment:Uf,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Of,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Bf,color_fragment:zf,color_pars_fragment:Gf,color_pars_vertex:Hf,color_vertex:kf,common:Vf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:qf,displacementmap_vertex:Yf,emissivemap_fragment:$f,emissivemap_pars_fragment:jf,colorspace_fragment:Kf,colorspace_pars_fragment:Zf,envmap_fragment:Jf,envmap_common_pars_fragment:Qf,envmap_pars_fragment:tp,envmap_pars_vertex:ep,envmap_physical_pars_fragment:fp,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:rp,fog_fragment:sp,fog_pars_fragment:ap,gradientmap_pars_fragment:op,lightmap_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:dp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:_p,lights_physical_fragment:vp,lights_physical_pars_fragment:xp,lights_fragment_begin:Mp,lights_fragment_maps:Sp,lights_fragment_end:yp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Ap,map_fragment:wp,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Lp,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Dp,morphcolor_vertex:Ip,morphnormal_vertex:Up,morphtarget_pars_vertex:Np,morphtarget_vertex:Op,normal_fragment_begin:Fp,normal_fragment_maps:Bp,normal_pars_fragment:zp,normal_pars_vertex:Gp,normal_vertex:Hp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:qp,opaque_fragment:Yp,packing:$p,premultiplied_alpha_fragment:jp,project_vertex:Kp,dithering_fragment:Zp,dithering_pars_fragment:Jp,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:em,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:rm,skinbase_vertex:sm,skinning_pars_vertex:am,skinning_vertex:om,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,worldpos_vertex:vm,background_vert:xm,background_frag:Mm,backgroundCube_vert:Sm,backgroundCube_frag:ym,cube_vert:Em,cube_frag:bm,depth_vert:Tm,depth_frag:Am,distanceRGBA_vert:wm,distanceRGBA_frag:Rm,equirect_vert:Cm,equirect_frag:Lm,linedashed_vert:Pm,linedashed_frag:Dm,meshbasic_vert:Im,meshbasic_frag:Um,meshlambert_vert:Nm,meshlambert_frag:Om,meshmatcap_vert:Fm,meshmatcap_frag:Bm,meshnormal_vert:zm,meshnormal_frag:Gm,meshphong_vert:Hm,meshphong_frag:km,meshphysical_vert:Vm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:Ym,points_frag:$m,shadow_vert:jm,shadow_frag:Km,sprite_vert:Zm,sprite_frag:Jm},ht={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},xn={basic:{uniforms:We([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:We([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new xt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:We([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:We([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:We([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new xt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:We([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:We([ht.points,ht.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:We([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:We([ht.common,ht.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:We([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:We([ht.sprite,ht.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:We([ht.common,ht.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:We([ht.lights,ht.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};xn.physical={uniforms:We([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const ps={r:0,b:0,g:0};function Qm(i,t,e,n,r,s,o){const a=new xt(0);let l=s===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),y=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Js)?(h===void 0&&(h=new Pe(new Wr(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:hr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ee.getTransfer(v.colorSpace)!==le,(u!==v||d!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pe(new Xr(2,2),new ni({name:"BackgroundMaterial",uniforms:hr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,f){p.getRGB(ps,Nh(i)),n.buffers.color.setClear(ps.r,ps.g,ps.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:g}}function tg(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function u(D,B,O,Y,K){let H=!1;if(o){const $=x(Y,O,B);c!==$&&(c=$,m(c.object)),H=f(D,Y,O,K),H&&y(D,Y,O,K)}else{const $=B.wireframe===!0;(c.geometry!==Y.id||c.program!==O.id||c.wireframe!==$)&&(c.geometry=Y.id,c.program=O.id,c.wireframe=$,H=!0)}K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,G(D,B,O,Y),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function x(D,B,O){const Y=O.wireframe===!0;let K=a[D.id];K===void 0&&(K={},a[D.id]=K);let H=K[B.id];H===void 0&&(H={},K[B.id]=H);let $=H[Y];return $===void 0&&($=p(d()),H[Y]=$),$}function p(D){const B=[],O=[],Y=[];for(let K=0;K<r;K++)B[K]=0,O[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:Y,object:D,attributes:{},index:null}}function f(D,B,O,Y){const K=c.attributes,H=B.attributes;let $=0;const Z=O.getAttributes();for(const lt in Z)if(Z[lt].location>=0){const W=K[lt];let J=H[lt];if(J===void 0&&(lt==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),lt==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),W===void 0||W.attribute!==J||J&&W.data!==J.data)return!0;$++}return c.attributesNum!==$||c.index!==Y}function y(D,B,O,Y){const K={},H=B.attributes;let $=0;const Z=O.getAttributes();for(const lt in Z)if(Z[lt].location>=0){let W=H[lt];W===void 0&&(lt==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),lt==="instanceColor"&&D.instanceColor&&(W=D.instanceColor));const J={};J.attribute=W,W&&W.data&&(J.data=W.data),K[lt]=J,$++}c.attributes=K,c.attributesNum=$,c.index=Y}function v(){const D=c.newAttributes;for(let B=0,O=D.length;B<O;B++)D[B]=0}function S(D){P(D,0)}function P(D,B){const O=c.newAttributes,Y=c.enabledAttributes,K=c.attributeDivisors;O[D]=1,Y[D]===0&&(i.enableVertexAttribArray(D),Y[D]=1),K[D]!==B&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),K[D]=B)}function R(){const D=c.newAttributes,B=c.enabledAttributes;for(let O=0,Y=B.length;O<Y;O++)B[O]!==D[O]&&(i.disableVertexAttribArray(O),B[O]=0)}function A(D,B,O,Y,K,H,$){$===!0?i.vertexAttribIPointer(D,B,O,K,H):i.vertexAttribPointer(D,B,O,Y,K,H)}function G(D,B,O,Y){if(n.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const K=Y.attributes,H=O.getAttributes(),$=B.defaultAttributeValues;for(const Z in H){const lt=H[Z];if(lt.location>=0){let Rt=K[Z];if(Rt===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(Rt=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(Rt=D.instanceColor)),Rt!==void 0){const W=Rt.normalized,J=Rt.itemSize,ct=e.get(Rt);if(ct===void 0)continue;const _t=ct.buffer,vt=ct.type,mt=ct.bytesPerElement,Ft=n.isWebGL2===!0&&(vt===i.INT||vt===i.UNSIGNED_INT||Rt.gpuType===_h);if(Rt.isInterleavedBufferAttribute){const Pt=Rt.data,U=Pt.stride,de=Rt.offset;if(Pt.isInstancedInterleavedBuffer){for(let bt=0;bt<lt.locationSize;bt++)P(lt.location+bt,Pt.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let bt=0;bt<lt.locationSize;bt++)S(lt.location+bt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let bt=0;bt<lt.locationSize;bt++)A(lt.location+bt,J/lt.locationSize,vt,W,U*mt,(de+J/lt.locationSize*bt)*mt,Ft)}else{if(Rt.isInstancedBufferAttribute){for(let Pt=0;Pt<lt.locationSize;Pt++)P(lt.location+Pt,Rt.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Pt=0;Pt<lt.locationSize;Pt++)S(lt.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Pt=0;Pt<lt.locationSize;Pt++)A(lt.location+Pt,J/lt.locationSize,vt,W,J*mt,J/lt.locationSize*Pt*mt,Ft)}}else if($!==void 0){const W=$[Z];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(lt.location,W);break;case 3:i.vertexAttrib3fv(lt.location,W);break;case 4:i.vertexAttrib4fv(lt.location,W);break;default:i.vertexAttrib1fv(lt.location,W)}}}}R()}function j(){F();for(const D in a){const B=a[D];for(const O in B){const Y=B[O];for(const K in Y)g(Y[K].object),delete Y[K];delete B[O]}delete a[D]}}function _(D){if(a[D.id]===void 0)return;const B=a[D.id];for(const O in B){const Y=B[O];for(const K in Y)g(Y[K].object),delete Y[K];delete B[O]}delete a[D.id]}function T(D){for(const B in a){const O=a[B];if(O[D.id]===void 0)continue;const Y=O[D.id];for(const K in Y)g(Y[K].object),delete Y[K];delete O[D.id]}}function F(){q(),h=!0,c!==l&&(c=l,m(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:q,dispose:j,releaseStatesOfGeometry:_,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:S,disableUnusedAttributes:R}}function eg(i,t,e,n){const r=n.isWebGL2;let s;function o(h){s=h}function a(h,u){i.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,d){if(d===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,u,d),e.update(u,s,d)}function c(h,u,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ng(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||t.has("OES_texture_float"),P=v&&S,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:R}}function ig(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Yn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,v=y*4;let S=f.clippingState||null;l.value=S,S=h(g,d,v,m);for(let P=0;P!==v;++P)S[P]=e[P];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const f=m+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,S=m;v!==x;++v,S+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function rg(i){let t=new WeakMap;function e(o,a){return a===io?o.mapping=or:a===ro&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===io||a===ro)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Do extends Oh{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ji=4,Zl=[.125,.215,.35,.446,.526,.582],fi=20,Oa=new Do,Jl=new xt;let Fa=null,Ba=0,za=0;const ui=(1+Math.sqrt(5))/2,Wi=1/ui,Ql=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ui,Wi),new I(0,ui,-Wi),new I(Wi,0,ui),new I(-Wi,0,ui),new I(ui,Wi,0),new I(-ui,Wi,0)];class tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,Ba,za),t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Nr,format:pn,colorSpace:Bn,depthBuffer:!1},r=ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(s)),this._blurMaterial=ag(s,t,e)}return r}_compileMaterial(t){const e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,r){const a=new rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jl),h.toneMapping=Zn,h.autoClear=!1;const m=new na({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new Pe(new Wr,m);let x=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(Jl),x=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;ms(r,y*v,f>2?v:0,v,v),h.setRenderTarget(r),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===or||t.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ms(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ql[(r-1)%Ql.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Pe(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fi-1),x=s/g,p=isFinite(s)?1+Math.floor(h*x):fi;p>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fi}`);const f=[];let y=0;for(let A=0;A<fi;++A){const G=A/x,j=Math.exp(-G*G/2);f.push(j),A===0?y+=j:A<p&&(y+=2*j)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[r],P=3*S*(r>v-ji?r-v+ji:0),R=4*(this._cubeSize-S);ms(e,P,R,3*S,2*S),l.setRenderTarget(e),l.render(u,Oa)}}function sg(i){const t=[],e=[],n=[];let r=i;const s=i-ji+1+Zl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-ji?l=Zl[o-i+ji-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,p=2,f=1,y=new Float32Array(x*g*m),v=new Float32Array(p*g*m),S=new Float32Array(f*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,G=R>2?0:-1,j=[A,G,0,A+2/3,G,0,A+2/3,G+1,0,A,G,0,A+2/3,G+1,0,A,G+1,0];y.set(j,x*g*R),v.set(d,p*g*R);const _=[R,R,R,R,R,R];S.set(_,f*g*R)}const P=new De;P.setAttribute("position",new gn(y,x)),P.setAttribute("uv",new gn(v,p)),P.setAttribute("faceIndex",new gn(S,f)),t.push(P),r>ji&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ec(i,t,e){const n=new yi(i,t,e);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function ag(i,t,e){const n=new Float32Array(fi),r=new I(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function nc(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function ic(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}function og(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===io||l===ro,h=l===or||l===lr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new tc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&r(u)){e===null&&(e=new tc(i));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function lg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function cg(i,t,e,n){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,f=x.length;p<f;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const x=m[g];for(let p=0,f=x.length;p<f;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let x=0;if(m!==null){const y=m.array;x=m.version;for(let v=0,S=y.length;v<S;v+=3){const P=y[v+0],R=y[v+1],A=y[v+2];d.push(P,R,R,A,A,P)}}else if(g!==void 0){const y=g.array;x=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const P=v+0,R=v+1,A=v+2;d.push(P,R,R,A,A,P)}}else return;const p=new(wh(d)?Uh:Ih)(d,1);p.version=x;const f=s.get(u);f&&t.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hg(i,t,e,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(s,g,a,m*l),e.update(g,s,1)}function u(m,g,x){if(x===0)return;let p,f;if(r)p=i,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*l,x),e.update(g,s,x)}function d(m,g,x){if(x===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<x;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,x);let f=0;for(let y=0;y<x;y++)f+=g[y];e.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function ug(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function dg(i,t){return i[0]-t[0]}function fg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function pg(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,o=new Re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==x){let B=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",B)};var m=B;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let j=0;v===!0&&(j=1),S===!0&&(j=2),P===!0&&(j=3);let _=h.attributes.position.count*j,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const F=new Float32Array(_*T*4*x),q=new Lh(F,_,T,x);q.type=In,q.needsUpdate=!0;const D=j*4;for(let O=0;O<x;O++){const Y=R[O],K=A[O],H=G[O],$=_*T*4*O;for(let Z=0;Z<Y.count;Z++){const lt=Z*D;v===!0&&(o.fromBufferAttribute(Y,Z),F[$+lt+0]=o.x,F[$+lt+1]=o.y,F[$+lt+2]=o.z,F[$+lt+3]=0),S===!0&&(o.fromBufferAttribute(K,Z),F[$+lt+4]=o.x,F[$+lt+5]=o.y,F[$+lt+6]=o.z,F[$+lt+7]=0),P===!0&&(o.fromBufferAttribute(H,Z),F[$+lt+8]=o.x,F[$+lt+9]=o.y,F[$+lt+10]=o.z,F[$+lt+11]=H.itemSize===4?o.w:1)}}p={count:x,texture:q,size:new yt(_,T)},s.set(h,p),h.addEventListener("dispose",B)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let x=n[h.id];if(x===void 0||x.length!==g){x=[];for(let S=0;S<g;S++)x[S]=[S,0];n[h.id]=x}for(let S=0;S<g;S++){const P=x[S];P[0]=S,P[1]=d[S]}x.sort(fg);for(let S=0;S<8;S++)S<g&&x[S][1]?(a[S][0]=x[S][0],a[S][1]=x[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(dg);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const P=a[S],R=P[0],A=P[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+S)!==p[R]&&h.setAttribute("morphTarget"+S,p[R]),f&&h.getAttribute("morphNormal"+S)!==f[R]&&h.setAttribute("morphNormal"+S,f[R]),r[S]=A,y+=A):(p&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function mg(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class zh extends Ge{constructor(t,e,n,r,s,o,a,l,c,h){if(h=h!==void 0?h:vi,h!==vi&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=jn),n===void 0&&h===cr&&(n=_i),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:me,this.minFilter=l!==void 0?l:me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gh=new Ge,Hh=new zh(1,1);Hh.compareFunction=Th;const kh=new Lh,Vh=new Jd,Wh=new Fh,rc=[],sc=[],ac=new Float32Array(16),oc=new Float32Array(9),lc=new Float32Array(4);function mr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=rc[r];if(s===void 0&&(s=new Float32Array(r),rc[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ia(i,t){let e=sc[t];e===void 0&&(e=new Int32Array(t),sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function Mg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;lc.set(n),i.uniformMatrix2fv(this.addr,!1,lc),be(e,n)}}function Sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;oc.set(n),i.uniformMatrix3fv(this.addr,!1,oc),be(e,n)}}function yg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;ac.set(n),i.uniformMatrix4fv(this.addr,!1,ac),be(e,n)}}function Eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function wg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Pg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Hh:Gh;e.setTexture2D(t||s,r)}function Dg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Vh,r)}function Ig(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Wh,r)}function Ug(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||kh,r)}function Ng(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return xg;case 35674:return Mg;case 35675:return Sg;case 35676:return yg;case 5124:case 35670:return Eg;case 35667:case 35671:return bg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return wg;case 36294:return Rg;case 36295:return Cg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ug}}function Og(i,t){i.uniform1fv(this.addr,t)}function Fg(i,t){const e=mr(t,this.size,2);i.uniform2fv(this.addr,e)}function Bg(i,t){const e=mr(t,this.size,3);i.uniform3fv(this.addr,e)}function zg(i,t){const e=mr(t,this.size,4);i.uniform4fv(this.addr,e)}function Gg(i,t){const e=mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hg(i,t){const e=mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kg(i,t){const e=mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vg(i,t){i.uniform1iv(this.addr,t)}function Wg(i,t){i.uniform2iv(this.addr,t)}function Xg(i,t){i.uniform3iv(this.addr,t)}function qg(i,t){i.uniform4iv(this.addr,t)}function Yg(i,t){i.uniform1uiv(this.addr,t)}function $g(i,t){i.uniform2uiv(this.addr,t)}function jg(i,t){i.uniform3uiv(this.addr,t)}function Kg(i,t){i.uniform4uiv(this.addr,t)}function Zg(i,t,e){const n=this.cache,r=t.length,s=ia(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Gh,s[o])}function Jg(i,t,e){const n=this.cache,r=t.length,s=ia(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Vh,s[o])}function Qg(i,t,e){const n=this.cache,r=t.length,s=ia(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Wh,s[o])}function t_(i,t,e){const n=this.cache,r=t.length,s=ia(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||kh,s[o])}function e_(i){switch(i){case 5126:return Og;case 35664:return Fg;case 35665:return Bg;case 35666:return zg;case 35674:return Gg;case 35675:return Hg;case 35676:return kg;case 5124:case 35670:return Vg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return $g;case 36295:return jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return t_}}class n_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ng(e.type)}}class i_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e_(e.type)}}class r_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function cc(i,t){i.seq.push(t),i.map[t.id]=t}function s_(i,t,e){const n=i.name,r=n.length;for(Ga.lastIndex=0;;){const s=Ga.exec(n),o=Ga.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){cc(e,c===void 0?new n_(a,i,t):new i_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new r_(a),cc(e,u)),e=u}}}class Rs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);s_(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function hc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const a_=37297;let o_=0;function l_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function c_(i){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(i);let n;switch(t===e?n="":t===Os&&e===Ns?n="LinearDisplayP3ToLinearSRGB":t===Ns&&e===Os&&(n="LinearSRGBToLinearDisplayP3"),i){case Bn:case Qs:return[n,"LinearTransferOETF"];case Le:case Ro:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function uc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+l_(i.getShaderSource(t),o)}else return r}function h_(i,t){const e=c_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function u_(i,t){let e;switch(t){case cd:e="Linear";break;case hd:e="Reinhard";break;case ud:e="OptimizedCineon";break;case dd:e="ACESFilmic";break;case pd:e="AgX";break;case fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function d_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ki).join(`
`)}function f_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function p_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function m_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ki(i){return i!==""}function dc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(i){return i.replace(g_,v_)}const __=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function v_(i,t){let e=Vt[t];if(e===void 0){const n=__.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return co(e)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(i){return i.replace(x_,M_)}function M_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function S_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function y_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case lr:t="ENVMAP_TYPE_CUBE";break;case Js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case lr:t="ENVMAP_MODE_REFRACTION";break}return t}function b_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case To:t="ENVMAP_BLENDING_MULTIPLY";break;case od:t="ENVMAP_BLENDING_MIX";break;case ld:t="ENVMAP_BLENDING_ADD";break}return t}function T_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function A_(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=S_(e),c=y_(e),h=E_(e),u=b_(e),d=T_(e),m=e.isWebGL2?"":d_(e),g=f_(e),x=p_(s),p=r.createProgram();let f,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ki).join(`
`),f.length>0&&(f+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ki).join(`
`),y.length>0&&(y+=`
`)):(f=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),y=[m,mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?u_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,h_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),o=co(o),o=dc(o,e),o=fc(o,e),a=co(a),a=dc(a,e),a=fc(a,e),o=pc(o),a=pc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+f+o,P=v+y+a,R=hc(r,r.VERTEX_SHADER,S),A=hc(r,r.FRAGMENT_SHADER,P);r.attachShader(p,R),r.attachShader(p,A),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function G(F){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(R).trim(),B=r.getShaderInfoLog(A).trim();let O=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,R,A);else{const K=uc(r,R,"vertex"),H=uc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+K+`
`+H)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(D===""||B==="")&&(Y=!1);Y&&(F.diagnostics={runnable:O,programLog:q,vertexShader:{log:D,prefix:f},fragmentShader:{log:B,prefix:y}})}r.deleteShader(R),r.deleteShader(A),j=new Rs(r,p),_=m_(r,p)}let j;this.getUniforms=function(){return j===void 0&&G(this),j};let _;this.getAttributes=function(){return _===void 0&&G(this),_};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(p,a_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o_++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=A,this}let w_=0;class R_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new C_(t),e.set(t,n)),n}}class C_{constructor(t){this.id=w_++,this.code=t,this.usedTimes=0}}function L_(i,t,e,n,r,s,o){const a=new Ph,l=new R_,c=new Set,h=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,T,F,q,D){const B=q.fog,O=D.geometry,Y=_.isMeshStandardMaterial?q.environment:null,K=(_.isMeshStandardMaterial?e:t).get(_.envMap||Y),H=K&&K.mapping===Js?K.image.height:null,$=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,lt=Z!==void 0?Z.length:0;let Rt=0;O.morphAttributes.position!==void 0&&(Rt=1),O.morphAttributes.normal!==void 0&&(Rt=2),O.morphAttributes.color!==void 0&&(Rt=3);let W,J,ct,_t;if($){const jt=xn[$];W=jt.vertexShader,J=jt.fragmentShader}else W=_.vertexShader,J=_.fragmentShader,l.update(_),ct=l.getVertexShaderID(_),_t=l.getFragmentShaderID(_);const vt=i.getRenderTarget(),mt=D.isInstancedMesh===!0,Ft=D.isBatchedMesh===!0,Pt=!!_.map,U=!!_.matcap,de=!!K,bt=!!_.aoMap,Ut=!!_.lightMap,Et=!!_.bumpMap,oe=!!_.normalMap,Bt=!!_.displacementMap,b=!!_.emissiveMap,M=!!_.metalnessMap,z=!!_.roughnessMap,st=_.anisotropy>0,Q=_.clearcoat>0,it=_.iridescence>0,Mt=_.sheen>0,ut=_.transmission>0,gt=st&&!!_.anisotropyMap,Lt=Q&&!!_.clearcoatMap,zt=Q&&!!_.clearcoatNormalMap,et=Q&&!!_.clearcoatRoughnessMap,Qt=it&&!!_.iridescenceMap,Wt=it&&!!_.iridescenceThicknessMap,Nt=Mt&&!!_.sheenColorMap,At=Mt&&!!_.sheenRoughnessMap,ft=!!_.specularMap,Ht=!!_.specularColorMap,L=!!_.specularIntensityMap,at=ut&&!!_.transmissionMap,dt=ut&&!!_.thicknessMap,wt=!!_.gradientMap,w=!!_.alphaMap,rt=_.alphaTest>0,nt=!!_.alphaHash,St=!!_.extensions;let Ct=Zn;_.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const Zt={isWebGL2:u,shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:W,fragmentShader:J,defines:_.defines,customVertexShaderID:ct,customFragmentShaderID:_t,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ft,instancing:mt,instancingColor:mt&&D.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Bn,alphaToCoverage:!!_.alphaToCoverage,map:Pt,matcap:U,envMap:de,envMapMode:de&&K.mapping,envMapCubeUVHeight:H,aoMap:bt,lightMap:Ut,bumpMap:Et,normalMap:oe,displacementMap:m&&Bt,emissiveMap:b,normalMapObjectSpace:oe&&_.normalMapType===Td,normalMapTangentSpace:oe&&_.normalMapType===wo,metalnessMap:M,roughnessMap:z,anisotropy:st,anisotropyMap:gt,clearcoat:Q,clearcoatMap:Lt,clearcoatNormalMap:zt,clearcoatRoughnessMap:et,iridescence:it,iridescenceMap:Qt,iridescenceThicknessMap:Wt,sheen:Mt,sheenColorMap:Nt,sheenRoughnessMap:At,specularMap:ft,specularColorMap:Ht,specularIntensityMap:L,transmission:ut,transmissionMap:at,thicknessMap:dt,gradientMap:wt,opaque:_.transparent===!1&&_.blending===Qi&&_.alphaToCoverage===!1,alphaMap:w,alphaTest:rt,alphaHash:nt,combine:_.combine,mapUv:Pt&&p(_.map.channel),aoMapUv:bt&&p(_.aoMap.channel),lightMapUv:Ut&&p(_.lightMap.channel),bumpMapUv:Et&&p(_.bumpMap.channel),normalMapUv:oe&&p(_.normalMap.channel),displacementMapUv:Bt&&p(_.displacementMap.channel),emissiveMapUv:b&&p(_.emissiveMap.channel),metalnessMapUv:M&&p(_.metalnessMap.channel),roughnessMapUv:z&&p(_.roughnessMap.channel),anisotropyMapUv:gt&&p(_.anisotropyMap.channel),clearcoatMapUv:Lt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:zt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:At&&p(_.sheenRoughnessMap.channel),specularMapUv:ft&&p(_.specularMap.channel),specularColorMapUv:Ht&&p(_.specularColorMap.channel),specularIntensityMapUv:L&&p(_.specularIntensityMap.channel),transmissionMapUv:at&&p(_.transmissionMap.channel),thicknessMapUv:dt&&p(_.thicknessMap.channel),alphaMapUv:w&&p(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(oe||st),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Pt||w),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Rt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pt&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:St&&_.extensions.derivatives===!0,extensionFragDepth:St&&_.extensions.fragDepth===!0,extensionDrawBuffers:St&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:St&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:St&&_.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function y(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)T.push(F),T.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(v(T,_),S(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function v(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function S(_,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),_.push(a.mask)}function P(_){const T=x[_.type];let F;if(T){const q=xn[T];F=df.clone(q.uniforms)}else F=_.uniforms;return F}function R(_,T){let F;for(let q=0,D=h.length;q<D;q++){const B=h[q];if(B.cacheKey===T){F=B,++F.usedTimes;break}}return F===void 0&&(F=new A_(i,T,_,s),h.push(F)),F}function A(_){if(--_.usedTimes===0){const T=h.indexOf(_);h[T]=h[h.length-1],h.pop(),_.destroy()}}function G(_){l.remove(_)}function j(){l.dispose()}return{getParameters:f,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:A,releaseShaderCache:G,programs:h,dispose:j}}function P_(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function D_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _c(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,m,g,x,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=p),t++,f}function a(u,d,m,g,x,p){const f=o(u,d,m,g,x,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):e.push(f)}function l(u,d,m,g,x,p){const f=o(u,d,m,g,x,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||D_),n.length>1&&n.sort(d||gc),r.length>1&&r.sort(d||gc)}function h(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function I_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new _c,i.set(n,[o])):r>=s.length?(o=new _c,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function U_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new xt};break;case"SpotLight":e={position:new I,direction:new I,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function N_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let O_=0;function F_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function B_(i,t){const e=new U_,n=N_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new I);const s=new I,o=new ge,a=new ge;function l(h,u){let d=0,m=0,g=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let x=0,p=0,f=0,y=0,v=0,S=0,P=0,R=0,A=0,G=0,j=0;h.sort(F_);const _=u===!0?Math.PI:1;for(let F=0,q=h.length;F<q;F++){const D=h[F],B=D.color,O=D.intensity,Y=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=B.r*O*_,m+=B.g*O*_,g+=B.b*O*_;else if(D.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(D.sh.coefficients[H],O);j++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*_),D.castShadow){const $=D.shadow,Z=n.get(D);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,r.directionalShadow[x]=Z,r.directionalShadowMap[x]=K,r.directionalShadowMatrix[x]=D.shadow.matrix,S++}r.directional[x]=H,x++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(B).multiplyScalar(O*_),H.distance=Y,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,r.spot[f]=H;const $=D.shadow;if(D.map&&(r.spotLightMap[A]=D.map,A++,$.updateMatrices(D),D.castShadow&&G++),r.spotLightMatrix[f]=$.matrix,D.castShadow){const Z=n.get(D);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,r.spotShadow[f]=Z,r.spotShadowMap[f]=K,R++}f++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(B).multiplyScalar(O),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),r.rectArea[y]=H,y++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*_),H.distance=D.distance,H.decay=D.decay,D.castShadow){const $=D.shadow,Z=n.get(D);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,r.pointShadow[p]=Z,r.pointShadowMap[p]=K,r.pointShadowMatrix[p]=D.shadow.matrix,P++}r.point[p]=H,p++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(O*_),H.groundColor.copy(D.groundColor).multiplyScalar(O*_),r.hemi[v]=H,v++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ht.LTC_FLOAT_1,r.rectAreaLTC2=ht.LTC_FLOAT_2):(r.rectAreaLTC1=ht.LTC_HALF_1,r.rectAreaLTC2=ht.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ht.LTC_FLOAT_1,r.rectAreaLTC2=ht.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ht.LTC_HALF_1,r.rectAreaLTC2=ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==x||T.pointLength!==p||T.spotLength!==f||T.rectAreaLength!==y||T.hemiLength!==v||T.numDirectionalShadows!==S||T.numPointShadows!==P||T.numSpotShadows!==R||T.numSpotMaps!==A||T.numLightProbes!==j)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=y,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+A-G,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=j,T.directionalLength=x,T.pointLength=p,T.spotLength=f,T.rectAreaLength=y,T.hemiLength=v,T.numDirectionalShadows=S,T.numPointShadows=P,T.numSpotShadows=R,T.numSpotMaps=A,T.numLightProbes=j,r.version=O_++)}function c(h,u){let d=0,m=0,g=0,x=0,p=0;const f=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const S=h[y];if(S.isDirectionalLight){const P=r.directional[d];P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(f),d++}else if(S.isSpotLight){const P=r.spot[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const P=r.rectArea[x];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function vc(i,t){const e=new B_(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function z_(i,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new vc(i,t),e.set(s,[l])):o>=a.length?(l=new vc(i,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class G_ extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class H_ extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const k_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
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
}`;function W_(i,t,e){let n=new Po;const r=new yt,s=new yt,o=new Re,a=new G_({depthPacking:bd}),l=new H_,c={},h=e.maxTextureSize,u={[ei]:je,[je]:ei,[Dn]:Dn},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:k_,fragmentShader:V_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let f=this.type;this.render=function(R,A,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const j=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Kn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const q=f!==Cn&&this.type===Cn,D=f===Cn&&this.type!==Cn;for(let B=0,O=R.length;B<O;B++){const Y=R[B],K=Y.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const H=K.getFrameExtents();if(r.multiply(H),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/H.x),r.x=s.x*H.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/H.y),r.y=s.y*H.y,K.mapSize.y=s.y)),K.map===null||q===!0||D===!0){const Z=this.type!==Cn?{minFilter:me,magFilter:me}:{};K.map!==null&&K.map.dispose(),K.map=new yi(r.x,r.y,Z),K.map.texture.name=Y.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const $=K.getViewportCount();for(let Z=0;Z<$;Z++){const lt=K.getViewport(Z);o.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),F.viewport(o),K.updateMatrices(Y,Z),n=K.getFrustum(),S(A,G,K.camera,Y,this.type)}K.isPointLightShadow!==!0&&this.type===Cn&&y(K,G),K.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(j,_,T)};function y(R,A){const G=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new yi(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,G,d,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,G,m,x,null)}function v(R,A,G,j){let _=null;const T=G.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)_=T;else if(_=G.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=_.uuid,q=A.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let B=D[q];B===void 0&&(B=_.clone(),D[q]=B,A.addEventListener("dispose",P)),_=B}if(_.visible=A.visible,_.wireframe=A.wireframe,j===Cn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,G.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=G}return _}function S(R,A,G,j,_){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===Cn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld);const q=t.update(R),D=R.material;if(Array.isArray(D)){const B=q.groups;for(let O=0,Y=B.length;O<Y;O++){const K=B[O],H=D[K.materialIndex];if(H&&H.visible){const $=v(R,H,j,_);R.onBeforeShadow(i,R,A,G,q,$,K),i.renderBufferDirect(G,null,q,$,R,K),R.onAfterShadow(i,R,A,G,q,$,K)}}}else if(D.visible){const B=v(R,D,j,_);R.onBeforeShadow(i,R,A,G,q,B,null),i.renderBufferDirect(G,null,q,B,R,null),R.onAfterShadow(i,R,A,G,q,B,null)}}const F=R.children;for(let q=0,D=F.length;q<D;q++)S(F[q],A,G,j,_)}function P(R){R.target.removeEventListener("dispose",P);for(const G in c){const j=c[G],_=R.target.uuid;_ in j&&(j[_].dispose(),delete j[_])}}}function X_(i,t,e){const n=e.isWebGL2;function r(){let w=!1;const rt=new Re;let nt=null;const St=new Re(0,0,0,0);return{setMask:function(Ct){nt!==Ct&&!w&&(i.colorMask(Ct,Ct,Ct,Ct),nt=Ct)},setLocked:function(Ct){w=Ct},setClear:function(Ct,Zt,jt,ie,Ce){Ce===!0&&(Ct*=ie,Zt*=ie,jt*=ie),rt.set(Ct,Zt,jt,ie),St.equals(rt)===!1&&(i.clearColor(Ct,Zt,jt,ie),St.copy(rt))},reset:function(){w=!1,nt=null,St.set(-1,0,0,0)}}}function s(){let w=!1,rt=null,nt=null,St=null;return{setTest:function(Ct){Ct?mt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(Ct){rt!==Ct&&!w&&(i.depthMask(Ct),rt=Ct)},setFunc:function(Ct){if(nt!==Ct){switch(Ct){case td:i.depthFunc(i.NEVER);break;case ed:i.depthFunc(i.ALWAYS);break;case nd:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case id:i.depthFunc(i.EQUAL);break;case rd:i.depthFunc(i.GEQUAL);break;case sd:i.depthFunc(i.GREATER);break;case ad:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=Ct}},setLocked:function(Ct){w=Ct},setClear:function(Ct){St!==Ct&&(i.clearDepth(Ct),St=Ct)},reset:function(){w=!1,rt=null,nt=null,St=null}}}function o(){let w=!1,rt=null,nt=null,St=null,Ct=null,Zt=null,jt=null,ie=null,Ce=null;return{setTest:function(Jt){w||(Jt?mt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(Jt){rt!==Jt&&!w&&(i.stencilMask(Jt),rt=Jt)},setFunc:function(Jt,fe,ke){(nt!==Jt||St!==fe||Ct!==ke)&&(i.stencilFunc(Jt,fe,ke),nt=Jt,St=fe,Ct=ke)},setOp:function(Jt,fe,ke){(Zt!==Jt||jt!==fe||ie!==ke)&&(i.stencilOp(Jt,fe,ke),Zt=Jt,jt=fe,ie=ke)},setLocked:function(Jt){w=Jt},setClear:function(Jt){Ce!==Jt&&(i.clearStencil(Jt),Ce=Jt)},reset:function(){w=!1,rt=null,nt=null,St=null,Ct=null,Zt=null,jt=null,ie=null,Ce=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,x=[],p=null,f=!1,y=null,v=null,S=null,P=null,R=null,A=null,G=null,j=new xt(0,0,0),_=0,T=!1,F=null,q=null,D=null,B=null,O=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),K=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=H>=2);let Z=null,lt={};const Rt=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),J=new Re().fromArray(Rt),ct=new Re().fromArray(W);function _t(w,rt,nt,St){const Ct=new Uint8Array(4),Zt=i.createTexture();i.bindTexture(w,Zt),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<nt;jt++)n&&(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)?i.texImage3D(rt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(rt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return Zt}const vt={};vt[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(vt[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),mt(i.DEPTH_TEST),l.setFunc(Is),Bt(!1),b(Qo),mt(i.CULL_FACE),Et(Kn);function mt(w){d[w]!==!0&&(i.enable(w),d[w]=!0)}function Ft(w){d[w]!==!1&&(i.disable(w),d[w]=!1)}function Pt(w,rt){return m[w]!==rt?(i.bindFramebuffer(w,rt),m[w]=rt,n&&(w===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=rt),w===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=rt)),!0):!1}function U(w,rt){let nt=x,St=!1;if(w)if(nt=g.get(rt),nt===void 0&&(nt=[],g.set(rt,nt)),w.isWebGLMultipleRenderTargets){const Ct=w.texture;if(nt.length!==Ct.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Zt=0,jt=Ct.length;Zt<jt;Zt++)nt[Zt]=i.COLOR_ATTACHMENT0+Zt;nt.length=Ct.length,St=!0}}else nt[0]!==i.COLOR_ATTACHMENT0&&(nt[0]=i.COLOR_ATTACHMENT0,St=!0);else nt[0]!==i.BACK&&(nt[0]=i.BACK,St=!0);St&&(e.isWebGL2?i.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function de(w){return p!==w?(i.useProgram(w),p=w,!0):!1}const bt={[di]:i.FUNC_ADD,[zu]:i.FUNC_SUBTRACT,[Gu]:i.FUNC_REVERSE_SUBTRACT};if(n)bt[nl]=i.MIN,bt[il]=i.MAX;else{const w=t.get("EXT_blend_minmax");w!==null&&(bt[nl]=w.MIN_EXT,bt[il]=w.MAX_EXT)}const Ut={[Hu]:i.ZERO,[ku]:i.ONE,[Vu]:i.SRC_COLOR,[eo]:i.SRC_ALPHA,[ju]:i.SRC_ALPHA_SATURATE,[Yu]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[$u]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[Ku]:i.CONSTANT_COLOR,[Zu]:i.ONE_MINUS_CONSTANT_COLOR,[Ju]:i.CONSTANT_ALPHA,[Qu]:i.ONE_MINUS_CONSTANT_ALPHA};function Et(w,rt,nt,St,Ct,Zt,jt,ie,Ce,Jt){if(w===Kn){f===!0&&(Ft(i.BLEND),f=!1);return}if(f===!1&&(mt(i.BLEND),f=!0),w!==Bu){if(w!==y||Jt!==T){if((v!==di||R!==di)&&(i.blendEquation(i.FUNC_ADD),v=di,R=di),Jt)switch(w){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case to:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case to:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}S=null,P=null,A=null,G=null,j.set(0,0,0),_=0,y=w,T=Jt}return}Ct=Ct||rt,Zt=Zt||nt,jt=jt||St,(rt!==v||Ct!==R)&&(i.blendEquationSeparate(bt[rt],bt[Ct]),v=rt,R=Ct),(nt!==S||St!==P||Zt!==A||jt!==G)&&(i.blendFuncSeparate(Ut[nt],Ut[St],Ut[Zt],Ut[jt]),S=nt,P=St,A=Zt,G=jt),(ie.equals(j)===!1||Ce!==_)&&(i.blendColor(ie.r,ie.g,ie.b,Ce),j.copy(ie),_=Ce),y=w,T=!1}function oe(w,rt){w.side===Dn?Ft(i.CULL_FACE):mt(i.CULL_FACE);let nt=w.side===je;rt&&(nt=!nt),Bt(nt),w.blending===Qi&&w.transparent===!1?Et(Kn):Et(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const St=w.stencilWrite;c.setTest(St),St&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),z(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(w){F!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),F=w)}function b(w){w!==Nu?(mt(i.CULL_FACE),w!==q&&(w===Qo?i.cullFace(i.BACK):w===Ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),q=w}function M(w){w!==D&&(K&&i.lineWidth(w),D=w)}function z(w,rt,nt){w?(mt(i.POLYGON_OFFSET_FILL),(B!==rt||O!==nt)&&(i.polygonOffset(rt,nt),B=rt,O=nt)):Ft(i.POLYGON_OFFSET_FILL)}function st(w){w?mt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function Q(w){w===void 0&&(w=i.TEXTURE0+Y-1),Z!==w&&(i.activeTexture(w),Z=w)}function it(w,rt,nt){nt===void 0&&(Z===null?nt=i.TEXTURE0+Y-1:nt=Z);let St=lt[nt];St===void 0&&(St={type:void 0,texture:void 0},lt[nt]=St),(St.type!==w||St.texture!==rt)&&(Z!==nt&&(i.activeTexture(nt),Z=nt),i.bindTexture(w,rt||vt[w]),St.type=w,St.texture=rt)}function Mt(){const w=lt[Z];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function ut(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Lt(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function zt(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Qt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Nt(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ft(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ht(w){J.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),J.copy(w))}function L(w){ct.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),ct.copy(w))}function at(w,rt){let nt=u.get(rt);nt===void 0&&(nt=new WeakMap,u.set(rt,nt));let St=nt.get(w);St===void 0&&(St=i.getUniformBlockIndex(rt,w.name),nt.set(w,St))}function dt(w,rt){const St=u.get(rt).get(w);h.get(rt)!==St&&(i.uniformBlockBinding(rt,St,w.__bindingPointIndex),h.set(rt,St))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,lt={},m={},g=new WeakMap,x=[],p=null,f=!1,y=null,v=null,S=null,P=null,R=null,A=null,G=null,j=new xt(0,0,0),_=0,T=!1,F=null,q=null,D=null,B=null,O=null,J.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:mt,disable:Ft,bindFramebuffer:Pt,drawBuffers:U,useProgram:de,setBlending:Et,setMaterial:oe,setFlipSided:Bt,setCullFace:b,setLineWidth:M,setPolygonOffset:z,setScissorTest:st,activeTexture:Q,bindTexture:it,unbindTexture:Mt,compressedTexImage2D:ut,compressedTexImage3D:gt,texImage2D:At,texImage3D:ft,updateUBOMapping:at,uniformBlockBinding:dt,texStorage2D:Wt,texStorage3D:Nt,texSubImage2D:Lt,texSubImage3D:zt,compressedTexSubImage2D:et,compressedTexSubImage3D:Qt,scissor:Ht,viewport:L,reset:wt}}function q_(i,t,e,n,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return m?new OffscreenCanvas(b,M):Fr("canvas")}function x(b,M,z,st){let Q=1;if((b.width>st||b.height>st)&&(Q=st/Math.max(b.width,b.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const it=M?Bs:Math.floor,Mt=it(Q*b.width),ut=it(Q*b.height);u===void 0&&(u=g(Mt,ut));const gt=z?g(Mt,ut):u;return gt.width=Mt,gt.height=ut,gt.getContext("2d").drawImage(b,0,0,Mt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Mt+"x"+ut+")."),gt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return lo(b.width)&&lo(b.height)}function f(b){return a?!1:b.wrapS!==fn||b.wrapT!==fn||b.minFilter!==me&&b.minFilter!==$e}function y(b,M){return b.generateMipmaps&&M&&b.minFilter!==me&&b.minFilter!==$e}function v(b){i.generateMipmap(b)}function S(b,M,z,st,Q=!1){if(a===!1)return M;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let it=M;if(M===i.RED&&(z===i.FLOAT&&(it=i.R32F),z===i.HALF_FLOAT&&(it=i.R16F),z===i.UNSIGNED_BYTE&&(it=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(it=i.R8UI),z===i.UNSIGNED_SHORT&&(it=i.R16UI),z===i.UNSIGNED_INT&&(it=i.R32UI),z===i.BYTE&&(it=i.R8I),z===i.SHORT&&(it=i.R16I),z===i.INT&&(it=i.R32I)),M===i.RG&&(z===i.FLOAT&&(it=i.RG32F),z===i.HALF_FLOAT&&(it=i.RG16F),z===i.UNSIGNED_BYTE&&(it=i.RG8)),M===i.RGBA){const Mt=Q?Us:ee.getTransfer(st);z===i.FLOAT&&(it=i.RGBA32F),z===i.HALF_FLOAT&&(it=i.RGBA16F),z===i.UNSIGNED_BYTE&&(it=Mt===le?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function P(b,M,z){return y(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==me&&b.minFilter!==$e?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function R(b){return b===me||b===rl||b===xr?i.NEAREST:i.LINEAR}function A(b){const M=b.target;M.removeEventListener("dispose",A),j(M),M.isVideoTexture&&h.delete(M)}function G(b){const M=b.target;M.removeEventListener("dispose",G),T(M)}function j(b){const M=n.get(b);if(M.__webglInit===void 0)return;const z=b.source,st=d.get(z);if(st){const Q=st[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&_(b),Object.keys(st).length===0&&d.delete(z)}n.remove(b)}function _(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const z=b.source,st=d.get(z);delete st[M.__cacheKey],o.memory.textures--}function T(b){const M=b.texture,z=n.get(b),st=n.get(M);if(st.__webglTexture!==void 0&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(z.__webglFramebuffer[Q]))for(let it=0;it<z.__webglFramebuffer[Q].length;it++)i.deleteFramebuffer(z.__webglFramebuffer[Q][it]);else i.deleteFramebuffer(z.__webglFramebuffer[Q]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[Q])}else{if(Array.isArray(z.__webglFramebuffer))for(let Q=0;Q<z.__webglFramebuffer.length;Q++)i.deleteFramebuffer(z.__webglFramebuffer[Q]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Q=0;Q<z.__webglColorRenderbuffer.length;Q++)z.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[Q]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Q=0,it=M.length;Q<it;Q++){const Mt=n.get(M[Q]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(b)}let F=0;function q(){F=0}function D(){const b=F;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),F+=1,b}function B(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function O(b,M){const z=n.get(b);if(b.isVideoTexture&&oe(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const st=b.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,b,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function Y(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){J(z,b,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function K(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){J(z,b,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function H(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){ct(z,b,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const $={[Ur]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},Z={[me]:i.NEAREST,[rl]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},lt={[Ad]:i.NEVER,[Dd]:i.ALWAYS,[wd]:i.LESS,[Th]:i.LEQUAL,[Rd]:i.EQUAL,[Pd]:i.GEQUAL,[Cd]:i.GREATER,[Ld]:i.NOTEQUAL};function Rt(b,M,z){if(M.type===In&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===$e||M.magFilter===fa||M.magFilter===xr||M.magFilter===mi||M.minFilter===$e||M.minFilter===fa||M.minFilter===xr||M.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),z?(i.texParameteri(b,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,$[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Z[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Z[M.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==fn||M.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,R(M.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==me&&M.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,lt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===me||M.minFilter!==xr&&M.minFilter!==mi||M.type===In&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===Nr&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(b,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function W(b,M){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",A));const st=M.source;let Q=d.get(st);Q===void 0&&(Q={},d.set(st,Q));const it=B(M);if(it!==b.__cacheKey){Q[it]===void 0&&(Q[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[it].usedTimes++;const Mt=Q[b.__cacheKey];Mt!==void 0&&(Q[b.__cacheKey].usedTimes--,Mt.usedTimes===0&&_(M)),b.__cacheKey=it,b.__webglTexture=Q[it].texture}return z}function J(b,M,z){let st=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(st=i.TEXTURE_3D);const Q=W(b,M),it=M.source;e.bindTexture(st,b.__webglTexture,i.TEXTURE0+z);const Mt=n.get(it);if(it.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);const ut=ee.getPrimaries(ee.workingColorSpace),gt=M.colorSpace===on?null:ee.getPrimaries(M.colorSpace),Lt=M.colorSpace===on||ut===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const zt=f(M)&&p(M.image)===!1;let et=x(M.image,zt,!1,r.maxTextureSize);et=Bt(M,et);const Qt=p(et)||a,Wt=s.convert(M.format,M.colorSpace);let Nt=s.convert(M.type),At=S(M.internalFormat,Wt,Nt,M.colorSpace,M.isVideoTexture);Rt(st,M,Qt);let ft;const Ht=M.mipmaps,L=a&&M.isVideoTexture!==!0&&At!==Eh,at=Mt.__version===void 0||Q===!0,dt=it.dataReady,wt=P(M,et,Qt);if(M.isDepthTexture)At=i.DEPTH_COMPONENT,a?M.type===In?At=i.DEPTH_COMPONENT32F:M.type===jn?At=i.DEPTH_COMPONENT24:M.type===_i?At=i.DEPTH24_STENCIL8:At=i.DEPTH_COMPONENT16:M.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===vi&&At===i.DEPTH_COMPONENT&&M.type!==Ao&&M.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=jn,Nt=s.convert(M.type)),M.format===cr&&At===i.DEPTH_COMPONENT&&(At=i.DEPTH_STENCIL,M.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=_i,Nt=s.convert(M.type))),at&&(L?e.texStorage2D(i.TEXTURE_2D,1,At,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,At,et.width,et.height,0,Wt,Nt,null));else if(M.isDataTexture)if(Ht.length>0&&Qt){L&&at&&e.texStorage2D(i.TEXTURE_2D,wt,At,Ht[0].width,Ht[0].height);for(let w=0,rt=Ht.length;w<rt;w++)ft=Ht[w],L?dt&&e.texSubImage2D(i.TEXTURE_2D,w,0,0,ft.width,ft.height,Wt,Nt,ft.data):e.texImage2D(i.TEXTURE_2D,w,At,ft.width,ft.height,0,Wt,Nt,ft.data);M.generateMipmaps=!1}else L?(at&&e.texStorage2D(i.TEXTURE_2D,wt,At,et.width,et.height),dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,Wt,Nt,et.data)):e.texImage2D(i.TEXTURE_2D,0,At,et.width,et.height,0,Wt,Nt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,At,Ht[0].width,Ht[0].height,et.depth);for(let w=0,rt=Ht.length;w<rt;w++)ft=Ht[w],M.format!==pn?Wt!==null?L?dt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,w,0,0,0,ft.width,ft.height,et.depth,Wt,ft.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,w,At,ft.width,ft.height,et.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,w,0,0,0,ft.width,ft.height,et.depth,Wt,Nt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,w,At,ft.width,ft.height,et.depth,0,Wt,Nt,ft.data)}else{L&&at&&e.texStorage2D(i.TEXTURE_2D,wt,At,Ht[0].width,Ht[0].height);for(let w=0,rt=Ht.length;w<rt;w++)ft=Ht[w],M.format!==pn?Wt!==null?L?dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,w,0,0,ft.width,ft.height,Wt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,w,At,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?dt&&e.texSubImage2D(i.TEXTURE_2D,w,0,0,ft.width,ft.height,Wt,Nt,ft.data):e.texImage2D(i.TEXTURE_2D,w,At,ft.width,ft.height,0,Wt,Nt,ft.data)}else if(M.isDataArrayTexture)L?(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,At,et.width,et.height,et.depth),dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Wt,Nt,et.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,et.width,et.height,et.depth,0,Wt,Nt,et.data);else if(M.isData3DTexture)L?(at&&e.texStorage3D(i.TEXTURE_3D,wt,At,et.width,et.height,et.depth),dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Wt,Nt,et.data)):e.texImage3D(i.TEXTURE_3D,0,At,et.width,et.height,et.depth,0,Wt,Nt,et.data);else if(M.isFramebufferTexture){if(at)if(L)e.texStorage2D(i.TEXTURE_2D,wt,At,et.width,et.height);else{let w=et.width,rt=et.height;for(let nt=0;nt<wt;nt++)e.texImage2D(i.TEXTURE_2D,nt,At,w,rt,0,Wt,Nt,null),w>>=1,rt>>=1}}else if(Ht.length>0&&Qt){L&&at&&e.texStorage2D(i.TEXTURE_2D,wt,At,Ht[0].width,Ht[0].height);for(let w=0,rt=Ht.length;w<rt;w++)ft=Ht[w],L?dt&&e.texSubImage2D(i.TEXTURE_2D,w,0,0,Wt,Nt,ft):e.texImage2D(i.TEXTURE_2D,w,At,Wt,Nt,ft);M.generateMipmaps=!1}else L?(at&&e.texStorage2D(i.TEXTURE_2D,wt,At,et.width,et.height),dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,Nt,et)):e.texImage2D(i.TEXTURE_2D,0,At,Wt,Nt,et);y(M,Qt)&&v(st),Mt.__version=it.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ct(b,M,z){if(M.image.length!==6)return;const st=W(b,M),Q=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);const it=n.get(Q);if(Q.version!==it.__version||st===!0){e.activeTexture(i.TEXTURE0+z);const Mt=ee.getPrimaries(ee.workingColorSpace),ut=M.colorSpace===on?null:ee.getPrimaries(M.colorSpace),gt=M.colorSpace===on||Mt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Lt=M.isCompressedTexture||M.image[0].isCompressedTexture,zt=M.image[0]&&M.image[0].isDataTexture,et=[];for(let w=0;w<6;w++)!Lt&&!zt?et[w]=x(M.image[w],!1,!0,r.maxCubemapSize):et[w]=zt?M.image[w].image:M.image[w],et[w]=Bt(M,et[w]);const Qt=et[0],Wt=p(Qt)||a,Nt=s.convert(M.format,M.colorSpace),At=s.convert(M.type),ft=S(M.internalFormat,Nt,At,M.colorSpace),Ht=a&&M.isVideoTexture!==!0,L=it.__version===void 0||st===!0,at=Q.dataReady;let dt=P(M,Qt,Wt);Rt(i.TEXTURE_CUBE_MAP,M,Wt);let wt;if(Lt){Ht&&L&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,ft,Qt.width,Qt.height);for(let w=0;w<6;w++){wt=et[w].mipmaps;for(let rt=0;rt<wt.length;rt++){const nt=wt[rt];M.format!==pn?Nt!==null?Ht?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,rt,0,0,nt.width,nt.height,Nt,nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,rt,ft,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,rt,0,0,nt.width,nt.height,Nt,At,nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,rt,ft,nt.width,nt.height,0,Nt,At,nt.data)}}}else{wt=M.mipmaps,Ht&&L&&(wt.length>0&&dt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,ft,et[0].width,et[0].height));for(let w=0;w<6;w++)if(zt){Ht?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,0,0,et[w].width,et[w].height,Nt,At,et[w].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,ft,et[w].width,et[w].height,0,Nt,At,et[w].data);for(let rt=0;rt<wt.length;rt++){const St=wt[rt].image[w].image;Ht?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,rt+1,0,0,St.width,St.height,Nt,At,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,rt+1,ft,St.width,St.height,0,Nt,At,St.data)}}else{Ht?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,0,0,Nt,At,et[w]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,ft,Nt,At,et[w]);for(let rt=0;rt<wt.length;rt++){const nt=wt[rt];Ht?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,rt+1,0,0,Nt,At,nt.image[w]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+w,rt+1,ft,Nt,At,nt.image[w])}}}y(M,Wt)&&v(i.TEXTURE_CUBE_MAP),it.__version=Q.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function _t(b,M,z,st,Q,it){const Mt=s.convert(z.format,z.colorSpace),ut=s.convert(z.type),gt=S(z.internalFormat,Mt,ut,z.colorSpace);if(!n.get(M).__hasExternalTextures){const zt=Math.max(1,M.width>>it),et=Math.max(1,M.height>>it);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,it,gt,zt,et,M.depth,0,Mt,ut,null):e.texImage2D(Q,it,gt,zt,et,0,Mt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Et(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,Q,n.get(z).__webglTexture,0,Ut(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,Q,n.get(z).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(b,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let st=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||Et(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===In?st=i.DEPTH_COMPONENT32F:Q.type===jn&&(st=i.DEPTH_COMPONENT24));const it=Ut(M);Et(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,st,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,it,st,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,st,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const st=Ut(M);z&&Et(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,M.width,M.height):Et(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const st=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<st.length;Q++){const it=st[Q],Mt=s.convert(it.format,it.colorSpace),ut=s.convert(it.type),gt=S(it.internalFormat,Mt,ut,it.colorSpace),Lt=Ut(M);z&&Et(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,gt,M.width,M.height):Et(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,gt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,gt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);const st=n.get(M.depthTexture).__webglTexture,Q=Ut(M);if(M.depthTexture.format===vi)Et(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(M.depthTexture.format===cr)Et(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Ft(b){const M=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");mt(M.__webglFramebuffer,b)}else if(z){M.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[st]),M.__webglDepthbuffer[st]=i.createRenderbuffer(),vt(M.__webglDepthbuffer[st],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),vt(M.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(b,M,z){const st=n.get(b);M!==void 0&&_t(st.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ft(b)}function U(b){const M=b.texture,z=n.get(b),st=n.get(M);b.addEventListener("dispose",G),b.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=M.version,o.memory.textures++);const Q=b.isWebGLCubeRenderTarget===!0,it=b.isWebGLMultipleRenderTargets===!0,Mt=p(b)||a;if(Q){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let gt=0;gt<M.mipmaps.length;gt++)z.__webglFramebuffer[ut][gt]=i.createFramebuffer()}else z.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)z.__webglFramebuffer[ut]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(it)if(r.drawBuffers){const ut=b.texture;for(let gt=0,Lt=ut.length;gt<Lt;gt++){const zt=n.get(ut[gt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Et(b)===!1){const ut=it?M:[M];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let gt=0;gt<ut.length;gt++){const Lt=ut[gt];z.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[gt]);const zt=s.convert(Lt.format,Lt.colorSpace),et=s.convert(Lt.type),Qt=S(Lt.internalFormat,zt,et,Lt.colorSpace,b.isXRRenderTarget===!0),Wt=Ut(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Qt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,z.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(z.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,M,Mt);for(let ut=0;ut<6;ut++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)_t(z.__webglFramebuffer[ut][gt],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else _t(z.__webglFramebuffer[ut],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);y(M,Mt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){const ut=b.texture;for(let gt=0,Lt=ut.length;gt<Lt;gt++){const zt=ut[gt],et=n.get(zt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Rt(i.TEXTURE_2D,zt,Mt),_t(z.__webglFramebuffer,b,zt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),y(zt,Mt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ut=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,st.__webglTexture),Rt(ut,M,Mt),a&&M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)_t(z.__webglFramebuffer[gt],b,M,i.COLOR_ATTACHMENT0,ut,gt);else _t(z.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,ut,0);y(M,Mt)&&v(ut),e.unbindTexture()}b.depthBuffer&&Ft(b)}function de(b){const M=p(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let st=0,Q=z.length;st<Q;st++){const it=z[st];if(y(it,M)){const Mt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ut=n.get(it).__webglTexture;e.bindTexture(Mt,ut),v(Mt),e.unbindTexture()}}}function bt(b){if(a&&b.samples>0&&Et(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,st=b.height;let Q=i.COLOR_BUFFER_BIT;const it=[],Mt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(b),gt=b.isWebGLMultipleRenderTargets===!0;if(gt)for(let Lt=0;Lt<M.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Lt=0;Lt<M.length;Lt++){it.push(i.COLOR_ATTACHMENT0+Lt),b.depthBuffer&&it.push(Mt);const zt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(zt===!1&&(b.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),gt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[Lt]),zt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Mt])),gt){const et=n.get(M[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,z,st,0,0,z,st,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Lt=0;Lt<M.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[Lt]);const zt=n.get(M[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function Ut(b){return Math.min(r.maxSamples,b.samples)}function Et(b){const M=n.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function oe(b){const M=o.render.frame;h.get(b)!==M&&(h.set(b,M),b.update())}function Bt(b,M){const z=b.colorSpace,st=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===oo||z!==Bn&&z!==on&&(ee.getTransfer(z)===le?a===!1?t.has("EXT_sRGB")===!0&&st===pn?(b.format=oo,b.minFilter=$e,b.generateMipmaps=!1):M=Rh.sRGBToLinear(M):(st!==pn||Q!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=D,this.resetTextureUnits=q,this.setTexture2D=O,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Pt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Et}function Y_(i,t,e){const n=e.isWebGL2;function r(s,o=on){let a;const l=ee.getTransfer(o);if(s===Jn)return i.UNSIGNED_BYTE;if(s===vh)return i.UNSIGNED_SHORT_4_4_4_4;if(s===xh)return i.UNSIGNED_SHORT_5_5_5_1;if(s===md)return i.BYTE;if(s===gd)return i.SHORT;if(s===Ao)return i.UNSIGNED_SHORT;if(s===_h)return i.INT;if(s===jn)return i.UNSIGNED_INT;if(s===In)return i.FLOAT;if(s===Nr)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===_d)return i.ALPHA;if(s===pn)return i.RGBA;if(s===vd)return i.LUMINANCE;if(s===xd)return i.LUMINANCE_ALPHA;if(s===vi)return i.DEPTH_COMPONENT;if(s===cr)return i.DEPTH_STENCIL;if(s===oo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Md)return i.RED;if(s===Mh)return i.RED_INTEGER;if(s===Sd)return i.RG;if(s===Sh)return i.RG_INTEGER;if(s===yh)return i.RGBA_INTEGER;if(s===pa||s===ma||s===ga||s===_a)if(l===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===pa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===pa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ma)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ga)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_a)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sl||s===al||s===ol||s===ll)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===sl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===al)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ol)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ll)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Eh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===cl||s===hl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===cl)return l===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===hl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ul||s===dl||s===fl||s===pl||s===ml||s===gl||s===_l||s===vl||s===xl||s===Ml||s===Sl||s===yl||s===El||s===bl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ul)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ml)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_l)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ml)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===El)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bl)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===va||s===Tl||s===Al)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===va)return l===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Al)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yd||s===wl||s===Rl||s===Cl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===va)return a.COMPRESSED_RED_RGTC1_EXT;if(s===wl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_i?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class $_ extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zi extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class J_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ge,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new ni({extensions:{fragDepth:!0},vertexShader:K_,fragmentShader:Z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pe(new Xr(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Q_ extends Ti{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const x=new J_,p=e.getContextAttributes();let f=null,y=null;const v=[],S=[],P=new yt;let R=null;const A=new rn;A.layers.enable(1),A.viewport=new Re;const G=new rn;G.layers.enable(2),G.viewport=new Re;const j=[A,G],_=new $_;_.layers.enable(1),_.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=v[W];return J===void 0&&(J=new Ha,v[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=v[W];return J===void 0&&(J=new Ha,v[W]=J),J.getGripSpace()},this.getHand=function(W){let J=v[W];return J===void 0&&(J=new Ha,v[W]=J),J.getHandSpace()};function q(W){const J=S.indexOf(W.inputSource);if(J===-1)return;const ct=v[J];ct!==void 0&&(ct.update(W.inputSource,W.frame,c||o),ct.dispatchEvent({type:W.type,data:W.inputSource}))}function D(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",B);for(let W=0;W<v.length;W++){const J=S[W];J!==null&&(S[W]=null,v[W].disconnect(J))}T=null,F=null,x.reset(),t.setRenderTarget(f),m=null,d=null,u=null,r=null,y=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",D),r.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,J),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new yi(m.framebufferWidth,m.framebufferHeight,{format:pn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,ct=null,_t=null;p.depth&&(_t=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?cr:vi,ct=p.stencil?_i:jn);const vt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(vt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new yi(d.textureWidth,d.textureHeight,{format:pn,type:Jn,depthTexture:new zh(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const mt=t.properties.get(y);mt.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Rt.setContext(r),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(W){for(let J=0;J<W.removed.length;J++){const ct=W.removed[J],_t=S.indexOf(ct);_t>=0&&(S[_t]=null,v[_t].disconnect(ct))}for(let J=0;J<W.added.length;J++){const ct=W.added[J];let _t=S.indexOf(ct);if(_t===-1){for(let mt=0;mt<v.length;mt++)if(mt>=S.length){S.push(ct),_t=mt;break}else if(S[mt]===null){S[mt]=ct,_t=mt;break}if(_t===-1)break}const vt=v[_t];vt&&vt.connect(ct)}}const O=new I,Y=new I;function K(W,J,ct){O.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(ct.matrixWorld);const _t=O.distanceTo(Y),vt=J.projectionMatrix.elements,mt=ct.projectionMatrix.elements,Ft=vt[14]/(vt[10]-1),Pt=vt[14]/(vt[10]+1),U=(vt[9]+1)/vt[5],de=(vt[9]-1)/vt[5],bt=(vt[8]-1)/vt[0],Ut=(mt[8]+1)/mt[0],Et=Ft*bt,oe=Ft*Ut,Bt=_t/(-bt+Ut),b=Bt*-bt;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(b),W.translateZ(Bt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const M=Ft+Bt,z=Pt+Bt,st=Et-b,Q=oe+(_t-b),it=U*Pt/z*M,Mt=de*Pt/z*M;W.projectionMatrix.makePerspective(st,Q,it,Mt,M,z),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function H(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;x.texture!==null&&(W.near=x.depthNear,W.far=x.depthFar),_.near=G.near=A.near=W.near,_.far=G.far=A.far=W.far,(T!==_.near||F!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,F=_.far,A.near=T,A.far=F,G.near=T,G.far=F,A.updateProjectionMatrix(),G.updateProjectionMatrix(),W.updateProjectionMatrix());const J=W.parent,ct=_.cameras;H(_,J);for(let _t=0;_t<ct.length;_t++)H(ct[_t],J);ct.length===2?K(_,A,G):_.projectionMatrix.copy(A.projectionMatrix),$(W,_,J)};function $(W,J,ct){ct===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ct.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Or*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null};let Z=null;function lt(W,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const ct=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let _t=!1;ct.length!==_.cameras.length&&(_.cameras.length=0,_t=!0);for(let mt=0;mt<ct.length;mt++){const Ft=ct[mt];let Pt=null;if(m!==null)Pt=m.getViewport(Ft);else{const de=u.getViewSubImage(d,Ft);Pt=de.viewport,mt===0&&(t.setRenderTargetTextures(y,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(y))}let U=j[mt];U===void 0&&(U=new rn,U.layers.enable(mt),U.viewport=new Re,j[mt]=U),U.matrix.fromArray(Ft.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Ft.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),mt===0&&(_.matrix.copy(U.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),_t===!0&&_.cameras.push(U)}const vt=r.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const mt=u.getDepthInformation(ct[0]);mt&&mt.isValid&&mt.texture&&x.init(t,mt,r.renderState)}}for(let ct=0;ct<v.length;ct++){const _t=S[ct],vt=v[ct];_t!==null&&vt!==void 0&&vt.update(_t,J,c||o)}x.render(t,_),Z&&Z(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Rt=new Bh;Rt.setAnimationLoop(lt),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}}function t0(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Nh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,y,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),x(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,y,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===je&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===je&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=t.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=v*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===je&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const y=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function e0(i,t,e,n){let r={},s={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=r[y.id];S===void 0&&(g(y),S=h(y),r[y.id]=S,y.addEventListener("dispose",p));const P=v.program;n.updateUBOMapping(y,P);const R=t.render.frame;s[y.id]!==R&&(d(y),s[y.id]=R)}function h(y){const v=u();y.__bindingPointIndex=v;const S=i.createBuffer(),P=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],S=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,A=S.length;R<A;R++){const G=Array.isArray(S[R])?S[R]:[S[R]];for(let j=0,_=G.length;j<_;j++){const T=G[j];if(m(T,R,j,P)===!0){const F=T.__offset,q=Array.isArray(T.value)?T.value:[T.value];let D=0;for(let B=0;B<q.length;B++){const O=q[B],Y=x(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,F+D,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,v,S,P){const R=y.value,A=v+"_"+S;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const G=P[A];if(typeof R=="number"||typeof R=="boolean"){if(G!==R)return P[A]=R,!0}else if(G.equals(R)===!1)return G.copy(R),!0}return!1}function g(y){const v=y.uniforms;let S=0;const P=16;for(let A=0,G=v.length;A<G;A++){const j=Array.isArray(v[A])?v[A]:[v[A]];for(let _=0,T=j.length;_<T;_++){const F=j[_],q=Array.isArray(F.value)?F.value:[F.value];for(let D=0,B=q.length;D<B;D++){const O=q[D],Y=x(O),K=S%P;K!==0&&P-K<Y.boundary&&(S+=P-K),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=Y.storage}}}const R=S%P;return R>0&&(S+=P-R),y.__size=S,y.__cache={},this}function x(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Uo{constructor(t={}){const{canvas:e=Yd(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const v=this;let S=!1,P=0,R=0,A=null,G=-1,j=null;const _=new Re,T=new Re;let F=null;const q=new xt(0);let D=0,B=e.width,O=e.height,Y=1,K=null,H=null;const $=new Re(0,0,B,O),Z=new Re(0,0,B,O);let lt=!1;const Rt=new Po;let W=!1,J=!1,ct=null;const _t=new ge,vt=new yt,mt=new I,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return A===null?Y:1}let U=n;function de(E,N){for(let V=0;V<E.length;V++){const X=E[V],k=e.getContext(X,N);if(k!==null)return k}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bo}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",w,!1),e.addEventListener("webglcontextcreationerror",rt,!1),U===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),U=de(N,E),U===null)throw de(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let bt,Ut,Et,oe,Bt,b,M,z,st,Q,it,Mt,ut,gt,Lt,zt,et,Qt,Wt,Nt,At,ft,Ht,L;function at(){bt=new lg(U),Ut=new ng(U,bt,t),bt.init(Ut),ft=new Y_(U,bt,Ut),Et=new X_(U,bt,Ut),oe=new ug(U),Bt=new P_,b=new q_(U,bt,Et,Bt,Ut,ft,oe),M=new rg(v),z=new og(v),st=new xf(U,Ut),Ht=new tg(U,bt,st,Ut),Q=new cg(U,st,oe,Ht),it=new mg(U,Q,st,oe),Wt=new pg(U,Ut,b),zt=new ig(Bt),Mt=new L_(v,M,z,bt,Ut,Ht,zt),ut=new t0(v,Bt),gt=new I_,Lt=new z_(bt,Ut),Qt=new Qm(v,M,z,Et,it,d,l),et=new W_(v,it,Ut),L=new e0(U,oe,Ut,Et),Nt=new eg(U,bt,oe,Ut),At=new hg(U,bt,oe,Ut),oe.programs=Mt.programs,v.capabilities=Ut,v.extensions=bt,v.properties=Bt,v.renderLists=gt,v.shadowMap=et,v.state=Et,v.info=oe}at();const dt=new Q_(v,U);this.xr=dt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=bt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=bt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(B,O,!1))},this.getSize=function(E){return E.set(B,O)},this.setSize=function(E,N,V=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,O=N,e.width=Math.floor(E*Y),e.height=Math.floor(N*Y),V===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(B*Y,O*Y).floor()},this.setDrawingBufferSize=function(E,N,V){B=E,O=N,Y=V,e.width=Math.floor(E*V),e.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,N,V,X){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,N,V,X),Et.viewport(_.copy($).multiplyScalar(Y).floor())},this.getScissor=function(E){return E.copy(Z)},this.setScissor=function(E,N,V,X){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,N,V,X),Et.scissor(T.copy(Z).multiplyScalar(Y).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){Et.setScissorTest(lt=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){H=E},this.getClearColor=function(E){return E.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(E=!0,N=!0,V=!0){let X=0;if(E){let k=!1;if(A!==null){const pt=A.texture.format;k=pt===yh||pt===Sh||pt===Mh}if(k){const pt=A.texture.type,Tt=pt===Jn||pt===jn||pt===Ao||pt===_i||pt===vh||pt===xh,Dt=Qt.getClearColor(),Ot=Qt.getClearAlpha(),Xt=Dt.r,Gt=Dt.g,kt=Dt.b;Tt?(m[0]=Xt,m[1]=Gt,m[2]=kt,m[3]=Ot,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Xt,g[1]=Gt,g[2]=kt,g[3]=Ot,U.clearBufferiv(U.COLOR,0,g))}else X|=U.COLOR_BUFFER_BIT}N&&(X|=U.DEPTH_BUFFER_BIT),V&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",w,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),gt.dispose(),Lt.dispose(),Bt.dispose(),M.dispose(),z.dispose(),it.dispose(),Ht.dispose(),L.dispose(),Mt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Ce),dt.removeEventListener("sessionend",Jt),ct&&(ct.dispose(),ct=null),fe.stop()};function wt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=oe.autoReset,N=et.enabled,V=et.autoUpdate,X=et.needsUpdate,k=et.type;at(),oe.autoReset=E,et.enabled=N,et.autoUpdate=V,et.needsUpdate=X,et.type=k}function rt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){const N=E.target;N.removeEventListener("dispose",nt),St(N)}function St(E){Ct(E),Bt.remove(E)}function Ct(E){const N=Bt.get(E).programs;N!==void 0&&(N.forEach(function(V){Mt.releaseProgram(V)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,X,k,pt){N===null&&(N=Ft);const Tt=k.isMesh&&k.matrixWorld.determinant()<0,Dt=Pu(E,N,V,X,k);Et.setMaterial(X,Tt);let Ot=V.index,Xt=1;if(X.wireframe===!0){if(Ot=Q.getWireframeAttribute(V),Ot===void 0)return;Xt=2}const Gt=V.drawRange,kt=V.attributes.position;let pe=Gt.start*Xt,Ke=(Gt.start+Gt.count)*Xt;pt!==null&&(pe=Math.max(pe,pt.start*Xt),Ke=Math.min(Ke,(pt.start+pt.count)*Xt)),Ot!==null?(pe=Math.max(pe,0),Ke=Math.min(Ke,Ot.count)):kt!=null&&(pe=Math.max(pe,0),Ke=Math.min(Ke,kt.count));const Te=Ke-pe;if(Te<0||Te===1/0)return;Ht.setup(k,X,Dt,V,Ot);let En,he=Nt;if(Ot!==null&&(En=st.get(Ot),he=At,he.setIndex(En)),k.isMesh)X.wireframe===!0?(Et.setLineWidth(X.wireframeLinewidth*Pt()),he.setMode(U.LINES)):he.setMode(U.TRIANGLES);else if(k.isLine){let qt=X.linewidth;qt===void 0&&(qt=1),Et.setLineWidth(qt*Pt()),k.isLineSegments?he.setMode(U.LINES):k.isLineLoop?he.setMode(U.LINE_LOOP):he.setMode(U.LINE_STRIP)}else k.isPoints?he.setMode(U.POINTS):k.isSprite&&he.setMode(U.TRIANGLES);if(k.isBatchedMesh)he.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)he.renderInstances(pe,Te,k.count);else if(V.isInstancedBufferGeometry){const qt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ca=Math.min(V.instanceCount,qt);he.renderInstances(pe,Te,ca)}else he.render(pe,Te)};function Zt(E,N,V){E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=je,E.needsUpdate=!0,$r(E,N,V),E.side=ei,E.needsUpdate=!0,$r(E,N,V),E.side=Dn):$r(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),p=Lt.get(V),p.init(),y.push(p),V.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==V&&E.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(v._useLegacyLights);const X=new Set;return E.traverse(function(k){const pt=k.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){const Dt=pt[Tt];Zt(Dt,V,k),X.add(Dt)}else Zt(pt,V,k),X.add(pt)}),y.pop(),p=null,X},this.compileAsync=function(E,N,V=null){const X=this.compile(E,N,V);return new Promise(k=>{function pt(){if(X.forEach(function(Tt){Bt.get(Tt).currentProgram.isReady()&&X.delete(Tt)}),X.size===0){k(E);return}setTimeout(pt,10)}bt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let jt=null;function ie(E){jt&&jt(E)}function Ce(){fe.stop()}function Jt(){fe.start()}const fe=new Bh;fe.setAnimationLoop(ie),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(E){jt=E,dt.setAnimationLoop(E),E===null?fe.stop():fe.start()},dt.addEventListener("sessionstart",Ce),dt.addEventListener("sessionend",Jt),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(N),N=dt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,A),p=Lt.get(E,y.length),p.init(),y.push(p),_t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Rt.setFromProjectionMatrix(_t),J=this.localClippingEnabled,W=zt.init(this.clippingPlanes,J),x=gt.get(E,f.length),x.init(),f.push(x),ke(E,N,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(K,H),this.info.render.frame++,W===!0&&zt.beginShadows();const V=p.state.shadowsArray;if(et.render(V,E,N),W===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1)&&Qt.render(x,E),p.setupLights(v._useLegacyLights),N.isArrayCamera){const X=N.cameras;for(let k=0,pt=X.length;k<pt;k++){const Tt=X[k];Yo(x,E,Tt,Tt.viewport)}}else Yo(x,E,N);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,N),Ht.resetDefaultState(),G=-1,j=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function ke(E,N,V,X){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Rt.intersectsSprite(E)){X&&mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const Tt=it.update(E),Dt=E.material;Dt.visible&&x.push(E,Tt,Dt,V,mt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Rt.intersectsObject(E))){const Tt=it.update(E),Dt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),mt.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),mt.copy(Tt.boundingSphere.center)),mt.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(Dt)){const Ot=Tt.groups;for(let Xt=0,Gt=Ot.length;Xt<Gt;Xt++){const kt=Ot[Xt],pe=Dt[kt.materialIndex];pe&&pe.visible&&x.push(E,Tt,pe,V,mt.z,kt)}}else Dt.visible&&x.push(E,Tt,Dt,V,mt.z,null)}}const pt=E.children;for(let Tt=0,Dt=pt.length;Tt<Dt;Tt++)ke(pt[Tt],N,V,X)}function Yo(E,N,V,X){const k=E.opaque,pt=E.transmissive,Tt=E.transparent;p.setupLightsView(V),W===!0&&zt.setGlobalState(v.clippingPlanes,V),pt.length>0&&Lu(k,pt,N,V),X&&Et.viewport(_.copy(X)),k.length>0&&Yr(k,N,V),pt.length>0&&Yr(pt,N,V),Tt.length>0&&Yr(Tt,N,V),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Lu(E,N,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const pt=Ut.isWebGL2;ct===null&&(ct=new yi(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")?Nr:Jn,minFilter:mi,samples:pt?4:0})),v.getDrawingBufferSize(vt),pt?ct.setSize(vt.x,vt.y):ct.setSize(Bs(vt.x),Bs(vt.y));const Tt=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(q),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Dt=v.toneMapping;v.toneMapping=Zn,Yr(E,V,X),b.updateMultisampleRenderTarget(ct),b.updateRenderTargetMipmap(ct);let Ot=!1;for(let Xt=0,Gt=N.length;Xt<Gt;Xt++){const kt=N[Xt],pe=kt.object,Ke=kt.geometry,Te=kt.material,En=kt.group;if(Te.side===Dn&&pe.layers.test(X.layers)){const he=Te.side;Te.side=je,Te.needsUpdate=!0,$o(pe,V,X,Ke,Te,En),Te.side=he,Te.needsUpdate=!0,Ot=!0}}Ot===!0&&(b.updateMultisampleRenderTarget(ct),b.updateRenderTargetMipmap(ct)),v.setRenderTarget(Tt),v.setClearColor(q,D),v.toneMapping=Dt}function Yr(E,N,V){const X=N.isScene===!0?N.overrideMaterial:null;for(let k=0,pt=E.length;k<pt;k++){const Tt=E[k],Dt=Tt.object,Ot=Tt.geometry,Xt=X===null?Tt.material:X,Gt=Tt.group;Dt.layers.test(V.layers)&&$o(Dt,N,V,Ot,Xt,Gt)}}function $o(E,N,V,X,k,pt){E.onBeforeRender(v,N,V,X,k,pt),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(v,N,V,X,E,pt),k.transparent===!0&&k.side===Dn&&k.forceSinglePass===!1?(k.side=je,k.needsUpdate=!0,v.renderBufferDirect(V,N,X,k,E,pt),k.side=ei,k.needsUpdate=!0,v.renderBufferDirect(V,N,X,k,E,pt),k.side=Dn):v.renderBufferDirect(V,N,X,k,E,pt),E.onAfterRender(v,N,V,X,k,pt)}function $r(E,N,V){N.isScene!==!0&&(N=Ft);const X=Bt.get(E),k=p.state.lights,pt=p.state.shadowsArray,Tt=k.state.version,Dt=Mt.getParameters(E,k.state,pt,N,V),Ot=Mt.getProgramCacheKey(Dt);let Xt=X.programs;X.environment=E.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(E.isMeshStandardMaterial?z:M).get(E.envMap||X.environment),Xt===void 0&&(E.addEventListener("dispose",nt),Xt=new Map,X.programs=Xt);let Gt=Xt.get(Ot);if(Gt!==void 0){if(X.currentProgram===Gt&&X.lightsStateVersion===Tt)return Ko(E,Dt),Gt}else Dt.uniforms=Mt.getUniforms(E),E.onBuild(V,Dt,v),E.onBeforeCompile(Dt,v),Gt=Mt.acquireProgram(Dt,Ot),Xt.set(Ot,Gt),X.uniforms=Dt.uniforms;const kt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=zt.uniform),Ko(E,Dt),X.needsLights=Iu(E),X.lightsStateVersion=Tt,X.needsLights&&(kt.ambientLightColor.value=k.state.ambient,kt.lightProbe.value=k.state.probe,kt.directionalLights.value=k.state.directional,kt.directionalLightShadows.value=k.state.directionalShadow,kt.spotLights.value=k.state.spot,kt.spotLightShadows.value=k.state.spotShadow,kt.rectAreaLights.value=k.state.rectArea,kt.ltc_1.value=k.state.rectAreaLTC1,kt.ltc_2.value=k.state.rectAreaLTC2,kt.pointLights.value=k.state.point,kt.pointLightShadows.value=k.state.pointShadow,kt.hemisphereLights.value=k.state.hemi,kt.directionalShadowMap.value=k.state.directionalShadowMap,kt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,kt.spotShadowMap.value=k.state.spotShadowMap,kt.spotLightMatrix.value=k.state.spotLightMatrix,kt.spotLightMap.value=k.state.spotLightMap,kt.pointShadowMap.value=k.state.pointShadowMap,kt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Gt,X.uniformsList=null,Gt}function jo(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Rs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ko(E,N){const V=Bt.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Pu(E,N,V,X,k){N.isScene!==!0&&(N=Ft),b.resetTextureUnits();const pt=N.fog,Tt=X.isMeshStandardMaterial?N.environment:null,Dt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bn,Ot=(X.isMeshStandardMaterial?z:M).get(X.envMap||Tt),Xt=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),kt=!!V.morphAttributes.position,pe=!!V.morphAttributes.normal,Ke=!!V.morphAttributes.color;let Te=Zn;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Te=v.toneMapping);const En=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=En!==void 0?En.length:0,qt=Bt.get(X),ca=p.state.lights;if(W===!0&&(J===!0||E!==j)){const en=E===j&&X.id===G;zt.setState(X,E,en)}let ue=!1;X.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==ca.state.version||qt.outputColorSpace!==Dt||k.isBatchedMesh&&qt.batching===!1||!k.isBatchedMesh&&qt.batching===!0||k.isInstancedMesh&&qt.instancing===!1||!k.isInstancedMesh&&qt.instancing===!0||k.isSkinnedMesh&&qt.skinning===!1||!k.isSkinnedMesh&&qt.skinning===!0||k.isInstancedMesh&&qt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&qt.instancingColor===!1&&k.instanceColor!==null||qt.envMap!==Ot||X.fog===!0&&qt.fog!==pt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==zt.numPlanes||qt.numIntersection!==zt.numIntersection)||qt.vertexAlphas!==Xt||qt.vertexTangents!==Gt||qt.morphTargets!==kt||qt.morphNormals!==pe||qt.morphColors!==Ke||qt.toneMapping!==Te||Ut.isWebGL2===!0&&qt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,qt.__version=X.version);let si=qt.currentProgram;ue===!0&&(si=$r(X,N,k));let Zo=!1,vr=!1,ha=!1;const Ie=si.getUniforms(),ai=qt.uniforms;if(Et.useProgram(si.program)&&(Zo=!0,vr=!0,ha=!0),X.id!==G&&(G=X.id,vr=!0),Zo||j!==E){Ie.setValue(U,"projectionMatrix",E.projectionMatrix),Ie.setValue(U,"viewMatrix",E.matrixWorldInverse);const en=Ie.map.cameraPosition;en!==void 0&&en.setValue(U,mt.setFromMatrixPosition(E.matrixWorld)),Ut.logarithmicDepthBuffer&&Ie.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ie.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,vr=!0,ha=!0)}if(k.isSkinnedMesh){Ie.setOptional(U,k,"bindMatrix"),Ie.setOptional(U,k,"bindMatrixInverse");const en=k.skeleton;en&&(Ut.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Ie.setValue(U,"boneTexture",en.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Ie.setOptional(U,k,"batchingTexture"),Ie.setValue(U,"batchingTexture",k._matricesTexture,b));const ua=V.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0&&Ut.isWebGL2===!0)&&Wt.update(k,V,si),(vr||qt.receiveShadow!==k.receiveShadow)&&(qt.receiveShadow=k.receiveShadow,Ie.setValue(U,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ai.envMap.value=Ot,ai.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),vr&&(Ie.setValue(U,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&Du(ai,ha),pt&&X.fog===!0&&ut.refreshFogUniforms(ai,pt),ut.refreshMaterialUniforms(ai,X,Y,O,ct),Rs.upload(U,jo(qt),ai,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Rs.upload(U,jo(qt),ai,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ie.setValue(U,"center",k.center),Ie.setValue(U,"modelViewMatrix",k.modelViewMatrix),Ie.setValue(U,"normalMatrix",k.normalMatrix),Ie.setValue(U,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const en=X.uniformsGroups;for(let da=0,Uu=en.length;da<Uu;da++)if(Ut.isWebGL2){const Jo=en[da];L.update(Jo,si),L.bind(Jo,si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return si}function Du(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Iu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,V){Bt.get(E.texture).__webglTexture=N,Bt.get(E.depthTexture).__webglTexture=V;const X=Bt.get(E);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const V=Bt.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){A=E,P=N,R=V;let X=!0,k=null,pt=!1,Tt=!1;if(E){const Ot=Bt.get(E);Ot.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(U.FRAMEBUFFER,null),X=!1):Ot.__webglFramebuffer===void 0?b.setupRenderTarget(E):Ot.__hasExternalTextures&&b.rebindTextures(E,Bt.get(E.texture).__webglTexture,Bt.get(E.depthTexture).__webglTexture);const Xt=E.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Tt=!0);const Gt=Bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[N])?k=Gt[N][V]:k=Gt[N],pt=!0):Ut.isWebGL2&&E.samples>0&&b.useMultisampledRTT(E)===!1?k=Bt.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?k=Gt[V]:k=Gt,_.copy(E.viewport),T.copy(E.scissor),F=E.scissorTest}else _.copy($).multiplyScalar(Y).floor(),T.copy(Z).multiplyScalar(Y).floor(),F=lt;if(Et.bindFramebuffer(U.FRAMEBUFFER,k)&&Ut.drawBuffers&&X&&Et.drawBuffers(E,k),Et.viewport(_),Et.scissor(T),Et.setScissorTest(F),pt){const Ot=Bt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ot.__webglTexture,V)}else if(Tt){const Ot=Bt.get(E.texture),Xt=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,V||0,Xt)}G=-1},this.readRenderTargetPixels=function(E,N,V,X,k,pt,Tt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Dt=Dt[Tt]),Dt){Et.bindFramebuffer(U.FRAMEBUFFER,Dt);try{const Ot=E.texture,Xt=Ot.format,Gt=Ot.type;if(Xt!==pn&&ft.convert(Xt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Gt===Nr&&(bt.has("EXT_color_buffer_half_float")||Ut.isWebGL2&&bt.has("EXT_color_buffer_float"));if(Gt!==Jn&&ft.convert(Gt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===In&&(Ut.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-X&&V>=0&&V<=E.height-k&&U.readPixels(N,V,X,k,ft.convert(Xt),ft.convert(Gt),pt)}finally{const Ot=A!==null?Bt.get(A).__webglFramebuffer:null;Et.bindFramebuffer(U.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(E,N,V=0){const X=Math.pow(2,-V),k=Math.floor(N.image.width*X),pt=Math.floor(N.image.height*X);b.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,E.x,E.y,k,pt),Et.unbindTexture()},this.copyTextureToTexture=function(E,N,V,X=0){const k=N.image.width,pt=N.image.height,Tt=ft.convert(V.format),Dt=ft.convert(V.type);b.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,X,E.x,E.y,k,pt,Tt,Dt,N.image.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,X,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Tt,N.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,X,E.x,E.y,Tt,Dt,N.image),X===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V,X,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=E.max.x-E.min.x+1,Tt=E.max.y-E.min.y+1,Dt=E.max.z-E.min.z+1,Ot=ft.convert(X.format),Xt=ft.convert(X.type);let Gt;if(X.isData3DTexture)b.setTexture3D(X,0),Gt=U.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)b.setTexture2DArray(X,0),Gt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment);const kt=U.getParameter(U.UNPACK_ROW_LENGTH),pe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ke=U.getParameter(U.UNPACK_SKIP_PIXELS),Te=U.getParameter(U.UNPACK_SKIP_ROWS),En=U.getParameter(U.UNPACK_SKIP_IMAGES),he=V.isCompressedTexture?V.mipmaps[k]:V.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,E.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,E.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?U.texSubImage3D(Gt,k,N.x,N.y,N.z,pt,Tt,Dt,Ot,Xt,he.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Gt,k,N.x,N.y,N.z,pt,Tt,Dt,Ot,he.data)):U.texSubImage3D(Gt,k,N.x,N.y,N.z,pt,Tt,Dt,Ot,Xt,he),U.pixelStorei(U.UNPACK_ROW_LENGTH,kt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,Te),U.pixelStorei(U.UNPACK_SKIP_IMAGES,En),k===0&&X.generateMipmaps&&U.generateMipmap(Gt),Et.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),Et.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,Et.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ro?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===Qs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Le?xi:bh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===xi?Le:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class n0 extends Uo{}n0.prototype.isWebGL1Renderer=!0;class Xh extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class i0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Mi("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ve=new I;class zs{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),r=te(r,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new zs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nr extends ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Xi;const br=new I,qi=new I,Yi=new I,$i=new yt,Tr=new yt,qh=new ge,gs=new I,Ar=new I,_s=new I,xc=new yt,ka=new yt,Mc=new yt;class ho extends ye{constructor(t=new nr){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new De;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new i0(e,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new zs(n,3,0,!1)),Xi.setAttribute("uv",new zs(n,2,3,!1))}this.geometry=Xi,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),qh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Yi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;vs(gs.set(-.5,-.5,0),Yi,o,qi,r,s),vs(Ar.set(.5,-.5,0),Yi,o,qi,r,s),vs(_s.set(.5,.5,0),Yi,o,qi,r,s),xc.set(0,0),ka.set(1,0),Mc.set(1,1);let a=t.ray.intersectTriangle(gs,Ar,_s,!1,br);if(a===null&&(vs(Ar.set(-.5,.5,0),Yi,o,qi,r,s),ka.set(0,1),a=t.ray.intersectTriangle(gs,_s,Ar,!1,br),a===null))return;const l=t.ray.origin.distanceTo(br);l<t.near||l>t.far||e.push({distance:l,point:br.clone(),uv:ln.getInterpolation(br,gs,Ar,_s,xc,ka,Mc,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function vs(i,t,e,n,r,s){$i.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Tr.x=s*$i.x-r*$i.y,Tr.y=r*$i.x+s*$i.y):Tr.copy($i),i.copy(t),i.x+=Tr.x,i.y+=Tr.y,i.applyMatrix4(qh)}class Pr extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sc=new I,yc=new I,Ec=new ge,Va=new Lo,xs=new ta;class Gs extends ye{constructor(t=new De,e=new Pr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Sc.fromBufferAttribute(e,r-1),yc.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Sc.distanceTo(yc);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),xs.radius+=s,t.ray.intersectsSphere(xs)===!1)return;Ec.copy(r).invert(),Va.copy(t.ray).applyMatrix4(Ec);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,h=new I,u=new I,d=new I,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=f,S=y-1;v<S;v+=m){const P=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(p,P),h.fromBufferAttribute(p,R),Va.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const G=t.ray.origin.distanceTo(d);G<t.near||G>t.far||e.push({distance:G,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=f,S=y-1;v<S;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Va.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(d);R<t.near||R>t.far||e.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const bc=new I,Tc=new I;class r0 extends Gs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)bc.fromBufferAttribute(e,r),Tc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+bc.distanceTo(Tc);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class No extends Ge{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hs extends De{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new I,h=new yt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*r;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ra extends De{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],m=[];let g=0;const x=[],p=n/2;let f=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(m,2));function y(){const S=new I,P=new I;let R=0;const A=(e-t)/n;for(let G=0;G<=s;G++){const j=[],_=G/s,T=_*(e-t)+t;for(let F=0;F<=r;F++){const q=F/r,D=q*l+a,B=Math.sin(D),O=Math.cos(D);P.x=T*B,P.y=-_*n+p,P.z=T*O,u.push(P.x,P.y,P.z),S.set(B,A,O).normalize(),d.push(S.x,S.y,S.z),m.push(q,1-_),j.push(g++)}x.push(j)}for(let G=0;G<r;G++)for(let j=0;j<s;j++){const _=x[j][G],T=x[j+1][G],F=x[j+1][G+1],q=x[j][G+1];h.push(_,T,q),h.push(T,F,q),R+=6}c.addGroup(f,R,0),f+=R}function v(S){const P=g,R=new yt,A=new I;let G=0;const j=S===!0?t:e,_=S===!0?1:-1;for(let F=1;F<=r;F++)u.push(0,p*_,0),d.push(0,_,0),m.push(.5,.5),g++;const T=g;for(let F=0;F<=r;F++){const D=F/r*l+a,B=Math.cos(D),O=Math.sin(D);A.x=j*O,A.y=p*_,A.z=j*B,u.push(A.x,A.y,A.z),d.push(0,_,0),R.x=B*.5+.5,R.y=O*.5*_+.5,m.push(R.x,R.y),g++}for(let F=0;F<r;F++){const q=P+F,D=T+F;S===!0?h.push(D,D+1,q):h.push(D+1,D,q),G+=3}c.addGroup(f,G,S===!0?1:2),f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Ms=new I,Ss=new I,Wa=new I,ys=new ln;class s0 extends De{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(tr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:p,c:f}=ys;if(x.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),ys.getNormal(Wa),u[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const v=(y+1)%3,S=u[y],P=u[v],R=ys[h[y]],A=ys[h[v]],G=`${S}_${P}`,j=`${P}_${S}`;j in d&&d[j]?(Wa.dot(d[j].normal)<=s&&(m.push(R.x,R.y,R.z),m.push(A.x,A.y,A.z)),d[j]=null):G in d||(d[G]={index0:c[y],index1:c[v],normal:Wa.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:p}=d[g];Ms.fromBufferAttribute(a,x),Ss.fromBufferAttribute(a,p),m.push(Ms.x,Ms.y,Ms.z),m.push(Ss.x,Ss.y,Ss.z)}this.setAttribute("position",new Me(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ks extends De{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,d=new I,m=[],g=[],x=[],p=[];for(let f=0;f<=n;f++){const y=[],v=f/n;let S=0;f===0&&o===0?S=.5/e:f===n&&l===Math.PI&&(S=-.5/e);for(let P=0;P<=e;P++){const R=P/e;u.x=-t*Math.cos(r+R*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(r+R*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(R+S,1-v),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const v=h[f][y+1],S=h[f][y],P=h[f+1][y],R=h[f+1][y+1];(f!==0||o>0)&&m.push(v,S,R),(f!==n-1||l<Math.PI)&&m.push(S,P,R)}this.setIndex(m),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Es extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ac extends ri{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xt(16777215),this.specular=new xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const wc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class a0{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const o0=new a0;class Oo{constructor(t){this.manager=t!==void 0?t:o0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Oo.DEFAULT_MATERIAL_NAME="__DEFAULT";class l0 extends Oo{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=wc.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Fr("img");function l(){h(),wc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class c0 extends Oo{constructor(t){super(t)}load(t,e,n,r){const s=new Ge,o=new l0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Yh extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Xa=new ge,Rc=new I,Cc=new I;class h0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rc),Cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cc),e.updateMatrixWorld(),Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class u0 extends h0{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $h extends Yh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new u0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jh extends Yh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Pc=new I;let bs,qa;class d0 extends ye{constructor(t=new I(0,0,1),e=new I(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",bs===void 0&&(bs=new De,bs.setAttribute("position",new Me([0,0,0,0,1,0],3)),qa=new ra(0,.5,1,5,1),qa.translate(0,-.5,0)),this.position.copy(e),this.line=new Gs(bs,new Pr({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Pe(qa,new na({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Pc.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Pc,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);function ur(i){typeof MathJax>"u"||!i||MathJax.typesetPromise([i]).catch(()=>{})}const Dc={dark:{face:"#f5f5f5",rim:"#ffffff",text:"#050505",table:"#050505",shadow:.24},light:{face:"#0b0b0b",rim:"#000000",text:"#f7f7f7",table:"#f8f8f6",shadow:.18}};function f0(i,t){const e=getComputedStyle(document.documentElement).getPropertyValue(i);return(e==null?void 0:e.trim())||t}function Ic(i,t){const n=document.createElement("canvas");n.width=n.height=256;const r=n.getContext("2d"),s=256/2,o=256*.42;r.imageSmoothingEnabled=!1,r.fillStyle=t.face,r.beginPath(),r.arc(s,s,o,0,Math.PI*2),r.fill(),r.strokeStyle=t.rim,r.lineWidth=256*.04,r.beginPath(),r.arc(s,s,o*.86,0,Math.PI*2),r.stroke(),r.fillStyle=t.text,r.font=`${Math.floor(256*.24)}px "Press Start 2P", "Courier New", monospace`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,s,s);const a=new No(n);return a.anisotropy=4,a.minFilter=me,a.magFilter=me,a}class p0{constructor({mountEl:t,statusEl:e,oddsEl:n}){this.mountEl=t,this.statusEl=e,this.oddsEl=n,this.scene=null,this.camera=null,this.renderer=null,this.coinGroup=null,this.shadowMesh=null,this._raf=null,this.playing=!1,this.playStart=0,this.playDuration=1400,this.targetIsOne=!1,this._resolve=null,this.resultHoldMs=750,this.theme=document.documentElement.getAttribute("data-theme")||"dark"}init(){if(!this.mountEl||this.scene)return;this._clearHighlights();const t=this.mountEl.clientWidth||220,e=this.mountEl.clientHeight||220,n=t/e,r=1.7,s=this._getPalette();this.scene=new Xh,this.camera=new Do(-r*n,r*n,r,-r,.1,30),this.camera.position.set(0,10,0),this.camera.lookAt(0,0,0);try{this.renderer=new Uo({antialias:!1,alpha:!0}),this.renderer.setSize(t,e),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.domElement.style.imageRendering="pixelated",this.mountEl.appendChild(this.renderer.domElement),this.renderer.domElement.addEventListener("webglcontextlost",p=>this._handleContextLost(p),!1)}catch(p){console.error("Coin flip renderer init failed:",p);return}this.scene.add(new jh(16777215,.55));const o=new $h(16777215,.9);o.position.set(1.6,2.4,1.8),this.scene.add(o);const a=new Pe(new Xr(6,6),new Es({color:new xt(s.table),roughness:.94,metalness:.04}));a.rotation.x=-Math.PI/2,this.scene.add(a),this.coinGroup=new Zi,this.coinGroup.position.y=.08,this.scene.add(this.coinGroup);const l=.6,c=.08,h=new Pe(new ra(l,l,c,64,1,!0),new Es({color:new xt(s.rim),metalness:.25,roughness:.6}));this.coinGroup.add(h);const u=Ic("|0⟩",s),d=Ic("|1⟩",s),m=new Hs(l,64),g=new Pe(m,new Es({map:u,metalness:.1,roughness:.5}));g.rotation.x=-Math.PI/2,g.position.y=c/2+.002,this.coinGroup.add(g);const x=new Pe(m,new Es({map:d,metalness:.1,roughness:.5}));x.rotation.x=Math.PI/2,x.position.y=-c/2-.002,this.coinGroup.add(x),this.shadowMesh=new Pe(new Hs(l*1.5,48),new na({color:new xt(s.text),transparent:!0,opacity:s.shadow,depthWrite:!1})),this.shadowMesh.rotation.x=-Math.PI/2,this.shadowMesh.position.y=.001,this.shadowMesh.scale.set(1.2,1.2,1.2),this.scene.add(this.shadowMesh),this._tick()}_handleContextLost(t){t!=null&&t.preventDefault&&t.preventDefault(),this._resetScene(),requestAnimationFrame(()=>this.init())}_resetScene(){var t,e,n,r,s;this.playing=!1,(e=(t=this.renderer)==null?void 0:t.domElement)!=null&&e.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),(r=(n=this.renderer)==null?void 0:n.dispose)==null||r.call(n),this.renderer=null,this.scene=null,this.camera=null,this.coinGroup=null,this.shadowMesh=null,(s=this._resolve)==null||s.call(this),this._resolve=null}resize(){if(!this.renderer||!this.camera)return;const t=this.mountEl.clientWidth||220,e=this.mountEl.clientHeight||220,n=t/e,r=1.7;this.camera.left=-r*n,this.camera.right=r*n,this.camera.top=r,this.camera.bottom=-r,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}setStatus(t){if(!this.statusEl)return;if(this._clearHighlights(),typeof t=="string"&&t.includes("|")&&t.includes("⟩")){const n=t.replace(/\|/g,"\\(|").replace(/⟩/g,"\\rangle\\)");this.statusEl.innerHTML=n,ur(this.statusEl)}else this.statusEl.textContent=t}setOdds(t){if(!this.oddsEl)return;if(this.oddsEl.classList.remove("coin-miss"),!t){this.oddsEl.textContent="Odds: –";return}const e=Math.max(0,t.p0+t.p1)||1,n=Math.round(Math.max(0,t.p0)/e*100),r=Math.max(0,100-n);this.oddsEl.textContent=`Odds: |0⟩ ${n}% | |1⟩ ${r}%`}play(t,{label:e,probs:n}={}){return this.scene||this.init(),this._clearHighlights(),this.targetIsOne=t===1||t==="tails"||t==="|1⟩",this.playStart=performance.now(),this.playDuration=1400+Math.random()*220,this.playing=!0,this.setStatus(e?`${e}: flipping…`:"Flipping…"),this.setOdds(n),new Promise(r=>{this._resolve=r})}_tick(){this.fallback||(this._raf=requestAnimationFrame(()=>this._tick()),this._update(performance.now()),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera))}_update(t){if(!this.playing)return;const e=Math.min((t-this.playStart)/this.playDuration,1),n=e*e*(3-2*e),r=Math.sin(Math.PI*Math.min(1,e*1.05))*1.35+.05,o=3*Math.PI*2*n+(this.targetIsOne?Math.PI:0),a=Math.sin(e*Math.PI*6)*.28*(1-e),l=Math.sin(e*Math.PI*2.1)*.55*(1-e*.6);this.coinGroup.position.y=r,this.coinGroup.rotation.set(o+l,.22*Math.sin(e*Math.PI*1.6),a);const c=e>.86?(1-e)*6:0,h=Math.max(0,c*.08);this.coinGroup.scale.set(1+h*.25,1-h*.35,1+h*.25);const u=1+r*.32,d=Math.max(.12,(this._getPalette().shadow??.2)-r*.12);this.shadowMesh.scale.set(u*1.3,u*1.1,1),this.shadowMesh.material&&(this.shadowMesh.material.opacity=d),e>=1&&(this.playing=!1,this.coinGroup.position.y=.08,this.coinGroup.rotation.set(this.targetIsOne?Math.PI:0,0,0),this.coinGroup.scale.set(1,1,1),this.setStatus(this.targetIsOne?"|1⟩":"|0⟩"),this._applyOutcomeHighlight(this.targetIsOne?1:0),this.setOdds(null),this._resolve&&setTimeout(()=>{const g=this._resolve;this._resolve=null,g&&g()},this.resultHoldMs))}_clearHighlights(){this.statusEl&&this.statusEl.classList.remove("coin-hit","coin-pulse"),this.oddsEl&&this.oddsEl.classList.remove("coin-miss")}_applyOutcomeHighlight(){this.statusEl&&this.statusEl.classList.add("coin-hit","coin-pulse"),this.oddsEl&&this.oddsEl.classList.add("coin-miss")}setTheme(t){this.theme=t==="light"?"light":"dark",this._resetScene(),requestAnimationFrame(()=>this.init())}_getPalette(){const t=Dc[this.theme]||Dc.dark;return{...t,table:f0("--bg",t.table),text:t.text}}}const Uc={type:"change"},Ya={type:"start"},Nc={type:"end"},Ts=new Lo,Oc=new Yn,m0=Math.cos(70*Ah.DEG2RAD);class g0 extends Ti{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Lt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Lt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Uc),n.update(),s=r.NONE},this.update=function(){const L=new I,at=new Ei().setFromUnitVectors(t.up,new I(0,1,0)),dt=at.clone().invert(),wt=new I,w=new Ei,rt=new I,nt=2*Math.PI;return function(Ct=null){const Zt=n.object.position;L.copy(Zt).sub(n.target),L.applyQuaternion(at),a.setFromVector3(L),n.autoRotate&&s===r.NONE&&F(_(Ct)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let jt=n.minAzimuthAngle,ie=n.maxAzimuthAngle;isFinite(jt)&&isFinite(ie)&&(jt<-Math.PI?jt+=nt:jt>Math.PI&&(jt-=nt),ie<-Math.PI?ie+=nt:ie>Math.PI&&(ie-=nt),jt<=ie?a.theta=Math.max(jt,Math.min(ie,a.theta)):a.theta=a.theta>(jt+ie)/2?Math.max(jt,a.theta):Math.min(ie,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(dt),Zt.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ce=!1;if(n.zoomToCursor&&R){let Jt=null;if(n.object.isPerspectiveCamera){const fe=L.length();Jt=$(fe*c);const ke=fe-Jt;n.object.position.addScaledVector(S,ke),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const fe=new I(P.x,P.y,0);fe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ce=!0;const ke=new I(P.x,P.y,0);ke.unproject(n.object),n.object.position.sub(ke).add(fe),n.object.updateMatrixWorld(),Jt=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Jt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Jt).add(n.object.position):(Ts.origin.copy(n.object.position),Ts.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ts.direction))<m0?t.lookAt(n.target):(Oc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ts.intersectPlane(Oc,n.target))))}else n.object.isOrthographicCamera&&(Ce=c!==1,Ce&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,R=!1,Ce||wt.distanceToSquared(n.object.position)>o||8*(1-w.dot(n.object.quaternion))>o||rt.distanceToSquared(n.target)>0?(n.dispatchEvent(Uc),wt.copy(n.object.position),w.copy(n.object.quaternion),rt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Qt),n.domElement.removeEventListener("pointerdown",b),n.domElement.removeEventListener("pointercancel",z),n.domElement.removeEventListener("wheel",it),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Lt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Lc,l=new Lc;let c=1;const h=new I,u=new yt,d=new yt,m=new yt,g=new yt,x=new yt,p=new yt,f=new yt,y=new yt,v=new yt,S=new I,P=new yt;let R=!1;const A=[],G={};let j=!1;function _(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function T(L){const at=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*at)}function F(L){l.theta-=L}function q(L){l.phi-=L}const D=function(){const L=new I;return function(dt,wt){L.setFromMatrixColumn(wt,0),L.multiplyScalar(-dt),h.add(L)}}(),B=function(){const L=new I;return function(dt,wt){n.screenSpacePanning===!0?L.setFromMatrixColumn(wt,1):(L.setFromMatrixColumn(wt,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(dt),h.add(L)}}(),O=function(){const L=new I;return function(dt,wt){const w=n.domElement;if(n.object.isPerspectiveCamera){const rt=n.object.position;L.copy(rt).sub(n.target);let nt=L.length();nt*=Math.tan(n.object.fov/2*Math.PI/180),D(2*dt*nt/w.clientHeight,n.object.matrix),B(2*wt*nt/w.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(dt*(n.object.right-n.object.left)/n.object.zoom/w.clientWidth,n.object.matrix),B(wt*(n.object.top-n.object.bottom)/n.object.zoom/w.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(L,at){if(!n.zoomToCursor)return;R=!0;const dt=n.domElement.getBoundingClientRect(),wt=L-dt.left,w=at-dt.top,rt=dt.width,nt=dt.height;P.x=wt/rt*2-1,P.y=-(w/nt)*2+1,S.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function Z(L){u.set(L.clientX,L.clientY)}function lt(L){H(L.clientX,L.clientX),f.set(L.clientX,L.clientY)}function Rt(L){g.set(L.clientX,L.clientY)}function W(L){d.set(L.clientX,L.clientY),m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const at=n.domElement;F(2*Math.PI*m.x/at.clientHeight),q(2*Math.PI*m.y/at.clientHeight),u.copy(d),n.update()}function J(L){y.set(L.clientX,L.clientY),v.subVectors(y,f),v.y>0?Y(T(v.y)):v.y<0&&K(T(v.y)),f.copy(y),n.update()}function ct(L){x.set(L.clientX,L.clientY),p.subVectors(x,g).multiplyScalar(n.panSpeed),O(p.x,p.y),g.copy(x),n.update()}function _t(L){H(L.clientX,L.clientY),L.deltaY<0?K(T(L.deltaY)):L.deltaY>0&&Y(T(L.deltaY)),n.update()}function vt(L){let at=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),at=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),at=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),at=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),at=!0;break}at&&(L.preventDefault(),n.update())}function mt(L){if(A.length===1)u.set(L.pageX,L.pageY);else{const at=ft(L),dt=.5*(L.pageX+at.x),wt=.5*(L.pageY+at.y);u.set(dt,wt)}}function Ft(L){if(A.length===1)g.set(L.pageX,L.pageY);else{const at=ft(L),dt=.5*(L.pageX+at.x),wt=.5*(L.pageY+at.y);g.set(dt,wt)}}function Pt(L){const at=ft(L),dt=L.pageX-at.x,wt=L.pageY-at.y,w=Math.sqrt(dt*dt+wt*wt);f.set(0,w)}function U(L){n.enableZoom&&Pt(L),n.enablePan&&Ft(L)}function de(L){n.enableZoom&&Pt(L),n.enableRotate&&mt(L)}function bt(L){if(A.length==1)d.set(L.pageX,L.pageY);else{const dt=ft(L),wt=.5*(L.pageX+dt.x),w=.5*(L.pageY+dt.y);d.set(wt,w)}m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const at=n.domElement;F(2*Math.PI*m.x/at.clientHeight),q(2*Math.PI*m.y/at.clientHeight),u.copy(d)}function Ut(L){if(A.length===1)x.set(L.pageX,L.pageY);else{const at=ft(L),dt=.5*(L.pageX+at.x),wt=.5*(L.pageY+at.y);x.set(dt,wt)}p.subVectors(x,g).multiplyScalar(n.panSpeed),O(p.x,p.y),g.copy(x)}function Et(L){const at=ft(L),dt=L.pageX-at.x,wt=L.pageY-at.y,w=Math.sqrt(dt*dt+wt*wt);y.set(0,w),v.set(0,Math.pow(y.y/f.y,n.zoomSpeed)),Y(v.y),f.copy(y);const rt=(L.pageX+at.x)*.5,nt=(L.pageY+at.y)*.5;H(rt,nt)}function oe(L){n.enableZoom&&Et(L),n.enablePan&&Ut(L)}function Bt(L){n.enableZoom&&Et(L),n.enableRotate&&bt(L)}function b(L){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",z)),Wt(L),L.pointerType==="touch"?zt(L):st(L))}function M(L){n.enabled!==!1&&(L.pointerType==="touch"?et(L):Q(L))}function z(L){switch(Nt(L),A.length){case 0:n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",z),n.dispatchEvent(Nc),s=r.NONE;break;case 1:const at=A[0],dt=G[at];zt({pointerId:at,pageX:dt.x,pageY:dt.y});break}}function st(L){let at;switch(L.button){case 0:at=n.mouseButtons.LEFT;break;case 1:at=n.mouseButtons.MIDDLE;break;case 2:at=n.mouseButtons.RIGHT;break;default:at=-1}switch(at){case wi.DOLLY:if(n.enableZoom===!1)return;lt(L),s=r.DOLLY;break;case wi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;Rt(L),s=r.PAN}else{if(n.enableRotate===!1)return;Z(L),s=r.ROTATE}break;case wi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;Z(L),s=r.ROTATE}else{if(n.enablePan===!1)return;Rt(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ya)}function Q(L){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;W(L);break;case r.DOLLY:if(n.enableZoom===!1)return;J(L);break;case r.PAN:if(n.enablePan===!1)return;ct(L);break}}function it(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(Ya),_t(Mt(L)),n.dispatchEvent(Nc))}function Mt(L){const at=L.deltaMode,dt={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(at){case 1:dt.deltaY*=16;break;case 2:dt.deltaY*=100;break}return L.ctrlKey&&!j&&(dt.deltaY*=10),dt}function ut(L){L.key==="Control"&&(j=!0,n.domElement.getRootNode().addEventListener("keyup",gt,{passive:!0,capture:!0}))}function gt(L){L.key==="Control"&&(j=!1,n.domElement.getRootNode().removeEventListener("keyup",gt,{passive:!0,capture:!0}))}function Lt(L){n.enabled===!1||n.enablePan===!1||vt(L)}function zt(L){switch(At(L),A.length){case 1:switch(n.touches.ONE){case Ri.ROTATE:if(n.enableRotate===!1)return;mt(L),s=r.TOUCH_ROTATE;break;case Ri.PAN:if(n.enablePan===!1)return;Ft(L),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Ri.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(L),s=r.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(L),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ya)}function et(L){switch(At(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;bt(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ut(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;oe(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Bt(L),n.update();break;default:s=r.NONE}}function Qt(L){n.enabled!==!1&&L.preventDefault()}function Wt(L){A.push(L.pointerId)}function Nt(L){delete G[L.pointerId];for(let at=0;at<A.length;at++)if(A[at]==L.pointerId){A.splice(at,1);return}}function At(L){let at=G[L.pointerId];at===void 0&&(at=new yt,G[L.pointerId]=at),at.set(L.pageX,L.pageY)}function ft(L){const at=L.pointerId===A[0]?A[1]:A[0];return G[at]}n.domElement.addEventListener("contextmenu",Qt),n.domElement.addEventListener("pointerdown",b),n.domElement.addEventListener("pointercancel",z),n.domElement.addEventListener("wheel",it,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ut,{passive:!0,capture:!0}),this.update()}}const C=(i,t)=>({re:i,im:t}),cn=(i,t)=>({re:i.re+t.re,im:i.im+t.im}),tn=i=>({re:i.re,im:-i.im}),Vs=i=>i.re*i.re+i.im*i.im,Br=(i,t)=>({re:i.re*t,im:i.im*t});function ne(i,t){return{re:i.re*t.re-i.im*t.im,im:i.re*t.im+i.im*t.re}}function yn(i){const t=Vs(i.alpha)+Vs(i.beta),e=Math.sqrt(t)||1;return i.alpha=Br(i.alpha,1/e),i.beta=Br(i.beta,1/e),i}function Fo(i){let t=0;for(const n of i)t+=Vs(n);const e=Math.sqrt(t)||1;return Math.abs(e-1)<1e-12?i:i.map(n=>Br(n,1/e))}const ce=1/Math.sqrt(2),_0=[{re:1,im:0,latex:"1"},{re:-1,im:0,latex:"-1"},{re:0,im:1,latex:"i"},{re:0,im:-1,latex:"-i"},{re:ce,im:0,latex:"\\tfrac{1}{\\sqrt{2}}"},{re:-ce,im:0,latex:"-\\tfrac{1}{\\sqrt{2}}"},{re:0,im:ce,latex:"\\tfrac{i}{\\sqrt{2}}"},{re:0,im:-ce,latex:"-\\tfrac{i}{\\sqrt{2}}"},{re:ce,im:ce,latex:"\\tfrac{1+i}{\\sqrt{2}}"},{re:ce,im:-ce,latex:"\\tfrac{1-i}{\\sqrt{2}}"},{re:-ce,im:ce,latex:"-\\tfrac{1-i}{\\sqrt{2}}"},{re:-ce,im:-ce,latex:"-\\tfrac{1+i}{\\sqrt{2}}"},{re:Math.cos(Math.PI/4),im:Math.sin(Math.PI/4),latex:"e^{i\\pi/4}"},{re:Math.cos(-Math.PI/4),im:Math.sin(-Math.PI/4),latex:"e^{-i\\pi/4}"},{re:Math.cos(Math.PI/2),im:Math.sin(Math.PI/2),latex:"e^{i\\pi/2}"},{re:Math.cos(-Math.PI/2),im:Math.sin(-Math.PI/2),latex:"e^{-i\\pi/2}"}];function Fc(i,t,e=1e-6){return Math.abs(i-t)<e}function uo(i,t=128,e=1e-6){if(!Number.isFinite(i))return{num:0,den:1};if(Math.abs(i)<e)return{num:0,den:1};const n=i<0?-1:1;let r=1,s=0,o=0,a=1,l=Math.abs(i);do{const c=Math.floor(l),h=c*r+s,u=c*o+a;s=r,r=h,a=o,o=u;const d=h/u;if(u>t||Math.abs(d-Math.abs(i))<e)return{num:n*h,den:u};l=1/(l-c)}while(!0)}function Cr({num:i,den:t}){return t===1?String(i):`\\tfrac{${i}}{${t}}`}function Mn(i,t=1e-6){const e=Math.abs(i.re)<t?0:i.re,n=Math.abs(i.im)<t?0:i.im,r=_0.find(c=>Fc(e,c.re,t)&&Fc(n,c.im,t));if(r)return r.latex;const s=uo(e,128,t),o=uo(n,128,t);if(Math.abs(n)<t)return Cr(s);if(Math.abs(e)<t)return`${Cr(o)}i`;const a=n>=0?"+":"-",l=Cr({num:Math.abs(o.num),den:o.den});return`${Cr(s)} ${a} ${l}i`}const v0=-1;function bi(i){if(i!=null&&i.rho)return i.rho;const t=i.alpha,e=i.beta,n=tn(t),r=tn(e);return[[ne(t,n),ne(t,r)],[ne(n,e),ne(e,r)]]}function wr(i){const t=bi(i);return Si(t)}const sn={X:{matrix:[[C(0,0),C(1,0)],[C(1,0),C(0,0)]],axis:{x:1,y:0,z:0},angle:Math.PI},Y:{matrix:[[C(0,0),C(0,-1)],[C(0,1),C(0,0)]],axis:{x:0,y:1,z:0},angle:Math.PI},Z:{matrix:[[C(1,0),C(0,0)],[C(0,0),C(-1,0)]],axis:{x:0,y:0,z:1},angle:Math.PI},H:{matrix:[[C(ce,0),C(ce,0)],[C(ce,0),C(-ce,0)]],axis:{x:1/Math.SQRT2,y:0,z:1/Math.SQRT2},angle:Math.PI},S:{matrix:[[C(1,0),C(0,0)],[C(0,0),C(0,1)]],axis:{x:0,y:0,z:1},angle:Math.PI/2},T:{matrix:(()=>{const i=Math.PI/4;return[[C(1,0),C(0,0)],[C(0,0),C(Math.cos(i),Math.sin(i))]]})(),axis:{x:0,y:0,z:1},angle:Math.PI/4},Sdg:{matrix:[[C(1,0),C(0,0)],[C(0,0),C(0,-1)]],axis:{x:0,y:0,z:1},angle:-Math.PI/2},Tdg:{matrix:(()=>{const i=-Math.PI/4;return[[C(1,0),C(0,0)],[C(0,0),C(Math.cos(i),Math.sin(i))]]})(),axis:{x:0,y:0,z:1},angle:-Math.PI/4},M:{matrix:[[C(1,0),C(0,0)],[C(0,0),C(1,0)]],axis:{x:0,y:0,z:1},angle:0}},x0={X:"X",Y:"Y",Z:"Z",H:"H",S:"Sdg",T:"Tdg",M:"M"},fo=[[C(1,0),C(0,0)],[C(0,0),C(0,0)]],po=[[C(0,0),C(0,0)],[C(0,0),C(1,0)]];function Bc(i,t){const e=[[C(0,0),C(0,0)],[C(0,0),C(0,0)]];for(let n=0;n<2;n++)for(let r=0;r<2;r++)e[n][r]=cn(ne(i[n][0],t[0][r]),ne(i[n][1],t[1][r]));return e}function M0(i){return[[tn(i[0][0]),tn(i[1][0])],[tn(i[0][1]),tn(i[1][1])]]}function S0(i,t){const e=M0(t);return Bc(Bc(t,i),e)}function Bo(i){const t=Math.max(0,i[0][0].re),e=Math.max(0,i[1][1].re),n=t+e;return n<=0?{p0:0,p1:0}:{p0:t/n,p1:e/n}}function zc(i,t){const e=sn[t];if(!e)return i;if(i.rho)return i.rho=S0(i.rho,e.matrix),i;const n=e.matrix,r=i.alpha,s=i.beta,o=cn(ne(n[0][0],r),ne(n[0][1],s)),a=cn(ne(n[1][0],r),ne(n[1][1],s));return i.alpha=o,i.beta=a,yn(i),i}function y0(i){const t=[[C(0,0),C(0,0),C(0,0),C(0,0)],[C(0,0),C(0,0),C(0,0),C(0,0)],[C(0,0),C(0,0),C(0,0),C(0,0)],[C(0,0),C(0,0),C(0,0),C(0,0)]],e=(n,r)=>n<<1|r;for(let n=0;n<2;n++)for(let r=0;r<2;r++)for(let s=0;s<2;s++)for(let o=0;o<2;o++){const a=e(n,r),l=e(s,o),c=i[a][l],h=e(n,o),u=e(s,r);t[h][u]=C(c.re,c.im)}return t}function E0(i){const t=i.length,e=Array.from({length:t*2},()=>Array(t*2).fill(0));for(let n=0;n<t;n++)for(let r=0;r<t;r++){const s=i[n][r];e[2*n][2*r]=s.re,e[2*n][2*r+1]=-s.im,e[2*n+1][2*r]=s.im,e[2*n+1][2*r+1]=s.re}return e}function b0(i,t=1e-12,e=64){const n=i.length,r=i.map(s=>s.slice());for(let s=0;s<e;s++){let o=0,a=1,l=Math.abs(r[o][a]);for(let f=0;f<n;f++)for(let y=f+1;y<n;y++){const v=Math.abs(r[f][y]);v>l&&(l=v,o=f,a=y)}if(l<t)break;const c=r[o][o],h=r[a][a],u=r[o][a],d=.5*Math.atan2(2*u,h-c),m=Math.cos(d),g=Math.sin(d);for(let f=0;f<n;f++){if(f===o||f===a)continue;const y=r[f][o],v=r[f][a];r[f][o]=r[o][f]=m*y-g*v,r[f][a]=r[a][f]=g*y+m*v}const x=m*m*c-2*g*m*u+g*g*h,p=g*g*c+2*g*m*u+m*m*h;r[o][o]=x,r[a][a]=p,r[o][a]=r[a][o]=0}return r.map((s,o)=>s[o])}function T0(i){const t=E0(i),e=b0(t);return Math.min(...e)}function A0(i=[]){let t=[C(1,0)];return i.forEach(e=>{const n=yn({alpha:C(e.alpha.re,e.alpha.im),beta:C(e.beta.re,e.beta.im)}),r=[];for(const s of t)r.push(ne(s,n.alpha)),r.push(ne(s,n.beta));t=r}),Fo(t)}function w0(i,t,e,n){const r=1<<n-1-e,s=Array.from(i);for(let o=0;o<i.length;o+=r*2)for(let a=0;a<r;a++){const l=o+a,c=l+r,h=i[l],u=i[c];s[l]=cn(ne(t[0][0],h),ne(t[0][1],u)),s[c]=cn(ne(t[1][0],h),ne(t[1][1],u))}return Fo(s)}function R0(i,t,e,n){const r=1<<n-1-t,s=1<<n-1-e,o=Array.from(i);for(let a=0;a<i.length;a++){if(!(a&r)||a&s)continue;const l=a|s;o[a]=i[l],o[l]=i[a]}return o}function Kh(i,t,e){const n=1<<e-1-t;let r=0,s=0;for(let o=0;o<i.length;o++){const a=Vs(i[o]);o&n?s+=a:r+=a}return{p0:r,p1:s}}function Zh(i,t,e,n){const r=1<<n-1-t,s=i.map((o,a)=>(a&r)===(e?r:0)?o:C(0,0));return Fo(s)}function Cs(i,t,e){const n=1<<e-1-t,r=[[C(0,0),C(0,0)],[C(0,0),C(0,0)]];for(let s=0;s<i.length;s+=n*2)for(let o=0;o<n;o++){const a=s+o,l=a+n,c=i[a],h=i[l];r[0][0]=cn(r[0][0],ne(c,tn(c))),r[0][1]=cn(r[0][1],ne(c,tn(h))),r[1][0]=cn(r[1][0],ne(h,tn(c))),r[1][1]=cn(r[1][1],ne(h,tn(h)))}return r}function Ws(i,t,e,n){const r=1<<n-1-t,s=1<<n-1-e,o=~(r|s),a=Array.from({length:4},()=>Array(4).fill(C(0,0))),l=new Map;for(let c=0;c<i.length;c++){const h=c&o,u=c&r?1:0,d=c&s?1:0,m=u<<1|d;l.has(h)||l.set(h,[C(0,0),C(0,0),C(0,0),C(0,0)]);const g=l.get(h);g[m]=i[c]}return l.forEach(c=>{for(let h=0;h<4;h++)for(let u=0;u<4;u++)a[h][u]=cn(a[h][u],ne(c[h],tn(c[u])))}),a}const Gc=[[C(0,0),C(1,0)],[C(1,0),C(0,0)]],Hc=[[C(0,0),C(0,-1)],[C(0,1),C(0,0)]],kc=[[C(1,0),C(0,0)],[C(0,0),C(-1,0)]],Ji=[[C(1,0),C(0,0)],[C(0,0),C(1,0)]];function gi(i,t){const e=Array.from({length:4},()=>Array(4).fill(C(0,0)));for(let n=0;n<2;n++)for(let r=0;r<2;r++)for(let s=0;s<2;s++)for(let o=0;o<2;o++){const a=n*2+s,l=r*2+o;e[a][l]=ne(i[n][r],t[s][o])}return e}function Xs(i,t){const e=Array.from({length:4},()=>Array(4).fill(C(0,0)));for(let n=0;n<4;n++)for(let r=0;r<4;r++){let s=C(0,0);for(let o=0;o<4;o++)s=cn(s,ne(i[n][o],t[o][r]));e[n][r]=s}return e}function C0(i){const t=Array.from({length:4},()=>Array(4).fill(C(0,0)));for(let e=0;e<4;e++)for(let n=0;n<4;n++)t[e][n]=tn(i[n][e]);return t}const L0=[[C(1,0),C(0,0),C(0,0),C(0,0)],[C(0,0),C(1,0),C(0,0),C(0,0)],[C(0,0),C(0,0),C(0,0),C(1,0)],[C(0,0),C(0,0),C(1,0),C(0,0)]],Vc=[[C(1,0),C(0,0),C(0,0),C(0,0)],[C(0,0),C(0,0),C(1,0),C(0,0)],[C(0,0),C(1,0),C(0,0),C(0,0)],[C(0,0),C(0,0),C(0,0),C(1,0)]];function Wc(i,t){const e=[[C(0,0),C(0,0)],[C(0,0),C(0,0)]];for(let n=0;n<2;n++)for(let r=0;r<2;r++){let s=C(0,0);for(let o=0;o<2;o++){const a=t===0?o*2+n:n*2+o,l=t===0?o*2+r:r*2+o;s=cn(s,i[a][l])}e[n][r]=s}return e}function sa(i){let t=0;for(let e=0;e<2;e++)for(let n=0;n<2;n++){const r=ne(i[e][n],i[n][e]);t+=r.re}return t}function zo(i,t=1e-6){if(sa(i)<1-t)return null;const n=Math.max(0,i[0][0].re),r=Math.max(0,i[1][1].re),s=i[0][1],o=Math.sqrt(n);let a=C(o,0),l=C(0,0);if(o>1e-6){const c=Br(s,1/o);l=tn(c)}else l=C(Math.sqrt(r),0);return yn({alpha:a,beta:l})}function Si(i){const t=i[0][1].re+i[1][0].re,e=v0*(i[0][1].im-i[1][0].im),n=i[0][0].re-i[1][1].re;return{x:t,y:e,z:n}}function $a(i,t,e){const n=gi(t,e);let r=0;for(let s=0;s<4;s++)for(let o=0;o<4;o++){const a=ne(i[s][o],n[o][s]);r+=a.re}return r}function dr(i,t=1e-6){const e=y0(i);return T0(e)<-t}const ja=(i,t,e)=>i+(t-i)*Math.max(0,Math.min(1,e)),P0=i=>1-Math.pow(1-i,3),D0=i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),Xc={dark:{bg:"#050505",sphere:"#0f0f0f",wire:"#ffffff",axis:"#67d5ff",arrow:"#ffffff",emissive:"#7a7a7a",trace:"#ffffff"},light:{bg:"#f8f8f6",sphere:"#ffffff",wire:"#2a2a2a",axis:"#c91873",arrow:"#000000",emissive:"#444444",trace:"#000000"}};function Rr(i,t){const e=getComputedStyle(document.documentElement).getPropertyValue(i);return(e==null?void 0:e.trim())||t}function qc(i,t,e=16){const n=document.createElement("canvas");n.width=e,n.height=e;const r=n.getContext("2d"),s=i.getStyle?i.getStyle():i,o=t.getStyle?t.getStyle():t;for(let u=0;u<e;u++)for(let d=0;d<e;d++)r.fillStyle=Math.random()>.5?s:o,r.fillRect(d,u,1,1);const a=r.getImageData(0,0,e,e),l=(e-1)/2,c=(e-1)/2;for(let u=0;u<e;u++)for(let d=0;d<e;d++){const m=(d-l)/l,g=(u-c)/c,x=Math.sqrt(m*m+g*g),p=Math.max(0,1-x),f=(u*e+d)*4+3;a.data[f]=Math.round(a.data[f]*Math.pow(p,1.5))}r.putImageData(a,0,0);const h=new No(n);return h.magFilter=me,h.minFilter=me,h.wrapS=Ur,h.wrapT=Ur,h.generateMipmaps=!1,h.needsUpdate=!0,h}function I0(i="ENT"){const t=document.createElement("canvas");t.width=48,t.height=48;const e=t.getContext("2d");e.fillStyle="transparent",e.fillRect(0,0,t.width,t.height),e.fillStyle="#ffffff",e.font="bold 18px 'Press Start 2P', monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(i,t.width/2,t.height/2+2);const n=new No(t);return n.magFilter=me,n.minFilter=me,n.generateMipmaps=!1,n.needsUpdate=!0,n}function U0(i,t=.12,e="#ffffff"){return new Promise(n=>{const r=document.createElement("div");r.style.position="absolute",r.style.visibility="hidden",r.style.pointerEvents="none",r.innerHTML=`\\(${i}\\)`,document.body.appendChild(r);const s=o=>{o.depthTest=!1,o.depthWrite=!1;const a=new ho(o);a.scale.set(t,t,t),document.body.removeChild(r),n(a)};if(typeof MathJax>"u"){const o=new nr({color:new xt(e)});s(o);return}MathJax.typesetPromise([r]).then(()=>{const o=r.querySelector("svg");if(!o){const u=new nr({color:new xt(e)});s(u);return}o.setAttribute("fill",e),o.setAttribute("stroke",e),o.querySelectorAll("*").forEach(u=>{u.setAttribute("fill",e),u.setAttribute("stroke",e)});const a=new XMLSerializer().serializeToString(o),c="data:image/svg+xml;base64,"+btoa(a);new c0().load(c,u=>{const d=new nr({map:u,transparent:!0,color:new xt(e)});s(d)})})})}class N0{constructor({mountEl:t,qubitIndex:e}){this.mountEl=t,this.qubitIndex=e,this.state=yn({alpha:C(1,0),beta:C(0,0)}),this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.blochGroup=null,this.arrow=null,this.point=null,this.tracePoints=[],this.traceLine=null,this.isAnimating=!1,this.animStart=0,this.animDuration=450,this.animAxis=null,this.animFrom=null,this.animAngle=0,this._animResolve=null,this.MAX_TRACE=1800,this._raf=null,this.currentTheme=document.documentElement.getAttribute("data-theme")||"dark",this.palette=this._getPalette(this.currentTheme),this.labelSprites=[],this.axisMaterials=[],this.sphereMat=null,this.sphereWireMat=null,this.baseCameraPos=null,this.entanglement={level:0,colorA:new xt(Rr("--pop-cyan","#67d5ff")),colorB:new xt(Rr("--pop-pink","#ff6fa3")),mix:new xt("#ffffff"),fogTexture:null,fogMaterial:null,fogSprite:null,fogOffset:new yt(Math.random(),Math.random()),fogSeed:Math.random()*1e3,glyphTexture:null,glyphSprite:null,glyphScale:0,flash:0,rgbShift:new yt(0,0),cameraShake:0,lastTick:performance.now()},this.entanglement.mix.copy(this.entanglement.colorA.clone().lerp(this.entanglement.colorB,.5))}init(){const t=this.mountEl.clientWidth||300,e=this.mountEl.clientHeight||300;this.scene=new Xh,this.scene.background=new xt(this.palette.bg),this.camera=new rn(40,t/e,.1,100),this.camera.position.set(2.8,2.2,2.8),this.baseCameraPos=this.camera.position.clone(),this.renderer=new Uo({antialias:!1,alpha:!0}),this.renderer.setSize(t,e),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.domElement.style.imageRendering="pixelated",this.mountEl.appendChild(this.renderer.domElement),this.controls=new g0(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.scene.add(new jh(16777215,.45));const n=new $h(16777215,.9);n.position.set(3,4,2),this.scene.add(n),this.blochGroup=new Zi,this.scene.add(this.blochGroup),this.blochGroup.rotation.x=-Math.PI/2;const r=new ks(1,48,48);this.sphereMat=new Ac({color:new xt(this.palette.sphere),transparent:!0,opacity:.42}),this.blochGroup.add(new Pe(r,this.sphereMat)),this.sphereWireMat=new Pr({color:new xt(this.palette.wire),opacity:.55,transparent:!0});const s=new r0(new s0(r),this.sphereWireMat);this.blochGroup.add(s);const o=(c,h)=>{const u=new Pr({color:new xt(this.palette.axis)});return this.axisMaterials.push(u),new Gs(new De().setFromPoints([c,h]),u)};this.blochGroup.add(o(new I(-1.2,0,0),new I(1.2,0,0)),o(new I(0,-1.2,0),new I(0,1.2,0)),o(new I(0,0,-1.2),new I(0,0,1.2))),(async()=>{const c=this.palette.label,h=async(u,d)=>{var g,x;const m=await U0(u,.12,c);m.position.set(...d),(x=(g=m.material)==null?void 0:g.color)==null||x.set(c),this.labelSprites.push(m),this.blochGroup.add(m)};await h("|0\\rangle",[0,0,1.25]),await h("|1\\rangle",[0,0,-1.25]),await h("|+\\rangle",[1.25,0,0]),await h("|-\\rangle",[-1.25,0,0]),await h("|i\\rangle",[0,1.25,0]),await h("|-i\\rangle",[0,-1.25,0])})();const a=wr(this.state),l=new I(a.x,a.y,a.z);this.arrow=new d0(l.clone().normalize(),new I(0,0,0),.9,new xt(this.palette.arrow),.12,.06),this.blochGroup.add(this.arrow),this.point=new Pe(new ks(.05,24,24),new Ac({color:new xt(this.palette.arrow),emissive:new xt(this.palette.emissive)})),this.point.position.copy(l),this.blochGroup.add(this.point),this.tracePoints=[l.clone()],this.traceLine=new Gs(new De().setFromPoints(this.tracePoints),new Pr({color:new xt(this.palette.trace),transparent:!0,depthTest:!1})),this.traceLine.renderOrder=10,this.blochGroup.add(this.traceLine),this._initFogOverlay(),this._initGlyph(),this._applyPalette(),this._animateLoop()}destroy(){var t,e,n,r,s;this._raf&&cancelAnimationFrame(this._raf),(e=(t=this.renderer)==null?void 0:t.domElement)!=null&&e.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),(n=this.traceLine)!=null&&n.geometry&&this.traceLine.geometry.dispose(),(s=(r=this.renderer)==null?void 0:r.dispose)==null||s.call(r)}resize(){if(!this.renderer||!this.camera)return;const t=this.mountEl.clientWidth||300,e=this.mountEl.clientHeight||300;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}setStateAndTrace(t,e,{hideArrow:n=!1,hideTrace:r=!1}={}){var s;if(this.isAnimating=!1,(s=this._animResolve)==null||s.call(this),this._animResolve=null,this.forceHideArrow=!!n,this.forceHideTrace=!!r,t.rho){const o=zo(t.rho);o?this.state=yn({alpha:C(o.alpha.re,o.alpha.im),beta:C(o.beta.re,o.beta.im)}):this.state={rho:t.rho.map(a=>a.map(l=>({re:l.re,im:l.im})))}}else this.state=yn({alpha:C(t.alpha.re,t.alpha.im),beta:C(t.beta.re,t.beta.im)});this.tracePoints=e&&e.length?e.map(o=>new I(o.x,o.y,o.z)):[new I(...Object.values(wr(this.state)))],this._rebuildTraceGeometry(),this._redrawFromState(!1)}applyGateAsync(t,{animate:e=!0,duration:n=450}={}){const r=sn[t];if(!r)return Promise.resolve();if(!e){const s=wr(this.state),o=new I(s.x,s.y,s.z);if(zc(this.state,t),!this.state.rho){const a=new I(r.axis.x,r.axis.y,r.axis.z).normalize();this._addGateArc(o,a,r.angle)}return this._redrawFromState(!1),Promise.resolve()}return this.isAnimating?Promise.resolve():new Promise(s=>{const o=wr(this.state),a=new I(o.x,o.y,o.z);if(zc(this.state,t),this.state.rho){this._redrawFromState(!0),s();return}const l=new I(r.axis.x,r.axis.y,r.axis.z).normalize();this.isAnimating=!0,this.animStart=performance.now(),this.animDuration=n,this.animAxis=l,this.animFrom=a.clone(),this.animAngle=r.angle,this._animResolve=()=>s()})}_animateLoop(){var t,e,n,r;this._raf=requestAnimationFrame(()=>this._animateLoop()),(e=(t=this.controls)==null?void 0:t.update)==null||e.call(t),this._tickEntanglement(),this.isAnimating&&this._animateGateStep(),(r=(n=this.renderer)==null?void 0:n.render)==null||r.call(n,this.scene,this.camera)}_animateGateStep(){const t=performance.now(),e=Math.min((t-this.animStart)/this.animDuration,1),n=this.animAngle*e,r=this._rotateVectorAroundAxis(this.animFrom,this.animAxis,n),s=r.length(),o=1e-4,a=s>o?r.clone().normalize():new I(0,0,1),l=Math.max(0,Math.min(1,s));if(this._applyVectorVisuals(a,l,s>o&&!this.forceHideArrow,r),this.tracePoints.push(r.clone()),this.tracePoints.length>this.MAX_TRACE&&this.tracePoints.shift(),this._rebuildTraceGeometry(),e>=1){this.isAnimating=!1,this._redrawFromState(!1);const c=this._animResolve;this._animResolve=null,c&&c()}}_redrawFromState(t=!1){var c;const e=wr(this.state),n=new I(e.x,e.y,e.z),r=n.length(),s=1e-4,o=r>s?n.clone().normalize():new I(0,0,1),a=Math.max(0,Math.min(1,r)),l=r>s&&!this.forceHideArrow;this._applyVectorVisuals(o,a,l,n),t&&(this.tracePoints=[n.clone()],this._rebuildTraceGeometry()),(c=this.traceLine)!=null&&c.material&&(this.traceLine.visible=!this.forceHideTrace,this.traceLine.material.opacity=this.forceHideTrace?0:1)}_rebuildTraceGeometry(){this.traceLine&&(this.traceLine.geometry.dispose(),this.traceLine.geometry=new De().setFromPoints(this.tracePoints))}_rotateVectorAroundAxis(t,e,n){const r=t.clone(),s=e.clone().normalize(),o=Math.cos(n),a=Math.sin(n),l=r.clone().multiplyScalar(o),c=new I().crossVectors(s,r).multiplyScalar(a),h=s.clone().multiplyScalar(s.dot(r)*(1-o));return l.add(c).add(h)}_addGateArc(t,e,n,r=48){const s=t.clone().normalize();for(let o=1;o<=r;o++){const a=o/r,l=n*a,c=this._rotateVectorAroundAxis(s,e,l).normalize();this.tracePoints.push(c.clone()),this.tracePoints.length>this.MAX_TRACE&&this.tracePoints.shift()}this._rebuildTraceGeometry()}setTheme(t){this.currentTheme=t==="light"?"light":"dark",this.palette=this._getPalette(this.currentTheme),this.entanglement.colorA.set(Rr("--pop-cyan","#67d5ff")),this.entanglement.colorB.set(Rr("--pop-pink","#ff6fa3")),this.entanglement.mix.copy(this.entanglement.colorA.clone().lerp(this.entanglement.colorB,.5)),this._refreshFogTexture(),this._applyPalette(),this._redrawFromState(!1)}setEntanglementVisuals({level:t=0,colorA:e,colorB:n,flash:r=0,rgbShift:s,cameraShake:o=0}={}){this.entanglement.level=Math.max(0,Math.min(1,t));let a=!1;e&&!this.entanglement.colorA.equals(e)&&(this.entanglement.colorA.copy(e),a=!0),n&&!this.entanglement.colorB.equals(n)&&(this.entanglement.colorB.copy(n),a=!0),r>0&&(this.entanglement.flash=Math.max(this.entanglement.flash,r)),s?this.entanglement.rgbShift.copy(s):this.entanglement.rgbShift.set(0,0),this.entanglement.cameraShake=o,a&&(this.entanglement.mix.copy(this.entanglement.colorA.clone().lerp(this.entanglement.colorB,.5)),this._refreshFogTexture())}_applyPalette(){var e,n,r,s,o;if(!this.palette)return;const t=this.palette;this.scene.background=new xt(t.bg),(e=this.renderer)==null||e.setClearColor(new xt(t.bg),1),this.sphereMat&&this.sphereMat.color.set(t.sphere),this.sphereWireMat&&this.sphereWireMat.color.set(t.wire),this.axisMaterials.forEach(a=>a.color.set(t.axis)),this.arrow&&this.arrow.setColor(new xt(t.arrow)),(n=this.point)!=null&&n.material&&(this.point.material.color.set(t.arrow),this.point.material.emissive.set(t.emissive)),(r=this.traceLine)!=null&&r.material&&this.traceLine.material.color.set(t.trace),this.labelSprites.forEach(a=>{var l,c;return(c=(l=a.material)==null?void 0:l.color)==null?void 0:c.set(t.label)}),(s=this.renderer)!=null&&s.domElement&&(this.renderer.domElement.style.backgroundColor=t.bg),this.sphereMat&&(this.sphereMat.emissive=new xt(t.axis).multiplyScalar(.08),this.sphereMat.emissiveIntensity=.5),this.entanglement.fogMaterial&&this.entanglement.fogMaterial.color.set(this.entanglement.mix),(o=this.entanglement.glyphSprite)!=null&&o.material&&this.entanglement.glyphSprite.material.color.set(this.entanglement.mix)}_applyVectorVisuals(t,e,n,r){const s=ja(1,.25,this.entanglement.level),o=ja(1,.25,this.entanglement.level);this.arrow.setDirection(t),this.arrow.setLength(Math.max(.08,e*s),.12*s,.06*s);const a=Math.max(.2,Math.min(1,e))*o;this.arrow.line&&this.arrow.line.material&&(this.arrow.line.material.transparent=!0,this.arrow.line.material.opacity=n?a:0),this.arrow.cone&&this.arrow.cone.material&&(this.arrow.cone.material.transparent=!0,this.arrow.cone.material.opacity=n?a:0),this.point.visible=n,n?this.point.position.copy(r.clone().multiplyScalar(s)):this.point.position.set(0,0,0)}_initFogOverlay(){const t=qc(this.entanglement.colorA,this.entanglement.colorB,12),e=new nr({map:t,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:to,color:this.entanglement.mix}),n=new ho(e);n.scale.set(2.4,2.4,2.4),n.renderOrder=5,this.blochGroup.add(n),this.entanglement.fogTexture=t,this.entanglement.fogMaterial=e,this.entanglement.fogSprite=n}_initGlyph(){const t=I0("Φ+"),e=new nr({map:t,transparent:!0,depthTest:!1,depthWrite:!1,color:this.entanglement.mix,opacity:0}),n=new ho(e);n.position.set(1.5,.2,1.1),n.scale.set(.001,.001,.001),n.renderOrder=12,this.blochGroup.add(n),this.entanglement.glyphTexture=t,this.entanglement.glyphSprite=n}_refreshFogTexture(){var e,n;if(!this.entanglement.fogMaterial)return;const t=qc(this.entanglement.colorA,this.entanglement.colorB,12);(n=(e=this.entanglement.fogTexture)==null?void 0:e.dispose)==null||n.call(e),this.entanglement.fogTexture=t,this.entanglement.fogMaterial.map=t,this.entanglement.fogMaterial.color.copy(this.entanglement.mix)}_tickEntanglement(){var r;const t=performance.now(),e=Math.max(0,(t-this.entanglement.lastTick)/1e3);this.entanglement.lastTick=t;const n=this.entanglement.level;if(this.entanglement.fogMaterial&&this.entanglement.fogTexture&&this.entanglement.fogSprite){const s=P0(n),o=ja(0,.8,s);this.entanglement.fogMaterial.opacity=o*(1+this.entanglement.flash*.8),this.entanglement.fogMaterial.color.copy(this.entanglement.mix),this.entanglement.fogSprite.visible=o>.01,this.entanglement.fogTexture.offset.set(.5*this.entanglement.rgbShift.x,.5*this.entanglement.rgbShift.y),this.entanglement.fogSprite.scale.setScalar(2.05)}if((r=this.entanglement.glyphSprite)!=null&&r.material){const s=n>.05?1:0,o=n>.05?4:6;this.entanglement.glyphScale=Ah.lerp(this.entanglement.glyphScale,s,1-Math.exp(-e*o));const a=D0(this.entanglement.glyphScale),l=1+.05*Math.sin(t*.005),c=.6*a*l;this.entanglement.glyphSprite.scale.set(c,c,c),this.entanglement.glyphSprite.material.opacity=Math.min(1,a)*Math.max(0,n),this.entanglement.glyphSprite.material.color.copy(this.entanglement.mix)}if(this.camera)if(this.entanglement.cameraShake>0){const s=this.baseCameraPos||this.camera.position.clone(),o=this.entanglement.cameraShake*(.5+.5*Math.sin(t*.09)),a=new I((Math.random()-.5)*o,(Math.random()-.5)*o,(Math.random()-.5)*o);this.camera.position.copy(s.clone().add(a)),this.camera.lookAt(0,0,0)}else this.baseCameraPos=this.camera.position.clone();if(this.sphereMat){const s=this.entanglement.flash*.9;this.sphereMat.emissiveIntensity=.5+s}this.entanglement.flash>0&&(this.entanglement.flash=Math.max(0,this.entanglement.flash-e*4)),this.entanglement.fogMaterial&&(this.entanglement.fogMaterial.needsUpdate=!0)}_getPalette(t){const e=Xc[t]||Xc.dark;return{...e,label:Rr("--bloch-label",e.axis)}}}const Ka=(i,t,e)=>i+(t-i)*Math.max(0,Math.min(1,e)),O0=i=>1-Math.pow(1-i,3);function As(i,t){const e=getComputedStyle(document.documentElement).getPropertyValue(i);return(e==null?void 0:e.trim())||t}class F0{constructor({containerEl:t,widgets:e=[],pair:n=[0,1],pairs:r=null}={}){this.containerEl=t,this.widgets=e,this.pairs=r||[n],this.currentLevel=0,this.levelAnim=null,this.colorA=new xt(As("--pop-cyan","#67d5ff")),this.colorB=new xt(As("--pop-pink","#ff6fa3")),this.burst={flashUntil:0,rgbUntil:0,shakeUntil:0},this.segmentCount=10,this.baseJitter=6,this.pulseSpeed=.6,this._phaseSeeds=Array.from({length:this.segmentCount},()=>Math.random()*Math.PI*2),this._resizeObserver=null,this.canvas=null,this.ctx=null,this._raf=null,this._lastTime=performance.now(),this._initScene(),this._loop()}setWidgets(t=[]){this.widgets=t}setPair(t=[0,1]){this.pairs=[t]}setPairs(t=[]){if(!(t!=null&&t.length)){this.pairs=[];return}this.pairs=t.map(e=>[e[0],e[1]])}refreshPalette(){this.colorA.set(As("--pop-cyan","#67d5ff")),this.colorB.set(As("--pop-pink","#ff6fa3"))}isAnimating(){return!!this.levelAnim}setEntanglementLevel(t){const e=Math.max(0,Math.min(1,t));this.currentLevel=e,this.levelAnim=null}clearEntanglement(t=420){this._startLevelAnim(0,t)}triggerEntanglementBurst(t=150){const e=performance.now();this.burst.flashUntil=e+30,this.burst.rgbUntil=e+t+60,this.burst.shakeUntil=e+140,this._startLevelAnim(1,480,t)}dispose(){var t,e,n;this._raf&&cancelAnimationFrame(this._raf),(e=(t=this._resizeObserver)==null?void 0:t.disconnect)==null||e.call(t),(n=this.canvas)!=null&&n.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.canvas=null,this.ctx=null}_startLevelAnim(t,e=360,n=0){const r=performance.now();this.levelAnim={from:this.currentLevel,to:Math.max(0,Math.min(1,t)),start:r+n,duration:Math.max(50,e)}}_initScene(){if(!this.containerEl)return;const{clientWidth:t=400,clientHeight:e=400}=this.containerEl;this.canvas=document.createElement("canvas"),this.canvas.width=t,this.canvas.height=e,this.canvas.style.position="absolute",this.canvas.style.left="0",this.canvas.style.top="0",this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.pointerEvents="none",this.canvas.style.imageRendering="pixelated",this.canvas.style.zIndex="2",this.ctx=this.canvas.getContext("2d"),this.containerEl.appendChild(this.canvas),this._watchResize()}_loop(){this._raf=requestAnimationFrame(()=>this._loop()),this._update()}resize(){if(!this.canvas||!this.containerEl)return;const t=this.containerEl.getBoundingClientRect(),e=Math.max(1,Math.floor(t.width)),n=Math.max(1,Math.floor(t.height));this.canvas.width=e,this.canvas.height=n,this.canvas.style.width="100%",this.canvas.style.height="100%"}_update(){const t=performance.now(),e=Math.max(0,(t-this._lastTime)/1e3);this._lastTime=t;const n=this.levelAnim;if(n&&!(t<n.start))if(t>=n.start+n.duration)this.currentLevel=n.to,this.levelAnim=null;else{const r=(t-n.start)/n.duration;this.currentLevel=Ka(n.from,n.to,O0(r))}this._updateBlochVisuals(t),this._updateTether(t,e)}_updateBlochVisuals(t){const e=t<this.burst.flashUntil?1:0,n=t<this.burst.rgbUntil?new yt((Math.random()-.5)*.35,(Math.random()-.5)*.35):null,r=t<this.burst.shakeUntil?.05:0,s=this.currentLevel,o=this.pairs||[],a=new Set;o.forEach(([l,c])=>{a.add(l),a.add(c)}),this.widgets.forEach((l,c)=>{const h=l==null?void 0:l.widget;if(!h||!h.setEntanglementVisuals)return;const u=a.has(c),m=o.findIndex(g=>g[0]===c||g[1]===c)%2===0?this.colorA:this.colorB;h.setEntanglementVisuals({level:u?s:0,colorA:m,colorB:m,flash:u?e:0,rgbShift:n,cameraShake:u?r:0})})}_updateTether(t,e){if(!this.canvas||!this.ctx||!this.containerEl)return;const n=this._computeAnchors(),r=this.currentLevel,s=Ka(0,.9,r);if(!!!(n!=null&&n.length)||s<.01){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);return}this._resizeIfNeeded(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const a=Ka(0,this.baseJitter*1.2,r)*(.5+.5*Math.sin(t*.018*18)),l=t*.001*this.pulseSpeed%1;this.ctx.lineCap="square",this.ctx.lineJoin="miter",this.ctx.globalAlpha=1;const c=(h,u,d)=>new xt(u).lerp(new xt(d),h).getStyle();n.forEach(({ax:h,ay:u,bx:d,by:m,colorA:g,colorB:x})=>{const p=()=>(Math.random()-.5)*a,f=(h+d)/2+p(),y=(u+m)/2+p();for(let v=0;v<this.segmentCount;v++){const S=v/this.segmentCount,P=(v+1)/this.segmentCount,R=h+(f-h)*S+p(),A=u+(y-u)*S+p(),G=h+(f-h)*P+p(),j=u+(y-u)*P+p(),_=f+(d-f)*S+p(),T=y+(m-y)*S+p(),F=f+(d-f)*P+p(),q=y+(m-y)*P+p(),D=(S+l)%1,B=(.4+.4*Math.sin(D*Math.PI*2))*s,O=c(S,g,x),Y=c(P,g,x);this.ctx.strokeStyle=O,this.ctx.globalAlpha=B,this.ctx.lineWidth=5,this.ctx.beginPath(),this.ctx.moveTo(R,A),this.ctx.lineTo(G,j),this.ctx.stroke(),this.ctx.strokeStyle=Y,this.ctx.beginPath(),this.ctx.moveTo(_,T),this.ctx.lineTo(F,q),this.ctx.stroke()}})}_resizeIfNeeded(){const t=this.containerEl.getBoundingClientRect(),e=Math.max(1,Math.floor(t.width))||window.innerWidth,n=Math.max(1,Math.floor(t.height))||window.innerHeight,r=this.canvas;return r&&(r.width!==e||r.height!==n)&&(r.width=e,r.height=n,r.style.width="100%",r.style.height="100%"),{width:e,height:n}}_computeAnchors(){var s,o;if(!this.containerEl||!((s=this.widgets)!=null&&s.length)||!((o=this.pairs)!=null&&o.length))return null;const t=this.containerEl.getBoundingClientRect(),e=this.containerEl.scrollLeft,n=this.containerEl.scrollTop,r=[];return this.pairs.forEach((a,l)=>{var P,R,A,G,j,_,T,F;const[c,h]=a,u=this.widgets[c],d=this.widgets[h];if(!u||!d)return;const m=(G=(A=((R=(P=u.widget)==null?void 0:P.renderer)==null?void 0:R.domElement)||u.mountEl)==null?void 0:A.getBoundingClientRect)==null?void 0:G.call(A),g=(F=(T=((_=(j=d.widget)==null?void 0:j.renderer)==null?void 0:_.domElement)||d.mountEl)==null?void 0:T.getBoundingClientRect)==null?void 0:F.call(T);if(!m||!g)return;const x=m.left+m.width/2-t.left+e,p=m.top+m.height/2-t.top+n,f=g.left+g.width/2-t.left+e,y=g.top+g.height/2-t.top+n,v=(l%2===0?this.colorA:this.colorB).getStyle(),S=v;r.push({ax:x,ay:p,bx:f,by:y,colorA:v,colorB:S})}),r}_watchResize(){!this.containerEl||typeof ResizeObserver>"u"||(this._resizeObserver=new ResizeObserver(()=>this.resize()),this._resizeObserver.observe(this.containerEl))}}function tt(i){return document.getElementById(i)}function mo(i,t){const e=tt(i);e&&(e.textContent=t)}Xs(Xs(Vc,L0),Vc);const qs=10;let ot=2,Sn=0,se=[],fr=[];const Ys={0:{alpha:C(1,0),beta:C(0,0),label:"|0\\rangle"},1:{alpha:C(0,0),beta:C(1,0),label:"|1\\rangle"},"+":{alpha:C(ce,0),beta:C(ce,0),label:"|+\\rangle"},"-":{alpha:C(ce,0),beta:C(-ce,0),label:"|-\\rangle"},i:{alpha:C(ce,0),beta:C(0,ce),label:"|i\\rangle"},"-i":{alpha:C(ce,0),beta:C(0,-ce),label:"|-i\\rangle"}},B0={prevStep:"⬅️ Step back one gate",nextStep:"➡️ Step forward one gate",playPause:"⏯ Play / pause timeline",resetState:"🔄 Reset visualization state",addQubitTop:"➕ Add a qubit wire",removeQubitTop:"➖ Remove a qubit wire",addQubit:"➕ Add a qubit wire",removeQubit:"➖ Remove a qubit wire",openProbPopover:"📊 Show probabilities",openBackendDrawer:"📐 Open math drawer",toggleTrajectory:"🧭 Toggle Bloch trail",toggleTrajectoryBtn:"🧭 Toggle Bloch trail",toggleMeasurementAnim:"🪙 Toggle measurement flip animation",gateLibToggle:"📚 Collapse / expand gate library",moreMenuBtn:"⋮ More options",menuClearCircuit:"🧹 Clear entire circuit",menuExportJson:"💾 Export circuit JSON",menuExportPng:"🖼 Export screenshot",themeToggle:"Switch dark / light mode",menuTheme:"Toggle theme",inspectRho:"⧉ Inspect density matrix",measureQ0:"📏 Measure qubit 0",measureQ1:"📏 Measure qubit 1",copyLatex:"⧉ Copy LaTeX",closeBackendDrawer:"✕ Close drawer",openProbBtn:"📊 Show probabilities",openMathBtn:"📐 Open math drawer"};let ir=null,pr=null,we=[],Xe=[],zn=[],$s=!0,Fe=null,ws=0,Ln=[0,1],It=null,Qn=0,re=new Map,vn=null;const Yc="blochTileMinPx",Za="settingsPanelPos",$c="settingsPanelCollapsed";let Dr=null,Ls=null,Ja=!1,Nn=null;const z0=1e-6,Jh="pixelMode";let an="dark";function G0(){try{const i=localStorage.getItem(Jh);if(i==="light"||i==="dark")return i}catch{}return"dark"}function H0(){const i=tt("themeToggleLabel");i&&(i.textContent=an==="dark"?"Dark":"Light")}function Qh(i){var t,e;an=i==="light"?"light":"dark",document.documentElement.setAttribute("data-theme",an),document.body.setAttribute("data-theme",an);try{localStorage.setItem(Jh,an)}catch{}H0(),se.forEach(({widget:n})=>{var r;return(r=n==null?void 0:n.setTheme)==null?void 0:r.call(n,an)}),(t=Fe==null?void 0:Fe.setTheme)==null||t.call(Fe,an),(e=It==null?void 0:It.refreshPalette)==null||e.call(It)}function jc(){Qh(an==="dark"?"light":"dark")}function tu(){var t;const i=tt("bloch-grid");if(!i)throw new Error("Missing #bloch-grid in index.html");i.innerHTML="",se.forEach(({widget:e,ro:n})=>{var r,s;(r=n==null?void 0:n.disconnect)==null||r.call(n),(s=e==null?void 0:e.destroy)==null||s.call(e)}),se=[];for(let e=0;e<ot;e++){const n=document.createElement("div");n.className="bloch-tile"+(e===Sn?" selected":"");const r=document.createElement("div");r.className="bloch-tile-header",r.textContent=`Qubit q${e}`;const s=document.createElement("span");s.className="selection-pill",s.textContent="Selected",r.appendChild(s);const o=document.createElement("span");o.className="entangled-tag",o.textContent="Entangled",r.appendChild(o),n.appendChild(r);const a=document.createElement("div");a.className="tile-canvas",n.appendChild(a);const l=document.createElement("div");l.className="purity-chip",l.textContent="ρ purity: 1.00",n.appendChild(l);const c=document.createElement("div");c.className="measurement-badge",c.textContent="",n.appendChild(c);const h=document.createElement("div");h.className="state-chip",h.textContent="",n.appendChild(h),n.addEventListener("click",()=>{Sn=e,Kc(),kr(),ii()}),i.appendChild(n);const u=new N0({mountEl:a,qubitIndex:e});u.init(),(t=u.setTheme)==null||t.call(u,an);const d=new ResizeObserver(()=>u.resize());d.observe(a),d.observe(n),se.push({tileEl:n,mountEl:a,widget:u,ro:d,purityEl:l,measEl:c,stateChipEl:h,entTagEl:o})}Kc(),aa(),requestAnimationFrame(zr),du()}function aa(){var t;const i=tt("blochCanvas");i&&(It?(It.setWidgets(se),It.setPairs(Array.from(re.values()).map(e=>e.qubits)),It.refreshPalette(),It.setEntanglementLevel(Qn),(t=It.resize)==null||t.call(It)):It=new F0({containerEl:i,widgets:se,pairs:Array.from(re.values()).map(e=>e.qubits)}))}function eu(i){Qn=_n(Number(i)||0,0,1),aa(),It==null||It.setEntanglementLevel(Qn)}function nu(i=150){aa(),It==null||It.triggerEntanglementBurst(i),Qn=1}function iu(){aa(),Qn=0,It==null||It.clearEntanglement(420)}typeof window<"u"&&(window.setEntanglementLevel=eu,window.triggerEntanglementBurst=nu,window.clearEntanglement=iu);function zr(){var i;se.forEach(({widget:t})=>t.resize()),(i=It==null?void 0:It.resize)==null||i.call(It)}function Kc(){se.forEach(({tileEl:i},t)=>i.classList.toggle("selected",t===Sn))}function ru(){mo("qubitCountNum",String(ot));const i=tt("addQubitTop"),t=tt("removeQubitTop"),e=tt("addQubit"),n=tt("removeQubit");i&&(i.disabled=ot>=qs),t&&(t.disabled=ot<=1),e&&(e.disabled=ot>=qs),n&&(n.disabled=ot<=1)}const su="primarySplitLeftPx";function _n(i,t,e){return Math.max(t,Math.min(e,i))}function go(i,t){return i<t?`${i}-${t}`:`${t}-${i}`}function oa(i,t=re){var e,n;for(const[r,s]of t.entries())if(((e=s==null?void 0:s.qubits)==null?void 0:e[0])===i||((n=s==null?void 0:s.qubits)==null?void 0:n[1])===i)return{key:r,pair:s};return null}function au(i,t=re){return!!oa(i,t)}function k0(){const i=localStorage.getItem(su);if(!i)return;const t=Number(i);!Number.isFinite(t)||t<=0||document.documentElement.style.setProperty("--splitLeft",`${t}px`)}function Zc(i){const t=_n(i,120,520);document.documentElement.style.setProperty("--blochTileMin",`${t}px`);const e=tt("blochTileSizeVal");e&&(e.textContent=`${t}px`);const n=tt("blochTileSize");n&&Number(n.value)!==t&&(n.value=String(t)),document.body.classList.toggle("bloch-single-col",t>=520)}function V0(){const i=Number(localStorage.getItem(Yc)),t=Number.isFinite(i)?i:320;Zc(t);const e=tt("blochTileSize");e&&e.addEventListener("input",n=>{const r=Number(n.target.value);Zc(r),localStorage.setItem(Yc,String(_n(r,120,520))),requestAnimationFrame(zr)})}function W0(){const i=tt("blochOverlay"),t=tt("settingsHeader");if(!i||!t)return;const e=c=>{i.classList.remove("corner-tl","corner-tr","corner-bl","corner-br"),c!=null&&c.corner?(i.classList.add(`corner-${c.corner}`),i.style.left="",i.style.top="",i.style.right="",i.style.bottom=""):Number.isFinite(c==null?void 0:c.left)&&Number.isFinite(c==null?void 0:c.top)&&(i.style.left=`${c.left}px`,i.style.top=`${c.top}px`,i.style.right="auto",i.style.bottom="auto")},n=localStorage.getItem(Za);if(n)try{e(JSON.parse(n))}catch{}else e({corner:"bl"});let r=null;const s=c=>{if(!r)return;const h=r.startLeft+(c.clientX-r.startX),u=r.startTop+(c.clientY-r.startY);e({left:h,top:u})},o=()=>{r&&(localStorage.setItem(Za,JSON.stringify({left:r.lastLeft??i.offsetLeft,top:r.lastTop??i.offsetTop})),r=null,window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o))};t.addEventListener("pointerdown",c=>{r={startX:c.clientX,startY:c.clientY,startLeft:i.offsetLeft,startTop:i.offsetTop},window.addEventListener("pointermove",h=>{r&&(r.lastLeft=r.startLeft+(h.clientX-r.startX),r.lastTop=r.startTop+(h.clientY-r.startY),e({left:r.lastLeft,top:r.lastTop}))}),window.addEventListener("pointerup",o),window.addEventListener("pointercancel",o)}),document.querySelectorAll(".corner-btn").forEach(c=>{c.addEventListener("click",()=>{const h=c.dataset.corner;e({corner:h}),localStorage.setItem(Za,JSON.stringify({corner:h}))})});const a=tt("settingsCollapse");tt("settingsBody"),localStorage.getItem($c)==="1"&&i.classList.add("collapsed"),a==null||a.addEventListener("click",()=>{const c=i.classList.toggle("collapsed");localStorage.setItem($c,c?"1":"0")})}function X0(){const i=tt("primarySplitter"),t=tt("main");if(!i||!t)return;let e=!1;const n=s=>{if(!e)return;const o=t.getBoundingClientRect(),a=s.clientX-o.left,l=340,h=o.width-420,u=_n(a,l,Math.max(l,h));document.documentElement.style.setProperty("--splitLeft",`${u}px`),localStorage.setItem(su,String(Math.round(u))),requestAnimationFrame(zr)},r=()=>{e&&(e=!1,document.body.classList.remove("split-dragging"),window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r))};i.addEventListener("pointerdown",s=>{var a;window.matchMedia("(max-width: 980px)").matches||(e=!0,document.body.classList.add("split-dragging"),(a=i.setPointerCapture)==null||a.call(i,s.pointerId),window.addEventListener("pointermove",n,{passive:!0}),window.addEventListener("pointerup",r,{passive:!0}),window.addEventListener("pointercancel",r,{passive:!0}))}),window.addEventListener("resize",()=>requestAnimationFrame(zr))}const pi=90,Pn=64,js=64,Go=34,q0=12;let $t=q0,ve=[],ae=[],xe=null;const Y0=["H","X","Y","Z","S","T","CX","M"];let qe=null,Se=null,Ye=null;function Ho(){ve=Array.from({length:ot},()=>Array($t).fill(null)),ae=Array.from({length:$t},()=>[]),xe=null,Vo(),pr=null,ir=null,vn=null,re=new Map,Ln=[0,Math.min(1,Math.max(0,ot-1))],we=Array.from({length:$t},()=>Array(ot).fill(null)),Xe=Array.from({length:$t},()=>Array(ot).fill(null)),zn=Array.from({length:ot},()=>null),Qe()}function ko(){if((!ve.length||!ae.length)&&Ho(),Vo(),pr=null,ve.length!==ot&&(ve=Array.from({length:ot},(t,e)=>{const n=ve[e]||[];return Array.from({length:$t},(r,s)=>n[s]??null)})),ve=ve.map(i=>i.length===$t?i:i.length<$t?i.concat(Array($t-i.length).fill(null)):i.slice(0,$t)),ae.length!==$t){const i=ae;ae=Array.from({length:$t},(t,e)=>i[e]?[...i[e]]:[])}if(!we.length)we=Array.from({length:$t},()=>Array(ot).fill(null));else{if(we.length!==$t){const i=we;we=Array.from({length:$t},(t,e)=>i[e]?[...i[e]].slice(0,ot):Array(ot).fill(null))}we=we.map(i=>i.length===ot?i:i.length<ot?i.concat(Array(ot-i.length).fill(null)):i.slice(0,ot))}if(!Xe.length)Xe=Array.from({length:$t},()=>Array(ot).fill(null));else{if(Xe.length!==$t){const i=Xe;Xe=Array.from({length:$t},(t,e)=>i[e]?[...i[e]].slice(0,ot):Array(ot).fill(null))}Xe=Xe.map(i=>i.length===ot?i:i.length<ot?i.concat(Array(ot-i.length).fill(null)):i.slice(0,ot))}zn=Array.from({length:ot},(i,t)=>zn[t]??null);for(let i=0;i<$t;i++)ae[i]=ae[i].filter(t=>t.type!=="CX"||t.control<ot&&t.target<ot);xe&&(xe.control>=ot||xe.step>=$t)&&(xe=null,Qe())}function gr(i){if(we!=null&&we.length)for(let t=i;t<$t;t++)we[t]&&we[t].fill(null),Xe[t]&&Xe[t].fill(null)}function Jc(i){const t=i-pi,e=Math.floor(t/Pn);return Math.max(0,Math.min($t-1,e))}function Qc(i){const t=Math.floor((i-Go)/js);return Math.max(0,Math.min(ot-1,t))}function qn(i){return Go+i*js+js/2}function Ps(i){return pi+i*Pn+Pn/2}function ou(i){return i==="X"?"gate-x":i==="Y"?"gate-y":i==="Z"?"gate-z":i==="H"?"gate-h":i==="S"||i==="Sdg"?"gate-s":i==="T"||i==="Tdg"?"gate-t":i==="M"?"gate-m":""}function $0(i){return{H:"Hadamard: maps |0> -> (|0>+|1>)/√2",X:"Pauli-X: bit flip",Y:"Pauli-Y: phase+bit flip",Z:"Pauli-Z: phase flip",S:"S gate: phase π/2",T:"T gate: phase π/4",CX:"CNOT: drop control (C) first, then target (T)",M:"Measurement symbol (visual)"}[i]||`Gate ${i}`}function j0(i){return{H:"Hadamard creates ± superposition.",X:"Pauli-X flips |0>↔|1>.",Y:"Pauli-Y flips with i phase.",Z:"Pauli-Z adds a π phase to |1>.",S:"S gate: Z-rotation by π/2.",T:"T gate: Z-rotation by π/4.",CX:"Controlled-X (CNOT) flips target if control=1.",M:"Measurement glyph used for visualization."}[i]||""}function lu(i,t){ve[i][t]=null,ae[t]=ae[t].filter(e=>!(e.type==="CX"&&(e.control===i||e.target===i))),gr(t)}function _o(i,t,e){if(e==="CLEAR"){lu(i,t);return}sn[e]&&(ve[i][t]=e,ae[t]=ae[t].filter(n=>!(n.type==="CX"&&(n.control===i||n.target===i))),gr(t))}function K0(i,t){if(!xe){xe={step:t,control:i},Qe();return}if(xe.step!==t){xe={step:t,control:i},Qe();return}const e=xe.control,n=i;xe=null,Qe(),e!==n&&(ve[e][t]=null,ve[n][t]=null,ae[t]=ae[t].filter(r=>r.type!=="CX"?!0:!([r.control,r.target].includes(e)||[r.control,r.target].includes(n))),ae[t].push({type:"CX",control:e,target:n}),gr(t))}function cu(i,t,e){t!==e&&(ve[t][i]=null,ve[e][i]=null,ae[i]=ae[i].filter(n=>n.type!=="CX"?!0:!([n.control,n.target].includes(t)||[n.control,n.target].includes(e))),ae[i].push({type:"CX",control:t,target:e}),gr(i))}function Z0(){const i=ve.every(e=>e.every(n=>!n)),t=ae.every(e=>e.length===0);return i&&t}function J0(){Z0()&&(ot=Math.max(ot,2),ko(),_o(0,1,"H"),cu(3,0,1),_o(0,5,"M"))}function Vo(){fr=Array.from({length:ot},(i,t)=>fr[t]??"0")}function Q0(i,t){if(i<0||i>=ot)return;const e=Ys[t]?t:"0";fr[i]=e,Oe(),Be(Kt)}function Wo(i){const t=Ys[fr[i]]?fr[i]:"0",e=Ys[t];return{alpha:C(e.alpha.re,e.alpha.im),beta:C(e.beta.re,e.beta.im)}}let ti=null;function tv(){if(ti)return ti;const i=document.createElement("div");return i.id="initStateMenu",i.innerHTML=`
    <div class="init-title">Initial state</div>
    <div class="init-options">
      <button type="button" data-state="0">\\(|0\\rangle\\)</button>
      <button type="button" data-state="1">\\(|1\\rangle\\)</button>
      <button type="button" data-state="+">\\(|+\\rangle\\)</button>
      <button type="button" data-state="-">\\(|-\\rangle\\)</button>
      <button type="button" data-state="i">\\(|i\\rangle\\)</button>
      <button type="button" data-state="-i">\\(|-i\\rangle\\)</button>
    </div>
  `,i.addEventListener("click",t=>{const e=t.target.closest("button[data-state]");if(!e)return;const n=Number(i.dataset.q??-1);Q0(n,e.dataset.state),hu()}),document.body.appendChild(i),ur(i),ti=i,i}function th(i,t){const e=tv(),n=t.getBoundingClientRect();e.dataset.q=String(i),e.style.left=`${n.left+window.scrollX}px`,e.style.top=`${n.bottom+6+window.scrollY}px`,e.classList.add("on")}function hu(){ti&&(ti.classList.remove("on"),ti.dataset.q="")}function ev(){if(Dr)return Dr;const i=document.createElement("div");return i.id="hoverTooltip",document.body.appendChild(i),Dr=i,i}function eh(){Ls&&(clearTimeout(Ls),Ls=null),Dr&&Dr.classList.remove("on")}function nv(i){var a;if(!i)return;const t=i.dataset.tip||i.getAttribute("title")||i.getAttribute("aria-label")||((a=i.textContent)==null?void 0:a.trim());if(!t)return;const e=ev();e.innerHTML=`🔘 ${t}`;const n=i.getBoundingClientRect(),r=8,s=n.left+n.width/2,o=n.top-10;e.style.left=`${Math.max(r,Math.min(window.innerWidth-r,s))}px`,e.style.top=`${Math.max(r,o)}px`,e.classList.add("on")}function iv(i){i.forEach(t=>{if(t.dataset.tipBound)return;t.dataset.tipBound="1",t.addEventListener("pointerenter",()=>{eh(),Ls=setTimeout(()=>nv(t),520)});const e=()=>eh();t.addEventListener("pointerleave",e),t.addEventListener("pointerdown",e),t.addEventListener("keydown",e)})}function uu(){const i=["button","input[type=button]","input[type=submit]","label.micro-toggle",".palette-gate",".cgate",".gate-box",".micro-btn",".icon-btn",".menu-item",".micro-icon"],t=Array.from(document.querySelectorAll(i.join(",")));t.forEach(e=>{var n;if(!e.dataset.tip){const s=B0[e.id]||e.getAttribute("aria-label")||e.getAttribute("title")||((n=e.textContent)==null?void 0:n.trim());s&&(e.dataset.tip=s)}}),iv(t.filter(e=>!e.dataset.tipBound))}function du(){Ja||(Ja=!0,requestAnimationFrame(()=>{Ja=!1,uu()}))}function rv(){if(Nn)return Nn;const i=document.createElement("div");return i.id="dragRoleBadge",document.body.appendChild(i),Nn=i,i}function vo(i){const t=rv();t.textContent=i,t.classList.add("on")}function rr(){Nn&&Nn.classList.remove("on")}function nh(i){if(!Nn||!Nn.classList.contains("on"))return;const t=8,e=Math.min(window.innerWidth-t,i.clientX+16),n=Math.min(window.innerHeight-t,i.clientY+16);Nn.style.left=`${Math.max(t,e)}px`,Nn.style.top=`${Math.max(t,n)}px`}function fu(i){const t=sn[i],e=[[C(1,0),C(0,0)],[C(0,0),C(1,0)]],n=(t==null?void 0:t.matrix)??e,r=s=>Mn(s);return`\\[
${i||"I"} =
\\begin{pmatrix}
${r(n[0][0])} & ${r(n[0][1])} \\\\
${r(n[1][0])} & ${r(n[1][1])}
\\end{pmatrix}
\\]`}function pu(i,t){const e=n=>Mn(n);return`\\[
${i} =
\\begin{pmatrix}
${e(t[0][0])} & ${e(t[0][1])} \\\\
${e(t[1][0])} & ${e(t[1][1])}
\\end{pmatrix}
\\]`}function mu(i){var g,x,p,f,y;const t=Math.max(-1,Math.min($t-1,i??$t-1)),e=Array.from({length:ot},(v,S)=>yn(Wo(S))),n=Array.from({length:ot},()=>[]),r=Array.from({length:ot},()=>null),s=[];let o=A0(e.map(v=>yn(hh(v))));const a=()=>{var v;for(let S=0;S<ot;S++){const P=Cs(o,S,ot),R=Si(P);e[S]=ar(P),(v=n[S])==null||v.push(R)}};if(a(),t>=0)for(let v=0;v<=t;v++){for(let S=0;S<ot;S++){const P=(g=ve[S])==null?void 0:g[v];if(P&&sn[P]){if(P==="M"){const D=(x=Xe==null?void 0:Xe[v])==null?void 0:x[S],B=D||Kh(o,S,ot),O=Math.max(0,B.p0+B.p1)||1;let Y=(p=we==null?void 0:we[v])==null?void 0:p[S];Y==null&&(Y=Math.random()<B.p0/O?0:1,we[v]&&(we[v][S]=Y)),!D&&Xe[v]&&(Xe[v][S]={p0:B.p0,p1:B.p1}),o=Zh(o,S,Y,ot),r[S]=Y,s.push({qubit:S,outcome:Y,step:v,probs:{p0:B.p0/O,p1:B.p1/O}}),a();continue}const R=Cs(o,S,ot),A=Si(R),G=new I(A.x,A.y,A.z),j=sn[P].matrix;o=w0(o,j,S,ot);const _=Cs(o,S,ot),T=Si(_);e[S]=ar(_);const F=new I(sn[P].axis.x,sn[P].axis.y,sn[P].axis.z).normalize(),q=36;for(let D=1;D<=q;D++){const B=D/q,O=sn[P].angle*B,Y=ov(G,F,O);(f=n[S])==null||f.push({x:Y.x,y:Y.y,z:Y.z})}(y=n[S])==null||y.push(T)}}for(const S of ae[v])S.type==="CX"&&(o=R0(o,S.control,S.target,ot),a())}const l=e.map(v=>hh(v)),c=new Map,h=new Map;for(let v=0;v<ot;v++)for(let S=v+1;S<ot;S++){const P=Ws(o,v,S,ot),R=go(v,S),A={qubits:[v,S],rho:P};c.set(R,A),dr(P)&&h.set(R,A)}const u=h.values().next().value||c.values().next().value||null,d=(u==null?void 0:u.qubits)??vv(t),m=(u==null?void 0:u.rho)??(d?Ws(o,d[0],d[1],ot):null);return{states:l,traces:n,rho2:m,measuredEvents:s,measuredLatest:r,pairIndices:d,pairStates:c,entangledPairs:h,stateVector:o}}function xo(i){const t=tt("gateHoverMath");if(!t)return;if(!i||!sn[i]){t.innerHTML="\\[\\text{Hover a gate to preview its matrix.}\\]",typeof MathJax<"u"&&MathJax.typesetPromise([t]);return}const e=j0(i);if(i==="M"){t.innerHTML=`<div class="gate-desc">${e}</div>`,typeof MathJax<"u"&&MathJax.typesetPromise([t]);return}if(i==="CX"){const n=sn.CX.matrix;t.innerHTML=`<div class="gate-desc">${e}</div>${pu("\\text{CX}",n)}`,typeof MathJax<"u"&&MathJax.typesetPromise([t]);return}t.innerHTML=`<div class="gate-desc">${e}</div>${fu(i)}`,typeof MathJax<"u"&&MathJax.typesetPromise([t])}function sv(){const i=tt("gatePaletteRow");i&&(i.innerHTML="",Y0.forEach(t=>{const e=document.createElement("div");e.className="palette-gate",e.setAttribute("draggable","true"),e.dataset.gate=t,e.dataset.tip=$0(t);const n=document.createElement("div");if(n.className="gate-box "+ou(t),t==="M"){n.classList.add("gate-measure");const r=document.createElement("div");r.className="measure-icon",n.appendChild(r)}else n.textContent=t;e.appendChild(n),e.addEventListener("mouseenter",()=>xo(t)),e.addEventListener("mouseleave",()=>xo(null)),e.addEventListener("dragstart",r=>{qe=t,Se={kind:"palette"},Ye=null;try{r.dataTransfer.setData("text/plain",String(t))}catch{}if(r.dataTransfer.effectAllowed="copy",r.dataTransfer.setDragImage&&r.dataTransfer.setDragImage(n,20,20),t==="CX"){const s=xe?"target":"control";vo(`CNOT: drop ${s} (${s==="control"?"C":"T"})`)}else rr()}),e.addEventListener("dragend",()=>{qe=null,Se=null,Ye=null,$n(),rr()}),i.appendChild(e)}),i.ondragover=t=>{t.preventDefault(),t.dataTransfer.dropEffect=Se&&Se.kind!=="palette"?"move":"copy"},i.ondrop=t=>{t.preventDefault(),qe=null,Se=null,Ye=null,$n(),rr(),Oe(),Be(Kt)})}function ih(i,t,e){const n=t.getBoundingClientRect(),r=i.clientX-n.left+t.scrollLeft,s=i.clientY-n.top+t.scrollTop,o=r-e.offsetLeft,a=s-e.offsetTop;return{x:o,y:a}}let Fn=null;function av(i,t){if(!Fn)return;const e=Ps(i),n=qn(t);Fn.style.transform=`translate(${e-23}px, ${n-23}px)`,Fn.classList.add("on")}function $n(){Fn&&(Fn.classList.remove("on"),Fn.style.transform="translate(-9999px, -9999px)")}let Kt=-1,Gr=!1,Ds=null,sr=!1;function Ai(){mo("activeStepLabel",Kt<0?"–":String(Kt)),mo("stepCountLabel",String($t)),document.querySelectorAll(".cstep-highlight").forEach(i=>{const t=Number(i.dataset.step);i.classList.toggle("on",t===Kt)}),ii()}function ov(i,t,e){const n=i.clone(),r=t.clone().normalize(),s=Math.cos(e),o=Math.sin(e),a=n.clone().multiplyScalar(s),l=new I().crossVectors(r,n).multiplyScalar(o),c=r.clone().multiplyScalar(r.dot(n)*(1-s));return a.add(l).add(c)}function Be(i){var m,g,x,p,f;pr=null,zn=Array.from({length:ot},()=>null),Mo();const{states:t,traces:e,rho2:n,measuredEvents:r,measuredLatest:s,pairIndices:o,entangledPairs:a,stateVector:l}=mu(i);Ln=o,re=a,ir=n,vn=l,(m=It==null?void 0:It.setPairs)==null||m.call(It,Array.from(re.values()).map(y=>y.qubits));const c=re.size>0,h=(r||[]).filter(y=>y.step===i),u=$s&&!!Fe&&i>=0&&h.length>0,d=new Map;for(let y=0;y<ot;y++){const v=(g=se[y])==null?void 0:g.widget;if(!v)continue;const S=t[y]??yn(Wo(y)),P=e[y]??[],R=u&&h.some(B=>B.qubit===y),A=c&&zn[y]==null&&au(y,re),G=R||A,j=G;v.setStateAndTrace(S,P,{hideArrow:G,hideTrace:j});const _=bi(S),T=sa(_);la((x=se[y])==null?void 0:x.purityEl,T);const F=(s==null?void 0:s[y])??null,q=(p=se[y])==null?void 0:p.measEl,D=(f=se[y])==null?void 0:f.stateChipEl;R?(d.set(y,{state:S,trace:P,outcome:F}),q&&(q.textContent="Measuring…",q.classList.add("on","pending")),D&&(D.textContent="Measurement pending",D.classList.add("on","pending"),D.classList.remove("entangled"))):(Hr(y,F,{cue:!1}),Zs(y,S,re))}if(yo(re),kr(),ii(),So(),Eo(re),r==null||r.forEach(({qubit:y,outcome:v,step:S})=>{u&&S===i&&d.has(y)||Hr(y,v,{cue:!1,snap:!0})}),u)return gv(h,d)}function qr(){Gr=!1,document.body.classList.remove("is-playing"),Ds&&(clearTimeout(Ds),Ds=null);const i=tt("playIcon");i&&(i.textContent="▶")}function lv(){if(Gr)return;Gr=!0,document.body.classList.add("is-playing");const i=tt("playIcon");i&&(i.textContent="⏸"),_u()}function gu(){Gr?qr():lv()}function _u(){if(!Gr)return;Ds=setTimeout(async()=>{if(await Xo(),Kt>=$t-1){qr();return}_u()},480)}async function vu(){var n,r;if(sr||(qr(),Kt<=-1))return;sr=!0;const i=Kt,t=[];for(let s=0;s<ot;s++){const o=(n=ve[s])==null?void 0:n[i];if(!o)continue;const a=x0[o];if(!a)continue;const l=(r=se[s])==null?void 0:r.widget;l&&t.push(l.applyGateAsync(a,{animate:!0,duration:450}))}await Promise.all(t),Kt=_n(Kt-1,-1,$t-1),gr(Kt+1),Ai();const e=Be(Kt);e!=null&&e.then&&await e,sr=!1}async function Xo(){var n,r;if(sr||Kt>=$t-1)return;sr=!0;const i=Kt+1,t=[];for(let s=0;s<ot;s++){const o=(n=ve[s])==null?void 0:n[i];if(!o)continue;const a=(r=se[s])==null?void 0:r.widget;a&&t.push(a.applyGateAsync(o,{animate:!0,duration:450}))}await Promise.all(t),Kt=_n(i,-1,$t-1),Ai();const e=Be(Kt);e!=null&&e.then&&await e,sr=!1}function xu(){qr(),Kt=-1,gr(0),Ai(),Be(Kt)}function Oe(){var o;const i=tt("circuit-canvas"),t=tt("circuit-grid");if(!i||!t)return;ko(),i.innerHTML="";const e=pi+$t*Pn+20,n=Go+ot*js+18;i.style.width=`${e}px`,i.style.height=`${n}px`,Fn=document.createElement("div"),Fn.className="cdrop-highlight",i.appendChild(Fn);for(let a=0;a<$t;a++){const l=document.createElement("div");l.className="cstep-label",l.style.left=`${pi+a*Pn}px`,l.style.width=`${Pn}px`,l.textContent=`t${a}`,i.appendChild(l)}for(let a=0;a<ot;a++){const l=qn(a),c=document.createElement("div");c.className="cwire-label",c.style.top=`${l-12}px`,c.textContent=`q${a}`,c.addEventListener("click",d=>{d.stopPropagation(),th(a,c)}),i.appendChild(c);const h=document.createElement("div");h.className="cwire-ket",h.style.top=`${l+8}px`;const u=((o=Ys[fr[a]])==null?void 0:o.label)||"|0\\rangle";h.innerHTML=`\\(${u}\\)`,h.dataset.q=String(a),h.dataset.tip="Set initial state |ψ⟩ for this wire",h.addEventListener("click",d=>{d.stopPropagation(),th(a,h)}),i.appendChild(h)}for(let a=0;a<$t;a++){const l=document.createElement("div");l.className="cstep-highlight",l.dataset.step=String(a),l.style.left=`${pi+a*Pn}px`,l.style.width=`${Pn}px`,i.appendChild(l)}const r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg");s.classList.add("circuit-svg"),s.setAttribute("width",e),s.setAttribute("height",n);for(let a=0;a<ot;a++){const l=qn(a),c=document.createElementNS(r,"line");c.setAttribute("x1",pi),c.setAttribute("x2",pi+$t*Pn),c.setAttribute("y1",l),c.setAttribute("y2",l),c.setAttribute("stroke","var(--circuit-wire)"),c.setAttribute("stroke-width","3"),c.setAttribute("stroke-linecap","round"),s.appendChild(c)}for(let a=0;a<$t;a++)for(const l of ae[a]){if(l.type!=="CX")continue;const c=Ps(a),h=qn(l.control),u=qn(l.target),d=document.createElementNS(r,"line");d.setAttribute("x1",c),d.setAttribute("x2",c),d.setAttribute("y1",h),d.setAttribute("y2",u),d.setAttribute("stroke","var(--circuit-wire)"),d.setAttribute("stroke-width","2.2"),d.setAttribute("stroke-linecap","round"),s.appendChild(d)}i.appendChild(s);for(let a=0;a<ot;a++)for(let l=0;l<$t;l++){const c=ve[a][l];if(!c)continue;const h=Ps(l),u=qn(a),d=document.createElement("div");if(d.className=`cgate ${ou(c)}`,d.dataset.gate=c,d.style.left=`${h}px`,d.style.top=`${u}px`,d.dataset.tip=c==="M"?"Measurement gate":`Gate ${c}`,c==="M"){d.classList.add("cgate-measure");const m=document.createElement("div");m.className="measure-icon",d.appendChild(m)}else d.textContent=c;d.setAttribute("draggable","true"),d.addEventListener("dragstart",m=>{qe=c,Se={kind:"single",q:a,s:l},Ye=null,ve[a][l]=null,xe=null,Qe();try{m.dataTransfer.setData("text/plain",String(c))}catch{}m.dataTransfer.effectAllowed="move",requestAnimationFrame(()=>Oe())}),d.addEventListener("dragend",()=>{qe=null,Se=null,Ye=null,$n(),Oe(),Be(Kt)}),d.addEventListener("contextmenu",m=>{m.preventDefault(),lu(a,l),Oe(),Be(Kt)}),i.appendChild(d)}for(let a=0;a<$t;a++)for(const l of ae[a]){if(l.type!=="CX")continue;const c=Ps(a);{const h=qn(l.control),u=document.createElement("div");u.className="cgate cx-node",u.dataset.gate="CX",u.style.left=`${c}px`,u.style.top=`${h}px`,u.dataset.tip="CNOT control (C)";const d=document.createElement("div");d.className="ccontrol",u.appendChild(d);const m=document.createElement("span");m.className="cx-drag-label",m.textContent="C",u.appendChild(m),u.setAttribute("draggable","true"),u.addEventListener("dragstart",g=>{qe="CX",Se={kind:"cx",step:a,role:"control"},Ye={...l},ae[a]=ae[a].filter(x=>x!==l),xe=null,Qe(),vo("CNOT: dragging control (C)");try{g.dataTransfer.setData("text/plain","CX")}catch{}g.dataTransfer.effectAllowed="move",requestAnimationFrame(()=>Oe())}),u.addEventListener("dragend",()=>{qe=null,Se=null,Ye=null,$n(),rr(),Oe(),Be(Kt)}),i.appendChild(u)}{const h=qn(l.target),u=document.createElement("div");u.className="cgate cx-node",u.dataset.gate="CX",u.style.left=`${c}px`,u.style.top=`${h}px`,u.dataset.tip="CNOT target (T)";const d=document.createElement("div");d.className="ctarget",u.appendChild(d);const m=document.createElement("span");m.className="cx-drag-label",m.textContent="T",u.appendChild(m),u.setAttribute("draggable","true"),u.addEventListener("dragstart",g=>{qe="CX",Se={kind:"cx",step:a,role:"target"},Ye={...l},ae[a]=ae[a].filter(x=>x!==l),xe=null,Qe(),vo("CNOT: dragging target (T)");try{g.dataTransfer.setData("text/plain","CX")}catch{}g.dataTransfer.effectAllowed="move",requestAnimationFrame(()=>Oe())}),u.addEventListener("dragend",()=>{qe=null,Se=null,Ye=null,$n(),rr(),Oe(),Be(Kt)}),i.appendChild(u)}}t.ondragover=a=>{if(a.preventDefault(),!(qe||a.dataTransfer.getData("text/plain"))){$n();return}a.dataTransfer.dropEffect=Se&&Se.kind!=="palette"?"move":"copy";const{x:c,y:h}=ih(a,t,i),u=Jc(c),d=Qc(h);av(u,d)},t.ondragleave=a=>{const l=a.relatedTarget;(!l||!t.contains(l))&&$n()},t.ondrop=a=>{a.preventDefault(),$n(),rr();const l=qe||a.dataTransfer.getData("text/plain");if(!l){qe=null,Se=null,Ye=null;return}const{x:c,y:h}=ih(a,t,i),u=Jc(c),d=Qc(h);if(Se&&Se.kind==="cx"&&Ye){const m=Se.role,g=Ye;qe=null,Se=null;const x=m==="control"?d:g.control,p=m==="target"?d:g.target;if(Ye=null,x===p){Oe(),Be(Kt);return}cu(u,x,p),xe=null,Qe(),Oe(),Be(Kt);return}if(qe=null,Se=null,Ye=null,l==="CX"){K0(d,u),Oe(),Be(Kt);return}_o(d,u,l),xe=null,Qe(),Oe(),Be(Kt)},Ai(),typeof MathJax<"u"&&MathJax.typesetPromise([i]),du()}function cv(){qr(),Ho(),Oe(),Kt=-1,Ai(),Be(Kt)}function Mu(i){ot=Math.max(1,Math.min(qs,i)),Sn>=ot&&(Sn=ot-1),ko(),Vo(),tu(),Oe(),Kt=_n(Kt,-1,$t-1),Ai(),Be(Kt),ru()}function rh(){ot<qs&&Mu(ot+1)}function sh(){ot>1&&Mu(ot-1)}const He={backendOpen:!1,probOpen:!1,menuOpen:!1};function _r(){const i=He.backendOpen||He.probOpen||He.menuOpen,t=tt("overlayBackdrop");t&&t.setAttribute("aria-hidden",i?"false":"true")}function Su(){var t;He.backendOpen=!0,document.body.classList.add("backend-open");const i=tt("toggleShowMatrix");i&&(i.checked=!0,document.body.classList.add("show-matrix")),(t=tt("backendDrawer"))==null||t.setAttribute("aria-hidden","false"),_r(),ii()}function Ks(){var i;He.backendOpen=!1,document.body.classList.remove("backend-open"),(i=tt("backendDrawer"))==null||i.setAttribute("aria-hidden","true"),_r()}function yu(){He.backendOpen?Ks():Su()}function hv(){He.probOpen=!0,document.body.classList.add("prob-open"),_r(),kr()}function qo(){He.probOpen=!1,document.body.classList.remove("prob-open"),_r()}function ah(){He.probOpen?qo():hv()}function uv(){var i;He.menuOpen=!0,document.body.classList.add("menu-open"),(i=tt("moreMenuBtn"))==null||i.setAttribute("aria-expanded","true"),_r()}function Ir(){var i;He.menuOpen=!1,document.body.classList.remove("menu-open"),(i=tt("moreMenuBtn"))==null||i.setAttribute("aria-expanded","false"),_r()}function dv(){He.menuOpen?Ir():uv()}function Qe(){const i=!!xe;document.body.classList.toggle("has-selection",i)}const Eu="gateLibCollapsed",oh="gateLibPos";function bu(i){document.body.classList.toggle("gate-lib-collapsed",!!i);try{localStorage.setItem(Eu,i?"1":"0")}catch{}}function fv(){const i=document.body.classList.contains("gate-lib-collapsed");bu(!i)}function lh(i){const t=tt("gateLibrary");if(!t)return;const e=t.getBoundingClientRect(),n=8,r=window.innerHeight-e.height-18,o=_n((i==null?void 0:i.left)??18,n,Math.max(n,window.innerWidth-e.width-n)),a=_n((i==null?void 0:i.top)??r,n,Math.max(n,window.innerHeight-e.height-n));return t.style.left=`${o}px`,t.style.top=`${a}px`,t.style.right="auto",t.style.bottom="auto",{left:o,top:a}}function pv(){const i=tt("gateLibrary");if(!i)return;let t=null;try{t=JSON.parse(localStorage.getItem(oh))}catch{}let e=lh(t),n=null,r=null;const s=l=>{var h;if(l.button!==0||l.target&&l.target.closest("[draggable]")||l.target&&l.target.closest("button, input, select, label"))return;const c=i.getBoundingClientRect();n={x:l.clientX,y:l.clientY,left:c.left,top:c.top,width:c.width,height:c.height},r=l.pointerId,(h=i.setPointerCapture)==null||h.call(i,l.pointerId),l.preventDefault()},o=l=>{if(!n)return;const c=l.clientX-n.x,h=l.clientY-n.y,u=8,d=_n(n.left+c,u,Math.max(u,window.innerWidth-n.width-u)),m=_n(n.top+h,u,Math.max(u,window.innerHeight-n.height-u));i.style.left=`${d}px`,i.style.top=`${m}px`,i.style.right="auto",i.style.bottom="auto",e={left:d,top:m}},a=()=>{var l;if(n){try{localStorage.setItem(oh,JSON.stringify(e))}catch{}r!=null&&((l=i.releasePointerCapture)==null||l.call(i,r)),r=null,n=null}};i.addEventListener("pointerdown",s),i.addEventListener("pointermove",o),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a),i.addEventListener("pointerleave",a),window.addEventListener("pointerup",a,{passive:!0}),window.addEventListener("resize",()=>{e=lh(e)})}function Qa(i){se.forEach(({widget:t})=>{t!=null&&t.traceLine&&(t.traceLine.visible=!!i)})}function ch(i){const t=Math.max(0,Math.min(1,i)),e=uo(t,256,1e-6);return Cr(e)}function la(i,t){if(!i)return;const e=Math.max(0,Math.min(1,t));i.textContent=`ρ purity: ${e.toFixed(2)}`,i.style.setProperty("--purity",String(e));const n=e<1-z0;i.classList.toggle("mixed",n);const r=i.closest(".bloch-tile");r==null||r.classList.toggle("mixed",n)}function Hr(i,t,{cue:e=!1,snap:n=!1}={}){const r=se[i];if(!r)return;zn[i]=t;const{tileEl:s,measEl:o,widget:a,purityEl:l,stateChipEl:c}=r;if(t==null){s==null||s.classList.remove("measured"),o.innerHTML="",o.classList.remove("on"),o.classList.remove("pending"),c==null||c.classList.remove("pending"),Mo();return}if(s==null||s.classList.remove("entangled","mixed"),s==null||s.classList.add("measured"),o.innerHTML=`State collapsed: \\(|${t}\\rangle\\)`,o.classList.add("on"),o.classList.remove("pending"),ur(o),c&&(c.innerHTML=`\\(|\\psi_{${i}}\\rangle = |${t}\\rangle\\)`,c.classList.remove("entangled"),c.classList.remove("pending"),ur(c)),n&&a){const h=t===0?{alpha:C(1,0),beta:C(0,0)}:{alpha:C(0,0),beta:C(1,0)};a.setStateAndTrace(yn(h),[{x:0,y:0,z:t===0?1:-1}]),la(l,1)}Mo()}function mv(i,t){if(!t)return;const e=se[i];e!=null&&e.widget&&e.widget.setStateAndTrace(t.state,t.trace,{hideArrow:!1,hideTrace:!1}),e!=null&&e.stateChipEl&&e.stateChipEl.classList.remove("pending"),Hr(i,t.outcome,{cue:!0,snap:!0}),Zs(i,t.state,re)}function gv(i,t){if(!(i!=null&&i.length)||!Fe||!$s)return null;ws+=1;const e=ws;return document.body.classList.add("coin-anim-visible"),(async()=>{for(const r of i){const s=`q${r.qubit}`;if(await Fe.play(r.outcome,{label:s,probs:r.probs}),e!==ws)return;mv(r.qubit,t.get(r.qubit))}})().finally(()=>{e===ws&&document.body.classList.remove("coin-anim-visible")})}function Mo(){se.forEach((i,t)=>{const e=i==null?void 0:i.tileEl;e&&e.classList.remove("measured-hit","measured-miss","measure-pulse")})}function kr(){var s;const i=tt("probHistogram");if(!i)return;const t=(s=se[Sn])==null?void 0:s.widget;if(!t)return;const e=bi(t.state),{p0:n,p1:r}=Bo(e);i.innerHTML=`
    <div class="bar prob-row">
      <div class="prob-state">|0⟩</div>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.max(0,Math.min(1,n))*100}%"></div></div>
      <div class="prob-math">\\(\\Pr(|0\\rangle) = ${ch(n)}\\)</div>
    </div>
    <div class="bar prob-row">
      <div class="prob-state">|1⟩</div>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.max(0,Math.min(1,r))*100}%"></div></div>
      <div class="prob-math">\\(\\Pr(|1\\rangle) = ${ch(r)}\\)</div>
    </div>
  `,typeof MathJax<"u"&&MathJax.typesetPromise([i])}function Tu(){return pr||ir}function Au(i,t){const e=t===0?gi(fo,Ji):gi(Ji,fo),n=t===0?gi(po,Ji):gi(Ji,po);let r=0,s=0;for(let o=0;o<4;o++)for(let a=0;a<4;a++)r+=ne(e[o][a],i[a][o]).re,s+=ne(n[o][a],i[a][o]).re;return{p0:Math.max(0,r),p1:Math.max(0,s)}}function _v(i,t,e){const n=Au(i,t),r=e===0?n.p0:n.p1,s=e===0?fo:po,o=t===0?gi(s,Ji):gi(Ji,s),a=C0(o);let l=Xs(Xs(o,i),a);return r>0&&(l=l.map(c=>c.map(h=>Br(h,1/r)))),{rho:l,prob:r,outcome:e}}function ar(i){const t=zo(i);return t||{rho:i.map(e=>e.map(n=>({re:n.re,im:n.im})))}}function hh(i){return i?i.rho?{rho:i.rho.map(t=>t.map(e=>({re:e.re,im:e.im})))}:{alpha:C(i.alpha.re,i.alpha.im),beta:C(i.beta.re,i.beta.im)}:null}function vv(i){const t=Math.max(0,Math.min($t-1,i??$t-1));for(let r=0;r<=t;r++)for(const s of ae[r]||[])if(s.type==="CX"&&s.control<ot&&s.target<ot)return[s.control,s.target];const e=0,n=Math.min(1,Math.max(0,ot-1));return[e,n]}function So(){const i=Tu(),t=tt("correlationsPanel");if(!t)return;if(!i){t.style.opacity="0";return}const e={XX:$a(i,Gc,Gc),YY:$a(i,Hc,Hc),ZZ:$a(i,kc,kc)};["XX","YY","ZZ"].forEach(n=>{const r=tt(`corr${n}`),s=tt(`corr${n}Val`),o=Math.max(-1,Math.min(1,e[n]));if(r){const a=Math.abs(o)*100;r.style.width=`${a}%`,r.style.left=o>=0?"50%":`${50-a}%`}s&&(s.textContent=o.toFixed(2))})}function yo(i=re){var e;const t=!!i&&i.size>0;document.body.classList.toggle("entangled",t),document.body.classList.toggle("corr-active",t),t?Qn<=0?(nu(),Qn=1):(e=It==null?void 0:It.isAnimating)!=null&&e.call(It)||eu(1):Qn>0&&iu(),se.forEach(({tileEl:n,entTagEl:r},s)=>{const o=t&&au(s,i)&&zn[s]==null;n==null||n.classList.toggle("entangled",o),r==null||r.classList.toggle("on",o)})}function wu(i,t=.001){const e={phiPlus:[[C(.5,0),C(0,0),C(0,0),C(.5,0)],[C(0,0),C(0,0),C(0,0),C(0,0)],[C(0,0),C(0,0),C(0,0),C(0,0)],[C(.5,0),C(0,0),C(0,0),C(.5,0)]],phiMinus:[[C(.5,0),C(0,0),C(0,0),C(-.5,0)],[C(0,0),C(0,0),C(0,0),C(0,0)],[C(0,0),C(0,0),C(0,0),C(0,0)],[C(-.5,0),C(0,0),C(0,0),C(.5,0)]],psiPlus:[[C(0,0),C(0,0),C(0,0),C(0,0)],[C(0,0),C(.5,0),C(.5,0),C(0,0)],[C(0,0),C(.5,0),C(.5,0),C(0,0)],[C(0,0),C(0,0),C(0,0),C(0,0)]],psiMinus:[[C(0,0),C(0,0),C(0,0),C(0,0)],[C(0,0),C(.5,0),C(-.5,0),C(0,0)],[C(0,0),C(-.5,0),C(.5,0),C(0,0)],[C(0,0),C(0,0),C(0,0),C(0,0)]]},n=o=>{let a=0;for(let l=0;l<4;l++)for(let c=0;c<4;c++)a+=ne(o[l][c],i[c][l]).re;return a},r={"Bell Φ+":n(e.phiPlus),"Bell Φ-":n(e.phiMinus),"Bell Ψ+":n(e.psiPlus),"Bell Ψ-":n(e.psiMinus)},s=Object.entries(r).reduce((o,a)=>a[1]>o[1]?a:o,["",0]);return s[1]>1-t?s[0]:null}function Eo(i=re){const t=new Map;i==null||i.forEach((e,n)=>{dr(e.rho)&&t.set(n,wu(e.rho))}),se.forEach((e,n)=>{const r=e==null?void 0:e.stateChipEl;if(!r)return;if(zn[n]!=null){r.classList.remove("entangled");return}const s=oa(n,i);if(s&&dr(s.pair.rho)){const o=t.get(s.key),a=o?Ru(o):null;r.innerHTML=a?`\\(${a}\\)`:"\\(\\text{Entangled state}\\)",r.classList.add("on"),r.classList.add("entangled"),ur(r)}else r.classList.remove("entangled")})}function xv(i,t=0,e=1e-6){const n=zo(i,e);if(n){const l=Mn(n.alpha),c=Mn(n.beta);return`|\\psi_{${t}}\\rangle = ${l}\\,|0\\rangle + ${c}\\,|1\\rangle`}const{p0:r,p1:s}=Bo(i),o=Mn({re:Math.sqrt(Math.max(0,r)),im:0}),a=Mn({re:Math.sqrt(Math.max(0,s)),im:0});return`|\\psi_{${t}}\\rangle = ${o}\\,|0\\rangle + ${a}\\,|1\\rangle`}function Mv(i,t=.001){const{p0:e,p1:n}=Bo(i);return e>t&&n>t&&e<1-t&&n<1-t}function Ru(i){return i.includes("Φ+")||i.includes("Phi")||i.includes("phi")?"|\\Phi^{+}\\rangle":i.includes("Φ-")||i.includes("Phi-")||i.includes("phi-")?"|\\Phi^{-}\\rangle":i.includes("Ψ+")||i.includes("Psi")||i.includes("psi")?"|\\Psi^{+}\\rangle":i.includes("Ψ-")||i.includes("Psi-")||i.includes("psi-")?"|\\Psi^{-}\\rangle":i}function Zs(i,t,e=re){const n=se[i];if(!n)return;const r=n.stateChipEl;if(!r)return;const s=bi(t),o=xv(s,i),a=oa(i,e),l=!!a&&dr(a.pair.rho)&&zn[i]==null,c=l?wu(a.pair.rho):null,h=Mv(s),u=l&&c?`\\quad(${Ru(c)})`:"";r.innerHTML=`\\(${o}${u}\\)`,r.classList.add("on"),r.classList.toggle("entangled",h||l),ur(r)}function Sv(){const i=tt("inspectPopover");if(!i)return;const t=Tu();if(!t)return;const e=tt("inspectGrid");if(e){e.innerHTML="";const n=Math.max(...t.flat().map(r=>Math.abs(r.re)),1);for(let r=0;r<4;r++)for(let s=0;s<4;s++){const o=t[r][s],a=Math.min(1,Math.abs(o.re)/n),l=o.re>=0?190:10,c=document.createElement("div");c.className="inspect-cell",c.style.background=`hsla(${l},70%,70%,${.2+.6*a})`,c.textContent=o.re.toFixed(2),e.appendChild(c)}}i.classList.add("on")}function uh(){var i;(i=tt("inspectPopover"))==null||i.classList.remove("on")}function yv(i,t=Ln){var h,u;const e=Array.from({length:ot},()=>[]),n=(t==null?void 0:t[0])??0,r=(t==null?void 0:t[1])??Math.min(1,Math.max(0,ot-1)),s=Wc(i,1),o=Wc(i,0),a=Si(s),l=Si(o);(h=e[n])==null||h.push(a),(u=e[r])==null||u.push(l);const c=Array.from({length:ot},(d,m)=>ar(m===n?s:m===r?o:bi(Wo(m))));return se.forEach((d,m)=>{const g=m===n?s:m===r?o:null;g&&la(d==null?void 0:d.purityEl,sa(g))}),{states:c,traces:e}}function dh(i){var g,x,p,f,y;if(Array.isArray(vn)&&vn.length===1<<ot){const v=Kh(vn,i,ot),S=Math.max(0,v.p0+v.p1)||1,R=Math.random()<v.p0/S?0:1;vn=Zh(vn,i,R,ot);const A=new Map,G=new Map;for(let _=0;_<ot;_++)for(let T=_+1;T<ot;T++){const F=Ws(vn,_,T,ot),q=go(_,T),D={qubits:[_,T],rho:F};A.set(q,D),dr(F)&&G.set(q,D)}re=G;const j=G.values().next().value||A.values().next().value||null;Ln=(j==null?void 0:j.qubits)??Ln,ir=Ln?Ws(vn,Ln[0],Ln[1],ot):null,pr=ir,(g=It==null?void 0:It.setPairs)==null||g.call(It,Array.from(re.values()).map(_=>_.qubits));for(let _=0;_<ot;_++){const T=Cs(vn,_,ot),F=ar(T),q=[Si(T)],D=(x=se[_])==null?void 0:x.widget;(p=se[_])!=null&&p.purityEl&&la(se[_].purityEl,sa(T)),D&&D.setStateAndTrace(F,q,{hideArrow:!1}),Zs(_,F,re)}Hr(i,R,{cue:!0,snap:!0}),yo(re),So(),kr(),ii(),Eo(re),document.body.classList.add("measurement-flash"),setTimeout(()=>document.body.classList.remove("measurement-flash"),280),fh(`Measured q${i} = ${R}`);return}const e=oa(i,re);if(!e)return;const n=e.pair.rho;if(!n)return;const r=e.pair.qubits[0]===i?0:1,s=Au(n,r),o=Math.max(0,s.p0+s.p1)||1,l=Math.random()<s.p0/o?0:1,{rho:c}=_v(n,r,l);pr=c,ir=c;const h=go(e.pair.qubits[0],e.pair.qubits[1]),u={qubits:[...e.pair.qubits],rho:c};re=dr(c)?new Map([[h,u]]):new Map,Ln=u.qubits,(f=It==null?void 0:It.setPairs)==null||f.call(It,Array.from(re.values()).map(v=>v.qubits));const{states:d,traces:m}=yv(c,u.qubits);for(let v=0;v<ot;v++){const S=(y=se[v])==null?void 0:y.widget;S&&(S.setStateAndTrace(d[v],m[v],{hideArrow:!1}),Zs(v,d[v],re))}Hr(i,l,{cue:!0,snap:!0}),yo(re),So(),kr(),ii(),Eo(re),document.body.classList.add("measurement-flash"),setTimeout(()=>document.body.classList.remove("measurement-flash"),280),fh(`Measured q${i} = ${l}`)}function fh(i){const t=tt("toast");t&&(t.textContent=i,t.classList.add("on"),setTimeout(()=>t.classList.remove("on"),1500))}function ph(i,t){return Ev(i)[t]}function Ev(i){const{states:t}=mu(i);return t}function ii(){var T,F,q;if(!He.backendOpen)return;const t=((T=tt("toggleSimplify"))==null?void 0:T.checked)??!0?1e-4:1e-7,e=((F=tt("toggleShowMatrix"))==null?void 0:F.checked)??!1;document.body.classList.toggle("show-matrix",!!e);const n=Kt>=0?(q=ve[Sn])==null?void 0:q[Kt]:null,r=n==="M",s=ph(Kt-1,Sn),o=ph(Kt,Sn),a=bi(s),l=bi(o),c=Math.max(0,a[0][0].re),h=Math.max(0,a[1][1].re),u=Math.max(0,l[0][0].re),d=Math.max(0,l[1][1].re),m=Mn({re:Math.sqrt(c),im:0},t),g=Mn({re:Math.sqrt(h),im:0},t),x=Mn({re:Math.sqrt(u),im:0},t),p=Mn({re:Math.sqrt(d),im:0},t),f=n?`\\text{Gate: } ${r?"\\text{Measure}":n}`:"\\text{Gate: } I",y=n?r?"\\text{Measurement (visual only; state unchanged in this view)}":`|\\psi_{t}\\rangle = ${n}\\,|\\psi_{t-1}\\rangle`:"|\\psi\\rangle = |0\\rangle",v=n?`\\[
|\\psi_{t-1}\\rangle =
\\begin{pmatrix}
${m} \\\\
${g}
\\end{pmatrix}
\\quad\\Rightarrow\\quad
|\\psi_{t}\\rangle =
\\begin{pmatrix}
${x} \\\\
${p}
\\end{pmatrix}
\\]`:`\\[
|\\psi\\rangle =
\\begin{pmatrix}
1 \\\\
0
\\end{pmatrix}
\\]`,S="\\[\\vec{r}' = R(U)\\,\\vec{r}\\]",P="\\[\\text{Showing single-qubit reduced state when entangled.}\\]",R=tt("currentGateLatex"),A=tt("stateUpdateLatex"),G=tt("blochUpdateLatex"),j=tt("notesLatex"),_=tt("optionalMatrixLatex");if(R&&(R.innerHTML=`\\[${f}\\]`),A&&(A.innerHTML=`\\[${y}\\]${v}`),G&&(G.innerHTML=S),j&&(j.innerHTML=P),_){const D=fu(n||"I"),B=pu(`\\rho_{${Sn+1}}`,l);_.innerHTML=e&&!r?D+B:""}if(typeof MathJax<"u"){const D=[R,A,G,j,_].filter(Boolean);MathJax.typesetPromise(D)}}async function bv(){var t,e,n,r,s;const i=[((t=tt("currentGateLatex"))==null?void 0:t.textContent)??"",((e=tt("stateUpdateLatex"))==null?void 0:e.textContent)??"",((n=tt("blochUpdateLatex"))==null?void 0:n.textContent)??"",((r=tt("notesLatex"))==null?void 0:r.textContent)??"",((s=tt("optionalMatrixLatex"))==null?void 0:s.textContent)??""].filter(Boolean).join(`

`);try{await navigator.clipboard.writeText(i)}catch{}}function Tv(i){const t=i.target;if(!t)return!1;const e=t.tagName?t.tagName.toLowerCase():"";return!!(e==="input"||e==="textarea"||e==="select"||t.isContentEditable)}function Cu(){Ir(),qo(),Ks()}function Av(i){Tv(i)||(i.key==="ArrowLeft"?(i.preventDefault(),vu()):i.key==="ArrowRight"?(i.preventDefault(),Xo()):i.key===" "||i.key==="Spacebar"?(i.preventDefault(),gu()):i.key==="r"||i.key==="R"?(i.preventDefault(),xu()):i.key==="m"||i.key==="M"?(i.preventDefault(),yu()):i.key==="Escape"&&(i.preventDefault(),Cu(),xe=null,Qe()))}window.addEventListener("load",()=>{var r,s,o,a,l,c,h,u,d,m,g,x,p,f,y,v,S,P,R,A,G,j,_,T,F,q,D,B,O,Y,K;an=G0(),Qh(an),k0(),Ho(),J0(),tu(),Oe(),Ai(),Be(Kt),X0(),V0(),W0(),sv(),xo(null),pv(),document.addEventListener("dragover",nh),document.addEventListener("drag",nh),ru(),(r=tt("prevStep"))==null||r.addEventListener("click",()=>vu()),(s=tt("nextStep"))==null||s.addEventListener("click",()=>Xo()),(o=tt("playPause"))==null||o.addEventListener("click",()=>gu()),(a=tt("resetState"))==null||a.addEventListener("click",()=>xu()),(l=tt("themeToggle"))==null||l.addEventListener("click",()=>jc()),(c=tt("addQubitTop"))==null||c.addEventListener("click",()=>rh()),(h=tt("removeQubitTop"))==null||h.addEventListener("click",()=>sh()),(u=tt("addQubit"))==null||u.addEventListener("click",()=>rh()),(d=tt("removeQubit"))==null||d.addEventListener("click",()=>sh()),(m=tt("toggleTrajectory"))==null||m.addEventListener("change",H=>Qa(!!H.target.checked)),(g=tt("openProbPopover"))==null||g.addEventListener("click",H=>{H.stopPropagation(),ah()}),(x=tt("openBackendDrawer"))==null||x.addEventListener("click",H=>{H.stopPropagation(),yu()}),(p=tt("toggleTrajectoryBtn"))==null||p.addEventListener("click",H=>{H.stopPropagation();const $=tt("toggleTrajectory"),Z=!(($==null?void 0:$.checked)??!0);$&&($.checked=Z),Qa(Z)}),(f=tt("openProbBtn"))==null||f.addEventListener("click",H=>{H.stopPropagation(),ah()}),(y=tt("openMathBtn"))==null||y.addEventListener("click",H=>{H.stopPropagation(),Su()}),(v=tt("toggleMeasurementAnim"))==null||v.addEventListener("change",H=>{$s=!!H.target.checked,$s||document.body.classList.remove("coin-anim-visible")}),(S=tt("deleteSelection"))==null||S.addEventListener("click",()=>{xe=null,Qe()}),(P=tt("closeBackendDrawer"))==null||P.addEventListener("click",()=>Ks()),(R=tt("toggleSimplify"))==null||R.addEventListener("change",()=>ii()),(A=tt("toggleShowMatrix"))==null||A.addEventListener("change",()=>ii()),(G=tt("copyLatex"))==null||G.addEventListener("click",()=>bv());{const H=tt("drawerHandle"),$=tt("unitaryMath"),Z=tt("backendDrawer"),lt=(ct,_t)=>{if(!ct)return _t;const vt=String(ct).trim();if(vt.endsWith("vh")){const Ft=parseFloat(vt);return Number.isFinite(Ft)?window.innerHeight*Ft/100:_t}const mt=parseFloat(vt);return Number.isFinite(mt)?mt:_t},Rt=()=>{const ct=getComputedStyle(document.documentElement),_t=lt(ct.getPropertyValue("--drawerMinH"),160),vt=lt(ct.getPropertyValue("--drawerMaxH"),window.innerHeight*.95);return{minH:_t,maxH:vt}},W=()=>{if(Z)return Z.getBoundingClientRect().height;const ct=getComputedStyle(document.documentElement);return lt(ct.getPropertyValue("--drawerH"),window.innerHeight*.32)},J=ct=>{if(!ct||!Z)return;let _t=null,vt=null;ct.addEventListener("pointerdown",Ft=>{var Pt;!He.backendOpen||Ft.button!==0||(_t=Ft.clientY,vt=W(),(Pt=ct.setPointerCapture)==null||Pt.call(ct,Ft.pointerId),Ft.preventDefault())}),ct.addEventListener("pointermove",Ft=>{if(_t==null||vt==null)return;const Pt=Ft.clientY-_t;if(Pt>140){_t=null,vt=null,Ks();return}const{minH:U,maxH:de}=Rt(),bt=Math.max(U,Math.min(de,vt-Pt));Z.style.height=`${bt}px`});const mt=()=>{_t=null,vt=null};ct.addEventListener("pointerup",mt),ct.addEventListener("pointercancel",mt)};J(H),J($)}(j=tt("moreMenuBtn"))==null||j.addEventListener("click",H=>{H.stopPropagation(),dv()}),(_=tt("menuClearCircuit"))==null||_.addEventListener("click",()=>{Ir(),window.confirm("Clear the circuit? This cannot be undone.")&&cv()}),["menuExportJson","menuExportPng","menuTheme","menuShortcuts","menuSimulation"].forEach(H=>{var $;($=tt(H))==null||$.addEventListener("click",()=>Ir())}),(T=tt("menuTheme"))==null||T.addEventListener("click",()=>jc()),(F=tt("inspectRho"))==null||F.addEventListener("click",H=>{H.stopPropagation(),Sv()}),(q=tt("closeInspect"))==null||q.addEventListener("click",()=>uh()),(D=tt("measureQ0"))==null||D.addEventListener("click",()=>dh(0)),(B=tt("measureQ1"))==null||B.addEventListener("click",()=>dh(1)),(O=tt("overlayBackdrop"))==null||O.addEventListener("click",()=>Cu()),document.addEventListener("click",H=>{const $=tt("moreMenuPopover"),Z=tt("moreMenuBtn");He.menuOpen&&$&&Z&&!$.contains(H.target)&&!Z.contains(H.target)&&Ir();const lt=tt("probPopover"),Rt=tt("openProbPopover");He.probOpen&&lt&&Rt&&!lt.contains(H.target)&&!Rt.contains(H.target)&&qo(),ti&&!ti.contains(H.target)&&hu();const W=tt("inspectPopover");!(W!=null&&W.contains(H.target))&&H.target!==tt("inspectRho")&&uh()}),window.addEventListener("keydown",Av);try{localStorage.getItem(Eu)==="1"&&bu(!0)}catch{}(Y=tt("gateLibToggle"))==null||Y.addEventListener("click",H=>{H.stopPropagation(),fv()}),Qe(),Qa(((K=tt("toggleTrajectory"))==null?void 0:K.checked)??!0);const i=tt("circuit-grid");i&&new ResizeObserver(()=>requestAnimationFrame(zr)).observe(i);const t=tt("coinMount"),e=tt("coinOutcomeLabel"),n=tt("coinOdds");t&&(Fe=new p0({mountEl:t,statusEl:e,oddsEl:n}),Fe.theme=an,Fe.init(),window.addEventListener("resize",()=>{var H;return(H=Fe==null?void 0:Fe.resize)==null?void 0:H.call(Fe)})),uu()});
