if (window.VarCurrentView) VarCurrentView.set('TabletLandscape');
function init_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
textbutton177.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 59 39\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(29.5 19.5)\" style=\"\">\n	<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_957_799_1126\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_cancel_177_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_957_799_1126&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(29.5 19.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 48.999999999999986px; top: 589px; width: 59px; height: 39px; z-index: 13; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,36960,0,[48.999999999999986,589,59,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":50,"y":75,"width":60,"height":40},"imgDataNormal":"images/desktop_shape177.png","imgDataOver":"images/desktop_shape177_over.png","imgDataDown":"images/desktop_shape177_down.png","imgDataDisabled":"images/desktop_shape177_disabled.png","svgDataNormal":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_957_799_1126\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_cancel_177_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_957_799_1126&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_957_799_1128\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_cancel_177_over.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_over.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_957_799_1128&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_957_799_1130\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_cancel_177_clicked.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_clicked.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_957_799_1130&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_957_799_1132\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_cancel_177_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_957_799_1132&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Avbryt","titleValue":"Avbryt","fallbackImg":"<img alt=\"Avbryt\" title=\"Avbryt\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton179.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 59 39\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(29.5 19.5)\" style=\"\">\n	<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_957_799_1134\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_next_179_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_957_799_1134&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(29.5 19.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 901px; top: 589px; width: 59px; height: 39px; z-index: 14; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj179",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Neste",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page1033.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,39008,0,[901,589,59,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":110,"y":75,"width":60,"height":40},"imgDataNormal":"images/desktop_shape179.png","imgDataOver":"images/desktop_shape179_over.png","imgDataDown":"images/desktop_shape179_down.png","imgDataDisabled":"images/desktop_shape179_disabled.png","svgDataNormal":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_957_799_1134\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_next_179_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_957_799_1134&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_957_799_1136\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_next_179_over.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_over.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_957_799_1136&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_957_799_1138\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_next_179_clicked.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_clicked.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_957_799_1138&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_957_799_1140\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_next_179_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_957_799_1140&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Neste","titleValue":"Neste","fallbackImg":"<img alt=\"Neste\" title=\"Neste\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text958.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; border: 1px solid rgb(0, 0, 0); width: 509px; height: 372px; background-color: rgb(19, 79, 92);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 501px; height: 364px;\"><p style=\"text-align:left\"><span style=\"font-family:\'Arial Black\',sans-serif;font-size:12pt;color:0\">​​​​​​​​<span data-cke-bookmark=\"1\" style=\"\">&nbsp;</span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 35px; top: 156px; width: 511px; height: 374px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj958",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tekst"
	},
	objData:	{"a":[0,32,0,[35,156,511,374]],"rcdOvr":{"res":0},"borderEffect":{"outline":1,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":36,"y":159,"width":522,"height":382},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text959.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 514px; min-height: 77px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 504px; min-height: 67px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:48pt; color: rgb(255, 255, 255); font-family: Impact, sans-serif;\">SPØRSMÅL 3</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 32px; top: 51px; width: 514px; height: 77px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj959",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tittel"
	},
	objData:	{"a":[0,32,0,[32,51,514,77]],"rcdOvr":{"res":0},"textShadowEffect":{"opacity":"0.9","depth":8,"color":"#073763","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":33,"y":52,"width":525,"height":79},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
qu1007.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu1007",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"#0000FF",
				"questType":	6,
				"dwQuestFlags":	2,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0031\\u004C\\u002D\\u0031\\u0052","\\u0032\\u004C\\u002D\\u0032\\u0052","\\u0033\\u004C\\u002D\\u0033\\u0052","\\u0034\\u004C\\u002D\\u0034\\u0052","\\u0035\\u004C\\u002D\\u0035\\u0052"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	Varspm3
	},
	objData:	{"a":[0,32,0,[]]}
};
text1012.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 485px; min-height: 20px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 485px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Kor lang tid bruker desse plastproduktene på å bli brutt ned i havet?</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 49px; top: 169px; width: 485px; height: 20px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj1012",
	bInsAnc:	0,
	fieldsetId:	'fset1007',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[49,169,485,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":50,"y":173,"width":495,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image1014.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1014Img\" src=\"images/Plastpose_2.png\" alt=\"Choice 1 image\" title=\"Choice 1 image\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 46px; height: 85px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 75px; top: 195px; width: 46px; height: 85px; z-index: 3; cursor: pointer; transform: rotate(330deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(330deg) ; -webkit-transform:rotate(330deg) ; -o-transform:rotate(330deg) ; -ms-transform:rotate(330deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8660254037844384, M12=0.5000000000000004, M21=-0.5000000000000004, M22=0.8660254037844384) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8660254037844384, M12=0.5000000000000004, M21=-0.5000000000000004, M22=0.8660254037844384) ",
	cssClasses:	"",
	htmlId:		"tobj1014",
	bInsAnc:	0,
	fieldsetId:	'fset1007',
	cwObj:		{
		"name":	"Choice 1 image"
	},
	objData:	{"a":[0,288,0,[75,195,46,85]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":330,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":199,"width":47,"height":87}}
};
text1015.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 73px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">10-20 år</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 297px; top: 231px; width: 73px; height: 20px; z-index: 4; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj1015",
	bInsAnc:	0,
	fieldsetId:	'fset1007',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[297,231,73,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":303,"y":236,"width":75,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image1017.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1017Img\" src=\"images/Plastflaske.png\" alt=\"Choice 2 image\" title=\"Choice 2 image\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 16px; height: 63px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 99px; top: 274px; width: 16px; height: 63px; z-index: 5; cursor: pointer; transform: rotate(51deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(51deg) ; -webkit-transform:rotate(51deg) ; -o-transform:rotate(51deg) ; -ms-transform:rotate(51deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6293203910498375, M12=-0.7771459614569708, M21=0.7771459614569708, M22=0.6293203910498375) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6293203910498375, M12=-0.7771459614569708, M21=0.7771459614569708, M22=0.6293203910498375) ",
	cssClasses:	"",
	htmlId:		"tobj1017",
	bInsAnc:	0,
	fieldsetId:	'fset1007',
	cwObj:		{
		"name":	"Choice 2 image"
	},
	objData:	{"a":[0,288,0,[99,274,16,63]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":51,"anchorX":50,"anchorY":50},"desktopRect":{"x":101,"y":280,"width":16,"height":64}}
};
text1018.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 59px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 59px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">600 år</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 299px; top: 295px; width: 59px; height: 20px; z-index: 6; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj1018",
	bInsAnc:	0,
	fieldsetId:	'fset1007',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[299,295,59,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":305,"y":301,"width":60,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image1019.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1019Img\" src=\"images/Isoporkopp.png\" alt=\"Choice 3 image\" title=\"Choice 3 image\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 29px; height: 50px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 91px; top: 338px; width: 29px; height: 50px; z-index: 7; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj1019",
	bInsAnc:	0,
	fieldsetId:	'fset1007',
	cwObj:		{
		"name":	"Choice 3 image"
	},
	objData:	{"a":[0,288,0,[91,338,29,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":93,"y":345,"width":30,"height":51}}
};
text1020.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 59px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 59px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">450 år</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 302px; top: 363px; width: 59px; height: 20px; z-index: 8; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj1020",
	bInsAnc:	0,
	fieldsetId:	'fset1007',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[302,363,59,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":308,"y":371,"width":60,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image1021.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1021Img\" src=\"images/res533.png\" alt=\"Choice 4 image\" title=\"Choice 4 image\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 58px; height: 53px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 402px; width: 58px; height: 53px; z-index: 9; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj1021",
	bInsAnc:	0,
	fieldsetId:	'fset1007',
	cwObj:		{
		"name":	"Choice 4 image"
	},
	objData:	{"a":[0,288,0,[79,402,58,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":81,"y":410,"width":59,"height":54}}
};
text1022.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 50px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 50px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">50 år</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 306px; top: 429px; width: 50px; height: 20px; z-index: 10; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj1022",
	bInsAnc:	0,
	fieldsetId:	'fset1007',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[306,429,50,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":312,"y":438,"width":51,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image1023.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1023Img\" src=\"images/Bleie.png\" alt=\"Choice 5 image\" title=\"Choice 5 image\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 62px; height: 58px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 81px; top: 465px; width: 62px; height: 58px; z-index: 11; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj1023",
	bInsAnc:	0,
	fieldsetId:	'fset1007',
	cwObj:		{
		"name":	"Choice 5 image"
	},
	objData:	{"a":[0,288,0,[81,465,62,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":83,"y":475,"width":63,"height":59}}
};
text1024.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 59px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 59px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">450 år</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 300px; top: 488px; width: 59px; height: 20px; z-index: 12; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj1024",
	bInsAnc:	0,
	fieldsetId:	'fset1007',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[300,488,59,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":306,"y":498,"width":60,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":"#000000","bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	22
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/black1_cancel_177_normal.gif","images/black1_cancel_177_over.gif","images/black1_cancel_177_clicked.gif","images/black1_next_179_normal.gif","images/black1_next_179_over.gif","images/black1_next_179_clicked.gif","images/Bleie.png","images/Isoporkopp.png","images/Plastflaske.png","images/res533.png","images/Plastpose_2.png","images/plastic_ocean.jpg"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-image: url("images/plastic_ocean.jpg"); background-size: 1176px 617px; visibility: hidden;'
rcdObj.backgrd_TabletLandscape = ["#FFFFFF","url(images/plastic_ocean.jpg)",1200,630,0.9796116504854369];
