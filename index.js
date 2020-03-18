'use strict';

function main(){
$('.thumbnails').click(e =>
  e.preventDefualt();

  const imgSrc = (e.currentTarget()).find('img').attr('src');
  const imgAlt = e.currentTarget().find('img').attr('alt');

  console.log(imgSrc);

);

}

$(main);