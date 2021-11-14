'use strict';

// A trivial listener used to help identify unloaded tabs; the listener won't
// send back a (empty) response if the tab/extension isn't loaded.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>
{
	sendResponse({});
});