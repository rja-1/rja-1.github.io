document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    // Handle form submission here (e.g., send form data to server)
    // You can use AJAX or fetch API to send form data asynchronously
    // Example:
    // const formData = new FormData(this);
    // fetch("submit_form.php", {
    //     method: "POST",
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     // Optionally, show success message to the user
    // })
    // .catch(error => {
    //     console.error(error);
    //     // Optionally, show error message to the user
    // });
});
