"use strict";

/*import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';*/


/*import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';*/


const $slider = '.slider-numbers__slider';
const $number = '.slider-numbers__value';
const $block = '.slider-numbers';

let topBlock;

$(document).ready(function () {
    topBlock = $($block).position().top;

    $($slider).slick({
        slidesToShow: 5,
        prevArrow: '<button type="button" class="slider-numbers__arrow slider-numbers__arrow_prev"></button>',
        nextArrow: '<button type="button" class="slider-numbers__arrow slider-numbers__arrow_next"></button>',
        infinite: false,
        responsive: [
           {
             breakpoint: 1140,
             settings: {
               slidesToShow: 4,
             }
           },
           {
             breakpoint: 992,
             settings: {
               slidesToShow: 3,
             }
           },
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 1,
             }
           }
         ]
    });

    let first = true;
    $(window).scroll(function () {
        if (first) {

            if( ($(this).scrollTop() + $(window).outerHeight() + 100) > topBlock) {
                first = false;

                $($number).each(function () {
                    let value = $(this).html();
                    let el = $(this)[0];

                    let od = new Odometer({
                      el: el,
                      value: 0,
                      format: '( ddd).dd'
                    });

                    od.update(value);
                });
            };
        }
    });
});
