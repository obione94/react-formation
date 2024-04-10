import { useSelector, useDispatch } from 'react-redux';
import {movePostVote, removePost} from '../store/postSlice';

const usePost =  function () 
{
    const posts = useSelector((state) => {
        return state.post;
    });
    
    const dispatch = useDispatch();

    function deleted (i) {
        dispatch(removePost(i));
    }

    function moveVote (index,addOrSub) {
        dispatch(movePostVote({index,addOrSub}));
    }

    return {posts, deleted, moveVote}

};
export default usePost;
