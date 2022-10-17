import {BrowserRouter , Route , Routes} from 'react-router-dom'

import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Netflix from './pages/Netflix'
import Player from "./pages/player.jsx"
import Movies from "./pages/Movies"
import TVShows from './pages/TVShows.jsx'
import UserListedMovies from "./pages/UserListedMovies"
function App() {
  return (
   <BrowserRouter>
   <Routes>

   <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/" element={<Netflix />} />


   </Routes>
   </BrowserRouter>
  );
}

export default App;
