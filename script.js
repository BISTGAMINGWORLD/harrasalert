document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // SOS Button functionality
    const sosButton = document.getElementById('sosButton');
    const sosModal = document.getElementById('sosModal');
    const cancelSOSBtn = document.getElementById('cancelSOS');
    const countdownElement = document.getElementById('countdown');
    const timerElement = document.getElementById('timer');
    const timerProgress = document.getElementById('timerProgress');
    const alertSent = document.getElementById('alertSent');
    
    let countdownInterval;
    let timeLeft = 5;
    
    sosButton.addEventListener('click', function() {
        sosModal.classList.add('active');
        timeLeft = 5;
        timerElement.textContent = timeLeft;
        timerProgress.style.width = '100%';
        countdownElement.classList.remove('hidden');
        alertSent.classList.add('hidden');
        
        // Start countdown
        countdownInterval = setInterval(updateCountdown, 1000);
    });
    
    function updateCountdown() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        timerProgress.style.width = (timeLeft / 5 * 100) + '%';
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownElement.classList.add('hidden');
            alertSent.classList.remove('hidden');
            
            // Auto close after 3 seconds
            setTimeout(function() {
                sosModal.classList.remove('active');
            }, 3000);
        }
    }
    
    cancelSOSBtn.addEventListener('click', function() {
        clearInterval(countdownInterval);
        sosModal.classList.remove('active');
    });
    
    // Form validation and submission
    const incidentForm = document.getElementById('incidentForm');
    const formProgress = document.getElementById('formProgress');
    const progressPercentage = document.getElementById('progressPercentage');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeModalBtn = document.getElementById('closeModal');
    const closeModalX = document.querySelector('.close-modal');
    const referenceNumber = document.getElementById('referenceNumber');
    
    // Generate a reference number
    function generateReferenceNumber() {
        const date = new Date();
        const year = date.getFullYear();
        const random = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
        return `WH-${year}-${random}`;
    }
    
    // Update form progress
    function updateFormProgress() {
        const formElements = incidentForm.querySelectorAll('input:required, textarea:required, select:required');
        let filledCount = 0;
        
        formElements.forEach(element => {
            if (element.type === 'checkbox') {
                if (element.checked) filledCount++;
            } else {
                if (element.value.trim() !== '') filledCount++;
            }
        });
        
        const percentage = Math.floor((filledCount / formElements.length) * 100);
        formProgress.style.width = `${percentage}%`;
        progressPercentage.textContent = `${percentage}%`;
    }
    
    // Add event listeners to required form elements
    const requiredElements = incidentForm.querySelectorAll('input:required, textarea:required, select:required');
    requiredElements.forEach(element => {
        element.addEventListener('input', updateFormProgress);
        element.addEventListener('change', updateFormProgress);
    });
    
    // Initialize form progress
    updateFormProgress();
    
    // Location detection
    const detectLocationBtn = document.getElementById('detectLocationBtn');
    const locationInput = document.getElementById('location');
    
    detectLocationBtn.addEventListener('click', function() {
        if (navigator.geolocation) {
            detectLocationBtn.textContent = 'Detecting...';
            detectLocationBtn.disabled = true;
            
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    locationInput.value = `Latitude: ${latitude.toFixed(6)}, Longitude: ${longitude.toFixed(6)} (Detected automatically)`;
                    
                    detectLocationBtn.innerHTML = '<i class="fas fa-map-marker-alt"></i> Detect Location';
                    detectLocationBtn.disabled = false;
                    
                    updateFormProgress();
                },
                function(error) {
                    alert(`Error detecting location: ${error.message}`);
                    detectLocationBtn.innerHTML = '<i class="fas fa-map-marker-alt"></i> Detect Location';
                    detectLocationBtn.disabled = false;
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    });
    
    // Form submission
    incidentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        referenceNumber.textContent = generateReferenceNumber();
        confirmationModal.classList.add('active');
    });
    
    closeModalBtn.addEventListener('click', function() {
        confirmationModal.classList.remove('active');
        incidentForm.reset();
        updateFormProgress();
    });
    
    closeModalX.addEventListener('click', function() {
        confirmationModal.classList.remove('active');
        incidentForm.reset();
        updateFormProgress();
    });
    
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;
            
            // Toggle active class on header
            this.classList.toggle('active');
            
            // Toggle icon
            const icon = this.querySelector('.accordion-icon');
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
            
            // Toggle content
            if (content.classList.contains('active')) {
                content.classList.remove('active');
            } else {
                content.classList.add('active');
            }
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === sosModal) {
            clearInterval(countdownInterval);
            sosModal.classList.remove('active');
        }
        
        if (e.target === confirmationModal) {
            confirmationModal.classList.remove('active');
            incidentForm.reset();
            updateFormProgress();
        }
    });
});
