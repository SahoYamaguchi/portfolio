window.onload = function () {
  // aタグの中身を分解
  var aTags = [].slice.call(document.getElementsByTagName("a"));

  // 未対応であるIEを除外するため、ブラウザの種別を洗う
  var userAgent = window.navigator.userAgent.toLowerCase();
  var isIE = ~userAgent.indexOf("msie") || ~userAgent.indexOf("trident");

  function addRels() {
    if (!isIE) {
      //IEは弾く
      aTags.forEach(function (el) {
        if (el.target === "_blank") {
          var rels = el.rel.split(" ");
          if (!~rels.indexOf("noopener")) {
            rels.push("noopener");
            el.setAttribute("rel", rels.join(" ").trim());
          }
          if (!~rels.indexOf("noreferrer")) {
            rels.push("noreferrer");
            el.setAttribute("rel", rels.join(" ").trim());
          }
        }
      });
    }
  }
  // 関数を実行
  addRels();
};

$(function () {
  $("#menu-btn").on("click", function () {
    // ハンバーガーメニューの位置を設定
    if ($(this).hasClass("open")) {
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).removeClass("open");
      $(".nav-menu").removeClass("open");
    } else {
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).addClass("open");
      $(".nav-menu").addClass("open");
    }
  });
  $(".nav-menu, .site").on("click", function () {
    if ($("#menu-btn").hasClass("open")) {
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $("#menu-btn").removeClass("open");
      $(".nav-menu").removeClass("open");
    }
  });
});
