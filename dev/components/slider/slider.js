"use strict";

import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import isMobile from 'ismobilejs';

import './slider.scss';


const $slider = '.slider__slides';
const $leftArrow = '.slider__arrow_left';
const $rightArrow = '.slider__arrow_right';

const $top = '.slider__top';
const $search = '.slider__search-block';

$(document).ready(function () {
    $($slider).slick({
        fade: true,
        slidesToShow: 1,
        arrows: false,
    });

    $($leftArrow).click(function () {
        $($slider).slick('slickPrev');
    });

    $($rightArrow).click(function () {
        $($slider).slick('slickPrev');
    });

    let heightTop;
    heightTop = $($top).outerHeight();
    $($search).css('top', heightTop + 'px');
});
