var _0=function(_1,_2,_){var _3=B(A(_1,[_])),_4=_3;return new F(function(){return A(_2,[_]);});},_5=function(_6,_7,_){return new F(function(){return _0(_6,_7,_);});},_8=function(_9,_a,_){var _b=B(A(_9,[_])),_c=_b;return new F(function(){return A(_a,[_c,_]);});},_d=new T(function(){return B(unCStr("base"));}),_e=new T(function(){return B(unCStr("GHC.IO.Exception"));}),_f=new T(function(){return B(unCStr("IOException"));}),_g=[0,I_fromBits([4053623282,1685460941]),I_fromBits([3693590983,2507416641]),_d,_e,_f],_h=[0],_i=[0,I_fromBits([4053623282,1685460941]),I_fromBits([3693590983,2507416641]),_g,_h],_j=function(_k){return E(_i);},_l=function(_m){return E(E(_m)[1]);},_n=new T(function(){return B(unCStr("Maybe.fromJust: Nothing"));}),_o=new T(function(){return B(err(_n));}),_p=function(_q,_r,_s){var _t=new T(function(){var _u=B(A(_q,[_s])),_v=B(A(_r,[new T(function(){var _w=E(_t);return _w[0]==0?E(_o):E(_w[1]);})])),_x=hs_eqWord64(_u[1],_v[1]),_y=_x;if(!E(_y)){var _z=[0];}else{var _A=hs_eqWord64(_u[2],_v[2]),_B=_A,_z=E(_B)==0?[0]:[1,_s];}var _C=_z,_D=_C;return _D;});return E(_t);},_E=function(_F){var _G=E(_F);return new F(function(){return _p(B(_l(_G[1])),_j,_G[2]);});},_H=new T(function(){return B(unCStr(": "));}),_I=[0,41],_J=new T(function(){return B(unCStr(" ("));}),_K=function(_L,_M){var _N=E(_L);return _N[0]==0?E(_M):[1,_N[1],new T(function(){return B(_K(_N[2],_M));})];},_O=new T(function(){return B(unCStr("already exists"));}),_P=new T(function(){return B(unCStr("does not exist"));}),_Q=new T(function(){return B(unCStr("protocol error"));}),_R=new T(function(){return B(unCStr("failed"));}),_S=new T(function(){return B(unCStr("invalid argument"));}),_T=new T(function(){return B(unCStr("inappropriate type"));}),_U=new T(function(){return B(unCStr("hardware fault"));}),_V=new T(function(){return B(unCStr("unsupported operation"));}),_W=new T(function(){return B(unCStr("timeout"));}),_X=new T(function(){return B(unCStr("resource vanished"));}),_Y=new T(function(){return B(unCStr("interrupted"));}),_Z=new T(function(){return B(unCStr("resource busy"));}),_10=new T(function(){return B(unCStr("resource exhausted"));}),_11=new T(function(){return B(unCStr("end of file"));}),_12=new T(function(){return B(unCStr("illegal operation"));}),_13=new T(function(){return B(unCStr("permission denied"));}),_14=new T(function(){return B(unCStr("user error"));}),_15=new T(function(){return B(unCStr("unsatisified constraints"));}),_16=new T(function(){return B(unCStr("system error"));}),_17=function(_18,_19){switch(E(_18)){case 0:return new F(function(){return _K(_O,_19);});break;case 1:return new F(function(){return _K(_P,_19);});break;case 2:return new F(function(){return _K(_Z,_19);});break;case 3:return new F(function(){return _K(_10,_19);});break;case 4:return new F(function(){return _K(_11,_19);});break;case 5:return new F(function(){return _K(_12,_19);});break;case 6:return new F(function(){return _K(_13,_19);});break;case 7:return new F(function(){return _K(_14,_19);});break;case 8:return new F(function(){return _K(_15,_19);});break;case 9:return new F(function(){return _K(_16,_19);});break;case 10:return new F(function(){return _K(_Q,_19);});break;case 11:return new F(function(){return _K(_R,_19);});break;case 12:return new F(function(){return _K(_S,_19);});break;case 13:return new F(function(){return _K(_T,_19);});break;case 14:return new F(function(){return _K(_U,_19);});break;case 15:return new F(function(){return _K(_V,_19);});break;case 16:return new F(function(){return _K(_W,_19);});break;case 17:return new F(function(){return _K(_X,_19);});break;default:return new F(function(){return _K(_Y,_19);});}},_1a=[0,125],_1b=new T(function(){return B(unCStr("{handle: "));}),_1c=function(_1d,_1e,_1f,_1g,_1h,_1i){var _1j=new T(function(){var _1k=new T(function(){return B(_17(_1e,new T(function(){var _1l=E(_1g);return _1l[0]==0?E(_1i):B(_K(_J,new T(function(){return B(_K(_1l,[1,_I,_1i]));})));})));}),_1m=E(_1f);return _1m[0]==0?E(_1k):B(_K(_1m,new T(function(){return B(_K(_H,_1k));})));}),_1n=E(_1h);if(!_1n[0]){var _1o=E(_1d);if(!_1o[0]){return E(_1j);}else{var _1p=E(_1o[1]);return _1p[0]==0?B(_K(_1b,new T(function(){return B(_K(_1p[1],[1,_1a,new T(function(){return B(_K(_H,_1j));})]));}))):B(_K(_1b,new T(function(){return B(_K(_1p[1],[1,_1a,new T(function(){return B(_K(_H,_1j));})]));})));}}else{return new F(function(){return _K(_1n[1],new T(function(){return B(_K(_H,_1j));}));});}},_1q=function(_1r){var _1s=E(_1r);return new F(function(){return _1c(_1s[1],_1s[2],_1s[3],_1s[4],_1s[6],_h);});},_1t=function(_1u,_1v){var _1w=E(_1u);return new F(function(){return _1c(_1w[1],_1w[2],_1w[3],_1w[4],_1w[6],_1v);});},_1x=[0,44],_1y=[0,93],_1z=[0,91],_1A=function(_1B,_1C,_1D){var _1E=E(_1C);return _1E[0]==0?B(unAppCStr("[]",_1D)):[1,_1z,new T(function(){return B(A(_1B,[_1E[1],new T(function(){var _1F=function(_1G){var _1H=E(_1G);return _1H[0]==0?E([1,_1y,_1D]):[1,_1x,new T(function(){return B(A(_1B,[_1H[1],new T(function(){return B(_1F(_1H[2]));})]));})];};return B(_1F(_1E[2]));})]));})];},_1I=function(_1J,_1K){return new F(function(){return _1A(_1t,_1J,_1K);});},_1L=function(_1M,_1N,_1O){var _1P=E(_1N);return new F(function(){return _1c(_1P[1],_1P[2],_1P[3],_1P[4],_1P[6],_1O);});},_1Q=[0,_1L,_1q,_1I],_1R=new T(function(){return [0,_j,_1Q,_1S,_E];}),_1S=function(_1T){return [0,_1R,_1T];},_1U=[0],_1V=7,_1W=function(_1X){return [0,_1U,_1V,_h,_1X,_1U,_1U];},_1Y=function(_1Z,_){return new F(function(){return die(new T(function(){return B(_1S(new T(function(){return B(_1W(_1Z));})));}));});},_20=function(_21,_){return new F(function(){return _1Y(_21,_);});},_22=function(_23,_){return _23;},_24=[0,_8,_5,_22,_20],_25=function(_26,_27){return new F(function(){return A(_26,[function(_){return new F(function(){return jsFind(toJSStr(E(_27)));});}]);});},_28=function(_29,_2a){while(1){var _2b=E(_2a);if(!_2b[0]){return false;}else{if(!B(A(_29,[_2b[1]]))){_2a=_2b[2];continue;}else{return true;}}}},_2c=function(_2d){var _2e=E(_2d);return _2e[0]==0?E(_o):E(_2e[1]);},_2f=function(_2g){return E(_2g)[0]==0?true:false;},_2h=function(_2i,_2j){var _2k=E(_2j);return _2k[0]==0?[0]:[1,new T(function(){return B(A(_2i,[_2k[1]]));}),new T(function(){return B(_2h(_2i,_2k[2]));})];},_2l=[0,34],_2m=function(_2n,_2o){while(1){var _2p=(function(_2q,_2r){var _2s=E(_2q);if(!_2s[0]){return [0];}else{var _2t=_2s[2],_2u=E(_2r);if(!_2u[0]){return [0];}else{var _2v=_2u[2];if(!E(_2u[1])[0]){return [1,_2s[1],new T(function(){return B(_2m(_2t,_2v));})];}else{_2n=_2t;_2o=_2v;return null;}}}})(_2n,_2o);if(_2p!=null){return _2p;}}},_2w=new T(function(){return B(unAppCStr("[]",_h));}),_2x=new T(function(){return B(unCStr("Prelude.(!!): negative index\n"));}),_2y=new T(function(){return B(err(_2x));}),_2z=new T(function(){return B(unCStr("Prelude.(!!): index too large\n"));}),_2A=new T(function(){return B(err(_2z));}),_2B=function(_2C,_2D){while(1){var _2E=E(_2C);if(!_2E[0]){return E(_2A);}else{var _2F=E(_2D);if(!_2F){return E(_2E[1]);}else{_2C=_2E[2];_2D=_2F-1|0;continue;}}}},_2G=new T(function(){return B(unCStr("ACK"));}),_2H=new T(function(){return B(unCStr("BEL"));}),_2I=new T(function(){return B(unCStr("BS"));}),_2J=new T(function(){return B(unCStr("SP"));}),_2K=[1,_2J,_h],_2L=new T(function(){return B(unCStr("US"));}),_2M=[1,_2L,_2K],_2N=new T(function(){return B(unCStr("RS"));}),_2O=[1,_2N,_2M],_2P=new T(function(){return B(unCStr("GS"));}),_2Q=[1,_2P,_2O],_2R=new T(function(){return B(unCStr("FS"));}),_2S=[1,_2R,_2Q],_2T=new T(function(){return B(unCStr("ESC"));}),_2U=[1,_2T,_2S],_2V=new T(function(){return B(unCStr("SUB"));}),_2W=[1,_2V,_2U],_2X=new T(function(){return B(unCStr("EM"));}),_2Y=[1,_2X,_2W],_2Z=new T(function(){return B(unCStr("CAN"));}),_30=[1,_2Z,_2Y],_31=new T(function(){return B(unCStr("ETB"));}),_32=[1,_31,_30],_33=new T(function(){return B(unCStr("SYN"));}),_34=[1,_33,_32],_35=new T(function(){return B(unCStr("NAK"));}),_36=[1,_35,_34],_37=new T(function(){return B(unCStr("DC4"));}),_38=[1,_37,_36],_39=new T(function(){return B(unCStr("DC3"));}),_3a=[1,_39,_38],_3b=new T(function(){return B(unCStr("DC2"));}),_3c=[1,_3b,_3a],_3d=new T(function(){return B(unCStr("DC1"));}),_3e=[1,_3d,_3c],_3f=new T(function(){return B(unCStr("DLE"));}),_3g=[1,_3f,_3e],_3h=new T(function(){return B(unCStr("SI"));}),_3i=[1,_3h,_3g],_3j=new T(function(){return B(unCStr("SO"));}),_3k=[1,_3j,_3i],_3l=new T(function(){return B(unCStr("CR"));}),_3m=[1,_3l,_3k],_3n=new T(function(){return B(unCStr("FF"));}),_3o=[1,_3n,_3m],_3p=new T(function(){return B(unCStr("VT"));}),_3q=[1,_3p,_3o],_3r=new T(function(){return B(unCStr("LF"));}),_3s=[1,_3r,_3q],_3t=new T(function(){return B(unCStr("HT"));}),_3u=[1,_3t,_3s],_3v=[1,_2I,_3u],_3w=[1,_2H,_3v],_3x=[1,_2G,_3w],_3y=new T(function(){return B(unCStr("ENQ"));}),_3z=[1,_3y,_3x],_3A=new T(function(){return B(unCStr("EOT"));}),_3B=[1,_3A,_3z],_3C=new T(function(){return B(unCStr("ETX"));}),_3D=[1,_3C,_3B],_3E=new T(function(){return B(unCStr("STX"));}),_3F=[1,_3E,_3D],_3G=new T(function(){return B(unCStr("SOH"));}),_3H=[1,_3G,_3F],_3I=new T(function(){return B(unCStr("NUL"));}),_3J=[1,_3I,_3H],_3K=[0,92],_3L=new T(function(){return B(unCStr("\\DEL"));}),_3M=new T(function(){return B(unCStr("\\a"));}),_3N=new T(function(){return B(unCStr("\\\\"));}),_3O=new T(function(){return B(unCStr("\\SO"));}),_3P=new T(function(){return B(unCStr("\\r"));}),_3Q=new T(function(){return B(unCStr("\\f"));}),_3R=new T(function(){return B(unCStr("\\v"));}),_3S=new T(function(){return B(unCStr("\\n"));}),_3T=new T(function(){return B(unCStr("\\t"));}),_3U=new T(function(){return B(unCStr("\\b"));}),_3V=function(_3W,_3X){if(_3W<=127){var _3Y=E(_3W);switch(_3Y){case 92:return new F(function(){return _K(_3N,_3X);});break;case 127:return new F(function(){return _K(_3L,_3X);});break;default:if(_3Y<32){var _3Z=E(_3Y);switch(_3Z){case 7:return new F(function(){return _K(_3M,_3X);});break;case 8:return new F(function(){return _K(_3U,_3X);});break;case 9:return new F(function(){return _K(_3T,_3X);});break;case 10:return new F(function(){return _K(_3S,_3X);});break;case 11:return new F(function(){return _K(_3R,_3X);});break;case 12:return new F(function(){return _K(_3Q,_3X);});break;case 13:return new F(function(){return _K(_3P,_3X);});break;case 14:return new F(function(){return _K(_3O,new T(function(){var _40=E(_3X);if(!_40[0]){var _41=[0];}else{var _41=E(E(_40[1])[1])==72?B(unAppCStr("\\&",_40)):E(_40);}return _41;}));});break;default:return new F(function(){return _K([1,_3K,new T(function(){var _42=_3Z;return _42>=0?B(_2B(_3J,_42)):E(_2y);})],_3X);});}}else{return [1,[0,_3Y],_3X];}}}else{return [1,_3K,new T(function(){var _43=jsShowI(_3W),_44=_43;return B(_K(fromJSStr(_44),new T(function(){var _45=E(_3X);if(!_45[0]){var _46=[0];}else{var _47=E(_45[1])[1],_46=_47<48?E(_45):_47>57?E(_45):B(unAppCStr("\\&",_45));}return _46;})));})];}},_48=new T(function(){return B(unCStr("\\\""));}),_49=function(_4a,_4b){var _4c=E(_4a);if(!_4c[0]){return E(_4b);}else{var _4d=_4c[2],_4e=E(E(_4c[1])[1]);if(_4e==34){return new F(function(){return _K(_48,new T(function(){return B(_49(_4d,_4b));}));});}else{return new F(function(){return _3V(_4e,new T(function(){return B(_49(_4d,_4b));}));});}}},_4f=[1,_1y,_h],_4g=function(_4h){var _4i=E(_4h);return _4i[0]==0?E(_4f):[1,_1x,[1,_2l,new T(function(){return B(_49(_4i[1],[1,_2l,new T(function(){return B(_4g(_4i[2]));})]));})]];},_4j=function(_4k,_4l){return new F(function(){return err(B(unAppCStr("Elements with the following IDs could not be found: ",new T(function(){var _4m=B(_2m(_4l,_4k));return _4m[0]==0?E(_2w):[1,_1z,[1,_2l,new T(function(){return B(_49(_4m[1],[1,_2l,new T(function(){return B(_4g(_4m[2]));})]));})]];}))));});},_4n=function(_4o,_4p,_4q,_4r){var _4s=E(_4o),_4t=_4s[1],_4u=_4s[3];return new F(function(){return A(_4t,[new T(function(){var _4v=function(_4w){var _4x=E(_4w);if(!_4x[0]){return E(new T(function(){return B(A(_4u,[_h]));}));}else{return new F(function(){return A(_4t,[new T(function(){return B(_25(_4p,_4x[1]));}),function(_4y){return new F(function(){return A(_4t,[new T(function(){return B(_4v(_4x[2]));}),function(_4z){return new F(function(){return A(_4u,[[1,_4y,_4z]]);});}]);});}]);});}};return B(_4v(_4q));}),function(_4A){return !B(_28(_2f,_4A))?B(A(_4r,[new T(function(){return B(_2h(_2c,_4A));})])):B(_4j(_4A,_4q));}]);});},_4B=function(_4C){return E(_4C);},_4D=0,_4E=function(_4F,_4G,_4H,_4I){return new F(function(){return A(_4F,[new T(function(){return function(_){var _4J=jsSet(E(_4G)[1],toJSStr(E(_4H)),toJSStr(E(_4I)));return _4D;};})]);});},_4K=new T(function(){return [0,"keyup"];}),_4L=new T(function(){return [0,"value"];}),_4M=new T(function(){return B(unCStr("innerHTML"));}),_4N=new T(function(){return B(unCStr("base"));}),_4O=new T(function(){return B(unCStr("Control.Exception.Base"));}),_4P=new T(function(){return B(unCStr("PatternMatchFail"));}),_4Q=[0,I_fromBits([18445595,3739165398]),I_fromBits([52003073,3246954884]),_4N,_4O,_4P],_4R=[0,I_fromBits([18445595,3739165398]),I_fromBits([52003073,3246954884]),_4Q,_h],_4S=function(_4T){return E(_4R);},_4U=function(_4V){var _4W=E(_4V);return new F(function(){return _p(B(_l(_4W[1])),_4S,_4W[2]);});},_4X=function(_4Y){return E(E(_4Y)[1]);},_4Z=function(_50,_51){return new F(function(){return _K(E(_50)[1],_51);});},_52=function(_53,_54){return new F(function(){return _1A(_4Z,_53,_54);});},_55=function(_56,_57,_58){return new F(function(){return _K(E(_57)[1],_58);});},_59=[0,_55,_4X,_52],_5a=new T(function(){return [0,_4S,_59,_5b,_4U];}),_5b=function(_5c){return [0,_5a,_5c];},_5d=new T(function(){return B(unCStr("Non-exhaustive patterns in"));}),_5e=function(_5f,_5g){return new F(function(){return die(new T(function(){return B(A(_5g,[_5f]));}));});},_5h=function(_5i,_5j){var _5k=E(_5j);if(!_5k[0]){return [0,_h,_h];}else{var _5l=_5k[1];if(!B(A(_5i,[_5l]))){return [0,_h,_5k];}else{var _5m=new T(function(){var _5n=B(_5h(_5i,_5k[2]));return [0,_5n[1],_5n[2]];});return [0,[1,_5l,new T(function(){return E(E(_5m)[1]);})],new T(function(){return E(E(_5m)[2]);})];}}},_5o=[0,32],_5p=[0,10],_5q=[1,_5p,_h],_5r=function(_5s){return E(E(_5s)[1])==124?false:true;},_5t=function(_5u,_5v){var _5w=B(_5h(_5r,B(unCStr(_5u)))),_5x=_5w[1],_5y=function(_5z,_5A){return new F(function(){return _K(_5z,new T(function(){return B(unAppCStr(": ",new T(function(){return B(_K(_5v,new T(function(){return B(_K(_5A,_5q));})));})));}));});},_5B=E(_5w[2]);if(!_5B[0]){return new F(function(){return _5y(_5x,_h);});}else{return E(E(_5B[1])[1])==124?B(_5y(_5x,[1,_5o,_5B[2]])):B(_5y(_5x,_h));}},_5C=function(_5D){return new F(function(){return _5e([0,new T(function(){return B(_5t(_5D,_5d));})],_5b);});},_5E=new T(function(){return B(_5C("ex0Reverse.hs:(6,1)-(13,30)|function reverserWords"));}),_5F=function(_5G,_5H){while(1){var _5I=E(_5G);if(!_5I[0]){return E(_5H);}else{_5G=_5I[2];var _5J=[1,_5I[1],_5H];_5H=_5J;continue;}}},_5K=function(_5L){return new F(function(){return _5F(_5L,_h);});},_5M=[0,32],_5N=function(_5O){var _5P=E(_5O);if(!_5P[0]){return [0];}else{var _5Q=_5P[1],_5R=E(_5P[2]);if(!_5R[0]){return E(_5Q);}else{return new F(function(){return _K(_5Q,[1,_5M,new T(function(){return B(_5N(_5R));})]);});}}},_5S=function(_5T,_5U){var _5V=E(_5U);if(!_5V[0]){return [0,_h,_h];}else{var _5W=_5V[1];if(!B(A(_5T,[_5W]))){var _5X=new T(function(){var _5Y=B(_5S(_5T,_5V[2]));return [0,_5Y[1],_5Y[2]];});return [0,[1,_5W,new T(function(){return E(E(_5X)[1]);})],new T(function(){return E(E(_5X)[2]);})];}else{return [0,_h,_5V];}}},_5Z=function(_60,_61){while(1){var _62=E(_61);if(!_62[0]){return [0];}else{if(!B(A(_60,[_62[1]]))){return E(_62);}else{_61=_62[2];continue;}}}},_63=function(_64){var _65=E(_64);switch(_65){case 9:return true;case 10:return true;case 11:return true;case 12:return true;case 13:return true;case 32:return true;case 160:return true;default:var _66=u_iswspace(_65),_67=_66;return E(_67)==0?false:true;}},_68=function(_69){return new F(function(){return _63(E(_69)[1]);});},_6a=function(_6b){var _6c=B(_5Z(_68,_6b));if(!_6c[0]){return [0];}else{var _6d=new T(function(){var _6e=B(_5S(_68,_6c));return [0,_6e[1],_6e[2]];});return [1,new T(function(){return E(E(_6d)[1]);}),new T(function(){return B(_6a(E(_6d)[2]));})];}},_6f=function(_6g,_){var _6h=E(_6g);if(!_6h[0]){return E(_5E);}else{var _6i=_6h[1],_6j=E(_6h[2]);if(!_6j[0]){return E(_5E);}else{if(!E(_6j[2])[0]){var _6k=jsSetCB(E(_6i)[1],E(_4K)[1],function(_6l,_){var _6m=jsGet(E(_6i)[1],E(_4L)[1]),_6n=_6m;return new F(function(){return A(_4E,[_4B,_6j[1],_4M,new T(function(){return B(_5N(B(_2h(_5K,B(_6a(fromJSStr(_6n)))))));}),_]);});}),_6o=_6k;return new T(function(){return E(_6o)==0?false:true;});}else{return E(_5E);}}}},_6p=new T(function(){return B(unCStr("outText"));}),_6q=[1,_6p,_h],_6r=new T(function(){return B(unCStr("inText"));}),_6s=[1,_6r,_6q],_6t=new T(function(){return B(_4n(_24,_4B,_6s,_6f));}),_6u=new T(function(){return E(_6t);});
var hasteMain = function() {B(A(_6u, [0]));};window.onload = hasteMain;
