import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./testimonial.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialTitle}>
          <h3>Client Testimonials</h3>
        </div>
        <div className={styles.testimonialSliders}>
          <Carousel responsive={responsive} showDots={true} infinite={true}>
            <div className={styles.testimonialSlider}>
              <div className={styles.testimonialInnerSlide}>
                <div className={styles.testimonialImage}>
                  <img src="./main-section1.png" />
                </div>
                <div className={styles.testimonialContent}>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae.
                  </p>
                  <h6>John Doe, ABC Company</h6>
                </div>
              </div>
            </div>
            <div className={styles.testimonialSlider}>
              <div className={styles.testimonialInnerSlide}>
                <div className={styles.testimonialImage}>
                  <img src="./main-section1.png" />
                </div>
                <div className={styles.testimonialContent}>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae.
                  </p>
                  <h6>John Doe, ABC Company</h6>
                </div>
              </div>
            </div>
            <div className={styles.testimonialSlider}>
              <div className={styles.testimonialInnerSlide}>
                <div className={styles.testimonialImage}>
                  <img src="./main-section1.png" />
                </div>
                <div className={styles.testimonialContent}>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae.
                  </p>
                  <h6>John Doe, ABC Company</h6>
                </div>
              </div>
            </div>
            <div className={styles.testimonialSlider}>
              <div className={styles.testimonialInnerSlide}>
                <div className={styles.testimonialImage}>
                  <img src="./main-section1.png" />
                </div>
                <div className={styles.testimonialContent}>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae.
                  </p>
                  <h6>John Doe, ABC Company</h6>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
