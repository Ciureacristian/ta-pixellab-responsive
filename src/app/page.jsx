'use client';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Payment from '@/components/home/Payment';
import HomeCatalogPreview from '@/components/home/HomeCatalogPreview';
import PorducTile from '@/components/catalog/PorductTile';
import HomeNewsletter from '@/components/home/HomeNewsletter';
import HomeCarousel from '@/components/home/HomeCarousel';
import PorductTile1 from '@/components/catalog/PorducTile1';
import PorductTile2 from '@/components/catalog/PorducTile2';

const productImages1 = [
  {
    main: '/images/products/product-01a.jpg',
    alt: '.images/products/product-01b.jpg',
  },
  {
    main: '/images/products/product-02a.jpg',
    alt: '.images/products/product-02b.jpg',
  },
  {
    main: '/images/products/product-03a.jpg',
  },
];

const productImages2 = [
  {
    main: '/images/products/product-04a.jpg',
  },
  {
    main: '/images/products/product-05a.jpg',
  },
  {
    main: '/images/products/product-06a.jpg',
  },
];

export default function Home() {
  return (
    <>
      <div className="home">
        <header className="header container mt-lg-4">
          <Header></Header>
        </header>

        <main className="content">
          <header>
            <HomeCarousel></HomeCarousel>
          </header>
          <div className="layout-css">
            <HomeCatalogPreview
              productImages={productImages1}
            ></HomeCatalogPreview>
          </div>

          <div className="layout-flex">
            <HomeCatalogPreview
              productImages={productImages2}
            ></HomeCatalogPreview>
          </div>

          <div className="layout-grid">
            <HomeCatalogPreview
              productImages={productImages1}
            ></HomeCatalogPreview>
          </div>

          {/*layout bootstap style */}
          <div className="container">
            <ul className="row justify-content-between">
              <li className="col-12 col-lg-3 mb-5">
                <PorducTile></PorducTile>
              </li>
              <li className="col-12 col-lg-3 mb-5">
                <PorducTile></PorducTile>
              </li>
              <li className="col-12 col-lg-3">
                <PorducTile></PorducTile>
              </li>
            </ul>
          </div>

          <HomeNewsletter></HomeNewsletter>

          <Payment></Payment>
        </main>

        <footer className="footer">
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
}
