$(function () {
    buildScrollbar($(".horizon-scroll").children().length);
  
    var isScroll = false;
    $(".horizon-scroll").data("current", 0);
    $(".horizon-scroll").mousewheel(function (eo, delta) {
      if (isScroll) return;
      isScroll = true;
      horizonScroll(delta);
      setTimeout(function () {
        isScroll = false;
      }, 300);
    });
  
    function buildScrollbar(scrollCount) {
      const maxLength = 300;
      const unitLength = 50;
      let length = unitLength * scrollCount;
      if (maxLength < length) length = maxLength;
      let html =
        '<div style="height: ' + length + 'px;"><span id="scroll"></span></div>';
      $(".scrollbar").append(html);
      $(".scrollbar").click(function (e) {
        const clickY = e.pageY - $(".scrollbar").position().top;
        const currentScrollPositionTop = $("#scroll").position().top;
        const currentScrollPositionBottom =
          $("#scroll").position().top + unitLength;
        if (clickY < currentScrollPositionTop) {
          horizonScroll(1);
        } else if (currentScrollPositionBottom < clickY) {
          horizonScroll(-1);
        }
      });
  
      $("#scroll").draggable({
        axis: "y",
        containment: ".scrollbar",
        scroll: false,
        drag: function () {
          setCurrentPage(
            -Math.floor(
              ($("#scroll").position().top + unitLength / 2 - 1) / unitLength
            )
          );
        },
        start: function () {
          $("#scroll").css("transition", "0s");
        },
        stop: function () {
          $("#scroll").css("transition", "0.5s");
          horizonScroll(0);
          $("#scroll").css("top", "0");
        }
      });
    }
  
    function horizonScroll(value) {
      let nextPageIndex = parseInt($(".horizon-scroll").data("current")) + value;
      if (
        0 < nextPageIndex ||
        $(".horizon-scroll").children().length <= Math.abs(nextPageIndex)
      )
        return;
      setCurrentPage(nextPageIndex);
      $(".scrollbar > div > span").css(
        "transform",
        "translateY(" + -(nextPageIndex * 100) + "%)"
      );
    }
  
    function setCurrentPage(pageIndex) {
      if (parseInt($(".horizon-scroll").data("current")) === parseInt(pageIndex))
        return;
      $(".horizon-scroll").data("current", pageIndex);
      $(".horizon-scroll > li").css(
        "transform",
        "translateX(" + pageIndex * 100 + "%)"
      );
    }
  });
  