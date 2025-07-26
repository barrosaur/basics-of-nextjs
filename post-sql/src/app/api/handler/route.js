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

// no request bodies on GET
export async function GET() {
  try {
    const query = 'SELECT * FROM posts';
    const [results] = await db.query(query);

    return new Response(
      JSON.stringify(results, { message: 'Fetch successful' }),
      {
        status: 200, 
        headers: {'Content-Type' : 'application/json'}
      },
    )
  } catch (err) {
    console.error('Error fetching data: ', err);
    return new Response(
      JSON.stringify({ message: 'Error fetching data' }),
      {status : 500}
    )
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if(!id) {
      return new Response(
        JSON.stringify({ message: 'ID is required' }),
        { status: 400 }
      );
    }

    const query = 'DELETE FROM posts WHERE id = ?';
    const [result] = await db.query(query, [id]);

    if(result.affectedRows === 0) {
      return new Response(
        JSON.stringify({ message: 'No post found with ID' }),
        { status: 404}
      );
    }

    return new Response(
      JSON.stringify({ message: 'Deletion Success' }),
      {status: 200}
    );
  } catch (err) {
    console.error('Failed to delete: ', err);
    return new Response(
      JSON.stringify({ message: 'Failed to delete' }),
      { status: 500 }
    )
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, firstName, lastName, email } = body;

    if(!id || !firstName || !lastName || !email) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        {status: 400}
      );
    }

    const query = `
      UPDATE posts 
      SET first_name = ?, last_name = ?, email = ?
      WHERE id = ?
    `;

    const [result] = await db.query(query, [firstName, lastName, email, id]);

    if(result.affectedRows === 0) {
      return new Response(
        JSON.stringify({ message: 'No record found with this ID' }),
        {status: 404}
      )
    }

    return new Response(
      JSON.stringify({ message: 'Updated successfully!' }),
      {status: 200}
    );

  } catch(err) {
    console.error('Failed to update: ', err);
    return new Response(
      JSON.stringify({ message: 'Failed to update' }),
      {status: 500}
    );
  }
}