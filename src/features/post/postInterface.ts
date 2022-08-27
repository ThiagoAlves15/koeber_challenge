export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IPostValues {
  userId: number;
  title: string;
  body: string;
}

export interface IPostState {
  posts: IPost[];
  status: 'idle' | 'loading' | 'failed';
  errors: string[];
}


export type GetPostsResponse = {
  data: IPost[];
};

export type PostPostsResponse = {
  data: IPostValues;
};
