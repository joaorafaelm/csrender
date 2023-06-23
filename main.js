(function(){
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    const urls = {
        "test": "https://www.google.com",
        "test2": "https://globo.com",
        "maresias_v": "https://api2.enscape3d.com/v3/view/d9f9e5f3-eea8-47f4-92b9-46fe3a611d98",
    }
    if (page && urls[page]) {
        window.location.href = urls[page];
    }
 }());
