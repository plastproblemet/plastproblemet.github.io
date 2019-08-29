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
	innerHtml:	"<svg viewBox=\"0 0 59 39\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(29.5 19.5)\" style=\"\">\n	<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_913_799_1126\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_cancel_177_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_913_799_1126&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(29.5 19.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 48.99999999999999px; top: 589px; width: 59px; height: 39px; z-index: 11; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,36960,0,[48.99999999999999,589,59,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":50,"y":75,"width":60,"height":40},"imgDataNormal":"images/desktop_shape177.png","imgDataOver":"images/desktop_shape177_over.png","imgDataDown":"images/desktop_shape177_down.png","imgDataDisabled":"images/desktop_shape177_disabled.png","svgDataNormal":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_913_799_1126\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_cancel_177_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_913_799_1126&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_913_799_1128\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_cancel_177_over.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_over.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_913_799_1128&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_913_799_1130\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_cancel_177_clicked.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_clicked.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_913_799_1130&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_913_799_1132\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_cancel_177_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_cancel_177_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_913_799_1132&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Avbryt","titleValue":"Avbryt","fallbackImg":"<img alt=\"Avbryt\" title=\"Avbryt\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton179.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 59 39\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(29.5 19.5)\" style=\"\">\n	<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_913_799_1134\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_next_179_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_913_799_1134&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(29.5 19.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 901px; top: 589px; width: 59px; height: 39px; z-index: 12; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj179",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Neste",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page957.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,39008,0,[901,589,59,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":110,"y":75,"width":60,"height":40},"imgDataNormal":"images/desktop_shape179.png","imgDataOver":"images/desktop_shape179_over.png","imgDataDown":"images/desktop_shape179_down.png","imgDataDisabled":"images/desktop_shape179_disabled.png","svgDataNormal":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_913_799_1134\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_next_179_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_913_799_1134&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_913_799_1136\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_next_179_over.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_over.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_913_799_1136&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_913_799_1138\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_next_179_clicked.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_clicked.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_913_799_1138&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(29.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_913_799_1140\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"59\" height=\"39\" xlink:href=\"images/black1_next_179_normal.gif\" preserveAspectRatio=\"none\" href=\"images/black1_next_179_normal.gif\"></image>\n</pattern>\n<path d=\"M 0 0 L 59 0 L 59 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_913_799_1140&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-29.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Neste","titleValue":"Neste","fallbackImg":"<img alt=\"Neste\" title=\"Neste\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text914.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; border: 1px solid rgb(0, 0, 0); width: 743px; height: 172px; background-color: rgb(19, 79, 92);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 735px; height: 164px;\"><p style=\"text-align:left\"><span style=\"font-family:\'Arial Black\',sans-serif;font-size:12pt;color:0\">​​​​​​​​<span data-cke-bookmark=\"1\" style=\"\">&nbsp;</span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 158px; width: 745px; height: 174px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj914",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tekst"
	},
	objData:	{"a":[0,32,0,[38,158,745,174]],"rcdOvr":{"res":0},"borderEffect":{"outline":1,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":39,"y":161,"width":760,"height":178},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text915.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 514px; min-height: 77px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 504px; min-height: 67px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:48pt; color: rgb(255, 255, 255); font-family: Impact, sans-serif;\">SPØRSMÅL 2</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 32px; top: 51px; width: 514px; height: 77px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj915",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tittel"
	},
	objData:	{"a":[0,32,0,[32,51,514,77]],"rcdOvr":{"res":0},"textShadowEffect":{"opacity":"0.9","depth":8,"color":"#073763","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":33,"y":52,"width":525,"height":79},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
qu1598.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu1598",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	2,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0043\\u004F\\u0032\\u0020\\u0028\\u006B\\u0061\\u0072\\u0062\\u006F\\u006E\\u0064\\u0069\\u006F\\u006B\\u0073\\u0069\\u0064\\u0029"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	Varspm2
	},
	objData:	{"a":[0,32,0,[]]}
};
text1603.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 733px; min-height: 20px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 733px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">Kva heiter klimagassen frå plastproduksjon,&nbsp;som bidrar til aukande drivhuseffekt og global oppvarming?</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 51px; top: 169px; width: 733px; height: 20px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj1603",
	bInsAnc:	0,
	fieldsetId:	'fset1598',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[51,169,733,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":173,"width":748,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text1604.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 95px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 95px; min-height: 20px;\"><label for=\"rad1605\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">H2O (vatn)</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 199px; width: 95px; height: 20px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj1604",
	bInsAnc:	0,
	fieldsetId:	'fset1598',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[79,199,95,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":81,"y":203,"width":97,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio1605.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad1605\" name=\"rad1598\" value=\"H2O (vatn)\" onclick=\"Varspm2.set(this.value);qu1598.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 51px; top: 199px; width: 19px; height: 19px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj1605",
	bInsAnc:	0,
	fieldsetId:	'fset1598',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[51,199,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":52,"y":203,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text1606.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 106px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 106px; min-height: 20px;\"><label for=\"rad1607\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">O2 (oksygen)</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 228px; width: 106px; height: 20px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj1606",
	bInsAnc:	0,
	fieldsetId:	'fset1598',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,32,0,[79,228,106,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":81,"y":233,"width":108,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio1607.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad1607\" name=\"rad1598\" value=\"O2 (oksygen)\" onclick=\"Varspm2.set(this.value);qu1598.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 51px; top: 228px; width: 19px; height: 19px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj1607",
	bInsAnc:	0,
	fieldsetId:	'fset1598',
	cwObj:		{
		"name":	"Choice 2 button"
	},
	objData:	{"a":[0,32,0,[51,228,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":52,"y":233,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text1608.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 163px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 163px; min-height: 20px;\"><label for=\"rad1609\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">CO2 (karbondioksid)</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 258px; width: 163px; height: 20px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj1608",
	bInsAnc:	0,
	fieldsetId:	'fset1598',
	cwObj:		{
		"name":	"Choice 3 text"
	},
	objData:	{"a":[0,32,0,[79,258,163,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":81,"y":263,"width":166,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio1609.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad1609\" name=\"rad1598\" value=\"CO2 (karbondioksid)\" onclick=\"Varspm2.set(this.value);qu1598.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 51px; top: 258px; width: 19px; height: 19px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj1609",
	bInsAnc:	0,
	fieldsetId:	'fset1598',
	cwObj:		{
		"name":	"Choice 3 button"
	},
	objData:	{"a":[0,32,0,[51,258,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":52,"y":263,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text1610.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 111px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 111px; min-height: 20px;\"><label for=\"rad1611\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size:12pt;\">CH4 (metan)</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 287px; width: 111px; height: 20px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj1610",
	bInsAnc:	0,
	fieldsetId:	'fset1598',
	cwObj:		{
		"name":	"Choice 4 text"
	},
	objData:	{"a":[0,32,0,[79,287,111,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":81,"y":293,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio1611.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad1611\" name=\"rad1598\" value=\"CH4 (metan)\" onclick=\"Varspm2.set(this.value);qu1598.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00277/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 51px; top: 287px; width: 19px; height: 19px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj1611",
	bInsAnc:	0,
	fieldsetId:	'fset1598',
	cwObj:		{
		"name":	"Choice 4 button"
	},
	objData:	{"a":[0,32,0,[51,287,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":52,"y":293,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":"#000000","bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	22
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/black1_cancel_177_normal.gif","images/black1_cancel_177_over.gif","images/black1_cancel_177_clicked.gif","images/black1_next_179_normal.gif","images/black1_next_179_over.gif","images/black1_next_179_clicked.gif","images/plastic_ocean.jpg"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-image: url("images/plastic_ocean.jpg"); background-size: 1176px 617px; visibility: hidden;'
rcdObj.backgrd_TabletLandscape = ["#FFFFFF","url(images/plastic_ocean.jpg)",1200,630,0.9796116504854369];
