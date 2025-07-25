import React from 'react'
import '@/styles/PostTable.css'
import { ReadButton, EditButton, DeleteButton } from './buttonComponent'

const PostTable = () => {
  return (
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
        <tr>
          <td>1</td>
          <td>Last</td>
          <td>first</td>
          <td>johndoe@gmail.com</td>
          <td>
            <div className="btn-container">
              <ReadButton />
              <EditButton />
              <DeleteButton />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default PostTable