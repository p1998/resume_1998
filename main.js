function json(file,callback){
    
     var xhr=new XMLHttpRequest();
     xhr.overrideMimeType("application/json");
     xhr.open("GET",file,true);
     xhr.onreadystatechange=function(){
     	if (xhr.readystate===4 && xhr.status===200) {
     		callback(xhr.responseText);
     	}
     }
     xhr.send(null);
}
json("file.JSON",function(text){
	let d=JSON.parse(text);
	console.log(d);
	basics(d.basicdetails);
	carr(d.carrier);
	edu(d.education);
	technicalskills(d.skills);
	ache(d.achievements);
	desc(d.description);
})

var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(basicdetails){
var i=document.createElement("img");
i.src=image;	
i.alt="profile photo";
l.appendChild(i);
var nam=document.createElement("h3");
nam.textContent=basicdetails.name;
l.appendChild(nam);
var ema=document.createElement("h3");
ema.textContent=basicdetails.email;
l.appendChild(ema);
var ph=document.createElement("h3");
ph.textContent=basicdetails.phone;
l.appendChild(ph);
var ad=document.createElement("h4");
ad.textContent=basicdetails.address;
l.appendChild(ad);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendchild(r);

function edu(e){
	var e1=document.createElement("div");
	e1.classList.add("education");
	r.appendChild(e1);
	var head=document.creaetElement("h2");
	head.textContent="Educational Details";
	e1.appendChild(head);
	head.appendChild(document.createElement("HR"));
for(var i=0;i<e.length;i++){
	var h=document.createElement("h2");
	h.textContent=e[i].course;
	e1.appendChild(h);
	var u=document.createElement("u1");
	e1.appendChild(u);
	var list=document.createElement("li");
	list.textContent=e[i].college;
	u.appendChild(list);
	var list=document.createElement("li");
	list1.textcontent=e[i].percentage;
	list.appendChild(list1);
	 
}
}
function technicalskills(s){
	var d=document.createElement("div");
	d.textcontent="skills set";
	r.appendchild(d);
	var tab=document.createElement("table");
	var row="";
	for(var i=0; i<s.length; i++){
		row="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function carr(car){
	var c1=document.createElement("div");
	r.appendchild(c1);
	var h1=document.createElement("h1");
	h1.textcontent="carrier objective:";
	c1.appendChild(h1);
	h1.appendchild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textcontent=car.software engineer;
	h1.appendchild(para);
}
function ache(ach){
	var d=document.createElement("div");
	r.appendchild(d);
	var h=document.createElement("h");
	h.textcontent="achievements:";
	d.appendChild(h);
	h.appendchild(document.createElement("HR"));
	
for(i in ache){
	var u=document.createElement("u1");
	d.appendChild(u);
    var list=document.createElement("li");
    list.textcontent=ach[i];
    u.appendChild(list);
}
}
function desc(D){
	var c1=document.createElement("div");
	r.appendchild(c1);
	var h2=document.createElement("h2");
	h.textcontent="description:";
	c1.appendChild(h2);
	h2.appendchild(document.createElement("HR"));
for(i in desc){
	var u=document.createElement("u1");
	d.appendChild(u);
    var list=document.createElement("li");
    list.textcontent=desc[i];
    u.appendChild(list);
}
}    