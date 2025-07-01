function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const response = document.getElementById("response");
  
    response.textContent = Thanks, ${name}! We'll get back to you soon.;
  
    // Clear the form
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
  }