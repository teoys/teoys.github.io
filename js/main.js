if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        }, false);
    } else { 
        document.attachEvent('oncontextmenu', function() {
            window.event.returnValue = false;
        });
    }

function downloadLatestClk () {
    window.location.href = 'https://1drv.ms/u/s!AsqGVIF15c0wj0Y5NLIWlc7j8Vq0';
}

function downloadVer002 () {
    window.location.href = 'https://drive.google.com/open?id=1zB7Mo1h1rGfFJH0flXxUinKxJIlIyj8m';
}

function downloadVer001 () {
    window.location.href = 'https://drive.google.com/open?id=1amC7oPmDQrBt6OcpR7yCmjKNzAlxndGF';
}