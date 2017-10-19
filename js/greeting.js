(function(){
  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let myHeader = document.getElementById("my-header");
   let lastname = document.getElementById("last-name");
  
  function PerformGreeting() {
    myName.innerHTML = userName.value;
	lastname.innerHTML = last-name.value;
	
    event.preventDefault();
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
  }
  
}());
