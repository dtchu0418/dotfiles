if (!background) {
  var background = (function () {
    let tmp = {};
    /*  */
    chrome.runtime.onMessage.addListener(function (request) {
      for (let id in tmp) {
        if (tmp[id] && (typeof tmp[id] === "function")) {
          if (request.path === "background-to-page") {
            if (request.method === id) {
              tmp[id](request.data);
            }
          }
        }
      }
    });
    /*  */
    return {
      "receive": function (id, callback) {
        tmp[id] = callback;
      },
      "send": function (id, data) {
        chrome.runtime.sendMessage({
          "method": id, 
          "data": data,
          "path": "page-to-background"
        }, function () {
          return chrome.runtime.lastError;
        });
      }
    }
  })();
  /*  */
  var config = {
    "pip": null, 
    "videos": []
  };
}

config.pip = false;
config.videos = [...document.querySelectorAll("video")];

if (config.videos && config.videos.length) {
  for (let i = 0; i < config.videos.length; i++) {
    let video = config.videos[i];
    if (video.readyState === 4) {
      if (video.paused === false) {
        if (video.requestPictureInPicture) {
          video.requestPictureInPicture();
          /*  */
          window.setTimeout(function () {
            background.send("notifications", {
              "top": window === window.top,
              "count": config.videos.length,
              "message": "Video Popout is active!"
            });
          }, 300);
        } else {
          window.setTimeout(function () {
            background.send("notifications", {
              "top": window === window.top,
              "count": config.videos.length,
              "message": "Video Popout is not supported in your browser!"
            });
          }, 300);
        }
        /*  */
        config.pip = true;
        break;
      }
    }
  }
  /*  */
  if (config.pip === false) {
    window.setTimeout(function () {
      background.send("notifications", {
        "top": window === window.top,
        "count": config.videos.length,
        "message": "Video is not loaded yet or it is paused!\nPlease play a video and try again."
      });
    }, 300);
  }
} else {
  background.send("notifications", {
    "message": "No video found!",
    "top": window === window.top,
    "count": config.videos.length
  });
}