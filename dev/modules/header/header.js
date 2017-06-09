"use strict";


const $top = '.header__top-block';
const $search = '.header__search-block';

$(document).ready(function () {
    let heightTop;
    heightTop = $($top).outerHeight();
    $($search).css('top', heightTop + 'px');
});
