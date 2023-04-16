var slides = document.querySelectorAll('.slides .slide');
var dots = document.querySelectorAll('.dots .dot');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,6000);

function nextSlide()
{
  slides[currentSlide].className = 'slide';
  dots[currentSlide].className = 'dot';
  if (currentSlide != 3)
  {
    currentSlide = parseInt(currentSlide)+1;
  }
  else
  {
    currentSlide = 0;
  }
  slides[currentSlide].className = 'slide showing';
  dots[currentSlide].className = 'dot showing';  
}

function previousSlide()
{
  slides[currentSlide].className = 'slide';
  dots[currentSlide].className = 'dot';
  if (currentSlide != 0)
  {
    currentSlide = parseInt(currentSlide)-1;
  }
  else 
  {
    currentSlide = 3;
  }
  slides[currentSlide].className = 'slide showing';
  dots[currentSlide].className = 'dot showing';
}

function dot_click()
{
  slides[currentSlide].className = 'slide';
  dots[currentSlide].className = 'dot'
  currentSlide = event.target.id;
  slides[currentSlide].className = 'slide showing';
  dots[currentSlide].className = 'dot showing';
}
