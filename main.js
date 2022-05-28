nav_bar_set();
function mobile_nav_active(){
  var links = document.getElementById('desktop_nav_bar').children;
	for(var i = 0;i<6;i++)
	links[i].style.display = "none";
	links[6].style.display = "block";
}
function desktop_nav_active(){
    var links = document.getElementById('desktop_nav_bar').children;
	for(var i = 0;i<6;i++)
	links[i].style.display = "inline-block";
	links[6].style.display = "none";
}
function nav_bar_set(){
	if(document.body.offsetHeight>=document.body.offsetWidth){
		mobile_nav_active();
	}
	else{
		desktop_nav_active();
	}
	
}
function duh(){};
function init(){
	window.onresize = nav_bar_set;
	document.getElementById('mob_nav_bar').style.left = "-100%";
}
function nav_bar_open(){
	if(document.getElementById('mob_nav_bar').style.left=="-100%"){
    document.getElementById('mob_nav_bar').style.left="0%";
	}
  else{
		document.getElementById('mob_nav_bar').style.left="-100%";
	}
}
function nav_bar_close(){
		document.getElementById('mob_nav_bar').style.left="-100%";

}