var RenderList = function (Array) {


  Array.forEach(function(a) {
     var subtype = a.type.sub; 
     if (subtype == 'hello')
        li = document.createElement('li'); 
     li.textContent = a.text;    
     document.getElementById('containerDiv').appendChild(li) 
     else if (a.type.subtype == true) {
        li = document.createElement('li'); 
        li.textContent = a.text;      
        document.getElementById('containerDiv').appendChild(li);
     });
     
     d = 'was rendered';
};

var GetData = function() {
  return $.xhr('/my/cool/api', {type: "list"});
};

d = getData(); 
RenderList (d); 
console.log(d);\nmodule.exports = RenderList;
