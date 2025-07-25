import { db } from '../db'

export async function POST(req) {
  try {
    const body = await req.json();
    const { lastName, firstName, email } = body;

    const query = 'INSERT INTO posts (last_name, first_name, email) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [lastName, firstName, email]);

    return new Response(
      JSON.stringify({ message: 'Data insert successful', insertId: result.insertId }),
      { status: 200, headers: { 'Content-Type' : 'application/json'}}
    );
  } catch (err) {
    console.error('Error inserting data: ', err);
    return new Response(JSON.stringify({ message: 'Error inserting data' }), { status: 500});
  }
}