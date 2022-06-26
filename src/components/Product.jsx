import { Link } from "react-router-dom";
import { modifyLink } from "../Utils/modifyLink";

function Product({ ship }) {
  const { name, focus, max_crew, price, mass, manufacturer, media } = ship;
  const { store_large } = media[0].images;
  const { logo: manufacturer_logo } = manufacturer.media[0].images;

  return (
    <li className="ship-item">
      <div className="center ">
        <img src={modifyLink(store_large)} className="ship" alt={name} />
        <div className="blue-overlay"></div>
        {/* .blue-overlay should come when we hover */}
        <Link className="filet" to={`ships/${name}`}>
          <span className="name">
            {name} <span className="focus"> - {focus}</span>
          </span>
        </Link>

        <div className="content"></div>

        <Link className="smallbtn a" to={""}>
          <span className="smallbtn-top">Add To Cart</span>
          <span className="smallbtn-bottom"></span>
        </Link>
        <Link to={`ships/${name}`} class="smallbtn b" data-sku="">
          <span class="smallbtn-top">VIEW specs</span>
          <span class="smallbtn-bottom"></span>
        </Link>
      </div>
      <div className="bottom">
        <span className="crew spec">
          Max Crew / Human :<span>{max_crew}</span>
        </span>
        <span className="length spec">
          PRICE / Starcoin:<span>{price}</span>
        </span>
        <span className="mass spec">
          Mass / Kg :<span>{mass}</span>
        </span>
        <span className="manufacturer spec">
          Manufacturer :
          <img
            className="logo"
            height="31"
            width="31"
            src={modifyLink(manufacturer_logo)}
            alt="logo"
          />
        </span>
      </div>
    </li>
  );
}

export default Product;
