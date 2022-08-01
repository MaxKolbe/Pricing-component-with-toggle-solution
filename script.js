var toggle = document.getElementById("toggle")
var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
toggle.className = " fa-solid fa-toggle-off"
toggle.onclick = function(){
  if(toggle.className == " fa-solid fa-toggle-off"){
    toggle.className = " fa-solid fa-toggle-on"
    one.innerHTML = "&dollar;19.99"
    two.innerHTML = "&dollar;24.99"
    three.innerHTML = "&dollar;39.99"
  } else{
    toggle.className = " fa-solid fa-toggle-off"
    one.innerHTML = "&dollar;199.99"
    two.innerHTML = "&dollar;249.99"
    three.innerHTML = "&dollar;399.99"
  }
}