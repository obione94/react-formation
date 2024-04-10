
import Post from "./Post.jsx";
import usePost from './Post.hook';

const ListPost =  function () 
{
    const  {posts, moveVote, deleted} = usePost();

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
            .filter(post => post.votes >= 0)
            .map(
                (data, index) => <Post key={"post-" +index} u={data} deleted={deleted} color={color} index={index} moveVote={moveVote} ></Post>
            )
        }
    </div>

};
export default ListPost;
