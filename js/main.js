function scrollPos(pos) {
    if (pos >= 1300) {
        $(".go-top").css("bottom","20px");
    } else {
        $(".go-top").css("bottom","-100px");
    }
}

$(".go-top").click(function(){
    $(window).scrollTop(0);
});

window.onscroll = function() {
    scrollPos($(window).scrollTop());
};

$(".scroll-down-header").click(function(){
    document.getElementsByTagName("main")[0].scrollIntoView();
});

$(document).ready(function() {
    scrollPos($(window).scrollTop());
});

setTimeout(()=>{
    //Leader Line
    let f1_f2 = new LeaderLine(
        document.querySelector('.feature-1 .col-7'),
        document.querySelector('.feature-2 .col-7'),
    );

    f1_f2.setOptions({
        startPlug:"behind", endPlug:"square",
        startSocket:"right", endSocket: "right",
        color: "#010134"
    });

    f1_f2.path = "grid";

    let f2_f3 = new LeaderLine(
        document.querySelector('.feature-2 .col-7'),
        document.querySelector('.feature-3 .col-7'),
    );

    f2_f3.setOptions({
        startPlug:"behind", endPlug:"square",
        startSocket:"left", endSocket: "left",
        color: "#010134"
    });

    f2_f3.path = "grid";

    /////FAQ

    let q1_q2 = new LeaderLine(
        document.querySelector('.faq-1'),
        document.querySelector('.faq-2'),
    );

    q1_q2.setOptions({
        startPlug:"behind", endPlug:"square",
        startSocket:"left", endSocket: "left",
        color: "gray"
    });

    q1_q2.path = "grid";

    let q2_q3 = new LeaderLine(
        document.querySelector('.faq-2'),
        document.querySelector('.faq-3'),
    );

    q2_q3.setOptions({
        startPlug:"behind", endPlug:"square",
        startSocket:"right", endSocket: "right",
        color: "gray"
    });

    q2_q3.path = "grid";

    let q3_q4 = new LeaderLine(
        document.querySelector('.faq-3'),
        document.querySelector('.faq-4'),
    );

    q3_q4.setOptions({
        startPlug:"behind", endPlug:"square",
        startSocket:"left", endSocket: "left",
        color: "gray"
    });

    q3_q4.path = "grid";

    let q4_q5 = new LeaderLine(
        document.querySelector('.faq-4'),
        document.querySelector('.faq-5'),
    );

    q4_q5.setOptions({
        startPlug:"behind", endPlug:"square",
        startSocket:"right", endSocket: "right",
        color: "gray"
    });

    q4_q5.path = "grid";
}, 10);