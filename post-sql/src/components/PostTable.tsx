import React, { useState, useEffect } from 'react'
import '@/styles/PostTable.css'
import { ReadButton, EditButton, DeleteButton } from './buttonComponent'
import EditCard from './EditCard'

// key must be in the same format as the one in the query for this one
// since we are looking for specific ids and their columns
export interface Post {
  id: number;
  last_name: string;
  first_name: string;
  email: string;
}

const PostTable = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [editPost, setEditPost] = useState<Post>();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/handler');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching data: ', err);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id : number) => {
    try {
      const res = await fetch(`/api/handler?id=${id}`, {
        method: 'DELETE'
      });

      if (!res.ok) {
        const data = await res.json();
        alert(`Failed to delete: ${data.message}`);
        return;
      }

      setPosts(prevPosts => prevPosts.filter(post => post.id !== id));

      alert('Deleted!');
    } catch(err) {
      console.error('Error deletion: ', err);
      alert('An error occured while deleting');
    }
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.last_name}</td>
              <td>{post.first_name}</td>
              <td>{post.email}</td>
              <td>
                <div className="btn-container">
                  <ReadButton />
                  <EditButton
                    onEdit={() => setEditMode(!editMode)}
                  />
                  <DeleteButton 
                    onDelete={() => handleDelete(post.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editMode && (
        <EditCard 
          onCancel={() => setEditMode(false)}
          post={editPost}
        />
      )}
    </>
  )
}

export default PostTable