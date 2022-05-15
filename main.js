let str= "";
document.getElementById('click').addEventListener('click',(event)=>{
    console.log("Button Clicked");
   if(document.getElementById('task').value!=""){
    str += `<li>${document.getElementById('task').value}<button onclick= "deleteitem(this)" >Delete</button></li>`;
    document.getElementById('list').innerHTML= str;
   }
    
 
    
})


function deleteitem(element){
    element.parentElement.remove();
}