var contents = null, images = null, groups = null;
var codedefault1="TAB CLOSEALLOTHERS\n SET !EXTRACT_TEST_POPUP NO\n SET !TIMEOUT_PAGE 10\n SET !ERRORIGNORE YES\n SET !TIMEOUT_STEP 0.1\n";
var codedefault2="SET !EXTRACT_TEST_POPUP NO\n SET !TIMEOUT_PAGE 10\n SET !ERRORIGNORE YES\n SET !TIMEOUT_STEP 0.1\n";
var wm             = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
var window         = wm.getMostRecentWindow("navigator:browser");
function random(a,b){var c= b-a; return Math.floor((Math.random()*c)+a);}
function playPost(groups,contents,images,time1,time2){
	for(key in groups){
		if(typeof(groups[key].href)!="undefined"){
			if(key==0) code="TAB OPEN\n TAB T=2\n";
			else code="";
			code+="URL GOTO=https://m.facebook.com/groups/"+gup('group_id',groups[key].href)+"\n";
			if(images.length==0){
				code+="TAG POS=1 TYPE=TEXTAREA ATTR=ID:* CONTENT="+contents[random(0,contents.length-1)].value.replace(/ /g, "<sp>").replace(/\n/g, "<br>")+"\n";
				code+="TAG POS=1 TYPE=INPUT:SUBMIT  ATTR=NAME:view_post\n";
				code+="WAIT SECONDS="+random(10,35)+"\n";
			}else{
				code+="TAG POS=1 TYPE=INPUT:SUBMIT  ATTR=name:lgc_view_photo\n";
				for(key2 in images){
					if(!isNaN(key2)){
						code+="TAG POS=1 TYPE=INPUT:FILE ATTR=NAME:file"+(parseInt(key2)+parseInt(1))+" CONTENT="+images[key2].getAttribute('data').replace(/ /g, "<sp>")+"\n";
					}
				}
				code+="TAG POS=1 TYPE=TEXTAREA ATTR=ID:* CONTENT="+contents[random(0,contents.length-1)].value.replace(/ /g, "<sp>").replace(/\n/g, "<br>")+"\n";
				code+="TAG POS=1 TYPE=INPUT:SUBMIT ATTR=NAME:photo_upload\n";
				code+="TAG POS=1 TYPE=INPUT:SUBMIT ATTR=NAME:done\n";
				code+="WAIT SECONDS="+random(time1,time2)+"\n";
			}
			iimPlayCode(codedefault2+code);
		} 
	}
}

function gup( name, url ) {
  if (!url) url = location.href
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( url );
  return results == null ? null : results[1];
}

function getParents(el) {
    var parents = [];
	var p = el.parentNode;
	while (p !== null) {
        var o = p;
        parents.push(o);
        p = o.parentNode;
    }
    return parents;
}
iimPlayCode(codedefault1+"URL GOTO=http://sozi.vn\n TAB OPEN\n TAB T=2\n URL GOTO=https://m.facebook.com/settings/notifications/groups/\n ");
window.document.querySelectorAll("#header")[0].innerHTML='<div class="contentap"><div class="ctap"><textarea style="width:98%" placeholder="Content" class="ap"></textarea></div></div>      <div class="btcta" style="float:right;"><button class="act">add content</button><button class="rmct">Remove Content</button></div>         <div class="imgap"><input style="width:98%"  type="file" class="upfbgr" data="" > <br><input style="width:98%"  type="file" class="upfbgr" data="" > <br><input style="width:98%"  type="file" class="upfbgr" data="" > <br></div>      <br>  Time Random <input type="text" value="20" style="width:50px;" name="sd">-<input type="text" value="50" style="width:50px;" name="ss">     <div class="btcta" style="float:right;"><button class="editgroup">Edit Group</button><button class="run">RunPost</button></div>'



window.document.querySelectorAll('.rmct')[0].addEventListener("click", function(){
	window.document.querySelectorAll('.ctap')[window.document.querySelectorAll('.ctap').length-1].remove();
});

window.document.querySelectorAll('.act')[0].addEventListener("click", function(){
	if(window.document.querySelectorAll('.ctap').length<3){
		window.document.querySelectorAll('.contentap')[0].innerHTML = window.document.querySelectorAll('.contentap')[0].innerHTML + '<div class="ctap"><textarea style="width:98%" placeholder="Content" class="ap"></textarea></div></div>';
	}
});
for(i in window.document.querySelectorAll('input[type="file"]') ) 
	if(!isNaN(i)) 
		window.document.querySelectorAll('input[type="file"]')[i].addEventListener("change", function(){this.setAttribute('data',this.value);});

var edit=0;		
window.document.querySelectorAll('.editgroup')[0].addEventListener("click", function(){
	if(edit==0){
		var gr = window.document.querySelectorAll("h3");
		for(i in gr){
			if(!isNaN(i)){
				gr[i].innerHTML = gr[i].innerHTML +' <button class="rmgr"> Delete</button> ';
				window.document.querySelectorAll("h3 button")[i].addEventListener("click", function(){
					getParents(this)[1].remove();
				});
				
			}	
		} 
		edit=1;	
	}
});
window.document.querySelectorAll('.run')[0].addEventListener("click", function(){
	contents = window.document.querySelectorAll(".ap");
	if(contents[0].value!=""){
		images = window.document.querySelectorAll(".upfbgr:not([data=\"\"])");
		groups = window.document.querySelectorAll("h3 a");
		time1 = window.document.querySelectorAll("input[name='sd']")[0].value;
		time2 = window.document.querySelectorAll("input[name='ss']")[0].value;
		playPost(groups,contents,images,time1,time2);
	}else{
		contents[0].style.border="1px solid #C82828";
	}
	
});
iimPlay('CODE:WAIT SECONDS=9999');
