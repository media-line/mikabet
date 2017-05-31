"use strict";

import './objects-preview.scss';

const $title = '.objects-preview__title';
const $button = '.objects-preview__button';

$(document).ready(function () {
    $($title).each(function () {
        let heightTitle;
        heightTitle = $(this).outerHeight();

        $(this).siblings($button).css('height', heightTitle+'px');
    });
});
