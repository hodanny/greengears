/*!
 * g.Raphael 0.5 - Charting library, based on Raphaël
 *
 * Copyright (c) 2009 Dmitry Baranovskiy (http://g.raphaeljs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
(function(){var f=Math.min,a=Math.max;function e(o,m,h,p,j,k,l,i){var s,n={round:"round",sharp:"sharp",soft:"soft",square:"square"};if((j&&!p)||(!j&&!h)){return l?"":i.path()}k=n[k]||"square";p=Math.round(p);h=Math.round(h);o=Math.round(o);m=Math.round(m);switch(k){case"round":if(!j){var g=~~(p/2);if(h<g){g=h;s=["M",o+0.5,m+0.5-~~(p/2),"l",0,0,"a",g,~~(p/2),0,0,1,0,p,"l",0,0,"z"]}else{s=["M",o+0.5,m+0.5-g,"l",h-g,0,"a",g,g,0,1,1,0,p,"l",g-h,0,"z"]}}else{g=~~(h/2);if(p<g){g=p;s=["M",o-~~(h/2),m,"l",0,0,"a",~~(h/2),g,0,0,1,h,0,"l",0,0,"z"]}else{s=["M",o-g,m,"l",0,g-p,"a",g,g,0,1,1,h,0,"l",0,p-g,"z"]}}break;case"sharp":if(!j){var q=~~(p/2);s=["M",o,m+q,"l",0,-p,a(h-q,0),0,f(q,h),q,-f(q,h),q+(q*2<p),"z"]}else{q=~~(h/2);s=["M",o+q,m,"l",-h,0,0,-a(p-q,0),q,-f(q,p),q,f(q,p),q,"z"]}break;case"square":if(!j){s=["M",o,m+~~(p/2),"l",0,-p,h,0,0,p,"z"]}else{s=["M",o+~~(h/2),m,"l",1-h,0,0,-p,h-1,0,"z"]}break;case"soft":if(!j){g=f(h,Math.round(p/5));s=["M",o+0.5,m+0.5-~~(p/2),"l",h-g,0,"a",g,g,0,0,1,g,g,"l",0,p-g*2,"a",g,g,0,0,1,-g,g,"l",g-h,0,"z"]}else{g=f(Math.round(h/5),p);s=["M",o-~~(h/2),m,"l",0,g-p,"a",g,g,0,0,1,g,-g,"l",h-2*g,0,"a",g,g,0,0,1,g,g,"l",0,p-g,"z"]}}if(l){return s.join(",")}else{return i.path(s)}}function d(l,J,H,g,m,V,D){D=D||{};var z=this,W=D.type||"square",u=parseFloat(D.gutter||"20%"),T=l.set(),E=l.set(),n=l.set(),B=l.set(),F=Math.max.apply(Math,V),U=[],I=0,M=D.colors||z.colors,A=V.length;if(Raphael.is(V[0],"array")){F=[];I=A;A=0;for(var R=V.length;R--;){E.push(l.set());F.push(Math.max.apply(Math,V[R]));A=Math.max(A,V[R].length)}if(D.stacked){for(var R=A;R--;){var r=0;for(var Q=V.length;Q--;){r+=+V[Q][R]||0}U.push(r)}}for(var R=V.length;R--;){if(V[R].length<A){for(var Q=A;Q--;){V[R].push(0)}}}F=Math.max.apply(Math,D.stacked?U:F)}F=(D.to)||F;var K=g/(A*(100+u)+u)*100,k=K*u/100,p=D.vgutter==null?20:D.vgutter,C=[],q=J+k,o=(m-2*p)/F;if(!D.stretch){k=Math.round(k);K=Math.floor(K)}!D.stacked&&(K/=I||1);for(var R=0;R<A;R++){C=[];for(var Q=0;Q<(I||1);Q++){var S=Math.round((I?V[Q][R]:V[R])*o),t=H+m-p-S,O=e(Math.round(q+K/2),t+S,K,S,true,W,null,l).attr({stroke:"none",fill:M[I?Q:R]});if(I){E[Q].push(O)}else{E.push(O)}O.y=t;O.x=Math.round(q+K/2);O.w=K;O.h=S;O.value=I?V[Q][R]:V[R];if(!D.stacked){q+=K}else{C.push(O)}}if(D.stacked){var P;B.push(P=l.rect(C[0].x-C[0].w/2,H,K,m).attr(z.shim));P.bars=l.set();var v=0;for(var L=C.length;L--;){C[L].toFront()}for(var L=0,w=C.length;L<w;L++){var O=C[L],G,S=(v+O.value)*o,N=e(O.x,H+m-p-!!v*0.5,K,S,true,W,1,l);P.bars.push(O);v&&O.attr({path:N});O.h=S;O.y=H+m-p-!!v*0.5-S;n.push(G=l.rect(O.x-O.w/2,O.y,K,O.value*o).attr(z.shim));G.bar=O;G.value=O.value;v+=O.value}q+=K}q+=k}B.toFront();q=J+k;if(!D.stacked){for(var R=0;R<A;R++){for(var Q=0;Q<(I||1);Q++){var G;n.push(G=l.rect(Math.round(q),H+p,K,m-p).attr(z.shim));G.bar=I?E[Q][R]:E[R];G.value=G.bar.value;q+=K}q+=k}}T.label=function(y,Z){y=y||[];this.labels=l.set();var aa,h=-Infinity;if(D.stacked){for(var x=0;x<A;x++){var X=0;for(var s=0;s<(I||1);s++){X+=I?V[s][x]:V[x];if(s==I-1){var ab=l.labelise(y[x],X,F);aa=l.text(E[x*(I||1)+s].x,H+m-p/2,ab).attr(txtattr).insertBefore(n[x*(I||1)+s]);var Y=aa.getBBox();if(Y.x-7<h){aa.remove()}else{this.labels.push(aa);h=Y.x+Y.width}}}}}else{for(var x=0;x<A;x++){for(var s=0;s<(I||1);s++){var ab=l.labelise(I?y[s]&&y[s][x]:y[x],I?V[s][x]:V[x],F);aa=l.text(E[x*(I||1)+s].x,Z?H+m-p/2:E[x*(I||1)+s].y-10,ab).attr(txtattr).insertBefore(n[x*(I||1)+s]);var Y=aa.getBBox();if(Y.x-7<h){aa.remove()}else{this.labels.push(aa);h=Y.x+Y.width}}}}return this};T.hover=function(i,h){B.hide();n.show();n.mouseover(i).mouseout(h);return this};T.hoverColumn=function(i,h){n.hide();B.show();h=h||function(){};B.mouseover(i).mouseout(h);return this};T.click=function(h){B.hide();n.show();n.click(h);return this};T.each=function(j){if(!Raphael.is(j,"function")){return this}for(var h=n.length;h--;){j.call(n[h])}return this};T.eachColumn=function(j){if(!Raphael.is(j,"function")){return this}for(var h=B.length;h--;){j.call(B[h])}return this};T.clickColumn=function(h){n.hide();B.show();B.click(h);return this};T.push(E,n,B);T.bars=E;T.covers=n;return T}function b(w,v,u,I,F,l,B){B=B||{};var h=this,n=B.type||"square",o=parseFloat(B.gutter||"20%"),D=w.set(),H=w.set(),q=w.set(),L=w.set(),T=Math.max.apply(Math,l),g=[],J=0,t=B.colors||h.colors,O=l.length;if(Raphael.is(l[0],"array")){T=[];J=O;O=0;for(var N=l.length;N--;){H.push(w.set());T.push(Math.max.apply(Math,l[N]));O=Math.max(O,l[N].length)}if(B.stacked){for(var N=O;N--;){var z=0;for(var M=l.length;M--;){z+=+l[M][N]||0}g.push(z)}}for(var N=l.length;N--;){if(l[N].length<O){for(var M=O;M--;){l[N].push(0)}}}T=Math.max.apply(Math,B.stacked?g:T)}T=(B.to)||T;var Q=Math.floor(F/(O*(100+o)+o)*100),r=Math.floor(Q*o/100),p=[],k=u+r,m=(I-1)/T;!B.stacked&&(Q/=J||1);for(var N=0;N<O;N++){p=[];for(var M=0;M<(J||1);M++){var S=J?l[M][N]:l[N],P=e(v,k+Q/2,Math.round(S*m),Q-1,false,n,null,w).attr({stroke:"none",fill:t[J?M:N]});if(J){H[M].push(P)}else{H.push(P)}P.x=v+Math.round(S*m);P.y=k+Q/2;P.w=Math.round(S*m);P.h=Q;P.value=+S;if(!B.stacked){k+=Q}else{p.push(P)}}if(B.stacked){var A=w.rect(v,p[0].y-p[0].h/2,I,Q).attr(h.shim);L.push(A);A.bars=w.set();var E=0;for(var C=p.length;C--;){p[C].toFront()}for(var C=0,K=p.length;C<K;C++){var P=p[C],R,S=Math.round((E+P.value)*m),G=e(v,P.y,S,Q-1,false,n,1,w);A.bars.push(P);E&&P.attr({path:G});P.w=S;P.x=v+S;q.push(R=w.rect(v+E*m,P.y-P.h/2,P.value*m,Q).attr(h.shim));R.bar=P;E+=P.value}k+=Q}k+=r}L.toFront();k=u+r;if(!B.stacked){for(var N=0;N<O;N++){for(var M=0;M<(J||1);M++){var R=w.rect(v,k,I,Q).attr(h.shim);q.push(R);R.bar=J?H[M][N]:H[N];R.value=R.bar.value;k+=Q}k+=r}}D.label=function(Z,W){Z=Z||[];this.labels=w.set();for(var V=0;V<O;V++){for(var U=0;U<J;U++){var y=w.labelise(J?Z[U]&&Z[U][V]:Z[V],J?l[U][V]:l[V],T),Y=W?H[V*(J||1)+U].x-Q/2+3:v+5,x=W?"end":"start",s;this.labels.push(s=w.text(Y,H[V*(J||1)+U].y,y).attr(txtattr).attr({"text-anchor":x}).insertBefore(q[0]));if(s.getBBox().x<v+5){s.attr({x:v+5,"text-anchor":"start"})}else{H[V*(J||1)+U].label=s}}}return this};D.hover=function(j,i){L.hide();q.show();i=i||function(){};q.mouseover(j).mouseout(i);return this};D.hoverColumn=function(j,i){q.hide();L.show();i=i||function(){};L.mouseover(j).mouseout(i);return this};D.each=function(s){if(!Raphael.is(s,"function")){return this}for(var j=q.length;j--;){s.call(q[j])}return this};D.eachColumn=function(s){if(!Raphael.is(s,"function")){return this}for(var j=L.length;j--;){s.call(L[j])}return this};D.click=function(i){L.hide();q.show();q.click(i);return this};D.clickColumn=function(i){q.hide();L.show();L.click(i);return this};D.push(H,q,L);D.bars=H;D.covers=q;return D}var c=function(){};c.prototype=Raphael.g;b.prototype=d.prototype=new c;Raphael.fn.hbarchart=function(h,l,j,g,i,k){return new b(this,h,l,j,g,i,k)};Raphael.fn.barchart=function(h,l,j,g,i,k){return new d(this,h,l,j,g,i,k)}})();