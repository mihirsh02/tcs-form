// sticking NavBar 
stickyElem =
    document.querySelector(".sticky-div");

currStickyPos =
    stickyElem.getBoundingClientRect().top + window.pageYOffset;

window.onscroll = function () {

    if (window.pageYOffset > currStickyPos) {
        stickyElem.style.position = "fixed";
        stickyElem.style.top = "0px";
    } else {
        stickyElem.style.position = "relative";
        stickyElem.style.top = "initial";
    }
}

// checkbox function
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "";
  } else {
     text.style.display = "none";
  }
}

