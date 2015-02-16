(function($){

    $(function(){

        // Hide code blocks an add a toggle button to each example that will
        // show/hide the code block for that example.
        $(".sg-code").hide();
        $(".sg-canvas").each(function() {
            var $toggle = $("<button class=sg-code-toggle>Show Markup</button>");
            $(this).append($toggle);
        });
        $(".sg-code-toggle").on("click", function() {
            var $code = $(this).parents(".sg-example").first().find(".sg-code").first();
            if ($code.length) {
                $code.toggle();
                $(this).text($code.is(":visible") ? "Hide Markup" : "Show Markup");
            }
        });

        // Setup table of contents navigation
        $(".sg-toc").tocify({
            selectors: "h2.sg,h3.sg",
            highlightDefault: false,
            theme: "none",
            showEffect: "none",
            hideEffect: "none",
            smoothScroll: false,
            showAndHide: true
        });

    });

}(window.jQuery));
