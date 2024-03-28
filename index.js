const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');
const events = document.querySelectorAll('.events');
const searchBar = document.getElementById('searchbar');
const backgroundColor = document.getElementById('colorBackground');
const barColor = document.getElementById('colorBar');
const eventColor = document.getElementById('colorEvent');
const iconColor = document.getElementById('colorIcon');
const phone = document.querySelector('.phone');
const topBar = document.querySelector('.topbar');
const bottomBar = document.querySelector('.bottombar');
const date = document.querySelectorAll('.date');
const exitIcons = document.getElementById('exit');
const title = document.getElementById('title');
const search = document.getElementById('search');
const filter = document.getElementById('filter');
const phoneCon = document.querySelector('.phoneContent');
const calander1 = document.getElementById('icon1');
const calander2 = document.getElementById('icon2');
const calander3 = document.getElementById('icon3');
const calander4 = document.getElementById('icon4');
const calander5 = document.getElementById('icon5');
const filterStyle = document.querySelectorAll('.fillStyle');
const inputElement = document.querySelectorAll('input');

slider.addEventListener('input', function() {
  const value = parseInt(slider.value);
  sliderValue.textContent = value;
  events.forEach(event => {
    event.style.height = `${value}px`;
  });
});

eventColor.addEventListener('input', function() {
  const color = eventColor.value;
  events.forEach(event => {
    event.style.backgroundColor = color;
  });
  
  filterStyle.forEach(event => {
    event.style.backgroundColor = color;
  });
});

backgroundColor.addEventListener('input', function() {
  const colorz = backgroundColor.value; 
  phone.style.backgroundColor = colorz;
  
});
barColor.addEventListener('input', function() {
  const colors = barColor.value; 
  topBar.style.backgroundColor = colors;
  bottomBar.style.backgroundColor = colors;
});
iconColor.addEventListener('input', function() {
  const colorx = iconColor.value; 
  exitIcons.style.color = colorx;
  title.style.color = colorx;
  search.style.color = colorx;
  calander1.style.color = colorx;
  calander2.style.color = colorx;
  calander3.style.color = colorx;
  calander4.style.color = colorx;
  calander5.style.color = colorx;
 
 filterStyle.forEach(event => {
  event.style.color = colorx;
});
 
  
  filter.style.color = colorx;
  date.forEach(event => {
    event.style.color = colorx;
  });
  
});

filter.addEventListener('click', function() {
  if (topBar.style.animationName === 'topbarExpand') {
    topBar.style.animation = 'topbarClose 0.4s ease 0s normal forwards';
    phoneCon.style.animation = 'add 0.4s ease 0s normal forwards';
   
    filterStyle.forEach(event => {
      event.style.display = 'none';
    });
  
  } else {
   
   topBar.style.animation = 'topbarExpand 0.5s ease 0.1s normal forwards';
   phoneCon.style.animation = 'remove 0.12s ease 0s normal forwards';
   phoneCon.style.marginBottom = '65px';
   filterStyle.forEach(event => {
    event.style.animation = 'fadeIn 0.7s ease 0.1s normal forwards';
    event.style.display = 'flex';
  });
}
});

search.addEventListener('click', function() {
  
  if (topBar.style.animationName === 'topbarExpand') {
  return 0;
  }
  
  else if (topBar.style.animationName === 'searchExpand') {
    topBar.style.animation = 'searchClose 0.4s ease 0s normal forwards';
    searchBar.style.display = 'none';
    
  } else {
   
   topBar.style.animation = 'searchExpand 0.3s ease 0.1s normal forwards';
   searchBar.style.display = 'flex';
   phoneCon.style.marginBottom = '65px';
  }

});


