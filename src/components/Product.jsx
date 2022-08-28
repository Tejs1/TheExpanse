import { Link } from "react-router-dom";
import { modifyLink } from "../Utils/modifyLink";
import { ProductStats } from "./ProductStats";

function Product({ ship }) {
  const { name, focus, max_crew, price, mass, manufacturer, media, id } = ship;
  const { store_large } = media[0].images;
  const { logo: manufacturer_logo } = manufacturer.media[0].images;

  return (
    <li className="ship-item">
      <div className="center ">
        <img src={modifyLink(store_large)} className="ship" alt={name} />
        <div className="blue-overlay"></div>
        {/* .blue-overlay should come when we hover */}
        <Link to={`ships/${id}`} className="filet" ship={name}>
          <span className="name">
            {name} <span className="focus"> - {focus}</span>
          </span>
        </Link>

        <div className="content"></div>

        <Link to={`ships/${id}`} className="smallbtn a secondary">
          <span className="smallbtn-top trans-02s">VIEW specs</span>
          <span className="smallbtn-bottom trans-02s"></span>
        </Link>
        <Link to={`ships/${id}`} className="smallbtn b primary" ship={name}>
          <span className="smallbtn-top trans-02s">Add To Cart</span>
          <span className="smallbtn-bottom trans-02s"></span>
        </Link>
      </div>
      <ProductStats
        max_crew={max_crew}
        price={price}
        mass={mass}
        manufacturer_logo={manufacturer_logo}
      />
    </li>
  );
}

export default Product;
