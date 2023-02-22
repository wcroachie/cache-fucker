/**
  *
  * run this script before all else! put it at the very top of the head element.
  */
  
/* resist caching by always loading a random query string */
location.search?"navigate"!==performance.getEntriesByType("navigation")[0].type&&(location.search="v="+Math.random().toString(36).slice(2)):location.search="v="+Math.random().toString(36).slice(2);

function toRegExp(s){
  return eval("/"+s.split("").map(e=>"\\x"+e.charCodeAt().toString(16).padStart(2,0)).join("")+"/");
}

var domText = "<!DOCTYPE html>"+document.documentElement.outerHTML.slice(0,-14);
domText = domText.split(toRegExp(document.currentScript.outerHTML))[0]+"<!--"+document.currentScript.outerHTML+"-->";

document.writeln("<style>/*");
onload=()=>{
  domText += document.querySelector("style").textContent.slice(2);
  domText = domText.replace(/src="(.*?)"/g,(e)=>"src=\""+e.slice(5,-1)+"?v="+Math.random().toString(36).slice(2)+"\"");
  domText = domText.replace(/href="(.*?)"/g,(e)=>"href=\""+e.slice(6,-1)+"?v="+Math.random().toString(36).slice(2)+"\"");
  document.write(domText);
};
