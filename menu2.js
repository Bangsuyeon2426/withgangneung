$(function () {
  //slick
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 1500,
    index: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  //더보기 버튼
  //처음상태-이미지를 3번 이후부터 숨기기 (8개만 보임)
  $(".menulist>li:nth-child(n+9)").hide()

  $(".plus>button").click(function () {
    number = $(".menulist>li:visible").length;
    number = Math.floor(number / 4) * 4;
    if (number > $(".menulist>li").length + 1) return false;
    else {
      $(".menulist>li").hide();
      $(".menulist>li:nth-child(-n+" + (number + 4) + ")").show();
    }
  });
})