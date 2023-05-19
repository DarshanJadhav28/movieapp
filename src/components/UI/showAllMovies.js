import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Records from "../../records.json";

export default function showAllMovies() {
  return (
    <div>

<div>
         <table className="table">
              <tbody
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
              >
                <tr>
                  <td>
                
      {Records.data.map((movie) => {
        return (
          <tr>
            <td>
           
                      <Card>
                        <Card.Img variant="top" src={movie.image} />
                        <Card.Body>
                          <Card.Title>{movie.movie}</Card.Title>
                          <Card.Text>{movie.rating}</Card.Text>
                          <Button variant="primary">Book tickets</Button>
                        </Card.Body>

                        {/* 
            //   <div ClassName="box" key={movie.id}>
            //     <>
            //       {movie.movie}
            //       <img src={movie.image} />
            //       {movie.rating}
            //     </>
        //</div> */}
                      </Card>
                      </td>
                      </tr>
                 
    

        );
      })}
        
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
     
    </div>
  )
}
