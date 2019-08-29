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
	innerHtml:	"<svg viewBox=\"0 0 60 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(30 20)\" style=\"\">\n	<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1033_799_806\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_cancel_177_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1033_799_806&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 49.999999999999986px; top: 555px; width: 60px; height: 40px; z-index: 23; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,36960,0,[49.999999999999986,555,60,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":50,"y":75,"width":60,"height":40},"imgDataNormal":"images/desktop_shape177.png","imgDataOver":"images/desktop_shape177_over.png","imgDataDown":"images/desktop_shape177_down.png","imgDataDisabled":"images/desktop_shape177_disabled.png","svgDataNormal":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1033_799_806\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_cancel_177_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1033_799_806&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1033_799_808\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_cancel_177_over.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_over.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1033_799_808&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1033_799_810\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_cancel_177_clicked.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_clicked.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1033_799_810&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1033_799_812\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_cancel_177_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1033_799_812&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Avbryt","titleValue":"Avbryt","fallbackImg":"<img alt=\"Avbryt\" title=\"Avbryt\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton179.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 60 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(30 20)\" style=\"\">\n	<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1033_799_814\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_next_179_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1033_799_814&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 920px; top: 555px; width: 60px; height: 40px; z-index: 24; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj179",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Neste",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page1081.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,39008,0,[920,555,60,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":110,"y":75,"width":60,"height":40},"imgDataNormal":"images/desktop_shape179.png","imgDataOver":"images/desktop_shape179_over.png","imgDataDown":"images/desktop_shape179_down.png","imgDataDisabled":"images/desktop_shape179_disabled.png","svgDataNormal":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1033_799_814\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_next_179_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1033_799_814&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1033_799_816\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_next_179_over.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_over.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1033_799_816&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1033_799_818\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_next_179_clicked.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_clicked.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1033_799_818&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(30 20)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1033_799_820\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"40\" xlink:href=\"images/black1_next_179_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1033_799_820&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Neste","titleValue":"Neste","fallbackImg":"<img alt=\"Neste\" title=\"Neste\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text1034.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; border: 1px solid rgb(0, 0, 0); width: 573px; height: 358px; background-color: rgb(19, 79, 92);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 565px; height: 350px;\"><p style=\"text-align:left\"><span style=\"font-family:\'Arial Black\',sans-serif;font-size:12pt;color:0\">​​​​​​​​<span data-cke-bookmark=\"1\" style=\"\">&nbsp;</span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 36px; top: 159px; width: 575px; height: 360px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj1034",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tekst"
	},
	objData:	{"a":[0,32,0,[36,159,575,360]],"rcdOvr":{"res":0},"borderEffect":{"outline":1,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":36,"y":159,"width":575,"height":360},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text1047.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 525px; min-height: 79px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 515px; min-height: 69px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:48pt; color: rgb(255, 255, 255); font-family: Impact, sans-serif;\">SPØRSMÅL 4</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 33px; top: 52px; width: 525px; height: 79px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj1047",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tittel"
	},
	objData:	{"a":[0,32,0,[33,52,525,79]],"rcdOvr":{"res":0},"textShadowEffect":{"opacity":"0.9","depth":8,"color":"#073763","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":33,"y":52,"width":525,"height":79},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
qu1052.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu1052",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	14,
				"dwQuestFlags":	7,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0042\\u006F\\u006D\\u0075\\u006C\\u006C\\u002C\\u004C\\u0069\\u006E\\u002C\\u0055\\u006C\\u006C\\u002C\\u0053\\u0069\\u006C\\u006B\\u0065"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	Varspm4
	},
	objData:	{"a":[0,32,0,[]]}
};
text1057.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 565px; min-height: 20px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 565px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Kva for nokre av desse tekstilfibrene bidrar IKKJE til spredning av mikroplast?</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 47px; top: 174px; width: 565px; height: 20px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj1057",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[47,174,565,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":47,"y":174,"width":565,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text1058.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 64px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 64px; min-height: 20px;\"><label for=\"rad1059\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Bomull</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 204px; width: 64px; height: 20px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj1058",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[76,204,64,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":76,"y":204,"width":64,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1059.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1059\" name=\"rad1059\" value=\"Bomull\" onclick=\"qu1052.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 47px; top: 204px; width: 19px; height: 19px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj1059",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[47,204,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":47,"y":204,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1060.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 56px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 56px; min-height: 20px;\"><label for=\"rad1061\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Nylon</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 234px; width: 56px; height: 20px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj1060",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,32,0,[76,234,56,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":76,"y":234,"width":56,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1061.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1061\" name=\"rad1061\" value=\"Nylon\" onclick=\"qu1052.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 47px; top: 234px; width: 19px; height: 19px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj1061",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 2 button"
	},
	objData:	{"a":[0,32,0,[47,234,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":47,"y":234,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1062.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 82px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 82px; min-height: 20px;\"><label for=\"rad1063\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Polyester</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 264px; width: 82px; height: 20px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj1062",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 3 text"
	},
	objData:	{"a":[0,32,0,[76,264,82,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":76,"y":264,"width":82,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1063.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1063\" name=\"rad1063\" value=\"Polyester\" onclick=\"qu1052.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 47px; top: 264px; width: 19px; height: 19px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj1063",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 3 button"
	},
	objData:	{"a":[0,32,0,[47,264,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":47,"y":264,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1064.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 36px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 36px; min-height: 20px;\"><label for=\"rad1065\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Lin</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 294px; width: 36px; height: 20px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj1064",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 4 text"
	},
	objData:	{"a":[0,32,0,[76,294,36,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":76,"y":294,"width":36,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1065.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1065\" name=\"rad1065\" value=\"Lin\" onclick=\"qu1052.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 47px; top: 294px; width: 19px; height: 19px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj1065",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 4 button"
	},
	objData:	{"a":[0,32,0,[47,294,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":47,"y":294,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1066.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 34px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 34px; min-height: 20px;\"><label for=\"rad1067\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Ull</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 324px; width: 34px; height: 20px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj1066",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 5 text"
	},
	objData:	{"a":[0,32,0,[76,324,34,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":76,"y":324,"width":34,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1067.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1067\" name=\"rad1067\" value=\"Ull\" onclick=\"qu1052.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 47px; top: 324px; width: 19px; height: 19px; z-index: 12;",
	cssClasses:	"",
	htmlId:		"tobj1067",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 5 button"
	},
	objData:	{"a":[0,32,0,[47,324,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":47,"y":324,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1068.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 81px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 81px; min-height: 20px;\"><label for=\"rad1069\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Polyamid</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 354px; width: 81px; height: 20px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj1068",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 6 text"
	},
	objData:	{"a":[0,32,0,[76,354,81,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":76,"y":354,"width":81,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1069.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1069\" name=\"rad1069\" value=\"Polyamid\" onclick=\"qu1052.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 47px; top: 354px; width: 19px; height: 19px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj1069",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 6 button"
	},
	objData:	{"a":[0,32,0,[47,354,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":47,"y":354,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1070.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 68px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 68px; min-height: 20px;\"><label for=\"rad1071\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Elastan</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 384px; width: 68px; height: 20px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj1070",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 7 text"
	},
	objData:	{"a":[0,32,0,[76,384,68,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":76,"y":384,"width":68,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1071.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1071\" name=\"rad1071\" value=\"Elastan\" onclick=\"qu1052.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 47px; top: 384px; width: 19px; height: 19px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj1071",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 7 button"
	},
	objData:	{"a":[0,32,0,[47,384,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":47,"y":384,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1075.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 50px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 50px; min-height: 20px;\"><label for=\"rad1076\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Silke</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 414px; width: 50px; height: 20px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj1075",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 8 text"
	},
	objData:	{"a":[0,32,0,[76,414,50,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":76,"y":414,"width":50,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1076.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1076\" name=\"rad1076\" value=\"Silke\" onclick=\"qu1052.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 47px; top: 414px; width: 19px; height: 19px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj1076",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 8 button"
	},
	objData:	{"a":[0,32,0,[47,414,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":47,"y":414,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1077.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 54px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 54px; min-height: 20px;\"><label for=\"rad1078\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Lycra</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 444px; width: 54px; height: 20px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj1077",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 9 text"
	},
	objData:	{"a":[0,32,0,[76,444,54,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":76,"y":444,"width":54,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1078.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1078\" name=\"rad1078\" value=\"Lycra\" onclick=\"qu1052.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 47px; top: 444px; width: 19px; height: 19px; z-index: 20;",
	cssClasses:	"",
	htmlId:		"tobj1078",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 9 button"
	},
	objData:	{"a":[0,32,0,[47,444,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":47,"y":444,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
text1079.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 51px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 51px; min-height: 20px;\"><label for=\"rad1080\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Akryl</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 474px; width: 51px; height: 20px; z-index: 21;",
	cssClasses:	"",
	htmlId:		"tobj1079",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 10 text"
	},
	objData:	{"a":[0,32,0,[76,474,51,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":76,"y":474,"width":51,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox1080.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"checkbox\" id=\"rad1080\" name=\"rad1080\" value=\"Akryl\" onclick=\"qu1052.questionUpdated(1);\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 47px; top: 474px; width: 19px; height: 19px; z-index: 22;",
	cssClasses:	"",
	htmlId:		"tobj1080",
	bInsAnc:	0,
	fieldsetId:	'fset1052',
	cwObj:		{
		"name":	"Choice 10 button"
	},
	objData:	{"a":[0,32,0,[47,474,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":47,"y":474,"width":19,"height":19},"formType":5,"dwFormFlags":0}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":"#000000","bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	14
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/black1_cancel_177_normal.gif","images/black1_cancel_177_over.gif","images/black1_cancel_177_clicked.gif","images/black1_next_179_normal.gif","images/black1_next_179_over.gif","images/black1_next_179_clicked.gif","images/plastic_ocean.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1030px; height: 630px; overflow: hidden; background-image: url("images/plastic_ocean.jpg"); background-size: auto; visibility: hidden;'
rcdObj.backgrd_Desktop = ["#006666","url(images/plastic_ocean.jpg)",1200,630,1];
