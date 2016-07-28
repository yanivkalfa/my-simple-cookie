(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function () {
  var cookiesLimit, cookiesSize, defaults;
  cookiesLimit = 20;
  cookiesSize = 1024;
  defaults = {
    expires :  60*60*24/* 30 days*/,
    path : '/'
  };

  function prepareToSet(value){
    try {
      return JSON.stringify(value);
    } catch(e) {
      console.log(e);
      return value;
    }
  }

  function prepareToGet(value){
    try {
      return JSON.parse(value);
    } catch(e) {
      console.log(e);
      return value;
    }
  }

  function parseCookies(){
    var cookiesRow, cookies;
    cookiesRow = document.cookie.split(';') || [];
    cookies = {__cookiesCount: 0 };
    cookiesRow.forEach(function(cookie){
      cookie = cookie.trim();
      cookie = cookie.split('=');
      cookies[cookie[0]] = prepareToGet(cookie[1]);
      cookies.__cookiesCount++;
    });
    return cookies;
  }

  function getCookie(name) {
    var cookies = parseCookies();
    return cookies[name] || cookies
  }

  function updateCookie(name, value, opts){
    if ( !name || !value ) throw new Error('Cookie name or value is missing');
    var d, expires, path, cookies, tempValue;
    tempValue = prepareToSet(value);
    cookies = parseCookies();
    if ( cookies.__cookiesCount >= cookiesLimit ) console.warn('You have: ' + cookies.__cookiesCount + ' Certain browsers support up to: ' + cookiesLimit);
    if ( tempValue.length >= cookiesSize ) console.warn('Value length is: ' + tempValue.length + ' Certain browsers support up to: ' + cookiesSize);

    d = new Date();
    expires = (opts && typeof opts.expires === 'number' && opts.expires >= 0)
      ? opts.expires
      : defaults.expires;
    d.setTime(d.getTime()+(expires*1000));
    expires = "expires="+d.toGMTString();
    path = opts && opts.path || defaults.path;
    document.cookie = name + '=' + prepareToSet(value) + '; ' + expires + '; path=' + path + ';'
  }

  function removeCookie(name) {
    if ( !name ) throw new Error('Cookie name is missing');
    updateCookie(name, true, { expires: 0 })
  }

  return {
    get: getCookie,
    set: updateCookie,
    update: updateCookie,
    remove: removeCookie
  };
};

},{}]},{},[1]);
