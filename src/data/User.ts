type User = {
  isLogged: boolean;
  name: string;
  user: {
    username: string;
    password: string;
  };
};

export default User;
