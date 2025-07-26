# PostSQL
<p>This is a simple full stack website with a frontend and a backend. The backend being a local MySQL database.</p>

## Notes:
### The <code>.env</code> file
This is where you place your environment variables. Environment variables are where you usually keep your api keys or server credentials for safety. **JUST REMEMBER TO ADD IT TO THE <code>.gitignore</code> file** so you won't accidentally reveal your server/api credentials to your repository.

This is how the .env was utilized for this project (storing the credentials of my mysql db)

```
DB_HOST=your_host
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_db_name
DB_PORT=port_#_used
```

The <code>PORT</code>; I used this because my mysql server is hosted on localhost port 3306 (the default)

#### To connect to your frontend:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Make sure that its in this format <code>process.env.{env_var}</code>. On the <code>{env_var}</code>, replace it with one of the appropriate environment variable.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>NOTE:</strong> the <code>.env</code> file should be a sibling of the <code>src</code> folder and the other things in the nextjs configuration.

<hr>

### The next.js structure for the api
It should be a child of the <code>/app</code> folder. And a child of that should be a <code>/handler</code> folder with a <code>route.js</code> file that handles api calls

The <code>db.js</code> file should be a direct child of the <code>/handler</code> folder. This is where we will set up the connection to our database

<hr>

### db.js
This is where we configure to connect to my mysql database.

```javascript
import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: process.env.DB_HOST, 
  user: process.env.DB_USER, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME, 
  port: process.env.DB_PORT, 
})
```

Use the import statement not the require one because it's what nextjs wants and we have to follow what it wants because we sucker.

But basically that's the code. It's self-explanatory. Just take note that the port is only there if you usin' localhost.
<hr>

### <code>route.js</code>
This sets the routing of your api to connect to your frontend.

```javascript
export async function POST(req)
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;creates an async function named POST that will run when your server recieves an HTTP POST request. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>POST</code> - create
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>req</code> contains the data that was sent by whoever called this API

```javascript 
const body = await req.json()
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reads incoming request body and turns it into JSON. <code>await</code> for duhh.

```javascript    
const { lastName, firstName, email } = body;
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this is destructuring. The body contains the <code>lastName</code>, <code>firstName</code>, <code>email</code>.

```javascript    
const query = 'INSERT INTO posts (last_name, first_name, email) VALUES (?, ?, ?)'
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;insert sql query. The command for doing database stuff. The question marks is to prevent sql injections.

```javascript
const [result] = await db.query(query, [lastName, firstName, email])
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the first one executes the query on the db. the second one, with the arrays, replaces the question marks in the query.
      
```javascript
return new Response(
  JSON.stringify({ message: 'Data insert successful', insertId: result.inserId }), { status: 200, headers: { 'Content-Type' : 'application/json'}}
);
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We return a response body that converts it to a json string. <code>message</code> explains what happened. <code>insertId</code> is for when we add a new entry, the id automatically increments. <strong>NOTE: the id column is a primary key with auto_increment during the initialization and configuration of the table.</strong>
<table>
  <tbody>
    <tr>
      <td><code>status: 200</code></td>
      <td><p>means OK</p></td>
    </tr>
    <tr>
      <td><code>headers: {'Content-Type' : 'application/json'}</code></td>
      <td>
        <ul>
          <li><code>Content-Type</code> this is how the server tells the API that this data is a JSON file</li>
          <li><code>application/json</code> makes sure that the format is in json in the headers</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>status: 500</code></td>
      <td><p>This mean its a server connection error. I'll put http responses table below</p></td>
    </tr>
  </tbody>
</table>        

<hr>

### MySQL db configuration
For this one do it in the mysql workbench. This is all the things i did:
```sql
CREATE DATABASE db_name;
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pretty self-explanatory. It creates the db.

```sql
USE db_name;
CREATE TABLE table_name;
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Again self-explanatory. Note add the <code>USE db_name</code> for the workbench to know which db you makin' your table.
   
```sql
CREATE TABLE table_name (
  id INT AUTO_INCREMENT PRIMARY KEY,
  last_name VARCHAR(255),
  first_name VARCHAR(255),
  email VARCHAR(255)
);
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn sql to understand that. But that's the configuration.

That's all for the mysql part. It's relatively easy.

<hr>

# HTTP Status Codes (the general)
<table>
  <thead>
    <tr>
      <th>Status Code</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>200</code></td>
      <td><p>OK on both ends</p></td>
    </tr>
    <tr>
      <td><code>400</code></td>
      <td><p>Your fault</p></td>
    </tr>
    <tr>
      <td><code>500</code></td>
      <td><p>Server fault (but you're the one configuring it so technically your fault)</p></td>
    </tr>
  </tbody>
</table>


For specifics, look online but i highly recommend <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status" target='_blank'>this one</a>