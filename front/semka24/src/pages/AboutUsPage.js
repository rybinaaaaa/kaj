/**
 * Represents the About Us page of the website.
 */
export default class AboutUsPage {
  /**
   * Renders the About Us page content.
   */
  render() {
    const root = document.querySelector('#root');

    root.innerHTML = `
    <my-header></my-header>
    <div class="container">
      <section class="intro_video">
        <h1>
          Who are we?
        </h1>
        <video controls>
          <source src="/semka24/static/video.mp4" type="video/mp4">
        </video>
    </section>
    <section class="about_us">
      <img src="/semka24/static/evening-tones-oscar-florianus-bluemner-7ee9e369.jpg" alt="art">
      <div class="about_us__info">
          <h2 class="title">
            The Best Arts
          </h2>
          <h3 class="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error exercitationem maiores repellat suscipit? Accusantium amet culpa dolor, doloribus ducimus esse fuga ipsum libero magnam magni nostrum obcaecati quos repudiandae sapiente sunt, vel, voluptas! Aliquid aperiam autem consectetur consequatur dolorem maxime obcaecati porro quas suscipit velit. Aliquam dignissimos facilis maxime minima quo? Adipisci assumenda, blanditiis consequuntur deserunt est fugiat harum illo nam neque pariatur porro quo quos repellendus sed sit sunt totam vero vitae voluptatibus!
          </h3>
      </div>
    </section>
    <section class="about_us">
      <img src="/semka24/static/the-voyage-of-life-childhood-thomas-cole-1842-cdda4fb1.jpg" alt="art">
      <div class="about_us__info">
        <h2 class="title">
          The Best Prices
        </h2>
        <h3 class="sub-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error exercitationem maiores repellat suscipit? Accusantium amet culpa dolor, doloribus ducimus esse fuga ipsum libero magnam magni nostrum obcaecati quos repudiandae sapiente sunt, vel, voluptas! Aliquid aperiam autem consectetur consequatur dolorem maxime obcaecati porro quas suscipit velit. Aliquam dignissimos facilis maxime minima quo? Adipisci assumenda, blanditiis consequuntur deserunt est fugiat harum illo nam neque pariatur porro quo quos repellendus sed sit sunt totam vero vitae voluptatibus!
        </h3>
      </div>
    </section>
    <section class="about_us">
      <img src="/semka24/static/untitled-gustave-courbet-1841-fe5b7fe6.jpg" alt="art">
      <div class="about_us__info">
        <h2 class="title">
          The Best Quality
        </h2>
        <h3 class="sub-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error exercitationem maiores repellat suscipit? Accusantium amet culpa dolor, doloribus ducimus esse fuga ipsum libero magnam magni nostrum obcaecati quos repudiandae sapiente sunt, vel, voluptas! Aliquid aperiam autem consectetur consequatur dolorem maxime obcaecati porro quas suscipit velit. Aliquam dignissimos facilis maxime minima quo? Adipisci assumenda, blanditiis consequuntur deserunt est fugiat harum illo nam neque pariatur porro quo quos repellendus sed sit sunt totam vero vitae voluptatibus!
        </h3>
      </div>
    </section>
    <my-connection-alert></my-connection-alert>
    `;

    AboutUsPage.observe();

    const video = document.querySelector('video');

    video.addEventListener('wheel', e => {
      let volume = video.volume
      if (e.deltaY > 0) {
        volume -= 0.05;
      } else  {
        volume += 0.05;
      }

      if (volume < 0) {
        volume = 0;
      } else if (volume > 1) {
        volume = 1;
      }

      video.volume = volume;

    }, { passive: true });
  }

  /**
   * Observes sections of the About Us page and adds a 'show' class when they intersect the viewport.
   * @static
   */
  static observe() {
    const sections = document.querySelectorAll('.about_us');

    const options = {
      root: document,
      rootMargin: '10px',
      threshold: 0.02,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        entry.isIntersecting
            ? entry.target.classList.add('show')
            : entry.target.classList.remove('show');
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
  }
}
