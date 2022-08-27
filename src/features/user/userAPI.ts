import axios from '../../api/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { GetUsersResponse, IUser } from './userInterface';

export async function fetchUserByEmail(email: string) {
  const params = {
    email: email,
  }

  return axios.get<GetUsersResponse>('/users', { params: params })
    .then((response: AxiosResponse) => {
      return response['data'];
    })
    .catch((error: AxiosError) => {
      return error;
    });
}
