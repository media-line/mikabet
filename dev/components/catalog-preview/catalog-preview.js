"use strict";

import './catalog-preview.scss';

const $block = '.catalog-preview';

$(window).on('load', function () {
    let blockHeight;
    blockHeight = $($block).outerHeight();

    $($block).css('top', '-' + blockHeight/2 + 'px');
    $($block).css('margin-bottom', '-' + blockHeight/2 + 'px');
});
