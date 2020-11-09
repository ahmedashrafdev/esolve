export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  mode: "spa",
  head: {
    title: "esolve",
    __dangerouslyDisableSanitizers: ["script"],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keywords",
        content:
          "Web Design, Website Design, Egypt, CMS, content management software, Web Development, webgui, web content management, web publishing,content server, content management systems, content management, publishing of web content, website, content management support, dynamic content, dynamic content editor, e-business information, ebusiness solutions, e-commerce software,  internet, intranet,   portal, portal content management, site cms, template, web authoring software, web authoring solution, web publishing tools,   asset management, file management,web design in egypt, web design ,egyptian company,website,web hosting,intranet,hosting,web serivces,cairo,web development,internet,e-commerce,search engines,domain name, Egyptian, Arab, Arabic, web, banners, advertising, solutions, graphics, flash, Egypt, Alexandria,  develop,design, logo design, portal design,web programming, tanta, مصر، القاهرة، الإسكندرية، تصميم، تصميم مواقع، إستضافة مواقع، مقدمات فلاش، أنظمة إدارة المواقع، تجارة إلكترونية، بريد إلكترونى، روابط دعائية، بانرز، حملات دعائية، شركة تصميم وب"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Best Digital Company for Dynamic Website Development in Cairo, Egyp"
      }
    ],
    script: [
      {
        hid: "gtm-script1",
        src: "/js/jquery-3.0.0.min.js",
        defer: true
      },
      {
        hid: "gtm-script2",
        src: "/js/jquery-migrate-3.0.0.min.js",
        defer: true
      },
      {
        hid: "gtm-script3",
        src: "/js/plugins.js",
        defer: true
      },
      {
        hid: "gtm-script4",
        src: "/js/scripts.js",
        defer: true
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        type: "image/x-icon",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&amp;display=swap"
      },
      {
        rel: "stylesheet",
        type: "image/x-icon",
        href:
          "https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
      },
      {
        rel: "stylesheet",
        type: "image/x-icon",
        href:
          "https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&amp;display=swap"
      },
      {
        rel: "stylesheet",
        type: "image/x-icon",
        href:
          "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&amp;display=swap"
      },
      {
        rel: "stylesheet",
        type: "image/x-icon",
        href:
          "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&amp;display=swap"
      }
    ]
  },

  target: "static",
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/css/plugins.css", "@/assets/css/style.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: "~/plugins/lightbox.js",
      ssr: false
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
