
const lights = document.querySelectorAll('.light');
const nextButton = document.getElementById('next-btn');
let activeIndex = 0;

nextButton.addEventListener('click', () => {
 
    lights[activeIndex].classList.remove('active');

    activeIndex = (activeIndex + 1) % lights.length;

    
    lights[activeIndex].classList.add('active');
});