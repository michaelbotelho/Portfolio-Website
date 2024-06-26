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
    const title = document.getElementById("title");
    const about = document.getElementById("about-and-resume");
    const projectsHeader = document.getElementById("projects-header")
    const projects = document.querySelector(".projects-shelf");
    const socials = document.getElementById("socials-container");
    const contact = document.getElementById("contact-card");
    
    setTimeout(function() {
        title.classList.add("appear");
    }, 500); 
    setTimeout(function() {
        about.classList.add("appear");
    }, 1200); 
    setTimeout(function() {
        projectsHeader.classList.add("appear");
        projects.classList.add("appear");
    }, 1900);
    setTimeout(function() {
        contact.classList.add("appear"); 
        socials.classList.add("appear");
    }, 2600); 
    

});
// Scrolls to the top of the page on reload
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0); // Scrolls the window to the top
});
