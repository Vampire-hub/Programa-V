/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{

	Img1={max:1,pos:0};
	Img1[0]=new Image();Img1[0].src='images/vampirex002001.gif';
	Img1[1]=new Image();Img1[1].src='images/vampirex002002.gif';
	Img17={max:1,pos:0};
	Img17[0]=new Image();Img17[0].src='images/vampirex002001.gif';
	Img17[1]=new Image();Img17[1].src='images/vampirex002002.gif';
	Img18={max:1,pos:0};
	Img18[0]=new Image();Img18[0].src='images/vampirex002001.gif';
	Img18[1]=new Image();Img18[1].src='images/vampirex002002.gif';
	Img19={max:1,pos:0};
	Img19[0]=new Image();Img19[0].src='images/vampirex002001.gif';
	Img19[1]=new Image();Img19[1].src='images/vampirex002002.gif';	IDP.bw=0; IDP.bd=0;
	if(self.innerHeight)
	{	IDP.bw=self.innerWidth;
		IDP.bd=self.innerHeight;
	}
	else if(document.documentElement && document.documentElement.clientHeight)
	{	IDP.bw=document.documentElement.clientWidth;
		IDP.bd=document.documentElement.clientHeight;
	}
	else if(document.body)
	{	IDP.bw=document.body.clientWidth;
		IDP.bd=document.body.clientHeight;
	}
	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'m1\').src':(IE)?'m1.src':'document.e1.document.m1.src';
	IDP[2]=(V5)?'document.getElementById(\'a2\').style.color':(IE)?'a2.style.color':'document.e2.document.linkColor';
	IDP[3]=(V5)?'document.getElementById(\'m17\').src':(IE)?'m17.src':'document.e17.document.m17.src';
	IDP[4]=(V5)?'document.getElementById(\'m18\').src':(IE)?'m18.src':'document.e18.document.m18.src';
	IDP[5]=(V5)?'document.getElementById(\'m19\').src':(IE)?'m19.src':'document.e19.document.m19.src';
	IDP[6]=(V5)?'document.getElementById(\'e15\').style.visibility':(IE)?'e15.style.visibility':'document.e15.visibility';
	IDP[7]=(V5)?'document.getElementById(\'e14\').style.visibility':(IE)?'e14.style.visibility':'document.e14.visibility';
	IDP[8]=(V5)?'document.getElementById(\'e13\').style.visibility':(IE)?'e13.style.visibility':'document.e13.visibility';
	IDP[9]=(V5)?'document.getElementById(\'e12\').style.visibility':(IE)?'e12.style.visibility':'document.e12.visibility';
	IDP[10]=(V5)?'document.getElementById(\'e10\').style.visibility':(IE)?'e10.style.visibility':'document.e10.visibility';
	IDP[11]=(V5)?'document.getElementById(\'e9\').style.visibility':(IE)?'e9.style.visibility':'document.e9.visibility';
	IDP[12]=(V5)?'document.getElementById(\'e8\').style.visibility':(IE)?'e8.style.visibility':'document.e8.visibility';
	IDP[13]=(V5)?'document.getElementById(\'e7\').style.visibility':(IE)?'e7.style.visibility':'document.e7.visibility';
	IDP[14]=(V5)?'document.getElementById(\'e6\').style.visibility':(IE)?'e6.style.visibility':'document.e6.visibility';
	IDP[15]={	x:new Array(447,43),
				y:new Array(323,323),
				s:40 };
	IDP[16]=(V5)?document.getElementById('e5').style:(IE)?e5.style:document.e5;
	IDP[17]=(V5)?'document.getElementById(\'e4\').style.visibility':(IE)?'e4.style.visibility':'document.e4.visibility';
	IDP[18]={	x:new Array(0,310),
				y:new Array(90,90),
				s:31 };
	IDP[19]=(V5)?document.getElementById('e3').style:(IE)?e3.style:document.e3;
	isOvr=1;
	if(IE) e15.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[6]+"='visible'",2000);else document.e15.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e15.filters.alpha.opacity",5,100,5,0,100,-1,-1,-1)',2000);
	if(IE) e14.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[7]+"='visible'",1000);else document.e14.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e14.filters.alpha.opacity",5,100,5,0,100,-1,-1,-1)',1000);
	if(IE) e13.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[8]+"='visible'",500);else document.e13.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e13.filters.alpha.opacity",5,100,5,0,100,-1,-1,-1)',500);
	if(IE) e12.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[9]+"='visible'",0);else document.e12.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e12.filters.alpha.opacity",5,100,5,0,100,-1,-1,-1)',0);
	if(IE) e10.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[10]+"='visible'",500);else document.e10.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e10.filters.alpha.opacity",10,100,10,0,100,-1,-1,-1)',500);
	if(IE) e9.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[11]+"='visible'",0);else document.e9.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e9.filters.alpha.opacity",10,100,10,0,100,-1,-1,-1)',0);
	if(IE) e8.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[12]+"='visible'",1000);else document.e8.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e8.filters.alpha.opacity",5,100,5,0,100,-1,-1,-1)',1000);
	if(IE) e7.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[13]+"='visible'",2000);else document.e7.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e7.filters.alpha.opacity",5,100,5,0,100,-1,-1,-1)',2000);
	if(IE) e6.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[14]+"='visible'",1500);else document.e6.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e6.filters.alpha.opacity",5,100,5,0,100,-1,-1,-1)',1500);
	window.setTimeout('DoRoute(16,15,0,0,0,100)',0);
	if(IE) e4.style.filter='alpha(opacity=0)';
	if(IE||V5) window.setTimeout(IDP[17]+"='visible'",1500);else document.e4.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e4.filters.alpha.opacity",5,100,5,0,100,-1,-1,-1)',1500);
	window.setTimeout('DoRoute(19,18,0,0,0,100)',0);
}


/*--- EndOfFile ---*/
