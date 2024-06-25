var core = {
  "action": {
    "storage": function (changes, namespace) {
      /*  */
    },
    "notifications": function (e) {
      if (e.count || e.top) {
        app.notifications.create({
          "message": e.message,
          "title": "Video Popout"
        });
      }
    },
    "button": function (tab) {
      if (tab) {
        app.tab.inject.js({
          "target": {
            "tabId": tab.id,
            "allFrames": true
          },
          "files": [
            "data/content_script/inject.js"
          ]
        }, app.error);
      }
    }
  }
};

app.on.storage(core.action.storage);
app.button.on.clicked(core.action.button);
app.page.receive("notifications", core.action.notifications);
