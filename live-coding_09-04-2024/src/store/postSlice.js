import { createSlice } from '@reduxjs/toolkit';
import MOCK_POSTS from '../Post/Mock/postsMock';

export const PostSlice = createSlice({
  name: 'post',
  initialState: MOCK_POSTS,
  reducers: {
    movePostVote: (state, action) => {
       const {index, addOrSub} = action.payload;
        state.map(
            (u,i) => {
                if (index === i) {
                    u.votes = u.votes + addOrSub;
                }
                return u;
            }
        );
    },
    removePost: (state, action) => {
        state.splice(action,1); 
    },
  },
});

export const {movePostVote, removePost } = PostSlice.actions;
export default PostSlice.reducer;
