var GOOGLE_AUTH_URL_RE = /^https:\/\/accounts.google.com/;

function updateOnlineStatus (doc) {
  var offlineDiv = doc.getElementById('offline');
  var connectingDiv = doc.getElementById('connecting');
  if (navigator.onLine) {
    offlineDiv.style.display = 'none';
    connectingDiv.style.display = 'block';
  } else {
    offlineDiv.style.display = 'block';
    connectingDiv.style.display = 'none';
  }
};

function authenticateByGoogle(homeWebview, authWebview, authUrl) {
  homeWebview.style.display = 'none';
  authWebview.style.display = 'block';

  authWebview.src = authUrl;

  // On completion, Google will reload its window.opener, the homeWebview
  // so hide the auth webview. (The homeWebview gets displayed by other listener.)
  homeWebview.addEventListener('loadstop', function(e) {
    authWebview.style.display = 'none';
  });
}

function windowCreated (chromeWindow) {
  var window = chromeWindow.contentWindow;

  chromeWindow.contentWindow.onload = function() {
    var homeWebview = window.document.getElementById('remind-home')
    var authWebview = window.document.getElementById('remote-auth');

    this.addEventListener('online', updateOnlineStatus.bind(this, window.document));
    this.addEventListener('offline', updateOnlineStatus.bind(this, window.document));
    // set the status initially too, before it changes
    updateOnlineStatus(window.document);

    homeWebview.addEventListener('loadstop', function(e) {
      // swap in the webview
      e.target.style.display = 'block';
      window.document.getElementById('online-status').style.display = 'none';
    });

    homeWebview.addEventListener('newwindow', function(e) {
      e.preventDefault();

      var isAuth = GOOGLE_AUTH_URL_RE.test(e.targetUrl);

      if (isAuth) {
        authenticateByGoogle(homeWebview, authWebview, e.targetUrl);
      } else {
        chrome.browser.openTab({url: e.targetUrl});
      }
    });
  };
};

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    outerBounds: {
      minWidth: 1024,
      minHeight: 768
    },
    frame: {
      color: '#4687DF',
    }
  }
  , windowCreated);
});
