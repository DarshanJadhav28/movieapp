import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Records from "../records.json";
import image from "../records.json";
import "../App.css";


import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { ClassNames } from "@emotion/react";
import { FaBold } from "react-icons/fa";

// export default function Movie() {
//   return (
//     <div className="displayc">
//       <Card sx={{ maxWidth: 400 }}>
//         {/* <CardMedia
//         component="img"
//         height="364"
//         image="https://m.media-amazon.com/images/I/61Q8+8Sj98S._SY450_.jpg"
//         alt="The Shawshank Redemption"
//       /> */}
//         <CardContent>
//           {Records.data.map((movie) => {
//             return (
//               <div ClassName="box" key={movie.id}>
//                 <>
//                   {movie.movie}
//                   <img src={movie.image} />
//                   {movie.rating}
//                 </>
//               </div>
//             );
//           })}
//         </CardContent>
//         <CardActions disableSpacing></CardActions>
//         <Collapse timeout="auto" unmountOnExit></Collapse>
//       </Card>
//     </div>
//   );
// }

export default function Movie() {
  const navigate = useNavigate();

  // function handleClick(event) {

  //   navigate('/movies');
  // }
  const setMovies = <Link to={"./Dashboard"}>
    <li>Dashboard</li>
  </Link>

  console.log(Records);
  return (
    <div className="grid grid-4-col">
      {Records.data.map((movie) => {
        return (
          <div className="moviebox">
            <div>
              <img
                src={movie.image}
                style={{ height: "400px", width: "300px" }}
              />
              <div> <h4>{movie.movie}</h4></div>
            </div>
            <div> Rating : {movie.rating}</div>

            <button onClick={()=>navigate("/seatbooking")}>Click</button>
            {/* <button onClick={<Link to={"./Dashboard"}>
              <li>Dashboard</li>
            </Link>}>Click</button> */}
            

          </div>
        );
      })}
    </div>
  );
}

// >> "some data"
