// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:


const body = document.querySelector('body');
const image = document.getElementById('strangeFish');
const title = document.querySelector('.hero__title');
const subtitle = document.querySelector('.hero__subtitle');

body.style.backgroundColor = '#0a122d';
image.style.margin = '4rem 0';
image.style.borderRadius = '1rem';

title.style.position = 'relative';
title.style.top = '-10rem';
title.style.left = '50%';
title.style.transform = 'translateX(-50%)';

subtitle.style.position = 'relative';
subtitle.style.top = '-5rem';
subtitle.style.left = '50%';
subtitle.style.transform = 'translateX(-50%)';