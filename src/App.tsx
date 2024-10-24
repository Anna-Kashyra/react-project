import React, {useState} from 'react';
import './App.css';
import {IPost} from "./models/IPost";
import {getPostsOfUser} from "./services/api.service";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

    const lift = async (id: number) => {
        setPosts(await getPostsOfUser(id));
    };

  return (
      <div className="App">
          <h2>All Users</h2>
          <Users lift={lift}/>
          <hr/>
          <Posts posts={posts}/>
      </div>
  );
}

export default App;
