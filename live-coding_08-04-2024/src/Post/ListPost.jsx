import { useState } from "react";
import MOCK_POSTS from "./Mock/postsMock.js";
import Post from "./Post.jsx";

const ListPost =  function () 
{
    const [posts, setPosts] = useState(MOCK_POSTS);

    function deleted (i) {
        const newPosts = [...posts];
        newPosts.splice(i, 1);
        setPosts(newPosts);
    }

    function moveVote (index,addOrSub) {
        const newPosts = [...posts];
        newPosts.map(
            (u,i) => {
                if (index === i) {
                    u.votes = u.votes + addOrSub;
                }

                return u;
            }
        );
        setPosts(newPosts);
    }

    function color (numVote) {
        if (numVote > 10) {
            return "green";
        }
        if (numVote < 2) {
            return "red";
        }

        return "black";
    }

    return <div>
        {
            posts
            .filter(post => post.votes > 0)
            .map(
                (data, index) => <Post key={"post-" +index} u={data} deleted={deleted} color={color} index={index} moveVote={moveVote} ></Post>
            )
        }
    </div>

};
export default ListPost;
