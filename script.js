function dltbtn(event){
    var ev=event.target
    ev.parentElement.parentElement.remove()
}
var name1=document.getElementById("nametxt")
var age=document.getElementById("age")
var gender=document.getElementsByName("gender")
var course=document.getElementById("selectbox")
course.value=0
var email=document.getElementById("email")
var tablebody=document.getElementById("tablebody")

function save1(){
      selector=false
      var selectedgender=""
      for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            selectedgender=gender[i].value
            selector=true
            break
        }
      }
       if((name1.value=="")||(age.value=="")||(selector==false)||(course.value==0)||(email.value=="")){
        alert("please fill everthing")
        return 
           }





      var tr=document.createElement("tr")
      tr.innerHTML= "<td>"+name1.value+"</td>"+"<td>"+age.value+"</td>"+"<td>"+selectedgender+"</td>"+"<td>"+course.value+"</td>"+"<td>"+email.value+"</td>"+"<td><button id='dltbtn1' onclick='dltbtn(event)'>DELETE</button></td>"
      tablebody.appendChild(tr)
      name1.value=""
      age.value=""
      course.value=0
      email.value=""
       for(let i=0;i<gender.length;i++){
        gender[i].checked=false
      }

}