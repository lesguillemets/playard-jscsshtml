var _0=0,_1=new T(function(){return B(unCStr("base"));}),_2=new T(function(){return B(unCStr("GHC.IO.Exception"));}),_3=new T(function(){return B(unCStr("IOException"));}),_4=[0,I_fromBits([4053623282,1685460941]),I_fromBits([3693590983,2507416641]),_1,_2,_3],_5=[0],_6=[0,I_fromBits([4053623282,1685460941]),I_fromBits([3693590983,2507416641]),_4,_5],_7=function(_8){return E(_6);},_9=function(_a){return E(E(_a)[1]);},_b=new T(function(){return B(unCStr("Maybe.fromJust: Nothing"));}),_c=new T(function(){return B(err(_b));}),_d=function(_e,_f,_g){var _h=new T(function(){var _i=B(A(_e,[_g])),_j=B(A(_f,[new T(function(){var _k=E(_h);return _k[0]==0?E(_c):E(_k[1]);})])),_l=hs_eqWord64(_i[1],_j[1]),_m=_l;if(!E(_m)){var _n=[0];}else{var _o=hs_eqWord64(_i[2],_j[2]),_p=_o,_n=E(_p)==0?[0]:[1,_g];}var _q=_n,_r=_q;return _r;});return E(_h);},_s=function(_t){var _u=E(_t);return new F(function(){return _d(B(_9(_u[1])),_7,_u[2]);});},_v=new T(function(){return B(unCStr(": "));}),_w=[0,41],_x=new T(function(){return B(unCStr(" ("));}),_y=function(_z,_A){var _B=E(_z);return _B[0]==0?E(_A):[1,_B[1],new T(function(){return B(_y(_B[2],_A));})];},_C=new T(function(){return B(unCStr("already exists"));}),_D=new T(function(){return B(unCStr("does not exist"));}),_E=new T(function(){return B(unCStr("protocol error"));}),_F=new T(function(){return B(unCStr("failed"));}),_G=new T(function(){return B(unCStr("invalid argument"));}),_H=new T(function(){return B(unCStr("inappropriate type"));}),_I=new T(function(){return B(unCStr("hardware fault"));}),_J=new T(function(){return B(unCStr("unsupported operation"));}),_K=new T(function(){return B(unCStr("timeout"));}),_L=new T(function(){return B(unCStr("resource vanished"));}),_M=new T(function(){return B(unCStr("interrupted"));}),_N=new T(function(){return B(unCStr("resource busy"));}),_O=new T(function(){return B(unCStr("resource exhausted"));}),_P=new T(function(){return B(unCStr("end of file"));}),_Q=new T(function(){return B(unCStr("illegal operation"));}),_R=new T(function(){return B(unCStr("permission denied"));}),_S=new T(function(){return B(unCStr("user error"));}),_T=new T(function(){return B(unCStr("unsatisified constraints"));}),_U=new T(function(){return B(unCStr("system error"));}),_V=function(_W,_X){switch(E(_W)){case 0:return new F(function(){return _y(_C,_X);});break;case 1:return new F(function(){return _y(_D,_X);});break;case 2:return new F(function(){return _y(_N,_X);});break;case 3:return new F(function(){return _y(_O,_X);});break;case 4:return new F(function(){return _y(_P,_X);});break;case 5:return new F(function(){return _y(_Q,_X);});break;case 6:return new F(function(){return _y(_R,_X);});break;case 7:return new F(function(){return _y(_S,_X);});break;case 8:return new F(function(){return _y(_T,_X);});break;case 9:return new F(function(){return _y(_U,_X);});break;case 10:return new F(function(){return _y(_E,_X);});break;case 11:return new F(function(){return _y(_F,_X);});break;case 12:return new F(function(){return _y(_G,_X);});break;case 13:return new F(function(){return _y(_H,_X);});break;case 14:return new F(function(){return _y(_I,_X);});break;case 15:return new F(function(){return _y(_J,_X);});break;case 16:return new F(function(){return _y(_K,_X);});break;case 17:return new F(function(){return _y(_L,_X);});break;default:return new F(function(){return _y(_M,_X);});}},_Y=[0,125],_Z=new T(function(){return B(unCStr("{handle: "));}),_10=function(_11,_12,_13,_14,_15,_16){var _17=new T(function(){var _18=new T(function(){return B(_V(_12,new T(function(){var _19=E(_14);return _19[0]==0?E(_16):B(_y(_x,new T(function(){return B(_y(_19,[1,_w,_16]));})));})));}),_1a=E(_13);return _1a[0]==0?E(_18):B(_y(_1a,new T(function(){return B(_y(_v,_18));})));}),_1b=E(_15);if(!_1b[0]){var _1c=E(_11);if(!_1c[0]){return E(_17);}else{var _1d=E(_1c[1]);return _1d[0]==0?B(_y(_Z,new T(function(){return B(_y(_1d[1],[1,_Y,new T(function(){return B(_y(_v,_17));})]));}))):B(_y(_Z,new T(function(){return B(_y(_1d[1],[1,_Y,new T(function(){return B(_y(_v,_17));})]));})));}}else{return new F(function(){return _y(_1b[1],new T(function(){return B(_y(_v,_17));}));});}},_1e=function(_1f){var _1g=E(_1f);return new F(function(){return _10(_1g[1],_1g[2],_1g[3],_1g[4],_1g[6],_5);});},_1h=function(_1i,_1j){var _1k=E(_1i);return new F(function(){return _10(_1k[1],_1k[2],_1k[3],_1k[4],_1k[6],_1j);});},_1l=[0,44],_1m=[0,93],_1n=[0,91],_1o=function(_1p,_1q,_1r){var _1s=E(_1q);return _1s[0]==0?B(unAppCStr("[]",_1r)):[1,_1n,new T(function(){return B(A(_1p,[_1s[1],new T(function(){var _1t=function(_1u){var _1v=E(_1u);return _1v[0]==0?E([1,_1m,_1r]):[1,_1l,new T(function(){return B(A(_1p,[_1v[1],new T(function(){return B(_1t(_1v[2]));})]));})];};return B(_1t(_1s[2]));})]));})];},_1w=function(_1x,_1y){return new F(function(){return _1o(_1h,_1x,_1y);});},_1z=function(_1A,_1B,_1C){var _1D=E(_1B);return new F(function(){return _10(_1D[1],_1D[2],_1D[3],_1D[4],_1D[6],_1C);});},_1E=[0,_1z,_1e,_1w],_1F=new T(function(){return [0,_7,_1E,_1G,_s];}),_1G=function(_1H){return [0,_1F,_1H];},_1I=[0],_1J=7,_1K=function(_1L){return [0,_1I,_1J,_5,_1L,_1I,_1I];},_1M=function(_1N,_){return new F(function(){return die(new T(function(){return B(_1G(new T(function(){return B(_1K(_1N));})));}));});},_1O=function(_1P,_){return new F(function(){return _1M(_1P,_);});},_1Q=function(_1R,_1S,_1T,_1U){return new F(function(){return A(_1R,[new T(function(){return function(_){var _1V=jsSet(E(_1S)[1],toJSStr(E(_1T)),toJSStr(E(_1U)));return _0;};})]);});},_1W=function(_1X){return E(_1X);},_1Y=new T(function(){return B(unCStr("innerHTML"));}),_1Z=new T(function(){return B(unCStr("li"));}),_20=function(_21,_){if(_21<=118){var _22=E(_1Z),_23=jsCreateElem(toJSStr(_22)),_24=_23,_25=[0,_24],_26=B(A(_1Q,[_1W,_25,_1Y,[1,[0,_21],_5],_])),_27=_26,_28=function(_29,_){if(_29<=118){var _2a=jsCreateElem(toJSStr(_22)),_2b=_2a,_2c=[0,_2b],_2d=B(A(_1Q,[_1W,_2c,_1Y,[1,[0,_29],_5],_])),_2e=_2d,_2f=B(_28(_29+1|0,_)),_2g=_2f;return [1,_2c,_2g];}else{return _5;}},_2h=B(_28(_21+1|0,_)),_2i=_2h;return [1,_25,_2i];}else{return _5;}},_2j=new T(function(){return B(unCStr("Pattern match failure in do expression at domaccess.hs:5:5-11"));}),_2k=new T(function(){return B(unCStr("data"));}),_2l=function(_){var _2m=jsFind(toJSStr(E(_2k))),_2n=_2m,_2o=E(_2n);if(!_2o[0]){return new F(function(){return _1O(_2j,_);});}else{var _2p=B(_20(112,_)),_2q=_2p,_2r=E(_2q);if(!_2r[0]){return _0;}else{var _2s=E(_2o[1])[1],_2t=jsAppendChild(E(_2r[1])[1],_2s);return new F(function(){return (function(_2u,_){while(1){var _2v=E(_2u);if(!_2v[0]){return _0;}else{var _2w=jsAppendChild(E(_2v[1])[1],_2s);_2u=_2v[2];continue;}}})(_2r[2],_);});}}},_2x=function(_){return new F(function(){return _2l(_);});};
var hasteMain = function() {B(A(_2x, [0]));};window.onload = hasteMain;
