import PorducTile from "./PorductTile";

export default function CatalogPreview() {
  return (
    <ul className="catalog-preview">
      <li>
        <PorducTile></PorducTile>
      </li>

      <li>
        <PorducTile></PorducTile>
      </li>

      <li>
       <PorducTile></PorducTile>
      </li>
    </ul>

  );
}
