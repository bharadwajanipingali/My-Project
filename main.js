/*function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  } ;
  xhr.send(null);
}
getfile("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
})*/
function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new error('error'));
      }
    })
  })
}
  var newFile=loadJSON("data.json");
  newFile.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  achievements(data.achievements);
})

var childtwo=document.querySelector(".childtwo");

function career(careerObj){
var careerHeading=document.createElement("h2");
careerHeading.textContent="Career Objective";
childtwo.appendChild(careerHeading);
var hr=document.createElement("hr");
careerHeading.appendChild(hr);
var careerParagraph=document.createElement("p");
careerParagraph.textContent=careerObj.info;
childtwo.appendChild(careerParagraph);
}
function education(edu){
  var educationHeading=document.createElement("h2");
  educationHeading.textContent="Education";
  childtwo.appendChild(educationHeading);
  var hr=document.createElement("hr");
  childtwo.appendChild(hr);
  for(var i=0;i<edu.length; i++){
    eduH3=document.createElement("h3");
    eduH3.textContent=edu[i].degree;
    childtwo.appendChild(eduH3);
    var eduU1=document.createElement("u1");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].institute;
    eduU1.appendChild(eduLi);
    childtwo.appendChild(eduU1);
    var eduU2=document.createElement("u2");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].data;
    eduU2.appendChild(eduLi);
    childtwo.appendChild(eduU2);
  }
}
function skills(ts){
  var skillsHeading=document.createElement("h2");
  skillsHeading.textContent="Technical Skills";
  childtwo.appendChild(skillsHeading);
  var hr=document.createElement("hr");
  childtwo.appendChild(hr);
  var skilltable=document.createElement("table");
  skilltable.border="2"
  childtwo.appendChild(skilltable);
  var tableData="";
  for(var i=0;i<ts.length; i++){
  tableData+="<tr><td>"+ts[i].title+"</td><td>"+ts[i].info+"</td></tr>";
}
 skilltable.innerHTML=tableData;
}
function achievements(ac){
  var achHeading=document.createElement("h2");
  achHeading.textContent="Achievements";
  childtwo.appendChild(achHeading);
  var hr=document.createElement("hr");
  childtwo.appendChild(hr);
  for(var i=0;i<ac.length; i++){
    var achU1=document.createElement("u1");
    var achLi=document.createElement("li");
     achLi.textContent=ac[i].info;
    achU1.appendChild(achLi);
    childtwo.appendChild(achLi);
  }
}
