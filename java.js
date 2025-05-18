var tablinks =document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
var link = document.getElementById("about");


  const scriptURL = 'https://script.google.com/macros/s/AKfycby_dP8qRnbb8DTGc9hWttLT29HaNTSkmCbyOIvjByMHPmfP2Np1OLwgGCzhQFkfFEToHg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Mesage sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
    
      },5000 )
      form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })
  var about = document.getElementById("about");
  function clickabout(){
    about.style.display = "block";
  }
  var service = document.getElementById("sevices");
  function clickservicse(){
    service.style.display = "block";
  }
  var project = document.getElementById("portfolio");
  function clickproject(){
    project.style.display = "block";
  }
  var contact = document.getElementById("contact");
  function clickcontact(){
    contact.style.display = "block";
  }
 
  function backservices(){
    var back =document.getElementById("sevices");
    back.style.display= " none";

  }
  function backabout(){
    var back =document.getElementById("about");
    back.style.display= " none";

  }
  function backproject(){
    var back =document.getElementById("portfolio");
    back.style.display= " none";

  } function backcontact(){
    var back =document.getElementById("contact");
    back.style.display= " none";

  }
  
