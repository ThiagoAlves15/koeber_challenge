import userReducer, {
  saveEmailToLocalStorage
} from './userSlice';
import { IUserState } from './userInterface';

describe('user reducer', () => {
  const initialState: IUserState = {
    user: {
      id: 0,
      email: "",
      username: "",
    },
    status: 'idle',
    errors: [],
  };

  const userState: IUserState = {
    user: {
      id: 1,
      email: "teste@teste.com",
      username: "teste",
    },
    status: 'idle',
    errors: [],
  };

  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
      user: {
        id: 0,
        email: "",
        username: "",
      },
      status: 'idle',
      errors: [],
    });
  });

  it('should handle save email to local storage', () => {
    const actual = userReducer(userState, saveEmailToLocalStorage());
    expect(actual.user.email).toEqual("teste@teste.com");
  });
});
