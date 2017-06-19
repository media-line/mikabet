"use strict";


const $top = '.header__top-block';
const $search = '.header__search-block';
const $pageInner = '.page-inner';

$(document).ready(function () {
    let heightTop;
    heightTop = $($top).outerHeight();
    $($search).css('top', heightTop + 'px');

    if ($($pageInner).length > 0) {
        $($pageInner).css('padding-top', heightTop + 'px')
    }
});
