const SDANDROID = "https://nqxhbdl.doido123.com/wheng/wanhengbuyu.apk"; // Android
const SDIOS = "itms-services://?action=download-manifest&url=https://nqxhbdl.doido123.com/wheng/whby.plist"; // iOS

wechatOrQQBrowser();

const $btnDown = $('#download');
$btnDown.click(function () {
    deviceType();
});

$('.whbymask').click(function () {
});

function wechatOrQQBrowser() {
    const ua = window.navigator.userAgent.toLocaleLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/ QQ\//i) == " qq\/") {
        $('.whbymask').show();
        $('.showbg').hide();
    } else {
        $('.whbymask').hide();
        $('.showbg').show();
    }
}

function deviceType() {
    const u = navigator.userAgent;
    const AdrType = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 || u.indexOf('android') > -1 || u.indexOf('linux') > -1 || u.indexOf('Windows') > -1;
    const iOSType = u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1 || !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('Mac OS X') > -1;
    if (AdrType) {
        window.location.href = SDANDROID;
    } else if (iOSType) {
        window.location.href = SDIOS;
    }
}