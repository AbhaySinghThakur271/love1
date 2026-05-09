// Import necessary modules and define variables
// Function to handle image gallery
function handleImageGallery() {
    // API call to fetch images
    fetch('/api/images')
        .then(response => response.json())
        .then(data => {
            // Render images in the gallery
            const gallery = document.getElementById('gallery');
            data.forEach(image => {
                const img = document.createElement('img');
                img.src = image.url;
                gallery.appendChild(img);
            });
        });
}

// Function to handle contact form submission
function handleContactForm() {
    // Get form data
    const formData = new FormData(document.getElementById('contact-form'));
    // API call to send form data
    fetch('/api/contact', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Handle response
            console.log(data);
        });
}

// Function to handle about page
function handleAboutPage() {
    // API call to fetch about page content
    fetch('/api/about')
        .then(response => response.json())
        .then(data => {
            // Render about page content
            const aboutPage = document.getElementById('about-page');
            aboutPage.innerHTML = data.content;
        });
}

// Function to handle services page
function handleServicesPage() {
    // API call to fetch services page content
    fetch('/api/services')
        .then(response => response.json())
        .then(data => {
            // Render services page content
            const servicesPage = document.getElementById('services-page');
            servicesPage.innerHTML = data.content;
        });
}

// Call functions to handle user interactions
handleImageGallery();
handleContactForm();
handleAboutPage();
handleServicesPage();
