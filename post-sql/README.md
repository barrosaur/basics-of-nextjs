<h1>PostSQL</h1>
<p>This is a simple full stack website with a frontend and a backend. The backend being a local MySQL database.</p>

<h2>Notes:</h2>
<h3>The <code>.env</code> file</h3>
<p>This is where you place your environment variables. Environment variables are where you usually keep your api keys or server credentials for safety. <strong>JUST REMEMBER TO ADD IT TO THE <code>.gitignore</code> file</strong> so you won't accidentally reveal your server/api credentials to your repository.</p>

<p>This is how the .env was utilized for this project (storing the credentials of my mysql db)</p>
```
  DB_HOST=your_host
  DB_USER=your_username
  DB_PASSWORD=your_password
  DB_NAME=your_db_name
  DB_PORT=port_#_used
```

<p>The <code>PORT</code>; I used this because my mysql server is hosted on localhost port 3306 (the default)</p>

<strong>To connect to your frontend:</strong>
<p>Make sure that its in this format <code>process.env.{env_var}</code>. On the <code>{env_var}</code>, replace it with one of the appropriate environment variable.</p>

<p><strong>NOTE:</strong> the <code>.env</code> file should be a sibling of the <code>src</code> folder and the other things in the nextjs configuration.</p>

<hr>

<h3>The next.js structure for the api</h3>
<p>It should be a child of the <code>/app</code> folder. And a child of that should be a <code>/handler</code> folder with a <code>route.js</code> file that handles api calls</p>

<p>The <code>db.js</code> file should be a direct child of the <code>/handler</code> folder. This is where we will set up the connection to our database</p>

## db.js
<p>This is where we configure to connect to my mysql database.</p>

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

<p>Use the import statement not the require one because it's what nextjs wants and we have to follow what it wants because we sucker.</p>

<p>But basically that's the code. It's self-explanatory. Just take note that the port is only there if you usin' localhost.</p>

<hr>

<h3><code>route.js</code></h3>
<p>This sets the routing of your api to connect to your frontend.</p>
<table>
  <tbody>
    <tr>
      <td>
        <code>export async function POST(req)</code>
      </td>
      <td>
        <p>creates an async function named POST that will run when your server recieves an HTTP POST request. </p>
        <p><code>POST</code> - create</p>
        <p><code>req</code> contains the data that was sent by whoever called this API</p>
      </td>
    </tr>
    <tr>
      <td>
        <code>const body = await req.json()</code>
      </td>
      <td>
        <p>reads incoming request body and turns it into JSON. <code>await</code> for duhh.</p>
      </td>
    </tr>
    <tr>
      <td><code>const { lastName, firstName, email } = body;</code></td>
      <td>
        <p>this is destructuring. The body contains the <code>lastName</code>, <code>firstName</code>, <code>email</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>const query = 'INSERT INTO posts (last_name, first_name, email) VALUES (?, ?, ?)'</code></td>
      <td>
        <p>insert sql query. The command for doing database stuff. The question marks is to prevent sql injections.</p>
      </td>
    </tr>
    <tr>
      <td>
        <code>const [result] = await db.query(query, [lastName, firstName, email])</code>
      </td>
      <td>
        <p>the first one executes the query on the db. the second one, with the arrays, replaces the question marks in the query.</p>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          return new Response(
            JSON.stringify({ message: 'Data insert successful', insertId: result.inserId }), { status: 200, headers: { 'Content-Type' : 'application/json'}}
          );
        </code>
      </td>
      <td>
        <p>We return a response body that converts it to a json string. <code>message</code> explains what happened. <code>insertId</code> is for when we add a new entry, the id automatically increments. <strong>NOTE: the id column is a primary key with auto_increment during the initialization and configuration of the table.</strong></p>
        <p><code>status: 200</code> means OK</p>
        <p><code>headers: {'Content-Type' : 'application/json'}</code>: <code>Content-Type</code> this is how the server tells the API that this data is a JSON file. The <code>application/json</code> makes sure that the format is in json in the headers</p>
      </td>
    </tr>
    <tr>
      <td><code>status: 500</code></td>
      <td><p>This mean its a server connection error. I'll put http responses table below</p></td>
    </tr>
  </tbody>
</table>

<hr>

<h3>MySQL db configuration</h3>
<p>For this one do it in the mysql workbench. This is all the things i did:</p>
<table>
  <tbody>
    <tr>
      <td><code>CREATE DATABASE db_name;</code></td>
      <td><p>Pretty self-explanatory</p></td>
    </tr>
    <tr>
      <td>
        <code>
          USE db_name;
          CREATE TABLE table_name;
        </code>
      </td>
      <td>
        <p>Again self-explanatory. Note add the <code>USE db_name</code> for the workbench to know which db you makin' your table.</p>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          CREATE TABLE table_name (
            id INT AUTO_INCREMENT PRIMARY KEY,
            last_name VARCHAR(255),
            first_name VARCHAR(255),
            email VARCHAR(255)
          );
        </code>
      </td>
      <td>
        <p>
          Learn sql to understand that. But that's the configuration.
        </p>
      </td>
    </tr>
  </tbody>
</table>

<p>That's all for the mysql part. It's relatively easy.</p>

<hr>

<h1>HTTP Status Codes (the general)</h1>
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



<p>For specifics, look online but i highly recommend <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status" target='_blank'>this one</a></p>