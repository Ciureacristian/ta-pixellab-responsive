import CatalogPreview from '../catalog/CatalogPreview';

export default function HomeCatalogPreview(props) {
  // const productImages = props.productImages
  const { productImages } = props;

  return (
    <section className="home-catalog-preview container">
      <header>
        <h1>
          Glamour <span>Suits</span>
        </h1>

        <p>
          Accomplish new achievements with a bold new style from the brilliant
          collection of mens designer suits. <br></br>
          For the finest custom tailored experience, be sure to explore our
          selection of premium fabrics from one of the world{"'"}s oldest fabric
          mills, Vitale Barberis Canonico.
        </p>
      </header>

      <CatalogPreview productImages={productImages}></CatalogPreview>
    </section>
  );
}
