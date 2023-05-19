import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Records from "../../records.json";
import "../../App.css";

function MovieCard() {

  function OpenMovie(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    

  }
  return (
    <>
      <div>
        {Records.data.map((movie) => {
          return (
            <table className="table">
              <tbody className="showMovie">
                <tr>
                  <td>
                    <Card>
                      <button onClick={OpenMovie}>
                      <Card.Img variant="top" src={movie.image} /> </button>
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
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
}

export default MovieCard;
