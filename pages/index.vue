<template>
  <div>
    <!-- ==================== Start Slider ==================== -->

    <header class="slider slider-prlx">
      <div class="swiper-container parallax-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="slide in slides" :key="slide.id">
            <div
              class="bg-img valign"
              :data-background="slide.img"
              data-overlay-dark="6"
            >
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="caption dig">
                      <h1 data-splitting>
                        {{ slide.head }}
                        <div class="tline">{{ slide.word }}</div>
                      </h1>
                      <a href="#works" class="simple-btn mt-50">
                        <span>Discover Works</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- slider setting -->
        <div class="setone setwo">
          <div
            class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i class="fas fa-chevron-right"></i>
          </div>
          <div
            class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i class="fas fa-chevron-left"></i>
          </div>
        </div>
        <div class="swiper-pagination top botm custom-font"></div>

        <div class="social-icon">
          <a href="#0"><i class="fab fa-facebook-f"></i></a>
          <a href="#0"><i class="fab fa-twitter"></i></a>
          <a href="#0"><i class="fab fa-behance"></i></a>
          <a href="#0"><i class="fab fa-pinterest-p"></i></a>
        </div>
      </div>
    </header>

    <!-- ==================== End Slider ==================== -->

    <!-- ==================== Start blc-sec ==================== -->

    <section id="about" class="blc-sec section-padding pb-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="intro md-mb30">
              <div class="sub-title">
                <h6>Know Us Better</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h2 class="extra-title wow" data-splitting>
                We help to create strategies, design & development.
              </h2>
            </div>
          </div>
          <div class="col-lg-5 valign">
            <div class="full-width">
              <p class="wow txt" data-splitting>
                {{ about }}
              </p>
              <a
                href="#works"
                class="simple-btn custom-font mt-20 wow"
                data-splitting
                ><span>Discover works</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== End blc-sec ==================== -->

    <!-- ==================== Start Services ==================== -->

    <section id="services" class="services section-padding">
      <div class="container">
        <div class="row rone">
          <div
            v-for="service in services"
            :key="service.id"
            class="col-lg-3 wow fadeInUp"
            :class="{ 'offset-lg-1': service.id > 1 }"
            data-wow-delay=".4s"
          >
            <div class="mas-item">
              <span class="icon pe-7s-monitor"></span>
              <h6>
                {{ service.first }} <br />
                {{ service.second }}
              </h6>
              <div class="bg-color"></div>
            </div>
          </div>
        </div>
        <div class="row rtwo">
          <div
            v-for="service in services2"
            :key="service.id"
            class="col-lg-3 wow fadeInUp"
            :class="{ 'offset-lg-1': service.id > 1 }"
            data-wow-delay=".4s"
          >
            <div class="mas-item">
              <span class="icon pe-7s-monitor"></span>
              <h6>
                {{ service.first }} <br />
                {{ service.second }}
              </h6>
              <div class="bg-color"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== End Services ==================== -->

    <!-- ==================== Start block-sec ==================== -->

    <section id="testemonials" class="block-sec">
      <div
        class="background bg-img section-padding pb-0"
        data-background="img/slid/1.jpg"
        data-overlay-dark="8"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="vid-area">
                <div class="vid-icon">
                  <a class="vid" href="https://vimeo.com/127203262">
                    <div class="vid-butn">
                      <span class="icon">
                        <i class="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>

                <div class="cont">
                  <h3 class="wow" data-splitting>
                    So that's us. There's no other way to put it.
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
              <div class="testim-box">
                <div class="head-box">
                  <h6 class="wow fadeIn" data-wow-delay=".5s">
                    Our Happy Clients
                  </h6>
                  <h4 class="wow fadeInLeft" data-wow-delay=".5s">
                    What Client's Say?
                  </h4>
                </div>
                <div class="slic-item wow fadeInUp" data-wow-delay=".5s">
                  <div class="item">
                    <p>
                      Nulla metus metus ullamcorper vel tincidunt sed euismod
                      nibh volutpat velit class aptent taciti sociosqu ad
                      litora.
                    </p>
                    <div class="info">
                      <div class="img">
                        <div class="img-box">
                          <img src="img/clients/1.jpg" alt="" />
                        </div>
                      </div>
                      <div class="cont">
                        <div class="author">
                          <h6 class="author-name custom-font">Alex Regelman</h6>
                          <span class="author-details"
                            >Co-founder, Colabrio</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <p>
                      Nulla metus metus ullamcorper vel tincidunt sed euismod
                      nibh volutpat velit class aptent taciti sociosqu ad
                      litora.
                    </p>
                    <div class="info">
                      <div class="img">
                        <div class="img-box">
                          <img src="img/clients/2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="cont">
                        <div class="author">
                          <h6 class="author-name custom-font">Alex Regelman</h6>
                          <span class="author-details"
                            >Co-founder, Colabrio</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <p>
                      Nulla metus metus ullamcorper vel tincidunt sed euismod
                      nibh volutpat velit class aptent taciti sociosqu ad
                      litora.
                    </p>
                    <div class="info">
                      <div class="img">
                        <div class="img-box">
                          <img src="img/clients/3.jpg" alt="" />
                        </div>
                      </div>
                      <div class="cont">
                        <div class="author">
                          <h6 class="author-name custom-font">Alex Regelman</h6>
                          <span class="author-details"
                            >Co-founder, Colabrio</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== End block-sec ==================== -->

    <!-- ==================== Start Skills Circle ==================== -->

    <section class="skills-circle sub-bg pt-50 pb-50">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="">
              <div class="row">
                <div class="col-md-6">
                  <div class="item wow fadeInLeft" data-wow-delay=".6">
                    <div class="skill" data-value="0.9">
                      <span class="custom-font">90%</span>
                    </div>
                    <div class="cont">
                      <span>Project</span>
                      <h6>Consulting</h6>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="item wow fadeInLeft" data-wow-delay=".3">
                    <div class="skill" data-value="0.75">
                      <span class="custom-font">75%</span>
                    </div>
                    <div class="cont">
                      <span>App</span>
                      <h6>Development</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== End Skills Circle ==================== -->

    <!-- ==================== Start works ==================== -->

    <section id="works" class="portfolio section-padding pb-70">
      <div class="container">
        <div class="sec-head custom-font">
          <h6>Portfolio</h6>
          <h3>Our Works.</h3>
          <span class="tbg text-right">Portfolio</span>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <!-- filter links -->
          <div class="filtering text-center col-12">
            <div class="filter">
              <span data-filter="*" class="active">All</span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span>
            </div>
          </div>

          <!-- gallery -->
          <div class="gallery full-width">
            <!-- gallery item -->
            <div
              class="col-lg-4 col-md-6 items graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <a href="project-details.html" class="imago wow">
                  <img src="img/portfolio/mas/01.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </a>
              </div>
              <div class="cont">
                <h6>Creativity Demand</h6>
                <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
              </div>
            </div>

            <!-- gallery item -->
            <div
              class="col-lg-4 col-md-6 items web lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <a href="project-details.html" class="imago wow">
                  <img src="img/portfolio/mas/02.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </a>
              </div>
              <div class="cont">
                <h6>Through The Breaking</h6>
                <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
              </div>
            </div>

            <!-- gallery item -->
            <div
              class="col-lg-4 col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <a href="project-details.html" class="imago wow">
                  <img src="img/portfolio/mas/03.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </a>
              </div>
              <div class="cont">
                <h6>Create With Creatives</h6>
                <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
              </div>
            </div>

            <!-- gallery item -->
            <div
              class="col-lg-4 col-md-6 items graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <a href="project-details.html" class="imago wow">
                  <img src="img/portfolio/mas/04.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </a>
              </div>
              <div class="cont">
                <h6>Energies of Love</h6>
                <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
              </div>
            </div>

            <!-- gallery item -->
            <div
              class="col-lg-4 col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <a href="project-details.html" class="imago wow">
                  <img src="img/portfolio/mas/05.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </a>
              </div>
              <div class="cont">
                <h6>See It Yourself</h6>
                <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
              </div>
            </div>

            <!-- gallery item -->
            <div
              class="col-lg-4 col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <a href="project-details.html" class="imago wow">
                  <img src="img/portfolio/mas/06.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </a>
              </div>
              <div class="cont">
                <h6>Blast From The Past</h6>
                <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== End works ==================== -->

    <!-- ==================== Start clients Brands ==================== -->

    <section id="clients" class="clients section-padding sub-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 valign">
            <div class="sec-head custom-font mb-0">
              <h6>Clients</h6>
              <h3>
                Our <br />
                Clients.
              </h3>
            </div>
          </div>
          <div class="col-lg-8">
            <div>
              <div class="row bord">
                <div class="col-md-3 col-6 brands">
                  <div class="item wow fadeIn" data-wow-delay=".3s">
                    <div class="img">
                      <img src="img/clients/brands/01.png" alt="" />
                      <a href="#0" class="link" data-splitting
                        >www.Imedia.com</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-6 brands">
                  <div class="item wow fadeIn" data-wow-delay=".6s">
                    <div class="img">
                      <img src="img/clients/brands/02.png" alt="" />
                      <a href="#0" class="link" data-splitting
                        >www.Imedia.com</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-6 brands">
                  <div class="item wow fadeIn" data-wow-delay=".8s">
                    <div class="img">
                      <img src="img/clients/brands/03.png" alt="" />
                      <a href="#0" class="link" data-splitting
                        >www.Imedia.com</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-6 brands">
                  <div class="item wow fadeIn" data-wow-delay=".3s">
                    <div class="img">
                      <img src="img/clients/brands/04.png" alt="" />
                      <a href="#0" class="link" data-splitting
                        >www.Imedia.com</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 col-6 brands">
                  <div class="item wow fadeIn" data-wow-delay=".4s">
                    <div class="img">
                      <img src="img/clients/brands/05.png" alt="" />
                      <a href="#0" class="link" data-splitting
                        >www.Imedia.com</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-6 brands">
                  <div class="item wow fadeIn" data-wow-delay=".7s">
                    <div class="img">
                      <img src="img/clients/brands/06.png" alt="" />
                      <a href="#0" class="link" data-splitting
                        >www.Imedia.com</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-6 brands">
                  <div class="item wow fadeIn" data-wow-delay=".5s">
                    <div class="img">
                      <img src="img/clients/brands/07.png" alt="" />
                      <a href="#0" class="link" data-splitting
                        >www.Imedia.com</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-6 brands">
                  <div class="item wow fadeIn" data-wow-delay=".3s">
                    <div class="img">
                      <img src="img/clients/brands/08.png" alt="" />
                      <a href="#0" class="link" data-splitting
                        >www.Imedia.com</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== End clients Brands ==================== -->

    <!-- ==================== Start call-to-action ==================== -->

    <section class="contact-sec section-padding" id="contact">
      <div class="container">
        <div class="sec-head custom-font text-center">
          <h6 class="wow fadeIn" data-wow-delay=".5s">Get In Touch</h6>
          <h3 class="wow" data-splitting>Contact Us.</h3>
          <span class="tbg">Contact</span>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="form wow fadeInUp" data-wow-delay=".5s">
              <form
                id="contact-form"
                method="post"
                action="http://innovationplans.com/idesign/avo/contact.php"
              >
                <div class="messages"></div>

                <div class="controls">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required="required"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="text-center">
                        <button
                          type="submit"
                          class="simple-btn custom-font cursor-pointer"
                        >
                          <span>Send Message</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapGetters("slider", ["slides"]),
    ...mapGetters("static", ["about"]),
    ...mapGetters("services", ["services"]),
    ...mapGetters("services2", ["services2"])
  }
};
</script>
