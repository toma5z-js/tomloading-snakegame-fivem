var audio = `<div data-video=${config.videoID} data-autoplay="1" data-loop="1" id="youtube-audio"> </div>`;
if (config.music) { 
 $("body").append(audio);
 $(".title").text(config.title)
 $("#info").delay(1400).fadeIn(1000);
}

if(config.showTips){
    $("#news").show();
}

$("#bg").fadeIn(1000);
$("#container").fadeIn(5000);

$(function () {
    var list = config.images.forEach(appen)
    function appen(i) {
        document.getElementById("bg").innerHTML= document.getElementById("bg").innerHTML + `<img width="100%"height="100%" src=images/${i}>`;
}
    function random(pp) {
        return Math.floor(Math.random() * pp);
    }
    var img = $('div#bg img');
    var len = img.length;
    var current = random(len);
    img.hide();
    img.eq(current).show();

    var transition = setInterval(function () {
        img.eq(current).fadeOut(config.transitionInterval, function () {
            current = random(len);
            img.eq(current).fadeIn(config.transitionInterval);
        });
    }, 2 * config.transitionInterval + 8000);
})
 

const colorThief = new ColorThief();
const img = document.querySelector('.logo');

if (img.complete) {
  $("#container").css('border-left-color', 'rgb(' + colorThief.getColor(img) + ')')
} else {
  img.addEventListener('load', function() {
    $("#container").css('border-left-color', 'rgb(' + colorThief.getColor(img) + ')')   
  });
}

var title = Object.keys(text);
var i = 0;
var changeText = function(){
	    if(i == title.length){
			i = 0;
		}
		$("#hl").html(title[i]);
		$("#content").html(text[title[i]]);
        $("#hl, #content").hide().fadeIn(config.transitionInterval).delay(8000 - 2 * config.transitionInterval).fadeOut(config.transitionInterval);
		i++;
}
changeText();
setInterval(changeText, 8000);

function onYouTubeIframeAPIReady() {
var e = document.getElementById("youtube-audio"), 
t = document.createElement(null); 
e.appendChild(t); var a = document.createElement("div"); 
a.setAttribute("id", "youtube-player"), e.appendChild(a); 
var o = function (e) {}; 
    e.onclick = function () { r.getPlayerState() === YT.PlayerState.PLAYING || r.getPlayerState() === YT.PlayerState.BUFFERING ? (r.pauseVideo(), o(!1)) : (r.playVideo(), o(!0)) }; var r = new YT.Player("youtube-player", { height: "0", width: "0", videoId: e.dataset.video, playerVars: { autoplay: e.dataset.autoplay, loop: e.dataset.loop }, events: { onReady: function (e) { r.setPlaybackQuality("small"), r.setVolume(config.musicVolume) 
    o(r.getPlayerState() !== YT.PlayerState.CUED) }, 
    onStateChange: function (e) { e.data === YT.PlayerState.ENDED && o(!1) } } }) 
}

var count = 0;
var thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector('.progress').style.width = ((data.idx / count) * 100) + '%';
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;

        document.querySelector('.progress').style.width = ((thisCount / count) * 100) + '%';
    }
};

window.addEventListener('message', function (e) {
    (handlers[e.data.eventName] || function () { })(e.data);
});


