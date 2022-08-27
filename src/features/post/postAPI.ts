import axios from '../../api/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { GetPostsResponse, PostPostsResponse, IPostValues } from './postInterface';

export async function fetchPostsByUserId(userId: number) {
  const params = {
    userId: userId,
  }

  return axios.get<GetPostsResponse>('/posts', { params: params })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error;
    });
}

export async function createPostForUser(values: IPostValues) {
  const data = {
    userId: values.userId,
    title: values.title,
    body: values.body,
  }

  return axios.post<PostPostsResponse>('/posts', { data: data })
    .then((response: AxiosResponse) => {
      const post = {
        userId: response.data.data.userId,
        title: response.data.data.title,
        body: response.data.data.body,
      };

      return post;
    })
    .catch((error) => {
      return error;
    });
}

