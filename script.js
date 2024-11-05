document.notification ;

document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        logo.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
        logo.classList.remove("scrolled");
    }
});
  
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Display notification
  var notification = document.getElementById('notification');
  notification.style.display = 'block';

  // Optionally hide the message after a few seconds
  setTimeout(function() {
      notification.style.display = 'none';
  }, 3000);
});