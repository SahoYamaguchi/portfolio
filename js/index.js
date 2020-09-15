$(document).ready(function () {
  $("#photography .wrapper").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1346,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(function () {
  const OFFSET = 200; //ウインドウ上部からどれぐらいの位置で変化させるか
  let sectionTop = new Array();
  let current = -1;
  sectionTop[0] = 0;
  //各要素の位置
  $(".section_title").each(function (i) {
    sectionTop[i + 1] = $(this).offset().top;
  });
  changeBox(1);

  //スクロールした時の処理
  $(window).scroll(function () {
    for (let i = sectionTop.length - 1; i >= 0; i--) {
      if (
        $(window).scrollTop() > sectionTop[i] - OFFSET &&
        $(window).width() > 640
      ) {
        changeBox(i + 1);
        break;
      }
    }
  });

  //ナビの処理
  function changeBox(secNum) {
    if (secNum != current) {
      current = secNum;
      $(".nav-list-item").removeClass("on");
      $(".nav-list-item:nth-child(" + secNum + ")").addClass("on");
    }
  }

  $("#srcoll").click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $("#works");
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
