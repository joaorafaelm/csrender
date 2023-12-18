(function(){
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    const urls = {
        "baleia_u": "https://api2.enscape3d.com/v3/view/link/72c112f7-afd9-4e3d-b5c2-8075d07acf0e/9172b292-b90f-4ee8-b6fa-511d54416730",
        "baleia_t": "https://api2.enscape3d.com/v3/view/link/5e301ec5-01d9-4f11-bb61-19ea140b7e54/2807e5c7-a28c-467a-adc8-695c97e4eba2",
        "maresias_v": "https://api2.enscape3d.com/v3/view/link/2aef7fb8-80d7-4e58-b93b-139b5d651fd7/a4be15e9-01f0-41d8-94ea-60ec43f51d2a",
        "bertioga_d3_1": "https://api2.enscape3d.com/v3/view/link/33a15a58-3d80-4635-aa14-c789b3d261fd/635bdc48-4dab-471a-a798-0284571970aa",
        "bertioga_d3_2": "https://api2.enscape3d.com/v3/view/link/7b9a34f5-ce4a-492e-89d2-234221cea7da/60adecec-2bc7-4469-8749-90e1fabdfb08",
        "/docs/baleia_t": "https://www.linkedin.com/",
        "/docs/baleia_u": "https://facebook.com/",
        "/docs/maresias_v": "https://www.instagram.com/",
        
        
    }
    if (page && urls[page]) {
        window.location.href = urls[page];
    }
 }());
