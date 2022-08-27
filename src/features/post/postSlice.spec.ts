import postReducer from './postSlice';
import { IPostState } from './postInterface';

describe('post reducer', () => {
  const initialState: IPostState = {
    posts: [],
    status: 'idle',
    errors: [],
  };

  it('should handle initial state', () => {
    expect(postReducer(undefined, { type: 'unknown' })).toEqual({
      posts: [],
      status: 'idle',
      errors: [],
    });
  });
});
