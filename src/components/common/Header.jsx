export default function Header() {
  return <>
 <section className="header-secondary">
 <div className="header-contact">
          <ul>
            <li>
              <a href="tel:+1-877-666-1840" title="Call us">
                <i className="fa-solid fa-phone"></i>
                Toll Free 1-877-666-1840
              </a>
            </li>

            <li>
              <a href="mailto:wtv@wtv.com" title="Email us">
                office@traidaffairs.com
              </a>
            </li>
          </ul>
        </div>

        <div className="header-search d-block d-lg-none">
          <ul>
            <li>
              <button type="button" title="Menu">
                <i className="fa-solid fa-bars"></i>
              </button>
            </li>

            <li>
              <button type="button" title="Search">
                <i className="fa-solid fa-search"></i>
              </button>
            </li>
          </ul>
        </div>

        <div className="header-controls">
          <ul className="d-flex gap-4 flex-lg-row-reverse">
            <li>
              <button type="button" title="Cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </li>

            <li>
              <button type="button" title="Account">
              <i className="fa-solid fa-user"></i>
              </button>
            </li>
          </ul>
        </div>


     <a className="header-logo" href="/" title="Thread Affair">
      <picture className="header-logo">
        <img src="/images/logo.jpg" alt="Thread Affair - Logo" />
      </picture>
      </a>
      </section>

      <section className="header-primary d-none d-lg-block">
        <nav className="nav-primary">
          <ul>
            <li>
              <a href="" title="Home">
                Home
                </a>
            </li>

            <li>
              <a href="" title="Costume">
                Costume
                </a>
            </li>

            <li>
              <a href="" title="Camasi">
                Camasi
                </a>
            </li>

            <li>
              <a href="" title="Accesorii">
                Accesorii
                </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-secondary">
          <ul>
            <li>
              <a href="" title="Glamour Suits">Glamour Suits</a>
            </li>

            <li>
              <a href="" title="Wedding Suits">Wedding Suits</a>
            </li>

            <li>
              <a href="" title="Office Suits">Office Suits</a>
            </li>

            <li>
              <a href="" title="Customize your Suits">Customize your Suits</a>
            </li>
          </ul>
        </nav>
      </section>
  </>
}
