<script src="jssor.slider.min.js"></script>
<script>
    jssor_slider1_starter = function (containerId) {
        //Define an array of slideshow transition code
        var _SlideshowTransitions = [
        { code1 },
        { code2 },
        { code3 }
        ];
        var options = {
            $AutoPlay: true,
            $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: _SlideshowTransitions,
                    $TransitionsOrder: 1,
                    $ShowLink: true
                }
        };
        var jssor_slider1 = new $JssorSlider$(containerId, options);
    };
</script>
