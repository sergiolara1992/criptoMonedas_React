const Resultado = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (

    <div>
      <p>
        El precio es de: <span>{PRICE}</span>
      </p>
      <p>
        El precio es de: <span>{HIGHDAY}</span>
        <p>
          El precio es de: <span>{LOWDAY}</span>
        </p>
        <p>
          El precio es de: <span>{CHANGEPCT24HOUR}</span>
        </p>
        <p>
          El precio es de: <span>{LASTUPDATE}</span>
        </p>
      </p>
    </div>
  )
}

export default Resultado;
