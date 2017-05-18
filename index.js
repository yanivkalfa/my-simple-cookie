var cookiesLimit, cookiesSize, defaults;
cookiesLimit = 20;
cookiesSize = 1024;
defaults = {
  expires :  undefined,
  domain: undefined,
  httponly: undefined,
  secure:undefined,
  path : undefined
};

function parseCookies(){
  var cookiesRow, cookies;
  cookiesRow = document.cookie.split(';') || [];
  cookies = {__cookiesCount: 0 };
  cookiesRow.forEach(function(cookie){
    cookie = cookie.trim();
    cookie = cookie.split('=');
    cookies[cookie[0]] = cookie[1];
    cookies.__cookiesCount++;
  });
  return cookies;
}

function getCookie(name) {
  var cookies = parseCookies();
  return name ? cookies[name] || false : cookies;
}

function buildCookie(content, expires, path, domain, httponly, secure) {

  var cookie = [];
  if (content){
    cookie.push(content);
  }

  if (expires){
    cookie.push(expires);
  }

  if (path){
    cookie.push(path);
  }

  if (domain){
    cookie.push(domain);
  }

  if (httponly){
    cookie.push(httponly);
  }

  if (secure){
    cookie.push(secure);
  }

  return cookie.join('; ') + ';';
}

function checkExpires(expires) {
  return typeof expires === 'number' && expires >= 0;
}

function getCookieExpires(expires){
  var d = new Date();
  d.setTime(d.getTime()+(expires*1000));
  return d.toUTCString();
}

function updateCookie(name, value, opts){
  if ( !name || !value ) {
    throw new Error('Cookie name or value is missing');
  }
  var content, expires, path, domain, httponly, secure, cookies;
  cookies = parseCookies();
  if ( cookies.__cookiesCount >= cookiesLimit ) console.warn('You have: ' + cookies.__cookiesCount + ' Certain browsers support up to: ' + cookiesLimit);
  if ( value.length >= cookiesSize ) console.warn('Value length is: ' + value.length + ' Certain browsers support up to: ' + cookiesSize);

  content = name + '=' + value;
  expires = opts && typeof opts.expires !== 'undefined' && checkExpires(opts.expires) ? "expires=" + getCookieExpires(opts.expires) : defaults.expires;
  path = opts && typeof opts.path !== 'undefined' ? 'path=' + opts.path : defaults.path;
  domain = opts && typeof opts.domain !== 'undefined' ? 'domain=' + opts.domain : defaults.domain;
  httponly = opts && typeof opts.httponly !== 'undefined' ? 'httponly=' + opts.httponly : defaults.httponly;
  secure = opts && typeof opts.secure !== 'undefined' ? 'secure=' + opts.secure  : defaults.secure;

  document.cookie = buildCookie(content, expires, path, domain, httponly, secure);
}

function removeCookie(name, opts) {
  if ( !name ) {
    throw new Error('Cookie name is missing');
  }
  opts = opts || {};
  updateCookie(name, true, Object.assign({}, opts, { expires: 0 }) )
}

module.exports = {
  get: getCookie,
  set: updateCookie,
  update: updateCookie,
  remove: removeCookie
};