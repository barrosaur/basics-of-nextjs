import { db } from '../db'
import bcrypt from 'bcrypt'

let attempts = {};

export async function POST(request) {
  const { email, password } = await request.json();

  if(attempts[email] >= 3) {
    return new Response(
      JSON.stringify({ message: "Account blocked after 3 failed attempts" }),
      { status: 403, headers:{ 'Content-Type': 'application/json' } },
    );
  }

  try {
    const query = 'SELECT * FROM test_table WHERE email = ?';
    const [rows] = await db.query(query, [email]);
    if(rows.length === 0) {
      attempts[email] = (attempts[email] || 0) + 1;

      return new Response(
        JSON.stringify({ message: "Invalid email or password" }),
        { status: 401, headers: { "Content-Type" : "application/json" } }
      );
    }

    const user = rows[0];
    //                           SAME COLUMN NAME IN DB (not secure no bcrypt)                             
    const isMatch = password === user.pass;

    if(!isMatch) {
      attempts[email] = (attempts[email] || 0) + 1;
      return new Response(
        JSON.stringify({ message: "Invalid email or password" }),
        {status: 401, headers:{"Content-Type":"application/json"}}
      );
    }

    attempts[email] = 0;
    return new Response(
      JSON.stringify({ message: 'Login Successful' }),
      { status: 200, headers:{ "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: 'Internal Server Error'}),
      { status: 500, headers: {"Content-Type":"application/json"} }
    );
  }
} 