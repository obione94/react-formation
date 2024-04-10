
import Vote from "./Vote.jsx";
import DeletePost from "./DeletePost.jsx";
import PropTypes from 'prop-types';


const Post = function({u,deleted,color,index,moveVote}) {
    return (
        <li key={u.id} style={{listStyle: "none"}}>
            <div style={{width: "420px"}}>
                <DeletePost deleted={deleted} i={index}></DeletePost>
                <div style={{float: "left"}}>
                    <img alt= "" src={u.productImageUrl} width="100" height="120"/>
                </div>
                <div>
                    <Vote numVote={u.votes} moveVote={moveVote} index={index} color={color}></Vote>
                    <div>
                        <a href={u.url}>{u.title}</a>
                        <p>{u.description}</p>
                    </div>
                    <div>
                        ajouté par <img alt="" src={u.submitterAvatarUrl} width="25" height="25" />
                    </div>
                </div>
            </div>
        </li>
    );
}

Post.propTypes = {
    u:PropTypes.any,
    delete:PropTypes.func, 
    color:PropTypes.func,
    index:PropTypes.number,
    moveVote:PropTypes.func, 
}

export default Post;