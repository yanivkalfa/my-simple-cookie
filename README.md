myCookie
========

Simple jquery plugin to handle js cookies in a very simple way.<br>

Although you are able to use objects as cookie value with the plugin keep in mind the 4k limit per domain(which is about 1000-4000 characters) exceeding this will cause problems.<br>

<strong>Setting a cookie: </strong>
```javascript
myCookie( {cName : "newCookie", cVal : "newCookie"} );
```
Will create a new cookie named newCookie with the value newCookie<br><br>


<strong>Setting a cookie with expiration (in seconds): </strong>
```javascript
myCookie({
  cName : "newCookie",
  cVal : "newCookie",
  exp : 300
});
```
Will create a new cookie named newCookie with the value newCookie and will expire in 300 seconds<br><br>

<strong>Retrieving a Cookie: </strong>
```javascript
myCookie({cName: "newCookie"});
```
Will return the value "newCookie" in our case <br>

<strong>Deleting a Cookie: </strong>
```javascript
myCookie({cName: "newCookie", del:true});

// Or:

myCookie({cName: "newCookie", exp:0});
```
Both cases will delete the cookie "newCookie" <br>


<strong>myCookie object accept the following properties</strong> :<br>
cName : (String) Cookie name, if "=" was used in the name it will be removed {default to : no default }.<br>
cVal : (String|Object|Array) Cookie value can be anything. However mind cookie size limitation {default to : no default }.<br>
exp : (Int) Number of second till cookie expires in seconds {default to : 30days - 60*60*24*30 }.<br>
del : (Boolean) Setting to true will delete existing cookie {default to : false }.<br>
path : (String) Path of the cookie {default to : / }.<br>
 


