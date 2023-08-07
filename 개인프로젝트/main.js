$('.bi').hover(function () {
  $(this).toggleClass('hover');
});
$('.bi').on('click', function () {
  $(this).append(`<div class="card text-center">
    <div class="card-header">
      ${'Featured'}
    </div>
    <div class="card-body">
      <h5 class="card-title">${'Special title treatment'}</h5>
      <p class="card-text"></p>
      <input class="btn btn-primary" type="submit" value="Submit">
    </div>
    <div class="card-footer text-body-secondary">
      ${'2 days ago'}
    </div>`);
});
