export const state = () => ({
  slides: [
    {
      id: 1,
      head: "Unique",
      word: "brand Stories",
      img: "http://innovationplans.com/idesign/avo2/avo-dark/img/slid/01.jpg"
    },
    {
      id: 2,
      head: "Fully",
      word: "Integrated Team",
      img: "https://esolve-eg.b-cdn.net/top-view-tools-marketing-min.jpg"
    },
    {
      id: 3,
      head: "Original",
      word: "Solutions",
      img: "https://esolve-eg.b-cdn.net/slid-1.jpg"
    }
  ]
});

export const getters = {
  slides: ctx => ctx.slides
};
