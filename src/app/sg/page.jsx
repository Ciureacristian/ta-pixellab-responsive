export default function StyleGuide() {
  return (
    <>
      <div className="mt-4">
        <button className="button button-primary">Hello</button>
        <button className="button button-primary button-lg">Hello</button>

        <a href="/" className="button button-primary">
          Hello
        </a>
        <a className="button button-primary button-lg">Hello</a>
      </div>

      <div className="mt-4">
        <button className="button button-primary-outline">Hello</button>
        <button className="button button-primary-outline button-lg">
          Hello
        </button>

        <a href="/" className="button button-primary-outline">
          Hello
        </a>
        <a className="button button-primary-outline button-lg">Hello</a>
      </div>

      <div className="mt-4 d-flex gap-2">
        <span className="badge badge-primary">
          smol text
        </span>
        <span className="badge badge-primary badge-lg">%</span>
        <span className="badge badge-secondary">smol text</span>
        <span className="badge badge-secondary badge-lg">%</span>
      </div>
    </>
  );
}
