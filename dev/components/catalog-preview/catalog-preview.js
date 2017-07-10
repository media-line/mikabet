"use strict";

const $block = '.catalog-preview';

$(window).on('load', function () {
    let blockHeight;
    blockHeight = $($block).outerHeight();

    $($block).css('top', '-' + blockHeight/100 * 20 + 'px');
    $($block).css('margin-bottom', '-' + blockHeight/100 * 20 + 'px');
});
