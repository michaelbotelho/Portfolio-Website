function ChangeNextProjectLink(event) {
    // Stop the anchor tag from going to href="#"
    event.preventDefault();
    // Get the anchor tag element
    var link = document.getElementById("next-project");
    // Get the document number from the data attribute
    var documentNumber = link.getAttribute("data-doc-number");


    fetch(("project" + (+documentNumber + 1) + ".html")).then(response => {
        if (response.ok) {
            link.href = "project" + (+documentNumber + 1) + ".html";
            window.open(link.href, '_self');
        } else {
            link.href = "project1.html";
            window.open(link.href, '_self');
        }
    })
    .catch(error => {
        console.error('Error occurred while checking link validity:', error);
    });
    
}



// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get next-project anchor tags 
    var link = document.getElementById("next-project");
    // Attach click event listener to call ChangeNextProjectLink function
    if (link) {
        link.addEventListener("click", ChangeNextProjectLink);
    } else {
        console.error("Anchor tag with ID 'next-project' not found.");
    }

    

    // Animate one section in at a time
    const title = document.getElementById("title");
    const preview = document.getElementById("preview-container");
    const notes = document.getElementById("notes");
    const description = document.getElementById("description-container");
    const socials = document.getElementById("socials-container");

    setTimeout(function() {
        title.classList.add("appear");
    }, 500); 
    setTimeout(function() {
        preview.classList.add("appear");
    }, 1200); 
    setTimeout(function() {
        notes.classList.add("appear");
        description.classList.add("appear");
    }, 1900); 
    setTimeout(function() {
        socials.classList.add("appear");
    }, 2800)
});
// Scrolls to the top of the page on reload
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0); // Scrolls the window to the top
});