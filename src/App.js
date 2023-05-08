
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/UI/nav';
 import FormExample from './components/UI/home1';



import Movie from './components/movie';
import UncontrolledExample from './components/UI/carousel';


function App() {
  return (
   <><BasicExample></BasicExample>
   <FormExample></FormExample> <br></br>
   <UncontrolledExample></UncontrolledExample> <br></br>
   
  <Movie></Movie> 
   
 
  

  </>
  
  );
}

export default App;
