import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchPostsByUserId, createPostForUser } from './postAPI';
import { IPost, IPostValues, IPostState } from './postInterface';

const initialState: IPostState = {
  posts: <IPost[]>[],
  status: 'idle',
  errors: [],
};

export const fetchUserPosts = createAsyncThunk(
  'post/fetchUserPosts',
  async (id: number) => {
    const response = await fetchPostsByUserId(id);

    return response;
  }
);

export const createPost = createAsyncThunk(
  'post/createPost',
  async (values: IPostValues) => {
    const response = await createPostForUser(values);

    return response;
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPosts.pending, (state) => {
        state.status = 'loading';
        state.errors = [];
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = action.payload;
        state.errors = [];
      })
      .addCase(fetchUserPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.payload as string[];
      })
      .addCase(createPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = 'idle';

        const post = {
          ...action.payload,
          id: state.posts.length + 1,
        };

        state.posts.push(post);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.payload as string[];
      });
  },
});

export const selectPosts = (state: RootState) => state.post.posts;

export default postSlice.reducer;
