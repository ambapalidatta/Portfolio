let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-links");
    }

    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab")
}



let sideMenu = document.getElementById("sideMenu");

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-200px";
}






  const scriptURL = 'https://script.google.com/macros/s/AKfycbyblo5f8bztMjFr_UFE2tJbXjcEvCj9ihYdqlb7yape6SJEYOZm2nEl0Nf0XUJ-XpsxXQ/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
            msg.innerHtml = ""
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })