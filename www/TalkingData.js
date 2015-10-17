var TalkingData = function() {};
TalkingData.prototype.init = function(appKey, channelId) {
    Cordova.exec(null, null, "TalkingData", "sessionStarted", [appKey, channelId]);
}
TalkingData.prototype.trackEvent = function(eventId) {
    Cordova.exec(null, null, "TalkingData", "trackEvent", [eventId]);
}
TalkingData.prototype.trackEventWithLabel = function(eventId, eventLabel) {
    Cordova.exec(null, null, "TalkingData", "trackEventWithLabel", [eventId, eventLabel]);
}
TalkingData.prototype.trackEventWithParameters = function(eventId, eventLabel, eventData) {
    var eventDataJson = JSON.stringify(eventData);
    Cordova.exec(null, null, "TalkingData", "trackEventWithParameters", [eventId, eventLabel, eventDataJson]);
}
TalkingData.prototype.trackPage = function(pageName) {
    Cordova.exec(null, null, "TalkingData", "trackPage", [pageName]);
}
TalkingData.prototype.trackPageBegin = function(pageName) {
    Cordova.exec(null, null, "TalkingData", "trackPageBegin", [pageName]);
}
TalkingData.prototype.trackPageEnd = function(pageName) {
    Cordova.exec(null, null, "TalkingData", "trackPageEnd", [pageName]);
}
TalkingData.prototype.setLocation = function(latitude, longitude) {
    Cordova.exec(null, null, "TalkingData", "setLocation", [latitude, longitude]);
}
TalkingData.prototype.getDeviceId = function(callBack) {
    Cordova.exec(callBack, null, "TalkingData", "getDeviceId", []);
}
TalkingData.prototype.openDebugLog = function(enabled) {
    Cordova.exec(null, null, "TalkingData", "openDebugLog", [enabled]);
}
TalkingData.prototype.setExceptionReportEnabled = function(enabled) {
    Cordova.exec(null, null, "TalkingData", "setExceptionReportEnabled", [enabled]);
}
TalkingData.prototype.setSignalReportEnabled = function(enabled) {
    Cordova.exec(null, null, "TalkingData", "setSignalReportEnabled", [enabled]);
}
TalkingData.prototype.setLogEnabled = function(enabled) {
    Cordova.exec(null, null, "TalkingData", "setLogEnabled", [enabled]);
}

if (!window.plugins) {
    window.plugins = {};
}

if (!window.plugins.TalkingData) {
    window.plugins.TalkingData = new TalkingData();
}

module.exports = new TalkingData();
