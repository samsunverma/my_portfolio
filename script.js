
console.log("JavaScript is linked and loaded!");

const toggleButtons = document.querySelectorAll(".toggle-button");

toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        const projectDetails = button.nextElementSibling;
        
        if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
            projectDetails.style.display = "block";
            button.textContent = "Hide Details";
        } else {
            projectDetails.style.display = "none";
            button.textContent = "Show Details";
        }
    });
});
