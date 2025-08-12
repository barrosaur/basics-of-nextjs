# Test Login System with MySQL no (encryption)
#### and you can't sql injection

```javascript
let attempts = {};
```
Creates an empty object to store failed login attempts
<ul>
  <li>The keys will be the user's email</li>
  <li>Values will bt the number of failed attempts</li>
</ul>

```javascript
const { email, password } = await req.json();
```
Reads and destructures the email and password values from the incoming request's JSON body.

```javascript
if(attempts[email] >= 3)
```
Checks if the stored number of failed attempts for the email you entered is <strong>3 or more</strong>.

```javascript
return new Response(
  JSON.stringify({ message: "Account Blocked. Three attempts" }),
  {status:403, headers:{"Content-Type": "application/json"}}
);
```
<code>403</code> means <strong>Forbidden</strong> response with a JSON msg

```javascript
if(rows.length === 0)
```
Checks if no rows were returned --> the email <strong>does not exist in the database</strong>

```javascript
attempts[email] = (attempts[email] || 0) + 1;
```
Incrementing attempt count when the user fails to login.
If there is no existing record, <code>(attempts[email] || 0) + 1</code> starts at 0.

```javascript
return new Response(
  JSON.stringify({ message: "Invalid email or password" }),
  {status: 401, headers...}
);
```
<code>401</code> means <strong>Unauthorized access</strong>

```javascript
const user = rows[0]
```
gets the first matching row

```javascript
const isMatch = password === user.pass;
```
Compares the provided <code>password</code> directly to the <code>pass</code> column from the database 
### NOTE: this is plain text IT IS NOT SECURE

```javascript
attempts[email] = 0;
```
If login is successful, reset failed attempts