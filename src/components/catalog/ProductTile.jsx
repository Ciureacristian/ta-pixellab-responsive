export default function ProductTile({ images = {} }) {
  const { main: mainImage, alt: altImage } = images;

  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <a
          href="/"
          tile="Thread Affair Monochrome Suit"
          className="product-tile-image"
        >
          {mainImage ? (
            <picture className="main">
              <img src={mainImage} alt="Thread Affair Monochrome Suit" />
            </picture>
          ) : null}

          {altImage ? (
            <picture className="alt">
              <img src={altImage} alt="Thread Affair Monochrome Suit" />
            </picture>
          ) : null}
        </a>

        <span className="badge badge-primary">%</span>

        <h1 className="product-tile-title">
          <a href="" title="Thread Affair Monochrome Suit">
            <span>Thread Affair </span> <span>Monochrome</span> Suit
          </a>
        </h1>
        <h2 className="product-tile-subtitle">
          <a href="" title="London fit semi-slim">
            London fit semi-slim
          </a>
        </h2>

        <section className="product-tile-content">
          <span className="product-tile-price">499.00</span>

          <span className="product-price">
            USD <span>399.00</span>
          </span>
        </section>
      </header>

      <footer className="product-tile-footer">
        <button className="button button-primary">Add to Cart</button>
      </footer>
    </article>
  );
}
