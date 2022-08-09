/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{

	Img1={max:1,pos:0};
	Img1[0]=new Image();Img1[0].src='images/vampirex002001.gif';
	Img1[1]=new Image();Img1[1].src='images/vampirex002002.gif';
	Img4={max:1,pos:0};
	Img4[0]=new Image();Img4[0].src='images/vampirex002001.gif';
	Img4[1]=new Image();Img4[1].src='images/vampirex002002.gif';
	Img5={max:1,pos:0};
	Img5[0]=new Image();Img5[0].src='images/vampirex002001.gif';
	Img5[1]=new Image();Img5[1].src='images/vampirex002002.gif';
	Img6={max:1,pos:0};
	Img6[0]=new Image();Img6[0].src='images/vampirex002001.gif';
	Img6[1]=new Image();Img6[1].src='images/vampirex002002.gif';	IDP.bw=0; IDP.bd=0;
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
	IDP[3]=(V5)?'document.getElementById(\'m4\').src':(IE)?'m4.src':'document.e4.document.m4.src';
	IDP[4]=(V5)?'document.getElementById(\'m5\').src':(IE)?'m5.src':'document.e5.document.m5.src';
	IDP[5]=(V5)?'document.getElementById(\'m6\').src':(IE)?'m6.src':'document.e6.document.m6.src';
	IDP[6]={	x:new Array(357,357),
				y:new Array(IDP.bd,331),
				s:5 };
	IDP[7]=(V5)?document.getElementById('e22').style:(IE)?e22.style:document.e22;
	IDP[8]={	x:new Array(2,2),
				y:new Array(-118,0),
				s:5 };
	IDP[9]=(V5)?document.getElementById('e21').style:(IE)?e21.style:document.e21;
	IDP[10]={	x:new Array(2,2),
				y:new Array(IDP.bd,331),
				s:5 };
	IDP[11]=(V5)?document.getElementById('e20').style:(IE)?e20.style:document.e20;
	IDP[12]={	x:new Array(357,357),
				y:new Array(-118,0),
				s:5 };
	IDP[13]=(V5)?document.getElementById('e19').style:(IE)?e19.style:document.e19;
	IDP[14]={	x:new Array(90,90),
				y:new Array(-118,0),
				s:5 };
	IDP[15]=(V5)?document.getElementById('e18').style:(IE)?e18.style:document.e18;
	IDP[16]={	x:new Array(178,178),
				y:new Array(-118,0),
				s:5 };
	IDP[17]=(V5)?document.getElementById('e17').style:(IE)?e17.style:document.e17;
	IDP[18]={	x:new Array(267,267),
				y:new Array(-118,0),
				s:5 };
	IDP[19]=(V5)?document.getElementById('e16').style:(IE)?e16.style:document.e16;
	IDP[20]={	x:new Array(0,262),
				y:new Array(86,84),
				s:13 };
	IDP[21]=(V5)?document.getElementById('e15').style:(IE)?e15.style:document.e15;
	IDP[22]={	x:new Array(91,91),
				y:new Array(IDP.bd,331),
				s:5 };
	IDP[23]=(V5)?document.getElementById('e14').style:(IE)?e14.style:document.e14;
	IDP[24]={	x:new Array(180,180),
				y:new Array(IDP.bd,331),
				s:5 };
	IDP[25]=(V5)?document.getElementById('e13').style:(IE)?e13.style:document.e13;
	IDP[26]={	x:new Array(268,268),
				y:new Array(IDP.bd,331),
				s:5 };
	IDP[27]=(V5)?document.getElementById('e12').style:(IE)?e12.style:document.e12;
	IDP[28]={	x:new Array(452,58),
				y:new Array(331,330),
				s:19 };
	IDP[29]=(V5)?document.getElementById('e11').style:(IE)?e11.style:document.e11;
	isOvr=1;
	window.setTimeout('DoRoute(7,6,0,0,0,100)',0);
	window.setTimeout('DoRoute(9,8,0,0,0,100)',0);
	window.setTimeout('DoRoute(11,10,0,0,0,100)',2000);
	window.setTimeout('DoRoute(13,12,0,0,0,100)',2000);
	window.setTimeout('DoRoute(15,14,0,0,0,100)',500);
	window.setTimeout('DoRoute(17,16,0,0,0,100)',1000);
	window.setTimeout('DoRoute(19,18,0,0,0,100)',1500);
	window.setTimeout('DoRoute(21,20,0,0,0,100)',2000);
	window.setTimeout('DoRoute(23,22,0,0,0,100)',1500);
	window.setTimeout('DoRoute(25,24,0,0,0,100)',1000);
	window.setTimeout('DoRoute(27,26,0,0,0,100)',500);
	window.setTimeout('DoRoute(29,28,0,0,0,100)',2000);
}


/*--- EndOfFile ---*/
