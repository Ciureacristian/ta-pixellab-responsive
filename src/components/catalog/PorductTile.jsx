export default function PorducTile () {
  return <article className="product-tile">
    <header className="product-tile-header">
      <a href="/" title="Thread Affair Monochrome Suit">

        <picture>
          <img src="/images/products/product-01a.jpg" alt="Thread Affair Monochrome Suit" />
          <span className="badge badge-primary">%</span>
        </picture>
      </a>



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
}
