/**
 * inspiration repo: https://github.com/bradtraversy/vanillawebprojects
 * movie seat booking: https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking
 * but in react 🤓
 */

import './styles.css'
import React, { useState } from 'react'
import clsx from 'clsx'
import Records from "../../records.json";
import Axios from 'axios';

const movies = [
  {
    name: 'Avenger',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: 'Joker',
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: 'Toy story',
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: 'the lion king',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
  },
]

const seats = Array.from({ length: 9 * 6 }, (_, i) => i)

export default function SeatBooking() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])

  const url="http://localhost:3001/bookingdata"
  const[data,setData]= useState({
    seatnumber:"",
    date:"",
    time:""

  })
  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      seatnumber :data.seatnumber,
      date:data.date,
      time:data.time
    })
    .then(res=>{
      console.log(res.data)
    })

  }
  function handle(e){
    const newdata={...data}
    newdata[e.target.id] =e.target.value
    setData(newdata)
    console.log(newdata);

  }

  return (
    <div className="App">
      <Movies
        movie={selectedMovie}
        onChange={movie => {
          setSelectedSeats([])
          setSelectedMovie(movie)
        }}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{' '}
        seats for the price of{' '}
        <span className="total">
          {selectedSeats.length * selectedMovie.price}$
        </span>
        <form onSubmit={(e)=> submit(e)}>
         
          <input onChange={(e)=>handle(e)}id='seatnumber' value={data.seatnumber} placeholder='Enter seat number'type='number'></input>
          <input onChange={(e)=>handle(e)}id='date' value={data.date}placeholder='date'type='date'></input>
          <input onChange={(e)=>handle(e)}id='time' value={data.time}placeholder='Time'type='time'></input>
           <button>Submit</button>
        </form>
      </p>
    </div>
  )
}

function Movies({ movie, onChange }) {
  return (
    <div className="Movies">
      <label htmlFor="movie">Pick a movie</label>
      <select
        id="movie"
        value={movie.name}
        onChange={e => {
          onChange(Records.data.find(movie => movie.movie === e.target.value))
        }}
      >
        {movies.map(movie => (
          <option key={movie.movie} value={movie.name}>
            {movie.name} (${movie.price})
          </option>
        ))}
      </select>
    </div>
  )
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  )
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
          )
        })}
      </div>
    </div>
  )
}
