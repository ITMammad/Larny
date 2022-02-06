if (location.protocol === "http:") {
    // location.protocol = "https:";
}
$server = location.protocol + "//" + location.host;
var api_server = $server + "/api";
var cookies = document.cookie.split("; ");
var $_COOKIE = [];
cookies.forEach((cookie) => {
    let c = cookie.split("=");
    $_COOKIE[c[0]] = c[1];
});
$(document).ready(function(){
  $(".js-tooltip").tooltip({ placement : "top" });
});
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
if ($_COOKIE["uname"] !==undefined || $_COOKIE["passw"] !==undefined || $_COOKIE["uname"] !=="out" || $_COOKIE["passw"] !=="out") {}else {
    if (location.pathname !== "/login/" || location.pathname !== "//login/" || location.pathname !== "//about/" || location.pathname !== "/about/") {
        location.pathname = "/login/";
    }
}
function splash() {
    if (document.querySelector(".splash") === null) {
        var splash = document.createElement("div");
        splash.classList.add("splash");
        splash.innerHTML = `<img src='assets/img/loader.svg'>`;
        document.body.appendChild(splash);
    }
}
function unsplash() {
    if (document.querySelector(".splash") !== null) {
        document.querySelector(".splash").remove();
    }
}
function Box(title , value , cls){
    $('body').css('height' , "100%");
  document.body.innerHTML += `
  <div class="${cls}" style='height: 100%;'>
  <div class='drk-bg'></div>
    <div class="modal-dialog Box" role="document">
      <div class="modal-content rounded-4 shadow">
        <div class="modal-body p-4 text-center">
          <h5 class="mb-0">${title}</h5>
          <p class="mb-0">${value}</p>
        </div>
        <div class="modal-footer flex-nowrap p-0">
          <button onclick="unBox('${cls}');" style="width: 100%;" type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right"><strong>تایید</strong></button>
        </div>
      </div>
    </div>
  </div>`;
}
function noneTitleBox(value , cls){
    $('body').css('height' , "100%");
  document.body.innerHTML += `
  <div class="Box modal-dialog Box ${cls}" role="document" style='height: 100%;'>
    <div class="modal-content rounded-4 shadow">
      <div class="modal-body p-4 text-center">
        <p class="mb-0">${value}</p>
      </div>
      <div class="modal-footer flex-nowrap p-0">
        <button onclick="unBox('${cls}');" style="width: 100%;" type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right"><strong>تایید</strong></button>
      </div>
    </div>
  </div>`;
}
function unBox(cls) {
  document.querySelector("." + cls).remove();
}
function showPDFBox(url) {
    $("body").css("height" , "100%");
    document.body.innerHTML += `
        <div class="PDFBox" style="display: contents;">
            <div style="display: contents;">
                <div class="drk-bg"></div>
            </div>
            <div class="PDFBox-header">
                <button class="btn text-white p-0" onclick="unShowPDFBox();"><i class="bi bi-x-square"></i></button>
            </div>
            <div class="PDFBox-container" style="display: none;">
                <object data='${$server}/uploaded/pdf/${url}' type='application/pdf' width='100%' height='100%'>
                    <div class="card" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">خطا!</h5>
                        <h6 class="card-subtitle mb-2 text-muted">پی دی اف پشتیبانی نمی شود...</h6>
                        <p class="card-text">مرورگر شما پی دی اف ها را پشتیبانی نمی کند؛برای دانلود روی این لینک کلیک کنید...</p>
                        <a href="${$server}/uploaded/pdf/${url}" class="card-link">دانلود</a>
                      </div>
                    </div>
                </object>
            </div>
        </div>
    `;
	$(".PDFBox-container").fadeIn(1500);
}
function unShowPDFBox() {
    document.querySelector(".PDFBox").remove();
}
window.onback = () => {
Navigate(location.href + location.pathname);
};