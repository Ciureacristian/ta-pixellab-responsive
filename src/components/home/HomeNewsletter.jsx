'use Client';

export default function HomeNewsletter() {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const emailInput = form.email;

    if (emailInput.value.trial().length < 1) {
      return;
    }
    //do ajax
    fetch('api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        emailInput.value = '';
      });

    emailInput.value = '';
  };
  return (
    <section className="home-newsletter">
      <form className="container" onSubmit={onSubmit}>
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
