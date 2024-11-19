// Get the button
const backToTopBtn = document.getElementById('backToTopBtn');

// Show the button when the user scrolls down 100px from the top of the document
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = 'block'; // Show the button
    } else {
        backToTopBtn.style.display = 'none'; // Hide the button
    }
};

// Scroll to the top of the page when the button is clicked
backToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to the top
    });
};

// YouTube Subscriber Count Fetching
const API_KEY = 'AIzaSyCTE4wVhF5eaD069WaJXgz_l6iT6vRLEAk';
const CHANNEL_ID = 'UCLFYxJfXy13QKHie2fqn1Mg';

function fetchSubscriberCount() {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const subscriberCount = data.items[0].statistics.subscriberCount;
            const subscriberElement = document.getElementById('subscriberCount');
            subscriberElement.innerText = subscriberCount;
            subscriberElement.classList.add('loaded');
        })
        .catch(error => {
            console.error('Error fetching subscriber count:', error);
            const subscriberElement = document.getElementById('subscriberCount');
            subscriberElement.innerText = 'Error loading data';
            subscriberElement.classList.add('loaded');
        });
}

// Call the function to load the subscriber count on page load
window.onload = fetchSubscriberCount;

// Lightbox functionality
function openLightbox(imageSrc) {
    var modal = document.getElementById('lightboxModal');
    var lightboxImage = document.getElementById('lightboxImage');
    var lightboxCaption = document.getElementById('lightboxCaption');

    lightboxImage.src = imageSrc;

    modal.style.display = "block";
}

function closeLightbox() {
    var modal = document.getElementById('lightboxModal');
    modal.style.display = "none";
}
