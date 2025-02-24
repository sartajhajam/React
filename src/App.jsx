import { useState , useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    console.log("increaseCount called " + count);
    setCount(function(currentValue){
      return currentValue + 1;
    });
    setCount(count + 1);
  }
  
  useEffect(function() => {
    console.log("above setinterval ");
    setInterval(increaseCount, 1000);
  }, []);

  return (
    <div>
      {count}
    </div>
  );
}


/* import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add post</button>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}

export default App

 */