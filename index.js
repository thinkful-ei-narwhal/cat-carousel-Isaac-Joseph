'use strict';

function main(){
$('.thumbnail').click(e => {
  e.preventDefault();

  const imgSrc = $(e.currentTarget).find('img').attr('src');
  const imgAlt = $(e.currentTarget).find('img').attr('alt');

  console.log(imgSrc);
  console.log(imgAlt);

  $('.hero img').attr('alt', imgAlt);
  $('.hero img').attr('src', imgSrc);
});

}

$(main);