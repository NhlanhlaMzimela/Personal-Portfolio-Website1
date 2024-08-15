var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
const toTop = document.querySelector(".to-top");


function opentab(tabname){
    for (tablink of tablinks){
    tablink.classList.remove("active-link");
}
    for (tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link")
document.getElementById(tabname).classList.add("active-tab");

}
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzx83iRQvRcW6GjJayuNbkt8TCh-HsZHNj_fOXgXwe9TZsup0-Z95WKCOSVz53vmhF6aw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
        msg.innerHTML = "Messase sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 0){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})