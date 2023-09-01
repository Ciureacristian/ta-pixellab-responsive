export default function HomeNewsletter () {
  return (
  <section className="home-newsletter">
    <form className="container">
      <label htmlFor="email">
        <span>Subscribe to our</span>
         Newslatter
      </label>

      <input
      type="email"
      name="email"
      id="email"
      placeholder="enter your email address to recive the latest one"
      ></input>

      <button type="submit" title="Subscribe">
        Subscribe
      </button>
    </form>
  </section>
  );
}
