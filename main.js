(function(){
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    const urls = {
        "test": "https://www.google.com",
        "test2": "https://globo.com",
    }
    if (page && urls[page]) {
        window.location.href = urls[page];
    }
 }());
