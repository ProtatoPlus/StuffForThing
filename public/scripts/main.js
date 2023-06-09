const
    main = document.querySelector('main') || {},
    form = document.querySelector('form') || {},
    input = !form=={} ? form.querySelector('input') : {},
    title = localStorage.getItem('title'),
    icon = localStorage.getItem('icon');
    pageicon = document.getElementById("pageicon")

//Stealth Mode JS

function stealth() {
    const iframe_frame = document.getElementById("iframe_frame");
    iframe_frame.style.display = "initial";
    main.style.display = "none";
    iframe_frame.setAttribute("src", "/go/gateway?url=" + input.value);
};

function womStealth() {
    const iframe_frame = document.getElementById("iframe_frame");
    iframe_frame.style.display = "initial";
    main.style.display = "none";
    var url = document.getElementById("womurl").value;
    if (url.includes(".")) {
        iframe_frame.setAttribute("src", "https://w." + document.domain + "/main/" + url);
    } else {
        iframe_frame.setAttribute("src", "https://w." + document.domain + "/main/" + "https://searx.degenerate.info/search?q=" + url.replace(/ /g, "+"));
    }
};

function pyStealth() {
    const iframe_frame = document.getElementById("iframe_frame");
    iframe_frame.style.display = "initial";
    main.style.display = "none";
    var url = document.getElementById("pruorl").value;
    if (url.includes(".")) {
        iframe_frame.setAttribute("src", "https://docs." + document.domain + "/main/" + url);
    } else {
        iframe_frame.setAttribute("src", "https://docs." + document.domain + "/main/" + "https://searx.degenerate.info/search?q=" + url.replace(/ /g, "+"));
    }
};

//Tab Cloaking JS
function tabtitle() {
    const titlechange = document.getElementById("tabtitle");
    window.localStorage.setItem("title", titlechange.value);
    window.document.title = titlechange.value;
};

if (window.localStorage.hasOwnProperty('title')) {
    document.title = title;
};

//Tab Icon
function tabicon() {
    const titlechange = document.getElementById("tabtitle");
    document.head.querySelector("link[rel=icon]").href = titlechange.value;
    window.localStorage.setItem("icon", titlechange.value);
    loadPicture()
};

if (window.localStorage.hasOwnProperty("icon")) {
    document.querySelector("link[rel=icon]").href = icon;
};

//Sets image to the tab icon
function loadPicture() {
    if (window.localStorage.hasOwnProperty("icon")) {
        pageicon.setAttribute("src", localStorage.getItem("icon"));
    } else {
        pageicon.setAttribute("src", "/images/Degener.png");
    };
};

//Clears Tab Icon and Title
function resetTab() {
    let items = ["icon", "title"];

    items.forEach(item =>
        localStorage.removeItem(item));
    window.location.reload();
    pageicon();
};