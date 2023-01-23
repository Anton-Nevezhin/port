/* eslint-disable eol-last */
// core version + navigation, pagination modules:
import Swiper, {Navigation, Pagination} from 'swiper'
// import Swiper and modules styles
import 'swiper/swiper-bundle.css'

Swiper.use([Navigation, Pagination])

// init Swiper:
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'card',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})