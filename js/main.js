if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        }, false);
    } else { 
        document.attachEvent('oncontextmenu', function() {
            window.event.returnValue = false;
        });
    }

function downloadClk () {
    window.location.href = 'https://1drv.ms/u/s!AsqGVIF15c0wj0Y5NLIWlc7j8Vq0';
}