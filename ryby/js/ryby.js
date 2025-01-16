const RYANDROID = "https://nqxhbdl.doido123.com/ruyi/ruyibuyu.apk"; // Android
const RYIOS = "itms-services://?action=download-manifest&url=https://nqxhbdl.doido123.com/ruyi/ruyi.plist"; // iOS

wechatOrQQBrowser();

const $btnDown = $('#download');
$btnDown.click(function () {
    deviceType();
});

$('.rybymask').click(function () {
});

function wechatOrQQBrowser() {
    const ua = window.navigator.userAgent.toLocaleLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/ QQ\//i) == " qq\/") {
        $('.rybymask').show();
        $('.showbg').hide();
    } else {
        $('.rybymask').hide();
        $('.showbg').show();
    }
}

function deviceType() {
    const u = navigator.userAgent;
    const AdrType = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 || u.indexOf('android') > -1 || u.indexOf('linux') > -1 || u.indexOf('Windows') > -1;
    const iOSType = u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1 || !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('Mac OS X') > -1;
    if (AdrType) {
        window.location.href = RYANDROID;
    } else if (iOSType) {
        window.location.href = RYIOS;
    }
}