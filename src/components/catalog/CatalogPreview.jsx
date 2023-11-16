import ProductTile from './ProductTile';

export default function CatalogPreview({ productImages = [] }) {
  return (
    <ul className="catalog-preview">
      {productImages.map((imageSet, index) => {
        return (
          <li key={index}>
            <ProductTile images={imageSet}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
}
