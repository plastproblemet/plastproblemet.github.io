if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
textbutton177.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 60 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(30 20)\" style=\"\">\n	<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1252_799_806\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_cancel_177_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1252_799_806&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 49.99999999999998px; top: 555px; width: 60px; height: 40px; z-index: 19; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj177",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Avbryt",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkCancTestSurv',actItem:function(){ cancelTest();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkResetTestSurv',actItem:function(){ ResetTest_test148(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,36960,0,[49.99999999999998,555,60,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":50,"y":75,"width":60,"height":40},"imgDataNormal":"images/desktop_shape177.png","imgDataOver":"images/desktop_shape177_over.png","imgDataDown":"images/desktop_shape177_down.png","imgDataDisabled":"images/desktop_shape177_disabled.png","svgDataNormal":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1252_799_806\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_cancel_177_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1252_799_806&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1252_799_808\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_cancel_177_over.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_over.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1252_799_808&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1252_799_810\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_cancel_177_clicked.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_clicked.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1252_799_810&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1252_799_812\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_cancel_177_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1252_799_812&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Avbryt","titleValue":"Avbryt","fallbackImg":"<img alt=\"Avbryt\" title=\"Avbryt\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text1776.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; border: 1px solid rgb(0, 0, 0); width: 602px; height: 299px; background-color: rgb(19, 79, 92);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 594px; height: 291px;\"><p style=\"text-align:left\"><span style=\"font-family:\'Arial Black\',sans-serif;font-size:12pt;color:0\">​​​​​​​​<span data-cke-bookmark=\"1\" style=\"\">&nbsp;</span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 36px; top: 159px; width: 604px; height: 301px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj1776",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tekst"
	},
	objData:	{"a":[0,32,0,[36,159,604,301]],"rcdOvr":{"res":0},"borderEffect":{"outline":1,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":36,"y":159,"width":604,"height":301},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text1764.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 525px; min-height: 79px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 515px; min-height: 69px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:48pt; color: rgb(255, 255, 255); font-family: Impact, sans-serif;\">SPØRSMÅL 6</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 33px; top: 52px; width: 525px; height: 79px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj1764",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tittel"
	},
	objData:	{"a":[0,32,0,[33,52,525,79]],"rcdOvr":{"res":0},"textShadowEffect":{"opacity":"0.9","depth":8,"color":"#073763","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":33,"y":52,"width":525,"height":79},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
qu1780.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu1780",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	14,
				"dwQuestFlags":	7,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0050\\u006C\\u0061\\u0073\\u0074\\u0073\\u0075\\u0067\\u0065\\u0072\\u0026\\u006F\\u0073\\u006C\\u0061\\u0073\\u0068\\u003B\\u0072\\u002C\\u0051\\u002D\\u0074\\u0069\\u0070\\u0073\\u0020\\u0061\\u0076\\u0020\\u0070\\u006C\\u0061\\u0073\\u0074\\u002C\\u0050\\u006C\\u0061\\u0073\\u0074\\u0062\\u0065\\u0073\\u0074\\u0069\\u006B\\u006B\\u002C\\u0050\\u006C\\u0061\\u0073\\u0074\\u0074\\u0061\\u006C\\u006C\\u0065\\u0072\\u006B\\u0065\\u0072"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	Varspm6
	},
	objData:	{"a":[0,32,0,[]]}
};
text1781.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 597px; min-height: 20px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 597px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Kva for nokre av desse plastproduktene ønskjer Noreg og EU å forby innan 2021?</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 49px; top: 176px; width: 597px; height: 20px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj1781",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[49,176,597,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":49,"y":176,"width":597,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text1782.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 106px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 106px; min-height: 20px;\"><label for=\"rad1783\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Plastsugerør</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 78px; top: 206px; width: 106px; height: 20px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj1782",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[78,206,106,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":206,"width":106,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1783.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1783\" name=\"rad1783\" value=\"Plastsuger&amp;oslash;r\" onclick=\"qu1780.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 49px; top: 206px; width: 19px; height: 19px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj1783",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[49,206,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":49,"y":206,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1784.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 116px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 116px; min-height: 20px;\"><label for=\"rad1785\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Plastballonger</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 78px; top: 236px; width: 116px; height: 20px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj1784",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,32,0,[78,236,116,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":236,"width":116,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1785.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1785\" name=\"rad1785\" value=\"Plastballonger\" onclick=\"qu1780.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 49px; top: 236px; width: 19px; height: 19px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj1785",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 2 button"
	},
	objData:	{"a":[0,32,0,[49,236,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":49,"y":236,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1786.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 117px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 117px; min-height: 20px;\"><label for=\"rad1787\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Q-tips av plast</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 78px; top: 266px; width: 117px; height: 20px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj1786",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 3 text"
	},
	objData:	{"a":[0,32,0,[78,266,117,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":266,"width":117,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1787.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1787\" name=\"rad1787\" value=\"Q-tips av plast\" onclick=\"qu1780.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 49px; top: 266px; width: 19px; height: 19px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj1787",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 3 button"
	},
	objData:	{"a":[0,32,0,[49,266,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":49,"y":266,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1788.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 132px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 132px; min-height: 20px;\"><label for=\"rad1789\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Plastbestikk</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 78px; top: 296px; width: 132px; height: 20px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj1788",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 4 text"
	},
	objData:	{"a":[0,32,0,[78,296,132,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":296,"width":132,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1789.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1789\" name=\"rad1789\" value=\"Plastbestikk\" onclick=\"qu1780.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 49px; top: 296px; width: 19px; height: 19px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj1789",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 4 button"
	},
	objData:	{"a":[0,32,0,[49,296,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":49,"y":296,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1790.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 20px;\"><label for=\"rad1791\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Plasttallerker</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 78px; top: 326px; width: 107px; height: 20px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj1790",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 5 text"
	},
	objData:	{"a":[0,32,0,[78,326,107,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":326,"width":107,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1791.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1791\" name=\"rad1791\" value=\"Plasttallerker\" onclick=\"qu1780.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 49px; top: 326px; width: 19px; height: 19px; z-index: 12;",
	cssClasses:	"",
	htmlId:		"tobj1791",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 5 button"
	},
	objData:	{"a":[0,32,0,[49,326,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":49,"y":326,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1792.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 88px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 88px; min-height: 20px;\"><label for=\"rad1793\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Plastglass</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 78px; top: 356px; width: 88px; height: 20px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj1792",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 6 text"
	},
	objData:	{"a":[0,32,0,[78,356,88,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":356,"width":88,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1793.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1793\" name=\"rad1793\" value=\"Plastglass\" onclick=\"qu1780.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 49px; top: 356px; width: 19px; height: 19px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj1793",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 6 button"
	},
	objData:	{"a":[0,32,0,[49,356,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":49,"y":356,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1794.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 106px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 106px; min-height: 20px;\"><label for=\"rad1795\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Plastleiketøy</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 78px; top: 386px; width: 106px; height: 20px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj1794",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 7 text"
	},
	objData:	{"a":[0,32,0,[78,386,106,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":386,"width":106,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1795.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1795\" name=\"rad1795\" value=\"Plastleiket&amp;oslash;y\" onclick=\"qu1780.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 49px; top: 386px; width: 19px; height: 19px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj1795",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 7 button"
	},
	objData:	{"a":[0,32,0,[49,386,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":49,"y":386,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1796.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 91px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 91px; min-height: 20px;\"><label for=\"rad1797\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Plastposer</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 78px; top: 416px; width: 91px; height: 20px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj1796",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 8 text"
	},
	objData:	{"a":[0,32,0,[78,416,91,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":416,"width":91,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1797.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1797\" name=\"rad1797\" value=\"Plastposer\" onclick=\"qu1780.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 49px; top: 416px; width: 19px; height: 19px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj1797",
	bInsAnc:	0,
	fieldsetId:	'fset1780',
	cwObj:		{
		"name":	"Choice 8 button"
	},
	objData:	{"a":[0,32,0,[49,416,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":49,"y":416,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
textbutton1273.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 60 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(30 20)\" style=\"\">\n	<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1252_822\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_ok_180_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_ok_180_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1252_822&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 920px; top: 555px; width: 60px; height: 40px; z-index: 20; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1273",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Ferdig",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page1738.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,39008,0,[920,555,60,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":110,"y":75,"width":60,"height":40},"imgDataNormal":"images/desktop_shape1273.png","imgDataOver":"images/desktop_shape1273_over.png","imgDataDown":"images/desktop_shape1273_down.png","imgDataDisabled":"images/desktop_shape1273_disabled.png","svgDataNormal":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1252_822\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_ok_180_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_ok_180_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1252_822&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1252_824\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_ok_180_over.gif\" preserveAspectRatio=\"none\" href=\"images/black1_ok_180_over.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1252_824&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1252_826\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_ok_180_clicked.gif\" preserveAspectRatio=\"none\" href=\"images/black1_ok_180_clicked.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1252_826&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1252_828\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_ok_180_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_ok_180_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1252_828&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Ferdig","titleValue":"Ferdig","fallbackImg":"<img alt=\"Ferdig\" title=\"Ferdig\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":"#000000","bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	16
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/black1_cancel_177_normal.gif","images/black1_cancel_177_over.gif","images/black1_cancel_177_clicked.gif","images/black1_ok_180_normal.gif","images/black1_ok_180_over.gif","images/black1_ok_180_clicked.gif","images/plastic_ocean.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1030px; height: 630px; overflow: hidden; background-image: url("images/plastic_ocean.jpg"); background-size: auto; visibility: hidden;'
rcdObj.backgrd_Desktop = ["#006666","url(images/plastic_ocean.jpg)",1200,630,1];
