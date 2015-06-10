// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */

/*function checkTabsForSite(callback, site){
  //Query Info, populate window with tabs array
  var queryInfo = {
    populate: true
  };

  chrome.windows.getAll(queryInfo, function(windows){
    var sites = {};
    //Put tabs in the sites object if their url contains the site parameter.
    windows.forEach(function(wind){
      wind.tabs.forEach(function(tab){
        if(tab.url.search(site) !== -1){
          sites[tab.id] = tab.url;
        }
      });
    });
    callback(sites);
  });
}

function facebookSplinterer(tabs){
  tabs.forEach(function(tab){
    //DESTROY
  });
}

document.addEventListener('DOMContentLoaded', function() {
  checkTabsForSite(function(obj){console.log(obj);}, "facebook.com");
  
});*/

console.log("Scripts injected, 1");

/*var stream_pagelet = document.getElementById("stream_pagelet");
console.log(stream_pagelet);*/

//Main Stream - #stream_pagelet
//Notification button - #fbNotificationsJewel
//Right side trending - #pagelet_trending_tags_and_topics
//Right side (with trending?) - #pagelet_ego_pane
//Right side (with trending?) - #invite_coworker_pagelet
//Right side (with trending?) - #work_mobile_upsell_pagelet
//Chat pane on right - #pagelet_sidebar
//Left side navigation bar - #pagelet_navigation


