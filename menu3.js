$(function () {
    //모달팝업
    $("#dialog-link").click(function (event) {
        $("#dialog").dialog("open");
        event.preventDefault();
    });

    $("#dialog").dialog({
        autoOpen: false,
        width: 400,
        buttons: [
            {
                text: "OK",
                click: function () {
                    $(this).dialog("close");
                }
            },
            {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

    // 슬릭

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    // 페스티벌
    // $(".images>li:nth-child(n+5)").hide();

    //체크박스
    $(".first_ul>li>input").click(function () {
        $(".images>li").hide();

        if (this.checked) {
            for (i = 0; i <= 2; i++) {
                if ($(".first_ul>li:eq(" + i + ")>input").is(":checked") == true) {
                    input_value = $(".first_ul>li:eq(" + i + ")>input:checked").val();
                    $(".images>li[title=" + input_value + "]").show();
                }
            }
        }
        //input을 해제하면
        else {
            empty_number = 0;
            for (i = 0; i <= 2; i++) {
                if ($(".first_ul>li:eq(" + i + ")>input").is(":checked") == false) {
                    input_value = $(".first_ul>li:eq(" + i + ")>input:checked").val();
                    $(".images>li[title=" + input_value + "]").hide();
                    empty_number++;
                }
                else {
                    input_value = $(".first_ul>li:eq(" + i + ")>input:checked").val();
                    $(".images>li[title=" + input_value + "]").show();
                }
            }
            if (empty_number == 3)
                $(".images>li:nth-child(-n+8)").show();
        }
    });

    //낮은가격순, 오름차순 a-b=>양수
    $(".last_ul>li:nth-child(1)>input").click(function () {
        // $( 'span.abc' ).appendTo( 'h1' );
        // abc를 클래스 값으로 가지는 span 요소를 h1 요소 안으로 이동시킵니다.

        $(".images li").sort(sort_li).appendTo('.images');
        function sort_li(a, b) {
            return ($(a).data('position') > $(b).data('position')) ? 1 : -1;
        }
    })

    //높은가격순, 내림차순 
    $(".last_ul>li:nth-child(2)>input").click(function () {
        $(".images li").sort(sort_li).appendTo('.images');
        function sort_li(a, b) {
            return ($(a).data('position') > $(b).data('position')) ? -1 : 1;
        }

    })

})