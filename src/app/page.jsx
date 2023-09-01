import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Payment from "@/components/home/Payment";
import HomeCatalogPreview from "@/components/home/HomeCatalogPreview";
import PorducTile from "@/components/catalog/PorductTile";
import HomeNewsletter from "@/components/home/HomeNewsletter";

export default function Home() {
  return (
    <>

<div className="home">


      <header className="header container mt-lg-4">
      <Header></Header>
      </header>

      <main className="content">
        <div className="layout-css">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        <div className="layout-flex">
        <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        <div className="layout-grid">
        <HomeCatalogPreview></HomeCatalogPreview>
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
