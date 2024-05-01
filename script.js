// Function to show pop-up message
function showMessage(day) {
    var popupMessage = ""; // Initialize the message variable
    
    // Switch case to set different messages based on the clicked day
    switch (day) {
      case 1:
        popupMessage = "Its Gonna Be May";
        break;
      case 2:
        popupMessage = "Message for day 2";
        break;
      // Add more cases for other days as needed
      default:
        popupMessage = "No message for this day";
        break;
    }
    
    // Set the message content in the pop-up
    document.getElementById("popup-message").innerText = popupMessage;
    
    // Display the pop-up
    document.getElementById("popup").style.display = "block";
  }
  
  // Function to close the pop-up
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
 

  // JavaScript for "Back to Top" button
  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      // Show the button when page is scrolled down
      backToTopButton.style.display = "block";
    } else {
      // Hide the button when at the top of the page
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    // Scroll the page to the top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  });