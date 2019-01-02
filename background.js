// Now we take controls on those external links :)

console.log("background launched for Decollected");


// Completely block these malwares
chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
          console.log("Decollected: Block " + details.url);
          return {cancel: true};
        },
        {urls: [
          "*://bcp.crwdcntrl.net/*",
          "*://idsync.rlcdn.net/*",
          "*://*.googletagmanager.com/*",
          "*://*.googlecommerce.com/*",
          "*://*.googlesyndication.com/*",
          "*://connect.facebook.net/*",
          "*://graph.facebook.net/*",
          "*://lookaside.facebook.net/*",
          "*://*.google-analytics.com/*",
          "*://adservice.google.ca/*",
          "*://adservice.google.fr/*",
          "*://adservice.google.com/*",
          "*://aos-creative.prf.hn/*",
          "*://*.criteo.com/*",
          "*://improving.duckduckgo.com/*",
          "*://*.doubleclick.net/*",
          "*://*.googletagservices.com/*",
          "*://*.googletagservices.ca/*",
          "*://*.googletagservices.fr/*",
          "*://a.quora.com/*",
          "*://*.typekit.net/*",
          "*://referrer.disqus.com/*",
          "*://play.google.com/*",
          "*://secure.quantserve.com/*",
          "*://i.stack.imgur.com/*",
          "*://sb.scorecardresearch.com/*",
          "*://*.newrelic.com/*",
          "*://autolinkmaker.itunes.apple.com/*",
          "*://cse.google.com/*",
          "*://cse.google.ca/*",
          "*://cse.google.fr/*",
          "*://*.onesignal.com/*",
          "*://*.skimresources.com/*",
          "*://platform.twitter.com/*",
          "*://syndication.twitter.com/*",
          "*://*.consensu.org/*",
          "*://*.tougaloocolerain.com/*",
          "*://ws-na.amazon-adsystem.com/*",
          // "*://*.wp.com/*",
          "*://*.zohostatic.com/*",
          "*://*.zohopublic.com/*",
          "*://pd.trysera.com/*",
          "*://m.addthis.com/*",
          "*://m.addthisedge.com/*",
          "*://s7.addthis.com/*",
          "*://*.hsforms.com/*",
          "*://*.hs-scripts.com/*",
          "*://*.hsforms.net/*",
          "*://js.usemessages.com/*",
          "*://*.chartbeat.com/*",
          "*://*.google.com/ads/*",
          "*://trk.kissmetrics.com/*"
          ] },
        ["blocking"]);

// Remose User-Agent to make identification more complex
chrome.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
          console.log("remove user-agent");
          for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'User-Agent') {
              details.requestHeaders[i].value = "Decollected Chrome";
              break;
            }
          }
          return {requestHeaders: details.requestHeaders};
        },
        {urls: [
          "*://*.duckduckgo.com/*",
          "*://*.googleapis.com/*",
          "*://*.myfonts.net/*",
          "*://*.unpkg.com/*",
          "*://*.smartsheet.com/*"
        ]},
        ["blocking", "requestHeaders"]);

// Remove Referrer to make navigation more private
chrome.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
          console.log("remove Referer");
          for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'Referer') {
              details.requestHeaders.splice(i, 1);
              break;
            }
          }
          return {requestHeaders: details.requestHeaders};
        },
        {urls: [
          "*://*.duckduckgo.com/*",
          "*://*.googleapis.com/*",
          "*://*.unpkg.com/*"
        ] },
        ["blocking", "requestHeaders"]);

// Remove all Cookies
chrome.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
          console.log("remove Cookies");
          var j = 0;
          for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'Cookie') {
              details.requestHeaders.splice(i, 1);
              j = j+1;
            }
            if( j > 0 ) { console.log("Cookies : " + j); }
          }
          return {requestHeaders: details.requestHeaders};
        },
        {urls: [
          "*://*.duckduckgo.com/*",
          "*://*.googleapis.com/*",
          "*://*.myfonts.net/*",
          "*://*.unpkg.com/*"
        ] },
        ["blocking", "requestHeaders"]);

console.log("Decollected ready!");

