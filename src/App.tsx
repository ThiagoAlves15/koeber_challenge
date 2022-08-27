import './App.css';
import AppBar from './components/AppBar';
import UserSearch from './components/UserSearch';
// import { useAuth0 } from '@auth0/auth0-react';

function App() {
  // const {
  //   isLoading,
  //   isAuthenticated,
  //   error,
  //   loginWithRedirect,
  //   logout,
  // } = useAuth0();

  // const { user } = useAuth0<{ name: string }>();
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Oops... {error.message}</div>;
  // }

  // if (isAuthenticated) {
  return (
    <div className="App">
      <header>
        <AppBar />
      </header>

      <main>
        <UserSearch />
      </main>
    </div>
  );
  // } else {
  // return <button onClick={loginWithRedirect}>Log in</button>;
  // }
}

export default App;
