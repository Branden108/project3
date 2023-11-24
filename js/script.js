function initMap(){
  let mtPoint = { lat: 42.1223, lng: -88.3732 };
  let map = new google.maps.Map(
    document.getElementById('map'), {zoom: 12, center: mtPoint}
  );
  let marker = new google.maps.Marker({position: mtPoint, map: map});
}


window.onload = function () {
  const swiper = new Swiper('.swiper', {

    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
