var mn = $(".menu"),
    mnItem = mn.find(".menu__item");
dr = $(".dropdown__content"),
    drBg = $(".dropdown__bg"),
    drBgBtm = $(".dropdown__bg-bottom"),
    drArr = $(".dropdown__arrow"),
    drMenu = $(".dropdown-menu__content");
drCnt = $(".dropdown__content"),


    mnItem.on("mouseenter", function(e) {

        var item = $(this);
        var itemMeta = item[0].getBoundingClientRect();
        var sub = item.data('sub');
        var subCnt = $(sub).find(".dropdown-menu__content");
        var subMeta = subCnt[0].getBoundingClientRect();
        var subCntBtm = subCnt.find(".bottom-section");


        drBg.css({
            opacity: 1,
            left: itemMeta.left - ((subMeta.width / 2) - itemMeta.width / 2),
            width: subMeta.width,
            height: subMeta.height
        });
        drBgBtm.css({
            top: subCntBtm.position().top
        });
        drArr.css({
            opacity: 1,
            left: itemMeta.left + itemMeta.width / 2 - 10
        });
        drCnt.css({
            opacity: 1,
            left: itemMeta.left - ((subMeta.width / 2) - itemMeta.width / 2),
            width: subMeta.width,
            height: subMeta.height
        });

        subCnt.css({
            opacity: 1,
        });

        $("header").addClass("dropdown-active");

    });


mnItem.on('mouseleave', function(e) {
    var item = $(this);
    var sub = item.data('sub');
    var subCnt = $(sub).find(".dropdown-menu__content");


    // timeout = setTimeout(function() {
    // if (!menuHovered) {
    drBg.css({
        opacity: 0
    });
    drArr.css({
        opacity: 0,
    });
    subCnt.css({
        opacity: 0
    });

    $("header").removeClass("dropdown-active");

    // menuHovered = false;

    // clearTimeout( timeout );
    // }
    // }, 100);


});