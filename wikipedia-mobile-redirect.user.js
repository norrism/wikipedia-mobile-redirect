// ==UserScript==
// @name       Wikipedia Mobile Redirect
// @author     Michael Norris
// @namespace  http://norrism.com
// @version    1.0.0
// @description  Redirects Mobile Wikipedia Links to Desktop Site
// @match      http://*.m.wikipedia.org/*
// @match      https://*.m.wikipedia.org/*
// @downloadURL    https://github.com/norrism/wikipedia-mobile-redirect/raw/master/wikipedia-mobile-redirect.js
// @run-at    document-start
// ==/UserScript==

var m_url = window.location.href;
var url = m_url.replace(".m.", ".");

window.location = url;
