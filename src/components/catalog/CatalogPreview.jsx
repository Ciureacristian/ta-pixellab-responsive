import PorducTile from "./PorductTile";
import PorductTile1 from "./PorducTile1";
import PorductTile2 from "./PorducTile2";
export default function CatalogPreview() {
  return (
    <ul className="catalog-preview">
      <li>
        <PorducTile></PorducTile>
      </li>

      <li>
        <PorductTile1></PorductTile1>
      </li>

      <li>
       <PorductTile2></PorductTile2>
      </li>
    </ul>

  );
}
