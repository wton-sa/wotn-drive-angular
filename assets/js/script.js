(function ($) {
    "use strict"
    let theme_color = localStorage.getItem("themeColor");
    // let direction;
    // if ($('html')[0].lang == "ar") {
    //     direction = 'rtl'
    // } else {
    //     direction = 'ltr'
    // }
    if (theme_color === null) {
        theme_color = 'light';
    } else if (theme_color == 'dark') {
        jQuery('.dz-theme-mode').toggleClass("active");
        jQuery("body").attr("data-theme-version", "dark");
    }
    var dezSettingsOptions = {
        typography: "roboto",
        version: "light",
        layout: "vertical",
        headerBg: "color_1",
        navheaderBg: "color_3",
        sidebarBg: "color_1",
        sidebarStyle: "full",
        sidebarPosition: "fixed",
        headerPosition: "fixed",
        containerLayout: "wide",
        // direction: direction
    };
    new dezSettings(dezSettingsOptions);
    jQuery(window).on('resize', function () {
        new dezSettings(dezSettingsOptions);
    });

})(jQuery);



$(document).on('click', '.sweet-success', function (e) {
    swal({
            title: 'عمليه ناجحة',
            text: 'تم الحفظ بنجاح !!',
            type: 'success',
            confirmButtonText: 'إغلاق',
            buttons: {
                confirm: {
                    className: 'btn btn-success'
                },
            },
        }

    )
});
const dropdowns = document.querySelectorAll(".dropdown1");

dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle1");

    toggle.addEventListener("click", function (event) {
        event.preventDefault();
        dropdowns.forEach((d) => {
            if (d !== dropdown) d.classList.remove("active");
        });
        dropdown.classList.toggle("active");
    });
});
document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown1")) {
        dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
    }
});
// Close dropdown when clicking outside
const cards = document.querySelectorAll(".recent-file-card");

cards.forEach((menu) => {
    const toggle1 = menu.querySelector(".dots-menu");

    toggle1.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        cards.forEach((m) => {
            if (m !== menu) m.classList.remove("active");
        });
        menu.classList.toggle("active");
    });
});
document.addEventListener("click", function () {
    if (!event.target.closest(".file-action-menu")) {
        cards.forEach((menu) => menu.classList.remove("active"));
    }
});