var _0=function(_1,_2,_){var _3=B(A(_1,[_])),_4=_3;return new F(function(){return A(_2,[_]);});},_5=function(_6,_7,_){return new F(function(){return _0(_6,_7,_);});},_8=function(_9,_a,_){var _b=B(A(_9,[_])),_c=_b;return new F(function(){return A(_a,[_c,_]);});},_d=new T(function(){return B(unCStr("GHC.IO.Exception"));}),_e=new T(function(){return B(unCStr("base"));}),_f=new T(function(){return B(unCStr("IOException"));}),_g=[0],_h=new T(function(){var _i=hs_wordToWord64(4053623282),_j=_i,_k=hs_wordToWord64(3693590983),_l=_k;return [0,_j,_l,[0,_j,_l,_e,_d,_f],_g];}),_m=function(_n){return E(_h);},_o=function(_p){return E(E(_p)[1]);},_q=new T(function(){return B(unCStr("Maybe.fromJust: Nothing"));}),_r=new T(function(){return B(err(_q));}),_s=function(_t,_u,_v){var _w=new T(function(){var _x=B(A(_t,[_v])),_y=B(A(_u,[new T(function(){var _z=E(_w);return _z[0]==0?E(_r):E(_z[1]);})])),_A=hs_eqWord64(_x[1],_y[1]),_B=_A;if(!E(_B)){var _C=[0];}else{var _D=hs_eqWord64(_x[2],_y[2]),_E=_D,_C=E(_E)==0?[0]:[1,_v];}var _F=_C,_G=_F;return _G;});return E(_w);},_H=function(_I){var _J=E(_I);return new F(function(){return _s(B(_o(_J[1])),_m,_J[2]);});},_K=new T(function(){return B(unCStr(": "));}),_L=[0,41],_M=new T(function(){return B(unCStr(" ("));}),_N=function(_O,_P){var _Q=E(_O);return _Q[0]==0?E(_P):[1,_Q[1],new T(function(){return B(_N(_Q[2],_P));})];},_R=new T(function(){return B(unCStr("already exists"));}),_S=new T(function(){return B(unCStr("does not exist"));}),_T=new T(function(){return B(unCStr("protocol error"));}),_U=new T(function(){return B(unCStr("failed"));}),_V=new T(function(){return B(unCStr("invalid argument"));}),_W=new T(function(){return B(unCStr("inappropriate type"));}),_X=new T(function(){return B(unCStr("hardware fault"));}),_Y=new T(function(){return B(unCStr("unsupported operation"));}),_Z=new T(function(){return B(unCStr("timeout"));}),_10=new T(function(){return B(unCStr("resource vanished"));}),_11=new T(function(){return B(unCStr("interrupted"));}),_12=new T(function(){return B(unCStr("resource busy"));}),_13=new T(function(){return B(unCStr("resource exhausted"));}),_14=new T(function(){return B(unCStr("end of file"));}),_15=new T(function(){return B(unCStr("illegal operation"));}),_16=new T(function(){return B(unCStr("permission denied"));}),_17=new T(function(){return B(unCStr("user error"));}),_18=new T(function(){return B(unCStr("unsatisified constraints"));}),_19=new T(function(){return B(unCStr("system error"));}),_1a=function(_1b,_1c){switch(E(_1b)){case 0:return new F(function(){return _N(_R,_1c);});break;case 1:return new F(function(){return _N(_S,_1c);});break;case 2:return new F(function(){return _N(_12,_1c);});break;case 3:return new F(function(){return _N(_13,_1c);});break;case 4:return new F(function(){return _N(_14,_1c);});break;case 5:return new F(function(){return _N(_15,_1c);});break;case 6:return new F(function(){return _N(_16,_1c);});break;case 7:return new F(function(){return _N(_17,_1c);});break;case 8:return new F(function(){return _N(_18,_1c);});break;case 9:return new F(function(){return _N(_19,_1c);});break;case 10:return new F(function(){return _N(_T,_1c);});break;case 11:return new F(function(){return _N(_U,_1c);});break;case 12:return new F(function(){return _N(_V,_1c);});break;case 13:return new F(function(){return _N(_W,_1c);});break;case 14:return new F(function(){return _N(_X,_1c);});break;case 15:return new F(function(){return _N(_Y,_1c);});break;case 16:return new F(function(){return _N(_Z,_1c);});break;case 17:return new F(function(){return _N(_10,_1c);});break;default:return new F(function(){return _N(_11,_1c);});}},_1d=[0,125],_1e=new T(function(){return B(unCStr("{handle: "));}),_1f=function(_1g,_1h,_1i,_1j,_1k,_1l){var _1m=new T(function(){var _1n=new T(function(){return B(_1a(_1h,new T(function(){var _1o=E(_1j);return _1o[0]==0?E(_1l):B(_N(_M,new T(function(){return B(_N(_1o,[1,_L,_1l]));})));})));}),_1p=E(_1i);return _1p[0]==0?E(_1n):B(_N(_1p,new T(function(){return B(_N(_K,_1n));})));}),_1q=E(_1k);if(!_1q[0]){var _1r=E(_1g);if(!_1r[0]){return E(_1m);}else{var _1s=E(_1r[1]);return _1s[0]==0?B(_N(_1e,new T(function(){return B(_N(_1s[1],[1,_1d,new T(function(){return B(_N(_K,_1m));})]));}))):B(_N(_1e,new T(function(){return B(_N(_1s[1],[1,_1d,new T(function(){return B(_N(_K,_1m));})]));})));}}else{return new F(function(){return _N(_1q[1],new T(function(){return B(_N(_K,_1m));}));});}},_1t=function(_1u){var _1v=E(_1u);return new F(function(){return _1f(_1v[1],_1v[2],_1v[3],_1v[4],_1v[6],_g);});},_1w=function(_1x,_1y){var _1z=E(_1x);return new F(function(){return _1f(_1z[1],_1z[2],_1z[3],_1z[4],_1z[6],_1y);});},_1A=[0,44],_1B=[0,93],_1C=[0,91],_1D=function(_1E,_1F,_1G){var _1H=E(_1F);return _1H[0]==0?B(unAppCStr("[]",_1G)):[1,_1C,new T(function(){return B(A(_1E,[_1H[1],new T(function(){var _1I=function(_1J){var _1K=E(_1J);return _1K[0]==0?E([1,_1B,_1G]):[1,_1A,new T(function(){return B(A(_1E,[_1K[1],new T(function(){return B(_1I(_1K[2]));})]));})];};return B(_1I(_1H[2]));})]));})];},_1L=function(_1M,_1N){return new F(function(){return _1D(_1w,_1M,_1N);});},_1O=function(_1P,_1Q,_1R){var _1S=E(_1Q);return new F(function(){return _1f(_1S[1],_1S[2],_1S[3],_1S[4],_1S[6],_1R);});},_1T=[0,_1O,_1t,_1L],_1U=new T(function(){return [0,_m,_1T,_1V,_H];}),_1V=function(_1W){return [0,_1U,_1W];},_1X=[0],_1Y=7,_1Z=function(_20){return [0,_1X,_1Y,_g,_20,_1X,_1X];},_21=function(_22,_){return new F(function(){return die(new T(function(){return B(_1V(new T(function(){return B(_1Z(_22));})));}));});},_23=function(_24,_){return new F(function(){return _21(_24,_);});},_25=function(_26,_){return _26;},_27=[0,_8,_5,_25,_23],_28=function(_29,_2a){return new F(function(){return A(_29,[function(_){return new F(function(){return jsFind(toJSStr(E(_2a)));});}]);});},_2b=function(_2c,_2d){while(1){var _2e=E(_2d);if(!_2e[0]){return false;}else{if(!B(A(_2c,[_2e[1]]))){_2d=_2e[2];continue;}else{return true;}}}},_2f=function(_2g){var _2h=E(_2g);return _2h[0]==0?E(_r):E(_2h[1]);},_2i=function(_2j){return E(_2j)[0]==0?true:false;},_2k=function(_2l,_2m){var _2n=E(_2m);return _2n[0]==0?[0]:[1,new T(function(){return B(A(_2l,[_2n[1]]));}),new T(function(){return B(_2k(_2l,_2n[2]));})];},_2o=[0,34],_2p=function(_2q,_2r){while(1){var _2s=(function(_2t,_2u){var _2v=E(_2t);if(!_2v[0]){return [0];}else{var _2w=_2v[2],_2x=E(_2u);if(!_2x[0]){return [0];}else{var _2y=_2x[2];if(!E(_2x[1])[0]){return [1,_2v[1],new T(function(){return B(_2p(_2w,_2y));})];}else{_2q=_2w;_2r=_2y;return null;}}}})(_2q,_2r);if(_2s!=null){return _2s;}}},_2z=new T(function(){return B(unAppCStr("[]",_g));}),_2A=new T(function(){return B(unCStr("Prelude.(!!): negative index\n"));}),_2B=new T(function(){return B(err(_2A));}),_2C=new T(function(){return B(unCStr("Prelude.(!!): index too large\n"));}),_2D=new T(function(){return B(err(_2C));}),_2E=function(_2F,_2G){while(1){var _2H=E(_2F);if(!_2H[0]){return E(_2D);}else{var _2I=E(_2G);if(!_2I){return E(_2H[1]);}else{_2F=_2H[2];_2G=_2I-1|0;continue;}}}},_2J=new T(function(){return B(unCStr("ACK"));}),_2K=new T(function(){return B(unCStr("BEL"));}),_2L=new T(function(){return B(unCStr("BS"));}),_2M=new T(function(){return B(unCStr("SP"));}),_2N=[1,_2M,_g],_2O=new T(function(){return B(unCStr("US"));}),_2P=[1,_2O,_2N],_2Q=new T(function(){return B(unCStr("RS"));}),_2R=[1,_2Q,_2P],_2S=new T(function(){return B(unCStr("GS"));}),_2T=[1,_2S,_2R],_2U=new T(function(){return B(unCStr("FS"));}),_2V=[1,_2U,_2T],_2W=new T(function(){return B(unCStr("ESC"));}),_2X=[1,_2W,_2V],_2Y=new T(function(){return B(unCStr("SUB"));}),_2Z=[1,_2Y,_2X],_30=new T(function(){return B(unCStr("EM"));}),_31=[1,_30,_2Z],_32=new T(function(){return B(unCStr("CAN"));}),_33=[1,_32,_31],_34=new T(function(){return B(unCStr("ETB"));}),_35=[1,_34,_33],_36=new T(function(){return B(unCStr("SYN"));}),_37=[1,_36,_35],_38=new T(function(){return B(unCStr("NAK"));}),_39=[1,_38,_37],_3a=new T(function(){return B(unCStr("DC4"));}),_3b=[1,_3a,_39],_3c=new T(function(){return B(unCStr("DC3"));}),_3d=[1,_3c,_3b],_3e=new T(function(){return B(unCStr("DC2"));}),_3f=[1,_3e,_3d],_3g=new T(function(){return B(unCStr("DC1"));}),_3h=[1,_3g,_3f],_3i=new T(function(){return B(unCStr("DLE"));}),_3j=[1,_3i,_3h],_3k=new T(function(){return B(unCStr("SI"));}),_3l=[1,_3k,_3j],_3m=new T(function(){return B(unCStr("SO"));}),_3n=[1,_3m,_3l],_3o=new T(function(){return B(unCStr("CR"));}),_3p=[1,_3o,_3n],_3q=new T(function(){return B(unCStr("FF"));}),_3r=[1,_3q,_3p],_3s=new T(function(){return B(unCStr("VT"));}),_3t=[1,_3s,_3r],_3u=new T(function(){return B(unCStr("LF"));}),_3v=[1,_3u,_3t],_3w=new T(function(){return B(unCStr("HT"));}),_3x=[1,_3w,_3v],_3y=[1,_2L,_3x],_3z=[1,_2K,_3y],_3A=[1,_2J,_3z],_3B=new T(function(){return B(unCStr("ENQ"));}),_3C=[1,_3B,_3A],_3D=new T(function(){return B(unCStr("EOT"));}),_3E=[1,_3D,_3C],_3F=new T(function(){return B(unCStr("ETX"));}),_3G=[1,_3F,_3E],_3H=new T(function(){return B(unCStr("STX"));}),_3I=[1,_3H,_3G],_3J=new T(function(){return B(unCStr("SOH"));}),_3K=[1,_3J,_3I],_3L=new T(function(){return B(unCStr("NUL"));}),_3M=[1,_3L,_3K],_3N=[0,92],_3O=new T(function(){return B(unCStr("\\DEL"));}),_3P=new T(function(){return B(unCStr("\\a"));}),_3Q=new T(function(){return B(unCStr("\\\\"));}),_3R=new T(function(){return B(unCStr("\\SO"));}),_3S=new T(function(){return B(unCStr("\\r"));}),_3T=new T(function(){return B(unCStr("\\f"));}),_3U=new T(function(){return B(unCStr("\\v"));}),_3V=new T(function(){return B(unCStr("\\n"));}),_3W=new T(function(){return B(unCStr("\\t"));}),_3X=new T(function(){return B(unCStr("\\b"));}),_3Y=function(_3Z,_40){if(_3Z<=127){var _41=E(_3Z);switch(_41){case 92:return new F(function(){return _N(_3Q,_40);});break;case 127:return new F(function(){return _N(_3O,_40);});break;default:if(_41<32){var _42=E(_41);switch(_42){case 7:return new F(function(){return _N(_3P,_40);});break;case 8:return new F(function(){return _N(_3X,_40);});break;case 9:return new F(function(){return _N(_3W,_40);});break;case 10:return new F(function(){return _N(_3V,_40);});break;case 11:return new F(function(){return _N(_3U,_40);});break;case 12:return new F(function(){return _N(_3T,_40);});break;case 13:return new F(function(){return _N(_3S,_40);});break;case 14:return new F(function(){return _N(_3R,new T(function(){var _43=E(_40);if(!_43[0]){var _44=[0];}else{var _44=E(E(_43[1])[1])==72?B(unAppCStr("\\&",_43)):E(_43);}return _44;}));});break;default:return new F(function(){return _N([1,_3N,new T(function(){var _45=_42;return _45>=0?B(_2E(_3M,_45)):E(_2B);})],_40);});}}else{return [1,[0,_41],_40];}}}else{return [1,_3N,new T(function(){var _46=jsShowI(_3Z),_47=_46;return B(_N(fromJSStr(_47),new T(function(){var _48=E(_40);if(!_48[0]){var _49=[0];}else{var _4a=E(_48[1])[1],_49=_4a<48?E(_48):_4a>57?E(_48):B(unAppCStr("\\&",_48));}return _49;})));})];}},_4b=new T(function(){return B(unCStr("\\\""));}),_4c=function(_4d,_4e){var _4f=E(_4d);if(!_4f[0]){return E(_4e);}else{var _4g=_4f[2],_4h=E(E(_4f[1])[1]);if(_4h==34){return new F(function(){return _N(_4b,new T(function(){return B(_4c(_4g,_4e));}));});}else{return new F(function(){return _3Y(_4h,new T(function(){return B(_4c(_4g,_4e));}));});}}},_4i=[1,_1B,_g],_4j=function(_4k){var _4l=E(_4k);return _4l[0]==0?E(_4i):[1,_1A,[1,_2o,new T(function(){return B(_4c(_4l[1],[1,_2o,new T(function(){return B(_4j(_4l[2]));})]));})]];},_4m=function(_4n,_4o){return new F(function(){return err(B(unAppCStr("Elements with the following IDs could not be found: ",new T(function(){var _4p=B(_2p(_4o,_4n));return _4p[0]==0?E(_2z):[1,_1C,[1,_2o,new T(function(){return B(_4c(_4p[1],[1,_2o,new T(function(){return B(_4j(_4p[2]));})]));})]];}))));});},_4q=function(_4r,_4s,_4t,_4u){var _4v=E(_4r),_4w=_4v[1],_4x=_4v[3];return new F(function(){return A(_4w,[new T(function(){var _4y=function(_4z){var _4A=E(_4z);if(!_4A[0]){return E(new T(function(){return B(A(_4x,[_g]));}));}else{return new F(function(){return A(_4w,[new T(function(){return B(_28(_4s,_4A[1]));}),function(_4B){return new F(function(){return A(_4w,[new T(function(){return B(_4y(_4A[2]));}),function(_4C){return new F(function(){return A(_4x,[[1,_4B,_4C]]);});}]);});}]);});}};return B(_4y(_4t));}),function(_4D){return !B(_2b(_2i,_4D))?B(A(_4u,[new T(function(){return B(_2k(_2f,_4D));})])):B(_4m(_4D,_4t));}]);});},_4E=function(_4F){return E(_4F);},_4G=function(_4H,_4I){while(1){var _4J=E(_4H);if(!_4J[0]){return E(_4I);}else{_4H=_4J[2];var _4K=_4I+1|0;_4I=_4K;continue;}}},_4L=0,_4M=function(_4N,_4O,_4P,_4Q){return new F(function(){return A(_4N,[new T(function(){return function(_){var _4R=jsSet(E(_4O)[1],toJSStr(E(_4P)),toJSStr(E(_4Q)));return _4L;};})]);});},_4S=function(_4T,_4U){var _4V=jsShowI(_4T),_4W=_4V;return new F(function(){return _N(fromJSStr(_4W),_4U);});},_4X=[0,41],_4Y=[0,40],_4Z=function(_50,_51,_52){return _51>=0?B(_4S(_51,_52)):_50<=6?B(_4S(_51,_52)):[1,_4Y,new T(function(){var _53=jsShowI(_51),_54=_53;return B(_N(fromJSStr(_54),[1,_4X,_52]));})];},_55=function(_56,_57){return E(_56)[1]!=E(_57)[1];},_58=function(_59,_5a){return E(_59)[1]==E(_5a)[1];},_5b=[0,_58,_55],_5c=function(_5d,_5e){return _5d<=_5e?[1,[0,_5d],new T(function(){return B(_5c(_5d+1|0,_5e));})]:[0];},_5f=new T(function(){return B(_5c(48,57));}),_5g=function(_5h){return E(E(_5h)[1]);},_5i=function(_5j,_5k,_5l){while(1){var _5m=E(_5l);if(!_5m[0]){return false;}else{if(!B(A(_5g,[_5j,_5k,_5m[1]]))){_5l=_5m[2];continue;}else{return true;}}}},_5n=function(_5o){return new F(function(){return _5i(_5b,_5o,_5f);});},_5p=new T(function(){return B(unCStr("52380"));}),_5q=new T(function(){return [0,"click"];}),_5r=function(_5s,_5t){while(1){var _5u=(function(_5v,_5w){var _5x=E(_5w);if(!_5x[0]){return [0];}else{var _5y=_5x[1],_5z=_5x[2];if(!B(A(_5v,[_5y]))){var _5A=_5v;_5t=_5z;_5s=_5A;return null;}else{return [1,_5y,new T(function(){return B(_5r(_5v,_5z));})];}}})(_5s,_5t);if(_5u!=null){return _5u;}}},_5B=function(_5C,_5D,_5E,_5F){var _5G=E(_5E);if(!_5G[0]){return E(_5D);}else{var _5H=E(_5F);if(!_5H[0]){return E(_5D);}else{return new F(function(){return A(_5C,[_5G[1],_5H[1],new T(function(){return B(_5B(_5C,_5D,_5G[2],_5H[2]));})]);});}}},_5I=new T(function(){return [0,"value"];}),_5J=true,_5K=function(_5L){while(1){var _5M=(function(_5N){var _5O=E(_5N);if(!_5O[0]){return [0];}else{var _5P=_5O[2];if(!B(_5i(_5b,_5O[1],_5p))){_5L=_5P;return null;}else{return [1,_5J,new T(function(){return B(_5K(_5P));})];}}})(_5L);if(_5M!=null){return _5M;}}},_5Q=new T(function(){return B(unCStr("Control.Exception.Base"));}),_5R=new T(function(){return B(unCStr("base"));}),_5S=new T(function(){return B(unCStr("PatternMatchFail"));}),_5T=new T(function(){var _5U=hs_wordToWord64(18445595),_5V=_5U,_5W=hs_wordToWord64(52003073),_5X=_5W;return [0,_5V,_5X,[0,_5V,_5X,_5R,_5Q,_5S],_g];}),_5Y=function(_5Z){return E(_5T);},_60=function(_61){var _62=E(_61);return new F(function(){return _s(B(_o(_62[1])),_5Y,_62[2]);});},_63=function(_64){return E(E(_64)[1]);},_65=function(_66,_67){return new F(function(){return _N(E(_66)[1],_67);});},_68=function(_69,_6a){return new F(function(){return _1D(_65,_69,_6a);});},_6b=function(_6c,_6d,_6e){return new F(function(){return _N(E(_6d)[1],_6e);});},_6f=[0,_6b,_63,_68],_6g=new T(function(){return [0,_5Y,_6f,_6h,_60];}),_6h=function(_6i){return [0,_6g,_6i];},_6j=new T(function(){return B(unCStr("Non-exhaustive patterns in"));}),_6k=function(_6l,_6m){return new F(function(){return die(new T(function(){return B(A(_6m,[_6l]));}));});},_6n=function(_6o,_6p){var _6q=E(_6p);if(!_6q[0]){return [0,_g,_g];}else{var _6r=_6q[1];if(!B(A(_6o,[_6r]))){return [0,_g,_6q];}else{var _6s=new T(function(){var _6t=B(_6n(_6o,_6q[2]));return [0,_6t[1],_6t[2]];});return [0,[1,_6r,new T(function(){return E(E(_6s)[1]);})],new T(function(){return E(E(_6s)[2]);})];}}},_6u=[0,32],_6v=[0,10],_6w=[1,_6v,_g],_6x=function(_6y){return E(E(_6y)[1])==124?false:true;},_6z=function(_6A,_6B){var _6C=B(_6n(_6x,B(unCStr(_6A)))),_6D=_6C[1],_6E=function(_6F,_6G){return new F(function(){return _N(_6F,new T(function(){return B(unAppCStr(": ",new T(function(){return B(_N(_6B,new T(function(){return B(_N(_6G,_6w));})));})));}));});},_6H=E(_6C[2]);if(!_6H[0]){return new F(function(){return _6E(_6D,_g);});}else{return E(E(_6H[1])[1])==124?B(_6E(_6D,[1,_6u,_6H[2]])):B(_6E(_6D,_g));}},_6I=function(_6J){return new F(function(){return _6k([0,new T(function(){return B(_6z(_6J,_6j));})],_6h);});},_6K=new T(function(){return B(_6I("moo.hs:(13,1)-(20,30)|function playmoo"));}),_6L=[0,66],_6M=[1,_6L,_g],_6N=new T(function(){return B(unCStr("innerHTML"));}),_6O=[0,72],_6P=function(_6Q,_6R,_6S){return E(_6Q)[1]!=E(_6R)[1]?E(_6S):[1,_5J,_6S];},_6T=new T(function(){return B(unCStr("td"));}),_6U=new T(function(){return B(unCStr("tr"));}),_6V=function(_6W,_){var _6X=E(_6W);if(!_6X[0]){return E(_6K);}else{var _6Y=E(_6X[2]);if(!_6Y[0]){return E(_6K);}else{var _6Z=E(_6Y[2]);if(!_6Z[0]){return E(_6K);}else{if(!E(_6Z[2])[0]){var _70=jsSetCB(E(_6Y[1])[1],E(_5q)[1],function(_71,_72,_){var _73=jsGet(E(_6X[1])[1],E(_5I)[1]),_74=_73,_75=jsCreateElem(toJSStr(E(_6U))),_76=_75,_77=E(_6T),_78=jsCreateElem(toJSStr(_77)),_79=_78,_7a=new T(function(){return B(_5r(_5n,fromJSStr(_74)));}),_7b=B(A(_4M,[_4E,[0,_79],_6N,_7a,_])),_7c=_7b,_7d=jsCreateElem(toJSStr(_77)),_7e=_7d,_7f=B(A(_4M,[_4E,[0,_7e],_6N,new T(function(){var _7g=B(_4G(B(_5B(_6P,_g,_5p,_7a)),0));return B(_N(B(_4Z(0,_7g,_g)),[1,_6O,new T(function(){return B(_N(B(_4Z(0,B(_4G(B(_5K(_7a)),0))-_7g|0,_g)),_6M));})]));}),_])),_7h=_7f,_7i=jsAppendChild(_79,_76),_7j=jsAppendChild(_7e,_76),_7k=jsAppendChild(_76,E(_6Z[1])[1]);return _4L;}),_7l=_70;return new T(function(){return E(_7l)==0?false:true;});}else{return E(_6K);}}}}},_7m=new T(function(){return B(unCStr("results"));}),_7n=[1,_7m,_g],_7o=new T(function(){return B(unCStr("submit"));}),_7p=[1,_7o,_7n],_7q=new T(function(){return B(unCStr("input"));}),_7r=[1,_7q,_7p],_7s=new T(function(){return B(_4q(_27,_4E,_7r,_6V));}),_7t=new T(function(){return E(_7s);});
var hasteMain = function() {B(A(_7t, [0]));};window.onload = hasteMain;
