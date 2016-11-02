My Simple Cookie
================

Simple cookie handling module<br>

##Setting a cookie:
cookies.set(cookieName, cookieValue[, opts]);
```javascript
var cookies = require('my-simple-cookie');
cookies.set('newCookie', 'cookieValue', { expires: 60*60*24, path: '/' } );

```
Will create a new cookie named newCookie with the value newCookie with 1 day expiration and / as path<br><br>
cookie value should only be a string


##Updating a cookie:
cookies.update(cookieName, cookieValue[, opts]);
```javascript
cookies.set('newCookie', 'cookieValue', { expires: 60*60*24, path: '/' } );

// Or

cookies.update('newCookie', 'cookieValue', { expires: 60*60*24, path: '/' } );
```

##Retrieving a cookie:
cookies.get(cookieName);
```javascript
cookies.get('newCookie' );
```
Will return the value of "newCookie" <br>

##Removing a cookie
cookies.remove(cookieName);
```javascript
cookies.remove('newCookie' );
```
Will delete the cookie "newCookie" <br>


##Options:
expires : (Number) Number of second till cookie expires in seconds {default to : 30days - 60*60*24*30 }.<br>
path : (String) Path of the cookie {default to : / }.<br>
 


