function link (path) {
    $(".container").fadeOut(300, function () {
        $(".container").load(path + " .blurb", function () {
            $(".container").fadeIn(300);
        });
    });
}
