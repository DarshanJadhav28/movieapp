import React from "react";

import Records from "../records.json";
import image from "../records.json";



import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { ClassNames } from "@emotion/react";



export default function Movie() {
  

 
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        height="364" 
        image="https://m.media-amazon.com/images/I/61Q8+8Sj98S._SY450_.jpg"
        alt="The Shawshank Redemption"
      />
      <CardContent>
      
      </CardContent>
      <CardActions disableSpacing>
        

      </CardActions>
      <Collapse timeout="auto" unmountOnExit>
        <CardContent>
        {Records && Records.data.map((movie) => {
        return (
            <div ClassName="box" key={movie.id}> 
          <>
            <div>{movie.movie}</div>
            <div> <img src={movie.image}/> </div>
            <div>{movie.rating}</div>
          </>
          </div>
        );
      })}
     
        </CardContent>
      </Collapse>
    </Card>
  );
}

// export default function Movie() {
//   console.log(Records);
//   return (
//     <>
//       {Records.data.map((movie) => {
//         return (
//           <>
//             <div>{movie.movie}</div>
//             <div> <img src={movie.image}/> </div>
//             <div>{movie.rating}</div>
//           </>
//         );
//       })}
//     </>
//   );
// }

// >> "some data"
