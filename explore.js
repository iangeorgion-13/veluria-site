document.addEventListener("DOMContentLoaded", () => {
const creators = ["Ava","Luna","Mia","Scarlet","Valentina","Isabella","Nina","Amber","Sofia","Ivy","Aria","Kylie"];
const grid = document.getElementById("grid");

creators.forEach(name=>{
const div = document.createElement("div");
div.className="card";
div.innerHTML=`
<img src="https://picsum.photos/400/600?random=${Math.random()}">
<div class="info">${name}</div>
`;
div.addEventListener("click", unlock);
grid.appendChild(div);
});
});

function unlock(){
const email = localStorage.getItem("veluria_user");

if(!email){
window.location.href="Register.html";
return;
}

fetch("https://veluria-backend.onrender.com/check",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({email})
})
.then(r=>r.json())
.then(d=>{
if(d.premium){
window.location.href="videos.html";
} else {
window.location.href="Subscribe.html";
}
});
}
