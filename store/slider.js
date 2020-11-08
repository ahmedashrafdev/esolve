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
      head: "Digital",
      word: "Design Awards",
      img: "http://innovationplans.com/idesign/avo2/avo-dark/img/slid/03.jpg"
    },
    {
      id: 3,
      head: "Original",
      word: "Solutions",
      img: "http://innovationplans.com/idesign/avo2/avo-dark/img/slid/02.jpg"
    }
  ]
});

export const getters = {
  slides: ctx => ctx.slides
};
