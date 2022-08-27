export interface IUser {
  id: number;
  email: string;
  username: string;
}

export interface IUserState {
  user: IUser;
  status: 'idle' | 'loading' | 'failed';
  errors: string[],
}

export type GetUsersResponse = {
  data: IUser[];
};
