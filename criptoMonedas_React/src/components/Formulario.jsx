import { useEffect, useState } from "react";
import Error from "./Error";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  const [Criptomoneda, SelectCriptomoneda] = useSelectMonedas("Elige tu Criptomoneda", criptos);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const arrayCriptos = resultado.Data.map(cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        }
        return objeto
      })
      setCriptos(arrayCriptos)
    }
    consultarAPI();
  }, []);

  const handleSubmit = e => {
    e.preventDefault()

    if ([moneda, Criptomoneda].includes('')) {
      setError (true)

      return
      
    }
    setError(false)
    setMonedas({
      moneda,
      Criptomoneda
    })
  }

  return (
    <>
    {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />

        <input type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;
