(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Fu="181",v0=0,Rf=1,S0=2,xd=1,b0=2,Ei=3,nr=0,dn=1,fn=2,Pi=0,ua=1,Pf=2,Uf=3,Df=4,y0=5,yr=100,M0=101,T0=102,E0=103,w0=104,A0=200,C0=201,R0=202,P0=203,pc=204,mc=205,U0=206,D0=207,L0=208,I0=209,F0=210,N0=211,O0=212,B0=213,k0=214,xc=0,_c=1,gc=2,_a=3,vc=4,Sc=5,bc=6,yc=7,_d=0,z0=1,G0=2,$i=0,V0=1,H0=2,W0=3,X0=4,Y0=5,q0=6,j0=7,gd=300,ga=301,va=302,Mc=303,Tc=304,qo=306,Ec=1e3,Ci=1001,wc=1002,An=1003,K0=1004,Bs=1005,hn=1006,yl=1007,Tr=1008,Li=1009,vd=1010,Sd=1011,cs=1012,Nu=1013,Ir=1014,Ri=1015,Ca=1016,Ou=1017,Bu=1018,us=1020,bd=35902,yd=35899,Md=1021,Td=1022,$n=1023,fs=1026,hs=1027,Ed=1028,ku=1029,zu=1030,Gu=1031,Vu=1033,fo=33776,ho=33777,po=33778,mo=33779,Ac=35840,Cc=35841,Rc=35842,Pc=35843,Uc=36196,Dc=37492,Lc=37496,Ic=37808,Fc=37809,Nc=37810,Oc=37811,Bc=37812,kc=37813,zc=37814,Gc=37815,Vc=37816,Hc=37817,Wc=37818,Xc=37819,Yc=37820,qc=37821,jc=36492,Kc=36494,Zc=36495,Jc=36283,Qc=36284,$c=36285,eu=36286,Z0=3200,wd=3201,J0=0,Q0=1,Yi="",cn="srgb",Sa="srgb-linear",Do="linear",ct="srgb",Vr=7680,Lf=519,$0=512,em=513,tm=514,Ad=515,nm=516,im=517,rm=518,am=519,tu=35044,If="300 es",di=2e3,Lo=2001;function Cd(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ds(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function sm(){const a=ds("canvas");return a.style.display="block",a}const Ff={};function Io(...a){const e="THREE."+a.shift();console.log(e,...a)}function Ye(...a){const e="THREE."+a.shift();console.warn(e,...a)}function Mt(...a){const e="THREE."+a.shift();console.error(e,...a)}function ps(...a){const e=a.join(" ");e in Ff||(Ff[e]=!0,Ye(...a))}function om(a,e,t){return new Promise(function(n,i){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nf=1234567;const $a=Math.PI/180,ms=180/Math.PI;function Ui(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[a&255]+Kt[a>>8&255]+Kt[a>>16&255]+Kt[a>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function je(a,e,t){return Math.max(e,Math.min(t,a))}function Hu(a,e){return(a%e+e)%e}function lm(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function cm(a,e,t){return a!==e?(t-a)/(e-a):0}function es(a,e,t){return(1-t)*a+t*e}function um(a,e,t,n){return es(a,e,1-Math.exp(-t*n))}function fm(a,e=1){return e-Math.abs(Hu(a,e*2)-e)}function hm(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function dm(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function pm(a,e){return a+Math.floor(Math.random()*(e-a+1))}function mm(a,e){return a+Math.random()*(e-a)}function xm(a){return a*(.5-Math.random())}function _m(a){a!==void 0&&(Nf=a);let e=Nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gm(a){return a*$a}function vm(a){return a*ms}function Sm(a){return(a&a-1)===0&&a!==0}function bm(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ym(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Mm(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),f=r((e-n)/2),h=s((e-n)/2),d=r((n-e)/2),_=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*f,l*h,o*c);break;case"YZY":a.set(l*h,o*u,l*f,o*c);break;case"ZXZ":a.set(l*f,l*h,o*u,o*c);break;case"XZX":a.set(o*u,l*_,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*_,o*c);break;case"ZYZ":a.set(l*_,l*d,o*u,o*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function st(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Tm={DEG2RAD:$a,RAD2DEG:ms,generateUUID:Ui,clamp:je,euclideanModulo:Hu,mapLinear:lm,inverseLerp:cm,lerp:es,damp:um,pingpong:fm,smoothstep:hm,smootherstep:dm,randInt:pm,randFloat:mm,randFloatSpread:xm,seededRandom:_m,degToRad:gm,radToDeg:vm,isPowerOfTwo:Sm,ceilPowerOfTwo:bm,floorPowerOfTwo:ym,setQuaternionFromProperEuler:Mm,normalize:st,denormalize:Jn};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ts{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=r[s+0],d=r[s+1],_=r[s+2],x=r[s+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==d||u!==_){let p=l*h+c*d+u*_+f*x;p<0&&(h=-h,d=-d,_=-_,x=-x,p=-p);let m=1-o;if(p<.9995){const S=Math.acos(p),v=Math.sin(S);m=Math.sin(m*S)/v,o=Math.sin(o*S)/v,l=l*m+h*o,c=c*m+d*o,u=u*m+_*o,f=f*m+x*o}else{l=l*m+h*o,c=c*m+d*o,u=u*m+_*o,f=f*m+x*o;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[s],h=r[s+1],d=r[s+2],_=r[s+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(r/2),h=l(n/2),d=l(i/2),_=l(r/2);switch(s){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Of.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Of.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*i-o*n),u=2*(o*t-r*i),f=2*(r*n-s*t);return this.x=t+l*c+s*f-o*u,this.y=n+l*u+o*c-r*f,this.z=i+l*f+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ml.copy(this).projectOnVector(e),this.sub(Ml)}reflect(e){return this.sub(Ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ml=new j,Of=new Ts;class qe{constructor(e,t,n,i,r,s,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c)}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],x=i[0],p=i[3],m=i[6],S=i[1],v=i[4],y=i[7],T=i[2],E=i[5],w=i[8];return r[0]=s*x+o*S+l*T,r[3]=s*p+o*v+l*E,r[6]=s*m+o*y+l*w,r[1]=c*x+u*S+f*T,r[4]=c*p+u*v+f*E,r[7]=c*m+u*y+f*w,r[2]=h*x+d*S+_*T,r[5]=h*p+d*v+_*E,r[8]=h*m+d*y+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,h=o*l-u*r,d=c*r-s*l,_=t*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(i*c-u*n)*x,e[2]=(o*n-i*s)*x,e[3]=h*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(s*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tl=new qe,Bf=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kf=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Em(){const a={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ct&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ct&&(i.r=fa(i.r),i.g=fa(i.g),i.b=fa(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yi?Do:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Sa]:{primaries:e,whitePoint:n,transfer:Do,toXYZ:Bf,fromXYZ:kf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Bf,fromXYZ:kf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),a}const it=Em();function Di(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function fa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Hr;class wm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hr===void 0&&(Hr=ds("canvas")),Hr.width=e.width,Hr.height=e.height;const i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Di(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Am=0;class Wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(El(i[s].image)):r.push(El(i[s]))}else r=El(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function El(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?wm.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let Cm=0;const wl=new j;class qt extends Ra{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=Ci,i=Ci,r=hn,s=Tr,o=$n,l=Li,c=qt.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Ui(),this.name="",this.source=new Wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wl).x}get height(){return this.source.getSize(wl).y}get depth(){return this.source.getSize(wl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ec:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ec:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=gd;qt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,T=(m+1)/2,E=(u+h)/4,w=(f+x)/4,C=(_+p)/4;return v>y&&v>T?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=w/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=C/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=w/r,i=C/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(f-x)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rm extends Ra{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new qt(i);this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Wu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends Rm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rd extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pm extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,qn):qn.fromBufferAttribute(r,s),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),zs.subVectors(this.max,Ga),Wr.subVectors(e.a,Ga),Xr.subVectors(e.b,Ga),Yr.subVectors(e.c,Ga),ki.subVectors(Xr,Wr),zi.subVectors(Yr,Xr),fr.subVectors(Wr,Yr);let t=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-fr.z,fr.y,ki.z,0,-ki.x,zi.z,0,-zi.x,fr.z,0,-fr.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-fr.y,fr.x,0];return!Al(t,Wr,Xr,Yr,zs)||(t=[1,0,0,0,1,0,0,0,1],!Al(t,Wr,Xr,Yr,zs))?!1:(Gs.crossVectors(ki,zi),t=[Gs.x,Gs.y,Gs.z],Al(t,Wr,Xr,Yr,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vi=[new j,new j,new j,new j,new j,new j,new j,new j],qn=new j,ks=new ti,Wr=new j,Xr=new j,Yr=new j,ki=new j,zi=new j,fr=new j,Ga=new j,zs=new j,Gs=new j,hr=new j;function Al(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){hr.fromArray(a,r);const o=i.x*Math.abs(hr.x)+i.y*Math.abs(hr.y)+i.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),u=n.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Um=new ti,Va=new j,Cl=new j;class Pa{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Um.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const t=Va.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Va,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(Cl)),this.expandByPoint(Va.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Si=new j,Rl=new j,Vs=new j,Gi=new j,Pl=new j,Hs=new j,Ul=new j;class Pd{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rl.copy(e).add(t).multiplyScalar(.5),Vs.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Rl);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Vs),o=Gi.dot(this.direction),l=-Gi.dot(Vs),c=Gi.lengthSq(),u=Math.abs(1-s*s);let f,h,d,_;if(u>0)if(f=s*l-o,h=s*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,d=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=r,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-s*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(s*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=s>0?-r:r,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Rl).addScaledVector(Vs,h),d}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,r){Pl.subVectors(t,e),Hs.subVectors(n,e),Ul.crossVectors(Pl,Hs);let s=this.direction.dot(Ul),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Gi.subVectors(this.origin,e);const l=o*this.direction.dot(Hs.crossVectors(Gi,Hs));if(l<0)return null;const c=o*this.direction.dot(Pl.cross(Gi));if(c<0||l+c>s)return null;const u=-o*Gi.dot(Ul);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,n,i,r,s,o,l,c,u,f,h,d,_,x,p){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c,u,f,h,d,_,x,p)}set(e,t,n,i,r,s,o,l,c,u,f,h,d,_,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=_,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qr.setFromMatrixColumn(e,0).length(),r=1/qr.setFromMatrixColumn(e,1).length(),s=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*u,d=s*f,_=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=_+d*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,x=c*f;t[0]=h+x*o,t[4]=_*o-d,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=d*o-_,t[6]=x+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,x=c*f;t[0]=h-x*o,t[4]=-s*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=s*u,t[9]=x-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,d=s*f,_=o*u,x=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,d=s*c,_=o*l,x=o*c;t[0]=l*u,t[4]=x-h*f,t[8]=_*f+d,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=s*l,d=s*c,_=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=s*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dm,e,Lm)}lookAt(e,t,n){const i=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Vi.crossVectors(n,bn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Vi.crossVectors(n,bn)),Vi.normalize(),Ws.crossVectors(bn,Vi),i[0]=Vi.x,i[4]=Ws.x,i[8]=bn.x,i[1]=Vi.y,i[5]=Ws.y,i[9]=bn.y,i[2]=Vi.z,i[6]=Ws.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],x=n[6],p=n[10],m=n[14],S=n[3],v=n[7],y=n[11],T=n[15],E=i[0],w=i[4],C=i[8],g=i[12],b=i[1],U=i[5],P=i[9],D=i[13],I=i[2],z=i[6],B=i[10],Z=i[14],W=i[3],Y=i[7],H=i[11],F=i[15];return r[0]=s*E+o*b+l*I+c*W,r[4]=s*w+o*U+l*z+c*Y,r[8]=s*C+o*P+l*B+c*H,r[12]=s*g+o*D+l*Z+c*F,r[1]=u*E+f*b+h*I+d*W,r[5]=u*w+f*U+h*z+d*Y,r[9]=u*C+f*P+h*B+d*H,r[13]=u*g+f*D+h*Z+d*F,r[2]=_*E+x*b+p*I+m*W,r[6]=_*w+x*U+p*z+m*Y,r[10]=_*C+x*P+p*B+m*H,r[14]=_*g+x*D+p*Z+m*F,r[3]=S*E+v*b+y*I+T*W,r[7]=S*w+v*U+y*z+T*Y,r[11]=S*C+v*P+y*B+T*H,r[15]=S*g+v*D+y*Z+T*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],x=e[7],p=e[11],m=e[15];return _*(+r*l*f-i*c*f-r*o*h+n*c*h+i*o*d-n*l*d)+x*(+t*l*d-t*c*h+r*s*h-i*s*d+i*c*u-r*l*u)+p*(+t*c*f-t*o*d-r*s*f+n*s*d+r*o*u-n*c*u)+m*(-i*o*u-t*l*f+t*o*h+i*s*f-n*s*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],x=e[13],p=e[14],m=e[15],S=f*p*c-x*h*c+x*l*d-o*p*d-f*l*m+o*h*m,v=_*h*c-u*p*c-_*l*d+s*p*d+u*l*m-s*h*m,y=u*x*c-_*f*c+_*o*d-s*x*d-u*o*m+s*f*m,T=_*f*l-u*x*l-_*o*h+s*x*h+u*o*p-s*f*p,E=t*S+n*v+i*y+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=S*w,e[1]=(x*h*r-f*p*r-x*i*d+n*p*d+f*i*m-n*h*m)*w,e[2]=(o*p*r-x*l*r+x*i*c-n*p*c-o*i*m+n*l*m)*w,e[3]=(f*l*r-o*h*r-f*i*c+n*h*c+o*i*d-n*l*d)*w,e[4]=v*w,e[5]=(u*p*r-_*h*r+_*i*d-t*p*d-u*i*m+t*h*m)*w,e[6]=(_*l*r-s*p*r-_*i*c+t*p*c+s*i*m-t*l*m)*w,e[7]=(s*h*r-u*l*r+u*i*c-t*h*c-s*i*d+t*l*d)*w,e[8]=y*w,e[9]=(_*f*r-u*x*r-_*n*d+t*x*d+u*n*m-t*f*m)*w,e[10]=(s*x*r-_*o*r+_*n*c-t*x*c-s*n*m+t*o*m)*w,e[11]=(u*o*r-s*f*r-u*n*c+t*f*c+s*n*d-t*o*d)*w,e[12]=T*w,e[13]=(u*x*i-_*f*i+_*n*h-t*x*h-u*n*p+t*f*p)*w,e[14]=(_*o*i-s*x*i-_*n*l+t*x*l+s*n*p-t*o*p)*w,e[15]=(s*f*i-u*o*i+u*n*l-t*f*l-s*n*h+t*o*h)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,f=o+o,h=r*c,d=r*u,_=r*f,x=s*u,p=s*f,m=o*f,S=l*c,v=l*u,y=l*f,T=n.x,E=n.y,w=n.z;return i[0]=(1-(x+m))*T,i[1]=(d+y)*T,i[2]=(_-v)*T,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(h+m))*E,i[6]=(p+S)*E,i[7]=0,i[8]=(_+v)*w,i[9]=(p-S)*w,i[10]=(1-(h+x))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=qr.set(i[0],i[1],i[2]).length();const s=qr.set(i[4],i[5],i[6]).length(),o=qr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);const c=1/r,u=1/s,f=1/o;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,t.setFromRotationMatrix(jn),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s,o=di,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let _,x;if(l)_=r/(s-r),x=s*r/(s-r);else if(o===di)_=-(s+r)/(s-r),x=-2*s*r/(s-r);else if(o===Lo)_=-s/(s-r),x=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,s,o=di,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let _,x;if(l)_=1/(s-r),x=s/(s-r);else if(o===di)_=-2/(s-r),x=-(s+r)/(s-r);else if(o===Lo)_=-1/(s-r),x=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qr=new j,jn=new Et,Dm=new j(0,0,0),Lm=new j(1,1,1),Vi=new j,Ws=new j,bn=new j,zf=new Et,Gf=new Ts;class Ii{constructor(e=0,t=0,n=0,i=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gf.setFromEuler(this),this.setFromQuaternion(Gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Im=0;const Vf=new j,jr=new Ts,bi=new Et,Xs=new j,Ha=new j,Fm=new j,Nm=new Ts,Hf=new j(1,0,0),Wf=new j(0,1,0),Xf=new j(0,0,1),Yf={type:"added"},Om={type:"removed"},Kr={type:"childadded",child:null},Dl={type:"childremoved",child:null};class Cn extends Ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new j,t=new Ii,n=new Ts,i=new j(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new qe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Hf,e)}rotateY(e){return this.rotateOnAxis(Wf,e)}rotateZ(e){return this.rotateOnAxis(Xf,e)}translateOnAxis(e,t){return Vf.copy(e).applyQuaternion(this.quaternion),this.position.add(Vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hf,e)}translateY(e){return this.translateOnAxis(Wf,e)}translateZ(e){return this.translateOnAxis(Xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Ha,Xs,this.up):bi.lookAt(Xs,Ha,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),jr.setFromRotationMatrix(bi),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yf),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Om),Dl.child=e,this.dispatchEvent(Dl),Dl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yf),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,Fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,Nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),d=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Cn.DEFAULT_UP=new j(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new j,yi=new j,Ll=new j,Mi=new j,Zr=new j,Jr=new j,qf=new j,Il=new j,Fl=new j,Nl=new j,Ol=new ft,Bl=new ft,kl=new ft;class Qn{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kn.subVectors(e,t),i.cross(Kn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Kn.subVectors(i,t),yi.subVectors(n,t),Ll.subVectors(e,t);const s=Kn.dot(Kn),o=Kn.dot(yi),l=Kn.dot(Ll),c=yi.dot(yi),u=yi.dot(Ll),f=s*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(s*u-o*l)*h;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(s,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,s){return Ol.setScalar(0),Bl.setScalar(0),kl.setScalar(0),Ol.fromBufferAttribute(e,t),Bl.fromBufferAttribute(e,n),kl.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Ol,r.x),s.addScaledVector(Bl,r.y),s.addScaledVector(kl,r.z),s}static isFrontFacing(e,t,n,i){return Kn.subVectors(n,t),yi.subVectors(e,t),Kn.cross(yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Kn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Qn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;Zr.subVectors(i,n),Jr.subVectors(r,n),Il.subVectors(e,n);const l=Zr.dot(Il),c=Jr.dot(Il);if(l<=0&&c<=0)return t.copy(n);Fl.subVectors(e,i);const u=Zr.dot(Fl),f=Jr.dot(Fl);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Zr,s);Nl.subVectors(e,r);const d=Zr.dot(Nl),_=Jr.dot(Nl);if(_>=0&&d<=_)return t.copy(r);const x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Jr,o);const p=u*_-d*f;if(p<=0&&f-u>=0&&d-_>=0)return qf.subVectors(r,i),o=(f-u)/(f-u+(d-_)),t.copy(i).addScaledVector(qf,o);const m=1/(p+x+h);return s=x*m,o=h*m,t.copy(n).addScaledVector(Zr,s).addScaledVector(Jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function zl(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Hu(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=zl(s,r,e+1/3),this.g=zl(s,r,e),this.b=zl(s,r,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=cn){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=Ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return it.workingToColorSpace(Zt.copy(this),e),Math.round(je(Zt.r*255,0,255))*65536+Math.round(je(Zt.g*255,0,255))*256+Math.round(je(Zt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Zt.copy(this),t);const n=Zt.r,i=Zt.g,r=Zt.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=cn){it.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,i=Zt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Ys);const n=es(Hi.h,Ys.h,t),i=es(Hi.s,Ys.s,t),r=es(Hi.l,Ys.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new tt;tt.NAMES=Ud;let Bm=0;class jo extends Ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ua,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ua&&(n.blending=this.blending),this.side!==nr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==yr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ir extends jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new j,qs=new $e;let km=0;class Hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tu,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tu&&(e.usage=this.usage),e}}class Dd extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ld extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mi extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zm=0;const On=new Et,Gl=new Cn,Qr=new j,yn=new ti,Wa=new ti,Ot=new j;class _i extends Ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cd(e)?Ld:Dd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new mi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Wa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(yn.min,Wa.min),yn.expandByPoint(Ot),Ot.addVectors(yn.max,Wa.max),yn.expandByPoint(Ot)):(yn.expandByPoint(Wa.min),yn.expandByPoint(Wa.max))}yn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ot.fromBufferAttribute(o,c),l&&(Qr.fromBufferAttribute(e,c),Ot.add(Qr)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new j,l[C]=new j;const c=new j,u=new j,f=new j,h=new $e,d=new $e,_=new $e,x=new j,p=new j;function m(C,g,b){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,g),f.fromBufferAttribute(n,b),h.fromBufferAttribute(r,C),d.fromBufferAttribute(r,g),_.fromBufferAttribute(r,b),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const U=1/(d.x*_.y-_.x*d.y);isFinite(U)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(U),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(U),o[C].add(x),o[g].add(x),o[b].add(x),l[C].add(p),l[g].add(p),l[b].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,g=S.length;C<g;++C){const b=S[C],U=b.start,P=b.count;for(let D=U,I=U+P;D<I;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new j,y=new j,T=new j,E=new j;function w(C){T.fromBufferAttribute(i,C),E.copy(T);const g=o[C];v.copy(g),v.sub(T.multiplyScalar(T.dot(g))).normalize(),y.crossVectors(E,g);const U=y.dot(l[C])<0?-1:1;s.setXYZW(C,v.x,v.y,v.z,U)}for(let C=0,g=S.length;C<g;++C){const b=S[C],U=b.start,P=b.count;for(let D=U,I=U+P;D<I;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new j,r=new j,s=new j,o=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),u.subVectors(s,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let m=0;m<u;m++)h[_++]=c[d++]}return new Hn(h,u,f)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jf=new Et,dr=new Pd,js=new Pa,Kf=new j,Ks=new j,Zs=new j,Js=new j,Vl=new j,Qs=new j,Zf=new j,$s=new j;class Bt extends Cn{constructor(e=new _i,t=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Vl.fromBufferAttribute(f,e),s?Qs.addScaledVector(Vl,u):Qs.addScaledVector(Vl.sub(t),u))}t.add(Qs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),dr.copy(e.ray).recast(e.near),!(js.containsPoint(dr.origin)===!1&&(dr.intersectSphere(js,Kf)===null||dr.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&(jf.copy(r).invert(),dr.copy(e.ray).applyMatrix4(jf),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],m=s[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,T=v;y<T;y+=3){const E=o.getX(y),w=o.getX(y+1),C=o.getX(y+2);i=eo(this,m,e,n,c,u,f,E,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=_,m=x;p<m;p+=3){const S=o.getX(p),v=o.getX(p+1),y=o.getX(p+2);i=eo(this,s,e,n,c,u,f,S,v,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],m=s[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,T=v;y<T;y+=3){const E=y,w=y+1,C=y+2;i=eo(this,m,e,n,c,u,f,E,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=_,m=x;p<m;p+=3){const S=p,v=p+1,y=p+2;i=eo(this,s,e,n,c,u,f,S,v,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Gm(a,e,t,n,i,r,s,o){let l;if(e.side===dn?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===nr,o),l===null)return null;$s.copy(o),$s.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo($s);return c<t.near||c>t.far?null:{distance:c,point:$s.clone(),object:a}}function eo(a,e,t,n,i,r,s,o,l,c){a.getVertexPosition(o,Ks),a.getVertexPosition(l,Zs),a.getVertexPosition(c,Js);const u=Gm(a,e,t,n,Ks,Zs,Js,Zf);if(u){const f=new j;Qn.getBarycoord(Zf,Ks,Zs,Js,f),i&&(u.uv=Qn.getInterpolatedAttribute(i,o,l,c,f,new $e)),r&&(u.uv1=Qn.getInterpolatedAttribute(r,o,l,c,f,new $e)),s&&(u.normal=Qn.getInterpolatedAttribute(s,o,l,c,f,new j),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new j,materialIndex:0};Qn.getNormal(Ks,Zs,Js,h.normal),u.face=h,u.barycoord=f}return u}class Es extends _i{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,s,r,0),_("z","y","x",1,-1,n,t,-e,s,r,1),_("x","z","y",1,1,e,n,t,i,s,2),_("x","z","y",1,-1,e,n,-t,i,s,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new mi(c,3)),this.setAttribute("normal",new mi(u,3)),this.setAttribute("uv",new mi(f,2));function _(x,p,m,S,v,y,T,E,w,C,g){const b=y/w,U=T/C,P=y/2,D=T/2,I=E/2,z=w+1,B=C+1;let Z=0,W=0;const Y=new j;for(let H=0;H<B;H++){const F=H*U-D;for(let X=0;X<z;X++){const ie=X*b-P;Y[x]=ie*S,Y[p]=F*v,Y[m]=I,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[m]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(X/w),f.push(1-H/C),Z+=1}}for(let H=0;H<C;H++)for(let F=0;F<w;F++){const X=h+F+z*H,ie=h+F+z*(H+1),ne=h+(F+1)+z*(H+1),Q=h+(F+1)+z*H;l.push(X,ie,Q),l.push(ie,ne,Q),W+=6}o.addGroup(d,W,g),d+=W,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ba(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function nn(a){const e={};for(let t=0;t<a.length;t++){const n=ba(a[t]);for(const i in n)e[i]=n[i]}return e}function Vm(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Id(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Ko={clone:ba,merge:nn};var Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=Wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ba(e.uniforms),this.uniformsGroups=Vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fd extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new j,Jf=new $e,Qf=new $e;class Zn extends Fd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Jf,Qf),t.subVectors(Qf,Jf)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($a*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $r=-90,ea=1;class Xm extends Cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zn($r,ea,e,t);i.layers=this.layers,this.add(i);const r=new Zn($r,ea,e,t);r.layers=this.layers,this.add(r);const s=new Zn($r,ea,e,t);s.layers=this.layers,this.add(s);const o=new Zn($r,ea,e,t);o.layers=this.layers,this.add(o);const l=new Zn($r,ea,e,t);l.layers=this.layers,this.add(l);const c=new Zn($r,ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,s),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Nd extends qt{constructor(e=[],t=ga,n,i,r,s,o,l,c,u){super(e,t,n,i,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ym extends Fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Nd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Es(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:ba(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Pi});r.uniforms.tEquirect.value=t;const s=new Bt(i,r),o=t.minFilter;return t.minFilter===Tr&&(t.minFilter=hn),new Xm(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}class Lt extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qm={type:"move"};class Hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jm extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Km{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tu,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new j;class ji{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ji(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zm extends qt{constructor(e=null,t=1,n=1,i,r,s,o,l,c=An,u=An,f,h){super(null,s,o,l,c,u,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jm extends Hn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wl=new j,Qm=new j,$m=new qe;class Sr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Wl.subVectors(n,t).cross(Qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$m.getNormalMatrix(e),i=this.coplanarPoint(Wl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Pa,ex=new $e(.5,.5),to=new j;class Od{constructor(e=new Sr,t=new Sr,n=new Sr,i=new Sr,r=new Sr,s=new Sr){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di,n=!1){const i=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],_=r[8],x=r[9],p=r[10],m=r[11],S=r[12],v=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-s,d-u,m-_,T-S).normalize(),i[1].setComponents(c+s,d+u,m+_,T+S).normalize(),i[2].setComponents(c+o,d+f,m+x,T+v).normalize(),i[3].setComponents(c-o,d-f,m-x,T-v).normalize(),n)i[4].setComponents(l,h,p,y).normalize(),i[5].setComponents(c-l,d-h,m-p,T-y).normalize();else if(i[4].setComponents(c-l,d-h,m-p,T-y).normalize(),t===di)i[5].setComponents(c+l,d+h,m+p,T+y).normalize();else if(t===Lo)i[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);const t=ex.distanceTo(e.center);return pr.radius=.7071067811865476+t,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(to.x=i.normal.x>0?e.max.x:e.min.x,to.y=i.normal.y>0?e.max.y:e.min.y,to.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bd extends qt{constructor(e,t,n=Ir,i,r,s,o=An,l=An,c,u=fs,f=1){if(u!==fs&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class kd extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pn extends _i{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],x=[],p=[];for(let m=0;m<u;m++){const S=m*h-s;for(let v=0;v<c;v++){const y=v*f-r;_.push(y,-S,0),x.push(0,0,1),p.push(v/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const v=S+c*m,y=S+c*(m+1),T=S+1+c*(m+1),E=S+1+c*m;d.push(v,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new mi(_,3)),this.setAttribute("normal",new mi(x,3)),this.setAttribute("uv",new mi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.width,e.height,e.widthSegments,e.heightSegments)}}class tx extends _i{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new j,r=new j;if(e.index!==null){const s=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],h=f.start,d=f.count;for(let _=h,x=h+d;_<x;_+=3)for(let p=0;p<3;p++){const m=o.getX(_+p),S=o.getX(_+(p+1)%3);i.fromBufferAttribute(s,m),r.fromBufferAttribute(s,S),$f(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,f=3*o+(c+1)%3;i.fromBufferAttribute(s,u),r.fromBufferAttribute(s,f),$f(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new mi(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function $f(a,e,t){const n=`${a.x},${a.y},${a.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${a.x},${a.y},${a.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class zd extends jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gd extends jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xl={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class nx{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ix=new nx;class Yu{constructor(e){this.manager=e!==void 0?e:ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Yu.DEFAULT_MATERIAL_NAME="__DEFAULT";const ta=new WeakMap;class rx extends Yu{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Xl.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let f=ta.get(s);f===void 0&&(f=[],ta.set(s,f)),f.push({onLoad:t,onError:i})}return s}const o=ds("img");function l(){u(),t&&t(this);const f=ta.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}ta.delete(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),Xl.remove(`image:${e}`);const h=ta.get(this)||[];for(let d=0;d<h.length;d++){const _=h[d];_.onError&&_.onError(f)}ta.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xl.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class ax extends Yu{constructor(e){super(e)}load(e,t,n,i){const r=new qt,s=new rx(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Vd extends Fd{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hd extends _i{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class sx extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ox{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class nu extends Km{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const eh=new Et;class lx{constructor(e,t,n=0,i=1/0){this.ray=new Pd(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Xu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return eh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eh),this}intersectObject(e,t=!0,n=[]){return iu(e,this,n,t),n.sort(th),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)iu(e[i],this,n,t);return n.sort(th),n}}function th(a,e){return a.distance-e.distance}function iu(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=a.children;for(let s=0,o=r.length;s<o;s++)iu(r[s],e,t,!0)}}const nh=new j,no=new j,na=new j,ia=new j,Yl=new j,cx=new j,ux=new j;class fx{constructor(e=new j,t=new j){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){nh.subVectors(e,this.start),no.subVectors(this.end,this.start);const n=no.dot(no);let r=no.dot(nh)/n;return t&&(r=je(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=cx,n=ux){const i=10000000000000001e-32;let r,s;const o=this.start,l=e.start,c=this.end,u=e.end;na.subVectors(c,o),ia.subVectors(u,l),Yl.subVectors(o,l);const f=na.dot(na),h=ia.dot(ia),d=ia.dot(Yl);if(f<=i&&h<=i)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(f<=i)r=0,s=d/h,s=je(s,0,1);else{const _=na.dot(Yl);if(h<=i)s=0,r=je(-_/f,0,1);else{const x=na.dot(ia),p=f*h-x*x;p!==0?r=je((x*d-_*h)/p,0,1):r=0,s=(x*r+d)/h,s<0?(s=0,r=je(-_/f,0,1)):s>1&&(s=1,r=je((x-_)/f,0,1))}}return t.copy(o).add(na.multiplyScalar(r)),n.copy(l).add(ia.multiplyScalar(s)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function ih(a,e,t,n){const i=hx(n);switch(t){case Md:return a*e;case Ed:return a*e/i.components*i.byteLength;case ku:return a*e/i.components*i.byteLength;case zu:return a*e*2/i.components*i.byteLength;case Gu:return a*e*2/i.components*i.byteLength;case Td:return a*e*3/i.components*i.byteLength;case $n:return a*e*4/i.components*i.byteLength;case Vu:return a*e*4/i.components*i.byteLength;case fo:case ho:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Pc:return Math.max(a,16)*Math.max(e,8)/4;case Ac:case Rc:return Math.max(a,8)*Math.max(e,8)/2;case Uc:case Dc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Lc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case kc:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case zc:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case qc:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case jc:case Kc:case Zc:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Jc:case Qc:return Math.ceil(a/4)*Math.ceil(e/4)*8;case $c:case eu:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hx(a){switch(a){case Li:case vd:return{byteLength:1,components:1};case cs:case Sd:case Ca:return{byteLength:2,components:1};case Ou:case Bu:return{byteLength:2,components:4};case Ir:case Nu:case Ri:return{byteLength:4,components:1};case bd:case yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fu}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fu);const vt={skyline:["VOL 1","AUROVILLE, IN","10/12/25"],header_fname:"ASHISH",header_lname:"CHANDY",header_moon:{size:100,texturePath:"textures/moon-cut.png"},quote_sans:`Avibhāgo hi nirvṛtyai dṛśyatām tālapātataḥ | kilāvyaktadhvanau tasmin vādane parituṣyati ||

-Abhinavagupta`,about_title:"About",about_nav:["Me","Author","Process"],about_author_text:`Technical Lead & Senior Game Developer
Architecting scalable multiplayer systems and rescuing complex game projects.

I bridge game design vision and full-stack execution, with 10+ years of experience leading the development of multiplayer games, immersive digital worlds, and live production systems. From architecting cloud-native backends to untangling failing codebases, I help teams turn ambitious ideas into stable, market-ready products.
Top Rated Upwork Freelancer · 5★ Rating · Trusted by global clients
→ Let’s build something remarkable`,work_nav_button_left:{size:40,texturePath:"textures/right-arrow-white.png",id:"work_left"},work_nav_button_right:{size:40,texturePath:"textures/right-arrow-white.png",id:"work_right"},projects:[{title:"GridRooms-Online",subtitle:"Metaverse Social Platform, WebGL Unity",value:"Gridrooms-Online is a large-scale, browser-based social world built from the ground up using Unity WebGL, designed to support thousands of concurrent users while enabling deep personalization, real-time multiplayer interaction, and user-generated content. I led the technical architecture and development across frontend, backend, and networking—implementing customizable avatars and homes, public and private social spaces, multiplayer mini-games, live chat systems, and a creator-driven marketplace—while integrating scalable cloud infrastructure (AWS), real-time networking (Photon, WebSockets), and persistent data storage (MongoDB). Beyond engineering execution, I acted as a long-term technical mentor and consultant, rapidly adapting to new technologies and guiding the project from concept to a stable live product capable of sustaining ~2000 CCUs, earning strong client trust, a 5-star rating, and long-term collaboration success.",thumbnailPath:"textures/project1-thumb.png",tech_stack:["unity","photon","aws","aws-ec2","aws-s3","mongodbatlas","nginx","node"],review:"A knowledgeable, dedicated, always reliable, great mentor. When I started this project 1.5 years ago, I had never touched Unity environment, and only after 1.5 years working with him, being taught by him, I am already a decent coder in both frontend and backend. Aside from teaching me how to develop in Unity environment, he was a reliable and easy to talk to as the project consultant, always available, down to point and suggested best approach in solving all the troubles we had in developing the game. As our project was brand new from the ground up, all the problems we had to solve were solved by exploring all kinds of methods, common techniques, new ideas, new technologies to utilize, and he was always quick to survey the issue, discuss the potential approaches with me, and when new technology was necessary, he was quick at learning it, and when there were needs to change between tasks, he was quick and ready to adapt to the project's needs. He has broad knowledge of game development environment, knows the industry, and can propose the best approach to bring your ideas to life. In the 1.5 years we worked together, we formed a friendship, and it was possible because he has such honest and earnest personality that you can rely and trust as a good friend, and I think that such trust is important in entrusting someone with your project. Afterall, I'm really happy it was he who joined me in my project. If it was others, without him, I wouldn't be here with the fruit of our labour today. I would love to work with him again."},{title:"Project Two",subtitle:"Subtitle Teo",value:"project_two",thumbnailPath:"textures/project2-thumb.png",tech_stack:["unity","photon","aws","aws-ec2","aws-s3","mongodbatlas","nginx","node"],review:""}],tech_stack:new Map([["unity",{width:72,height:72,texturePath:"textures/TechStackIcons/unity.png"}],["firebase",{width:72,height:72,texturePath:"textures/TechStackIcons/firebase.png"}],["gcp",{width:72,height:72,texturePath:"textures/TechStackIcons/gcp.png"}],["aws",{width:72,height:72,texturePath:"textures/TechStackIcons/aws.png"}],["aws-ec2",{width:72,height:72,texturePath:"textures/TechStackIcons/aws-ec2.png"}],["aws-s3",{width:72,height:72,texturePath:"textures/TechStackIcons/aws-s3.png"}],["mongodbatlas",{width:72,height:72,texturePath:"textures/TechStackIcons/mongodbatlas.png"}],["nginx",{width:72,height:72,texturePath:"textures/TechStackIcons/nginx.png"}],["node",{width:72,height:72,texturePath:"textures/TechStackIcons/node.png"}],["photon",{width:72,height:72,texturePath:"textures/TechStackIcons/photon.png"}]]),contactCard_upwork:{texturePath:"textures/ContactIcons/upwork.png"},contactCard_linkedin:{texturePath:"textures/ContactIcons/linkedIn.png"}},zn={FONT_BASE_URL:"fonts/Newsreader/Newsreader",MAX_DESIGN_WIDTH:1e3,tech_stack:{width:300,height:300,iconHeight:75,gap:20,review_max_height:120,review_max_width:900}};function Wd(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function dx(a){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=a.createBuffer();a.bindBuffer(l,h),a.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(a.bindBuffer(c,o),f.length===0)a.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],x=f[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const x=f[d];a.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:s}}var px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
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
#endif`,xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sx=`#ifdef USE_AOMAP
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
#endif`,bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yx=`#ifdef USE_BATCHING
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
#endif`,Mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ax=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ox=`#define PI 3.141592653589793
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
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kx=`vec3 transformedNormal = objectNormal;
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
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t_=`#ifdef USE_GRADIENTMAP
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
}`,n_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
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
#endif`,s_=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,o_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f_=`PhysicalMaterial material;
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
#endif`,h_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,d_=`
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
#endif`,p_=`#if defined( RE_IndirectDiffuse )
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
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M_=`#if defined( USE_POINTS_UV )
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
#endif`,T_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R_=`#ifdef USE_MORPHTARGETS
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
#endif`,P_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N_=`#ifdef USE_NORMALMAP
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
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,H_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q_=`float getShadowMask() {
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
}`,$_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
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
}`,Sg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
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
}`,bg=`#define DISTANCE
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
}`,yg=`#define DISTANCE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Rg=`#define LAMBERT
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
}`,Pg=`#define LAMBERT
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
}`,Ug=`#define MATCAP
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
}`,Dg=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Ig=`#define NORMAL
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
}`,Fg=`#define PHONG
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
}`,Ng=`#define PHONG
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
}`,Og=`#define STANDARD
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
}`,Bg=`#define STANDARD
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
}`,kg=`#define TOON
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
}`,zg=`#define TOON
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
}`,Gg=`uniform float size;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Wg=`uniform vec3 color;
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
}`,Xg=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:xx,alphamap_pars_fragment:_x,alphatest_fragment:gx,alphatest_pars_fragment:vx,aomap_fragment:Sx,aomap_pars_fragment:bx,batching_pars_vertex:yx,batching_vertex:Mx,begin_vertex:Tx,beginnormal_vertex:Ex,bsdfs:wx,iridescence_fragment:Ax,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Rx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Ux,clipping_planes_vertex:Dx,color_fragment:Lx,color_pars_fragment:Ix,color_pars_vertex:Fx,color_vertex:Nx,common:Ox,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:kx,displacementmap_pars_vertex:zx,displacementmap_vertex:Gx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Hx,colorspace_fragment:Wx,colorspace_pars_fragment:Xx,envmap_fragment:Yx,envmap_common_pars_fragment:qx,envmap_pars_fragment:jx,envmap_pars_vertex:Kx,envmap_physical_pars_fragment:s_,envmap_vertex:Zx,fog_vertex:Jx,fog_pars_vertex:Qx,fog_fragment:$x,fog_pars_fragment:e_,gradientmap_pars_fragment:t_,lightmap_pars_fragment:n_,lights_lambert_fragment:i_,lights_lambert_pars_fragment:r_,lights_pars_begin:a_,lights_toon_fragment:o_,lights_toon_pars_fragment:l_,lights_phong_fragment:c_,lights_phong_pars_fragment:u_,lights_physical_fragment:f_,lights_physical_pars_fragment:h_,lights_fragment_begin:d_,lights_fragment_maps:p_,lights_fragment_end:m_,logdepthbuf_fragment:x_,logdepthbuf_pars_fragment:__,logdepthbuf_pars_vertex:g_,logdepthbuf_vertex:v_,map_fragment:S_,map_pars_fragment:b_,map_particle_fragment:y_,map_particle_pars_fragment:M_,metalnessmap_fragment:T_,metalnessmap_pars_fragment:E_,morphinstance_vertex:w_,morphcolor_vertex:A_,morphnormal_vertex:C_,morphtarget_pars_vertex:R_,morphtarget_vertex:P_,normal_fragment_begin:U_,normal_fragment_maps:D_,normal_pars_fragment:L_,normal_pars_vertex:I_,normal_vertex:F_,normalmap_pars_fragment:N_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:B_,clearcoat_pars_fragment:k_,iridescence_pars_fragment:z_,opaque_fragment:G_,packing:V_,premultiplied_alpha_fragment:H_,project_vertex:W_,dithering_fragment:X_,dithering_pars_fragment:Y_,roughnessmap_fragment:q_,roughnessmap_pars_fragment:j_,shadowmap_pars_fragment:K_,shadowmap_pars_vertex:Z_,shadowmap_vertex:J_,shadowmask_pars_fragment:Q_,skinbase_vertex:$_,skinning_pars_vertex:eg,skinning_vertex:tg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:rg,tonemapping_fragment:ag,tonemapping_pars_fragment:sg,transmission_fragment:og,transmission_pars_fragment:lg,uv_pars_fragment:cg,uv_pars_vertex:ug,uv_vertex:fg,worldpos_vertex:hg,background_vert:dg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:xg,cube_vert:_g,cube_frag:gg,depth_vert:vg,depth_frag:Sg,distanceRGBA_vert:bg,distanceRGBA_frag:yg,equirect_vert:Mg,equirect_frag:Tg,linedashed_vert:Eg,linedashed_frag:wg,meshbasic_vert:Ag,meshbasic_frag:Cg,meshlambert_vert:Rg,meshlambert_frag:Pg,meshmatcap_vert:Ug,meshmatcap_frag:Dg,meshnormal_vert:Lg,meshnormal_frag:Ig,meshphong_vert:Fg,meshphong_frag:Ng,meshphysical_vert:Og,meshphysical_frag:Bg,meshtoon_vert:kg,meshtoon_frag:zg,points_vert:Gg,points_frag:Vg,shadow_vert:Hg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:Yg},Ue={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},un={basic:{uniforms:nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:nn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:nn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:nn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:nn([Ue.points,Ue.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:nn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:nn([Ue.common,Ue.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:nn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:nn([Ue.sprite,Ue.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:nn([Ue.common,Ue.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:nn([Ue.lights,Ue.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};un.physical={uniforms:nn([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const io={r:0,b:0,g:0},mr=new Ii,qg=new Et;function jg(a,e,t,n,i,r,s){const o=new tt(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1;const T=_(v);T===null?m(o,l):T&&T.isColor&&(m(T,1),y=!0);const E=a.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(a.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function p(v,y){const T=_(y);T&&(T.isCubeTexture||T.mapping===qo)?(u===void 0&&(u=new Bt(new Es(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ba(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),mr.copy(y.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qg.makeRotationFromEuler(mr)),u.material.toneMapped=it.getTransfer(T.colorSpace)!==ct,(f!==T||h!==T.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,f=T,h=T.version,d=a.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Bt(new Pn(2,2),new ei({name:"BackgroundMaterial",uniforms:ba(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=it.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||h!==T.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,f=T,h=T.version,d=a.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(io,Id(a)),n.buffers.color.setClear(io.r,io.g,io.b,y,s)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(o,l)},render:x,addToRenderList:p,dispose:S}}function Kg(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,s=!1;function o(b,U,P,D,I){let z=!1;const B=f(D,P,U);r!==B&&(r=B,c(r.object)),z=d(b,D,P,I),z&&_(b,D,P,I),I!==null&&e.update(I,a.ELEMENT_ARRAY_BUFFER),(z||s)&&(s=!1,y(b,U,P,D),I!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return a.createVertexArray()}function c(b){return a.bindVertexArray(b)}function u(b){return a.deleteVertexArray(b)}function f(b,U,P){const D=P.wireframe===!0;let I=n[b.id];I===void 0&&(I={},n[b.id]=I);let z=I[U.id];z===void 0&&(z={},I[U.id]=z);let B=z[D];return B===void 0&&(B=h(l()),z[D]=B),B}function h(b){const U=[],P=[],D=[];for(let I=0;I<t;I++)U[I]=0,P[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:P,attributeDivisors:D,object:b,attributes:{},index:null}}function d(b,U,P,D){const I=r.attributes,z=U.attributes;let B=0;const Z=P.getAttributes();for(const W in Z)if(Z[W].location>=0){const H=I[W];let F=z[W];if(F===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(F=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(F=b.instanceColor)),H===void 0||H.attribute!==F||F&&H.data!==F.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function _(b,U,P,D){const I={},z=U.attributes;let B=0;const Z=P.getAttributes();for(const W in Z)if(Z[W].location>=0){let H=z[W];H===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(H=b.instanceColor));const F={};F.attribute=H,H&&H.data&&(F.data=H.data),I[W]=F,B++}r.attributes=I,r.attributesNum=B,r.index=D}function x(){const b=r.newAttributes;for(let U=0,P=b.length;U<P;U++)b[U]=0}function p(b){m(b,0)}function m(b,U){const P=r.newAttributes,D=r.enabledAttributes,I=r.attributeDivisors;P[b]=1,D[b]===0&&(a.enableVertexAttribArray(b),D[b]=1),I[b]!==U&&(a.vertexAttribDivisor(b,U),I[b]=U)}function S(){const b=r.newAttributes,U=r.enabledAttributes;for(let P=0,D=U.length;P<D;P++)U[P]!==b[P]&&(a.disableVertexAttribArray(P),U[P]=0)}function v(b,U,P,D,I,z,B){B===!0?a.vertexAttribIPointer(b,U,P,I,z):a.vertexAttribPointer(b,U,P,D,I,z)}function y(b,U,P,D){x();const I=D.attributes,z=P.getAttributes(),B=U.defaultAttributeValues;for(const Z in z){const W=z[Z];if(W.location>=0){let Y=I[Z];if(Y===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor)),Y!==void 0){const H=Y.normalized,F=Y.itemSize,X=e.get(Y);if(X===void 0)continue;const ie=X.buffer,ne=X.type,Q=X.bytesPerElement,G=ne===a.INT||ne===a.UNSIGNED_INT||Y.gpuType===Nu;if(Y.isInterleavedBufferAttribute){const k=Y.data,ee=k.stride,me=Y.offset;if(k.isInstancedInterleavedBuffer){for(let pe=0;pe<W.locationSize;pe++)m(W.location+pe,k.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let pe=0;pe<W.locationSize;pe++)p(W.location+pe);a.bindBuffer(a.ARRAY_BUFFER,ie);for(let pe=0;pe<W.locationSize;pe++)v(W.location+pe,F/W.locationSize,ne,H,ee*Q,(me+F/W.locationSize*pe)*Q,G)}else{if(Y.isInstancedBufferAttribute){for(let k=0;k<W.locationSize;k++)m(W.location+k,Y.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let k=0;k<W.locationSize;k++)p(W.location+k);a.bindBuffer(a.ARRAY_BUFFER,ie);for(let k=0;k<W.locationSize;k++)v(W.location+k,F/W.locationSize,ne,H,F*Q,F/W.locationSize*k*Q,G)}}else if(B!==void 0){const H=B[Z];if(H!==void 0)switch(H.length){case 2:a.vertexAttrib2fv(W.location,H);break;case 3:a.vertexAttrib3fv(W.location,H);break;case 4:a.vertexAttrib4fv(W.location,H);break;default:a.vertexAttrib1fv(W.location,H)}}}}S()}function T(){C();for(const b in n){const U=n[b];for(const P in U){const D=U[P];for(const I in D)u(D[I].object),delete D[I];delete U[P]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const U=n[b.id];for(const P in U){const D=U[P];for(const I in D)u(D[I].object),delete D[I];delete U[P]}delete n[b.id]}function w(b){for(const U in n){const P=n[U];if(P[b.id]===void 0)continue;const D=P[b.id];for(const I in D)u(D[I].object),delete D[I];delete P[b.id]}}function C(){g(),s=!0,r!==i&&(r=i,c(r.object))}function g(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:g,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function Zg(a,e,t){let n;function i(c){n=c}function r(c,u){a.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,f){f!==0&&(a.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)s(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jg(a,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){return!(w!==$n&&n.convert(w)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Li&&n.convert(w)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ri&&!C)}function l(w){if(w==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_TEXTURE_SIZE),p=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),m=a.getParameter(a.MAX_VERTEX_ATTRIBS),S=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),v=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,E=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:T,maxSamples:E}}function Qg(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Sr,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=a.get(f);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const S=r?0:n,v=S*4;let y=m.clippingState||null;l.value=y,y=u(_,h,v,d);for(let T=0;T!==v;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const m=d+x*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=d;v!==x;++v,y+=4)s.copy(f[v]).applyMatrix4(S,o),s.normal.toArray(p,y),p[y+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function $g(a){let e=new WeakMap;function t(s,o){return o===Mc?s.mapping=ga:o===Tc&&(s.mapping=va),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Mc||o===Tc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Ym(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ki=4,rh=[.125,.215,.35,.446,.526,.582],Mr=20,ev=256,Xa=new Vd,ah=new tt;let ql=null,jl=0,Kl=0,Zl=!1;const tv=new j;class sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:s=256,position:o=tv}=r;ql=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,jl,Kl),this._renderer.xr.enabled=Zl,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ga||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ca,format:$n,colorSpace:Sa,depthBuffer:!1},i=oh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nv(r)),this._blurMaterial=rv(r,e,t),this._ggxMaterial=iv(r,e,t)}return i}_compileMaterial(e){const t=new Bt(new _i,e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,i,r){const l=new Zn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(ah),f.toneMapping=$i,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new Es,new ir({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let m=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,m=!0):(p.color.copy(ah),m=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));const T=this._cubeSize;ra(i,y*T,v>2?T:0,T,T),f.setRenderTarget(i),m&&f.render(x,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ga||e.mapping===va;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());const r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ra(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Xa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const l=s.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=.05+c*.95,d=f*h,{_lodMax:_}=this,x=this._sizeLods[n],p=3*x*(n>_-Ki?n-_+Ki:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,ra(r,p,m,3*x,2*x),i.setRenderTarget(r),i.render(o,Xa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,ra(e,p,m,3*x,2*x),i.setRenderTarget(e),i.render(o,Xa)}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Mr-1),x=r/_,p=isFinite(r)?1+Math.floor(u*x):Mr;p>Mr&&Ye(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mr}`);const m=[];let S=0;for(let w=0;w<Mr;++w){const C=w/x,g=Math.exp(-C*C/2);m.push(g),w===0?S+=g:w<p&&(S+=2*g)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-n;const y=this._sizeLods[i],T=3*y*(i>v-Ki?i-v+Ki:0),E=4*(this._cubeSize-y);ra(t,T,E,3*y,2*y),l.setRenderTarget(t),l.render(f,Xa)}}function nv(a){const e=[],t=[],n=[];let i=a;const r=a-Ki+1+rh.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);let l=1/o;s>a-Ki?l=rh[s-a+Ki-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,x=3,p=2,m=1,S=new Float32Array(x*_*d),v=new Float32Array(p*_*d),y=new Float32Array(m*_*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,C=E>2?0:-1,g=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];S.set(g,x*_*E),v.set(h,p*_*E);const b=[E,E,E,E,E,E];y.set(b,m*_*E)}const T=new _i;T.setAttribute("position",new Hn(S,x)),T.setAttribute("uv",new Hn(v,p)),T.setAttribute("faceIndex",new Hn(y,m)),n.push(new Bt(T,null)),i>Ki&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function oh(a,e,t){const n=new Fr(a,e,t);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function iv(a,e,t){return new ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ev,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function rv(a,e,t){const n=new Float32Array(Mr),i=new j(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function lh(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function ch(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}function av(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mc||l===Tc,u=l===ga||l===va;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new sh(a)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new sh(a)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function sv(a){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ps("WebGLRenderer: "+n+" extension not supported."),i}}}function ov(a,e,t,n){const i={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",s),delete i[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],a.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let x=0;if(d!==null){const S=d.array;x=d.version;for(let v=0,y=S.length;v<y;v+=3){const T=S[v+0],E=S[v+1],w=S[v+2];h.push(T,E,E,w,w,T)}}else if(_!==void 0){const S=_.array;x=_.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const T=v+0,E=v+1,w=v+2;h.push(T,E,E,w,w,T)}}else return;const p=new(Cd(h)?Ld:Dd)(h,1);p.version=x;const m=r.get(f);m&&e.remove(m),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function lv(a,e,t){let n;function i(h){n=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,d){a.drawElements(n,d,r,h*s),t.update(d,n,1)}function c(h,d,_){_!==0&&(a.drawElementsInstanced(n,d,r,h*s,_),t.update(d,n,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function f(h,d,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/s,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,x,0,_);let m=0;for(let S=0;S<_;S++)m+=d[S]*x[S];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function cv(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:Mt("WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function uv(a,e,t){const n=new WeakMap,i=new ft;function r(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var d=b;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let T=o.attributes.position.count*y,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*E*4*f),C=new Rd(w,T,E,f);C.type=Ri,C.needsUpdate=!0;const g=y*4;for(let U=0;U<f;U++){const P=m[U],D=S[U],I=v[U],z=T*E*4*U;for(let B=0;B<P.count;B++){const Z=B*g;_===!0&&(i.fromBufferAttribute(P,B),w[z+Z+0]=i.x,w[z+Z+1]=i.y,w[z+Z+2]=i.z,w[z+Z+3]=0),x===!0&&(i.fromBufferAttribute(D,B),w[z+Z+4]=i.x,w[z+Z+5]=i.y,w[z+Z+6]=i.z,w[z+Z+7]=0),p===!0&&(i.fromBufferAttribute(I,B),w[z+Z+8]=i.x,w[z+Z+9]=i.y,w[z+Z+10]=i.z,w[z+Z+11]=I.itemSize===4?i.w:1)}}h={count:f,texture:C,size:new $e(T,E)},n.set(o,h),o.addEventListener("dispose",b)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(a,"morphTargetBaseInfluence",x),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}return{update:r}}function fv(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Xd=new qt,uh=new Bd(1,1),Yd=new Rd,qd=new Pm,jd=new Nd,fh=[],hh=[],dh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function Ua(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=fh[i];if(r===void 0&&(r=new Float32Array(i),fh[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Ft(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Nt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Jo(a,e){let t=hh[e];t===void 0&&(t=new Int32Array(e),hh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function hv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function dv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;a.uniform2fv(this.addr,e),Nt(t,e)}}function pv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;a.uniform3fv(this.addr,e),Nt(t,e)}}function mv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;a.uniform4fv(this.addr,e),Nt(t,e)}}function xv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,n))return;mh.set(n),a.uniformMatrix2fv(this.addr,!1,mh),Nt(t,n)}}function _v(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,n))return;ph.set(n),a.uniformMatrix3fv(this.addr,!1,ph),Nt(t,n)}}function gv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,n))return;dh.set(n),a.uniformMatrix4fv(this.addr,!1,dh),Nt(t,n)}}function vv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Sv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;a.uniform2iv(this.addr,e),Nt(t,e)}}function bv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;a.uniform3iv(this.addr,e),Nt(t,e)}}function yv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;a.uniform4iv(this.addr,e),Nt(t,e)}}function Mv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Tv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;a.uniform2uiv(this.addr,e),Nt(t,e)}}function Ev(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;a.uniform3uiv(this.addr,e),Nt(t,e)}}function wv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;a.uniform4uiv(this.addr,e),Nt(t,e)}}function Av(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let r;this.type===a.SAMPLER_2D_SHADOW?(uh.compareFunction=Ad,r=uh):r=Xd,t.setTexture2D(e||r,i)}function Cv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qd,i)}function Rv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jd,i)}function Pv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yd,i)}function Uv(a){switch(a){case 5126:return hv;case 35664:return dv;case 35665:return pv;case 35666:return mv;case 35674:return xv;case 35675:return _v;case 35676:return gv;case 5124:case 35670:return vv;case 35667:case 35671:return Sv;case 35668:case 35672:return bv;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Tv;case 36295:return Ev;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Pv}}function Dv(a,e){a.uniform1fv(this.addr,e)}function Lv(a,e){const t=Ua(e,this.size,2);a.uniform2fv(this.addr,t)}function Iv(a,e){const t=Ua(e,this.size,3);a.uniform3fv(this.addr,t)}function Fv(a,e){const t=Ua(e,this.size,4);a.uniform4fv(this.addr,t)}function Nv(a,e){const t=Ua(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Ov(a,e){const t=Ua(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Bv(a,e){const t=Ua(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function kv(a,e){a.uniform1iv(this.addr,e)}function zv(a,e){a.uniform2iv(this.addr,e)}function Gv(a,e){a.uniform3iv(this.addr,e)}function Vv(a,e){a.uniform4iv(this.addr,e)}function Hv(a,e){a.uniform1uiv(this.addr,e)}function Wv(a,e){a.uniform2uiv(this.addr,e)}function Xv(a,e){a.uniform3uiv(this.addr,e)}function Yv(a,e){a.uniform4uiv(this.addr,e)}function qv(a,e,t){const n=this.cache,i=e.length,r=Jo(t,i);Ft(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Xd,r[s])}function jv(a,e,t){const n=this.cache,i=e.length,r=Jo(t,i);Ft(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||qd,r[s])}function Kv(a,e,t){const n=this.cache,i=e.length,r=Jo(t,i);Ft(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||jd,r[s])}function Zv(a,e,t){const n=this.cache,i=e.length,r=Jo(t,i);Ft(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Yd,r[s])}function Jv(a){switch(a){case 5126:return Dv;case 35664:return Lv;case 35665:return Iv;case 35666:return Fv;case 35674:return Nv;case 35675:return Ov;case 35676:return Bv;case 5124:case 35670:return kv;case 35667:case 35671:return zv;case 35668:case 35672:return Gv;case 35669:case 35673:return Vv;case 5125:return Hv;case 36294:return Wv;case 36295:return Xv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Zv}}class Qv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uv(t.type)}}class $v{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jv(t.type)}}class e1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Jl=/(\w+)(\])?(\[|\.)?/g;function xh(a,e){a.seq.push(e),a.map[e.id]=e}function t1(a,e,t){const n=a.name,i=n.length;for(Jl.lastIndex=0;;){const r=Jl.exec(n),s=Jl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){xh(t,c===void 0?new Qv(o,a,e):new $v(o,a,e));break}else{let f=t.map[o];f===void 0&&(f=new e1(o),xh(t,f)),t=f}}}class xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);t1(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function _h(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const n1=37297;let i1=0;function r1(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const gh=new qe;function a1(a){it._getMatrix(gh,it.workingColorSpace,a);const e=`mat3( ${gh.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(a)){case Do:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function vh(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),r=(a.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+r1(a.getShaderSource(e),o)}else return r}function s1(a,e){const t=a1(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function o1(a,e){let t;switch(e){case V0:t="Linear";break;case H0:t="Reinhard";break;case W0:t="Cineon";break;case X0:t="ACESFilmic";break;case q0:t="AgX";break;case j0:t="Neutral";break;case Y0:t="Custom";break;default:Ye("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ro=new j;function l1(){it.getLuminanceCoefficients(ro);const a=ro.x.toFixed(4),e=ro.y.toFixed(4),t=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c1(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function u1(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function f1(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function ja(a){return a!==""}function Sh(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ru(a){return a.replace(h1,p1)}const d1=new Map;function p1(a,e){let t=Ze[e];if(t===void 0){const n=d1.get(e);if(n!==void 0)t=Ze[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ru(t)}const m1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(a){return a.replace(m1,x1)}function x1(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mh(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _1(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function g1(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ga:case va:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v1(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case va:e="ENVMAP_MODE_REFRACTION";break}return e}function S1(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case _d:e="ENVMAP_BLENDING_MULTIPLY";break;case z0:e="ENVMAP_BLENDING_MIX";break;case G0:e="ENVMAP_BLENDING_ADD";break}return e}function b1(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function y1(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=_1(t),c=g1(t),u=v1(t),f=S1(t),h=b1(t),d=c1(t),_=u1(r),x=i.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ja).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ja).join(`
`),m.length>0&&(m+=`
`)):(p=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),m=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?Ze.tonemapping_pars_fragment:"",t.toneMapping!==$i?o1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,s1("linearToOutputTexel",t.outputColorSpace),l1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),s=ru(s),s=Sh(s,t),s=bh(s,t),o=ru(o),o=Sh(o,t),o=bh(o,t),s=yh(s),o=yh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===If?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===If?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=S+p+s,y=S+m+o,T=_h(i,i.VERTEX_SHADER,v),E=_h(i,i.FRAGMENT_SHADER,y);i.attachShader(x,T),i.attachShader(x,E),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(U){if(a.debug.checkShaderErrors){const P=i.getProgramInfoLog(x)||"",D=i.getShaderInfoLog(T)||"",I=i.getShaderInfoLog(E)||"",z=P.trim(),B=D.trim(),Z=I.trim();let W=!0,Y=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(W=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,x,T,E);else{const H=vh(i,T,"vertex"),F=vh(i,E,"fragment");Mt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+H+`
`+F)}else z!==""?Ye("WebGLProgram: Program Info Log:",z):(B===""||Z==="")&&(Y=!1);Y&&(U.diagnostics={runnable:W,programLog:z,vertexShader:{log:B,prefix:p},fragmentShader:{log:Z,prefix:m}})}i.deleteShader(T),i.deleteShader(E),C=new xo(i,x),g=f1(i,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let g;this.getAttributes=function(){return g===void 0&&w(this),g};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,n1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}let M1=0;class T1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new E1(e),t.set(e,n)),n}}class E1{constructor(e){this.id=M1++,this.code=e,this.usedTimes=0}}function w1(a,e,t,n,i,r,s){const o=new Xu,l=new T1,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return c.add(g),g===0?"uv":`uv${g}`}function p(g,b,U,P,D){const I=P.fog,z=D.geometry,B=g.isMeshStandardMaterial?P.environment:null,Z=(g.isMeshStandardMaterial?t:e).get(g.envMap||B),W=Z&&Z.mapping===qo?Z.image.height:null,Y=_[g.type];g.precision!==null&&(d=i.getMaxPrecision(g.precision),d!==g.precision&&Ye("WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));const H=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,F=H!==void 0?H.length:0;let X=0;z.morphAttributes.position!==void 0&&(X=1),z.morphAttributes.normal!==void 0&&(X=2),z.morphAttributes.color!==void 0&&(X=3);let ie,ne,Q,G;if(Y){const We=un[Y];ie=We.vertexShader,ne=We.fragmentShader}else ie=g.vertexShader,ne=g.fragmentShader,l.update(g),Q=l.getVertexShaderID(g),G=l.getFragmentShaderID(g);const k=a.getRenderTarget(),ee=a.state.buffers.depth.getReversed(),me=D.isInstancedMesh===!0,pe=D.isBatchedMesh===!0,he=!!g.map,de=!!g.matcap,Le=!!Z,Fe=!!g.aoMap,L=!!g.lightMap,we=!!g.bumpMap,De=!!g.normalMap,ve=!!g.displacementMap,fe=!!g.emissiveMap,Ae=!!g.metalnessMap,$=!!g.roughnessMap,be=g.anisotropy>0,A=g.clearcoat>0,M=g.dispersion>0,O=g.iridescence>0,se=g.sheen>0,te=g.transmission>0,q=be&&!!g.anisotropyMap,Se=A&&!!g.clearcoatMap,_e=A&&!!g.clearcoatNormalMap,Ce=A&&!!g.clearcoatRoughnessMap,Ee=O&&!!g.iridescenceMap,oe=O&&!!g.iridescenceThicknessMap,le=se&&!!g.sheenColorMap,ge=se&&!!g.sheenRoughnessMap,Re=!!g.specularMap,ye=!!g.specularColorMap,ze=!!g.specularIntensityMap,N=te&&!!g.transmissionMap,ce=te&&!!g.thicknessMap,xe=!!g.gradientMap,Te=!!g.alphaMap,ue=g.alphaTest>0,re=!!g.alphaHash,Pe=!!g.extensions;let Ne=$i;g.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ne=a.toneMapping);const Be={shaderID:Y,shaderType:g.type,shaderName:g.name,vertexShader:ie,fragmentShader:ne,defines:g.defines,customVertexShaderID:Q,customFragmentShaderID:G,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:pe,batchingColor:pe&&D._colorsTexture!==null,instancing:me,instancingColor:me&&D.instanceColor!==null,instancingMorph:me&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:k===null?a.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Sa,alphaToCoverage:!!g.alphaToCoverage,map:he,matcap:de,envMap:Le,envMapMode:Le&&Z.mapping,envMapCubeUVHeight:W,aoMap:Fe,lightMap:L,bumpMap:we,normalMap:De,displacementMap:h&&ve,emissiveMap:fe,normalMapObjectSpace:De&&g.normalMapType===Q0,normalMapTangentSpace:De&&g.normalMapType===J0,metalnessMap:Ae,roughnessMap:$,anisotropy:be,anisotropyMap:q,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ce,dispersion:M,iridescence:O,iridescenceMap:Ee,iridescenceThicknessMap:oe,sheen:se,sheenColorMap:le,sheenRoughnessMap:ge,specularMap:Re,specularColorMap:ye,specularIntensityMap:ze,transmission:te,transmissionMap:N,thicknessMap:ce,gradientMap:xe,opaque:g.transparent===!1&&g.blending===ua&&g.alphaToCoverage===!1,alphaMap:Te,alphaTest:ue,alphaHash:re,combine:g.combine,mapUv:he&&x(g.map.channel),aoMapUv:Fe&&x(g.aoMap.channel),lightMapUv:L&&x(g.lightMap.channel),bumpMapUv:we&&x(g.bumpMap.channel),normalMapUv:De&&x(g.normalMap.channel),displacementMapUv:ve&&x(g.displacementMap.channel),emissiveMapUv:fe&&x(g.emissiveMap.channel),metalnessMapUv:Ae&&x(g.metalnessMap.channel),roughnessMapUv:$&&x(g.roughnessMap.channel),anisotropyMapUv:q&&x(g.anisotropyMap.channel),clearcoatMapUv:Se&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:_e&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:le&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(g.sheenRoughnessMap.channel),specularMapUv:Re&&x(g.specularMap.channel),specularColorMapUv:ye&&x(g.specularColorMap.channel),specularIntensityMapUv:ze&&x(g.specularIntensityMap.channel),transmissionMapUv:N&&x(g.transmissionMap.channel),thicknessMapUv:ce&&x(g.thicknessMap.channel),alphaMapUv:Te&&x(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(De||be),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(he||Te),fog:!!I,useFog:g.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ee,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:X,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:a.shadowMap.enabled&&U.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ne,decodeVideoTexture:he&&g.map.isVideoTexture===!0&&it.getTransfer(g.map.colorSpace)===ct,decodeVideoTextureEmissive:fe&&g.emissiveMap.isVideoTexture===!0&&it.getTransfer(g.emissiveMap.colorSpace)===ct,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===fn,flipSided:g.side===dn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Pe&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&g.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function m(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)b.push(U),b.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(S(b,g),v(b,g),b.push(a.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function S(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function v(g,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),g.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),g.push(o.mask)}function y(g){const b=_[g.type];let U;if(b){const P=un[b];U=Ko.clone(P.uniforms)}else U=g.uniforms;return U}function T(g,b){let U;for(let P=0,D=u.length;P<D;P++){const I=u[P];if(I.cacheKey===b){U=I,++U.usedTimes;break}}return U===void 0&&(U=new y1(a,b,g,r),u.push(U)),U}function E(g){if(--g.usedTimes===0){const b=u.indexOf(g);u[b]=u[u.length-1],u.pop(),g.destroy()}}function w(g){l.remove(g)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:C}}function A1(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function n(s){a.delete(s)}function i(s,o,l){a.get(s)[o]=l}function r(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function C1(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Th(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Eh(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(f,h,d,_,x,p){let m=a[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},a[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=x,m.group=p),e++,m}function o(f,h,d,_,x,p){const m=s(f,h,d,_,x,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(f,h,d,_,x,p){const m=s(f,h,d,_,x,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||C1),n.length>1&&n.sort(h||Th),i.length>1&&i.sort(h||Th)}function u(){for(let f=e,h=a.length;f<h;f++){const d=a[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function R1(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new Eh,a.set(n,[s])):i>=r.length?(s=new Eh,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function P1(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new tt};break;case"SpotLight":t={position:new j,direction:new j,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new j,halfWidth:new j,halfHeight:new j};break}return a[e.id]=t,t}}}function U1(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let D1=0;function L1(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function I1(a){const e=new P1,t=U1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new j);const i=new j,r=new Et,s=new Et;function o(c){let u=0,f=0,h=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let d=0,_=0,x=0,p=0,m=0,S=0,v=0,y=0,T=0,E=0,w=0;c.sort(L1);for(let g=0,b=c.length;g<b;g++){const U=c[g],P=U.color,D=U.intensity,I=U.distance,z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=P.r*D,f+=P.g*D,h+=P.b*D;else if(U.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(U.sh.coefficients[B],D);w++}else if(U.isDirectionalLight){const B=e.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Z=U.shadow,W=t.get(U);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=U.shadow.matrix,S++}n.directional[d]=B,d++}else if(U.isSpotLight){const B=e.get(U);B.position.setFromMatrixPosition(U.matrixWorld),B.color.copy(P).multiplyScalar(D),B.distance=I,B.coneCos=Math.cos(U.angle),B.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),B.decay=U.decay,n.spot[x]=B;const Z=U.shadow;if(U.map&&(n.spotLightMap[T]=U.map,T++,Z.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[x]=Z.matrix,U.castShadow){const W=t.get(U);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=z,y++}x++}else if(U.isRectAreaLight){const B=e.get(U);B.color.copy(P).multiplyScalar(D),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),n.rectArea[p]=B,p++}else if(U.isPointLight){const B=e.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),B.distance=U.distance,B.decay=U.decay,U.castShadow){const Z=U.shadow,W=t.get(U);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=z,n.pointShadowMatrix[_]=U.shadow.matrix,v++}n.point[_]=B,_++}else if(U.isHemisphereLight){const B=e.get(U);B.skyColor.copy(U.color).multiplyScalar(D),B.groundColor.copy(U.groundColor).multiplyScalar(D),n.hemi[m]=B,m++}}p>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==x||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==S||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==T||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=d,C.pointLength=_,C.spotLength=x,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=S,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=T,C.numLightProbes=w,n.version=D1++)}function l(c,u){let f=0,h=0,d=0,_=0,x=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const v=c[m];if(v.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),s.identity(),r.copy(v.matrixWorld),r.premultiply(p),s.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(v.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function wh(a){const e=new I1(a),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function s(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function F1(a){let e=new WeakMap;function t(i,r=0){const s=e.get(i);let o;return s===void 0?(o=new wh(a),e.set(i,[o])):r>=s.length?(o=new wh(a),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const N1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O1=`uniform sampler2D shadow_pass;
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
}`;function B1(a,e,t){let n=new Od;const i=new $e,r=new $e,s=new ft,o=new zd({depthPacking:wd}),l=new Gd,c={},u=t.maxTextureSize,f={[nr]:dn,[dn]:nr,[fn]:fn},h=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:N1,fragmentShader:O1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new _i;_.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Bt(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let m=this.type;this.render=function(E,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const g=a.getRenderTarget(),b=a.getActiveCubeFace(),U=a.getActiveMipmapLevel(),P=a.state;P.setBlending(Pi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=m!==Ei&&this.type===Ei,I=m===Ei&&this.type!==Ei;for(let z=0,B=E.length;z<B;z++){const Z=E[z],W=Z.shadow;if(W===void 0){Ye("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Y=W.getFrameExtents();if(i.multiply(Y),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,W.mapSize.y=r.y)),W.map===null||D===!0||I===!0){const F=this.type!==Ei?{minFilter:An,magFilter:An}:{};W.map!==null&&W.map.dispose(),W.map=new Fr(i.x,i.y,F),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}a.setRenderTarget(W.map),a.clear();const H=W.getViewportCount();for(let F=0;F<H;F++){const X=W.getViewport(F);s.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),P.viewport(s),W.updateMatrices(Z,F),n=W.getFrustum(),y(w,C,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Ei&&S(W,C),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(g,b,U)};function S(E,w){const C=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fr(i.x,i.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,a.setRenderTarget(E.mapPass),a.clear(),a.renderBufferDirect(w,null,C,h,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,a.setRenderTarget(E.map),a.clear(),a.renderBufferDirect(w,null,C,d,x,null)}function v(E,w,C,g){let b=null;const U=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)b=U;else if(b=C.isPointLight===!0?l:o,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const P=b.uuid,D=w.uuid;let I=c[P];I===void 0&&(I={},c[P]=I);let z=I[D];z===void 0&&(z=b.clone(),I[D]=z,w.addEventListener("dispose",T)),b=z}if(b.visible=w.visible,b.wireframe=w.wireframe,g===Ei?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:f[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const P=a.properties.get(b);P.light=C}return b}function y(E,w,C,g,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Ei)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const D=e.update(E),I=E.material;if(Array.isArray(I)){const z=D.groups;for(let B=0,Z=z.length;B<Z;B++){const W=z[B],Y=I[W.materialIndex];if(Y&&Y.visible){const H=v(E,Y,g,b);E.onBeforeShadow(a,E,w,C,D,H,W),a.renderBufferDirect(C,null,D,H,E,W),E.onAfterShadow(a,E,w,C,D,H,W)}}}else if(I.visible){const z=v(E,I,g,b);E.onBeforeShadow(a,E,w,C,D,z,null),a.renderBufferDirect(C,null,D,z,E,null),E.onAfterShadow(a,E,w,C,D,z,null)}}const P=E.children;for(let D=0,I=P.length;D<I;D++)y(P[D],w,C,g,b)}function T(E){E.target.removeEventListener("dispose",T);for(const C in c){const g=c[C],b=E.target.uuid;b in g&&(g[b].dispose(),delete g[b])}}}const k1={[xc]:_c,[gc]:bc,[vc]:yc,[_a]:Sc,[_c]:xc,[bc]:gc,[yc]:vc,[Sc]:_a};function z1(a,e){function t(){let N=!1;const ce=new ft;let xe=null;const Te=new ft(0,0,0,0);return{setMask:function(ue){xe!==ue&&!N&&(a.colorMask(ue,ue,ue,ue),xe=ue)},setLocked:function(ue){N=ue},setClear:function(ue,re,Pe,Ne,Be){Be===!0&&(ue*=Ne,re*=Ne,Pe*=Ne),ce.set(ue,re,Pe,Ne),Te.equals(ce)===!1&&(a.clearColor(ue,re,Pe,Ne),Te.copy(ce))},reset:function(){N=!1,xe=null,Te.set(-1,0,0,0)}}}function n(){let N=!1,ce=!1,xe=null,Te=null,ue=null;return{setReversed:function(re){if(ce!==re){const Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ce=re;const Ne=ue;ue=null,this.setClear(Ne)}},getReversed:function(){return ce},setTest:function(re){re?k(a.DEPTH_TEST):ee(a.DEPTH_TEST)},setMask:function(re){xe!==re&&!N&&(a.depthMask(re),xe=re)},setFunc:function(re){if(ce&&(re=k1[re]),Te!==re){switch(re){case xc:a.depthFunc(a.NEVER);break;case _c:a.depthFunc(a.ALWAYS);break;case gc:a.depthFunc(a.LESS);break;case _a:a.depthFunc(a.LEQUAL);break;case vc:a.depthFunc(a.EQUAL);break;case Sc:a.depthFunc(a.GEQUAL);break;case bc:a.depthFunc(a.GREATER);break;case yc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Te=re}},setLocked:function(re){N=re},setClear:function(re){ue!==re&&(ce&&(re=1-re),a.clearDepth(re),ue=re)},reset:function(){N=!1,xe=null,Te=null,ue=null,ce=!1}}}function i(){let N=!1,ce=null,xe=null,Te=null,ue=null,re=null,Pe=null,Ne=null,Be=null;return{setTest:function(We){N||(We?k(a.STENCIL_TEST):ee(a.STENCIL_TEST))},setMask:function(We){ce!==We&&!N&&(a.stencilMask(We),ce=We)},setFunc:function(We,pt,ot){(xe!==We||Te!==pt||ue!==ot)&&(a.stencilFunc(We,pt,ot),xe=We,Te=pt,ue=ot)},setOp:function(We,pt,ot){(re!==We||Pe!==pt||Ne!==ot)&&(a.stencilOp(We,pt,ot),re=We,Pe=pt,Ne=ot)},setLocked:function(We){N=We},setClear:function(We){Be!==We&&(a.clearStencil(We),Be=We)},reset:function(){N=!1,ce=null,xe=null,Te=null,ue=null,re=null,Pe=null,Ne=null,Be=null}}}const r=new t,s=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,x=!1,p=null,m=null,S=null,v=null,y=null,T=null,E=null,w=new tt(0,0,0),C=0,g=!1,b=null,U=null,P=null,D=null,I=null;const z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Z>=2);let Y=null,H={};const F=a.getParameter(a.SCISSOR_BOX),X=a.getParameter(a.VIEWPORT),ie=new ft().fromArray(F),ne=new ft().fromArray(X);function Q(N,ce,xe,Te){const ue=new Uint8Array(4),re=a.createTexture();a.bindTexture(N,re),a.texParameteri(N,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(N,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<xe;Pe++)N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY?a.texImage3D(ce,0,a.RGBA,1,1,Te,0,a.RGBA,a.UNSIGNED_BYTE,ue):a.texImage2D(ce+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ue);return re}const G={};G[a.TEXTURE_2D]=Q(a.TEXTURE_2D,a.TEXTURE_2D,1),G[a.TEXTURE_CUBE_MAP]=Q(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[a.TEXTURE_2D_ARRAY]=Q(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),G[a.TEXTURE_3D]=Q(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),k(a.DEPTH_TEST),s.setFunc(_a),we(!1),De(Rf),k(a.CULL_FACE),Fe(Pi);function k(N){u[N]!==!0&&(a.enable(N),u[N]=!0)}function ee(N){u[N]!==!1&&(a.disable(N),u[N]=!1)}function me(N,ce){return f[N]!==ce?(a.bindFramebuffer(N,ce),f[N]=ce,N===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=ce),N===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=ce),!0):!1}function pe(N,ce){let xe=d,Te=!1;if(N){xe=h.get(ce),xe===void 0&&(xe=[],h.set(ce,xe));const ue=N.textures;if(xe.length!==ue.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let re=0,Pe=ue.length;re<Pe;re++)xe[re]=a.COLOR_ATTACHMENT0+re;xe.length=ue.length,Te=!0}}else xe[0]!==a.BACK&&(xe[0]=a.BACK,Te=!0);Te&&a.drawBuffers(xe)}function he(N){return _!==N?(a.useProgram(N),_=N,!0):!1}const de={[yr]:a.FUNC_ADD,[M0]:a.FUNC_SUBTRACT,[T0]:a.FUNC_REVERSE_SUBTRACT};de[E0]=a.MIN,de[w0]=a.MAX;const Le={[A0]:a.ZERO,[C0]:a.ONE,[R0]:a.SRC_COLOR,[pc]:a.SRC_ALPHA,[F0]:a.SRC_ALPHA_SATURATE,[L0]:a.DST_COLOR,[U0]:a.DST_ALPHA,[P0]:a.ONE_MINUS_SRC_COLOR,[mc]:a.ONE_MINUS_SRC_ALPHA,[I0]:a.ONE_MINUS_DST_COLOR,[D0]:a.ONE_MINUS_DST_ALPHA,[N0]:a.CONSTANT_COLOR,[O0]:a.ONE_MINUS_CONSTANT_COLOR,[B0]:a.CONSTANT_ALPHA,[k0]:a.ONE_MINUS_CONSTANT_ALPHA};function Fe(N,ce,xe,Te,ue,re,Pe,Ne,Be,We){if(N===Pi){x===!0&&(ee(a.BLEND),x=!1);return}if(x===!1&&(k(a.BLEND),x=!0),N!==y0){if(N!==p||We!==g){if((m!==yr||y!==yr)&&(a.blendEquation(a.FUNC_ADD),m=yr,y=yr),We)switch(N){case ua:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Pf:a.blendFunc(a.ONE,a.ONE);break;case Uf:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Df:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Mt("WebGLState: Invalid blending: ",N);break}else switch(N){case ua:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Pf:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Uf:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Df:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",N);break}S=null,v=null,T=null,E=null,w.set(0,0,0),C=0,p=N,g=We}return}ue=ue||ce,re=re||xe,Pe=Pe||Te,(ce!==m||ue!==y)&&(a.blendEquationSeparate(de[ce],de[ue]),m=ce,y=ue),(xe!==S||Te!==v||re!==T||Pe!==E)&&(a.blendFuncSeparate(Le[xe],Le[Te],Le[re],Le[Pe]),S=xe,v=Te,T=re,E=Pe),(Ne.equals(w)===!1||Be!==C)&&(a.blendColor(Ne.r,Ne.g,Ne.b,Be),w.copy(Ne),C=Be),p=N,g=!1}function L(N,ce){N.side===fn?ee(a.CULL_FACE):k(a.CULL_FACE);let xe=N.side===dn;ce&&(xe=!xe),we(xe),N.blending===ua&&N.transparent===!1?Fe(Pi):Fe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const Te=N.stencilWrite;o.setTest(Te),Te&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?k(a.SAMPLE_ALPHA_TO_COVERAGE):ee(a.SAMPLE_ALPHA_TO_COVERAGE)}function we(N){b!==N&&(N?a.frontFace(a.CW):a.frontFace(a.CCW),b=N)}function De(N){N!==v0?(k(a.CULL_FACE),N!==U&&(N===Rf?a.cullFace(a.BACK):N===S0?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ee(a.CULL_FACE),U=N}function ve(N){N!==P&&(B&&a.lineWidth(N),P=N)}function fe(N,ce,xe){N?(k(a.POLYGON_OFFSET_FILL),(D!==ce||I!==xe)&&(a.polygonOffset(ce,xe),D=ce,I=xe)):ee(a.POLYGON_OFFSET_FILL)}function Ae(N){N?k(a.SCISSOR_TEST):ee(a.SCISSOR_TEST)}function $(N){N===void 0&&(N=a.TEXTURE0+z-1),Y!==N&&(a.activeTexture(N),Y=N)}function be(N,ce,xe){xe===void 0&&(Y===null?xe=a.TEXTURE0+z-1:xe=Y);let Te=H[xe];Te===void 0&&(Te={type:void 0,texture:void 0},H[xe]=Te),(Te.type!==N||Te.texture!==ce)&&(Y!==xe&&(a.activeTexture(xe),Y=xe),a.bindTexture(N,ce||G[N]),Te.type=N,Te.texture=ce)}function A(){const N=H[Y];N!==void 0&&N.type!==void 0&&(a.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{a.compressedTexImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function O(){try{a.compressedTexImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function se(){try{a.texSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function te(){try{a.texSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function q(){try{a.compressedTexSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function Se(){try{a.compressedTexSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function _e(){try{a.texStorage2D(...arguments)}catch(N){N("WebGLState:",N)}}function Ce(){try{a.texStorage3D(...arguments)}catch(N){N("WebGLState:",N)}}function Ee(){try{a.texImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function oe(){try{a.texImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function le(N){ie.equals(N)===!1&&(a.scissor(N.x,N.y,N.z,N.w),ie.copy(N))}function ge(N){ne.equals(N)===!1&&(a.viewport(N.x,N.y,N.z,N.w),ne.copy(N))}function Re(N,ce){let xe=c.get(ce);xe===void 0&&(xe=new WeakMap,c.set(ce,xe));let Te=xe.get(N);Te===void 0&&(Te=a.getUniformBlockIndex(ce,N.name),xe.set(N,Te))}function ye(N,ce){const Te=c.get(ce).get(N);l.get(ce)!==Te&&(a.uniformBlockBinding(ce,Te,N.__bindingPointIndex),l.set(ce,Te))}function ze(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},Y=null,H={},f={},h=new WeakMap,d=[],_=null,x=!1,p=null,m=null,S=null,v=null,y=null,T=null,E=null,w=new tt(0,0,0),C=0,g=!1,b=null,U=null,P=null,D=null,I=null,ie.set(0,0,a.canvas.width,a.canvas.height),ne.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:k,disable:ee,bindFramebuffer:me,drawBuffers:pe,useProgram:he,setBlending:Fe,setMaterial:L,setFlipSided:we,setCullFace:De,setLineWidth:ve,setPolygonOffset:fe,setScissorTest:Ae,activeTexture:$,bindTexture:be,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:O,texImage2D:Ee,texImage3D:oe,updateUBOMapping:Re,uniformBlockBinding:ye,texStorage2D:_e,texStorage3D:Ce,texSubImage2D:se,texSubImage3D:te,compressedTexSubImage2D:q,compressedTexSubImage3D:Se,scissor:le,viewport:ge,reset:ze}}function G1(a,e,t,n,i,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return d?new OffscreenCanvas(A,M):ds("canvas")}function x(A,M,O){let se=1;const te=be(A);if((te.width>O||te.height>O)&&(se=O/Math.max(te.width,te.height)),se<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(se*te.width),Se=Math.floor(se*te.height);f===void 0&&(f=_(q,Se));const _e=M?_(q,Se):f;return _e.width=q,_e.height=Se,_e.getContext("2d").drawImage(A,0,0,q,Se),Ye("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+Se+")."),_e}else return"data"in A&&Ye("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function p(A){return A.generateMipmaps}function m(A){a.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?a.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function v(A,M,O,se,te=!1){if(A!==null){if(a[A]!==void 0)return a[A];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=M;if(M===a.RED&&(O===a.FLOAT&&(q=a.R32F),O===a.HALF_FLOAT&&(q=a.R16F),O===a.UNSIGNED_BYTE&&(q=a.R8)),M===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(q=a.R8UI),O===a.UNSIGNED_SHORT&&(q=a.R16UI),O===a.UNSIGNED_INT&&(q=a.R32UI),O===a.BYTE&&(q=a.R8I),O===a.SHORT&&(q=a.R16I),O===a.INT&&(q=a.R32I)),M===a.RG&&(O===a.FLOAT&&(q=a.RG32F),O===a.HALF_FLOAT&&(q=a.RG16F),O===a.UNSIGNED_BYTE&&(q=a.RG8)),M===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(q=a.RG8UI),O===a.UNSIGNED_SHORT&&(q=a.RG16UI),O===a.UNSIGNED_INT&&(q=a.RG32UI),O===a.BYTE&&(q=a.RG8I),O===a.SHORT&&(q=a.RG16I),O===a.INT&&(q=a.RG32I)),M===a.RGB_INTEGER&&(O===a.UNSIGNED_BYTE&&(q=a.RGB8UI),O===a.UNSIGNED_SHORT&&(q=a.RGB16UI),O===a.UNSIGNED_INT&&(q=a.RGB32UI),O===a.BYTE&&(q=a.RGB8I),O===a.SHORT&&(q=a.RGB16I),O===a.INT&&(q=a.RGB32I)),M===a.RGBA_INTEGER&&(O===a.UNSIGNED_BYTE&&(q=a.RGBA8UI),O===a.UNSIGNED_SHORT&&(q=a.RGBA16UI),O===a.UNSIGNED_INT&&(q=a.RGBA32UI),O===a.BYTE&&(q=a.RGBA8I),O===a.SHORT&&(q=a.RGBA16I),O===a.INT&&(q=a.RGBA32I)),M===a.RGB&&(O===a.UNSIGNED_INT_5_9_9_9_REV&&(q=a.RGB9_E5),O===a.UNSIGNED_INT_10F_11F_11F_REV&&(q=a.R11F_G11F_B10F)),M===a.RGBA){const Se=te?Do:it.getTransfer(se);O===a.FLOAT&&(q=a.RGBA32F),O===a.HALF_FLOAT&&(q=a.RGBA16F),O===a.UNSIGNED_BYTE&&(q=Se===ct?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT_4_4_4_4&&(q=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(q=a.RGB5_A1)}return(q===a.R16F||q===a.R32F||q===a.RG16F||q===a.RG32F||q===a.RGBA16F||q===a.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(A,M){let O;return A?M===null||M===Ir||M===us?O=a.DEPTH24_STENCIL8:M===Ri?O=a.DEPTH32F_STENCIL8:M===cs&&(O=a.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ir||M===us?O=a.DEPTH_COMPONENT24:M===Ri?O=a.DEPTH_COMPONENT32F:M===cs&&(O=a.DEPTH_COMPONENT16),O}function T(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==An&&A.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function E(A){const M=A.target;M.removeEventListener("dispose",E),C(M),M.isVideoTexture&&u.delete(M)}function w(A){const M=A.target;M.removeEventListener("dispose",w),b(M)}function C(A){const M=n.get(A);if(M.__webglInit===void 0)return;const O=A.source,se=h.get(O);if(se){const te=se[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&g(A),Object.keys(se).length===0&&h.delete(O)}n.remove(A)}function g(A){const M=n.get(A);a.deleteTexture(M.__webglTexture);const O=A.source,se=h.get(O);delete se[M.__cacheKey],s.memory.textures--}function b(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let te=0;te<M.__webglFramebuffer[se].length;te++)a.deleteFramebuffer(M.__webglFramebuffer[se][te]);else a.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)a.deleteFramebuffer(M.__webglFramebuffer[se]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=A.textures;for(let se=0,te=O.length;se<te;se++){const q=n.get(O[se]);q.__webglTexture&&(a.deleteTexture(q.__webglTexture),s.memory.textures--),n.remove(O[se])}n.remove(A)}let U=0;function P(){U=0}function D(){const A=U;return A>=i.maxTextures&&Ye("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),U+=1,A}function I(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function z(A,M){const O=n.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const se=A.image;if(se===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{G(O,A,M);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+M)}function B(A,M){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){G(O,A,M);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+M)}function Z(A,M){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){G(O,A,M);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+M)}function W(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){k(O,A,M);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+M)}const Y={[Ec]:a.REPEAT,[Ci]:a.CLAMP_TO_EDGE,[wc]:a.MIRRORED_REPEAT},H={[An]:a.NEAREST,[K0]:a.NEAREST_MIPMAP_NEAREST,[Bs]:a.NEAREST_MIPMAP_LINEAR,[hn]:a.LINEAR,[yl]:a.LINEAR_MIPMAP_NEAREST,[Tr]:a.LINEAR_MIPMAP_LINEAR},F={[$0]:a.NEVER,[am]:a.ALWAYS,[em]:a.LESS,[Ad]:a.LEQUAL,[tm]:a.EQUAL,[rm]:a.GEQUAL,[nm]:a.GREATER,[im]:a.NOTEQUAL};function X(A,M){if(M.type===Ri&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===hn||M.magFilter===yl||M.magFilter===Bs||M.magFilter===Tr||M.minFilter===hn||M.minFilter===yl||M.minFilter===Bs||M.minFilter===Tr)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(A,a.TEXTURE_WRAP_S,Y[M.wrapS]),a.texParameteri(A,a.TEXTURE_WRAP_T,Y[M.wrapT]),(A===a.TEXTURE_3D||A===a.TEXTURE_2D_ARRAY)&&a.texParameteri(A,a.TEXTURE_WRAP_R,Y[M.wrapR]),a.texParameteri(A,a.TEXTURE_MAG_FILTER,H[M.magFilter]),a.texParameteri(A,a.TEXTURE_MIN_FILTER,H[M.minFilter]),M.compareFunction&&(a.texParameteri(A,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(A,a.TEXTURE_COMPARE_FUNC,F[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==Bs&&M.minFilter!==Tr||M.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");a.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ie(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",E));const se=M.source;let te=h.get(se);te===void 0&&(te={},h.set(se,te));const q=I(M);if(q!==A.__cacheKey){te[q]===void 0&&(te[q]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,O=!0),te[q].usedTimes++;const Se=te[A.__cacheKey];Se!==void 0&&(te[A.__cacheKey].usedTimes--,Se.usedTimes===0&&g(M)),A.__cacheKey=q,A.__webglTexture=te[q].texture}return O}function ne(A,M,O){return Math.floor(Math.floor(A/O)/M)}function Q(A,M,O,se){const q=A.updateRanges;if(q.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,M.width,M.height,O,se,M.data);else{q.sort((oe,le)=>oe.start-le.start);let Se=0;for(let oe=1;oe<q.length;oe++){const le=q[Se],ge=q[oe],Re=le.start+le.count,ye=ne(ge.start,M.width,4),ze=ne(le.start,M.width,4);ge.start<=Re+1&&ye===ze&&ne(ge.start+ge.count-1,M.width,4)===ye?le.count=Math.max(le.count,ge.start+ge.count-le.start):(++Se,q[Se]=ge)}q.length=Se+1;const _e=a.getParameter(a.UNPACK_ROW_LENGTH),Ce=a.getParameter(a.UNPACK_SKIP_PIXELS),Ee=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,M.width);for(let oe=0,le=q.length;oe<le;oe++){const ge=q[oe],Re=Math.floor(ge.start/4),ye=Math.ceil(ge.count/4),ze=Re%M.width,N=Math.floor(Re/M.width),ce=ye,xe=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ze),a.pixelStorei(a.UNPACK_SKIP_ROWS,N),t.texSubImage2D(a.TEXTURE_2D,0,ze,N,ce,xe,O,se,M.data)}A.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,_e),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ce),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ee)}}function G(A,M,O){let se=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=a.TEXTURE_3D);const te=ie(A,M),q=M.source;t.bindTexture(se,A.__webglTexture,a.TEXTURE0+O);const Se=n.get(q);if(q.version!==Se.__version||te===!0){t.activeTexture(a.TEXTURE0+O);const _e=it.getPrimaries(it.workingColorSpace),Ce=M.colorSpace===Yi?null:it.getPrimaries(M.colorSpace),Ee=M.colorSpace===Yi||_e===Ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let oe=x(M.image,!1,i.maxTextureSize);oe=$(M,oe);const le=r.convert(M.format,M.colorSpace),ge=r.convert(M.type);let Re=v(M.internalFormat,le,ge,M.colorSpace,M.isVideoTexture);X(se,M);let ye;const ze=M.mipmaps,N=M.isVideoTexture!==!0,ce=Se.__version===void 0||te===!0,xe=q.dataReady,Te=T(M,oe);if(M.isDepthTexture)Re=y(M.format===hs,M.type),ce&&(N?t.texStorage2D(a.TEXTURE_2D,1,Re,oe.width,oe.height):t.texImage2D(a.TEXTURE_2D,0,Re,oe.width,oe.height,0,le,ge,null));else if(M.isDataTexture)if(ze.length>0){N&&ce&&t.texStorage2D(a.TEXTURE_2D,Te,Re,ze[0].width,ze[0].height);for(let ue=0,re=ze.length;ue<re;ue++)ye=ze[ue],N?xe&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,ye.width,ye.height,le,ge,ye.data):t.texImage2D(a.TEXTURE_2D,ue,Re,ye.width,ye.height,0,le,ge,ye.data);M.generateMipmaps=!1}else N?(ce&&t.texStorage2D(a.TEXTURE_2D,Te,Re,oe.width,oe.height),xe&&Q(M,oe,le,ge)):t.texImage2D(a.TEXTURE_2D,0,Re,oe.width,oe.height,0,le,ge,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&ce&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Te,Re,ze[0].width,ze[0].height,oe.depth);for(let ue=0,re=ze.length;ue<re;ue++)if(ye=ze[ue],M.format!==$n)if(le!==null)if(N){if(xe)if(M.layerUpdates.size>0){const Pe=ih(ye.width,ye.height,M.format,M.type);for(const Ne of M.layerUpdates){const Be=ye.data.subarray(Ne*Pe/ye.data.BYTES_PER_ELEMENT,(Ne+1)*Pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,Ne,ye.width,ye.height,1,le,Be)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,oe.depth,le,ye.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ue,Re,ye.width,ye.height,oe.depth,0,ye.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?xe&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,oe.depth,le,ge,ye.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ue,Re,ye.width,ye.height,oe.depth,0,le,ge,ye.data)}else{N&&ce&&t.texStorage2D(a.TEXTURE_2D,Te,Re,ze[0].width,ze[0].height);for(let ue=0,re=ze.length;ue<re;ue++)ye=ze[ue],M.format!==$n?le!==null?N?xe&&t.compressedTexSubImage2D(a.TEXTURE_2D,ue,0,0,ye.width,ye.height,le,ye.data):t.compressedTexImage2D(a.TEXTURE_2D,ue,Re,ye.width,ye.height,0,ye.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?xe&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,ye.width,ye.height,le,ge,ye.data):t.texImage2D(a.TEXTURE_2D,ue,Re,ye.width,ye.height,0,le,ge,ye.data)}else if(M.isDataArrayTexture)if(N){if(ce&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Te,Re,oe.width,oe.height,oe.depth),xe)if(M.layerUpdates.size>0){const ue=ih(oe.width,oe.height,M.format,M.type);for(const re of M.layerUpdates){const Pe=oe.data.subarray(re*ue/oe.data.BYTES_PER_ELEMENT,(re+1)*ue/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,re,oe.width,oe.height,1,le,ge,Pe)}M.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,le,ge,oe.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Re,oe.width,oe.height,oe.depth,0,le,ge,oe.data);else if(M.isData3DTexture)N?(ce&&t.texStorage3D(a.TEXTURE_3D,Te,Re,oe.width,oe.height,oe.depth),xe&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,le,ge,oe.data)):t.texImage3D(a.TEXTURE_3D,0,Re,oe.width,oe.height,oe.depth,0,le,ge,oe.data);else if(M.isFramebufferTexture){if(ce)if(N)t.texStorage2D(a.TEXTURE_2D,Te,Re,oe.width,oe.height);else{let ue=oe.width,re=oe.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(a.TEXTURE_2D,Pe,Re,ue,re,0,le,ge,null),ue>>=1,re>>=1}}else if(ze.length>0){if(N&&ce){const ue=be(ze[0]);t.texStorage2D(a.TEXTURE_2D,Te,Re,ue.width,ue.height)}for(let ue=0,re=ze.length;ue<re;ue++)ye=ze[ue],N?xe&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,le,ge,ye):t.texImage2D(a.TEXTURE_2D,ue,Re,le,ge,ye);M.generateMipmaps=!1}else if(N){if(ce){const ue=be(oe);t.texStorage2D(a.TEXTURE_2D,Te,Re,ue.width,ue.height)}xe&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,le,ge,oe)}else t.texImage2D(a.TEXTURE_2D,0,Re,le,ge,oe);p(M)&&m(se),Se.__version=q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function k(A,M,O){if(M.image.length!==6)return;const se=ie(A,M),te=M.source;t.bindTexture(a.TEXTURE_CUBE_MAP,A.__webglTexture,a.TEXTURE0+O);const q=n.get(te);if(te.version!==q.__version||se===!0){t.activeTexture(a.TEXTURE0+O);const Se=it.getPrimaries(it.workingColorSpace),_e=M.colorSpace===Yi?null:it.getPrimaries(M.colorSpace),Ce=M.colorSpace===Yi||Se===_e?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,le=[];for(let re=0;re<6;re++)!Ee&&!oe?le[re]=x(M.image[re],!0,i.maxCubemapSize):le[re]=oe?M.image[re].image:M.image[re],le[re]=$(M,le[re]);const ge=le[0],Re=r.convert(M.format,M.colorSpace),ye=r.convert(M.type),ze=v(M.internalFormat,Re,ye,M.colorSpace),N=M.isVideoTexture!==!0,ce=q.__version===void 0||se===!0,xe=te.dataReady;let Te=T(M,ge);X(a.TEXTURE_CUBE_MAP,M);let ue;if(Ee){N&&ce&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Te,ze,ge.width,ge.height);for(let re=0;re<6;re++){ue=le[re].mipmaps;for(let Pe=0;Pe<ue.length;Pe++){const Ne=ue[Pe];M.format!==$n?Re!==null?N?xe&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Ne.width,Ne.height,Re,Ne.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,ze,Ne.width,Ne.height,0,Ne.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Ne.width,Ne.height,Re,ye,Ne.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,ze,Ne.width,Ne.height,0,Re,ye,Ne.data)}}}else{if(ue=M.mipmaps,N&&ce){ue.length>0&&Te++;const re=be(le[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Te,ze,re.width,re.height)}for(let re=0;re<6;re++)if(oe){N?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,le[re].width,le[re].height,Re,ye,le[re].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,le[re].width,le[re].height,0,Re,ye,le[re].data);for(let Pe=0;Pe<ue.length;Pe++){const Be=ue[Pe].image[re].image;N?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Be.width,Be.height,Re,ye,Be.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,ze,Be.width,Be.height,0,Re,ye,Be.data)}}else{N?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,ye,le[re]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,Re,ye,le[re]);for(let Pe=0;Pe<ue.length;Pe++){const Ne=ue[Pe];N?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Re,ye,Ne.image[re]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,ze,Re,ye,Ne.image[re])}}}p(M)&&m(a.TEXTURE_CUBE_MAP),q.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ee(A,M,O,se,te,q){const Se=r.convert(O.format,O.colorSpace),_e=r.convert(O.type),Ce=v(O.internalFormat,Se,_e,O.colorSpace),Ee=n.get(M),oe=n.get(O);if(oe.__renderTarget=M,!Ee.__hasExternalTextures){const le=Math.max(1,M.width>>q),ge=Math.max(1,M.height>>q);te===a.TEXTURE_3D||te===a.TEXTURE_2D_ARRAY?t.texImage3D(te,q,Ce,le,ge,M.depth,0,Se,_e,null):t.texImage2D(te,q,Ce,le,ge,0,Se,_e,null)}t.bindFramebuffer(a.FRAMEBUFFER,A),fe(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,se,te,oe.__webglTexture,0,ve(M)):(te===a.TEXTURE_2D||te>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,se,te,oe.__webglTexture,q),t.bindFramebuffer(a.FRAMEBUFFER,null)}function me(A,M,O){if(a.bindRenderbuffer(a.RENDERBUFFER,A),M.depthBuffer){const se=M.depthTexture,te=se&&se.isDepthTexture?se.type:null,q=y(M.stencilBuffer,te),Se=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,_e=ve(M);fe(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,_e,q,M.width,M.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,_e,q,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,q,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Se,a.RENDERBUFFER,A)}else{const se=M.textures;for(let te=0;te<se.length;te++){const q=se[te],Se=r.convert(q.format,q.colorSpace),_e=r.convert(q.type),Ce=v(q.internalFormat,Se,_e,q.colorSpace),Ee=ve(M);O&&fe(M)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ee,Ce,M.width,M.height):fe(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ee,Ce,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,Ce,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function pe(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(M.depthTexture);se.__renderTarget=M,(!se.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const te=se.__webglTexture,q=ve(M);if(M.depthTexture.format===fs)fe(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,te,0,q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,te,0);else if(M.depthTexture.format===hs)fe(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,te,0,q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function he(A){const M=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const se=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",te)};se.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=se}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const se=A.texture.mipmaps;se&&se.length>0?pe(M.__webglFramebuffer[0],A):pe(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=a.createRenderbuffer(),me(M.__webglDepthbuffer[se],A,!1);else{const te=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[se];a.bindRenderbuffer(a.RENDERBUFFER,q),a.framebufferRenderbuffer(a.FRAMEBUFFER,te,a.RENDERBUFFER,q)}}else{const se=A.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),me(M.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,q),a.framebufferRenderbuffer(a.FRAMEBUFFER,te,a.RENDERBUFFER,q)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function de(A,M,O){const se=n.get(A);M!==void 0&&ee(se.__webglFramebuffer,A,A.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&he(A)}function Le(A){const M=A.texture,O=n.get(A),se=n.get(M);A.addEventListener("dispose",w);const te=A.textures,q=A.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(se.__webglTexture===void 0&&(se.__webglTexture=a.createTexture()),se.__version=M.version,s.memory.textures++),q){O.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[_e]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)O.__webglFramebuffer[_e][Ce]=a.createFramebuffer()}else O.__webglFramebuffer[_e]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)O.__webglFramebuffer[_e]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(Se)for(let _e=0,Ce=te.length;_e<Ce;_e++){const Ee=n.get(te[_e]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=a.createTexture(),s.memory.textures++)}if(A.samples>0&&fe(A)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _e=0;_e<te.length;_e++){const Ce=te[_e];O.__webglColorRenderbuffer[_e]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[_e]);const Ee=r.convert(Ce.format,Ce.colorSpace),oe=r.convert(Ce.type),le=v(Ce.internalFormat,Ee,oe,Ce.colorSpace,A.isXRRenderTarget===!0),ge=ve(A);a.renderbufferStorageMultisample(a.RENDERBUFFER,ge,le,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,O.__webglColorRenderbuffer[_e])}a.bindRenderbuffer(a.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),me(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(q){t.bindTexture(a.TEXTURE_CUBE_MAP,se.__webglTexture),X(a.TEXTURE_CUBE_MAP,M);for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)ee(O.__webglFramebuffer[_e][Ce],A,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce);else ee(O.__webglFramebuffer[_e],A,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(M)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let _e=0,Ce=te.length;_e<Ce;_e++){const Ee=te[_e],oe=n.get(Ee);let le=a.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(le,oe.__webglTexture),X(le,Ee),ee(O.__webglFramebuffer,A,Ee,a.COLOR_ATTACHMENT0+_e,le,0),p(Ee)&&m(le)}t.unbindTexture()}else{let _e=a.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(_e,se.__webglTexture),X(_e,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)ee(O.__webglFramebuffer[Ce],A,M,a.COLOR_ATTACHMENT0,_e,Ce);else ee(O.__webglFramebuffer,A,M,a.COLOR_ATTACHMENT0,_e,0);p(M)&&m(_e),t.unbindTexture()}A.depthBuffer&&he(A)}function Fe(A){const M=A.textures;for(let O=0,se=M.length;O<se;O++){const te=M[O];if(p(te)){const q=S(A),Se=n.get(te).__webglTexture;t.bindTexture(q,Se),m(q),t.unbindTexture()}}}const L=[],we=[];function De(A){if(A.samples>0){if(fe(A)===!1){const M=A.textures,O=A.width,se=A.height;let te=a.COLOR_BUFFER_BIT;const q=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Se=n.get(A),_e=M.length>1;if(_e)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ce=A.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=a.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=a.STENCIL_BUFFER_BIT)),_e){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Se.__webglColorRenderbuffer[Ee]);const oe=n.get(M[Ee]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,oe,0)}a.blitFramebuffer(0,0,O,se,0,0,O,se,te,a.NEAREST),l===!0&&(L.length=0,we.length=0,L.push(a.COLOR_ATTACHMENT0+Ee),A.depthBuffer&&A.resolveDepthBuffer===!1&&(L.push(q),we.push(q),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,we)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),_e)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.RENDERBUFFER,Se.__webglColorRenderbuffer[Ee]);const oe=n.get(M[Ee]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.TEXTURE_2D,oe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function ve(A){return Math.min(i.maxSamples,A.samples)}function fe(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(A){const M=s.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function $(A,M){const O=A.colorSpace,se=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Sa&&O!==Yi&&(it.getTransfer(O)===ct?(se!==$n||te!==Li)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",O)),M}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=de,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=fe}function V1(a,e){function t(n,i=Yi){let r;const s=it.getTransfer(i);if(n===Li)return a.UNSIGNED_BYTE;if(n===Ou)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Bu)return a.UNSIGNED_SHORT_5_5_5_1;if(n===bd)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===yd)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===vd)return a.BYTE;if(n===Sd)return a.SHORT;if(n===cs)return a.UNSIGNED_SHORT;if(n===Nu)return a.INT;if(n===Ir)return a.UNSIGNED_INT;if(n===Ri)return a.FLOAT;if(n===Ca)return a.HALF_FLOAT;if(n===Md)return a.ALPHA;if(n===Td)return a.RGB;if(n===$n)return a.RGBA;if(n===fs)return a.DEPTH_COMPONENT;if(n===hs)return a.DEPTH_STENCIL;if(n===Ed)return a.RED;if(n===ku)return a.RED_INTEGER;if(n===zu)return a.RG;if(n===Gu)return a.RG_INTEGER;if(n===Vu)return a.RGBA_INTEGER;if(n===fo||n===ho||n===po||n===mo)if(s===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===Cc||n===Rc||n===Pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uc||n===Dc||n===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uc||n===Dc)return s===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ic||n===Fc||n===Nc||n===Oc||n===Bc||n===kc||n===zc||n===Gc||n===Vc||n===Hc||n===Wc||n===Xc||n===Yc||n===qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ic)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jc||n===Kc||n===Zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jc)return s===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jc||n===Qc||n===$c||n===eu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const H1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W1=`
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

}`;class X1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new kd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ei({vertexShader:H1,fragmentShader:W1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y1 extends Ra{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const x=typeof XRWebGLBinding<"u",p=new X1,m={},S=t.getContextAttributes();let v=null,y=null;const T=[],E=[],w=new $e;let C=null;const g=new Zn;g.viewport=new ft;const b=new Zn;b.viewport=new ft;const U=[g,b],P=new sx;let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let k=T[G];return k===void 0&&(k=new Hl,T[G]=k),k.getTargetRaySpace()},this.getControllerGrip=function(G){let k=T[G];return k===void 0&&(k=new Hl,T[G]=k),k.getGripSpace()},this.getHand=function(G){let k=T[G];return k===void 0&&(k=new Hl,T[G]=k),k.getHandSpace()};function z(G){const k=E.indexOf(G.inputSource);if(k===-1)return;const ee=T[k];ee!==void 0&&(ee.update(G.inputSource,G.frame,c||s),ee.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Z);for(let G=0;G<T.length;G++){const k=E[G];k!==null&&(E[G]=null,T[G].disconnect(k))}D=null,I=null,p.reset();for(const G in m)delete m[G];e.setRenderTarget(v),d=null,h=null,f=null,i=null,y=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,me=null,pe=null;S.depth&&(pe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=S.stencil?hs:fs,me=S.stencil?us:Ir);const he={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(he),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Fr(h.textureWidth,h.textureHeight,{format:$n,type:Li,depthTexture:new Bd(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Fr(d.framebufferWidth,d.framebufferHeight,{format:$n,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Z(G){for(let k=0;k<G.removed.length;k++){const ee=G.removed[k],me=E.indexOf(ee);me>=0&&(E[me]=null,T[me].disconnect(ee))}for(let k=0;k<G.added.length;k++){const ee=G.added[k];let me=E.indexOf(ee);if(me===-1){for(let he=0;he<T.length;he++)if(he>=E.length){E.push(ee),me=he;break}else if(E[he]===null){E[he]=ee,me=he;break}if(me===-1)break}const pe=T[me];pe&&pe.connect(ee)}}const W=new j,Y=new j;function H(G,k,ee){W.setFromMatrixPosition(k.matrixWorld),Y.setFromMatrixPosition(ee.matrixWorld);const me=W.distanceTo(Y),pe=k.projectionMatrix.elements,he=ee.projectionMatrix.elements,de=pe[14]/(pe[10]-1),Le=pe[14]/(pe[10]+1),Fe=(pe[9]+1)/pe[5],L=(pe[9]-1)/pe[5],we=(pe[8]-1)/pe[0],De=(he[8]+1)/he[0],ve=de*we,fe=de*De,Ae=me/(-we+De),$=Ae*-we;if(k.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX($),G.translateZ(Ae),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),pe[10]===-1)G.projectionMatrix.copy(k.projectionMatrix),G.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const be=de+Ae,A=Le+Ae,M=ve-$,O=fe+(me-$),se=Fe*Le/A*be,te=L*Le/A*be;G.projectionMatrix.makePerspective(M,O,se,te,be,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function F(G,k){k===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(k.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let k=G.near,ee=G.far;p.texture!==null&&(p.depthNear>0&&(k=p.depthNear),p.depthFar>0&&(ee=p.depthFar)),P.near=b.near=g.near=k,P.far=b.far=g.far=ee,(D!==P.near||I!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),D=P.near,I=P.far),P.layers.mask=G.layers.mask|6,g.layers.mask=P.layers.mask&3,b.layers.mask=P.layers.mask&5;const me=G.parent,pe=P.cameras;F(P,me);for(let he=0;he<pe.length;he++)F(pe[he],me);pe.length===2?H(P,g,b):P.projectionMatrix.copy(g.projectionMatrix),X(G,P,me)};function X(G,k,ee){ee===null?G.matrix.copy(k.matrixWorld):(G.matrix.copy(ee.matrixWorld),G.matrix.invert(),G.matrix.multiply(k.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(k.projectionMatrix),G.projectionMatrixInverse.copy(k.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ms*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(G){return m[G]};let ie=null;function ne(G,k){if(u=k.getViewerPose(c||s),_=k,u!==null){const ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let me=!1;ee.length!==P.cameras.length&&(P.cameras.length=0,me=!0);for(let Le=0;Le<ee.length;Le++){const Fe=ee[Le];let L=null;if(d!==null)L=d.getViewport(Fe);else{const De=f.getViewSubImage(h,Fe);L=De.viewport,Le===0&&(e.setRenderTargetTextures(y,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(y))}let we=U[Le];we===void 0&&(we=new Zn,we.layers.enable(Le),we.viewport=new ft,U[Le]=we),we.matrix.fromArray(Fe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Fe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(L.x,L.y,L.width,L.height),Le===0&&(P.matrix.copy(we.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),me===!0&&P.cameras.push(we)}const pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const Le=f.getDepthInformation(ee[0]);Le&&Le.isValid&&Le.texture&&p.init(Le,i.renderState)}if(pe&&pe.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let Le=0;Le<ee.length;Le++){const Fe=ee[Le].camera;if(Fe){let L=m[Fe];L||(L=new kd,m[Fe]=L);const we=f.getCameraImage(Fe);L.sourceTexture=we}}}}for(let ee=0;ee<T.length;ee++){const me=E[ee],pe=T[ee];me!==null&&pe!==void 0&&pe.update(me,k,c||s)}ie&&ie(G,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),_=null}const Q=new Wd;Q.setAnimationLoop(ne),this.setAnimationLoop=function(G){ie=G},this.dispose=function(){}}}const xr=new Ii,q1=new Et;function j1(a,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Id(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),v=S.envMap,y=S.envMapRotation;v&&(p.envMap.value=v,xr.copy(y),xr.x*=-1,xr.y*=-1,xr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),p.envMapRotation.value.setFromMatrix4(q1.makeRotationFromEuler(xr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function K1(a,e,t,n){let i={},r={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const y=v.program;n.uniformBlockBinding(S,y)}function c(S,v){let y=i[S.id];y===void 0&&(_(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",p));const T=v.program;n.updateUBOMapping(S,T);const E=e.render.frame;r[S.id]!==E&&(h(S),r[S.id]=E)}function u(S){const v=f();S.__bindingPointIndex=v;const y=a.createBuffer(),T=S.__size,E=S.usage;return a.bindBuffer(a.UNIFORM_BUFFER,y),a.bufferData(a.UNIFORM_BUFFER,T,E),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,v,y),y}function f(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const v=i[S.id],y=S.uniforms,T=S.__cache;a.bindBuffer(a.UNIFORM_BUFFER,v);for(let E=0,w=y.length;E<w;E++){const C=Array.isArray(y[E])?y[E]:[y[E]];for(let g=0,b=C.length;g<b;g++){const U=C[g];if(d(U,E,g,T)===!0){const P=U.__offset,D=Array.isArray(U.value)?U.value:[U.value];let I=0;for(let z=0;z<D.length;z++){const B=D[z],Z=x(B);typeof B=="number"||typeof B=="boolean"?(U.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,P+I,U.__data)):B.isMatrix3?(U.__data[0]=B.elements[0],U.__data[1]=B.elements[1],U.__data[2]=B.elements[2],U.__data[3]=0,U.__data[4]=B.elements[3],U.__data[5]=B.elements[4],U.__data[6]=B.elements[5],U.__data[7]=0,U.__data[8]=B.elements[6],U.__data[9]=B.elements[7],U.__data[10]=B.elements[8],U.__data[11]=0):(B.toArray(U.__data,I),I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,P,U.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(S,v,y,T){const E=S.value,w=v+"_"+y;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{const C=T[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function _(S){const v=S.uniforms;let y=0;const T=16;for(let w=0,C=v.length;w<C;w++){const g=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,U=g.length;b<U;b++){const P=g[b],D=Array.isArray(P.value)?P.value:[P.value];for(let I=0,z=D.length;I<z;I++){const B=D[I],Z=x(B),W=y%T,Y=W%Z.boundary,H=W+Y;y+=Y,H!==0&&T-H<Z.storage&&(y+=T-H),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=Z.storage}}}const E=y%T;return E>0&&(y+=T-E),S.__size=y,S.__cache={},this}function x(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const y=s.indexOf(v.__bindingPointIndex);s.splice(y,1),a.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const S in i)a.deleteBuffer(i[S]);s=[],i={},r={}}return{bind:l,update:c,dispose:m}}const Z1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ti=null;function J1(){return Ti===null&&(Ti=new Zm(Z1,32,32,zu,Ca),Ti.minFilter=hn,Ti.magFilter=hn,Ti.wrapS=Ci,Ti.wrapT=Ci,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class Q1{constructor(e={}){const{canvas:t=sm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=s;const _=new Set([Vu,Gu,ku]),x=new Set([Li,Ir,cs,us,Ou,Bu]),p=new Uint32Array(4),m=new Int32Array(4);let S=null,v=null;const y=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let w=!1;this._outputColorSpace=cn;let C=0,g=0,b=null,U=-1,P=null;const D=new ft,I=new ft;let z=null;const B=new tt(0);let Z=0,W=t.width,Y=t.height,H=1,F=null,X=null;const ie=new ft(0,0,W,Y),ne=new ft(0,0,W,Y);let Q=!1;const G=new Od;let k=!1,ee=!1;const me=new Et,pe=new j,he=new ft,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function Fe(){return b===null?H:1}let L=n;function we(R,K){return t.getContext(R,K)}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fu}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),L===null){const K="webgl2";if(L=we(K,R),L===null)throw we(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let De,ve,fe,Ae,$,be,A,M,O,se,te,q,Se,_e,Ce,Ee,oe,le,ge,Re,ye,ze,N,ce;function xe(){De=new sv(L),De.init(),ze=new V1(L,De),ve=new Jg(L,De,e,ze),fe=new z1(L,De),ve.reversedDepthBuffer&&h&&fe.buffers.depth.setReversed(!0),Ae=new cv(L),$=new A1,be=new G1(L,De,fe,$,ve,ze,Ae),A=new $g(E),M=new av(E),O=new dx(L),N=new Kg(L,O),se=new ov(L,O,Ae,N),te=new fv(L,se,O,Ae),ge=new uv(L,ve,be),Ee=new Qg($),q=new w1(E,A,M,De,ve,N,Ee),Se=new j1(E,$),_e=new R1,Ce=new F1(De),le=new jg(E,A,M,fe,te,d,l),oe=new B1(E,te,ve),ce=new K1(L,Ae,ve,fe),Re=new Zg(L,De,Ae),ye=new lv(L,De,Ae),Ae.programs=q.programs,E.capabilities=ve,E.extensions=De,E.properties=$,E.renderLists=_e,E.shadowMap=oe,E.state=fe,E.info=Ae}xe();const Te=new Y1(E,L);this.xr=Te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=De.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=De.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(W,Y,!1))},this.getSize=function(R){return R.set(W,Y)},this.setSize=function(R,K,V=!0){if(Te.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,Y=K,t.width=Math.floor(R*H),t.height=Math.floor(K*H),V===!0&&(t.style.width=R+"px",t.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(W*H,Y*H).floor()},this.setDrawingBufferSize=function(R,K,V){W=R,Y=K,H=V,t.width=Math.floor(R*V),t.height=Math.floor(K*V),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(ie)},this.setViewport=function(R,K,V,ae){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,K,V,ae),fe.viewport(D.copy(ie).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(ne)},this.setScissor=function(R,K,V,ae){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,K,V,ae),fe.scissor(I.copy(ne).multiplyScalar(H).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){fe.setScissorTest(Q=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,V=!0){let ae=0;if(R){let J=!1;if(b!==null){const Me=b.texture.format;J=_.has(Me)}if(J){const Me=b.texture.type,Ie=x.has(Me),ke=le.getClearColor(),Oe=le.getClearAlpha(),He=ke.r,Xe=ke.g,Ge=ke.b;Ie?(p[0]=He,p[1]=Xe,p[2]=Ge,p[3]=Oe,L.clearBufferuiv(L.COLOR,0,p)):(m[0]=He,m[1]=Xe,m[2]=Ge,m[3]=Oe,L.clearBufferiv(L.COLOR,0,m))}else ae|=L.COLOR_BUFFER_BIT}K&&(ae|=L.DEPTH_BUFFER_BIT),V&&(ae|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),le.dispose(),_e.dispose(),Ce.dispose(),$.dispose(),A.dispose(),M.dispose(),te.dispose(),N.dispose(),ce.dispose(),q.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",sn),Te.removeEventListener("sessionend",Wn),zt.stop()};function ue(R){R.preventDefault(),Io("WebGLRenderer: Context Lost."),w=!0}function re(){Io("WebGLRenderer: Context Restored."),w=!1;const R=Ae.autoReset,K=oe.enabled,V=oe.autoUpdate,ae=oe.needsUpdate,J=oe.type;xe(),Ae.autoReset=R,oe.enabled=K,oe.autoUpdate=V,oe.needsUpdate=ae,oe.type=J}function Pe(R){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ne(R){const K=R.target;K.removeEventListener("dispose",Ne),Be(K)}function Be(R){We(R),$.remove(R)}function We(R){const K=$.get(R).programs;K!==void 0&&(K.forEach(function(V){q.releaseProgram(V)}),R.isShaderMaterial&&q.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,V,ae,J,Me){K===null&&(K=de);const Ie=J.isMesh&&J.matrixWorld.determinant()<0,ke=Ds(R,K,V,ae,J);fe.setMaterial(ae,Ie);let Oe=V.index,He=1;if(ae.wireframe===!0){if(Oe=se.getWireframeAttribute(V),Oe===void 0)return;He=2}const Xe=V.drawRange,Ge=V.attributes.position;let Ke=Xe.start*He,rt=(Xe.start+Xe.count)*He;Me!==null&&(Ke=Math.max(Ke,Me.start*He),rt=Math.min(rt,(Me.start+Me.count)*He)),Oe!==null?(Ke=Math.max(Ke,0),rt=Math.min(rt,Oe.count)):Ge!=null&&(Ke=Math.max(Ke,0),rt=Math.min(rt,Ge.count));const mt=rt-Ke;if(mt<0||mt===1/0)return;N.setup(J,ae,ke,V,Oe);let xt,et=Re;if(Oe!==null&&(xt=O.get(Oe),et=ye,et.setIndex(xt)),J.isMesh)ae.wireframe===!0?(fe.setLineWidth(ae.wireframeLinewidth*Fe()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(J.isLine){let Ve=ae.linewidth;Ve===void 0&&(Ve=1),fe.setLineWidth(Ve*Fe()),J.isLineSegments?et.setMode(L.LINES):J.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else J.isPoints?et.setMode(L.POINTS):J.isSprite&&et.setMode(L.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ps("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))et.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Ve=J._multiDrawStarts,at=J._multiDrawCounts,Je=J._multiDrawCount,Gt=Oe?O.get(Oe).bytesPerElement:1,si=$.get(ae).currentProgram.getUniforms();for(let _t=0;_t<Je;_t++)si.setValue(L,"_gl_DrawID",_t),et.render(Ve[_t]/Gt,at[_t])}else if(J.isInstancedMesh)et.renderInstances(Ke,mt,J.count);else if(V.isInstancedBufferGeometry){const Ve=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,at=Math.min(V.instanceCount,Ve);et.renderInstances(Ke,mt,at)}else et.render(Ke,mt)};function pt(R,K,V){R.transparent===!0&&R.side===fn&&R.forceSinglePass===!1?(R.side=dn,R.needsUpdate=!0,lr(R,K,V),R.side=nr,R.needsUpdate=!0,lr(R,K,V),R.side=fn):lr(R,K,V)}this.compile=function(R,K,V=null){V===null&&(V=R),v=Ce.get(V),v.init(K),T.push(v),V.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(v.pushLight(J),J.castShadow&&v.pushShadow(J))}),R!==V&&R.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(v.pushLight(J),J.castShadow&&v.pushShadow(J))}),v.setupLights();const ae=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Me=J.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){const ke=Me[Ie];pt(ke,V,J),ae.add(ke)}else pt(Me,V,J),ae.add(Me)}),v=T.pop(),ae},this.compileAsync=function(R,K,V=null){const ae=this.compile(R,K,V);return new Promise(J=>{function Me(){if(ae.forEach(function(Ie){$.get(Ie).currentProgram.isReady()&&ae.delete(Ie)}),ae.size===0){J(R);return}setTimeout(Me,10)}De.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ot=null;function wt(R){ot&&ot(R)}function sn(){zt.stop()}function Wn(){zt.start()}const zt=new Wd;zt.setAnimationLoop(wt),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(R){ot=R,Te.setAnimationLoop(R),R===null?zt.stop():zt.start()},Te.addEventListener("sessionstart",sn),Te.addEventListener("sessionend",Wn),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(K),K=Te.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,K,b),v=Ce.get(R,T.length),v.init(K),T.push(v),me.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G.setFromProjectionMatrix(me,di,K.reversedDepth),ee=this.localClippingEnabled,k=Ee.init(this.clippingPlanes,ee),S=_e.get(R,y.length),S.init(),y.push(S),Te.enabled===!0&&Te.isPresenting===!0){const Me=E.xr.getDepthSensingMesh();Me!==null&&Fn(Me,K,-1/0,E.sortObjects)}Fn(R,K,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(F,X),Le=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Le&&le.addToRenderList(S,R),this.info.render.frame++,k===!0&&Ee.beginShadows();const V=v.state.shadowsArray;oe.render(V,R,K),k===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=S.opaque,J=S.transmissive;if(v.setupLights(),K.isArrayCamera){const Me=K.cameras;if(J.length>0)for(let Ie=0,ke=Me.length;Ie<ke;Ie++){const Oe=Me[Ie];Nn(ae,J,R,Oe)}Le&&le.render(R);for(let Ie=0,ke=Me.length;Ie<ke;Ie++){const Oe=Me[Ie];ri(S,R,Oe,Oe.viewport)}}else J.length>0&&Nn(ae,J,R,K),Le&&le.render(R),ri(S,R,K);b!==null&&g===0&&(be.updateMultisampleRenderTarget(b),be.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(E,R,K),N.resetDefaultState(),U=-1,P=null,T.pop(),T.length>0?(v=T[T.length-1],k===!0&&Ee.setGlobalState(E.clippingPlanes,v.state.camera)):v=null,y.pop(),y.length>0?S=y[y.length-1]:S=null};function Fn(R,K,V,ae){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){ae&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4(me);const Ie=te.update(R),ke=R.material;ke.visible&&S.push(R,Ie,ke,V,he.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){const Ie=te.update(R),ke=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),he.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),he.copy(Ie.boundingSphere.center)),he.applyMatrix4(R.matrixWorld).applyMatrix4(me)),Array.isArray(ke)){const Oe=Ie.groups;for(let He=0,Xe=Oe.length;He<Xe;He++){const Ge=Oe[He],Ke=ke[Ge.materialIndex];Ke&&Ke.visible&&S.push(R,Ie,Ke,V,he.z,Ge)}}else ke.visible&&S.push(R,Ie,ke,V,he.z,null)}}const Me=R.children;for(let Ie=0,ke=Me.length;Ie<ke;Ie++)Fn(Me[Ie],K,V,ae)}function ri(R,K,V,ae){const{opaque:J,transmissive:Me,transparent:Ie}=R;v.setupLightsView(V),k===!0&&Ee.setGlobalState(E.clippingPlanes,V),ae&&fe.viewport(D.copy(ae)),J.length>0&&Ct(J,K,V),Me.length>0&&Ct(Me,K,V),Ie.length>0&&Ct(Ie,K,V),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Nn(R,K,V,ae){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ae.id]===void 0&&(v.state.transmissionRenderTarget[ae.id]=new Fr(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Ca:Li,minFilter:Tr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const Me=v.state.transmissionRenderTarget[ae.id],Ie=ae.viewport||D;Me.setSize(Ie.z*E.transmissionResolutionScale,Ie.w*E.transmissionResolutionScale);const ke=E.getRenderTarget(),Oe=E.getActiveCubeFace(),He=E.getActiveMipmapLevel();E.setRenderTarget(Me),E.getClearColor(B),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),E.clear(),Le&&le.render(V);const Xe=E.toneMapping;E.toneMapping=$i;const Ge=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),v.setupLightsView(ae),k===!0&&Ee.setGlobalState(E.clippingPlanes,ae),Ct(R,V,ae),be.updateMultisampleRenderTarget(Me),be.updateRenderTargetMipmap(Me),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let rt=0,mt=K.length;rt<mt;rt++){const xt=K[rt],{object:et,geometry:Ve,material:at,group:Je}=xt;if(at.side===fn&&et.layers.test(ae.layers)){const Gt=at.side;at.side=dn,at.needsUpdate=!0,ai(et,V,ae,Ve,at,Je),at.side=Gt,at.needsUpdate=!0,Ke=!0}}Ke===!0&&(be.updateMultisampleRenderTarget(Me),be.updateRenderTargetMipmap(Me))}E.setRenderTarget(ke,Oe,He),E.setClearColor(B,Z),Ge!==void 0&&(ae.viewport=Ge),E.toneMapping=Xe}function Ct(R,K,V){const ae=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Me=R.length;J<Me;J++){const Ie=R[J],{object:ke,geometry:Oe,group:He}=Ie;let Xe=Ie.material;Xe.allowOverride===!0&&ae!==null&&(Xe=ae),ke.layers.test(V.layers)&&ai(ke,K,V,Oe,Xe,He)}}function ai(R,K,V,ae,J,Me){R.onBeforeRender(E,K,V,ae,J,Me),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(E,K,V,ae,R,Me),J.transparent===!0&&J.side===fn&&J.forceSinglePass===!1?(J.side=dn,J.needsUpdate=!0,E.renderBufferDirect(V,K,ae,J,R,Me),J.side=nr,J.needsUpdate=!0,E.renderBufferDirect(V,K,ae,J,R,Me),J.side=fn):E.renderBufferDirect(V,K,ae,J,R,Me),R.onAfterRender(E,K,V,ae,J,Me)}function lr(R,K,V){K.isScene!==!0&&(K=de);const ae=$.get(R),J=v.state.lights,Me=v.state.shadowsArray,Ie=J.state.version,ke=q.getParameters(R,J.state,Me,K,V),Oe=q.getProgramCacheKey(ke);let He=ae.programs;ae.environment=R.isMeshStandardMaterial?K.environment:null,ae.fog=K.fog,ae.envMap=(R.isMeshStandardMaterial?M:A).get(R.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",Ne),He=new Map,ae.programs=He);let Xe=He.get(Oe);if(Xe!==void 0){if(ae.currentProgram===Xe&&ae.lightsStateVersion===Ie)return Us(R,ke),Xe}else ke.uniforms=q.getUniforms(R),R.onBeforeCompile(ke,E),Xe=q.acquireProgram(ke,Oe),He.set(Oe,Xe),ae.uniforms=ke.uniforms;const Ge=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=Ee.uniform),Us(R,ke),ae.needsLights=La(R),ae.lightsStateVersion=Ie,ae.needsLights&&(Ge.ambientLightColor.value=J.state.ambient,Ge.lightProbe.value=J.state.probe,Ge.directionalLights.value=J.state.directional,Ge.directionalLightShadows.value=J.state.directionalShadow,Ge.spotLights.value=J.state.spot,Ge.spotLightShadows.value=J.state.spotShadow,Ge.rectAreaLights.value=J.state.rectArea,Ge.ltc_1.value=J.state.rectAreaLTC1,Ge.ltc_2.value=J.state.rectAreaLTC2,Ge.pointLights.value=J.state.point,Ge.pointLightShadows.value=J.state.pointShadow,Ge.hemisphereLights.value=J.state.hemi,Ge.directionalShadowMap.value=J.state.directionalShadowMap,Ge.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ge.spotShadowMap.value=J.state.spotShadowMap,Ge.spotLightMatrix.value=J.state.spotLightMatrix,Ge.spotLightMap.value=J.state.spotLightMap,Ge.pointShadowMap.value=J.state.pointShadowMap,Ge.pointShadowMatrix.value=J.state.pointShadowMatrix),ae.currentProgram=Xe,ae.uniformsList=null,Xe}function Or(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=xo.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Us(R,K){const V=$.get(R);V.outputColorSpace=K.outputColorSpace,V.batching=K.batching,V.batchingColor=K.batchingColor,V.instancing=K.instancing,V.instancingColor=K.instancingColor,V.instancingMorph=K.instancingMorph,V.skinning=K.skinning,V.morphTargets=K.morphTargets,V.morphNormals=K.morphNormals,V.morphColors=K.morphColors,V.morphTargetsCount=K.morphTargetsCount,V.numClippingPlanes=K.numClippingPlanes,V.numIntersection=K.numClipIntersection,V.vertexAlphas=K.vertexAlphas,V.vertexTangents=K.vertexTangents,V.toneMapping=K.toneMapping}function Ds(R,K,V,ae,J){K.isScene!==!0&&(K=de),be.resetTextureUnits();const Me=K.fog,Ie=ae.isMeshStandardMaterial?K.environment:null,ke=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Sa,Oe=(ae.isMeshStandardMaterial?M:A).get(ae.envMap||Ie),He=ae.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Xe=!!V.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ge=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,rt=!!V.morphAttributes.color;let mt=$i;ae.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(mt=E.toneMapping);const xt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,et=xt!==void 0?xt.length:0,Ve=$.get(ae),at=v.state.lights;if(k===!0&&(ee===!0||R!==P)){const Pt=R===P&&ae.id===U;Ee.setState(ae,R,Pt)}let Je=!1;ae.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==at.state.version||Ve.outputColorSpace!==ke||J.isBatchedMesh&&Ve.batching===!1||!J.isBatchedMesh&&Ve.batching===!0||J.isBatchedMesh&&Ve.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ve.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ve.instancing===!1||!J.isInstancedMesh&&Ve.instancing===!0||J.isSkinnedMesh&&Ve.skinning===!1||!J.isSkinnedMesh&&Ve.skinning===!0||J.isInstancedMesh&&Ve.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ve.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ve.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ve.instancingMorph===!1&&J.morphTexture!==null||Ve.envMap!==Oe||ae.fog===!0&&Ve.fog!==Me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ee.numPlanes||Ve.numIntersection!==Ee.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Xe||Ve.morphTargets!==Ge||Ve.morphNormals!==Ke||Ve.morphColors!==rt||Ve.toneMapping!==mt||Ve.morphTargetsCount!==et)&&(Je=!0):(Je=!0,Ve.__version=ae.version);let Gt=Ve.currentProgram;Je===!0&&(Gt=lr(ae,K,J));let si=!1,_t=!1,cr=!1;const lt=Gt.getUniforms(),Rt=Ve.uniforms;if(fe.useProgram(Gt.program)&&(si=!0,_t=!0,cr=!0),ae.id!==U&&(U=ae.id,_t=!0),si||P!==R){fe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),lt.setValue(L,"projectionMatrix",R.projectionMatrix),lt.setValue(L,"viewMatrix",R.matrixWorldInverse);const It=lt.map.cameraPosition;It!==void 0&&It.setValue(L,pe.setFromMatrixPosition(R.matrixWorld)),ve.logarithmicDepthBuffer&&lt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&lt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),P!==R&&(P=R,_t=!0,cr=!0)}if(J.isSkinnedMesh){lt.setOptional(L,J,"bindMatrix"),lt.setOptional(L,J,"bindMatrixInverse");const Pt=J.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),lt.setValue(L,"boneTexture",Pt.boneTexture,be))}J.isBatchedMesh&&(lt.setOptional(L,J,"batchingTexture"),lt.setValue(L,"batchingTexture",J._matricesTexture,be),lt.setOptional(L,J,"batchingIdTexture"),lt.setValue(L,"batchingIdTexture",J._indirectTexture,be),lt.setOptional(L,J,"batchingColorTexture"),J._colorsTexture!==null&&lt.setValue(L,"batchingColorTexture",J._colorsTexture,be));const en=V.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&ge.update(J,V,Gt),(_t||Ve.receiveShadow!==J.receiveShadow)&&(Ve.receiveShadow=J.receiveShadow,lt.setValue(L,"receiveShadow",J.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Rt.envMap.value=Oe,Rt.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&K.environment!==null&&(Rt.envMapIntensity.value=K.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=J1()),_t&&(lt.setValue(L,"toneMappingExposure",E.toneMappingExposure),Ve.needsLights&&Br(Rt,cr),Me&&ae.fog===!0&&Se.refreshFogUniforms(Rt,Me),Se.refreshMaterialUniforms(Rt,ae,H,Y,v.state.transmissionRenderTarget[R.id]),xo.upload(L,Or(Ve),Rt,be)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(xo.upload(L,Or(Ve),Rt,be),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&lt.setValue(L,"center",J.center),lt.setValue(L,"modelViewMatrix",J.modelViewMatrix),lt.setValue(L,"normalMatrix",J.normalMatrix),lt.setValue(L,"modelMatrix",J.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Pt=ae.uniformsGroups;for(let It=0,ur=Pt.length;It<ur;It++){const oi=Pt[It];ce.update(oi,Gt),ce.bind(oi,Gt)}}return Gt}function Br(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function La(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,K,V){const ae=$.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),$.get(R.texture).__webglTexture=K,$.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:V,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const V=$.get(R);V.__webglFramebuffer=K,V.__useDefaultFramebuffer=K===void 0};const hl=L.createFramebuffer();this.setRenderTarget=function(R,K=0,V=0){b=R,C=K,g=V;let ae=!0,J=null,Me=!1,Ie=!1;if(R){const Oe=$.get(R);if(Oe.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(L.FRAMEBUFFER,null),ae=!1;else if(Oe.__webglFramebuffer===void 0)be.setupRenderTarget(R);else if(Oe.__hasExternalTextures)be.rebindTextures(R,$.get(R.texture).__webglTexture,$.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ge=R.depthTexture;if(Oe.__boundDepthTexture!==Ge){if(Ge!==null&&$.has(Ge)&&(R.width!==Ge.image.width||R.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(R)}}const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ie=!0);const Xe=$.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[K])?J=Xe[K][V]:J=Xe[K],Me=!0):R.samples>0&&be.useMultisampledRTT(R)===!1?J=$.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?J=Xe[V]:J=Xe,D.copy(R.viewport),I.copy(R.scissor),z=R.scissorTest}else D.copy(ie).multiplyScalar(H).floor(),I.copy(ne).multiplyScalar(H).floor(),z=Q;if(V!==0&&(J=hl),fe.bindFramebuffer(L.FRAMEBUFFER,J)&&ae&&fe.drawBuffers(R,J),fe.viewport(D),fe.scissor(I),fe.setScissorTest(z),Me){const Oe=$.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+K,Oe.__webglTexture,V)}else if(Ie){const Oe=K;for(let He=0;He<R.textures.length;He++){const Xe=$.get(R.textures[He]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+He,Xe.__webglTexture,V,Oe)}}else if(R!==null&&V!==0){const Oe=$.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Oe.__webglTexture,V)}U=-1},this.readRenderTargetPixels=function(R,K,V,ae,J,Me,Ie,ke=0){if(!(R&&R.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=$.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){fe.bindFramebuffer(L.FRAMEBUFFER,Oe);try{const He=R.textures[ke],Xe=He.format,Ge=He.type;if(!ve.textureFormatReadable(Xe)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(Ge)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ae&&V>=0&&V<=R.height-J&&(R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ke),L.readPixels(K,V,ae,J,ze.convert(Xe),ze.convert(Ge),Me))}finally{const He=b!==null?$.get(b).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,K,V,ae,J,Me,Ie,ke=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=$.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe)if(K>=0&&K<=R.width-ae&&V>=0&&V<=R.height-J){fe.bindFramebuffer(L.FRAMEBUFFER,Oe);const He=R.textures[ke],Xe=He.format,Ge=He.type;if(!ve.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.bufferData(L.PIXEL_PACK_BUFFER,Me.byteLength,L.STREAM_READ),R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ke),L.readPixels(K,V,ae,J,ze.convert(Xe),ze.convert(Ge),0);const rt=b!==null?$.get(b).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,rt);const mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await om(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Me),L.deleteBuffer(Ke),L.deleteSync(mt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,V=0){const ae=Math.pow(2,-V),J=Math.floor(R.image.width*ae),Me=Math.floor(R.image.height*ae),Ie=K!==null?K.x:0,ke=K!==null?K.y:0;be.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,Ie,ke,J,Me),fe.unbindTexture()};const Ls=L.createFramebuffer(),kr=L.createFramebuffer();this.copyTextureToTexture=function(R,K,V=null,ae=null,J=0,Me=null){Me===null&&(J!==0?(ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=J,J=0):Me=0);let Ie,ke,Oe,He,Xe,Ge,Ke,rt,mt;const xt=R.isCompressedTexture?R.mipmaps[Me]:R.image;if(V!==null)Ie=V.max.x-V.min.x,ke=V.max.y-V.min.y,Oe=V.isBox3?V.max.z-V.min.z:1,He=V.min.x,Xe=V.min.y,Ge=V.isBox3?V.min.z:0;else{const en=Math.pow(2,-J);Ie=Math.floor(xt.width*en),ke=Math.floor(xt.height*en),R.isDataArrayTexture?Oe=xt.depth:R.isData3DTexture?Oe=Math.floor(xt.depth*en):Oe=1,He=0,Xe=0,Ge=0}ae!==null?(Ke=ae.x,rt=ae.y,mt=ae.z):(Ke=0,rt=0,mt=0);const et=ze.convert(K.format),Ve=ze.convert(K.type);let at;K.isData3DTexture?(be.setTexture3D(K,0),at=L.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(be.setTexture2DArray(K,0),at=L.TEXTURE_2D_ARRAY):(be.setTexture2D(K,0),at=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,K.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,K.unpackAlignment);const Je=L.getParameter(L.UNPACK_ROW_LENGTH),Gt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),si=L.getParameter(L.UNPACK_SKIP_PIXELS),_t=L.getParameter(L.UNPACK_SKIP_ROWS),cr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,He),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ge);const lt=R.isDataArrayTexture||R.isData3DTexture,Rt=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const en=$.get(R),Pt=$.get(K),It=$.get(en.__renderTarget),ur=$.get(Pt.__renderTarget);fe.bindFramebuffer(L.READ_FRAMEBUFFER,It.__webglFramebuffer),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ur.__webglFramebuffer);for(let oi=0;oi<Oe;oi++)lt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$.get(R).__webglTexture,J,Ge+oi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$.get(K).__webglTexture,Me,mt+oi)),L.blitFramebuffer(He,Xe,Ie,ke,Ke,rt,Ie,ke,L.DEPTH_BUFFER_BIT,L.NEAREST);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||$.has(R)){const en=$.get(R),Pt=$.get(K);fe.bindFramebuffer(L.READ_FRAMEBUFFER,Ls),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,kr);for(let It=0;It<Oe;It++)lt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,en.__webglTexture,J,Ge+It):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,en.__webglTexture,J),Rt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.__webglTexture,Me,mt+It):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pt.__webglTexture,Me),J!==0?L.blitFramebuffer(He,Xe,Ie,ke,Ke,rt,Ie,ke,L.COLOR_BUFFER_BIT,L.NEAREST):Rt?L.copyTexSubImage3D(at,Me,Ke,rt,mt+It,He,Xe,Ie,ke):L.copyTexSubImage2D(at,Me,Ke,rt,He,Xe,Ie,ke);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Rt?R.isDataTexture||R.isData3DTexture?L.texSubImage3D(at,Me,Ke,rt,mt,Ie,ke,Oe,et,Ve,xt.data):K.isCompressedArrayTexture?L.compressedTexSubImage3D(at,Me,Ke,rt,mt,Ie,ke,Oe,et,xt.data):L.texSubImage3D(at,Me,Ke,rt,mt,Ie,ke,Oe,et,Ve,xt):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Me,Ke,rt,Ie,ke,et,Ve,xt.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Me,Ke,rt,xt.width,xt.height,et,xt.data):L.texSubImage2D(L.TEXTURE_2D,Me,Ke,rt,Ie,ke,et,Ve,xt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Je),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Gt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,si),L.pixelStorei(L.UNPACK_SKIP_ROWS,_t),L.pixelStorei(L.UNPACK_SKIP_IMAGES,cr),Me===0&&K.generateMipmaps&&L.generateMipmap(at),fe.unbindTexture()},this.initRenderTarget=function(R){$.get(R).__webglFramebuffer===void 0&&be.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?be.setTextureCube(R,0):R.isData3DTexture?be.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?be.setTexture2DArray(R,0):be.setTexture2D(R,0),fe.unbindTexture()},this.resetState=function(){C=0,g=0,b=null,fe.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}function $1(){var a=Object.create(null);function e(i,r){var s=i.id,o=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=a[h.id].value),h}),c=n("<"+o+">.init",c),u&&(u=n("<"+o+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:f,getTransferables:u},r(f)}catch(h){h&&h.noLog||console.error(h),r(h)}}function t(i,r){var s,o=i.id,l=i.args;(!a[o]||typeof a[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(f){return r(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){r(f)}function u(f){try{var h=a[o].getTransferables&&a[o].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),r(f,h)}catch(d){console.error(d),r(d)}}}function n(i,r){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(i){var r=i.data,s=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function eS(a){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,n=a.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var i=Promise.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var Kd=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Kd=function(){return a},a},tS=0,nS=0,Ql=!1,ts=Object.create(null),ns=Object.create(null),au=Object.create(null);function Da(a){if((!a||typeof a.init!="function")&&!Ql)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,n=a.getTransferables,i=a.workerId,r=eS(a);i==null&&(i="#default");var s="workerModule"+ ++tS,o=a.name||s,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(Ql=!0,u=Da({workerId:i,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+_o(u)+`
)}`}),Ql=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],f=arguments.length;f--;)u[f]=arguments[f];if(!Kd())return r.apply(void 0,u);if(!l){l=Ah(i,"registerModule",c.workerModuleData);var h=function(){l=null,ns[i].delete(h)};(ns[i]||(ns[i]=new Set)).add(h)}return l.then(function(d){var _=d.isCallable;if(_)return Ah(i,"callModule",{id:s,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:_o(t),getTransferables:n&&_o(n)},c.onMainThread=r,c}function iS(a){ns[a]&&ns[a].forEach(function(e){e()}),ts[a]&&(ts[a].terminate(),delete ts[a])}function _o(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function rS(a){var e=ts[a];if(!e){var t=_o($1);e=ts[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,s=au[r];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete au[r],s(i)}}return e}function Ah(a,e,t){return new Promise(function(n,i){var r=++nS;au[r]=function(s){s.success?n(s.result):i(new Error("Error in worker "+e+" call: "+s.error))},rS(a).postMessage({messageId:r,action:e,data:t})})}function Zd(){var a=(function(e){function t(Y,H,F,X,ie,ne,Q,G){var k=1-Q;G.x=k*k*Y+2*k*Q*F+Q*Q*ie,G.y=k*k*H+2*k*Q*X+Q*Q*ne}function n(Y,H,F,X,ie,ne,Q,G,k,ee){var me=1-k;ee.x=me*me*me*Y+3*me*me*k*F+3*me*k*k*ie+k*k*k*Q,ee.y=me*me*me*H+3*me*me*k*X+3*me*k*k*ne+k*k*k*G}function i(Y,H){for(var F=/([MLQCZ])([^MLQCZ]*)/g,X,ie,ne,Q,G;X=F.exec(Y);){var k=X[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ee){return parseFloat(ee)});switch(X[1]){case"M":Q=ie=k[0],G=ne=k[1];break;case"L":(k[0]!==Q||k[1]!==G)&&H("L",Q,G,Q=k[0],G=k[1]);break;case"Q":{H("Q",Q,G,Q=k[2],G=k[3],k[0],k[1]);break}case"C":{H("C",Q,G,Q=k[4],G=k[5],k[0],k[1],k[2],k[3]);break}case"Z":(Q!==ie||G!==ne)&&H("L",Q,G,ie,ne);break}}}function r(Y,H,F){F===void 0&&(F=16);var X={x:0,y:0};i(Y,function(ie,ne,Q,G,k,ee,me,pe,he){switch(ie){case"L":H(ne,Q,G,k);break;case"Q":{for(var de=ne,Le=Q,Fe=1;Fe<F;Fe++)t(ne,Q,ee,me,G,k,Fe/(F-1),X),H(de,Le,X.x,X.y),de=X.x,Le=X.y;break}case"C":{for(var L=ne,we=Q,De=1;De<F;De++)n(ne,Q,ee,me,pe,he,G,k,De/(F-1),X),H(L,we,X.x,X.y),L=X.x,we=X.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(Y,H){var F=Y.getContext?Y.getContext("webgl",c):Y,X=l.get(F);if(!X){let L=function($){var be=ne[$];if(!be&&(be=ne[$]=F.getExtension($),!be))throw new Error($+" not supported");return be},we=function($,be){var A=F.createShader(be);return F.shaderSource(A,$),F.compileShader(A),A},De=function($,be,A,M){if(!Q[$]){var O={},se={},te=F.createProgram();F.attachShader(te,we(be,F.VERTEX_SHADER)),F.attachShader(te,we(A,F.FRAGMENT_SHADER)),F.linkProgram(te),Q[$]={program:te,transaction:function(Se){F.useProgram(te),Se({setUniform:function(Ce,Ee){for(var oe=[],le=arguments.length-2;le-- >0;)oe[le]=arguments[le+2];var ge=se[Ee]||(se[Ee]=F.getUniformLocation(te,Ee));F["uniform"+Ce].apply(F,[ge].concat(oe))},setAttribute:function(Ce,Ee,oe,le,ge){var Re=O[Ce];Re||(Re=O[Ce]={buf:F.createBuffer(),loc:F.getAttribLocation(te,Ce),data:null}),F.bindBuffer(F.ARRAY_BUFFER,Re.buf),F.vertexAttribPointer(Re.loc,Ee,F.FLOAT,!1,0,0),F.enableVertexAttribArray(Re.loc),ie?F.vertexAttribDivisor(Re.loc,le):L("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Re.loc,le),ge!==Re.data&&(F.bufferData(F.ARRAY_BUFFER,ge,oe),Re.data=ge)}})}}}Q[$].transaction(M)},ve=function($,be){k++;try{F.activeTexture(F.TEXTURE0+k);var A=G[$];A||(A=G[$]=F.createTexture(),F.bindTexture(F.TEXTURE_2D,A),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST)),F.bindTexture(F.TEXTURE_2D,A),be(A,k)}finally{k--}},fe=function($,be,A){var M=F.createFramebuffer();ee.push(M),F.bindFramebuffer(F.FRAMEBUFFER,M),F.activeTexture(F.TEXTURE0+be),F.bindTexture(F.TEXTURE_2D,$),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$,0);try{A(M)}finally{F.deleteFramebuffer(M),F.bindFramebuffer(F.FRAMEBUFFER,ee[--ee.length-1]||null)}},Ae=function(){ne={},Q={},G={},k=-1,ee.length=0};var me=L,pe=we,he=De,de=ve,Le=fe,Fe=Ae,ie=typeof WebGL2RenderingContext<"u"&&F instanceof WebGL2RenderingContext,ne={},Q={},G={},k=-1,ee=[];F.canvas.addEventListener("webglcontextlost",function($){Ae(),$.preventDefault()},!1),l.set(F,X={gl:F,isWebGL2:ie,getExtension:L,withProgram:De,withTexture:ve,withTextureFramebuffer:fe,handleContextLoss:Ae})}H(X)}function f(Y,H,F,X,ie,ne,Q,G){Q===void 0&&(Q=15),G===void 0&&(G=null),u(Y,function(k){var ee=k.gl,me=k.withProgram,pe=k.withTexture;pe("copy",function(he,de){ee.texImage2D(ee.TEXTURE_2D,0,ee.RGBA,ie,ne,0,ee.RGBA,ee.UNSIGNED_BYTE,H),me("copy",s,o,function(Le){var Fe=Le.setUniform,L=Le.setAttribute;L("aUV",2,ee.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Fe("1i","image",de),ee.bindFramebuffer(ee.FRAMEBUFFER,G||null),ee.disable(ee.BLEND),ee.colorMask(Q&8,Q&4,Q&2,Q&1),ee.viewport(F,X,ie,ne),ee.scissor(F,X,ie,ne),ee.drawArrays(ee.TRIANGLES,0,3)})})})}function h(Y,H,F){var X=Y.width,ie=Y.height;u(Y,function(ne){var Q=ne.gl,G=new Uint8Array(X*ie*4);Q.readPixels(0,0,X,ie,Q.RGBA,Q.UNSIGNED_BYTE,G),Y.width=H,Y.height=F,f(Q,G,0,0,X,ie)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function _(Y,H,F,X,ie,ne){ne===void 0&&(ne=1);var Q=new Uint8Array(Y*H),G=X[2]-X[0],k=X[3]-X[1],ee=[];r(F,function(L,we,De,ve){ee.push({x1:L,y1:we,x2:De,y2:ve,minX:Math.min(L,De),minY:Math.min(we,ve),maxX:Math.max(L,De),maxY:Math.max(we,ve)})}),ee.sort(function(L,we){return L.maxX-we.maxX});for(var me=0;me<Y;me++)for(var pe=0;pe<H;pe++){var he=Le(X[0]+G*(me+.5)/Y,X[1]+k*(pe+.5)/H),de=Math.pow(1-Math.abs(he)/ie,ne)/2;he<0&&(de=1-de),de=Math.max(0,Math.min(255,Math.round(de*255))),Q[pe*Y+me]=de}return Q;function Le(L,we){for(var De=1/0,ve=1/0,fe=ee.length;fe--;){var Ae=ee[fe];if(Ae.maxX+ve<=L)break;if(L+ve>Ae.minX&&we-ve<Ae.maxY&&we+ve>Ae.minY){var $=m(L,we,Ae.x1,Ae.y1,Ae.x2,Ae.y2);$<De&&(De=$,ve=Math.sqrt(De))}}return Fe(L,we)&&(ve=-ve),ve}function Fe(L,we){for(var De=0,ve=ee.length;ve--;){var fe=ee[ve];if(fe.maxX<=L)break;var Ae=fe.y1>we!=fe.y2>we&&L<(fe.x2-fe.x1)*(we-fe.y1)/(fe.y2-fe.y1)+fe.x1;Ae&&(De+=fe.y1<fe.y2?1:-1)}return De!==0}}function x(Y,H,F,X,ie,ne,Q,G,k,ee){ne===void 0&&(ne=1),G===void 0&&(G=0),k===void 0&&(k=0),ee===void 0&&(ee=0),p(Y,H,F,X,ie,ne,Q,null,G,k,ee)}function p(Y,H,F,X,ie,ne,Q,G,k,ee,me){ne===void 0&&(ne=1),k===void 0&&(k=0),ee===void 0&&(ee=0),me===void 0&&(me=0);for(var pe=_(Y,H,F,X,ie,ne),he=new Uint8Array(pe.length*4),de=0;de<pe.length;de++)he[de*4+me]=pe[de];f(Q,he,k,ee,Y,H,1<<3-me,G)}function m(Y,H,F,X,ie,ne){var Q=ie-F,G=ne-X,k=Q*Q+G*G,ee=k?Math.max(0,Math.min(1,((Y-F)*Q+(H-X)*G)/k)):0,me=Y-(F+ee*Q),pe=H-(X+ee*G);return me*me+pe*pe}var S=Object.freeze({__proto__:null,generate:_,generateIntoCanvas:x,generateIntoFramebuffer:p}),v="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",y="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",T="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",E=new Float32Array([0,0,2,0,0,2]),w=null,C=!1,g={},b=new WeakMap;function U(Y){if(!C&&!z(Y))throw new Error("WebGL generation not supported")}function P(Y,H,F,X,ie,ne,Q){if(ne===void 0&&(ne=1),Q===void 0&&(Q=null),!Q&&(Q=w,!Q)){var G=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!G)throw new Error("OffscreenCanvas or DOM canvas not supported");Q=w=G.getContext("webgl",{depth:!1})}U(Q);var k=new Uint8Array(Y*H*4);u(Q,function(he){var de=he.gl,Le=he.withTexture,Fe=he.withTextureFramebuffer;Le("readable",function(L,we){de.texImage2D(de.TEXTURE_2D,0,de.RGBA,Y,H,0,de.RGBA,de.UNSIGNED_BYTE,null),Fe(L,we,function(De){I(Y,H,F,X,ie,ne,de,De,0,0,0),de.readPixels(0,0,Y,H,de.RGBA,de.UNSIGNED_BYTE,k)})})});for(var ee=new Uint8Array(Y*H),me=0,pe=0;me<k.length;me+=4)ee[pe++]=k[me];return ee}function D(Y,H,F,X,ie,ne,Q,G,k,ee){ne===void 0&&(ne=1),G===void 0&&(G=0),k===void 0&&(k=0),ee===void 0&&(ee=0),I(Y,H,F,X,ie,ne,Q,null,G,k,ee)}function I(Y,H,F,X,ie,ne,Q,G,k,ee,me){ne===void 0&&(ne=1),k===void 0&&(k=0),ee===void 0&&(ee=0),me===void 0&&(me=0),U(Q);var pe=[];r(F,function(he,de,Le,Fe){pe.push(he,de,Le,Fe)}),pe=new Float32Array(pe),u(Q,function(he){var de=he.gl,Le=he.isWebGL2,Fe=he.getExtension,L=he.withProgram,we=he.withTexture,De=he.withTextureFramebuffer,ve=he.handleContextLoss;if(we("rawDistances",function(fe,Ae){(Y!==fe._lastWidth||H!==fe._lastHeight)&&de.texImage2D(de.TEXTURE_2D,0,de.RGBA,fe._lastWidth=Y,fe._lastHeight=H,0,de.RGBA,de.UNSIGNED_BYTE,null),L("main",v,y,function($){var be=$.setAttribute,A=$.setUniform,M=!Le&&Fe("ANGLE_instanced_arrays"),O=!Le&&Fe("EXT_blend_minmax");be("aUV",2,de.STATIC_DRAW,0,E),be("aLineSegment",4,de.DYNAMIC_DRAW,1,pe),A.apply(void 0,["4f","uGlyphBounds"].concat(X)),A("1f","uMaxDistance",ie),A("1f","uExponent",ne),De(fe,Ae,function(se){de.enable(de.BLEND),de.colorMask(!0,!0,!0,!0),de.viewport(0,0,Y,H),de.scissor(0,0,Y,H),de.blendFunc(de.ONE,de.ONE),de.blendEquationSeparate(de.FUNC_ADD,Le?de.MAX:O.MAX_EXT),de.clear(de.COLOR_BUFFER_BIT),Le?de.drawArraysInstanced(de.TRIANGLES,0,3,pe.length/4):M.drawArraysInstancedANGLE(de.TRIANGLES,0,3,pe.length/4)})}),L("post",s,T,function($){$.setAttribute("aUV",2,de.STATIC_DRAW,0,E),$.setUniform("1i","tex",Ae),de.bindFramebuffer(de.FRAMEBUFFER,G),de.disable(de.BLEND),de.colorMask(me===0,me===1,me===2,me===3),de.viewport(k,ee,Y,H),de.scissor(k,ee,Y,H),de.drawArrays(de.TRIANGLES,0,3)})}),de.isContextLost())throw ve(),new Error("webgl context lost")})}function z(Y){var H=!Y||Y===w?g:Y.canvas||Y,F=b.get(H);if(F===void 0){C=!0;var X=null;try{var ie=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],ne=P(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,Y);F=ne&&ie.length===ne.length&&ne.every(function(Q,G){return Q===ie[G]}),F||(X="bad trial run results",console.info(ie,ne))}catch(Q){F=!1,X=Q.message}X&&console.warn("WebGL SDF generation not supported:",X),C=!1,b.set(H,F)}return F}var B=Object.freeze({__proto__:null,generate:P,generateIntoCanvas:D,generateIntoFramebuffer:I,isSupported:z});function Z(Y,H,F,X,ie,ne){ie===void 0&&(ie=Math.max(X[2]-X[0],X[3]-X[1])/2),ne===void 0&&(ne=1);try{return P.apply(B,arguments)}catch(Q){return console.info("WebGL SDF generation failed, falling back to JS",Q),_.apply(S,arguments)}}function W(Y,H,F,X,ie,ne,Q,G,k,ee){ie===void 0&&(ie=Math.max(X[2]-X[0],X[3]-X[1])/2),ne===void 0&&(ne=1),G===void 0&&(G=0),k===void 0&&(k=0),ee===void 0&&(ee=0);try{return D.apply(B,arguments)}catch(me){return console.info("WebGL SDF generation failed, falling back to JS",me),x.apply(S,arguments)}}return e.forEachPathCommand=i,e.generate=Z,e.generateIntoCanvas=W,e.javascript=S,e.pathToLineSegments=r,e.webgl=B,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return a}function aS(){var a=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(ve,fe){n[ve]=1<<fe+1,i[n[ve]]=ve}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,s=n.L|n.R|n.AL,o=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,u=null;function f(){if(!u){u=new Map;var ve=function(Ae){if(t.hasOwnProperty(Ae)){var $=0;t[Ae].split(",").forEach(function(be){var A=be.split("+"),M=A[0],O=A[1];M=parseInt(M,36),O=O?parseInt(O,36):0,u.set($+=M,n[Ae]);for(var se=0;se<O;se++)u.set(++$,n[Ae])})}};for(var fe in t)ve(fe)}}function h(ve){return f(),u.get(ve.codePointAt(0))||n.L}function d(ve){return i[h(ve)]}var _={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function x(ve,fe){var Ae=36,$=0,be=new Map,A=fe&&new Map,M;return ve.split(",").forEach(function O(se){if(se.indexOf("+")!==-1)for(var te=+se;te--;)O(M);else{M=se;var q=se.split(">"),Se=q[0],_e=q[1];Se=String.fromCodePoint($+=parseInt(Se,Ae)),_e=String.fromCodePoint($+=parseInt(_e,Ae)),be.set(Se,_e),fe&&A.set(_e,Se)}}),{map:be,reverseMap:A}}var p,m,S;function v(){if(!p){var ve=x(_.pairs,!0),fe=ve.map,Ae=ve.reverseMap;p=fe,m=Ae,S=x(_.canonical,!1).map}}function y(ve){return v(),p.get(ve)||null}function T(ve){return v(),m.get(ve)||null}function E(ve){return v(),S.get(ve)||null}var w=n.L,C=n.R,g=n.EN,b=n.ES,U=n.ET,P=n.AN,D=n.CS,I=n.B,z=n.S,B=n.ON,Z=n.BN,W=n.NSM,Y=n.AL,H=n.LRO,F=n.RLO,X=n.LRE,ie=n.RLE,ne=n.PDF,Q=n.LRI,G=n.RLI,k=n.FSI,ee=n.PDI;function me(ve,fe){for(var Ae=125,$=new Uint32Array(ve.length),be=0;be<ve.length;be++)$[be]=h(ve[be]);var A=new Map;function M(on,Yn){var ln=$[on];$[on]=Yn,A.set(ln,A.get(ln)-1),ln&o&&A.set(o,A.get(o)-1),A.set(Yn,(A.get(Yn)||0)+1),Yn&o&&A.set(o,(A.get(o)||0)+1)}for(var O=new Uint8Array(ve.length),se=new Map,te=[],q=null,Se=0;Se<ve.length;Se++)q||te.push(q={start:Se,end:ve.length-1,level:fe==="rtl"?1:fe==="ltr"?0:Af(Se,!1)}),$[Se]&I&&(q.end=Se,q=null);for(var _e=ie|X|F|H|r|ee|ne|I,Ce=function(on){return on+(on&1?1:2)},Ee=function(on){return on+(on&1?2:1)},oe=0;oe<te.length;oe++){q=te[oe];var le=[{_level:q.level,_override:0,_isolate:0}],ge=void 0,Re=0,ye=0,ze=0;A.clear();for(var N=q.start;N<=q.end;N++){var ce=$[N];if(ge=le[le.length-1],A.set(ce,(A.get(ce)||0)+1),ce&o&&A.set(o,(A.get(o)||0)+1),ce&_e)if(ce&(ie|X)){O[N]=ge._level;var xe=(ce===ie?Ee:Ce)(ge._level);xe<=Ae&&!Re&&!ye?le.push({_level:xe,_override:0,_isolate:0}):Re||ye++}else if(ce&(F|H)){O[N]=ge._level;var Te=(ce===F?Ee:Ce)(ge._level);Te<=Ae&&!Re&&!ye?le.push({_level:Te,_override:ce&F?C:w,_isolate:0}):Re||ye++}else if(ce&r){ce&k&&(ce=Af(N+1,!0)===1?G:Q),O[N]=ge._level,ge._override&&M(N,ge._override);var ue=(ce===G?Ee:Ce)(ge._level);ue<=Ae&&Re===0&&ye===0?(ze++,le.push({_level:ue,_override:0,_isolate:1,_isolInitIndex:N})):Re++}else if(ce&ee){if(Re>0)Re--;else if(ze>0){for(ye=0;!le[le.length-1]._isolate;)le.pop();var re=le[le.length-1]._isolInitIndex;re!=null&&(se.set(re,N),se.set(N,re)),le.pop(),ze--}ge=le[le.length-1],O[N]=ge._level,ge._override&&M(N,ge._override)}else ce&ne?(Re===0&&(ye>0?ye--:!ge._isolate&&le.length>1&&(le.pop(),ge=le[le.length-1])),O[N]=ge._level):ce&I&&(O[N]=q.level);else O[N]=ge._level,ge._override&&ce!==Z&&M(N,ge._override)}for(var Pe=[],Ne=null,Be=q.start;Be<=q.end;Be++){var We=$[Be];if(!(We&l)){var pt=O[Be],ot=We&r,wt=We===ee;Ne&&pt===Ne._level?(Ne._end=Be,Ne._endsWithIsolInit=ot):Pe.push(Ne={_start:Be,_end:Be,_level:pt,_startsWithPDI:wt,_endsWithIsolInit:ot})}}for(var sn=[],Wn=0;Wn<Pe.length;Wn++){var zt=Pe[Wn];if(!zt._startsWithPDI||zt._startsWithPDI&&!se.has(zt._start)){for(var Fn=[Ne=zt],ri=void 0;Ne&&Ne._endsWithIsolInit&&(ri=se.get(Ne._end))!=null;)for(var Nn=Wn+1;Nn<Pe.length;Nn++)if(Pe[Nn]._start===ri){Fn.push(Ne=Pe[Nn]);break}for(var Ct=[],ai=0;ai<Fn.length;ai++)for(var lr=Fn[ai],Or=lr._start;Or<=lr._end;Or++)Ct.push(Or);for(var Us=O[Ct[0]],Ds=q.level,Br=Ct[0]-1;Br>=0;Br--)if(!($[Br]&l)){Ds=O[Br];break}var La=Ct[Ct.length-1],hl=O[La],Ls=q.level;if(!($[La]&r)){for(var kr=La+1;kr<=q.end;kr++)if(!($[kr]&l)){Ls=O[kr];break}}sn.push({_seqIndices:Ct,_sosType:Math.max(Ds,Us)%2?C:w,_eosType:Math.max(Ls,hl)%2?C:w})}}for(var R=0;R<sn.length;R++){var K=sn[R],V=K._seqIndices,ae=K._sosType,J=K._eosType,Me=O[V[0]]&1?C:w;if(A.get(W))for(var Ie=0;Ie<V.length;Ie++){var ke=V[Ie];if($[ke]&W){for(var Oe=ae,He=Ie-1;He>=0;He--)if(!($[V[He]]&l)){Oe=$[V[He]];break}M(ke,Oe&(r|ee)?B:Oe)}}if(A.get(g))for(var Xe=0;Xe<V.length;Xe++){var Ge=V[Xe];if($[Ge]&g)for(var Ke=Xe-1;Ke>=-1;Ke--){var rt=Ke===-1?ae:$[V[Ke]];if(rt&s){rt===Y&&M(Ge,P);break}}}if(A.get(Y))for(var mt=0;mt<V.length;mt++){var xt=V[mt];$[xt]&Y&&M(xt,C)}if(A.get(b)||A.get(D))for(var et=1;et<V.length-1;et++){var Ve=V[et];if($[Ve]&(b|D)){for(var at=0,Je=0,Gt=et-1;Gt>=0&&(at=$[V[Gt]],!!(at&l));Gt--);for(var si=et+1;si<V.length&&(Je=$[V[si]],!!(Je&l));si++);at===Je&&($[Ve]===b?at===g:at&(g|P))&&M(Ve,at)}}if(A.get(g))for(var _t=0;_t<V.length;_t++){var cr=V[_t];if($[cr]&g){for(var lt=_t-1;lt>=0&&$[V[lt]]&(U|l);lt--)M(V[lt],g);for(_t++;_t<V.length&&$[V[_t]]&(U|l|g);_t++)$[V[_t]]!==g&&M(V[_t],g)}}if(A.get(U)||A.get(b)||A.get(D))for(var Rt=0;Rt<V.length;Rt++){var en=V[Rt];if($[en]&(U|b|D)){M(en,B);for(var Pt=Rt-1;Pt>=0&&$[V[Pt]]&l;Pt--)M(V[Pt],B);for(var It=Rt+1;It<V.length&&$[V[It]]&l;It++)M(V[It],B)}}if(A.get(g))for(var ur=0,oi=ae;ur<V.length;ur++){var xf=V[ur],dl=$[xf];dl&g?oi===w&&M(xf,w):dl&s&&(oi=dl)}if(A.get(o)){var Ia=C|g|P,_f=Ia|w,Is=[];{for(var zr=[],Gr=0;Gr<V.length;Gr++)if($[V[Gr]]&o){var Fa=ve[V[Gr]],gf=void 0;if(y(Fa)!==null)if(zr.length<63)zr.push({char:Fa,seqIndex:Gr});else break;else if((gf=T(Fa))!==null)for(var Na=zr.length-1;Na>=0;Na--){var pl=zr[Na].char;if(pl===gf||pl===T(E(Fa))||y(E(pl))===Fa){Is.push([zr[Na].seqIndex,Gr]),zr.length=Na;break}}}Is.sort(function(on,Yn){return on[0]-Yn[0]})}for(var ml=0;ml<Is.length;ml++){for(var vf=Is[ml],Fs=vf[0],xl=vf[1],Sf=!1,Xn=0,_l=Fs+1;_l<xl;_l++){var bf=V[_l];if($[bf]&_f){Sf=!0;var yf=$[bf]&Ia?C:w;if(yf===Me){Xn=yf;break}}}if(Sf&&!Xn){Xn=ae;for(var gl=Fs-1;gl>=0;gl--){var Mf=V[gl];if($[Mf]&_f){var Tf=$[Mf]&Ia?C:w;Tf!==Me?Xn=Tf:Xn=Me;break}}}if(Xn){if($[V[Fs]]=$[V[xl]]=Xn,Xn!==Me){for(var Oa=Fs+1;Oa<V.length;Oa++)if(!($[V[Oa]]&l)){h(ve[V[Oa]])&W&&($[V[Oa]]=Xn);break}}if(Xn!==Me){for(var Ba=xl+1;Ba<V.length;Ba++)if(!($[V[Ba]]&l)){h(ve[V[Ba]])&W&&($[V[Ba]]=Xn);break}}}}for(var Oi=0;Oi<V.length;Oi++)if($[V[Oi]]&o){for(var Ef=Oi,vl=Oi,Sl=ae,ka=Oi-1;ka>=0;ka--)if($[V[ka]]&l)Ef=ka;else{Sl=$[V[ka]]&Ia?C:w;break}for(var wf=J,za=Oi+1;za<V.length;za++)if($[V[za]]&(o|l))vl=za;else{wf=$[V[za]]&Ia?C:w;break}for(var bl=Ef;bl<=vl;bl++)$[V[bl]]=Sl===wf?Sl:Me;Oi=vl}}}for(var Sn=q.start;Sn<=q.end;Sn++){var _0=O[Sn],Ns=$[Sn];if(_0&1?Ns&(w|g|P)&&O[Sn]++:Ns&C?O[Sn]++:Ns&(P|g)&&(O[Sn]+=2),Ns&l&&(O[Sn]=Sn===0?q.level:O[Sn-1]),Sn===q.end||h(ve[Sn])&(z|I))for(var Os=Sn;Os>=0&&h(ve[Os])&c;Os--)O[Os]=q.level}}return{levels:O,paragraphs:te};function Af(on,Yn){for(var ln=on;ln<ve.length;ln++){var Bi=$[ln];if(Bi&(C|Y))return 1;if(Bi&(I|w)||Yn&&Bi===ee)return 0;if(Bi&r){var Cf=g0(ln);ln=Cf===-1?ve.length:Cf}}return 0}function g0(on){for(var Yn=1,ln=on+1;ln<ve.length;ln++){var Bi=$[ln];if(Bi&I)break;if(Bi&ee){if(--Yn===0)return ln}else Bi&r&&Yn++}return-1}}var pe="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",he;function de(){if(!he){var ve=x(pe,!0),fe=ve.map,Ae=ve.reverseMap;Ae.forEach(function($,be){fe.set(be,$)}),he=fe}}function Le(ve){return de(),he.get(ve)||null}function Fe(ve,fe,Ae,$){var be=ve.length;Ae=Math.max(0,Ae==null?0:+Ae),$=Math.min(be-1,$==null?be-1:+$);for(var A=new Map,M=Ae;M<=$;M++)if(fe[M]&1){var O=Le(ve[M]);O!==null&&A.set(M,O)}return A}function L(ve,fe,Ae,$){var be=ve.length;Ae=Math.max(0,Ae==null?0:+Ae),$=Math.min(be-1,$==null?be-1:+$);var A=[];return fe.paragraphs.forEach(function(M){var O=Math.max(Ae,M.start),se=Math.min($,M.end);if(O<se){for(var te=fe.levels.slice(O,se+1),q=se;q>=O&&h(ve[q])&c;q--)te[q]=M.level;for(var Se=M.level,_e=1/0,Ce=0;Ce<te.length;Ce++){var Ee=te[Ce];Ee>Se&&(Se=Ee),Ee<_e&&(_e=Ee|1)}for(var oe=Se;oe>=_e;oe--)for(var le=0;le<te.length;le++)if(te[le]>=oe){for(var ge=le;le+1<te.length&&te[le+1]>=oe;)le++;le>ge&&A.push([ge+O,le+O])}}}),A}function we(ve,fe,Ae,$){var be=De(ve,fe,Ae,$),A=[].concat(ve);return be.forEach(function(M,O){A[O]=(fe.levels[M]&1?Le(ve[M]):null)||ve[M]}),A.join("")}function De(ve,fe,Ae,$){for(var be=L(ve,fe,Ae,$),A=[],M=0;M<ve.length;M++)A[M]=M;return be.forEach(function(O){for(var se=O[0],te=O[1],q=A.slice(se,te+1),Se=q.length;Se--;)A[te-Se]=q[Se]}),A}return e.closingToOpeningBracket=T,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=E,e.getEmbeddingLevels=me,e.getMirroredCharacter=Le,e.getMirroredCharactersMap=Fe,e.getReorderSegments=L,e.getReorderedIndices=De,e.getReorderedString=we,e.openingToClosingBracket=y,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return a}const Jd=/\bvoid\s+main\s*\(\s*\)\s*{/g;function su(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=Ze[i];return r?su(r):n}return a.replace(e,t)}const Wt=[];for(let a=0;a<256;a++)Wt[a]=(a<16?"0":"")+a.toString(16);function sS(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[a&255]+Wt[a>>8&255]+Wt[a>>16&255]+Wt[a>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toUpperCase()}const _r=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a},oS=Date.now(),Ch=new WeakMap,Rh=new Map;let lS=1e10;function ou(a,e){const t=hS(e);let n=Ch.get(a);if(n||Ch.set(a,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c,u){a.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=Rh[f];if(!h){const d=cS(this,c,e,t);h=Rh[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,_r(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-oS}}),this[i]&&this[i](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:lS++}),u.uuid=sS(),u.uniforms=_r({},c.uniforms,e.uniforms),u.defines=_r({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=_r({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},type:{get:()=>a.type,set:c=>{a.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(_r(this.extensions,c.extensions),_r(this.defines,c.defines),_r(this.uniforms,Ko.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=ou(a.isDerivedMaterial?a.getDepthMaterial():new zd({depthPacking:wd}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=ou(a.isDerivedMaterial?a.getDistanceMaterial():new Gd,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return n[t]=s,new s}function cS(a,{vertexShader:e,fragmentShader:t},n,i){let{vertexDefs:r,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:_}=n;if(r=r||"",s=s||"",o=o||"",c=c||"",u=u||"",f=f||"",(l||d)&&(e=su(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=su(t)),d){let x=d({vertexShader:e,fragmentShader:t});e=x.vertexShader,t=x.fragmentShader}if(h){let x=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(x.push(p),"")),f=`${h}
${x.join(`
`)}
${f}`}if(_){const x=`
uniform float ${_};
`;r=x+r,c=x+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,r=`${r}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(x,p,m,S)=>/\battribute\s+vec[23]\s+$/.test(S.substr(0,m))?p:`troika_${p}_${i}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=Ph(e,i,r,s,o),t=Ph(t,i,c,u,f),{vertexShader:e,fragmentShader:t}}function Ph(a,e,t,n,i){return(n||i||t)&&(a=a.replace(Jd,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),a}function uS(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let fS=0;const Uh=new Map;function hS(a){const e=JSON.stringify(a,uS);let t=Uh.get(e);return t==null&&Uh.set(e,t=++fS),t}function dS(){return typeof window>"u"&&(self.window=self),(function(a){var e={parse:function(i){var r=e._bin,s=new Uint8Array(i);if(r.readASCII(s,0,4)=="ttcf"){var o=4;r.readUshort(s,o),o+=2,r.readUshort(s,o),o+=2;var l=r.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var f=r.readUint(s,o);o+=4,c.push(e._readFont(s,f))}return c}return[e._readFont(s,0)]},_readFont:function(i,r){var s=e._bin,o=r;s.readFixed(i,r),r+=4;var l=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:i,_offset:o},f={},h=0;h<l;h++){var d=s.readASCII(i,r,4);r+=4,s.readUint(i,r),r+=4;var _=s.readUint(i,r);r+=4;var x=s.readUint(i,r);r+=4,f[d]={offset:_,length:x}}for(h=0;h<c.length;h++){var p=c[h];f[p]&&(u[p.trim()]=e[p.trim()].parse(i,f[p].offset,f[p].length,u))}return u},_tabOffset:function(i,r,s){for(var o=e._bin,l=o.readUshort(i,s+4),c=s+12,u=0;u<l;u++){var f=o.readASCII(i,c,4);c+=4,o.readUint(i,c),c+=4;var h=o.readUint(i,c);if(c+=4,o.readUint(i,c),c+=4,f==r)return h}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(i,r+2*l));return o},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(i[r+l]);return o},readUnicode:function(i,r,s){for(var o="",l=0;l<s;l++){var c=i[r++]<<8|i[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,s){var o=e._bin._tdec;return o&&r==0&&s==i.length?o.decode(i):e._bin.readASCII(i,r,s)},readBytes:function(i,r,s){for(var o=[],l=0;l<s;l++)o.push(i[r+l]);return o},readASCIIArray:function(i,r,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(i[r+l]));return o},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,s,o,l){var c=e._bin,u={},f=r;c.readFixed(i,r),r+=4;var h=c.readUshort(i,r);r+=2;var d=c.readUshort(i,r);r+=2;var _=c.readUshort(i,r);return r+=2,u.scriptList=e._lctf.readScriptList(i,f+h),u.featureList=e._lctf.readFeatureList(i,f+d),u.lookupList=e._lctf.readLookupList(i,f+_,l),u},e._lctf.readLookupList=function(i,r,s){var o=e._bin,l=r,c=[],u=o.readUshort(i,r);r+=2;for(var f=0;f<u;f++){var h=o.readUshort(i,r);r+=2;var d=e._lctf.readLookupTable(i,l+h,s);c.push(d)}return c},e._lctf.readLookupTable=function(i,r,s){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(i,r),r+=2,c.flag=o.readUshort(i,r),r+=2;var u=o.readUshort(i,r);r+=2;for(var f=c.ltype,h=0;h<u;h++){var d=o.readUshort(i,r);r+=2;var _=s(i,f,l+d,c);c.tabs.push(_)}return c},e._lctf.numOfOnes=function(i){for(var r=0,s=0;s<32;s++)(i>>>s&1)!=0&&r++;return r},e._lctf.readClassDef=function(i,r){var s=e._bin,o=[],l=s.readUshort(i,r);if(r+=2,l==1){var c=s.readUshort(i,r);r+=2;var u=s.readUshort(i,r);r+=2;for(var f=0;f<u;f++)o.push(c+f),o.push(c+f),o.push(s.readUshort(i,r)),r+=2}if(l==2){var h=s.readUshort(i,r);for(r+=2,f=0;f<h;f++)o.push(s.readUshort(i,r)),r+=2,o.push(s.readUshort(i,r)),r+=2,o.push(s.readUshort(i,r)),r+=2}return o},e._lctf.getInterval=function(i,r){for(var s=0;s<i.length;s+=3){var o=i[s],l=i[s+1];if(i[s+2],o<=r&&r<=l)return s}return-1},e._lctf.readCoverage=function(i,r){var s=e._bin,o={};o.fmt=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);return r+=2,o.fmt==1&&(o.tab=s.readUshorts(i,r,l)),o.fmt==2&&(o.tab=s.readUshorts(i,r,3*l)),o},e._lctf.coverageIndex=function(i,r){var s=i.tab;if(i.fmt==1)return s.indexOf(r);if(i.fmt==2){var o=e._lctf.getInterval(s,r);if(o!=-1)return s[o+2]+(r-s[o])}return-1},e._lctf.readFeatureList=function(i,r){var s=e._bin,o=r,l=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=s.readASCII(i,r,4);r+=4;var h=s.readUshort(i,r);r+=2;var d=e._lctf.readFeatureTable(i,o+h);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(i,r){var s=e._bin,o=r,l={},c=s.readUshort(i,r);r+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(i,r);r+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(s.readUshort(i,r+2*f));return l},e._lctf.readScriptList=function(i,r){var s=e._bin,o=r,l={},c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=s.readASCII(i,r,4);r+=4;var h=s.readUshort(i,r);r+=2,l[f.trim()]=e._lctf.readScriptTable(i,o+h)}return l},e._lctf.readScriptTable=function(i,r){var s=e._bin,o=r,l={},c=s.readUshort(i,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(i,o+c));var u=s.readUshort(i,r);r+=2;for(var f=0;f<u;f++){var h=s.readASCII(i,r,4);r+=4;var d=s.readUshort(i,r);r+=2,l[h.trim()]=e._lctf.readLangSysTable(i,o+d)}return l},e._lctf.readLangSysTable=function(i,r){var s=e._bin,o={};s.readUshort(i,r),r+=2,o.reqFeature=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);return r+=2,o.features=s.readUshorts(i,r,l),o},e.CFF={},e.CFF.parse=function(i,r,s){var o=e._bin;(i=new Uint8Array(i.buffer,r,s))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(i,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var f=[];r=e.CFF.readIndex(i,r,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(i,r+f[u],r+f[u+1]));r+=f[f.length-1];var d=h[0],_=[];r=e.CFF.readIndex(i,r,_);var x=[];for(u=0;u<_.length-1;u++)x.push(o.readASCII(i,r+_[u],_[u+1]-_[u]));if(r+=_[_.length-1],e.CFF.readSubrs(i,r,d),d.CharStrings){r=d.CharStrings,_=[],r=e.CFF.readIndex(i,r,_);var p=[];for(u=0;u<_.length-1;u++)p.push(o.readBytes(i,r+_[u],_[u+1]-_[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var m=[];for(r=e.CFF.readIndex(i,r,m),d.FDArray=[],u=0;u<m.length-1;u++){var S=e.CFF.readDict(i,r+m[u],r+m[u+1]);e.CFF._readFDict(i,S,x),d.FDArray.push(S)}r+=m[m.length-1],r=d.FDSelect,d.FDSelect=[];var v=i[r];if(r++,v!=3)throw v;var y=o.readUshort(i,r);for(r+=2,u=0;u<y+1;u++)d.FDSelect.push(o.readUshort(i,r),i[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(i,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(i,d.charset,d.CharStrings.length)),e.CFF._readFDict(i,d,x),d},e.CFF._readFDict=function(i,r,s){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(i,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=s[r[l]-426+35])},e.CFF.readSubrs=function(i,r,s){var o=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var f=0;f<l.length-1;f++)s.Subrs.push(o.readBytes(i,r+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var s=0;s<i.charset.length;s++)if(i.charset[s]==r)return s;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,s){e._bin;var o=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var u=0;u<c;u++)o.push(i[r+u]);return o},e.CFF.readCharset=function(i,r,s){var o=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var u=0;u<s;u++){var f=o.readUshort(i,r);r+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){f=o.readUshort(i,r),r+=2;var h=0;for(c==1?(h=i[r],r++):(h=o.readUshort(i,r),r+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(i,r,s){var o=e._bin,l=o.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var u=0;u<l;u++)s.push(i[r+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(i,r+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(i,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,s){var o=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=o.readShort(i,r+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=o.readInt(i,r+1)/65535,u=5),s.val=h??"o"+f,s.size=u},e.CFF.readCharString=function(i,r,s){for(var o=r+s,l=e._bin,c=[];r<o;){var u=i[r],f=i[r+1];i[r+2],i[r+3],i[r+4];var h=1,d=null,_=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(_=l.readShort(i,r+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(_=u-139,h=1),247<=u&&u<=250&&(_=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(_=256*-(u-251)-f-108,h=2),u==255&&(_=l.readInt(i,r+1)/65535,h=5),c.push(_??"o"+d),r+=h}return c},e.CFF.readDict=function(i,r,s){for(var o=e._bin,l={},c=[];r<s;){var u=i[r],f=i[r+1];i[r+2],i[r+3],i[r+4];var h=1,d=null,_=null;if(u==28&&(_=o.readShort(i,r+1),h=3),u==29&&(_=o.readInt(i,r+1),h=5),32<=u&&u<=246&&(_=u-139,h=1),247<=u&&u<=250&&(_=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(_=256*-(u-251)-f-108,h=2),u==255)throw _=o.readInt(i,r+1)/65535,h=5,"unknown number";if(u==30){var x=[];for(h=1;;){var p=i[r+h];h++;var m=p>>4,S=15&p;if(m!=15&&x.push(m),S!=15&&x.push(S),S==15)break}for(var v="",y=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],T=0;T<x.length;T++)v+=y[x[T]];_=parseFloat(v)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(_),r+=h}return l},e.cmap={},e.cmap.parse=function(i,r,s){i=new Uint8Array(i.buffer,r,s),r=0;var o=e._bin,l={};o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=o.readUshort(i,r);r+=2;var d=o.readUshort(i,r);r+=2;var _=o.readUint(i,r);r+=4;var x="p"+h+"e"+d,p=u.indexOf(_);if(p==-1){var m;p=l.tables.length,u.push(_);var S=o.readUshort(i,_);S==0?m=e.cmap.parse0(i,_):S==4?m=e.cmap.parse4(i,_):S==6?m=e.cmap.parse6(i,_):S==12?m=e.cmap.parse12(i,_):console.debug("unknown format: "+S,h,d,_),l.tables.push(m)}if(l[x]!=null)throw"multiple tables for one platform+encoding";l[x]=p}return l},e.cmap.parse0=function(i,r){var s=e._bin,o={};o.format=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(i[r+c]);return o},e.cmap.parse4=function(i,r){var s=e._bin,o=r,l={};l.format=s.readUshort(i,r),r+=2;var c=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2;var u=s.readUshort(i,r);r+=2;var f=u/2;l.searchRange=s.readUshort(i,r),r+=2,l.entrySelector=s.readUshort(i,r),r+=2,l.rangeShift=s.readUshort(i,r),r+=2,l.endCount=s.readUshorts(i,r,f),r+=2*f,r+=2,l.startCount=s.readUshorts(i,r,f),r+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(s.readShort(i,r)),r+=2;for(l.idRangeOffset=s.readUshorts(i,r,f),r+=2*f,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(s.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var s=e._bin,o={};o.format=s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,o.firstCode=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(i,r)),r+=2;return o},e.cmap.parse12=function(i,r){var s=e._bin,o={};o.format=s.readUshort(i,r),r+=2,r+=2,s.readUint(i,r),r+=4,s.readUint(i,r),r+=4;var l=s.readUint(i,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,f=s.readUint(i,u+0),h=s.readUint(i,u+4),d=s.readUint(i,u+8);o.groups.push([f,h,d])}return o},e.glyf={},e.glyf.parse=function(i,r,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var s=e._bin,o=i._data,l=e._tabOffset(o,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var f=s.readUshort(o,l);if(l+=2,o.length-l<f)return null;c.instructions=s.readBytes(o,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var _=o[l];l++;for(var x=0;x<_;x++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var S=0,v=0;for(u=0;u<h;u++)S+=c.xs[u],v+=c.ys[u],c.xs[u]=S,c.ys[u]=v}else{var y;c.parts=[];do{y=s.readUshort(o,l),l+=2;var T={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(T),T.glyphIndex=s.readUshort(o,l),l+=2,1&y){var E=s.readShort(o,l);l+=2;var w=s.readShort(o,l);l+=2}else E=s.readInt8(o,l),l++,w=s.readInt8(o,l),l++;2&y?(T.m.tx=E,T.m.ty=w):(T.p1=E,T.p2=w),8&y?(T.m.a=T.m.d=s.readF2dot14(o,l),l+=2):64&y?(T.m.a=s.readF2dot14(o,l),l+=2,T.m.d=s.readF2dot14(o,l),l+=2):128&y&&(T.m.a=s.readF2dot14(o,l),l+=2,T.m.b=s.readF2dot14(o,l),l+=2,T.m.c=s.readF2dot14(o,l),l+=2,T.m.d=s.readF2dot14(o,l),l+=2)}while(32&y);if(256&y){var C=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<C;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(i,r,s,o){var l=r;r+=4;var c=e._bin.readUshort(i,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(i,l+c)}},e.GPOS={},e.GPOS.parse=function(i,r,s,o){return e._lctf.parse(i,r,s,o,e.GPOS.subt)},e.GPOS.subt=function(i,r,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(i,s),s+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var f=l.readUshort(i,s);s+=2,u.coverage=e._lctf.readCoverage(i,f+c)}if(r==1&&u.fmt==1){var h=l.readUshort(i,s);s+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(i,s,h))}else if(r==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(i,s),s+=2;var d=l.readUshort(i,s);s+=2;var _=e._lctf.numOfOnes(h),x=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(i,s);s+=2;for(var m=0;m<p;m++){var S=c+l.readUshort(i,s);s+=2;var v=l.readUshort(i,S);S+=2;for(var y=[],T=0;T<v;T++){var E=l.readUshort(i,S);S+=2,h!=0&&(P=e.GPOS.readValueRecord(i,S,h),S+=2*_),d!=0&&(D=e.GPOS.readValueRecord(i,S,d),S+=2*x),y.push({gid2:E,val1:P,val2:D})}u.pairsets.push(y)}}if(u.fmt==2){var w=l.readUshort(i,s);s+=2;var C=l.readUshort(i,s);s+=2;var g=l.readUshort(i,s);s+=2;var b=l.readUshort(i,s);for(s+=2,u.classDef1=e._lctf.readClassDef(i,c+w),u.classDef2=e._lctf.readClassDef(i,c+C),u.matrix=[],m=0;m<g;m++){var U=[];for(T=0;T<b;T++){var P=null,D=null;h!=0&&(P=e.GPOS.readValueRecord(i,s,h),s+=2*_),d!=0&&(D=e.GPOS.readValueRecord(i,s,d),s+=2*x),U.push({val1:P,val2:D})}u.matrix.push(U)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(i,l.readUshort(i,s)+c),u.baseCoverage=e._lctf.readCoverage(i,l.readUshort(i,s+2)+c),u.markClassCount=l.readUshort(i,s+4),u.markArray=e.GPOS.readMarkArray(i,l.readUshort(i,s+6)+c),u.baseArray=e.GPOS.readBaseArray(i,l.readUshort(i,s+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(i,l.readUshort(i,s)+c),u.mark2Coverage=e._lctf.readCoverage(i,l.readUshort(i,s+2)+c),u.markClassCount=l.readUshort(i,s+4),u.mark1Array=e.GPOS.readMarkArray(i,l.readUshort(i,s+6)+c),u.mark2Array=e.GPOS.readBaseArray(i,l.readUshort(i,s+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var I=l.readUshort(i,s);s+=2;var z=l.readUint(i,s);if(s+=4,o.ltype==9)o.ltype=I;else if(o.ltype!=I)throw"invalid extension substitution";return e.GPOS.subt(i,o.ltype,c+z)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,r,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(i,r):0),r+=1&s?2:0,l.push(2&s?o.readShort(i,r):0),r+=2&s?2:0,l.push(4&s?o.readShort(i,r):0),r+=4&s?2:0,l.push(8&s?o.readShort(i,r):0),r+=8&s?2:0,l},e.GPOS.readBaseArray=function(i,r,s){var o=e._bin,l=[],c=r,u=o.readUshort(i,r);r+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<s;d++)h.push(e.GPOS.readAnchorRecord(i,c+o.readUshort(i,r))),r+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(i,r){var s=e._bin,o=[],l=r,c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(i,s.readUshort(i,r+2)+l);f.markClass=s.readUshort(i,r),o.push(f),r+=4}return o},e.GPOS.readAnchorRecord=function(i,r){var s=e._bin,o={};return o.fmt=s.readUshort(i,r),o.x=s.readShort(i,r+2),o.y=s.readShort(i,r+4),o},e.GSUB={},e.GSUB.parse=function(i,r,s,o){return e._lctf.parse(i,r,s,o,e.GSUB.subt)},e.GSUB.subt=function(i,r,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(i,s),s+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var f=l.readUshort(i,s);s+=2,u.coverage=e._lctf.readCoverage(i,c+f)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,s),s+=2;else if(u.fmt==2){var h=l.readUshort(i,s);s+=2,u.newg=l.readUshorts(i,s,h),s+=2*u.newg.length}}else if(r==2&&u.fmt==1){h=l.readUshort(i,s),s+=2,u.seqs=[];for(var d=0;d<h;d++){var _=l.readUshort(i,s)+c;s+=2;var x=l.readUshort(i,_);u.seqs.push(l.readUshorts(i,_+2,x))}}else if(r==4)for(u.vals=[],h=l.readUshort(i,s),s+=2,d=0;d<h;d++){var p=l.readUshort(i,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+p))}else if(r==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(i,s);s+=2,u.cDef=e._lctf.readClassDef(i,c+m),u.scset=[];var S=l.readUshort(i,s);for(s+=2,d=0;d<S;d++){var v=l.readUshort(i,s);s+=2,u.scset.push(v==0?null:e.GSUB.readSubClassSet(i,c+v))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(i,s),s+=2;for(var y=[],T=0;T<h;T++)y.push(e._lctf.readCoverage(i,c+l.readUshort(i,s+2*T)));s+=2*h,d==0&&(u.backCvg=y),d==1&&(u.inptCvg=y),d==2&&(u.ahedCvg=y)}h=l.readUshort(i,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,s,h)}}else{if(r==7&&u.fmt==1){var E=l.readUshort(i,s);s+=2;var w=l.readUint(i,s);if(s+=4,o.ltype==9)o.ltype=E;else if(o.ltype!=E)throw"invalid extension substitution";return e.GSUB.subt(i,o.ltype,c+w)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,r){var s=e._bin.readUshort,o=r,l=[],c=s(i,r);r+=2;for(var u=0;u<c;u++){var f=s(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,o+f))}return l},e.GSUB.readSubClassRule=function(i,r){var s=e._bin.readUshort,o={},l=s(i,r),c=s(i,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(i,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),o},e.GSUB.readSubstLookupRecords=function(i,r,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(i,r),o(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var s=e._bin,o=r,l=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=s.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,o+f))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(i,r);r+=2,c==1&&u--,o[l[c]]=s.readUshorts(i,r,u),r+=2*o[l[c]].length}return u=s.readUshort(i,r),r+=2,o.subst=s.readUshorts(i,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(i,r){var s=e._bin,o=r,l=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=s.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,o+f))}return l},e.GSUB.readLigature=function(i,r){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(i,r)),r+=2;return o},e.head={},e.head.parse=function(i,r,s){var o=e._bin,l={};return o.readFixed(i,r),r+=4,l.fontRevision=o.readFixed(i,r),r+=4,o.readUint(i,r),r+=4,o.readUint(i,r),r+=4,l.flags=o.readUshort(i,r),r+=2,l.unitsPerEm=o.readUshort(i,r),r+=2,l.created=o.readUint64(i,r),r+=8,l.modified=o.readUint64(i,r),r+=8,l.xMin=o.readShort(i,r),r+=2,l.yMin=o.readShort(i,r),r+=2,l.xMax=o.readShort(i,r),r+=2,l.yMax=o.readShort(i,r),r+=2,l.macStyle=o.readUshort(i,r),r+=2,l.lowestRecPPEM=o.readUshort(i,r),r+=2,l.fontDirectionHint=o.readShort(i,r),r+=2,l.indexToLocFormat=o.readShort(i,r),r+=2,l.glyphDataFormat=o.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,s){var o=e._bin,l={};return o.readFixed(i,r),r+=4,l.ascender=o.readShort(i,r),r+=2,l.descender=o.readShort(i,r),r+=2,l.lineGap=o.readShort(i,r),r+=2,l.advanceWidthMax=o.readUshort(i,r),r+=2,l.minLeftSideBearing=o.readShort(i,r),r+=2,l.minRightSideBearing=o.readShort(i,r),r+=2,l.xMaxExtent=o.readShort(i,r),r+=2,l.caretSlopeRise=o.readShort(i,r),r+=2,l.caretSlopeRun=o.readShort(i,r),r+=2,l.caretOffset=o.readShort(i,r),r+=2,r+=8,l.metricDataFormat=o.readShort(i,r),r+=2,l.numberOfHMetrics=o.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(u=l.readUshort(i,r),r+=2,f=l.readShort(i,r),r+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(i,r,s,o){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,s,o);var u=l.readUshort(i,r);r+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){r+=2,s=l.readUshort(i,r),r+=2;var d=l.readUshort(i,r);r+=2;var _=d>>>8;if((_&=15)!=0)throw"unknown kern table format: "+_;r=e.kern.readFormat0(i,r,f)}return f},e.kern.parseV1=function(i,r,s,o){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(i,r),r+=4;var h=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(i,r,u)}return u},e.kern.readFormat0=function(i,r,s){var o=e._bin,l=-1,c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2;for(var u=0;u<c;u++){var f=o.readUshort(i,r);r+=2;var h=o.readUshort(i,r);r+=2;var d=o.readShort(i,r);r+=2,f!=l&&(s.glyph1.push(f),s.rval.push({glyph2:[],vals:[]}));var _=s.rval[s.rval.length-1];_.glyph2.push(h),_.vals.push(d),l=f}return r},e.loca={},e.loca.parse=function(i,r,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,f=o.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(i,r+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(i,r+(h<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,s){var o=e._bin,l={},c=o.readUint(i,r);return r+=4,l.numGlyphs=o.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(i,r),r+=2,l.maxContours=o.readUshort(i,r),r+=2,l.maxCompositePoints=o.readUshort(i,r),r+=2,l.maxCompositeContours=o.readUshort(i,r),r+=2,l.maxZones=o.readUshort(i,r),r+=2,l.maxTwilightPoints=o.readUshort(i,r),r+=2,l.maxStorage=o.readUshort(i,r),r+=2,l.maxFunctionDefs=o.readUshort(i,r),r+=2,l.maxInstructionDefs=o.readUshort(i,r),r+=2,l.maxStackElements=o.readUshort(i,r),r+=2,l.maxSizeOfInstructions=o.readUshort(i,r),r+=2,l.maxComponentElements=o.readUshort(i,r),r+=2,l.maxComponentDepth=o.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,s){var o=e._bin,l={};o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=r+=2,d=0;d<c;d++){var _=o.readUshort(i,r);r+=2;var x=o.readUshort(i,r);r+=2;var p=o.readUshort(i,r);r+=2;var m=o.readUshort(i,r);r+=2;var S=o.readUshort(i,r);r+=2;var v=o.readUshort(i,r);r+=2;var y,T=f[m],E=h+12*c+v;if(_==0)y=o.readUnicode(i,E,S/2);else if(_==3&&x==0)y=o.readUnicode(i,E,S/2);else if(x==0)y=o.readASCII(i,E,S);else if(x==1)y=o.readUnicode(i,E,S/2);else if(x==3)y=o.readUnicode(i,E,S/2);else{if(_!=1)throw"unknown encoding "+x+", platformID: "+_;y=o.readASCII(i,E,S),console.debug("reading unknown MAC encoding "+x+" as ASCII")}var w="p"+_+","+p.toString(16);l[w]==null&&(l[w]={}),l[w][T!==void 0?T:m]=y,l[w]._lang=p}for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==1033)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==0)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==3084)return l[C];for(var C in l)if(l[C].postScriptName!=null)return l[C];for(var C in l){u=C;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,r,s){var o=e._bin.readUshort(i,r);r+=2;var l={};if(o==0)e["OS/2"].version0(i,r,l);else if(o==1)e["OS/2"].version1(i,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(i,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(i,r),r+=2,s.usWeightClass=o.readUshort(i,r),r+=2,s.usWidthClass=o.readUshort(i,r),r+=2,s.fsType=o.readUshort(i,r),r+=2,s.ySubscriptXSize=o.readShort(i,r),r+=2,s.ySubscriptYSize=o.readShort(i,r),r+=2,s.ySubscriptXOffset=o.readShort(i,r),r+=2,s.ySubscriptYOffset=o.readShort(i,r),r+=2,s.ySuperscriptXSize=o.readShort(i,r),r+=2,s.ySuperscriptYSize=o.readShort(i,r),r+=2,s.ySuperscriptXOffset=o.readShort(i,r),r+=2,s.ySuperscriptYOffset=o.readShort(i,r),r+=2,s.yStrikeoutSize=o.readShort(i,r),r+=2,s.yStrikeoutPosition=o.readShort(i,r),r+=2,s.sFamilyClass=o.readShort(i,r),r+=2,s.panose=o.readBytes(i,r,10),r+=10,s.ulUnicodeRange1=o.readUint(i,r),r+=4,s.ulUnicodeRange2=o.readUint(i,r),r+=4,s.ulUnicodeRange3=o.readUint(i,r),r+=4,s.ulUnicodeRange4=o.readUint(i,r),r+=4,s.achVendID=[o.readInt8(i,r),o.readInt8(i,r+1),o.readInt8(i,r+2),o.readInt8(i,r+3)],r+=4,s.fsSelection=o.readUshort(i,r),r+=2,s.usFirstCharIndex=o.readUshort(i,r),r+=2,s.usLastCharIndex=o.readUshort(i,r),r+=2,s.sTypoAscender=o.readShort(i,r),r+=2,s.sTypoDescender=o.readShort(i,r),r+=2,s.sTypoLineGap=o.readShort(i,r),r+=2,s.usWinAscent=o.readUshort(i,r),r+=2,s.usWinDescent=o.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,s){var o=e._bin;return r=e["OS/2"].version0(i,r,s),s.ulCodePageRange1=o.readUint(i,r),r+=4,s.ulCodePageRange2=o.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,s){var o=e._bin;return r=e["OS/2"].version1(i,r,s),s.sxHeight=o.readShort(i,r),r+=2,s.sCapHeight=o.readShort(i,r),r+=2,s.usDefault=o.readUshort(i,r),r+=2,s.usBreak=o.readUshort(i,r),r+=2,s.usMaxContext=o.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,s){var o=e._bin;return r=e["OS/2"].version2(i,r,s),s.usLowerOpticalPointSize=o.readUshort(i,r),r+=2,s.usUpperOpticalPointSize=o.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,s){var o=e._bin,l={};return l.version=o.readFixed(i,r),r+=4,l.italicAngle=o.readFixed(i,r),r+=4,l.underlinePosition=o.readShort(i,r),r+=2,l.underlineThickness=o.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var s=i.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=r&&r<=f[1])return f[2]+(r-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var s={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var o=i.SVG.entries[r];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),i.SVG.entries[r]=o),o)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=r;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,u,s)}else i.glyf&&e.U._drawGlyf(r,i,s);return s},e.U._drawGlyf=function(i,r,s){var o=r.glyf[i];o==null&&(o=r.glyf[i]=e.glyf._parseGlyf(r,i)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,r,s))},e.U._simpleGlyph=function(i,r){for(var s=0;s<i.noc;s++){for(var o=s==0?0:i.endPts[s-1]+1,l=i.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,f=c==l?o:c+1,h=1&i.flags[c],d=1&i.flags[u],_=1&i.flags[f],x=i.xs[c],p=i.ys[c];if(c==o)if(h){if(!d){e.U.P.moveTo(r,x,p);continue}e.U.P.moveTo(r,i.xs[u],i.ys[u])}else d?e.U.P.moveTo(r,i.xs[u],i.ys[u]):e.U.P.moveTo(r,(i.xs[u]+x)/2,(i.ys[u]+p)/2);h?d&&e.U.P.lineTo(r,x,p):_?e.U.P.qcurveTo(r,x,p,i.xs[f],i.ys[f]):e.U.P.qcurveTo(r,x,p,(x+i.xs[f])/2,(p+i.ys[f])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,s){for(var o=0;o<i.parts.length;o++){var l={cmds:[],crds:[]},c=i.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];s.crds.push(h*u.a+d*u.b+u.tx),s.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)s.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(i,r){var s=e._lctf.getInterval(r,i);return s==-1?0:r[s+2]},e.U._applySubs=function(i,r,s,o){for(var l=i.length-r-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,f=s.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,i[r]))!=-1){if(s.ltype==1)i[r],f.fmt==1?i[r]=i[r]+f.delta:i[r]=f.newg[u];else if(s.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var _=h[d],x=_.chain.length;if(!(x>l)){for(var p=!0,m=0,S=0;S<x;S++){for(;i[r+m+(1+S)]==-1;)m++;_.chain[S]!=i[r+m+(1+S)]&&(p=!1)}if(p){for(i[r]=_.nglyph,S=0;S<x+m;S++)i[r+S+1]=-1;break}}}else if(s.ltype==5&&f.fmt==2)for(var v=e._lctf.getInterval(f.cDef,i[r]),y=f.cDef[v+2],T=f.scset[y],E=0;E<T.length;E++){var w=T[E],C=w.input;if(!(C.length>l)){for(p=!0,S=0;S<C.length;S++){var g=e._lctf.getInterval(f.cDef,i[r+1+S]);if(v==-1&&f.cDef[g+2]!=C[S]){p=!1;break}}if(p){var b=w.substLookupRecords;for(d=0;d<b.length;d+=2)b[d],b[d+1]}}}else if(s.ltype==6&&f.fmt==3){if(!e.U._glsCovered(i,f.backCvg,r-f.backCvg.length)||!e.U._glsCovered(i,f.inptCvg,r)||!e.U._glsCovered(i,f.ahedCvg,r+f.inptCvg.length))continue;var U=f.lookupRec;for(E=0;E<U.length;E+=2){v=U[E];var P=o[U[E+1]];e.U._applySubs(i,r+v,P,o)}}}}},e.U._glsCovered=function(i,r,s){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],i[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var f=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,h=e.U.glyphToPath(i,u),d=0;d<h.crds.length;d+=2)o.crds.push(h.crds[d]+l),o.crds.push(h.crds[d+1]);for(s&&o.cmds.push(s),d=0;d<h.cmds.length;d++)o.cmds.push(h.cmds[d]);s&&o.cmds.push("X"),l+=i.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(i,u,f))}}return o},e.U.P={},e.U.P.moveTo=function(i,r,s){i.cmds.push("M"),i.crds.push(r,s)},e.U.P.lineTo=function(i,r,s){i.cmds.push("L"),i.crds.push(r,s)},e.U.P.curveTo=function(i,r,s,o,l,c,u){i.cmds.push("C"),i.crds.push(r,s,o,l,c,u)},e.U.P.qcurveTo=function(i,r,s,o,l){i.cmds.push("Q"),i.crds.push(r,s,o,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,s,o,l){for(var c=r.stack,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open,_=0,x=r.x,p=r.y,m=0,S=0,v=0,y=0,T=0,E=0,w=0,C=0,g=0,b=0,U={val:0,size:0};_<i.length;){e.CFF.getCharString(i,_,U);var P=U.val;if(_+=U.size,P=="o1"||P=="o18")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(P=="o3"||P=="o23")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(P=="o4")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,x,p),d=!0;else if(P=="o5")for(;c.length>0;)x+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,x,p);else if(P=="o6"||P=="o7")for(var D=c.length,I=P=="o6",z=0;z<D;z++){var B=c.shift();I?x+=B:p+=B,I=!I,e.U.P.lineTo(l,x,p)}else if(P=="o8"||P=="o24"){D=c.length;for(var Z=0;Z+6<=D;)m=x+c.shift(),S=p+c.shift(),v=m+c.shift(),y=S+c.shift(),x=v+c.shift(),p=y+c.shift(),e.U.P.curveTo(l,m,S,v,y,x,p),Z+=6;P=="o24"&&(x+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,x,p))}else{if(P=="o11")break;if(P=="o1234"||P=="o1235"||P=="o1236"||P=="o1237")P=="o1234"&&(S=p,v=(m=x+c.shift())+c.shift(),b=y=S+c.shift(),E=y,C=p,x=(w=(T=(g=v+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,S,v,y,g,b),e.U.P.curveTo(l,T,E,w,C,x,p)),P=="o1235"&&(m=x+c.shift(),S=p+c.shift(),v=m+c.shift(),y=S+c.shift(),g=v+c.shift(),b=y+c.shift(),T=g+c.shift(),E=b+c.shift(),w=T+c.shift(),C=E+c.shift(),x=w+c.shift(),p=C+c.shift(),c.shift(),e.U.P.curveTo(l,m,S,v,y,g,b),e.U.P.curveTo(l,T,E,w,C,x,p)),P=="o1236"&&(m=x+c.shift(),S=p+c.shift(),v=m+c.shift(),b=y=S+c.shift(),E=y,w=(T=(g=v+c.shift())+c.shift())+c.shift(),C=E+c.shift(),x=w+c.shift(),e.U.P.curveTo(l,m,S,v,y,g,b),e.U.P.curveTo(l,T,E,w,C,x,p)),P=="o1237"&&(m=x+c.shift(),S=p+c.shift(),v=m+c.shift(),y=S+c.shift(),g=v+c.shift(),b=y+c.shift(),T=g+c.shift(),E=b+c.shift(),w=T+c.shift(),C=E+c.shift(),Math.abs(w-x)>Math.abs(C-p)?x=w+c.shift():p=C+c.shift(),e.U.P.curveTo(l,m,S,v,y,g,b),e.U.P.curveTo(l,T,E,w,C,x,p));else if(P=="o14"){if(c.length>0&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),c.length==4){var W=c.shift(),Y=c.shift(),H=c.shift(),F=c.shift(),X=e.CFF.glyphBySE(s,H),ie=e.CFF.glyphBySE(s,F);e.U._drawCFF(s.CharStrings[X],r,s,o,l),r.x=W,r.y=Y,e.U._drawCFF(s.CharStrings[ie],r,s,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(P=="o19"||P=="o20")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,_+=u+7>>3;else if(P=="o21")c.length>2&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),p+=c.pop(),x+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,x,p),d=!0;else if(P=="o22")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),x+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,x,p),d=!0;else if(P=="o25"){for(;c.length>6;)x+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,x,p);m=x+c.shift(),S=p+c.shift(),v=m+c.shift(),y=S+c.shift(),x=v+c.shift(),p=y+c.shift(),e.U.P.curveTo(l,m,S,v,y,x,p)}else if(P=="o26")for(c.length%2&&(x+=c.shift());c.length>0;)m=x,S=p+c.shift(),x=v=m+c.shift(),p=(y=S+c.shift())+c.shift(),e.U.P.curveTo(l,m,S,v,y,x,p);else if(P=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)S=p,v=(m=x+c.shift())+c.shift(),y=S+c.shift(),x=v+c.shift(),p=y,e.U.P.curveTo(l,m,S,v,y,x,p);else if(P=="o10"||P=="o29"){var ne=P=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var Q=c.pop(),G=ne.Subrs[Q+ne.Bias];r.x=x,r.y=p,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d,e.U._drawCFF(G,r,s,o,l),x=r.x,p=r.y,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open}}else if(P=="o30"||P=="o31"){var k=c.length,ee=(Z=0,P=="o31");for(Z+=k-(D=-3&k);Z<D;)ee?(S=p,v=(m=x+c.shift())+c.shift(),p=(y=S+c.shift())+c.shift(),D-Z==5?(x=v+c.shift(),Z++):x=v,ee=!1):(m=x,S=p+c.shift(),v=m+c.shift(),y=S+c.shift(),x=v+c.shift(),D-Z==5?(p=y+c.shift(),Z++):p=y,ee=!0),e.U.P.curveTo(l,m,S,v,y,x,p),Z+=4}else{if((P+"").charAt(0)=="o")throw console.debug("Unknown operation: "+P,i),P;c.push(P)}}}r.x=x,r.y=p,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d};var t=e,n={Typr:t};return a.Typr=t,a.default=n,Object.defineProperty(a,"__esModule",{value:!0}),a})({}).Typr}function pS(){return(function(a){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(P,D){for(var I=new t(31),z=0;z<31;++z)I[z]=D+=1<<P[z-1];var B=new n(I[30]);for(z=1;z<30;++z)for(var Z=I[z];Z<I[z+1];++Z)B[Z]=Z-I[z]<<5|z;return[I,B]},l=o(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=o(r,0)[0],h=new t(32768),d=0;d<32768;++d){var _=(43690&d)>>>1|(21845&d)<<1;_=(61680&(_=(52428&_)>>>2|(13107&_)<<2))>>>4|(3855&_)<<4,h[d]=((65280&_)>>>8|(255&_)<<8)>>>1}var x=function(P,D,I){for(var z=P.length,B=0,Z=new t(D);B<z;++B)++Z[P[B]-1];var W,Y=new t(D);for(B=0;B<D;++B)Y[B]=Y[B-1]+Z[B-1]<<1;{W=new t(1<<D);var H=15-D;for(B=0;B<z;++B)if(P[B])for(var F=B<<4|P[B],X=D-P[B],ie=Y[P[B]-1]++<<X,ne=ie|(1<<X)-1;ie<=ne;++ie)W[h[ie]>>>H]=F}return W},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var S=x(p,9),v=x(m,5),y=function(P){for(var D=P[0],I=1;I<P.length;++I)P[I]>D&&(D=P[I]);return D},T=function(P,D,I){var z=D/8|0;return(P[z]|P[z+1]<<8)>>(7&D)&I},E=function(P,D){var I=D/8|0;return(P[I]|P[I+1]<<8|P[I+2]<<16)>>(7&D)},w=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],C=function(P,D,I){var z=new Error(D||w[P]);if(z.code=P,Error.captureStackTrace&&Error.captureStackTrace(z,C),!I)throw z;return z},g=function(P,D,I){var z=P.length;if(!z||I&&!I.l&&z<5)return D||new e(0);var B=!D||I,Z=!I||I.i;I||(I={}),D||(D=new e(3*z));var W,Y=function(ge){var Re=D.length;if(ge>Re){var ye=new e(Math.max(2*Re,ge));ye.set(D),D=ye}},H=I.f||0,F=I.p||0,X=I.b||0,ie=I.l,ne=I.d,Q=I.m,G=I.n,k=8*z;do{if(!ie){I.f=H=T(P,F,1);var ee=T(P,F+1,3);if(F+=3,!ee){var me=P[(Ae=((W=F)/8|0)+(7&W&&1)+4)-4]|P[Ae-3]<<8,pe=Ae+me;if(pe>z){Z&&C(0);break}B&&Y(X+me),D.set(P.subarray(Ae,pe),X),I.b=X+=me,I.p=F=8*pe;continue}if(ee==1)ie=S,ne=v,Q=9,G=5;else if(ee==2){var he=T(P,F,31)+257,de=T(P,F+10,15)+4,Le=he+T(P,F+5,31)+1;F+=14;for(var Fe=new e(Le),L=new e(19),we=0;we<de;++we)L[s[we]]=T(P,F+3*we,7);F+=3*de;var De=y(L),ve=(1<<De)-1,fe=x(L,De);for(we=0;we<Le;){var Ae,$=fe[T(P,F,ve)];if(F+=15&$,(Ae=$>>>4)<16)Fe[we++]=Ae;else{var be=0,A=0;for(Ae==16?(A=3+T(P,F,3),F+=2,be=Fe[we-1]):Ae==17?(A=3+T(P,F,7),F+=3):Ae==18&&(A=11+T(P,F,127),F+=7);A--;)Fe[we++]=be}}var M=Fe.subarray(0,he),O=Fe.subarray(he);Q=y(M),G=y(O),ie=x(M,Q),ne=x(O,G)}else C(1);if(F>k){Z&&C(0);break}}B&&Y(X+131072);for(var se=(1<<Q)-1,te=(1<<G)-1,q=F;;q=F){var Se=(be=ie[E(P,F)&se])>>>4;if((F+=15&be)>k){Z&&C(0);break}if(be||C(2),Se<256)D[X++]=Se;else{if(Se==256){q=F,ie=null;break}var _e=Se-254;if(Se>264){var Ce=i[we=Se-257];_e=T(P,F,(1<<Ce)-1)+c[we],F+=Ce}var Ee=ne[E(P,F)&te],oe=Ee>>>4;if(Ee||C(3),F+=15&Ee,O=f[oe],oe>3&&(Ce=r[oe],O+=E(P,F)&(1<<Ce)-1,F+=Ce),F>k){Z&&C(0);break}B&&Y(X+131072);for(var le=X+_e;X<le;X+=4)D[X]=D[X-O],D[X+1]=D[X+1-O],D[X+2]=D[X+2-O],D[X+3]=D[X+3-O];X=le}}I.l=ie,I.p=q,I.b=X,ie&&(H=1,I.m=Q,I.d=ne,I.n=G)}while(!H);return X==D.length?D:(function(ge,Re,ye){(ye==null||ye>ge.length)&&(ye=ge.length);var ze=new(ge instanceof t?t:ge instanceof n?n:e)(ye-Re);return ze.set(ge.subarray(Re,ye)),ze})(D,0,X)},b=new e(0),U=typeof TextDecoder<"u"&&new TextDecoder;try{U.decode(b,{stream:!0})}catch{}return a.convert_streams=function(P){var D=new DataView(P),I=0;function z(){var he=D.getUint16(I);return I+=2,he}function B(){var he=D.getUint32(I);return I+=4,he}function Z(he){me.setUint16(pe,he),pe+=2}function W(he){me.setUint32(pe,he),pe+=4}for(var Y={signature:B(),flavor:B(),length:B(),numTables:z(),reserved:z(),totalSfntSize:B(),majorVersion:z(),minorVersion:z(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},H=0;Math.pow(2,H)<=Y.numTables;)H++;H--;for(var F=16*Math.pow(2,H),X=16*Y.numTables-F,ie=12,ne=[],Q=0;Q<Y.numTables;Q++)ne.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),ie+=16;var G,k=new Uint8Array(12+16*ne.length+ne.reduce((function(he,de){return he+de.origLength+4}),0)),ee=k.buffer,me=new DataView(ee),pe=0;return W(Y.flavor),Z(Y.numTables),Z(F),Z(H),Z(X),ne.forEach((function(he){W(he.tag),W(he.origChecksum),W(ie),W(he.origLength),he.outOffset=ie,(ie+=he.origLength)%4!=0&&(ie+=4-ie%4)})),ne.forEach((function(he){var de,Le=P.slice(he.offset,he.offset+he.compLength);if(he.compLength!=he.origLength){var Fe=new Uint8Array(he.origLength);de=new Uint8Array(Le,2),g(de,Fe)}else Fe=new Uint8Array(Le);k.set(Fe,he.outOffset);var L=0;(ie=he.outOffset+he.origLength)%4!=0&&(L=4-ie%4),k.set(new Uint8Array(L).buffer,he.outOffset+he.origLength),G=ie+L})),ee.slice(0,G)},Object.defineProperty(a,"__esModule",{value:!0}),a})({}).convert_streams}function mS(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,s=4,o=8,l=16,c=32;let u;function f(w){if(!u){const C={R:r,L:i,D:s,C:l,U:c,T:o};u=new Map;for(let g in n){let b=0;n[g].split(",").forEach(U=>{let[P,D]=U.split("+");P=parseInt(P,36),D=D?parseInt(D,36):0,u.set(b+=P,C[g]);for(let I=D;I--;)u.set(++b,C[g])})}}return u.get(w)||c}const h=1,d=2,_=3,x=4,p=[null,"isol","init","fina","medi"];function m(w){const C=new Uint8Array(w.length);let g=c,b=h,U=-1;for(let P=0;P<w.length;P++){const D=w.codePointAt(P);let I=f(D)|0,z=h;I&o||(g&(i|s|l)?I&(r|s|l)?(z=_,(b===h||b===_)&&C[U]++):I&(i|c)&&(b===d||b===x)&&C[U]--:g&(r|c)&&(b===d||b===x)&&C[U]--,b=C[P]=z,g=I,U=P,D>65535&&P++)}return C}function S(w,C){const g=[];for(let U=0;U<C.length;U++){const P=C.codePointAt(U);P>65535&&U++,g.push(a.U.codeToGlyph(w,P))}const b=w.GSUB;if(b){const{lookupList:U,featureList:P}=b;let D;const I=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,z=[];P.forEach(B=>{if(I.test(B.tag))for(let Z=0;Z<B.tab.length;Z++){if(z[B.tab[Z]])continue;z[B.tab[Z]]=!0;const W=U[B.tab[Z]],Y=/^(isol|init|fina|medi)$/.test(B.tag);Y&&!D&&(D=m(C));for(let H=0;H<g.length;H++)(!D||!Y||p[D[H]]===B.tag)&&a.U._applySubs(g,H,W,U)}})}return g}function v(w,C){const g=new Int16Array(C.length*3);let b=0;for(;b<C.length;b++){const I=C[b];if(I===-1)continue;g[b*3+2]=w.hmtx.aWidth[I];const z=w.GPOS;if(z){const B=z.lookupList;for(let Z=0;Z<B.length;Z++){const W=B[Z];for(let Y=0;Y<W.tabs.length;Y++){const H=W.tabs[Y];if(W.ltype===1){if(a._lctf.coverageIndex(H.coverage,I)!==-1&&H.pos){D(H.pos,b);break}}else if(W.ltype===2){let F=null,X=U();if(X!==-1){const ie=a._lctf.coverageIndex(H.coverage,C[X]);if(ie!==-1){if(H.fmt===1){const ne=H.pairsets[ie];for(let Q=0;Q<ne.length;Q++)ne[Q].gid2===I&&(F=ne[Q])}else if(H.fmt===2){const ne=a.U._getGlyphClass(C[X],H.classDef1),Q=a.U._getGlyphClass(I,H.classDef2);F=H.matrix[ne][Q]}if(F){F.val1&&D(F.val1,X),F.val2&&D(F.val2,b);break}}}}else if(W.ltype===4){const F=a._lctf.coverageIndex(H.markCoverage,I);if(F!==-1){const X=U(P),ie=X===-1?-1:a._lctf.coverageIndex(H.baseCoverage,C[X]);if(ie!==-1){const ne=H.markArray[F],Q=H.baseArray[ie][ne.markClass];g[b*3]=Q.x-ne.x+g[X*3]-g[X*3+2],g[b*3+1]=Q.y-ne.y+g[X*3+1];break}}}else if(W.ltype===6){const F=a._lctf.coverageIndex(H.mark1Coverage,I);if(F!==-1){const X=U();if(X!==-1){const ie=C[X];if(y(w,ie)===3){const ne=a._lctf.coverageIndex(H.mark2Coverage,ie);if(ne!==-1){const Q=H.mark1Array[F],G=H.mark2Array[ne][Q.markClass];g[b*3]=G.x-Q.x+g[X*3]-g[X*3+2],g[b*3+1]=G.y-Q.y+g[X*3+1];break}}}}}}}}else if(w.kern&&!w.cff){const B=U();if(B!==-1){const Z=w.kern.glyph1.indexOf(C[B]);if(Z!==-1){const W=w.kern.rval[Z].glyph2.indexOf(I);W!==-1&&(g[B*3+2]+=w.kern.rval[Z].vals[W])}}}}return g;function U(I){for(let z=b-1;z>=0;z--)if(C[z]!==-1&&(!I||I(C[z])))return z;return-1}function P(I){return y(w,I)===1}function D(I,z){for(let B=0;B<3;B++)g[z*3+B]+=I[B]||0}}function y(w,C){const g=w.GDEF&&w.GDEF.glyphClassDef;return g?a.U._getGlyphClass(C,g):0}function T(...w){for(let C=0;C<w.length;C++)if(typeof w[C]=="number")return w[C]}function E(w){const C=Object.create(null),g=w["OS/2"],b=w.hhea,U=w.head.unitsPerEm,P=T(g&&g.sTypoAscender,b&&b.ascender,U),D={unitsPerEm:U,ascender:P,descender:T(g&&g.sTypoDescender,b&&b.descender,0),capHeight:T(g&&g.sCapHeight,P),xHeight:T(g&&g.sxHeight,P),lineGap:T(g&&g.sTypoLineGap,b&&b.lineGap),supportsCodePoint(I){return a.U.codeToGlyph(w,I)>0},forEachGlyph(I,z,B,Z){let W=0;const Y=1/D.unitsPerEm*z,H=S(w,I);let F=0;const X=v(w,H);return H.forEach((ie,ne)=>{if(ie!==-1){let Q=C[ie];if(!Q){const{cmds:G,crds:k}=a.U.glyphToPath(w,ie);let ee="",me=0;for(let Fe=0,L=G.length;Fe<L;Fe++){const we=t[G[Fe]];ee+=G[Fe];for(let De=1;De<=we;De++)ee+=(De>1?",":"")+k[me++]}let pe,he,de,Le;if(k.length){pe=he=1/0,de=Le=-1/0;for(let Fe=0,L=k.length;Fe<L;Fe+=2){let we=k[Fe],De=k[Fe+1];we<pe&&(pe=we),De<he&&(he=De),we>de&&(de=we),De>Le&&(Le=De)}}else pe=de=he=Le=0;Q=C[ie]={index:ie,advanceWidth:w.hmtx.aWidth[ie],xMin:pe,yMin:he,xMax:de,yMax:Le,path:ee}}Z.call(null,Q,W+X[ne*3]*Y,X[ne*3+1]*Y,F),W+=X[ne*3+2]*Y,B&&(W+=B*z)}F+=I.codePointAt(F)>65535?2:1}),W}};return D}return function(C){const g=new Uint8Array(C,0,4),b=a._bin.readASCII(g,0,4);if(b==="wOFF")C=e(C);else if(b==="wOF2")throw new Error("woff2 fonts not supported");return E(a.parse(C)[0])}}const xS=Da({name:"Typr Font Parser",dependencies:[dS,pS,mS],init(a,e,t){const n=a(),i=e();return t(n,i)}});function _S(){return(function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(v){var y=v>>5;this.buckets.set(y,(this.buckets.get(y)||0)|1<<(31&v))},e.prototype.has=function(v){var y=this.buckets.get(v>>5);return y!==void 0&&(y&1<<(31&v))!=0},e.prototype.serialize=function(){var v=[];return this.buckets.forEach((function(y,T){v.push((+T).toString(36)+":"+y.toString(36))})),v.join(",")},e.prototype.deserialize=function(v){var y=this;this.buckets.clear(),v.split(",").forEach((function(T){var E=T.split(":");y.buckets.set(parseInt(E[0],36),parseInt(E[1],36))}))};var t=Math.pow(2,8),n=t-1,i=~n;function r(v){var y=(function(E){return E&i})(v).toString(16),T=(function(E){return(E&i)+t-1})(v).toString(16);return"codepoint-index/plane"+(v>>16)+"/"+y+"-"+T+".json"}function s(v,y){var T=v&n,E=y.codePointAt(T/6|0);return((E=(E||48)-48)&1<<T%6)!=0}function o(v,y){var T;(T=v,T.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(E){return E.split("-").map((function(w){return parseInt(w.trim(),16)}))}))).forEach((function(E){var w=E[0],C=E[1];C===void 0&&(C=w),y(w,C)}))}function l(v,y){o(v,(function(T,E){for(var w=T;w<=E;w++)y(w)}))}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(v){var y=f.get(v);return y||(y=new e,l(v.ranges,(function(T){return y.add(T)})),f.set(v,y)),y}var _,x=new Map;function p(v,y,T){return v[y]?y:v[T]?T:(function(E){for(var w in E)return w})(v)}function m(v,y){var T=y;if(!v.includes(T)){T=1/0;for(var E=0;E<v.length;E++)Math.abs(v[E]-y)<Math.abs(T-y)&&(T=v[E])}return T}function S(v){return _||(_=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(y){_.add(y)}))),_.has(v)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(v,y){y===void 0&&(y={});var T,E=y.lang;E===void 0&&(E=new RegExp("\\p{Script=Hangul}","u").test(T=v)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(T)?"ja":"en");var w=y.category;w===void 0&&(w="sans-serif");var C=y.style;C===void 0&&(C="normal");var g=y.weight;g===void 0&&(g=400);var b=(y.dataUrl||h).replace(/\/$/g,""),U=new Map,P=new Uint8Array(v.length),D={},I={},z=new Array(v.length),B=new Map,Z=!1;function W(F){var X=x.get(F);return X||(X=fetch(b+"/"+F).then((function(ie){if(!ie.ok)throw new Error(ie.statusText);return ie.json().then((function(ne){if(!Array.isArray(ne)||ne[0]!==1)throw new Error("Incorrect schema version; need 1, got "+ne[0]);return ne[1]}))})).catch((function(ie){if(b!==h)return Z||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+b+'", trying default CDN. '+ie.message),Z=!0),b=h,x.delete(F),W(F);throw ie})),x.set(F,X)),X}for(var Y=function(F){var X=v.codePointAt(F),ie=r(X);z[F]=ie,c[ie]||B.has(ie)||B.set(ie,W(ie).then((function(ne){c[ie]=ne}))),X>65535&&(F++,H=F)},H=0;H<v.length;H++)Y(H);return Promise.all(B.values()).then((function(){B.clear();for(var F=function(ie){var ne=v.codePointAt(ie),Q=null,G=c[z[ie]],k=void 0;for(var ee in G){var me=I[ee];if(me===void 0&&(me=I[ee]=new RegExp(ee).test(E||"en")),me){for(var pe in k=ee,G[ee])if(s(ne,G[ee][pe])){Q=pe;break}break}}if(!Q){e:for(var he in G)if(he!==k){for(var de in G[he])if(s(ne,G[he][de])){Q=de;break e}}}Q||(console.debug("No font coverage for U+"+ne.toString(16)),Q="latin"),z[ie]=Q,u[Q]||B.has(Q)||B.set(Q,W("font-meta/"+Q+".json").then((function(Le){u[Q]=Le}))),ne>65535&&(ie++,X=ie)},X=0;X<v.length;X++)F(X);return Promise.all(B.values())})).then((function(){for(var F,X=null,ie=0;ie<v.length;ie++){var ne=v.codePointAt(ie);if(X&&(S(ne)||d(X).has(ne)))P[ie]=P[ie-1];else{X=u[z[ie]];var Q=D[X.id];if(!Q){var G=X.typeforms,k=p(G,w,"sans-serif"),ee=p(G[k],C,"normal"),me=m((F=G[k])===null||F===void 0?void 0:F[ee],g);Q=D[X.id]=b+"/font-files/"+X.id+"/"+k+"."+ee+"."+me+".woff"}var pe=U.get(Q);pe==null&&(pe=U.size,U.set(Q,pe)),P[ie]=pe}ne>65535&&(ie++,P[ie]=P[ie-1])}return{fontUrls:Array.from(U.keys()),chars:P}}))},Object.defineProperty(a,"__esModule",{value:!0}),a})({})}function gS(a,e){const t=Object.create(null),n=Object.create(null);function i(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=s,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(s,o){let l=t[s];l?o(l):n[s]?n[s].push(o):(n[s]=[o],i(s,c=>{c.src=s,t[s]=c,n[s].forEach(u=>u(c)),delete n[s]}))}return function(s,o,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(s.length),_=[];s.length||S();const x=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(y=>!y.lang||y.lang.test(l)).reverse(),c.length){let w=0;(function C(g=0){for(let b=g,U=s.length;b<U;b++){const P=s.codePointAt(b);if(w===1&&_[d[b-1]].supportsCodePoint(P)||b>0&&/\s/.test(s[b]))d[b]=d[b-1],w===2&&(p[p.length-1][1]=b);else for(let D=d[b],I=c.length;D<=I;D++)if(D===I){const z=w===2?p[p.length-1]:p[p.length]=[b,b];z[1]=b,w=2}else{d[b]=D;const{src:z,unicodeRange:B}=c[D];if(!B||v(P,B)){const Z=t[z];if(!Z){r(z,()=>{C(b)});return}if(Z.supportsCodePoint(P)){let W=x.get(Z);typeof W!="number"&&(W=_.length,_.push(Z),x.set(Z,W)),d[b]=W,w=1;break}}}P>65535&&b+1<U&&(d[b+1]=d[b],b++,w===2&&(p[p.length-1][1]=b))}m()})()}else p.push([0,s.length-1]),m();function m(){if(p.length){const y=p.map(T=>s.substring(T[0],T[1]+1)).join(`
`);e.getFontsForString(y,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:T,chars:E})=>{const w=_.length;let C=0;p.forEach(b=>{for(let U=0,P=b[1]-b[0];U<=P;U++)d[b[0]+U]=E[C++]+w;C++});let g=0;T.forEach((b,U)=>{r(b,P=>{_[U+w]=P,++g===T.length&&S()})})})}else S()}function S(){o({chars:d,fonts:_})}function v(y,T){for(let E=0;E<T.length;E++){const[w,C=w]=T[E];if(w<=y&&y<=C)return!0}return!1}}}const vS=Da({name:"FontResolver",dependencies:[gS,xS,_S],init(a,e,t){return a(e,t())}});function SS(a,e){const n=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",r=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:_,lang:x,fonts:p,style:m,weight:S,preResolvedFonts:v,unicodeFontsURL:y},T){const E=({chars:w,fonts:C})=>{let g,b;const U=[];for(let P=0;P<w.length;P++)w[P]!==b?(b=w[P],U.push(g={start:P,end:P,fontObj:C[w[P]]})):g.end=P;T(U)};v?E(v):a(_,E,{lang:x,fonts:p,style:m,weight:S,unicodeFontsURL:y})}function o({text:_="",font:x,lang:p,sdfGlyphSize:m=64,fontSize:S=400,fontWeight:v=1,fontStyle:y="normal",letterSpacing:T=0,lineHeight:E="normal",maxWidth:w=1/0,direction:C,textAlign:g="left",textIndent:b=0,whiteSpace:U="normal",overflowWrap:P="normal",anchorX:D=0,anchorY:I=0,metricsOnly:z=!1,unicodeFontsURL:B,preResolvedFonts:Z=null,includeCaretPositions:W=!1,chunkedBoundsSize:Y=8192,colorRanges:H=null},F){const X=f(),ie={fontLoad:0,typesetting:0};_.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),S=+S,T=+T,w=+w,E=E||"normal",b=+b,s({text:_,lang:p,style:y,weight:v,fonts:typeof x=="string"?[{src:x}]:x,unicodeFontsURL:B,preResolvedFonts:Z},ne=>{ie.fontLoad=f()-X;const Q=isFinite(w);let G=null,k=null,ee=null,me=null,pe=null,he=null,de=null,Le=null,Fe=0,L=0,we=U!=="nowrap";const De=new Map,ve=f();let fe=b,Ae=0,$=new h;const be=[$];ne.forEach(te=>{const{fontObj:q}=te,{ascender:Se,descender:_e,unitsPerEm:Ce,lineGap:Ee,capHeight:oe,xHeight:le}=q;let ge=De.get(q);if(!ge){const ce=S/Ce,xe=E==="normal"?(Se-_e+Ee)*ce:E*S,Te=(xe-(Se-_e)*ce)/2,ue=Math.min(xe,(Se-_e)*ce),re=(Se+_e)/2*ce+ue/2;ge={index:De.size,src:q.src,fontObj:q,fontSizeMult:ce,unitsPerEm:Ce,ascender:Se*ce,descender:_e*ce,capHeight:oe*ce,xHeight:le*ce,lineHeight:xe,baseline:-Te-Se*ce,caretTop:re,caretBottom:re-ue},De.set(q,ge)}const{fontSizeMult:Re}=ge,ye=_.slice(te.start,te.end+1);let ze,N;q.forEachGlyph(ye,S,T,(ce,xe,Te,ue)=>{xe+=Ae,ue+=te.start,ze=xe,N=ce;const re=_.charAt(ue),Pe=ce.advanceWidth*Re,Ne=$.count;let Be;if("isEmpty"in ce||(ce.isWhitespace=!!re&&new RegExp(i).test(re),ce.canBreakAfter=!!re&&r.test(re),ce.isEmpty=ce.xMin===ce.xMax||ce.yMin===ce.yMax||n.test(re)),!ce.isWhitespace&&!ce.isEmpty&&L++,we&&Q&&!ce.isWhitespace&&xe+Pe+fe>w&&Ne){if($.glyphAt(Ne-1).glyphObj.canBreakAfter)Be=new h,fe=-xe;else for(let pt=Ne;pt--;)if(pt===0&&P==="break-word"){Be=new h,fe=-xe;break}else if($.glyphAt(pt).glyphObj.canBreakAfter){Be=$.splitAt(pt+1);const ot=Be.glyphAt(0).x;fe-=ot;for(let wt=Be.count;wt--;)Be.glyphAt(wt).x-=ot;break}Be&&($.isSoftWrapped=!0,$=Be,be.push($),Fe=w)}let We=$.glyphAt($.count);We.glyphObj=ce,We.x=xe+fe,We.y=Te,We.width=Pe,We.charIndex=ue,We.fontData=ge,re===`
`&&($=new h,be.push($),fe=-(xe+Pe+T*S)+b)}),Ae=ze+N.advanceWidth*Re+T*S});let A=0;be.forEach(te=>{let q=!0;for(let Se=te.count;Se--;){const _e=te.glyphAt(Se);q&&!_e.glyphObj.isWhitespace&&(te.width=_e.x+_e.width,te.width>Fe&&(Fe=te.width),q=!1);let{lineHeight:Ce,capHeight:Ee,xHeight:oe,baseline:le}=_e.fontData;Ce>te.lineHeight&&(te.lineHeight=Ce);const ge=le-te.baseline;ge<0&&(te.baseline+=ge,te.cap+=ge,te.ex+=ge),te.cap=Math.max(te.cap,te.baseline+Ee),te.ex=Math.max(te.ex,te.baseline+oe)}te.baseline-=A,te.cap-=A,te.ex-=A,A+=te.lineHeight});let M=0,O=0;if(D&&(typeof D=="number"?M=-D:typeof D=="string"&&(M=-Fe*(D==="left"?0:D==="center"?.5:D==="right"?1:c(D)))),I&&(typeof I=="number"?O=-I:typeof I=="string"&&(O=I==="top"?0:I==="top-baseline"?-be[0].baseline:I==="top-cap"?-be[0].cap:I==="top-ex"?-be[0].ex:I==="middle"?A/2:I==="bottom"?A:I==="bottom-baseline"?-be[be.length-1].baseline:c(I)*A)),!z){const te=e.getEmbeddingLevels(_,C);G=new Uint16Array(L),k=new Uint8Array(L),ee=new Float32Array(L*2),me={},de=[1/0,1/0,-1/0,-1/0],Le=[],W&&(he=new Float32Array(_.length*4)),H&&(pe=new Uint8Array(L*3));let q=0,Se=-1,_e=-1,Ce,Ee;if(be.forEach((oe,le)=>{let{count:ge,width:Re}=oe;if(ge>0){let ye=0;for(let ue=ge;ue--&&oe.glyphAt(ue).glyphObj.isWhitespace;)ye++;let ze=0,N=0;if(g==="center")ze=(Fe-Re)/2;else if(g==="right")ze=Fe-Re;else if(g==="justify"&&oe.isSoftWrapped){let ue=0;for(let re=ge-ye;re--;)oe.glyphAt(re).glyphObj.isWhitespace&&ue++;N=(Fe-Re)/ue}if(N||ze){let ue=0;for(let re=0;re<ge;re++){let Pe=oe.glyphAt(re);const Ne=Pe.glyphObj;Pe.x+=ze+ue,N!==0&&Ne.isWhitespace&&re<ge-ye&&(ue+=N,Pe.width+=N)}}const ce=e.getReorderSegments(_,te,oe.glyphAt(0).charIndex,oe.glyphAt(oe.count-1).charIndex);for(let ue=0;ue<ce.length;ue++){const[re,Pe]=ce[ue];let Ne=1/0,Be=-1/0;for(let We=0;We<ge;We++)if(oe.glyphAt(We).charIndex>=re){let pt=We,ot=We;for(;ot<ge;ot++){let wt=oe.glyphAt(ot);if(wt.charIndex>Pe)break;ot<ge-ye&&(Ne=Math.min(Ne,wt.x),Be=Math.max(Be,wt.x+wt.width))}for(let wt=pt;wt<ot;wt++){const sn=oe.glyphAt(wt);sn.x=Be-(sn.x+sn.width-Ne)}break}}let xe;const Te=ue=>xe=ue;for(let ue=0;ue<ge;ue++){const re=oe.glyphAt(ue);xe=re.glyphObj;const Pe=xe.index,Ne=te.levels[re.charIndex]&1;if(Ne){const Be=e.getMirroredCharacter(_[re.charIndex]);Be&&re.fontData.fontObj.forEachGlyph(Be,0,0,Te)}if(W){const{charIndex:Be,fontData:We}=re,pt=re.x+M,ot=re.x+re.width+M;he[Be*4]=Ne?ot:pt,he[Be*4+1]=Ne?pt:ot,he[Be*4+2]=oe.baseline+We.caretBottom+O,he[Be*4+3]=oe.baseline+We.caretTop+O;const wt=Be-Se;wt>1&&u(he,Se,wt),Se=Be}if(H){const{charIndex:Be}=re;for(;Be>_e;)_e++,H.hasOwnProperty(_e)&&(Ee=H[_e])}if(!xe.isWhitespace&&!xe.isEmpty){const Be=q++,{fontSizeMult:We,src:pt,index:ot}=re.fontData,wt=me[pt]||(me[pt]={});wt[Pe]||(wt[Pe]={path:xe.path,pathBounds:[xe.xMin,xe.yMin,xe.xMax,xe.yMax]});const sn=re.x+M,Wn=re.y+oe.baseline+O;ee[Be*2]=sn,ee[Be*2+1]=Wn;const zt=sn+xe.xMin*We,Fn=Wn+xe.yMin*We,ri=sn+xe.xMax*We,Nn=Wn+xe.yMax*We;zt<de[0]&&(de[0]=zt),Fn<de[1]&&(de[1]=Fn),ri>de[2]&&(de[2]=ri),Nn>de[3]&&(de[3]=Nn),Be%Y===0&&(Ce={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},Le.push(Ce)),Ce.end++;const Ct=Ce.rect;if(zt<Ct[0]&&(Ct[0]=zt),Fn<Ct[1]&&(Ct[1]=Fn),ri>Ct[2]&&(Ct[2]=ri),Nn>Ct[3]&&(Ct[3]=Nn),G[Be]=Pe,k[Be]=ot,H){const ai=Be*3;pe[ai]=Ee>>16&255,pe[ai+1]=Ee>>8&255,pe[ai+2]=Ee&255}}}}}),he){const oe=_.length-Se;oe>1&&u(he,Se,oe)}}const se=[];De.forEach(({index:te,src:q,unitsPerEm:Se,ascender:_e,descender:Ce,lineHeight:Ee,capHeight:oe,xHeight:le})=>{se[te]={src:q,unitsPerEm:Se,ascender:_e,descender:Ce,lineHeight:Ee,capHeight:oe,xHeight:le}}),ie.typesetting=f()-ve,F({glyphIds:G,glyphFontIndices:k,glyphPositions:ee,glyphData:me,fontData:se,caretPositions:he,glyphColors:pe,chunkedBounds:Le,fontSize:S,topBaseline:O+be[0].baseline,blockBounds:[M,O-A,M+Fe,O],visibleBounds:de,timings:ie})})}function l(_,x){o({..._,metricsOnly:!0},p=>{const[m,S,v,y]=p.blockBounds;x({width:v-m,height:y-S})})}function c(_){let x=_.match(/^([\d.]+)%$/),p=x?parseFloat(x[1]):NaN;return isNaN(p)?0:p/100}function u(_,x,p){const m=_[x*4],S=_[x*4+1],v=_[x*4+2],y=_[x*4+3],T=(S-m)/p;for(let E=0;E<p;E++){const w=(x+E)*4;_[w]=m+T*E,_[w+1]=m+T*(E+1),_[w+2]=v,_[w+3]=y}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(_){let x=h.flyweight;return x.data=this.data,x.index=_,x},splitAt(_){let x=new h;return x.data=this.data.splice(_*d.length),x}},h.flyweight=d.reduce((_,x,p,m)=>(Object.defineProperty(_,x,{get(){return this.data[this.index*d.length+p]},set(S){this.data[this.index*d.length+p]=S}}),_),{data:null,index:0}),{typeset:o,measure:l}}const Cr=()=>(self.performance||Date).now(),Qo=Zd();let Dh;function bS(a,e,t,n,i,r,s,o,l,c,u=!0){return u?MS(a,e,t,n,i,r,s,o,l,c).then(null,f=>(Dh||(console.warn("WebGL SDF generation failed, falling back to JS",f),Dh=!0),Ih(a,e,t,n,i,r,s,o,l,c))):Ih(a,e,t,n,i,r,s,o,l,c)}const go=[],yS=5;let lu=0;function Qd(){const a=Cr();for(;go.length&&Cr()-a<yS;)go.shift()();lu=go.length?setTimeout(Qd,0):0}const MS=(...a)=>new Promise((e,t)=>{go.push(()=>{const n=Cr();try{Qo.webgl.generateIntoCanvas(...a),e({timing:Cr()-n})}catch(i){t(i)}}),lu||(lu=setTimeout(Qd,0))}),TS=4,ES=2e3,Lh={};let wS=0;function Ih(a,e,t,n,i,r,s,o,l,c){const u="TroikaTextSDFGenerator_JS_"+wS++%TS;let f=Lh[u];return f||(f=Lh[u]={workerModule:Da({name:u,workerId:u,dependencies:[Zd,Cr],init(h,d){const _=h().javascript.generate;return function(...x){const p=d();return{textureData:_(...x),timing:d()-p}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(a,e,t,n,i,r).then(({textureData:h,timing:d})=>{const _=Cr(),x=new Uint8Array(h.length*4);for(let p=0;p<h.length;p++)x[p*4+c]=h[p];return Qo.webglUtils.renderImageData(s,x,o,l,a,e,1<<3-c),d+=Cr()-_,--f.requests===0&&(f.idleTimer=setTimeout(()=>{iS(u)},ES)),{timing:d}})}function AS(a){a._warm||(Qo.webgl.isSupported(a),a._warm=!0)}const CS=Qo.webglUtils.resizeWebGLCanvasWithoutClearing,Ka={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},RS=new tt;function aa(){return(self.performance||Date).now()}const Fh=Object.create(null);function PS(a,e){a=DS({},a);const t=aa(),n=[];if(a.font&&n.push({label:"user",src:LS(a.font)}),a.font=n,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||Ka.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||Ka.unicodeFontsURL,a.colorRanges!=null){let h={};for(let d in a.colorRanges)if(a.colorRanges.hasOwnProperty(d)){let _=a.colorRanges[d];typeof _!="number"&&(_=RS.set(_).getHex()),h[d]=_}a.colorRanges=h}Object.freeze(a);const{textureWidth:i,sdfExponent:r}=Ka,{sdfGlyphSize:s}=a,o=i/s*4;let l=Fh[s];if(!l){const h=document.createElement("canvas");h.width=i,h.height=s*256/o,l=Fh[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:h,sdfTexture:new qt(h,void 0,void 0,void 0,hn,hn),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,US(l)}const{sdfTexture:c,sdfCanvas:u}=l;tp(a).then(h=>{const{glyphIds:d,glyphFontIndices:_,fontData:x,glyphPositions:p,fontSize:m,timings:S}=h,v=[],y=new Float32Array(d.length*4);let T=0,E=0;const w=aa(),C=x.map(D=>{let I=l.glyphsByFont.get(D.src);return I||l.glyphsByFont.set(D.src,I=new Map),I});d.forEach((D,I)=>{const z=_[I],{src:B,unitsPerEm:Z}=x[z];let W=C[z].get(D);if(!W){const{path:ie,pathBounds:ne}=h.glyphData[B][D],Q=Math.max(ne[2]-ne[0],ne[3]-ne[1])/s*(Ka.sdfMargin*s+.5),G=l.glyphCount++,k=[ne[0]-Q,ne[1]-Q,ne[2]+Q,ne[3]+Q];C[z].set(D,W={path:ie,atlasIndex:G,sdfViewBox:k}),v.push(W)}const{sdfViewBox:Y}=W,H=p[E++],F=p[E++],X=m/Z;y[T++]=H+Y[0]*X,y[T++]=F+Y[1]*X,y[T++]=H+Y[2]*X,y[T++]=F+Y[3]*X,d[I]=W.atlasIndex}),S.quads=(S.quads||0)+(aa()-w);const g=aa();S.sdf={};const b=u.height,U=Math.ceil(l.glyphCount/o),P=Math.pow(2,Math.ceil(Math.log2(U*s)));P>b&&(console.info(`Increasing SDF texture size ${b}->${P}`),CS(u,i,P),c.dispose()),Promise.all(v.map(D=>$d(D,l,a.gpuAccelerateSDF).then(({timing:I})=>{S.sdf[D.atlasIndex]=I}))).then(()=>{v.length&&!l.contextLost&&(ep(l),c.needsUpdate=!0),S.sdfTotal=aa()-g,S.total=aa()-t,e(Object.freeze({parameters:a,sdfTexture:c,sdfGlyphSize:s,sdfExponent:r,glyphBounds:y,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{l.contextLost||AS(u)})}function $d({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},s){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Ka,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(o/n)*n,h=Math.floor(u/(o/n))*n,d=e%4;return bS(n,n,a,t,c,l,i,f,h,d,s)}function US(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const n=[];a.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push($d(r,a,!0))})}),Promise.all(n).then(()=>{ep(a),a.sdfTexture.needsUpdate=!0})})}function DS(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let ao;function LS(a){return ao||(ao=typeof document>"u"?{}:document.createElement("a")),ao.href=a,ao.href}function ep(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:n,height:i}=e,r=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==n*i*4)&&(s=new Uint8Array(n*i*4),t.image={width:n,height:i,data:s},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,s)}}const IS=Da({name:"Typesetter",dependencies:[SS,vS,aS],init(a,e,t){return a(e,t())}}),tp=Da({name:"Typesetter",dependencies:[IS],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}});tp.onMainThread;const Nh={};function FS(a){let e=Nh[a];return e||(e=Nh[a]=new Pn(1,1,a,a).translate(.5,.5,0)),e}const NS="aTroikaGlyphBounds",Oh="aTroikaGlyphIndex",OS="aTroikaGlyphColor";class BS extends Hd{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Pa,this.boundingBox=new ti}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=FS(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,r){this.updateAttributeData(NS,e,4),this.updateAttributeData(Oh,t,1),this.updateAttributeData(OS,r,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:r,min:s,max:o,sin:l,cos:c}=Math,u=i/2,f=i*2,h=Math.abs(t),d=e[0]/h,_=e[2]/h,x=r((d+u)/f)!==r((_+u)/f)?-h:s(l(d)*h,l(_)*h),p=r((d-u)/f)!==r((_-u)/f)?h:o(l(d)*h,l(_)*h),m=r((d+i)/f)!==r((_+i)/f)?h*2:o(h-c(d)*h,h-c(_)*h);n.min.set(x,e[1],t<0?-m:0),n.max.set(p,e[3],t<0?0:m)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Oh).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let r=n[i].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,n){const i=this.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(this.setAttribute(e,new Jm(t,n)),delete this._maxInstanceCount,this.dispose()):i&&this.deleteAttribute(e)}}const kS=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,zS=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,GS=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,VS=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function HS(a){const e=ou(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new $e},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ft(0,0,0,0)},uTroikaClipRect:{value:new ft(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new $e},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new tt},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new qe},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:kS,vertexTransform:zS,fragmentDefs:GS,fragmentColorTransform:VS,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(Jd,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const qu=new ir({color:16777215,side:fn,transparent:!0}),Bh=8421504,kh=new Et,so=new j,$l=new j,Ya=[],WS=new j,ec="+x+y";function zh(a){return Array.isArray(a)?a[0]:a}let np=()=>{const a=new Bt(new Pn(1,1),qu);return np=()=>a,a},ip=()=>{const a=new Bt(new Pn(1,1,32,1),qu);return ip=()=>a,a};const XS={type:"syncstart"},YS={type:"synccomplete"},rp=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],qS=rp.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class ap extends Bt{constructor(){const e=new BS;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Bh,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ec,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(XS),PS({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent(YS),e&&e()})))}onBeforeRender(e,t,n,i,r,s){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return HS(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=qu.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.hasOutline()){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return zh(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return zh(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:o,blockBounds:l}=i;n.uTroikaSDFTexture.value=o,n.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(l),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,u=0,f=0,h,d,_,x=0,p=0;if(t){let{outlineWidth:S,outlineOffsetX:v,outlineOffsetY:y,outlineBlur:T,outlineOpacity:E}=this;c=this._parsePercent(S)||0,u=Math.max(0,this._parsePercent(T)||0),h=E,x=this._parsePercent(v)||0,p=this._parsePercent(y)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(_=this.strokeColor,n.uTroikaStrokeColor.value.set(_??Bh),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;n.uTroikaEdgeOffset.value=c,n.uTroikaPositionOffset.value.set(x,p),n.uTroikaBlurRadius.value=u,n.uTroikaStrokeWidth.value=f,n.uTroikaStrokeOpacity.value=d,n.uTroikaFillOpacity.value=h??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)n.uTroikaClipRect.value.fromArray(m);else{const S=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(l[0]-S,l[1]-S,l[2]+S,l[3]+S)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new tt;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let s=this.orientation||ec;if(s!==e._orientation){let o=n.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==ec&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;so.set(0,0,0)[u]=c==="-"?1:-1,$l.set(0,0,0)[h]=f==="-"?-1:1,kh.lookAt(WS,so.cross($l),$l),o.setFromMatrix4(kh)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new $e){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new $e){return so.copy(e),this.localPositionToTextCoords(this.worldToLocal(so),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const r=n.blockBounds,s=i?ip():np(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let f=r[0]+c.getX(u)*(r[2]-r[0]);const h=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;i&&(d=i-Math.cos(f/i)*i,f=Math.sin(f/i)*i),l.setXYZ(u,f,h,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Ya.length=0,s.raycast(e,Ya);for(let u=0;u<Ya.length;u++)Ya[u].object=this,t.push(Ya[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,qS.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}rp.forEach(a=>{const e="_private_"+a;Object.defineProperty(ap.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new ti;new tt;function wi(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function sp(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}var Rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ya={duration:.5,overwrite:!1,delay:0},ju,jt,gt,Gn=1e8,dt=1/Gn,cu=Math.PI*2,jS=cu/4,KS=0,op=Math.sqrt,ZS=Math.cos,JS=Math.sin,kt=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},Fi=function(e){return typeof e=="number"},Ku=function(e){return typeof e>"u"},xi=function(e){return typeof e=="object"},pn=function(e){return e!==!1},Zu=function(){return typeof window<"u"},oo=function(e){return Tt(e)||kt(e)},lp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qt=Array.isArray,QS=/random\([^)]+\)/g,$S=/,\s*/g,Gh=/(?:-?\.?\d|\.)+/gi,cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,oa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,up=/[+-]=-?[.\d]+/,eb=/[^,'"\[\]\s]+/gi,tb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,ui,uu,Ju,Un={},Fo={},fp,hp=function(e){return(Fo=Ma(e,Un))&&gn},Qu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xs=function(e,t){return!t&&console.warn(e)},dp=function(e,t){return e&&(Un[e]=t)&&Fo&&(Fo[e]=t)||Un},_s=function(){return 0},nb={suppressEvents:!0,isStart:!0,kill:!1},vo={suppressEvents:!0,kill:!1},ib={suppressEvents:!0},$u={},er=[],fu={},pp,Mn={},nc={},Vh=30,So=[],ef="",tf=function(e){var t=e[0],n,i;if(xi(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=So.length;i--&&!So[i].targetTest(t););n=So[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Bp(e[i],n)))||e.splice(i,1);return e},Rr=function(e){return e._gsap||tf(Vn(e))[0]._gsap},mp=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():Ku(n)&&e.getAttribute&&e.getAttribute(t)||n},mn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},ha=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},rb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},No=function(){var e=er.length,t=er.slice(0),n,i;for(fu={},er.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nf=function(e){return!!(e._initted||e._startAt||e.add)},xp=function(e,t,n,i){er.length&&!jt&&No(),e.render(t,n,!!(jt&&t<0&&nf(e))),er.length&&!jt&&No()},_p=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(eb).length<2?t:kt(e)?e.trim():e},gp=function(e){return e},Dn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ab=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ma=function(e,t){for(var n in t)e[n]=t[n];return e},Hh=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xi(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Oo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},is=function(e){var t=e.parent||bt,n=e.keyframes?ab(Qt(e.keyframes)):Dn;if(pn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},sb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},vp=function(e,t,n,i,r){var s=e[i],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},$o=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},rr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ob=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},hu=function(e,t,n,i){return e._startAt&&(jt?e._startAt.revert(vo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},lb=function a(e){return!e||e._ts&&a(e.parent)},Wh=function(e){return e._repeat?Ta(e._tTime,e=e.duration()+e._rDelay)*e:0},Ta=function(e,t){var n=Math.floor(e=St(e/t));return e&&n===e?n-1:n},Bo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},el=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||dt)||0))},tl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=St(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),el(e),n._dirty||Pr(n,e)),e},Sp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Bo(e.rawTime(),t),(!t._dur||ws(0,t.totalDuration(),n)-t._tTime>dt)&&t.render(n,!0)),Pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-dt}},fi=function(e,t,n,i){return t.parent&&rr(t),t._start=St((Fi(n)?n:n||e!==bt?Bn(e,n,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),vp(e,t,"_first","_last",e._sort?"_start":0),du(t)||(e._recent=t),i||Sp(e,t),e._ts<0&&tl(e,e._tTime),e},bp=function(e,t){return(Un.ScrollTrigger||Qu("scrollTrigger",t))&&Un.ScrollTrigger.create(t,e)},yp=function(e,t,n,i,r){if(af(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&pp!==Tn.frame)return er.push(e),e._lazy=[r,i],1},cb=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},du=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ub=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&cb(e)&&!(!e._initted&&du(e))||(e._ts<0||e._dp._ts<0)&&!du(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=ws(0,e._tDur,t),u=Ta(l,o),e._yoyo&&u&1&&(s=1-s),u!==Ta(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||jt||i||e._zTime===dt||!t&&e._zTime){if(!e._initted&&yp(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?dt:0),n||(n=t&&!f),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&hu(e,t,n,!0),e._onUpdate&&!n&&En(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&En(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&rr(e,1),!n&&!jt&&(En(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ea=function(e,t,n,i){var r=e._repeat,s=St(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:St(s*(r+1)+e._rDelay*r):s,o>0&&!i&&tl(e,e._tTime=e._tDur*o),e.parent&&el(e),n||Pr(e.parent,e),e},Xh=function(e){return e instanceof an?Pr(e):Ea(e,e._dur)},hb={_start:0,endTime:_s,totalDuration:_s},Bn=function a(e,t,n){var i=e.labels,r=e._recent||hb,s=e.duration()>=Gn?r.endTime(!1):e._dur,o,l,c;return kt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Qt(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},rs=function(e,t,n){var i=Fi(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=pn(l.vars.inherit)&&l.parent;s.immediateRender=pn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Dt(t[0],s,t[r+1])},or=function(e,t){return e||e===0?t(e):t},ws=function(e,t,n){return n<e?e:n>t?t:n},Jt=function(e,t){return!kt(e)||!(t=tb.exec(e))?"":t[1]},db=function(e,t,n){return or(n,function(i){return ws(e,t,i)})},pu=[].slice,Mp=function(e,t){return e&&xi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&xi(e[0]))&&!e.nodeType&&e!==ui},pb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return kt(i)&&!t||Mp(i,1)?(r=n).push.apply(r,Vn(i)):n.push(i)})||n},Vn=function(e,t,n){return gt&&!t&&gt.selector?gt.selector(e):kt(e)&&!n&&(uu||!wa())?pu.call((t||Ju).querySelectorAll(e),0):Qt(e)?pb(e,n):Mp(e)?pu.call(e,0):e?[e]:[]},mu=function(e){return e=Vn(e)[0]||xs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Vn(t,n.querySelectorAll?n:n===e?xs("Invalid scope")||Ju.createElement("div"):e)}},Tp=function(e){return e.sort(function(){return .5-Math.random()})},Ep=function(e){if(Tt(e))return e;var t=xi(e)?e:{each:e},n=Ur(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return kt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,_){var x=(_||t).length,p=s[x],m,S,v,y,T,E,w,C,g;if(!p){if(g=t.grid==="auto"?0:(t.grid||[1,Gn])[1],!g){for(w=-Gn;w<(w=_[g++].getBoundingClientRect().left)&&g<x;);g<x&&g--}for(p=s[x]=[],m=l?Math.min(g,x)*u-.5:i%g,S=g===Gn?0:l?x*f/g-.5:i/g|0,w=0,C=Gn,E=0;E<x;E++)v=E%g-m,y=S-(E/g|0),p[E]=T=c?Math.abs(c==="y"?y:v):op(v*v+y*y),T>w&&(w=T),T<C&&(C=T);i==="random"&&Tp(p),p.max=w-C,p.min=C,p.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(g>x?x-1:c?c==="y"?x/g:g:Math.max(g,x/g))||0)*(i==="edges"?-1:1),p.b=x<0?r-x:r,p.u=Jt(t.amount||t.each)||0,n=n&&x<0?Fp(n):n}return x=(p[h]-p.min)/p.max||0,St(p.b+(n?n(x):x)*p.v)+p.u}},xu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=St(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Fi(n)?0:Jt(n))}},wp=function(e,t){var n=Qt(e),i,r;return!n&&xi(e)&&(i=n=e.radius||Gn,e.values?(e=Vn(e.values),(r=!Fi(e[0]))&&(i*=i)):e=xu(e.increment)),or(t,n?Tt(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Gn,u=0,f=e.length,h,d;f--;)r?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:s,r||u===s||Fi(s)?u:u+Jt(s)}:xu(e))},Ap=function(e,t,n,i){return or(Qt(e)?!t:n===!0?!!(n=0):!i,function(){return Qt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},mb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},xb=function(e,t){return function(n){return e(parseFloat(n))+(t||Jt(n))}},_b=function(e,t,n){return Rp(e,t,0,1,n)},Cp=function(e,t,n){return or(n,function(i){return e[~~t(i)]})},gb=function a(e,t,n){var i=t-e;return Qt(e)?Cp(e,a(0,e.length),t):or(n,function(r){return(i+(r-e)%i)%i+e})},vb=function a(e,t,n){var i=t-e,r=i*2;return Qt(e)?Cp(e,a(0,e.length-1),t):or(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},gs=function(e){return e.replace(QS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split($S);return Ap(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Rp=function(e,t,n,i,r){var s=t-e,o=i-n;return or(r,function(l){return n+((l-e)/s*o||0)})},Sb=function a(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var s=kt(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Qt(e)&&!Qt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(a(e[c-1],e[c]));f--,r=function(_){_*=f;var x=Math.min(h,~~_);return u[x](_-x)},n=t}else i||(e=Ma(Qt(e)?[]:{},e));if(!u){for(l in t)rf.call(o,e,l,"get",t[l]);r=function(_){return lf(_,o)||(s?e.p:e)}}}return or(n,r)},Yh=function(e,t,n){var i=e.labels,r=Gn,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},En=function(e,t,n){var i=e.vars,r=i[t],s=gt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&er.length&&No(),o&&(gt=o),u=l?r.apply(c,l):r.call(c),gt=s,u},Za=function(e){return rr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!jt),e.progress()<1&&En(e,"onInterrupt"),e},la,Pp=[],Up=function(e){if(e)if(e=!e.name&&e.default||e,Zu()||e.headless){var t=e.name,n=Tt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:_s,render:lf,add:rf,kill:Nb,modifier:Fb,rawVars:0},s={targetTest:0,get:0,getSetter:of,aliases:{},register:0};if(wa(),e!==i){if(Mn[t])return;Dn(i,Dn(Oo(e,r),s)),Ma(i.prototype,Ma(r,Oo(e,s))),Mn[i.prop=t]=i,e.targetTest&&(So.push(i),$u[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}dp(t,i),e.register&&e.register(gn,i,xn)}else Pp.push(e)},ht=255,Ja={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},ic=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ht+.5|0},Dp=function(e,t,n){var i=e?Fi(e)?[e>>16,e>>8&ht,e&ht]:0:Ja.black,r,s,o,l,c,u,f,h,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ja[e])i=Ja[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ht,i&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Gh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=ic(l+1/3,r,s),i[1]=ic(l,r,s),i[2]=ic(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(cp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Gh)||Ja.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/ht,s=i[1]/ht,o=i[2]/ht,f=Math.max(r,s,o),h=Math.min(r,s,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===r?(s-o)/d+(s<o?6:0):f===s?(o-r)/d+2:(r-s)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Lp=function(e){var t=[],n=[],i=-1;return e.split(tr).forEach(function(r){var s=r.match(oa)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},qh=function(e,t,n){var i="",r=(e+i).match(tr),s=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=Dp(h,t,1))&&s+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Lp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(tr,"1").split(oa),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(tr),f=c.length-1;o<f;o++)i+=c[o]+r[o];return i+c[f]},tr=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ja)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),bb=/hsl[a]?\(/,Ip=function(e){var t=e.join(" "),n;if(tr.lastIndex=0,tr.test(t))return n=bb.test(t),e[1]=qh(e[1],n),e[0]=qh(e[0],n,Lp(e[1])),!0},vs,Tn=(function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,s=r,o=[],l,c,u,f,h,d,_=function x(p){var m=a()-i,S=p===!0,v,y,T,E;if((m>e||m<0)&&(n+=m-t),i+=m,T=i-n,v=T-s,(v>0||S)&&(E=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,s+=v+(v>=r?4:r-v),y=1),S||(l=c(x)),y)for(d=0;d<o.length;d++)o[d](T,h,E,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){fp&&(!uu&&Zu()&&(ui=uu=window,Ju=ui.document||{},Un.gsap=gn,(ui.gsapVersions||(ui.gsapVersions=[])).push(gn.version),hp(Fo||ui.GreenSockGlobals||!ui.gsap&&ui||{}),Pp.forEach(Up)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,s-f.time*1e3+1|0)},vs=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),vs=0,c=_s},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),s=f.time*1e3+r},add:function(p,m,S){var v=m?function(y,T,E,w){p(y,T,E,w),f.remove(v)}:p;return f.remove(p),o[S?"unshift":"push"](v),wa(),v},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f})(),wa=function(){return!vs&&Tn.wake()},Qe={},yb=/^[\d.\-M][\d.\-,\s]/,Mb=/["']/g,Tb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Mb,"").trim():+c,i=l.substr(o+1).trim();return t},Eb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},wb=function(e){var t=(e+"").split("("),n=Qe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Tb(t[1])]:Eb(e).split(",").map(_p)):Qe._CE&&yb.test(e)?Qe._CE("",e):n},Fp=function(e){return function(t){return 1-e(1-t)}},Np=function a(e,t){for(var n=e._first,i;n;)n instanceof an?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ur=function(e,t){return e&&(Tt(e)?e:Qe[e]||wb(e))||t},Nr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return mn(e,function(o){Qe[o]=Un[o]=r,Qe[s=o.toLowerCase()]=n;for(var l in r)Qe[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Qe[o+"."+l]=r[l]}),r},Op=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rc=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/cu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*JS((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Op(o);return r=cu/r,l.config=function(c,u){return a(e,c,u)},l},ac=function a(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Op(n);return i.config=function(r){return a(e,r)},i};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Nr(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Qe.Linear.easeNone=Qe.none=Qe.Linear.easeIn;Nr("Elastic",rc("in"),rc("out"),rc());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Nr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Nr("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Nr("Circ",function(a){return-(op(1-a*a)-1)});Nr("Sine",function(a){return a===1?1:-ZS(a*jS)+1});Nr("Back",ac("in"),ac("out"),ac());Qe.SteppedEase=Qe.steps=Un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-dt;return function(o){return((i*ws(0,s,o)|0)+r)*n}}};ya.ease=Qe["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return ef+=a+","+a+"Params,"});var Bp=function(e,t){this.id=KS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:mp,this.set=t?t.getSetter:of},Ss=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ea(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),vs||Tn.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ea(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(wa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(tl(this,n),!r._dp||r.parent||Sp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===dt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Wh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Wh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ta(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-dt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Bo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-dt?0:this._rts,this.totalTime(ws(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),el(this),ob(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==dt&&(this._tTime-=dt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=St(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ib);var i=jt;return jt=n,nf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),jt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Xh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Xh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Bn(this,n),pn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,pn(i)),this._dur||(this._zTime=-dt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-dt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-dt)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(s){var o=Tt(n)?n:gp,l=function(){var u=i.then;i.then=null,r&&r(),Tt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),s(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Za(this)},a})();Dn(Ss.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-dt,_prom:0,_ps:!1,_rts:1});var an=(function(a){sp(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=pn(n.sortChildren),bt&&fi(n.parent||bt,wi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&bp(wi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return rs(0,arguments,this),this},t.from=function(i,r,s){return rs(1,arguments,this),this},t.fromTo=function(i,r,s,o){return rs(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,is(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Dt(i,r,Bn(this,s),1),this},t.call=function(i,r,s){return fi(this,Dt.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Dt(i,s,Bn(this,l)),this},t.staggerFrom=function(i,r,s,o,l,c,u){return s.runBackwards=1,is(s).immediateRender=pn(s.immediateRender),this.staggerTo(i,r,s,o,l,c,u)},t.staggerFromTo=function(i,r,s,o,l,c,u,f){return o.startAt=s,is(o).immediateRender=pn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,f)},t.render=function(i,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:St(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,x,p,m,S,v,y,T,E,w;if(this!==bt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,v=this._ts,m=!v,f&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,s);if(h=St(u%p),u===l?(x=this._repeat,h=c):(T=St(u/p),x=~~T,x&&x===T&&(h=c,x--),h>c&&(h=c)),T=Ta(this._tTime,p),!o&&this._tTime&&T!==x&&this._tTime-T*p-this._dur<=0&&(T=x),E&&x&1&&(h=c-h,w=1),x!==T&&!this._lock){var C=E&&T&1,g=C===(E&&x&1);if(x<T&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(w?0:St(x*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=x),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,g&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Np(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=fb(this,St(o),St(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!r&&!T&&(En(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,r,s),h!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-dt);break}}d=_}else{d=this._last;for(var b=i<0?i:h;d;){if(_=d._prev,(d._act||b<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,r,s||jt&&nf(d)),h!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=b?-dt:dt);break}}d=_}}if(S&&!r&&(this.pause(),S.render(h>=o?0:-dt)._zTime=h>=o?1:-1,this._ts))return this._start=y,el(this),this.render(i,r,s);this._onUpdate&&!r&&En(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&rr(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(En(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Fi(r)||(r=Bn(this,r,i)),!(i instanceof Ss)){if(Qt(i))return i.forEach(function(o){return s.add(o,r)}),this;if(kt(i))return this.addLabel(i,r);if(Tt(i))i=Dt.delayedCall(0,i);else return this}return this!==i?fi(this,i,r):this},t.getChildren=function(i,r,s,o){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-Gn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Dt?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return kt(i)?this.removeLabel(i):Tt(i)?this.killTweensOf(i):(i.parent===this&&$o(this,i),i===this._recent&&(this._recent=this._last),Pr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(Tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Bn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var o=Dt.delayedCall(0,r||_s,s);return o.data="isPause",this._hasPause=1,fi(this,o,Bn(this,i))},t.removePause=function(i){var r=this._first;for(i=Bn(this,i);r;)r._start===i&&r.data==="isPause"&&rr(r),r=r._next},t.killTweensOf=function(i,r,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)Zi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],o=Vn(i),l=this._first,c=Fi(r),u;l;)l instanceof Dt?rb(l._targets,o)&&(c?(!Zi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,o=Bn(s,i),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=Dt.to(s,Dn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||dt,onStart:function(){if(s.pause(),!d){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==p&&Ea(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},r));return h?_.render(0):_},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,Dn({startAt:{time:Bn(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Yh(this,Bn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Yh(this,Bn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+dt)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);var o=this._first,l=this.labels,c;for(i=St(i);o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Pr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Pr(this)},t.totalDuration=function(i){var r=0,s=this,o=s._last,l=Gn,c,u,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(f=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,fi(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=St(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ea(s,s===bt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(bt._ts&&(xp(bt,Bo(i,bt)),pp=Tn.frame),Tn.frame>=Vh){Vh+=Rn.autoSleep||120;var r=bt._first;if((!r||!r._ts)&&Rn.autoSleep&&Tn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Tn.sleep()}}},e})(Ss);Dn(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ab=function(e,t,n,i,r,s,o){var l=new xn(this._pt,e,t,0,1,Wp,null,r),c=0,u=0,f,h,d,_,x,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=gs(i)),s&&(S=[n,i],s(S,e,t),n=S[0],i=S[1]),h=n.match(tc)||[];f=tc.exec(i);)_=f[0],x=i.substring(c,f.index),d?d=(d+1)%5:x.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:x||u===1?x:",",s:p,c:_.charAt(1)==="="?ha(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=tc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(up.test(i)||m)&&(l.e=0),this._pt=l,l},rf=function(e,t,n,i,r,s,o,l,c,u){Tt(i)&&(i=i(r||0,e,s));var f=e[t],h=n!=="get"?n:Tt(f)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Tt(f)?c?Db:Vp:sf,_;if(kt(i)&&(~i.indexOf("random(")&&(i=gs(i)),i.charAt(1)==="="&&(_=ha(h,i)+(Jt(h)||0),(_||_===0)&&(i=_))),!u||h!==i||_u)return!isNaN(h*i)&&i!==""?(_=new xn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?Ib:Hp,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&Qu(t,i),Ab.call(this,e,t,h,i,d,l||Rn.stringFilter,c))},Cb=function(e,t,n,i,r){if(Tt(e)&&(e=as(e,r,t,n,i)),!xi(e)||e.style&&e.nodeType||Qt(e)||lp(e))return kt(e)?as(e,r,t,n,i):e;var s={},o;for(o in e)s[o]=as(e[o],r,t,n,i);return s},kp=function(e,t,n,i,r,s){var o,l,c,u;if(Mn[e]&&(o=new Mn[e]).init(r,o.rawVars?t[e]:Cb(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new xn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==la))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Zi,_u,af=function a(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=e._dur,x=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!ju,y=e.timeline,T,E,w,C,g,b,U,P,D,I,z,B,Z;if(y&&(!h||!r)&&(r="none"),e._ease=Ur(r,ya.ease),e._yEase=f?Fp(Ur(f===!0?r:f,ya.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!i.runBackwards,!y||h&&!i.stagger){if(P=p[0]?Rr(p[0]).harness:0,B=P&&i[P.prop],T=Oo(i,$u),x&&(x._zTime<0&&x.progress(1),t<0&&u&&o&&!d?x.render(-1,!0):x.revert(u&&_?vo:nb),x._lazy=0),s){if(rr(e._startAt=Dt.set(p,Dn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!x&&pn(l),startAt:null,delay:0,onUpdate:c&&function(){return En(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt||!o&&!d)&&e._startAt.revert(vo),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!x){if(t&&(o=!1),w=Dn({overwrite:!1,data:"isFromStart",lazy:o&&!x&&pn(l),immediateRender:o,stagger:0,parent:m},T),B&&(w[P.prop]=B),rr(e._startAt=Dt.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt?e._startAt.revert(vo):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,dt,dt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&pn(l)||l&&!_,E=0;E<p.length;E++){if(g=p[E],U=g._gsap||tf(p)[E]._gsap,e._ptLookup[E]=I={},fu[U.id]&&er.length&&No(),z=S===p?E:S.indexOf(g),P&&(D=new P).init(g,B||T,e,z,S)!==!1&&(e._pt=C=new xn(e._pt,g,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(W){I[W]=C}),D.priority&&(b=1)),!P||B)for(w in T)Mn[w]&&(D=kp(w,T,e,z,g,S))?D.priority&&(b=1):I[w]=C=rf.call(e,g,w,"get",T[w],z,S,0,i.stringFilter);e._op&&e._op[E]&&e.kill(g,e._op[E]),v&&e._pt&&(Zi=e,bt.killTweensOf(g,I,e.globalTime(t)),Z=!e.parent,Zi=0),e._pt&&l&&(fu[U.id]=1)}b&&Xp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,h&&t<=0&&y.render(Gn,!0,!0)},Rb=function(e,t,n,i,r,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return _u=1,e.vars[t]="+=0",af(e,o),_u=0,l?xs(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!r?i:u.s+(i||0)+s*u.c,u.c=n-u.s,f.e&&(f.e=At(n)+Jt(f.e)),f.b&&(f.b=u.s+Jt(f.b))},Pb=function(e,t){var n=e[0]?Rr(e[0]).harness:0,i=n&&n.aliases,r,s,o,l;if(!i)return t;r=Ma({},t);for(s in i)if(s in r)for(l=i[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},Ub=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,o;if(Qt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},as=function(e,t,n,i,r){return Tt(e)?e.call(t,n,i,r):kt(e)&&~e.indexOf("random(")?gs(e):e},zp=ef+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Gp={};mn(zp+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Gp[a]=1});var Dt=(function(a){sp(e,a);function e(n,i,r,s){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=a.call(this,s?i:is(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,x=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||bt,v=(Qt(n)||lp(n)?Fi(n[0]):"length"in i)?[n]:Vn(n),y,T,E,w,C,g,b,U;if(o._targets=v.length?tf(v):xs("GSAP target "+n+" not found. https://gsap.com",!Rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||oo(c)||oo(u)){if(i=o.vars,y=o.timeline=new an({data:"nested",defaults:x||{},targets:S&&S.data==="nested"?S.vars.targets:v}),y.kill(),y.parent=y._dp=wi(o),y._start=0,h||oo(c)||oo(u)){if(w=v.length,b=h&&Ep(h),xi(h))for(C in h)~zp.indexOf(C)&&(U||(U={}),U[C]=h[C]);for(T=0;T<w;T++)E=Oo(i,Gp),E.stagger=0,m&&(E.yoyoEase=m),U&&Ma(E,U),g=v[T],E.duration=+as(c,wi(o),T,g,v),E.delay=(+as(u,wi(o),T,g,v)||0)-o._delay,!h&&w===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),y.to(g,E,b?b(T,g,v):0),y._ease=Qe.none;y.duration()?c=u=0:o.timeline=0}else if(_){is(Dn(y.vars.defaults,{ease:"none"})),y._ease=Ur(_.ease||i.ease||"none");var P=0,D,I,z;if(Qt(_))_.forEach(function(B){return y.to(v,B,">")}),y.duration();else{E={};for(C in _)C==="ease"||C==="easeEach"||Ub(C,_[C],E,_.easeEach);for(C in E)for(D=E[C].sort(function(B,Z){return B.t-Z.t}),P=0,T=0;T<D.length;T++)I=D[T],z={ease:I.e,duration:(I.t-(T?D[T-1].t:0))/100*c},z[C]=I.v,y.to(v,z,P),P+=z.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!ju&&(Zi=wi(o),bt.killTweensOf(v),Zi=0),fi(S,wi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===St(S._time)&&pn(f)&&lb(wi(o))&&S.data!=="nested")&&(o._tTime=-dt,o.render(Math.max(0,-u)||0)),p&&bp(wi(o),p),o}var t=e.prototype;return t.render=function(i,r,s){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-dt&&!u?l:i<dt?0:i,h,d,_,x,p,m,S,v,y;if(!c)ub(this,i,r,s);else if(f!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,v=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(x*100+i,r,s);if(h=St(f%x),f===l?(_=this._repeat,h=c):(p=St(f/x),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(y=this._yEase,h=c-h),p=Ta(this._tTime,x),h===o&&!s&&this._initted&&_===p)return this._tTime=f,this;_!==p&&(v&&this._yEase&&Np(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==x&&this._initted&&(this._lock=s=1,this.render(St(x*_),!0).invalidate()._lock=0))}if(!this._initted){if(yp(this,u?i:h,s,r,f))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(h/c),this._from&&(this.ratio=S=1-S),!o&&f&&!r&&!p&&(En(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(h/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&hu(this,i,r,s),En(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&En(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&hu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&rr(this,1),!r&&!(u&&!o)&&(f||o||m)&&(En(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,o,l){vs||Tn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||af(this,c),u=this._ease(c/this._dur),Rb(this,i,r,s,o,u,c,l)?this.resetTo(i,r,s,o,1):(tl(this,0),this.parent||vp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Za(this):this.scrollTrigger&&this.scrollTrigger.kill(!!jt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Zi&&Zi.vars.overwrite!==!0)._first||Za(this),this.parent&&s!==this.timeline.totalDuration()&&Ea(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?Vn(i):o,c=this._ptLookup,u=this._pt,f,h,d,_,x,p,m;if((!r||r==="all")&&sb(o,l))return r==="all"&&(this._pt=0),Za(this);for(f=this._op=this._op||[],r!=="all"&&(kt(r)&&(x={},mn(r,function(S){return x[S]=1}),r=x),r=Pb(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],r==="all"?(f[m]=r,_=h,d={}):(d=f[m]=f[m]||{},_=r);for(x in _)p=h&&h[x],p&&((!("kill"in p.d)||p.d.kill(x)===!0)&&$o(this,p,"_pt"),delete h[x]),d!=="all"&&(d[x]=1)}return this._initted&&!this._pt&&u&&Za(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return rs(1,arguments)},e.delayedCall=function(i,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,r,s){return rs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return bt.killTweensOf(i,r,s)},e})(Ss);Dn(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(a){Dt[a]=function(){var e=new an,t=pu.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var sf=function(e,t,n){return e[t]=n},Vp=function(e,t,n){return e[t](n)},Db=function(e,t,n,i){return e[t](i.fp,n)},Lb=function(e,t,n){return e.setAttribute(t,n)},of=function(e,t){return Tt(e[t])?Vp:Ku(e[t])&&e.setAttribute?Lb:sf},Hp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ib=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Wp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},lf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Fb=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},Nb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?$o(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ob=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Xp=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},xn=(function(){function a(t,n,i,r,s,o,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=o||Hp,this.d=l||this,this.set=c||sf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ob,this.m=n,this.mt=r,this.tween=i},a})();mn(ef+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return $u[a]=1});Un.TweenMax=Un.TweenLite=Dt;Un.TimelineLite=Un.TimelineMax=an;bt=new an({sortChildren:!1,defaults:ya,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Rn.stringFilter=Ip;var Dr=[],bo={},Bb=[],jh=0,kb=0,sc=function(e){return(bo[e]||Bb).map(function(t){return t()})},gu=function(){var e=Date.now(),t=[];e-jh>2&&(sc("matchMediaInit"),Dr.forEach(function(n){var i=n.queries,r=n.conditions,s,o,l,c;for(o in i)s=ui.matchMedia(i[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),sc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),jh=e,sc("matchMedia"))},Yp=(function(){function a(t,n){this.selector=n&&mu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=kb++,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){Tt(n)&&(r=i,i=n,n=Tt);var s=this,o=function(){var c=gt,u=s.selector,f;return c&&c!==s&&c.data.push(s),r&&(s.selector=mu(r)),gt=s,f=i.apply(s,arguments),Tt(f)&&s._r.push(f),gt=c,s.selector=u,s.isReverted=!1,f};return s.last=o,n===Tt?o(s,function(l){return s.add(null,l)}):n?s[n]=o:o},e.ignore=function(n){var i=gt;gt=null,n(this),gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof Dt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof an?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Dt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var s=Dr.length;s--;)Dr[s].id===this.id&&Dr.splice(s,1)},e.revert=function(n){this.kill(n||{})},a})(),zb=(function(){function a(t){this.contexts=[],this.scope=t,gt&&gt.data.push(this)}var e=a.prototype;return e.add=function(n,i,r){xi(n)||(n={matches:n});var s=new Yp(0,r||this.scope),o=s.conditions={},l,c,u;gt&&!s.selector&&(s.selector=gt.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=ui.matchMedia(n[c]),l&&(Dr.indexOf(s)<0&&Dr.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(gu):l.addEventListener("change",gu)));return u&&i(s,function(f){return s.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a})(),ko={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Up(i)})},timeline:function(e){return new an(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){kt(e)&&(e=Vn(e)[0]);var r=Rr(e||{}).get,s=n?gp:_p;return n==="native"&&(n=""),e&&(t?s((Mn[t]&&Mn[t].get||r)(e,t,n,i)):function(o,l,c){return s((Mn[o]&&Mn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Vn(e),e.length>1){var i=e.map(function(u){return gn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}e=e[0]||{};var s=Mn[t],o=Rr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var f=new s;la._pt=0,f.init(e,n?u+n:u,la,0,[e]),f.render(1,f),la._pt&&lf(1,la)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=gn.to(e,Dn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ur(e.ease,ya.ease)),Hh(ya,e||{})},config:function(e){return Hh(Rn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Mn[o]&&!Un[o]&&xs(t+" effect requires "+o+" plugin.")}),nc[t]=function(o,l,c){return n(Vn(o),Dn(l||{},r),c)},s&&(an.prototype[t]=function(o,l,c){return this.add(nc[t](o,xi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Qe[e]=Ur(t)},parseEase:function(e,t){return arguments.length?Ur(e,t):Qe},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new an(e),i,r;for(n.smoothChildTiming=pn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,i=bt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Dt&&i.vars.onComplete===i._targets[0]))&&fi(n,i,i._start-i._delay),i=r;return fi(bt,n,0),n},context:function(e,t){return e?new Yp(e,t):gt},matchMedia:function(e){return new zb(e)},matchMediaRefresh:function(){return Dr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||gu()},addEventListener:function(e,t){var n=bo[e]||(bo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=bo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:gb,wrapYoyo:vb,distribute:Ep,random:Ap,snap:wp,normalize:_b,getUnit:Jt,clamp:db,splitColor:Dp,toArray:Vn,selector:mu,mapRange:Rp,pipe:mb,unitize:xb,interpolate:Sb,shuffle:Tp},install:hp,effects:nc,ticker:Tn,updateRoot:an.updateRoot,plugins:Mn,globalTimeline:bt,core:{PropTween:xn,globals:dp,Tween:Dt,Timeline:an,Animation:Ss,getCache:Rr,_removeLinkedListItem:$o,reverting:function(){return jt},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return ju=e}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return ko[a]=Dt[a]});Tn.add(an.updateRoot);la=ko.to({},{duration:0});var Gb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Vb=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=Gb(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},oc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,s){s._onInit=function(o){var l,c;if(kt(r)&&(l={},mn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Vb(o,r)}}}},gn=ko.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)jt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},oc("roundProps",xu),oc("modifiers"),oc("snap",wp))||ko;Dt.version=an.version=gn.version="3.14.2";fp=1;Zu()&&wa();Qe.Power0;Qe.Power1;Qe.Power2;Qe.Power3;Qe.Power4;Qe.Linear;Qe.Quad;Qe.Cubic;Qe.Quart;Qe.Quint;Qe.Strong;Qe.Elastic;Qe.Back;Qe.SteppedEase;Qe.Bounce;Qe.Sine;Qe.Expo;Qe.Circ;var Kh,Ji,da,cf,Er,Zh,uf,Hb=function(){return typeof window<"u"},Ni={},br=180/Math.PI,pa=Math.PI/180,sa=Math.atan2,Jh=1e8,ff=/([A-Z])/g,Wb=/(left|right|width|margin|padding|x)/i,Xb=/[\s,\(]\S/,pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Kb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},qp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},jp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Zb=function(e,t,n){return e.style[t]=n},Jb=function(e,t,n){return e.style.setProperty(t,n)},Qb=function(e,t,n){return e._gsap[t]=n},$b=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ey=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},ty=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},yt="transform",_n=yt+"Origin",ny=function a(e,t){var n=this,i=this.target,r=i.style,s=i._gsap;if(e in Ni&&r){if(this.tfm=this.tfm||{},e!=="transform")e=pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ai(i,o)}):this.tfm[e]=s.x?s[e]:Ai(i,e),e===_n&&(this.tfm.zOrigin=s.zOrigin);else return pi.transform.split(",").forEach(function(o){return a.call(n,o,t)});if(this.props.indexOf(yt)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(_n,t,"")),e=yt}(r||t)&&this.props.push(e,t,r[e])},Kp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},iy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(ff,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=uf(),(!r||!r.isStart)&&!n[yt]&&(Kp(n),i.zOrigin&&n[_n]&&(n[_n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Zp=function(e,t){var n={target:e,props:[],revert:iy,save:ny};return e._gsap||gn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Jp,Su=function(e,t){var n=Ji.createElementNS?Ji.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ji.createElement(e);return n&&n.style?n:Ji.createElement(e)},wn=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ff,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Aa(t)||t,1)||""},Qh="O,Moz,ms,Ms,Webkit".split(","),Aa=function(e,t,n){var i=t||Er,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Qh[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Qh[s]:"")+e},bu=function(){Hb()&&window.document&&(Kh=window,Ji=Kh.document,da=Ji.documentElement,Er=Su("div")||{style:{}},Su("div"),yt=Aa(yt),_n=yt+"Origin",Er.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Jp=!!Aa("perspective"),uf=gn.core.reverting,cf=1)},$h=function(e){var t=e.ownerSVGElement,n=Su("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),da.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),da.removeChild(n),r},ed=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Qp=function(e){var t,n;try{t=e.getBBox()}catch{t=$h(e),n=1}return t&&(t.width||t.height)||n||(t=$h(e)),t&&!t.width&&!t.x&&!t.y?{x:+ed(e,["x","cx","x1"])||0,y:+ed(e,["y","cy","y1"])||0,width:0,height:0}:t},$p=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Qp(e))},ar=function(e,t){if(t){var n=e.style,i;t in Ni&&t!==_n&&(t=yt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ff,"-$1").toLowerCase())):n.removeAttribute(t)}},Qi=function(e,t,n,i,r,s){var o=new xn(e._pt,t,n,0,1,s?jp:qp);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},td={deg:1,rad:1,turn:1},ry={grid:1,flex:1},sr=function a(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=Er.style,l=Wb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,x,p,m;if(i===s||!r||td[i]||td[s])return r;if(s!=="px"&&!h&&(r=a(e,t,n,"px")),m=e.getCTM&&$p(e),(d||s==="%")&&(Ni[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],At(d?r/_*f:r/100*_);if(o[l?"width":"height"]=f+(h?s:i),x=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===Ji||!x.appendChild)&&(x=Ji.body),p=x._gsap,p&&d&&p.width&&l&&p.time===Tn.time&&!p.uncache)return At(r/p.width*f);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+i,_=e[u],S?e.style[t]=S:ar(e,t)}else(d||s==="%")&&!ry[wn(x,"display")]&&(o.position=wn(e,"position")),x===e&&(o.position="static"),x.appendChild(Er),_=Er[u],x.removeChild(Er),o.position="absolute";return l&&d&&(p=Rr(x),p.time=Tn.time,p.width=x[u]),At(h?_*r/f:_&&r?f/_*r:0)},Ai=function(e,t,n,i){var r;return cf||bu(),t in pi&&t!=="transform"&&(t=pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ni[t]&&t!=="transform"?(r=ys(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Go(wn(e,_n))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=zo[t]&&zo[t](e,t,n)||wn(e,t)||mp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?sr(e,t,r,n)+n:r},ay=function(e,t,n,i){if(!n||n==="none"){var r=Aa(t,e,1),s=r&&wn(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=wn(e,"borderTopColor"))}var o=new xn(this._pt,e.style,t,0,1,Wp),l=0,c=0,u,f,h,d,_,x,p,m,S,v,y,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=wn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=e.style[t],e.style[t]=i,i=wn(e,t)||i,x?e.style[t]=x:ar(e,t)),u=[n,i],Ip(u),n=u[0],i=u[1],h=n.match(oa)||[],T=i.match(oa)||[],T.length){for(;f=oa.exec(i);)p=f[0],S=i.substring(l,f.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(x=h[c++]||"")&&(d=parseFloat(x)||0,y=x.substr((d+"").length),p.charAt(1)==="="&&(p=ha(d,p)+y),m=parseFloat(p),v=p.substr((m+"").length),l=oa.lastIndex-v.length,v||(v=v||Rn.units[t]||y,l===i.length&&(i+=v,o.e+=v)),y!==v&&(d=sr(e,t,x,v)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?jp:qp;return up.test(i)&&(o.e=0),this._pt=o,o},nd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=nd[n]||n,t[1]=nd[i]||i,t.join(" ")},oy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ni[o]&&(l=1,o=o==="transformOrigin"?_n:yt),ar(n,o);l&&(ar(n,yt),s&&(s.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ys(n,1),s.uncache=1,Kp(i)))}},zo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new xn(e._pt,t,n,0,0,oy);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},bs=[1,0,0,1,0,0],e0={},t0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},id=function(e){var t=wn(e,yt);return t0(t)?bs:t.substr(7).match(cp).map(At)},hf=function(e,t){var n=e._gsap||Rr(e),i=e.style,r=id(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?bs:r):(r===bs&&!e.offsetParent&&e!==da&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,da.appendChild(e)),r=id(e),l?i.display=l:ar(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):da.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},yu=function(e,t,n,i,r,s){var o=e._gsap,l=r||hf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],_=l[1],x=l[2],p=l[3],m=l[4],S=l[5],v=t.split(" "),y=parseFloat(v[0])||0,T=parseFloat(v[1])||0,E,w,C,g;n?l!==bs&&(w=d*p-_*x)&&(C=y*(p/w)+T*(-x/w)+(x*S-p*m)/w,g=y*(-_/w)+T*(d/w)-(d*S-_*m)/w,y=C,T=g):(E=Qp(e),y=E.x+(~v[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(v[1]||v[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&o.smooth?(m=y-c,S=T-u,o.xOffset=f+(m*d+S*x)-m,o.yOffset=h+(m*_+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[_n]="0px 0px",s&&(Qi(s,o,"xOrigin",c,y),Qi(s,o,"yOrigin",u,T),Qi(s,o,"xOffset",f,o.xOffset),Qi(s,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},ys=function(e,t){var n=e._gsap||new Bp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=wn(e,_n)||"0",u,f,h,d,_,x,p,m,S,v,y,T,E,w,C,g,b,U,P,D,I,z,B,Z,W,Y,H,F,X,ie,ne,Q;return u=f=h=x=p=m=S=v=y=0,d=_=1,n.svg=!!(e.getCTM&&$p(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),i.scale=i.rotate=i.translate="none"),w=hf(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),yu(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,w)),T=n.xOrigin||0,E=n.yOrigin||0,w!==bs&&(U=w[0],P=w[1],D=w[2],I=w[3],u=z=w[4],f=B=w[5],w.length===6?(d=Math.sqrt(U*U+P*P),_=Math.sqrt(I*I+D*D),x=U||P?sa(P,U)*br:0,S=D||I?sa(D,I)*br+x:0,S&&(_*=Math.abs(Math.cos(S*pa))),n.svg&&(u-=T-(T*U+E*D),f-=E-(T*P+E*I))):(Q=w[6],ie=w[7],H=w[8],F=w[9],X=w[10],ne=w[11],u=w[12],f=w[13],h=w[14],C=sa(Q,X),p=C*br,C&&(g=Math.cos(-C),b=Math.sin(-C),Z=z*g+H*b,W=B*g+F*b,Y=Q*g+X*b,H=z*-b+H*g,F=B*-b+F*g,X=Q*-b+X*g,ne=ie*-b+ne*g,z=Z,B=W,Q=Y),C=sa(-D,X),m=C*br,C&&(g=Math.cos(-C),b=Math.sin(-C),Z=U*g-H*b,W=P*g-F*b,Y=D*g-X*b,ne=I*b+ne*g,U=Z,P=W,D=Y),C=sa(P,U),x=C*br,C&&(g=Math.cos(C),b=Math.sin(C),Z=U*g+P*b,W=z*g+B*b,P=P*g-U*b,B=B*g-z*b,U=Z,z=W),p&&Math.abs(p)+Math.abs(x)>359.9&&(p=x=0,m=180-m),d=At(Math.sqrt(U*U+P*P+D*D)),_=At(Math.sqrt(B*B+Q*Q)),C=sa(z,B),S=Math.abs(C)>2e-4?C*br:0,y=ne?1/(ne<0?-ne:ne):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!t0(wn(e,yt)),Z&&e.setAttribute("transform",Z))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=x<=0?180:-180,x+=x<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=h+s,n.scaleX=At(d),n.scaleY=At(_),n.rotation=At(x)+o,n.rotationX=At(p)+o,n.rotationY=At(m)+o,n.skewX=S+o,n.skewY=v+o,n.transformPerspective=y+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[_n]=Go(c)),n.xOffset=n.yOffset=0,n.force3D=Rn.force3D,n.renderTransform=n.svg?cy:Jp?n0:ly,n.uncache=0,n},Go=function(e){return(e=e.split(" "))[0]+" "+e[1]},lc=function(e,t,n){var i=Jt(t);return At(parseFloat(t)+parseFloat(sr(e,"x",n+"px",i)))+i},ly=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,n0(e,t)},gr="0deg",qa="0px",vr=") ",n0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,x=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,v=n.zOrigin,y="",T=m==="auto"&&e&&e!==1||m===!0;if(v&&(f!==gr||u!==gr)){var E=parseFloat(u)*pa,w=Math.sin(E),C=Math.cos(E),g;E=parseFloat(f)*pa,g=Math.cos(E),s=lc(S,s,w*g*-v),o=lc(S,o,-Math.sin(E)*-v),l=lc(S,l,C*g*-v+v)}p!==qa&&(y+="perspective("+p+vr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||s!==qa||o!==qa||l!==qa)&&(y+=l!==qa||T?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+vr),c!==gr&&(y+="rotate("+c+vr),u!==gr&&(y+="rotateY("+u+vr),f!==gr&&(y+="rotateX("+f+vr),(h!==gr||d!==gr)&&(y+="skew("+h+", "+d+vr),(_!==1||x!==1)&&(y+="scale("+_+", "+x+vr),S.style[yt]=y||"translate(0, 0)"},cy=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,x=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,v=parseFloat(s),y=parseFloat(o),T,E,w,C,g;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=pa,c*=pa,T=Math.cos(l)*f,E=Math.sin(l)*f,w=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=pa,g=Math.tan(c-u),g=Math.sqrt(1+g*g),w*=g,C*=g,u&&(g=Math.tan(u),g=Math.sqrt(1+g*g),T*=g,E*=g)),T=At(T),E=At(E),w=At(w),C=At(C)):(T=f,C=h,E=w=0),(v&&!~(s+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(v=sr(d,"x",s,"px"),y=sr(d,"y",o,"px")),(_||x||p||m)&&(v=At(v+_-(_*T+x*w)+p),y=At(y+x-(_*E+x*C)+m)),(i||r)&&(g=d.getBBox(),v=At(v+i/100*g.width),y=At(y+r/100*g.height)),g="matrix("+T+","+E+","+w+","+C+","+v+","+y+")",d.setAttribute("transform",g),S&&(d.style[yt]=g)},uy=function(e,t,n,i,r){var s=360,o=kt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?br:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),f==="cw"&&c<0?c=(c+s*Jh)%s-~~(c/s)*s:f==="ccw"&&c>0&&(c=(c-s*Jh)%s-~~(c/s)*s)),e._pt=h=new xn(e._pt,t,n,i,c,Yb),h.e=u,h.u="deg",e._props.push(n),h},rd=function(e,t){for(var n in t)e[n]=t[n];return e},fy=function(e,t,n){var i=rd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[yt]=t,o=ys(n,1),ar(n,yt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[yt],s[yt]=t,o=ys(n,1),s[yt]=c);for(l in Ni)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=Jt(c),_=Jt(u),f=d!==_?sr(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new xn(e._pt,o,l,f,h-f,vu),e._pt.u=_||0,e._props.push(l));rd(o,i)};mn("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?a+o:"border"+o+a});zo[e>1?"border"+a:a]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=s.map(function(_){return Ai(o,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},s.forEach(function(_,x){return d[_]=h[x]=h[x]||h[(x-1)/2|0]}),o.init(l,d,f)}});var i0={name:"css",register:bu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,_,x,p,m,S,v,y,T,E,w,C,g;cf||bu(),this.styles=this.styles||Zp(e),C=this.styles.props,this.tween=n;for(x in t)if(x!=="autoRound"&&(u=t[x],!(Mn[x]&&kp(x,t,n,i,e,r)))){if(d=typeof u,_=zo[x],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=gs(u)),_)_(this,e,x,u,n)&&(w=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(x)+"").trim(),u+="",tr.lastIndex=0,tr.test(c)||(p=Jt(c),m=Jt(u),m?p!==m&&(c=sr(e,x,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,r,0,0,x),s.push(x),C.push(x,0,o[x]);else if(d!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,e,r):l[x],kt(c)&&~c.indexOf("random(")&&(c=gs(c)),Jt(c+"")||c==="auto"||(c+=Rn.units[x]||Jt(Ai(e,x))||""),(c+"").charAt(1)==="="&&(c=Ai(e,x))):c=Ai(e,x),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),x in pi&&(x==="autoAlpha"&&(h===1&&Ai(e,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,o.visibility),Qi(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),x!=="scale"&&x!=="transform"&&(x=pi[x],~x.indexOf(",")&&(x=x.split(",")[0]))),v=x in Ni,v){if(this.styles.save(x),g=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=wn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=u,u=wn(e,"perspective"),b?e.style.perspective=b:ar(e,"perspective")}f=parseFloat(u)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||ys(e,t.parseTransform),E=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new xn(this._pt,o,yt,0,1,T.renderTransform,T,0,-1),y.dep=1),x==="scale")this._pt=new xn(this._pt,T,"scaleY",T.scaleY,(S?ha(T.scaleY,S+f):f)-T.scaleY||0,vu),this._pt.u=0,s.push("scaleY",x),x+="X";else if(x==="transformOrigin"){C.push(_n,0,o[_n]),u=sy(u),T.svg?yu(e,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==T.zOrigin&&Qi(this,T,"zOrigin",T.zOrigin,m),Qi(this,o,x,Go(c),Go(u)));continue}else if(x==="svgOrigin"){yu(e,u,1,E,0,this);continue}else if(x in e0){uy(this,T,x,h,S?ha(h,S+u):u);continue}else if(x==="smoothOrigin"){Qi(this,T,"smooth",T.smooth,u);continue}else if(x==="force3D"){T[x]=u;continue}else if(x==="transform"){fy(this,u,e);continue}}else x in o||(x=Aa(x)||x);if(v||(f||f===0)&&(h||h===0)&&!Xb.test(u)&&x in o)p=(c+"").substr((h+"").length),f||(f=0),m=Jt(u)||(x in Rn.units?Rn.units[x]:p),p!==m&&(h=sr(e,x,c,m)),this._pt=new xn(this._pt,v?T:o,x,h,(S?ha(h,S+f):f)-h,!v&&(m==="px"||x==="zIndex")&&t.autoRound!==!1?Kb:vu),this._pt.u=m||0,v&&g!==u?(this._pt.b=c,this._pt.e=g,this._pt.r=jb):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=qb);else if(x in o)ay.call(this,e,x,c,S?S+u:u);else if(x in e)this.add(e,x,c||e[x],S?S+u:u,i,r);else if(x!=="parseTransform"){Qu(x,u);continue}v||(x in o?C.push(x,0,o[x]):typeof e[x]=="function"?C.push(x,2,e[x]()):C.push(x,1,c||e[x])),s.push(x)}}w&&Xp(this)},render:function(e,t){if(t.tween._time||!uf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ai,aliases:pi,getSetter:function(e,t,n){var i=pi[t];return i&&i.indexOf(",")<0&&(t=i),t in Ni&&t!==_n&&(e._gsap.x||Ai(e,"x"))?n&&Zh===n?t==="scale"?$b:Qb:(Zh=n||{})&&(t==="scale"?ey:ty):e.style&&!Ku(e.style[t])?Zb:~t.indexOf("-")?Jb:of(e,t)},core:{_removeProperty:ar,_getMatrix:hf}};gn.utils.checkPrefix=Aa;gn.core.getStyleSaver=Zp;(function(a,e,t,n){var i=mn(a+","+e+","+t,function(r){Ni[r]=1});mn(e,function(r){Rn.units[r]="deg",e0[r]=1}),pi[i[13]]=a+","+e,mn(n,function(r){var s=r.split(":");pi[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Rn.units[a]="px"});gn.registerPlugin(i0);var r0=gn.registerPlugin(i0)||gn;r0.core.Tween;const ad=new ti,lo=new j;class a0 extends Hd{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new mi(e,3)),this.setAttribute("uv",new mi(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new nu(t,6,1);return this.setAttribute("instanceStart",new ji(n,3,0)),this.setAttribute("instanceEnd",new ji(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new nu(t,6,1);return this.setAttribute("instanceColorStart",new ji(n,3,0)),this.setAttribute("instanceColorEnd",new ji(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new tx(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ad.setFromBufferAttribute(t),this.boundingBox.union(ad))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)lo.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(lo)),lo.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(lo));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Ue.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $e(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};un.line={uniforms:Ko.merge([Ue.common,Ue.fog,Ue.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class nl extends ei{constructor(e){super({type:"LineMaterial",uniforms:Ko.clone(un.line.uniforms),vertexShader:un.line.vertexShader,fragmentShader:un.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const cc=new ft,sd=new j,od=new j,Vt=new ft,Ht=new ft,li=new ft,uc=new j,fc=new Et,Xt=new fx,ld=new j,co=new ti,uo=new Pa,ci=new ft;let hi,Lr;function cd(a,e,t){return ci.set(0,0,-e,1).applyMatrix4(a.projectionMatrix),ci.multiplyScalar(1/ci.w),ci.x=Lr/t.width,ci.y=Lr/t.height,ci.applyMatrix4(a.projectionMatrixInverse),ci.multiplyScalar(1/ci.w),Math.abs(Math.max(ci.x,ci.y))}function hy(a,e){const t=a.matrixWorld,n=a.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,s=Math.min(n.instanceCount,i.count);for(let o=0,l=s;o<l;o++){Xt.start.fromBufferAttribute(i,o),Xt.end.fromBufferAttribute(r,o),Xt.applyMatrix4(t);const c=new j,u=new j;hi.distanceSqToSegment(Xt.start,Xt.end,u,c),u.distanceTo(c)<Lr*.5&&e.push({point:u,pointOnLine:c,distance:hi.origin.distanceTo(u),object:a,face:null,faceIndex:o,uv:null,uv1:null})}}function dy(a,e,t){const n=e.projectionMatrix,r=a.material.resolution,s=a.matrixWorld,o=a.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),f=-e.near;hi.at(1,li),li.w=1,li.applyMatrix4(e.matrixWorldInverse),li.applyMatrix4(n),li.multiplyScalar(1/li.w),li.x*=r.x/2,li.y*=r.y/2,li.z=0,uc.copy(li),fc.multiplyMatrices(e.matrixWorldInverse,s);for(let h=0,d=u;h<d;h++){if(Vt.fromBufferAttribute(l,h),Ht.fromBufferAttribute(c,h),Vt.w=1,Ht.w=1,Vt.applyMatrix4(fc),Ht.applyMatrix4(fc),Vt.z>f&&Ht.z>f)continue;if(Vt.z>f){const v=Vt.z-Ht.z,y=(Vt.z-f)/v;Vt.lerp(Ht,y)}else if(Ht.z>f){const v=Ht.z-Vt.z,y=(Ht.z-f)/v;Ht.lerp(Vt,y)}Vt.applyMatrix4(n),Ht.applyMatrix4(n),Vt.multiplyScalar(1/Vt.w),Ht.multiplyScalar(1/Ht.w),Vt.x*=r.x/2,Vt.y*=r.y/2,Ht.x*=r.x/2,Ht.y*=r.y/2,Xt.start.copy(Vt),Xt.start.z=0,Xt.end.copy(Ht),Xt.end.z=0;const x=Xt.closestPointToPointParameter(uc,!0);Xt.at(x,ld);const p=Tm.lerp(Vt.z,Ht.z,x),m=p>=-1&&p<=1,S=uc.distanceTo(ld)<Lr*.5;if(m&&S){Xt.start.fromBufferAttribute(l,h),Xt.end.fromBufferAttribute(c,h),Xt.start.applyMatrix4(s),Xt.end.applyMatrix4(s);const v=new j,y=new j;hi.distanceSqToSegment(Xt.start,Xt.end,y,v),t.push({point:y,pointOnLine:v,distance:hi.origin.distanceTo(y),object:a,face:null,faceIndex:h,uv:null,uv1:null})}}}class py extends Bt{constructor(e=new a0,t=new nl({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let s=0,o=0,l=t.count;s<l;s++,o+=2)sd.fromBufferAttribute(t,s),od.fromBufferAttribute(n,s),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+sd.distanceTo(od);const r=new nu(i,2,1);return e.setAttribute("instanceDistanceStart",new ji(r,1,0)),e.setAttribute("instanceDistanceEnd",new ji(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;hi=e.ray;const s=this.matrixWorld,o=this.geometry,l=this.material;Lr=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),uo.copy(o.boundingSphere).applyMatrix4(s);let c;if(n)c=Lr*.5;else{const f=Math.max(i.near,uo.distanceToPoint(hi.origin));c=cd(i,f,l.resolution)}if(uo.radius+=c,hi.intersectsSphere(uo)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),co.copy(o.boundingBox).applyMatrix4(s);let u;if(n)u=Lr*.5;else{const f=Math.max(i.near,co.distanceToPoint(hi.origin));u=cd(i,f,l.resolution)}co.expandByScalar(u),hi.intersectsBox(co)!==!1&&(n?hy(this,t):dy(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(cc),this.material.uniforms.resolution.value.set(cc.z,cc.w))}}class df extends a0{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}setFromPoints(e){const t=e.length-1,n=new Float32Array(6*t);for(let i=0;i<t;i++)n[6*i]=e[i].x,n[6*i+1]=e[i].y,n[6*i+2]=e[i].z||0,n[6*i+3]=e[i+1].x,n[6*i+4]=e[i+1].y,n[6*i+5]=e[i+1].z||0;return super.setPositions(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class s0 extends py{constructor(e=new df,t=new nl({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const my=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,xy=`
  uniform sampler2D uTexture;
  uniform float uTime;
  
  // uniform float uTransition; // 0 = Sketch, 1 = Full Texture w/ Shadow
  // CONTROL UNIFORMS
  uniform float uTextureReveal; // 0.0 = Stroke, 1.0 = Flat Moon
  uniform float uPhaseStrength; // 0.0 = No Shadow, 1.0 = Full Shadow

  varying vec2 vUv;

  #define PI 3.14159265359

  void main() {
    // 1. Setup Coordinates (Center at 0,0)
    vec2 centeredUv = vUv * 2.0 - 1.0;
    float dist = length(centeredUv);
    
    // Create a perfect circle mask (discard pixels outside)
    float alpha = 1.0 - smoothstep(0.98, 1.0, dist);
    if (dist > 1.0) discard;

    // --- PHASE 1: THE SKETCH (Stroke) ---
    // Create a ring: 1.0 at edge, 0.0 elsewhere
    float ring = smoothstep(0.95, 0.96, dist) - smoothstep(0.99, 1.0, dist);
    vec3 strokeColor = vec3(0.0); // Black stroke
    
    // Background for sketch (transparent or paper color? Let's go transparent)
    vec4 sketchLayer = vec4(strokeColor, ring);

    // --- PHASE 2: THE TEXTURE ---
    vec4 moonTex = texture2D(uTexture, vUv);
    
    // --- PHASE 3: THE SHADOW (Phases) ---
    // We calculate a "fake" normal to make the flat circle look like a sphere
    // Z is calculated based on X and Y to simulate curvature
    float z = sqrt(1.0 - centeredUv.x * centeredUv.x - centeredUv.y * centeredUv.y);
    vec3 normal = normalize(vec3(centeredUv, z));

    // Rotate light direction based on time
    // We only rotate X and Z to simulate the moon phase cycle
    float phaseSpeed = uTime * 0.2; 
    vec3 lightDir = normalize(vec3(sin(phaseSpeed), 0.0, cos(phaseSpeed)));

    // Calculate Diffuse lighting (The Shadow)
    // We use a wrap lighting or standard dot product. 
    // smoothstep helps soften the shadow terminator line.
    float light = dot(normal, lightDir);
    float shadow = smoothstep(-0.2, 0.2, light); // Soft shadow edge

    // Ambient light (so the dark side isn't pure black)
    float ambient = 0.05;
    float shadowFactor = shadow + ambient;

    // IMPORTANT: Mix the shadow based on uPhaseStrength
    // If uPhaseStrength is 0, lighting is 1.0 (fully lit flat texture)
    // If uPhaseStrength is 1, lighting is shadowFactor (calculated phases)
    float finalLighting = mix(1.0, shadowFactor, uPhaseStrength);
    
    // Apply shadow to texture. Keep ambient light (0.05) so it's not pitch black
    vec3 litMoon = moonTex.rgb * finalLighting;

    // --- MIXING IT ALL TOGETHER ---
    
    // We can also add a "blur" effect during transition by manipulating LOD or mixing noise
    // But for simplicity, a crossfade works beautifully here.
    
    // vec4 finalMoon = vec4(litMoon, 1.0);
    
    // Interpolate between Sketch Alpha and Texture Alpha
    float finalAlpha = mix(ring, 1.0, uTextureReveal);
    
    // Interpolate color
    vec3 finalColor = mix(strokeColor, litMoon, uTextureReveal);

    gl_FragColor = vec4(finalColor, finalAlpha * alpha);
  }
`;var ss=function(){var a=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++a%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===u?"block":"none";a=u}var i=(performance||Date).now(),r=i,s=0,o=t(new ss.Panel("FPS","#0ff","#002")),l=t(new ss.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new ss.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){s++;var u=(performance||Date).now();if(l.update(u-i,200),u>=r+1e3&&(o.update(s*1e3/(u-r),100),r=u,s=0,c)){var f=performance.memory;c.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:e,setMode:n}};ss.Panel=function(a,e,t){var n=1/0,i=0,r=Math.round,s=r(window.devicePixelRatio||1),o=80*s,l=48*s,c=3*s,u=2*s,f=3*s,h=15*s,d=74*s,_=30*s,x=document.createElement("canvas");x.width=o,x.height=l,x.style.cssText="width:80px;height:48px";var p=x.getContext("2d");return p.font="bold "+9*s+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,o,l),p.fillStyle=e,p.fillText(a,c,u),p.fillRect(f,h,d,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(f,h,d,_),{dom:x,update:function(m,S){n=Math.min(n,m),i=Math.max(i,m),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,o,h),p.fillStyle=e,p.fillText(r(m)+" "+a+" ("+r(n)+"-"+r(i)+")",c,u),p.drawImage(x,f+s,h,d-s,_,f,h,d-s,_),p.fillRect(f+d-s,h,s,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(f+d-s,h,s,r((1-m/S)*_))}}};const o0=new ss;document.body.appendChild(o0.dom);const ud=["tech_stack"];function Yt(a,e=""){ud.length>0&&!ud.includes(e)||console.log("[DEBUG]: "+a)}const vn={background:0,content_background:16579575,text:921132,line:660533,accent:4868682},ut={title:76,heading:57,small:24,extrasmall:16},kn=2,il=new jm;il.background=new tt(vn.background);const qi=new Vd(-1,1,1,-1,1,1e3);qi.position.z=10;const rl=new Q1({canvas:document.querySelector("#bg"),antialias:!0,alpha:!1});rl.setSize(window.innerWidth,window.innerHeight);rl.setPixelRatio(Math.min(window.devicePixelRatio,2));const al=new ax,_y=new ox,ni=new Lt;il.add(ni);const gy=1,vy=1,Sy=new Pn(gy,vy),by=new ir({color:vn.content_background,side:fn}),Ms=new Bt(Sy,by);Ms.name="backgroundMesh";Ms.position.z=-1;ni.add(Ms);function $t(a,e,t="regular",n="center",i="center",r=null){Yt("Creating text: "+a+", size: "+e+", weight: "+t+", align: "+n+", anchorX: "+i+", maxWidth: "+r);let s=yy(e,t);const o=new ap;return o.text=a,o.fontSize=e,o.fontWeight=t,o.color=vn.text,o.font=s,o.anchorX=i,o.anchorY="top",o.textAlign=n,r&&(o.maxWidth=r),o.sync(),o}const yy=(a,e)=>{const t=zn.FONT_BASE_URL;let n="24pt";a>=50?n="60pt":a>=30?n="36pt":n="24pt";const r={400:"Regular",500:"Medium",600:"SemiBold",700:"Bold",800:"ExtraBold",regular:"Regular",bold:"Bold",medium:"Medium",semibold:"SemiBold",extrabold:"ExtraBold",italic:"Italic"}[e]||"Regular";return`${t}_${n}-${r}.ttf`};function ii(a,e=2){const t=new df,n=[];a.forEach(s=>{n.push(s.x,s.y,s.z)}),t.setPositions(n);const i=new nl({color:vn.line,linewidth:e,worldUnits:!1});i.resolution.set(window.innerWidth,window.innerHeight);const r=new s0(t,i);return ni.add(r),r}function My(a,e,t,n){const i=[-a/2,0,0,a/2,0,0,a/2,-294,0,-a/2,-294,0,-a/2,0,0],r=new df().setPositions(i),s=new nl({color:n,linewidth:t,worldUnits:!1});return new s0(r,s)}function sl(a,e,t){Yt("Creating texture button with icon: "+a+", size: "+e,"work_section");const n=new Lt,i=al.load(a);i.colorSpace=cn;const r=new Pn(e,e),s=new ir({map:i,transparent:!0,side:fn}),o=new Bt(r,s);o.name="icon_"+t,n.add(o);const l=new Pn(e,e),c=new ir({color:16711680,transparent:!0,opacity:.5,depthWrite:!1}),u=new Bt(l,c);return u.name="button_"+t,u.userData.isButton=!0,u.userData.id=t,u.position.z=5,n.add(u),n.userData.isButton=!0,n.userData.id=t,n.name="button_"+t,[n,s]}function l0(a,e,t){const n=al.load(a,o=>{Yt("Texture loaded: "+a+", size: "+o.image.width+"x"+o.image.height,"work_section")});n.colorSpace=cn;const i=new Pn(e,t),r=new ir({map:n,transparent:!0,side:fn});return new Bt(i,r)}function As(a,e,t,n=""){const i=new Pn(a,e),r=new ir({color:t,side:fn}),s=new Bt(i,r);return s.name=n,s}function Ty(a){const e=new ti().setFromObject(ni),t=new j;e.getSize(t),Yt("backgroundMesh.height "+t.y,"updateBGMeshSize"),Ms.scale.set(a,t.y,1),Ms.scale.set(a,3500,1)}function Ey(a){for(let e=a.children.length-1;e>=0;e--){const t=a.children[e];a.remove(t)}}function wy(){const a=al.load(vt.header_moon.texturePath);return new ei({vertexShader:my,fragmentShader:xy,uniforms:{uTexture:{value:a},uTime:{value:0},uTextureReveal:{value:0},uPhaseStrength:{value:0}},transparent:!0})}function Ay(){r0.timeline().to(Vo.uniforms.uTextureReveal,{value:1,duration:2.5,ease:"power2.inOut"}).to(Vo.uniforms.uPhaseStrength,{value:1,duration:2,ease:"power1.inOut"},"+=0.5")}let Xi=0;const hc=new Map,Mu=new Map;function Tu(){Xi<0?Xi=vt.projects.length-1:Xi>=vt.projects.length&&(Xi=0),Yt("Loading project data for index: "+Xi,"work_section");const a=vt.projects[Xi];ma.text=a.title,ma.sync(),xa.text="("+a.subtitle+")",xa.sync(),wr.text=a.value,wr.sync(),rn.text=a.review,rn.sync(()=>{const{blockBounds:e}=rn.textRenderInfo,[t,n,i,r]=e,[s,o,l,c]=rn.clipRect,u=rn.text,f=n<o,h=r>c;if(f||h){const d=Math.round(o/n*rn.text.length);rn.text=u.slice(0,d-50)+" ....",rn.sync()}}),al.load(a.thumbnailPath,e=>{Ar.material.map&&Ar.material.map.dispose(),Ar.material.map=e,Ar.material.needsUpdate=!0}),Ey(Wo),Mu.clear(),a.tech_stack.forEach(e=>{const t=vt.tech_stack.get(e);if(t===void 0)console.warn("Tech stack data not found for:",e);else{let n;hc.has(e)?n=hc.get(e):(n=l0(t.texturePath,t.width,t.height),Yt("Tech icon width "+n.material.width+" geo width "+n.geometry.parameters.width,"work_section"),hc.set(e,n)),Mu.set(e,n),Wo.add(n)}nt==null&&(nt=zn.MAX_DESIGN_WIDTH),c0(nt,1)})}function c0(a,e){Yt("setTechStackLayout "+a,"tech_stack"),Wo.position.set(a/2-Math.round(zn.tech_stack.width*e),zn.tech_stack.height/10*e,0);let t=0,n=0;Mu.forEach((i,r)=>{const s=vt.tech_stack.get(r).width*e;Yt("mesh width of "+r+": "+s,"work_section"),n+s>zn.tech_stack.width*e&&(t++,n=0),n+=zn.tech_stack.gap*e,i.position.set(n,-t*(zn.tech_stack.iconHeight*e),0),i.scale.set(e,e,1),n+=s})}const Cs=new Lt,yo=$t(vt.skyline[0],ut.extrasmall,"semibold","left","left"),Mo=$t(vt.skyline[1],ut.extrasmall,"semibold","center","center"),To=$t(vt.skyline[2],ut.extrasmall,"semibold","right","right");Cs.add(Mo);Cs.add(yo);Cs.add(To);ni.add(Cs);const Ln=[];Ln.push(new j(-10,0,0));Ln.push(new j(10,0,0));const fd=ii(Ln,kn),ol=new Lt,Eo=$t(vt.header_fname,ut.title,"bold","left","left",250),wo=$t(vt.header_lname,ut.title,"bold","right","right",250),hd=vt.header_moon.size,Cy=new Pn(hd,hd),Vo=wy(),Eu=new Bt(Cy,Vo);ol.add(Eo);ol.add(wo);ol.add(Eu);ni.add(ol);const dd=ii(Ln,kn),pf=new Lt,wu=As(960,120,vn.accent),ca=$t(vt.quote_sans,ut.extrasmall,"bold","right","center");ca.color=vn.content_background;pf.add(wu);pf.add(ca);ni.add(pf);const ll=new Lt,cl=new Lt,Ao=$t(vt.about_title,ut.heading,"semibold","left","left"),mf=new Lt,u0=[];vt.about_nav.forEach((a,e)=>{const t=$t(a,ut.small,"medium","left","right");t.position.set(e*100,0,0),mf.add(t),u0.push(t)});cl.add(Ao);cl.add(mf);ll.add(cl);const pd=ii(Ln,kn),Qa=$t(vt.about_author_text,ut.small,"medium","left","center",920);ll.add(Qa);ni.add(ll);const Rs=new Lt,f0=As(960,960,vn.text,"work_base"),ul=new Lt,os=$t("Work",ut.heading,"semibold","left","left");os.color=vn.content_background;const[Ho,Ry]=sl(vt.work_nav_button_left.texturePath,vt.work_nav_button_left.size,vt.work_nav_button_left.id),[Au,Py]=sl(vt.work_nav_button_right.texturePath,vt.work_nav_button_right.size,vt.work_nav_button_right.id);Ho.rotation.z=Math.PI;Ry.color.setHex(vn.content_background);Py.color.setHex(vn.content_background);const fl=new Lt;fl.add(Ho);fl.add(Au);ul.add(os);ul.add(fl);Rs.add(ul);Rs.add(f0);const gi=new Lt,h0=As(940,860,vn.content_background,"project_card_base"),Ps=new Lt,ma=$t("Hurricane.io",ut.small,"extrabold","center","left"),xa=$t("( Multiplayer IO Game, iOS, Android )",ut.small,"semibold","center","left"),Co=ii(Ln,kn);Ps.add(ma);Ps.add(xa);Ps.add(Co);gi.add(h0);gi.add(Ps);const wr=$t(`Dropped into a game beset by hackers. 
Rescued it in quick time, enabling a sale and a successful client transition. `,ut.small,"medium","left","left",570);gi.add(wr);const ls=ii(Ln,kn);ls.rotation.z=Math.PI/2;gi.add(ls);const Ro=ii(Ln,kn);gi.add(Ro);const rn=$t("I highly recommend Ashish! He was able to resolve a bunch of complex bugs and issues in my multiplayer game (that other developers either couldn't or their quotes were too high). His work was detailed oriented, thorough, patient and polite communication throughout the project. I plan to hire him more in the future. There are very few multiplayer game developers out there with this kind of technical skills, experience, understanding, and professionalism.",ut.small,"italic","left","left",zn.tech_stack.review_max_width);rn.clipRect=[0,-120,zn.tech_stack.review_max_width,0];const d0=new Lt;d0.add(rn);$t("Read More",ut.small,"bold","right","right");gi.add(d0);const Ar=l0("textures/ProjectIcons/hurricane-icon.png",290,290);gi.add(Ar);const Wo=new Lt;gi.add(Wo);Rs.add(gi);ni.add(Rs);Tu();const In=new Lt,Cu=As(470,290,vn.content_background,"contact_card_base"),Po=My(464,294,6,vn.line),Uo=$t("Contact",ut.heading,"semibold","center","center"),Ru=ii(Ln,3),Pu=As(470,300,vn.line,"contact_card_base_drop_shadow"),Xo=ii(Ln,3);Xo.rotation.z=Math.PI;const Yo=ii(Ln,3);Yo.rotation.z=Math.PI;const Uu=ii(Ln,3),Du=ii(Ln,3),[Lu]=sl(vt.contactCard_linkedin.texturePath,75,"linkedin"),[Iu]=sl(vt.contactCard_upwork.texturePath,75,"upwork");In.add(Cu);In.add(Pu);In.add(Po);In.add(Uo);In.add(Ru);In.add(Xo);In.add(Yo);In.add(Uu);In.add(Du);In.add(Lu);In.add(Iu);ni.add(In);var nt;function p0(){const a=window.innerWidth,e=window.innerHeight;Yt("Window Size:",a),qi.left=-a/2,qi.right=a/2,qi.top=e/2,qi.bottom=-e/2,qi.updateProjectionMatrix(),rl.setSize(a,e);const t=1e3;nt=Math.min(a,t);let n=1;a<t&&(n=a/t);const i=Math.min(a*.1,20);nt=nt-i*2,Yt("MARGIN:",i),Yt("CONTENT_WIDTH:",nt);let r=e/2;const s=Math.round(3*n),o=Math.round(ut.extrasmall*n);Mo.fontSize=o,Mo.sync(),yo.fontSize=o,yo.sync(),To.fontSize=o,To.sync(),Cs.position.set(0,r,0),Mo.position.set(0,-s,0),yo.position.set(-nt/2,-s,0),To.position.set(nt/2,-s,0),r-=20*n,fd.geometry.setFromPoints([new j(-nt/2,r,0),new j(nt/2,r,0)]),fd.material.linewidth=kn*n,r-=20*n;let l=Math.round(ut.title*n),c=1*n;Eo.fontSize=l,wo.fontSize=l,Eo.sync(),wo.sync(),Eo.position.set(-nt/2+Math.round(nt/13*n),r,0),wo.position.set(nt/2-Math.round(nt/25*n),r,0),Eu.scale.set(c,c,1),Eu.position.set(0,r-35*n,0),r-=90*n,dd.geometry.setFromPoints([new j(-nt/2,r,0),new j(nt/2,r,0)]),dd.material.linewidth=kn*n,r-=30*n;const u=120;ca.fontSize=Math.round(ut.extrasmall*n),ca.maxWidth=nt-Math.round(40*n),ca.position.set(0,r-Math.round(30*n),2),ca.sync(),wu.scale.set(1*n,1*n,1),wu.position.set(0,r-Math.round(60*n),0),r-=(u+20)*n,Yt("About Y:"+r,"about_section"),ll.position.set(0,r,0),cl.position.set(0,0,0),Ao.position.set(-nt/2,0,0),Ao.fontSize=ut.heading*n,Ao.sync(),mf.position.set(nt/2-Math.round(200*n),-Math.round(20*n),0),u0.forEach((d,_)=>{d.fontSize=ut.small*n,d.position.set(_*(n*100),0,0),d.sync()}),r-=60*n,pd.geometry.setFromPoints([new j(-nt/2,r,0),new j(nt/2,r,0)]),pd.material.linewidth=kn*n,Qa.fontSize=ut.small*n,Qa.maxWidth=nt-Math.round(40*n),Qa.position.set(0,-Math.round(120*n),0),Qa.sync(),r-=880*n,Rs.position.set(0,r,0),f0.scale.set(1*n,1*n,1),ul.position.set(0,Math.round(460*n),0),os.fontSize=ut.heading*n,os.position.set(-nt/2+Math.round(20*n),0,0),os.sync(),Ho.position.set(-Math.round(40*n),0,0),Au.position.set(Math.round(40*n),0,0),Ho.scale.set(n,n,1),Au.scale.set(n,n,1),fl.position.set(nt/2-Math.round(100*n),-Math.round(20*n),0),gi.position.set(0,-Math.round(30*n),0),h0.scale.set(1*n,1*n,1),Ps.position.set(-nt/2+Math.round(100*n),Math.round(400*n),0),ma.position.set(Math.round(120*n),0,0),ma.fontSize=ut.small*n,ma.sync(),xa.position.set(0,-Math.round(30*n),0),xa.fontSize=ut.small*n,xa.sync(),Co.position.set(Math.round(210*n),-Math.round(70*n),0),Co.geometry.setFromPoints([new j(-Math.round(270*n),0,0),new j(Math.round(270*n),0,0)]),Co.material.linewidth=kn*n,wr.position.set(-nt/2+Math.round(30*n),Math.round(270*n),0),wr.fontSize=ut.small*n,wr.maxWidth=Math.round(570*n),wr.sync(),ls.position.set(Math.round(130*n),Math.round(100*n),0),ls.geometry.setFromPoints([new j(-Math.round(310*n),0,0),new j(Math.round(310*n),0,0)]),ls.material.linewidth=kn*n,Ro.position.set(0,-Math.round(230*n),0),Ro.geometry.setFromPoints([new j(-Math.round(450*n),0,0),new j(Math.round(450*n),0,0)]),Ro.material.linewidth=kn*n,rn.position.set(-nt/2+Math.round(30*n),-Math.round(260*n),0),rn.fontSize=ut.small*n,rn.maxWidth=Math.round(zn.tech_stack.review_max_width*n),rn.clipRect=[0,-Math.round(zn.tech_stack.review_max_height*n),Math.round(zn.tech_stack.review_max_width*n),0],rn.sync(),Ar.position.set(nt/2-Math.round(180*n),Math.round(250*n),0),Ar.scale.set(n,n,1),c0(nt,n),In.position.set(nt/4,r-500*n,0),Po.position.set(0,0,1),Po.scale.set(1*n,1*n,1),Po.material.linewidth=6*n,Cu.position.set(0,-Math.round(150*n),1),Cu.scale.set(1*n,1*n,1),Pu.position.set(Math.round(5*n),-Math.round(155*n),0),Pu.scale.set(1*n,1*n,1),Uo.position.set(0,-Math.round(40*n),2),Uo.fontSize=ut.heading*n,Uo.sync(),Ru.position.set(0,-Math.round(95*n),1),Ru.geometry.setFromPoints([new j(-Math.round(100*n),0,0),new j(Math.round(100*n),0,0)]),Xo.position.set(-Math.round(210*n),-Math.round(150*n),1),Xo.geometry.setFromPoints([new j(0,Math.round(100*n),0),new j(0,-Math.round(100*n),0)]),Yo.position.set(Math.round(210*n),-Math.round(150*n),1),Yo.geometry.setFromPoints([new j(0,Math.round(100*n),0),new j(0,-Math.round(100*n),0)]),Uu.position.set(0,-Math.round(15*n),1),Uu.geometry.setFromPoints([new j(-Math.round(190*n),0,0),new j(Math.round(190*n),0,0)]),Du.position.set(0,-Math.round(280*n),1),Du.geometry.setFromPoints([new j(-Math.round(190*n),0,0),new j(Math.round(190*n),0,0)]),Lu.position.set(Math.round(100*n),-Math.round(200*n),3),Lu.scale.set(n,n,1),Iu.position.set(-Math.round(100*n),-Math.round(200*n),3),Iu.scale.set(n,n,1),r-=650*n;const f=e+Math.abs(r)+Math.round(50*n),h=document.getElementById("scroll-container");h.style.height=`${f}px`,Ty(nt+i*2)}function m0(){o0.update(),requestAnimationFrame(m0);const a=window.scrollY;ni.position.y=a,Vo.uniforms.uTime.value=_y.getElapsedTime(),rl.render(il,qi)}const md=new lx,dc=new $e;window.addEventListener("resize",p0);window.addEventListener("click",Uy);function Uy(a){dc.x=a.clientX/window.innerWidth*2-1,dc.y=-(a.clientY/window.innerHeight)*2+1,md.setFromCamera(dc,qi);const e=md.intersectObjects(il.children,!0);if(e.length>0){const t=e[0].object;Yt("object clicked: "+t.name,"mouse_event");const n=x0(t);n?(Yt("Clicked Button Name:"+n.name,"mouse_event"),Yt("Clicked Button ID:"+n.userData.id,"mouse_event"),Dy(n.userData.id)):Yt("parent not found: ","mouse_event")}}function x0(a){return a.userData&&a.userData.id?a:a.parent?(Yt("parent found in hierarchy: "+a.parent.name,"mouse_event"),x0(a.parent)):null}function Dy(a){switch(a){case"home-btn":break;case"settings-btn":break;case"work_left":--Xi,Tu();break;case"work_right":++Xi,Tu();break;default:console.log("No action defined for:",a)}}p0();setTimeout(Ay,3e3);m0();
