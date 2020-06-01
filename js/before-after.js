const options = {
  direction: 'vertical',
  width: 350,
  height: 537,
  initial: 70,
  filter: {
    active: true,
    effect:
      'grayscale(200%)'
  },
}

const first = document.getElementById('first-slider')
const second = document.getElementById('second-slider')
const carouselFirst = document.getElementById('carousel-first-slider')
const carouselSecond = document.getElementById('carousel-second-slider')

const firstSlider = new Cato(options, first)
const secondSlider = new Cato(options, second)
const carouselFirstSlider = new Cato(options, carouselFirst)
const carouselSecondSlider = new Cato(options, carouselSecond)


firstSlider.createSlider()
secondSlider.createSlider()
carouselFirstSlider.createSlider()
carouselSecondSlider.createSlider()
