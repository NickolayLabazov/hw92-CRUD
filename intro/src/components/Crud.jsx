import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Create from './Create.jsx'
import Post from './Post.jsx'
import LookPost from './LookPost.jsx'
import Add from './Add.jsx'
import Context from '../contexts/context.js'

export default function Crud() {
  const { change, setChange } = useContext(Context);
  const [posts, setPosts] = useState([]);
  const url = 'http://localhost:7777/posts';
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const post = await response.json();
        setPosts(post)
      } catch (e) {
        console.error(e)
      }
    }
    fetchUsers()
  }, [change]);

  return (
    <Router>
      <div className="crud-Box">
        <Route exact path="/" component={Create} />
        <Route exact path="/new" component={Add} />
        {posts.map(post => <Post {...post} look={false} key={post.id} />)}
        {posts.map(post => <LookPost {...post} look={true} key={post.id} />)}
      </div>
    </Router>
  );
}