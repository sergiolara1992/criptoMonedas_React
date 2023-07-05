import { useState, useEffect } from 'react'
import Imagen from './img/imagen-criptos.png'
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';



function App() {

   const [monedas, setMonedas] = useState({});
   const [resultado, setResultado] = useState({});

   useEffect(() => {
     if (Object.keys(monedas).length > 0) {
       const cotizarCripto = async () => {
         const { moneda, criptomoneda } = monedas;
         const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

         const respuesta = await fetch(url);
         const resultado = await respuesta.json();

         setResultado(resultado.DISPLAY[criptomoneda][moneda]);
       };
       cotizarCripto();
     }
   }, [monedas]);


  return (
    <div className="contenedor">
      <div>
        <img src={Imagen} alt="imagenes criptomonedas" />
      </div>
      <div>
        <h1 className="title">Cotiza Criptomonedas al Instante</h1>
        <Formulario
        setMonedas={setMonedas}
         />
        {resultado.PRICE && <Resultado resultado={resultado}/>}
        
      </div>
    </div>
  );
}

export default App
