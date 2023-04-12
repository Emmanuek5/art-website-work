
const form = document.querySelector("form")

function jsonToStringConvertor(obj) {
  var re = JSON.stringify(obj);
  return re;
}
//form.onsubmit = (e)=>{
   // e.preventDefault();
   
    //const xhr = new XMLHttpRequest
    //xhr.open("POST","/auth/login")
    //xhr.onload = (e) =>{
    //const data = JSON.parse(xhr.response)
    //console.log(data)
    //if(xhr.status === 200 && data.status === "success"){
     // localStorage.setItem("token",data.token)
    //}
    //if(xhr.status === 200 && data.status === "error"){
     // alert(data.message)
    //}
    //}
    //const formData = new FormData(form);
    //xhr.send(formData)
//}
