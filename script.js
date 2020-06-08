let counter = 0;

$('.inc').click(() => {
    counter = counter + 1,
    $('h2').text(`${counter}`)
  });

$('.dec').click(() => {
    counter = counter - 1,
    $('h2').text(`${counter}`)
  });

$('.res').click(() => {
    counter = 0,
    $('h2').text(`${counter}`)
  });