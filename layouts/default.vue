<template>
  <div>
    <div id="preloader"></div>

    <!-- ==================== End Loading ==================== -->

    <!-- ==================== Start progress-scroll-button ==================== -->

    <div class="progress-wrap cursor-pointer">
      <svg
        class="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>

    <!-- ==================== End progress-scroll-button ==================== -->

    <!-- ==================== Start cursor ==================== -->

    <div class="mouse-cursor cursor-outer"></div>
    <div class="mouse-cursor cursor-inner"></div>

    <!-- ==================== End cursor ==================== -->

    <!-- ==================== Start Navbar ==================== -->

    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- Logo -->
        <a class="logo" href="#">
          <img :src="logo" alt="logo" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="icon-bar"><i class="fas fa-bars"></i></span>
        </button>

        <!-- navbar links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul v-if="$route.name == 'index'" class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#testemonials">Testemonials</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#works">Works</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#clients">Clients</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- ==================== End Navbar ==================== -->
    <Nuxt />

    <footer class="footer-half sub-bg section-padding pb-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="cont">
              <div class="logo">
                <a href="" class="pointer">
                  <img :src="logo" alt="" />
                </a>
              </div>
              <div class="con-info custom-font">
                <ul>
                  <li v-for="contact in contacts" :key="contact.key">
                    <span>{{ contact.key }} : </span> {{ contact.value }}
                  </li>
                </ul>
              </div>
              <div class="social-icon">
                <h6 class="custom-font stit simple-btn">Follow Us</h6>
                <div class="social">
                  <a
                    class="icon"
                    v-for="link in socials"
                    :key="link.key"
                    :href="link.link"
                    target="_blank"
                  >
                    <i :class="`fab fa-${link.key}`"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-2">
            <div class="subscribe mb-50">
              <h6 class="custom-font stit simple-btn">Newslatter</h6>
              <p>Sign up for subscribe out newsletter!</p>
              <form>
                <div class="form-group custom-font">
                  <input
                    type="email"
                    name="subscribe"
                    placeholder="Your Email"
                  />
                  <button class="cursor-pointer">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="copyrights text-center">
          <p>
            © 2020, Esolve Website. Made by
            <nuxt-link to="index">Esolve</nuxt-link>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("static", ["logo", "contacts", "socials"])
  }
};
</script>
