const Resultado = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (
    <div className="resultado">
      <img className="imagen" src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
      <div>
        <p className="precio">
          El precio es de: <span>{PRICE}</span>
        </p>
        <p className="texto">
          El precio es de: <span>{HIGHDAY}</span>
        </p>
        <p className="texto">
          El precio es de: <span>{LOWDAY}</span>
        </p>
        <p className="texto">
          El precio es de: <span>{CHANGEPCT24HOUR}</span>
        </p>
        <p className="texto">
          El precio es de: <span>{LASTUPDATE}</span>
        </p>
      </div>
    </div>
  );
}

export default Resultado
