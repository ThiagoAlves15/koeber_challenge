enum User {
  EMAIL = "EMAIL",
}

export const getUserEmail = () => {
  return localStorage.getItem(User.EMAIL) ?? '';
}

export const setUserEmail = (email: string) => {
  localStorage.setItem(User.EMAIL, email);
}