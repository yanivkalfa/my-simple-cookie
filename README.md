My Simple Cookie
================

Simple cookie handling module<br>

##Setting a cookie:
```javascript
var cookies = require('my-simple-cookie');

cookies.set('newCookie', 'cookieValue', { expires: 60*60*24, path: '/' } );

```
Will create a new cookie named newCookie with the value newCookie with 1 day expiration and / as path<br><br>
cookie value can also be objects, array, boolean or any other type.


##Updating a cookie:
```javascript
cookies.set('newCookie', 'cookieValue', { expires: 60*60*24, path: '/' } );

// Or

cookies.update('newCookie', 'cookieValue', { expires: 60*60*24, path: '/' } );
```

##Retrieving a cookie:
```javascript
cookies.get('newCookie' );
```
Will return the value of "newCookie" <br>

##Removing a cookie
```javascript
cookies.remove('newCookie' );
```
Will delete the cookie "newCookie" <br>


##Options:
expires : Number of second till cookie expires in seconds {default to : 30days - 60*60*24*30 }.<br>
path : (String) Path of the cookie {default to : / }.<br>
 


