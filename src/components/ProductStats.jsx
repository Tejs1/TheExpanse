import { modifyLink } from "../Utils/modifyLink";

export function ProductStats(max_crew, price, mass, manufacturer_logo) {
  return (
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
  );
}
