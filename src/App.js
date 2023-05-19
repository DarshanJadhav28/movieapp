
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/UI/nav';
import FormExample from './components/UI/home1';

import Movie from './components/movie';
import UncontrolledExample from './components/UI/carousel';
import MovieCard from './components/UI/moviecard';
import { Footer } from './components/UI/footer';
import MovieData from './components/backend/postdata';
import SeatBooking from './components/backend/seatbooking';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoginForm from './components/UI/login';
import Login1 from './components/UI/login1';

function App() {
  return (
    <><>
    {/* <BasicExample></BasicExample>
      <FormExample></FormExample> <br></br>
      <UncontrolledExample></UncontrolledExample> <br></br>

      <Movie></Movie>
      {/* { <SeatBooking></SeatBooking>} */}
      {/* <MovieData></MovieData> */}
      {/* <MovieCard></MovieCard> */}
      {/* <showAllMovies></showAllMovies>
        */} 
      <BasicExample></BasicExample>


      <Routes>
        <Route path='/' element={<Login1/>}/>
        <Route path="/dashboard" element={<SeatBooking />} />
        <Route path='/movies' element={<Movie/>}/>
        <Route path='/seatbooking' element={<SeatBooking/>}/>

        {/* <Route path="/movies" element={<SeatBooking/>} /> */}
      </Routes>

      <Footer></Footer> 
    </></>


  );
}

export default App;
