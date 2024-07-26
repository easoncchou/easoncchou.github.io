function toggleNav() {
    var elements = document.getElementsByClassName("not-current");
    // console.log("clicked")
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("not-current-visible")
    }
}

function spinCard(element) {
    // Remove the animation class if it exists
    element.classList.remove('spin');
    
    // Trigger a reflow to restart the animation
    void element.offsetWidth; 
    
    // Add the animation class to start the spin
    element.classList.add('spin');
  }