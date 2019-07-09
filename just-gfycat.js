// ==UserScript==
// @name         Just Gfycat
// @description  Autoredirect Gfycat links to just the video. Faster and cleaner than the shell page with all the extra shit. Breaks regular Gfycat pages.
// @match        *://gfycat.com/*
// @version      0.1.0
// @grant        none
// @author       github.com/drylynch
// @run-at       document-start
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAHpJREFUOE+1kEsOgDAIRFl4/ytjaSFQOhQ3vuTFfmaIShX8EEf1uCcXsxo7Yea2bGplBwVvam2xXRq3tWeLAfaMxDvPFq9uVPvgzwOEuM+5IR4gGnmdPH8i0jjPZ7//DAFn1gABXDr5bjg7cYCAgkiNY1AhqrGeb0WiF6PS1pL+QM0uAAAAAElFTkSuQmCC
// ==/UserScript==


/*

links that go to the shell page don't always have a filename that reflects the raw video's filename: it's always lowercase, can be custom, and can contain extra tags not found in the filename. files can also be on different servers (eg giant.gfycat.com, zippy.gfycat.com)
so the only way to grab the real raw video is basically emulating right click > view video.

this script constantly polls only gfycat pages until the source video url is found, then goes directly to it.
it does break regular pages, intended only for vid links (like https://gfycat.com/OneTwoThree)

*/


(function() {

const WEBM_CONTAINER = '.video-container video source';  // css selector of element with video link
const INTERVAL_TIME = 10;  // time in ms to wait between each check

function redirect() {
  let source = document.querySelector(WEBM_CONTAINER);  // grab webm url element
  if (typeof(source) !== 'undefined' && source !== null) {  // wait until element is actually on the page
    window.location = source.src;
    clearInterval(redirect_loop);  // stop looking
  }
}

var redirect_loop = setInterval(redirect, INTERVAL_TIME);  // start looking

})();