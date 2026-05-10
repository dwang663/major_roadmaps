jQuery(document).ready(function () {
    jQuery.getJSON("/sites/default/files/course-data/2026-04-02-13-55.json", function (obj) {
        jQuery("a.tooltip").each(function () {
            const link = jQuery(this);

            const code = link.contents().filter(function () {
                return this.nodeType === 3; 
            }).text().trim();

            const description = obj[code];
            if (description) {
                link.find(".tooltiptext").text(description);
            }
        });
    });

    jQuery(".tooltip").on("mouseenter", function () {
        const tooltip = jQuery(this).find(".tooltiptext");
        const elementTop = jQuery(this).offset().top;
        const scrollTop = jQuery(window).scrollTop();
        const screenHeight = jQuery(window).height();

        const elementPositionInViewport = elementTop - scrollTop;

        if (elementPositionInViewport > screenHeight / 2) {
            tooltip.removeClass("bottom").addClass("top");
        } else {
            tooltip.removeClass("top").addClass("bottom");
        }
    });

    if (!jQuery('#table_wrap').hasClass('columns-1')) {
        jQuery('.opt1, .opt2, .opt3, .opt4').click(function() {
            if (jQuery(this).hasClass('opt1')) {
                if (jQuery(this).hasClass('opt_select')) {
                    jQuery('.col1, .col2, .col3, .col4').removeClass('col_select');
                    jQuery('.opt1, .opt2, .opt3, .opt4').removeClass('opt_select');
                } else {
                    jQuery('.col2, .col3, .col4').removeClass('col_select');
                    jQuery('.opt2, .opt3, .opt4').removeClass('opt_select');
                    jQuery('.col1').addClass('col_select');
                    jQuery('.opt1').addClass('opt_select');
                }
            } else if (jQuery(this).hasClass('opt2')) {
                if (jQuery(this).hasClass('opt_select')) {
                    jQuery('.col1, .col2, .col3, .col4').removeClass('col_select');
                    jQuery('.opt1, .opt2, .opt3, .opt4').removeClass('opt_select');
                } else {
                    jQuery('.col1, .col3, .col4').removeClass('col_select');
                    jQuery('.opt1, .opt3, .opt4').removeClass('opt_select');
                    jQuery('.col2').addClass('col_select');
                    jQuery('.opt2').addClass('opt_select');
                }
            } else if (jQuery(this).hasClass('opt3')) {
                if (jQuery(this).hasClass('opt_select')) {
                    jQuery('.col1, .col2, .col3, .col4').removeClass('col_select');
                    jQuery('.opt1, .opt2, .opt3, .opt4').removeClass('opt_select');
                } else {
                    jQuery('.col1, .col2, .col4').removeClass('col_select');
                    jQuery('.opt1, .opt2, .opt4').removeClass('opt_select');
                    jQuery('.col3').addClass('col_select');
                    jQuery('.opt3').addClass('opt_select');
                }
            } else if (jQuery(this).hasClass('opt4')) {
                if (jQuery(this).hasClass('opt_select')) {
                    jQuery('.col1, .col2, .col3, .col4').removeClass('col_select');
                    jQuery('.opt1, .opt2, .opt3, .opt4').removeClass('opt_select');
                } else {
                    jQuery('.col1, .col2, .col3').removeClass('col_select');
                    jQuery('.opt1, .opt2, .opt3').removeClass('opt_select');
                    jQuery('.col4').addClass('col_select');
                    jQuery('.opt4').addClass('opt_select');
                }
            }
        });
    }

    // Hover control
    jQuery('.hover_control img').click(function() {
        if (jQuery(this).hasClass('hover_on')) {
            jQuery('.hover_on').removeClass('hover_state_off').addClass('hover_state_on');
            jQuery('.hover_off').removeClass('hover_state_on').addClass('hover_state_off');
            jQuery('.tooltip_off').addClass('tooltiptext').removeClass('tooltip_off')
        } else if (jQuery(this).hasClass('hover_off')) {
            jQuery('.hover_on').removeClass('hover_state_on').addClass('hover_state_off');
            jQuery('.hover_off').removeClass('hover_state_off').addClass('hover_state_on');
            jQuery('.tooltiptext').removeClass('tooltiptext').addClass('tooltip_off')
        }
    });
    jQuery('.hover_control .hover_on').hover(
        function() {
            jQuery('.hover_desc').html('Show Descriptions');
        },
        function() {
            jQuery('.hover_desc').html('');
        }
    );
    jQuery('.hover_control .hover_off').hover(
        function() {
            jQuery('.hover_desc').html('Hide Descriptions');
        },
        function() {
            jQuery('.hover_desc').html('');
        }
    );


    // Outcomes tabs
console.log('end jq');
});
console.log('end scripts');