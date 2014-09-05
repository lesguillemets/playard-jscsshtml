var _0=function(_1,_2){return E(_1)[1]!=E(_2)[1];},_3=function(_4,_5){return E(_4)[1]==E(_5)[1];},_6=[0,_3,_0],_7=function(_8,_9){return E(_8)[1]==E(_9)[1];},_a=function(_b,_c){return E(_b)[1]!=E(_c)[1];},_d=[0,_7,_a],_e=function(_f,_g,_){var _h=B(A(_f,[_])),_i=_h;return new F(function(){return A(_g,[_]);});},_j=function(_k,_l,_){return new F(function(){return _e(_k,_l,_);});},_m=function(_n,_o,_){var _p=B(A(_n,[_])),_q=_p;return new F(function(){return A(_o,[_q,_]);});},_r=new T(function(){return B(unCStr("GHC.IO.Exception"));}),_s=new T(function(){return B(unCStr("base"));}),_t=new T(function(){return B(unCStr("IOException"));}),_u=[0],_v=new T(function(){var _w=hs_wordToWord64(4053623282),_x=_w,_y=hs_wordToWord64(3693590983),_z=_y;return [0,_x,_z,[0,_x,_z,_s,_r,_t],_u];}),_A=function(_B){return E(_v);},_C=function(_D){return E(E(_D)[1]);},_E=new T(function(){return B(unCStr("Maybe.fromJust: Nothing"));}),_F=new T(function(){return B(err(_E));}),_G=function(_H,_I,_J){var _K=new T(function(){var _L=B(A(_H,[_J])),_M=B(A(_I,[new T(function(){var _N=E(_K);return _N[0]==0?E(_F):E(_N[1]);})])),_O=hs_eqWord64(_L[1],_M[1]),_P=_O;if(!E(_P)){var _Q=[0];}else{var _R=hs_eqWord64(_L[2],_M[2]),_S=_R,_Q=E(_S)==0?[0]:[1,_J];}var _T=_Q,_U=_T;return _U;});return E(_K);},_V=function(_W){var _X=E(_W);return new F(function(){return _G(B(_C(_X[1])),_A,_X[2]);});},_Y=new T(function(){return B(unCStr(": "));}),_Z=[0,41],_10=new T(function(){return B(unCStr(" ("));}),_11=function(_12,_13){var _14=E(_12);return _14[0]==0?E(_13):[1,_14[1],new T(function(){return B(_11(_14[2],_13));})];},_15=new T(function(){return B(unCStr("already exists"));}),_16=new T(function(){return B(unCStr("does not exist"));}),_17=new T(function(){return B(unCStr("protocol error"));}),_18=new T(function(){return B(unCStr("failed"));}),_19=new T(function(){return B(unCStr("invalid argument"));}),_1a=new T(function(){return B(unCStr("inappropriate type"));}),_1b=new T(function(){return B(unCStr("hardware fault"));}),_1c=new T(function(){return B(unCStr("unsupported operation"));}),_1d=new T(function(){return B(unCStr("timeout"));}),_1e=new T(function(){return B(unCStr("resource vanished"));}),_1f=new T(function(){return B(unCStr("interrupted"));}),_1g=new T(function(){return B(unCStr("resource busy"));}),_1h=new T(function(){return B(unCStr("resource exhausted"));}),_1i=new T(function(){return B(unCStr("end of file"));}),_1j=new T(function(){return B(unCStr("illegal operation"));}),_1k=new T(function(){return B(unCStr("permission denied"));}),_1l=new T(function(){return B(unCStr("user error"));}),_1m=new T(function(){return B(unCStr("unsatisified constraints"));}),_1n=new T(function(){return B(unCStr("system error"));}),_1o=function(_1p,_1q){switch(E(_1p)){case 0:return new F(function(){return _11(_15,_1q);});break;case 1:return new F(function(){return _11(_16,_1q);});break;case 2:return new F(function(){return _11(_1g,_1q);});break;case 3:return new F(function(){return _11(_1h,_1q);});break;case 4:return new F(function(){return _11(_1i,_1q);});break;case 5:return new F(function(){return _11(_1j,_1q);});break;case 6:return new F(function(){return _11(_1k,_1q);});break;case 7:return new F(function(){return _11(_1l,_1q);});break;case 8:return new F(function(){return _11(_1m,_1q);});break;case 9:return new F(function(){return _11(_1n,_1q);});break;case 10:return new F(function(){return _11(_17,_1q);});break;case 11:return new F(function(){return _11(_18,_1q);});break;case 12:return new F(function(){return _11(_19,_1q);});break;case 13:return new F(function(){return _11(_1a,_1q);});break;case 14:return new F(function(){return _11(_1b,_1q);});break;case 15:return new F(function(){return _11(_1c,_1q);});break;case 16:return new F(function(){return _11(_1d,_1q);});break;case 17:return new F(function(){return _11(_1e,_1q);});break;default:return new F(function(){return _11(_1f,_1q);});}},_1r=[0,125],_1s=new T(function(){return B(unCStr("{handle: "));}),_1t=function(_1u,_1v,_1w,_1x,_1y,_1z){var _1A=new T(function(){var _1B=new T(function(){return B(_1o(_1v,new T(function(){var _1C=E(_1x);return _1C[0]==0?E(_1z):B(_11(_10,new T(function(){return B(_11(_1C,[1,_Z,_1z]));})));})));}),_1D=E(_1w);return _1D[0]==0?E(_1B):B(_11(_1D,new T(function(){return B(_11(_Y,_1B));})));}),_1E=E(_1y);if(!_1E[0]){var _1F=E(_1u);if(!_1F[0]){return E(_1A);}else{var _1G=E(_1F[1]);return _1G[0]==0?B(_11(_1s,new T(function(){return B(_11(_1G[1],[1,_1r,new T(function(){return B(_11(_Y,_1A));})]));}))):B(_11(_1s,new T(function(){return B(_11(_1G[1],[1,_1r,new T(function(){return B(_11(_Y,_1A));})]));})));}}else{return new F(function(){return _11(_1E[1],new T(function(){return B(_11(_Y,_1A));}));});}},_1H=function(_1I){var _1J=E(_1I);return new F(function(){return _1t(_1J[1],_1J[2],_1J[3],_1J[4],_1J[6],_u);});},_1K=function(_1L,_1M){var _1N=E(_1L);return new F(function(){return _1t(_1N[1],_1N[2],_1N[3],_1N[4],_1N[6],_1M);});},_1O=[0,44],_1P=[0,93],_1Q=[0,91],_1R=function(_1S,_1T,_1U){var _1V=E(_1T);return _1V[0]==0?B(unAppCStr("[]",_1U)):[1,_1Q,new T(function(){return B(A(_1S,[_1V[1],new T(function(){var _1W=function(_1X){var _1Y=E(_1X);return _1Y[0]==0?E([1,_1P,_1U]):[1,_1O,new T(function(){return B(A(_1S,[_1Y[1],new T(function(){return B(_1W(_1Y[2]));})]));})];};return B(_1W(_1V[2]));})]));})];},_1Z=function(_20,_21){return new F(function(){return _1R(_1K,_20,_21);});},_22=function(_23,_24,_25){var _26=E(_24);return new F(function(){return _1t(_26[1],_26[2],_26[3],_26[4],_26[6],_25);});},_27=[0,_22,_1H,_1Z],_28=new T(function(){return [0,_A,_27,_29,_V];}),_29=function(_2a){return [0,_28,_2a];},_2b=[0],_2c=7,_2d=function(_2e){return [0,_2b,_2c,_u,_2e,_2b,_2b];},_2f=function(_2g,_){return new F(function(){return die(new T(function(){return B(_29(new T(function(){return B(_2d(_2g));})));}));});},_2h=function(_2i,_){return new F(function(){return _2f(_2i,_);});},_2j=function(_2k,_){return _2k;},_2l=[0,_m,_j,_2j,_2h],_2m=function(_2n,_2o){while(1){var _2p=E(_2n);if(!_2p[0]){return E(_2o);}else{_2n=_2p[2];var _2q=_2o+1|0;_2o=_2q;continue;}}},_2r=0,_2s=function(_2t,_2u,_2v,_2w){return new F(function(){return A(_2t,[new T(function(){return function(_){var _2x=jsSet(E(_2u)[1],toJSStr(E(_2v)),toJSStr(E(_2w)));return _2r;};})]);});},_2y=function(_2z,_2A){var _2B=jsShowI(_2z),_2C=_2B;return new F(function(){return _11(fromJSStr(_2C),_2A);});},_2D=[0,41],_2E=[0,40],_2F=function(_2G,_2H,_2I){return _2H>=0?B(_2y(_2H,_2I)):_2G<=6?B(_2y(_2H,_2I)):[1,_2E,new T(function(){var _2J=jsShowI(_2H),_2K=_2J;return B(_11(fromJSStr(_2K),[1,_2D,_2I]));})];},_2L=function(_2M,_2N){return new F(function(){return A(_2M,[function(_){return new F(function(){return jsFind(toJSStr(E(_2N)));});}]);});},_2O=function(_2P,_2Q){while(1){var _2R=E(_2Q);if(!_2R[0]){return false;}else{if(!B(A(_2P,[_2R[1]]))){_2Q=_2R[2];continue;}else{return true;}}}},_2S=function(_2T){var _2U=E(_2T);return _2U[0]==0?E(_F):E(_2U[1]);},_2V=function(_2W){return E(_2W)[0]==0?true:false;},_2X=function(_2Y,_2Z){var _30=E(_2Z);return _30[0]==0?[0]:[1,new T(function(){return B(A(_2Y,[_30[1]]));}),new T(function(){return B(_2X(_2Y,_30[2]));})];},_31=[0,34],_32=function(_33,_34){while(1){var _35=(function(_36,_37){var _38=E(_36);if(!_38[0]){return [0];}else{var _39=_38[2],_3a=E(_37);if(!_3a[0]){return [0];}else{var _3b=_3a[2];if(!E(_3a[1])[0]){return [1,_38[1],new T(function(){return B(_32(_39,_3b));})];}else{_33=_39;_34=_3b;return null;}}}})(_33,_34);if(_35!=null){return _35;}}},_3c=new T(function(){return B(unAppCStr("[]",_u));}),_3d=new T(function(){return B(unCStr("Prelude.(!!): negative index\n"));}),_3e=new T(function(){return B(err(_3d));}),_3f=new T(function(){return B(unCStr("Prelude.(!!): index too large\n"));}),_3g=new T(function(){return B(err(_3f));}),_3h=function(_3i,_3j){while(1){var _3k=E(_3i);if(!_3k[0]){return E(_3g);}else{var _3l=E(_3j);if(!_3l){return E(_3k[1]);}else{_3i=_3k[2];_3j=_3l-1|0;continue;}}}},_3m=new T(function(){return B(unCStr("ACK"));}),_3n=new T(function(){return B(unCStr("BEL"));}),_3o=new T(function(){return B(unCStr("BS"));}),_3p=new T(function(){return B(unCStr("SP"));}),_3q=[1,_3p,_u],_3r=new T(function(){return B(unCStr("US"));}),_3s=[1,_3r,_3q],_3t=new T(function(){return B(unCStr("RS"));}),_3u=[1,_3t,_3s],_3v=new T(function(){return B(unCStr("GS"));}),_3w=[1,_3v,_3u],_3x=new T(function(){return B(unCStr("FS"));}),_3y=[1,_3x,_3w],_3z=new T(function(){return B(unCStr("ESC"));}),_3A=[1,_3z,_3y],_3B=new T(function(){return B(unCStr("SUB"));}),_3C=[1,_3B,_3A],_3D=new T(function(){return B(unCStr("EM"));}),_3E=[1,_3D,_3C],_3F=new T(function(){return B(unCStr("CAN"));}),_3G=[1,_3F,_3E],_3H=new T(function(){return B(unCStr("ETB"));}),_3I=[1,_3H,_3G],_3J=new T(function(){return B(unCStr("SYN"));}),_3K=[1,_3J,_3I],_3L=new T(function(){return B(unCStr("NAK"));}),_3M=[1,_3L,_3K],_3N=new T(function(){return B(unCStr("DC4"));}),_3O=[1,_3N,_3M],_3P=new T(function(){return B(unCStr("DC3"));}),_3Q=[1,_3P,_3O],_3R=new T(function(){return B(unCStr("DC2"));}),_3S=[1,_3R,_3Q],_3T=new T(function(){return B(unCStr("DC1"));}),_3U=[1,_3T,_3S],_3V=new T(function(){return B(unCStr("DLE"));}),_3W=[1,_3V,_3U],_3X=new T(function(){return B(unCStr("SI"));}),_3Y=[1,_3X,_3W],_3Z=new T(function(){return B(unCStr("SO"));}),_40=[1,_3Z,_3Y],_41=new T(function(){return B(unCStr("CR"));}),_42=[1,_41,_40],_43=new T(function(){return B(unCStr("FF"));}),_44=[1,_43,_42],_45=new T(function(){return B(unCStr("VT"));}),_46=[1,_45,_44],_47=new T(function(){return B(unCStr("LF"));}),_48=[1,_47,_46],_49=new T(function(){return B(unCStr("HT"));}),_4a=[1,_49,_48],_4b=[1,_3o,_4a],_4c=[1,_3n,_4b],_4d=[1,_3m,_4c],_4e=new T(function(){return B(unCStr("ENQ"));}),_4f=[1,_4e,_4d],_4g=new T(function(){return B(unCStr("EOT"));}),_4h=[1,_4g,_4f],_4i=new T(function(){return B(unCStr("ETX"));}),_4j=[1,_4i,_4h],_4k=new T(function(){return B(unCStr("STX"));}),_4l=[1,_4k,_4j],_4m=new T(function(){return B(unCStr("SOH"));}),_4n=[1,_4m,_4l],_4o=new T(function(){return B(unCStr("NUL"));}),_4p=[1,_4o,_4n],_4q=[0,92],_4r=new T(function(){return B(unCStr("\\DEL"));}),_4s=new T(function(){return B(unCStr("\\a"));}),_4t=new T(function(){return B(unCStr("\\\\"));}),_4u=new T(function(){return B(unCStr("\\SO"));}),_4v=new T(function(){return B(unCStr("\\r"));}),_4w=new T(function(){return B(unCStr("\\f"));}),_4x=new T(function(){return B(unCStr("\\v"));}),_4y=new T(function(){return B(unCStr("\\n"));}),_4z=new T(function(){return B(unCStr("\\t"));}),_4A=new T(function(){return B(unCStr("\\b"));}),_4B=function(_4C,_4D){if(_4C<=127){var _4E=E(_4C);switch(_4E){case 92:return new F(function(){return _11(_4t,_4D);});break;case 127:return new F(function(){return _11(_4r,_4D);});break;default:if(_4E<32){var _4F=E(_4E);switch(_4F){case 7:return new F(function(){return _11(_4s,_4D);});break;case 8:return new F(function(){return _11(_4A,_4D);});break;case 9:return new F(function(){return _11(_4z,_4D);});break;case 10:return new F(function(){return _11(_4y,_4D);});break;case 11:return new F(function(){return _11(_4x,_4D);});break;case 12:return new F(function(){return _11(_4w,_4D);});break;case 13:return new F(function(){return _11(_4v,_4D);});break;case 14:return new F(function(){return _11(_4u,new T(function(){var _4G=E(_4D);if(!_4G[0]){var _4H=[0];}else{var _4H=E(E(_4G[1])[1])==72?B(unAppCStr("\\&",_4G)):E(_4G);}return _4H;}));});break;default:return new F(function(){return _11([1,_4q,new T(function(){var _4I=_4F;return _4I>=0?B(_3h(_4p,_4I)):E(_3e);})],_4D);});}}else{return [1,[0,_4E],_4D];}}}else{return [1,_4q,new T(function(){var _4J=jsShowI(_4C),_4K=_4J;return B(_11(fromJSStr(_4K),new T(function(){var _4L=E(_4D);if(!_4L[0]){var _4M=[0];}else{var _4N=E(_4L[1])[1],_4M=_4N<48?E(_4L):_4N>57?E(_4L):B(unAppCStr("\\&",_4L));}return _4M;})));})];}},_4O=new T(function(){return B(unCStr("\\\""));}),_4P=function(_4Q,_4R){var _4S=E(_4Q);if(!_4S[0]){return E(_4R);}else{var _4T=_4S[2],_4U=E(E(_4S[1])[1]);if(_4U==34){return new F(function(){return _11(_4O,new T(function(){return B(_4P(_4T,_4R));}));});}else{return new F(function(){return _4B(_4U,new T(function(){return B(_4P(_4T,_4R));}));});}}},_4V=[1,_1P,_u],_4W=function(_4X){var _4Y=E(_4X);return _4Y[0]==0?E(_4V):[1,_1O,[1,_31,new T(function(){return B(_4P(_4Y[1],[1,_31,new T(function(){return B(_4W(_4Y[2]));})]));})]];},_4Z=function(_50,_51){return new F(function(){return err(B(unAppCStr("Elements with the following IDs could not be found: ",new T(function(){var _52=B(_32(_51,_50));return _52[0]==0?E(_3c):[1,_1Q,[1,_31,new T(function(){return B(_4P(_52[1],[1,_31,new T(function(){return B(_4W(_52[2]));})]));})]];}))));});},_53=function(_54,_55,_56,_57){var _58=E(_54),_59=_58[1],_5a=_58[3];return new F(function(){return A(_59,[new T(function(){var _5b=function(_5c){var _5d=E(_5c);if(!_5d[0]){return E(new T(function(){return B(A(_5a,[_u]));}));}else{return new F(function(){return A(_59,[new T(function(){return B(_2L(_55,_5d[1]));}),function(_5e){return new F(function(){return A(_59,[new T(function(){return B(_5b(_5d[2]));}),function(_5f){return new F(function(){return A(_5a,[[1,_5e,_5f]]);});}]);});}]);});}};return B(_5b(_56));}),function(_5g){return !B(_2O(_2V,_5g))?B(A(_57,[new T(function(){return B(_2X(_2S,_5g));})])):B(_4Z(_5g,_56));}]);});},_5h=true,_5i=function(_5j,_5k){return _5j<=_5k?[1,[0,_5j],new T(function(){return B(_5i(_5j+1|0,_5k));})]:[0];},_5l=new T(function(){return B(_5i(48,57));}),_5m=function(_5n){return E(E(_5n)[1]);},_5o=function(_5p,_5q,_5r){while(1){var _5s=E(_5r);if(!_5s[0]){return false;}else{if(!B(A(_5m,[_5p,_5q,_5s[1]]))){_5r=_5s[2];continue;}else{return true;}}}},_5t=function(_5u){return new F(function(){return _5o(_6,_5u,_5l);});},_5v=function(_5w){var _5x=E(_5w);if(!_5x[0]){return [0];}else{return new F(function(){return _11(_5x[1],new T(function(){return B(_5v(_5x[2]));}));});}},_5y=new T(function(){return [0,"(function(){return md51(jsRand().toString());})"];}),_5z=function(_5A){var _5B=B(A(_5A,[_])),_5C=_5B;return E(_5C);},_5D=function(_5E){return new F(function(){return _5z(function(_){var _=0;return new F(function(){return eval(E(_5E)[1]);});});});},_5F=function(_){return new F(function(){return A(_5D,[_5y,_]);});},_5G=function(_){return new F(function(){return _5F(_);});},_5H=new T(function(){return [0,"click"];}),_5I=function(_5J,_5K){while(1){var _5L=(function(_5M,_5N){var _5O=E(_5N);if(!_5O[0]){return [0];}else{var _5P=_5O[1],_5Q=_5O[2];if(!B(A(_5M,[_5P]))){var _5R=_5M;_5K=_5Q;_5J=_5R;return null;}else{return [1,_5P,new T(function(){return B(_5I(_5M,_5Q));})];}}})(_5J,_5K);if(_5L!=null){return _5L;}}},_5S=function(_5T,_5U,_5V,_5W){var _5X=E(_5V);if(!_5X[0]){return E(_5U);}else{var _5Y=E(_5W);if(!_5Y[0]){return E(_5U);}else{return new F(function(){return A(_5T,[_5X[1],_5Y[1],new T(function(){return B(_5S(_5T,_5U,_5X[2],_5Y[2]));})]);});}}},_5Z=new T(function(){return [0,"value"];}),_60=function(_61){return new F(function(){return _2F(0,E(_61)[1],_u);});},_62=function(_63,_64){var _65=E(_63);if(!_65[0]){return [0];}else{var _66=_65[1];return _64>1?[1,new T(function(){return B(_60(_66));}),new T(function(){return B(_62(_65[2],_64-1|0));})]:[1,new T(function(){return B(_60(_66));}),_u];}},_67=function(_68){return E(_68);},_69=new T(function(){return B(unCStr("Control.Exception.Base"));}),_6a=new T(function(){return B(unCStr("base"));}),_6b=new T(function(){return B(unCStr("PatternMatchFail"));}),_6c=new T(function(){var _6d=hs_wordToWord64(18445595),_6e=_6d,_6f=hs_wordToWord64(52003073),_6g=_6f;return [0,_6e,_6g,[0,_6e,_6g,_6a,_69,_6b],_u];}),_6h=function(_6i){return E(_6c);},_6j=function(_6k){var _6l=E(_6k);return new F(function(){return _G(B(_C(_6l[1])),_6h,_6l[2]);});},_6m=function(_6n){return E(E(_6n)[1]);},_6o=function(_6p,_6q){return new F(function(){return _11(E(_6p)[1],_6q);});},_6r=function(_6s,_6t){return new F(function(){return _1R(_6o,_6s,_6t);});},_6u=function(_6v,_6w,_6x){return new F(function(){return _11(E(_6w)[1],_6x);});},_6y=[0,_6u,_6m,_6r],_6z=new T(function(){return [0,_6h,_6y,_6A,_6j];}),_6A=function(_6B){return [0,_6z,_6B];},_6C=new T(function(){return B(unCStr("Non-exhaustive patterns in"));}),_6D=function(_6E,_6F){return new F(function(){return die(new T(function(){return B(A(_6F,[_6E]));}));});},_6G=function(_6H,_6I){var _6J=E(_6I);if(!_6J[0]){return [0,_u,_u];}else{var _6K=_6J[1];if(!B(A(_6H,[_6K]))){return [0,_u,_6J];}else{var _6L=new T(function(){var _6M=B(_6G(_6H,_6J[2]));return [0,_6M[1],_6M[2]];});return [0,[1,_6K,new T(function(){return E(E(_6L)[1]);})],new T(function(){return E(E(_6L)[2]);})];}}},_6N=[0,32],_6O=[0,10],_6P=[1,_6O,_u],_6Q=function(_6R){return E(E(_6R)[1])==124?false:true;},_6S=function(_6T,_6U){var _6V=B(_6G(_6Q,B(unCStr(_6T)))),_6W=_6V[1],_6X=function(_6Y,_6Z){return new F(function(){return _11(_6Y,new T(function(){return B(unAppCStr(": ",new T(function(){return B(_11(_6U,new T(function(){return B(_11(_6Z,_6P));})));})));}));});},_70=E(_6V[2]);if(!_70[0]){return new F(function(){return _6X(_6W,_u);});}else{return E(E(_70[1])[1])==124?B(_6X(_6W,[1,_6N,_70[2]])):B(_6X(_6W,_u));}},_71=function(_72){return new F(function(){return _6D([0,new T(function(){return B(_6S(_72,_6C));})],_6A);});},_73=new T(function(){return B(_71("moo.hs:(14,1)-(21,30)|function playmoo"));}),_74=[0,72],_75=function(_76,_77,_78){return E(_76)[1]!=E(_77)[1]?E(_78):[1,_5h,_78];},_79=new T(function(){return B(unCStr("td"));}),_7a=new T(function(){return B(unCStr("tr"));}),_7b=new T(function(){return B(unCStr("ArithException"));}),_7c=new T(function(){return B(unCStr("GHC.Exception"));}),_7d=new T(function(){return B(unCStr("base"));}),_7e=new T(function(){var _7f=hs_wordToWord64(4194982440),_7g=_7f,_7h=hs_wordToWord64(3110813675),_7i=_7h;return [0,_7g,_7i,[0,_7g,_7i,_7d,_7c,_7b],_u];}),_7j=function(_7k){return E(_7e);},_7l=function(_7m){var _7n=E(_7m);return new F(function(){return _G(B(_C(_7n[1])),_7j,_7n[2]);});},_7o=new T(function(){return B(unCStr("arithmetic underflow"));}),_7p=new T(function(){return B(unCStr("arithmetic overflow"));}),_7q=new T(function(){return B(unCStr("Ratio has zero denominator"));}),_7r=new T(function(){return B(unCStr("denormal"));}),_7s=new T(function(){return B(unCStr("divide by zero"));}),_7t=new T(function(){return B(unCStr("loss of precision"));}),_7u=function(_7v){switch(E(_7v)){case 0:return E(_7p);case 1:return E(_7o);case 2:return E(_7t);case 3:return E(_7s);case 4:return E(_7r);default:return E(_7q);}},_7w=function(_7x){return new F(function(){return _11(_7o,_7x);});},_7y=function(_7x){return new F(function(){return _11(_7p,_7x);});},_7z=function(_7x){return new F(function(){return _11(_7q,_7x);});},_7A=function(_7x){return new F(function(){return _11(_7r,_7x);});},_7B=function(_7x){return new F(function(){return _11(_7s,_7x);});},_7C=function(_7x){return new F(function(){return _11(_7t,_7x);});},_7D=function(_7E){switch(E(_7E)){case 0:return E(_7y);case 1:return E(_7w);case 2:return E(_7C);case 3:return E(_7B);case 4:return E(_7A);default:return E(_7z);}},_7F=function(_7G,_7H){return new F(function(){return _1R(_7D,_7G,_7H);});},_7I=function(_7J,_7K){switch(E(_7K)){case 0:return E(_7y);case 1:return E(_7w);case 2:return E(_7C);case 3:return E(_7B);case 4:return E(_7A);default:return E(_7z);}},_7L=[0,_7I,_7u,_7F],_7M=new T(function(){return [0,_7j,_7L,_7N,_7l];}),_7N=function(_7x){return [0,_7M,_7x];},_7O=3,_7P=new T(function(){return B(_6D(_7O,_7N));}),_7Q=function(_7R){var _7S=jsRound(_7R),_7T=_7S;return [0,_7T];},_7U=new T(function(){return [0,"(function(s){return s[0];})"];}),_7V=new T(function(){return B(_5D(_7U));}),_7W=function(_7X,_){var _7Y=B(A(_7V,[E(_7X),_])),_7Z=_7Y;return new T(function(){return B(_7Q(_7Z));});},_80=function(_81,_){return new F(function(){return _7W(_81,_);});},_82=function(_83,_84){var _85=_83%_84;if(_83<=0){if(_83>=0){return E(_85);}else{if(_84<=0){return E(_85);}else{var _86=E(_85);return _86==0?0:_86+_84|0;}}}else{if(_84>=0){if(_83>=0){return E(_85);}else{if(_84<=0){return E(_85);}else{var _87=E(_85);return _87==0?0:_87+_84|0;}}}else{var _88=E(_85);return _88==0?0:_88+_84|0;}}},_89=new T(function(){return [0,"(function(s){return md51(s.join(\',\'));})"];}),_8a=new T(function(){return B(_5D(_89));}),_8b=function(_8c,_){return new F(function(){return A(_8a,[E(_8c),_]);});},_8d=function(_81,_){return new F(function(){return _8b(_81,_);});},_8e=function(_8f){return new F(function(){return _5z(function(_){var _=0;return new F(function(){return _8d(_8f,_);});});});},_8g=function(_8h,_8i,_8j){while(1){var _8k=(function(_8l,_8m,_8n){if(_8l>_8m){var _8o=_8m,_8p=_8l,_8q=_8n;_8h=_8o;_8i=_8p;_8j=_8q;return null;}else{return [0,new T(function(){var _8r=(_8m-_8l|0)+1|0;switch(_8r){case -1:var _8s=[0,_8l];break;case 0:var _8s=E(_7P);break;default:var _8s=[0,B(_82(B(_5z(function(_){var _=0;return new F(function(){return _80(_8n,_);});}))[1],_8r))+_8l|0];}var _8t=_8s;return _8t;}),new T(function(){return B(_8e(_8n));})];}})(_8h,_8i,_8j);if(_8k!=null){return _8k;}}},_8u=function(_8v){return [1,new T(function(){var _8w=B(_8g(0,9,_8v));return [0,_8w[1],_8w[2]];})];},_8x=[0,66],_8y=[1,_8x,_u],_8z=new T(function(){return B(unCStr("innerHTML"));}),_8A=new T(function(){return B(unCStr("input"));}),_8B=new T(function(){return B(unCStr("submit"));}),_8C=new T(function(){return B(unCStr("results"));}),_8D=[1,_8C,_u],_8E=[1,_8B,_8D],_8F=[1,_8A,_8E],_8G=function(_8H,_8I){var _8J=function(_8K,_8L){while(1){var _8M=(function(_8N,_8O){var _8P=E(_8N);if(!_8P[0]){return [0];}else{var _8Q=_8P[1],_8R=_8P[2];if(!B(_5o(_8H,_8Q,_8O))){return [1,_8Q,new T(function(){return B(_8J(_8R,[1,_8Q,_8O]));})];}else{_8K=_8R;var _8S=_8O;_8L=_8S;return null;}}})(_8K,_8L);if(_8M!=null){return _8M;}}};return new F(function(){return _8J(_8I,_u);});},_8T=function(_8U,_8V){var _8W=B(A(_8U,[_8V]));if(!_8W[0]){return [0];}else{var _8X=E(_8W[1]);return [1,_8X[1],new T(function(){return B(_8T(_8U,_8X[2]));})];}},_8Y=function(_){var _8Z=B(_5G(_)),_90=_8Z,_91=B(_5v(B(_62(B(_8G(_d,B(_8T(_8u,_90)))),5)))),_92=jsLog(toJSStr(_91)),_93=function(_94){while(1){var _95=(function(_96){var _97=E(_96);if(!_97[0]){return [0];}else{var _98=_97[2];if(!B(_5o(_6,_97[1],_91))){_94=_98;return null;}else{return [1,_5h,new T(function(){return B(_93(_98));})];}}})(_94);if(_95!=null){return _95;}}};return new F(function(){return A(_53,[_2l,_67,_8F,function(_99){var _9a=E(_99);if(!_9a[0]){return E(_73);}else{var _9b=E(_9a[2]);if(!_9b[0]){return E(_73);}else{var _9c=E(_9b[2]);return _9c[0]==0?E(_73):E(_9c[2])[0]==0?function(_){var _9d=jsSetCB(E(_9b[1])[1],E(_5H)[1],function(_9e,_9f,_){var _9g=jsGet(E(_9a[1])[1],E(_5Z)[1]),_9h=_9g,_9i=jsCreateElem(toJSStr(E(_7a))),_9j=_9i,_9k=E(_79),_9l=jsCreateElem(toJSStr(_9k)),_9m=_9l,_9n=new T(function(){return B(_5I(_5t,fromJSStr(_9h)));}),_9o=B(A(_2s,[_67,[0,_9m],_8z,_9n,_])),_9p=_9o,_9q=jsCreateElem(toJSStr(_9k)),_9r=_9q,_9s=B(A(_2s,[_67,[0,_9r],_8z,new T(function(){var _9t=B(_2m(B(_5S(_75,_u,_91,_9n)),0));return B(_11(B(_2F(0,_9t,_u)),[1,_74,new T(function(){return B(_11(B(_2F(0,B(_2m(B(_93(_9n)),0))-_9t|0,_u)),_8y));})]));}),_])),_9u=_9s,_9v=jsAppendChild(_9m,_9j),_9w=jsAppendChild(_9r,_9j),_9x=jsAppendChild(_9j,E(_9c[1])[1]);return _2r;}),_9y=_9d;return new T(function(){return E(_9y)==0?false:true;});}:E(_73);}}},_]);});},_9z=function(_){return new F(function(){return _8Y(_);});};
var hasteMain = function() {B(A(_9z, [0]));};window.onload = hasteMain;
