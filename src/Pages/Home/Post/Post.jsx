import axios from "axios";
import { useEffect, useState } from "react";


const Post = () => {
    const [posts,setPosts] = useState([]);

   useEffect(()=>{
    axios.get("http://localhost:8000/api/v1/posts",)
    .then(res=>{
        console.log(res.data.response.posts.data)
        const data = res.data.response.posts.data;
        setPosts(data);
      
    })
    .catch(err=>console.error(err))
   },[])
    return (
        <div>
            {
                posts.map(post=> <div className="text-center mb-12" key={post.id}>
                    <h1>{post.title}</h1>
                    <h1>{post.body}</h1>
                </div>)
            }
            {/* <div>{posts.map(post=><div key={post.id}><h1>{post.title}</h1> <p>{post.body}</p></div>)}</div> */}
        </div>
    );
};

export default Post;