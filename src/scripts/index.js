/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict'

import '../lib/style'
console.log('Hello World')

import '../lib/works-slider'

import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

var slider = new KeenSlider(
    '#my-slider',
    {
      loop: true,
      created: () => {
        console.log('created')
      }
    },
    [
      // add plugins here
    ]
  )

  slider()