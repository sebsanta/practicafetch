import ButtonCount from './assets/hooks/ButtonCount'
import ButtonCount2 from './assets/hooks/ButtonCount2';
import FormularioControlado from './assets/hooks/FormularioControlado';
import FormularioNoControlado from './assets/hooks/FormularioNoControlado';
import Cat from './assets/hooks/Cat';
import FetchApi from './assets/hooks/FetchApi';
import FetchApi2 from './assets/hooks/FetchApi2';
import FetchApi3 from './assets/hooks/FetchApi3';


//componente button 
const MyButton = (props) => {
  //console.log(props);
  const handleClickButton = (title) => {
  //  console.log('presionaste: ' + title);
  }
  return (
    <button onClick={()=>handleClickButton(props.text)}>{props.text}</button>
  )
}

const OnlineText = () => {
   return (
    <div>
          <h3>Online</h3>
    </div>
   )}

const ButtonState = () => {
  let count = 0;

  const handleClickCount = () => {
    count = count + 1 
    console.log(count)
  }
  return <button onClick={handleClickCount}>Contador - {count+1}</button>
}

const WelcomeText = ({user}) => (user ? <h3>Online</h3>:<h3>Offline</h3>);


// const OffLineText = () => {
//   return (
//      <div>
//            <h3>Offline</h3>
//      </div>
//   )}


//Le entrego los props en la función map. Se almacenan en frutitas y luego se listan en el componente
const OnlineFrutas = (props) => {
  return(
    <li>{props.frutitas}</li>
  )
}

const App = () => {
  const title = 'Hola mundillo feliz';
  const classTitle = "text-center";
  const user = true;
  const frutas = ['pera', 'uva', 'piña'];
  return(
    <div className='container'>
      <h1>Formulario no controlado</h1>
     <FormularioNoControlado />
     <br></br><br></br>
     <h1>Formulario Controlado</h1>
     <FormularioControlado />
     <br></br>
     <Cat/>
     <br></br><br></br>
     <FetchApi/>
     <br></br><br></br>
     <FetchApi2/>
     <br></br><br></br>
    <FetchApi3 />
      {/*  <MyButton text='boton 1'/>
      <MyButton text='boton 2'/>
      <MyButton text='boton 3'/> 
      <ButtonState />
      <WelcomeText user={user}/>
      <ButtonCount />
      <ButtonCount2 /> 
      <ul>
           {
            frutas.map((fruta, index) => (
                <OnlineFrutas frutitas={fruta} key={index}/>
            ))
           }
      </ul>*/}
    </div>
  )
}

export default App; 