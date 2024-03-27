const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');
const events = document.querySelectorAll('.events');

slider.addEventListener('input', function() {
  const value = parseInt(slider.value);
  sliderValue.textContent = value;
  events.forEach(event => {
    event.style.height = `${value}px`;
  });
});