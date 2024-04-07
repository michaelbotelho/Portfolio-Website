
// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.show-more-btn');

    button.addEventListener('click', function() {
        var text = document.querySelector('.text');

        if (button.textContent == 'Show More') {
            text.classList.toggle('expanded');
            button.classList.toggle('expanded');
            button.textContent = 'Show Less';
        }
        else {
            text.classList.toggle('expanded');
            button.classList.toggle('expanded');
            button.textContent = 'Show More';
        }
    })
   


    // Animate one section in at a time
    const name = document.getElementById("name-title");
    const hline = document.getElementById("hline");
    const about = document.getElementById("about-me");
    const socials = document.getElementById("socials-container");

    setTimeout(function() {
        name.classList.add("appear");
    }, 500); 
    setTimeout(function() {
        hline.classList.add("appear");
    }, 500); 
    setTimeout(function() {
        about.classList.add("appear");
    }, 1200);
    setTimeout(function() {
        socials.classList.add("appear");
    }, 1900); 


});
// Scrolls to the top of the page on reload
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0); // Scrolls the window to the top
});