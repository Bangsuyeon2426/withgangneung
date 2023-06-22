$(function () {

    //슬라이드
    $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrow: true,
        //fade:true,
        //speed:1000,
    });

    $(".labindex").hide();
    $(window).scroll(function () {
        var scrollTopval = $(this).scrollTop();
        //alert(scrollTopval);
        if (scrollTopval >= 200) {
            $(".labindex").fadeIn('slow');
        }
        if (scrollTopval >= 1300) {
            setInterval(numbering, 10);
        }
    });

    number = 0;
    function numbering() {
        if (number < 300) {
            number++;
            $(".img>p").text(number);
        }
        else return false;
    }

    //상품슬라이드
    //next 0-1-2-3.....
    function product_next() {
        $(".product>div>ul").animate({ left: "-320px" }, 800, function () {
            $(".product>div>ul>li:first").appendTo(".product>div>ul");
            $(".product>div>ul").css("left", "0px");
        })
    }

    var clear1 = setInterval(product_next, 3000);

    $(".product_next").click(function () {
        clearInterval(clear1);
        product_next();
        return false;
    });

    //pre 0-1-2-3.....
    function product_pre() {
        $(".product>div>ul>li:last").prependTo(".product>div>ul");
        $(".product>div>ul").css("left", "-320px");
        $(".product>div>ul").animate({ left: "0px" }, 800);
    }

    $(".product_pre").click(function () {
        clearInterval(clear1);
        product_pre();
        return false;
    });

    // 타이핑
    const text = "WITH 강릉을 검색해봐!!";
    let index = 0;
    let isVisible = true;

    function typeText() {
        const element = document.getElementById("typing-text");

        if (isVisible) {
            element.textContent = text.substring(0, index + 1);
            index = (index + 1) % text.length;
            if (index === text.length - 1) {
                setTimeout(() => {
                    isVisible = false;
                    typeText();
                }, 1000); // 1초 후에 텍스트를 사라지게 설정
            } else {
                setTimeout(typeText, 200); // 200ms마다 호출하여 다음 글자 출력
            }
        } else {
            element.textContent = "";
            isVisible = true;
            setTimeout(typeText, 500); // 0.5초 후에 텍스트를 나타내게 설정
        }
    }

    typeText(); // 초기에 한 번 텍스트를 나타냄

    // 다양한 갈거리 hover 텍스트


    //이모저모 스르륵 나타나기


})
