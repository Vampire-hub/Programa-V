ycH="hidden";
ycV="visible";
ycBU='http://a372.g.a.yimg.com/f/372/27/1d/pic.geocities.com/images/dhtmlad/';
ycMM1='<tr><td valign=middle bgcolor="#dcdcdc"><a href="';
ycMM2='" target=_new><img alt="alt" src="'+ycBU;
ycMM3='" width=14 height=14 border=0 hspace=4><font face="arial" size="1" color="#0000FF">';
ycMM4='</font></a></td></tr>';
ycRF=';return false"';
ycWSC=' onMouseOut="window.status=\'\';return true"';
ycWS1=ycRF+' onMouseOver="window.status=\'Minimizar\';return true"'+ycWSC;
ycWS2=ycRF+' onMouseOver="window.status=\'Expandir\';return true"'+ycWSC;
ycOCH='href="" onClick="javascript: yfnOC(';
ycL0='<layer pageY=0 pageX=0 visibility=hidden name=';
ycL1='<table border=2 cellpadding=0 cellspacing=0><tr><td valign=top bgcolor=#ffffff><table border=0 cellpadding=0 cellspacing=0 width=138><tr><td valign=top><img usemap=#';
ycL2=' id=bottomImage alt="nav" src="'+ycBU;
ycL3='" width=138 height=17 border=0></td></tr><tr><td align=center valign=top';
ycL4='<font face=Arial size=-2 color=Blue>';
var yvB;
var yvM;
var yvT;
var yvH;
var yvS=0;
var yvTO=15;
var yvSID;
var yvBF=0;
var yvSM=0;
var yvSMU;
var yvVP=0;
var yvVPU;
var yvSE=0;
var yvSEU;
var yvnR="es";
var yvnGC=0;
var yvnGCM;
var yvnMN="";
var yvnTI=0;
var yvnGA=0;
var yvnGAW;
function yfnPA(){
document.yl0.pageX=window.innerWidth-160;
document.yl1.pageX=window.innerWidth-160;
document.yl2.pageX=window.innerWidth-160;
}
function yfnWM(){
document.write('</font></a></td></tr></table></td></tr>');
if (yvSM){
document.write(ycMM1+yvSMU+ycMM2+'msg.gif'+ycMM3+'Env\xedeme un mensaje'+ycMM4);
}
if (yvVP){
document.write(ycMM1+yvVPU+ycMM2+'profile.gif'+ycMM3+'Ver mi perfil'+ycMM4);
}
if (yvnGC){
document.write(ycMM1+yvnGCM+ycMM2+'gc.gif'+ycMM3+'Mensaje para '+yvnMN+ycMM4);
}
document.write('</table></layer>');
}
function yfnD(){
ycMa='<area shape=rect coords="2,2,84,14" href=http://'+yvnR+'.geocities.yahoo.com/ target=_new><area shape=rect coords="';
ycM0=ycMa+'87,2,101,14" href="http://'+yvnR+'.geocities.yahoo.com/v/adsq.html" target=_new>';
ycM1=ycMa+'104,2,118,14" href="" onClick="javascript: yfnOC(2)'+ycWS2+'>';
ycM2=ycMa+'121,2,135,14" ';
document.write('<map name=ym0>'+ycM0+ycM1+ycM2+ycOCH+'-1)'+ycRF+' onMouseOver="window.status=\'Hide\';return true"'+ycWSC+'></map><map name=ym1>'+ycM0+ycM1+ycM2+ycOCH+'0)'+ycWS1+'></map><map name=ym2>'+ycM0+ycM2+ycOCH+'0)'+ycWS1+'></map>');
if (yvH){
document.write( ycL0+'yl0>'+ycL1+'ym0'+ycL2+'geoup.gif'+ycL3+' bgcolor="#ffffcc"><a href='+yvH+' target="_new">'+ycL4+yvT);
} else {
document.write( ycL0+'yl0>'+ycL1+'ym0'+ycL2+'geoup.gif'+ycL3+' bgcolor="#ffffcc"><a '+ycOCH+'2)'+ycWS2+'>'+ycL4+yvT);
}
yfnWM();
if (yvS==0) {
document.write( ycL0+'yl1>'+ycL1+'ym1'+ycL2+'geomid.gif'+ycL3+'><a '+ycOCH+'2)'+ycWS2+'>'+yvM+'</a></td></tr><tr><td align=center><a '+ycOCH+'2)'+ycWS2+'>'+ycL4+'M\xe1s...');
} else {
document.write( ycL0+'yl1>'+ycL1+'ym2'+ycL2+'geodown.gif'+ycL3+'>'+yvM+'</td></tr><tr><td align=center><a '+ycOCH+'0)'+ycWS1+'>'+ycL4+'[Cerrar]');
}
yfnWM();
document.write( ycL0+'yl2>'+ycL1+'ym2'+ycL2+'geodown.gif'+ycL3+'>'+yvB+'</td></tr><tr><td align=center><a '+ycOCH+'0)'+ycWS1+'>'+ycL4+'[Cerrar]');
yfnWM();
}
function yfnOC(d){
yfnPA();
if (yvnTI!=0){
clearTimeout(yvnTI);
}
if (d==-1){
document.yl0.visibility=ycH;
document.yl1.visibility=ycH;
document.yl2.visibility=ycH;
}
if (d==0){
document.yl0.visibility=ycV;
document.yl1.visibility=ycH;
document.yl2.visibility=ycH;
}
if (d==1){
document.yl0.visibility=ycH;
document.yl1.visibility=ycV;
document.yl2.visibility=ycH;
}
if (d==2){
document.yl0.visibility=ycH;
document.yl1.visibility=ycH;
document.yl2.visibility=ycV;
}
}
function yfnSA(){
document.yl1.visibility=ycV;
yvnTI=setTimeout("yfnOC(0)",yvTO*1000);
}
function yfnCA(w){
var t=0;
if(!w){
w=self;
}
if(navigator.appName=="Netscape"){
if(w.innerWidth){
t=w.innerWidth*w.innerHeight;
} else {
t=10;
}
} else {
if(w.document.body){
t=w.document.body.clientWidth*w.document.body.clientHeight;
} else {
t=document.body.clientWidth*document.body.clientHeight;
}
}
if(t>=yvnGA){
yvnGA=t;
yvnGAW=w;
}
}
function yfnFF(w){
var i=0;
for(i=0;i<w.frames.length;i++){
if(w.frames[i].frames.length>0){
yfnFF(w.frames[i]);
} else {
yfnCA(w.frames[i]);
}
}
return;
}
function yfnSH(){
var r=0;
if (window!=window.top){
yfnFF(window.top);
if (yvnGAW==self){
r=1;
}
} else {
if (!top.frames||top.frames.length==0){
r=1;
}
}
return r;
}
function yfnG(){
document.write('<script language="JavaScript" src="'+yvnContents+'"></script>');
}
function yfnB(yvAd){
if (yvBF == 1){
 yvBF=0;
 document.write('<IMG src="http://'+yvnR+'.geocities.yahoo.com/pixel.gif?'+yvAd+'&'+Math.random()+'">');
 }
}
function yfnEA(g){
if(navigator.appName != "Netscape"){
 return 0;
}
if (g == 1) {
yfnB("g");
top.gg=g;
}
if ((yfnSH()==1)&&(!top.gg||top.gg!=1)){
yfnG();
yfnD();
yfnPA();
window.onresize=yfnPA;
yfnSA();
yfnB("a");
} else {
if (!top.gg||top.gg!=1){
yfnB("f");
} else {
yfnB("n");
}
}
}
