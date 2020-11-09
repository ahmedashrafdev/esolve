export const state = () => ({
  projects: [
    {
      id: 1,
      category_id: 1,
      name: "Cinematech",
      category: "ui / ux , mobile development",
      src: "https://esolve-eg.b-cdn.net/work-01.jpg",
      thumb: "https://esolve-eg.b-cdn.net/work-01_tn.jpg",
      caption: "Cinematech Mobile app"
    },
    {
      id: 2,
      category_id: 1,
      name: "Kids App",
      category: "ui / ux , mobile development",
      src: "https://esolve-eg.b-cdn.net/work-02.jpg",
      thumb: "https://esolve-eg.b-cdn.net/work-02_tn.jpg",
      caption: "Kids App"
    },
    {
      id: 3,
      category_id: 2,
      name: "Almomaiz Hospital",
      category: "web design , web development",
      src: "https://esolve-eg.b-cdn.net/work-03.jpg",
      thumb: "https://esolve-eg.b-cdn.net/work-03_tn.jpg",
      caption: "Almomaiz Hospital website"
    },
    {
      id: 4,
      category_id: 2,
      name: "Eco Racing",
      category: "web design , web development",
      src: "https://esolve-eg.b-cdn.net/work-04.jpg",
      thumb: "https://esolve-eg.b-cdn.net/work-04_tn.jpg",
      caption: "Eco Racing websie"
    },
    {
      id: 5,
      category_id: 3,
      name: "Adawy Group",
      category: "Identity",
      src: "https://esolve-eg.b-cdn.net/work-05.jpg",
      thumb: "https://esolve-eg.b-cdn.net/work-05_tn.jpg",
      caption: "Adawy Group identity design"
    },
    {
      id: 6,
      category_id: 3,
      name: "Ginger",
      category: "Identity",
      src: "https://esolve-eg.b-cdn.net/work-06.jpg",
      thumb: "https://esolve-eg.b-cdn.net/work-06_tn.jpg",
      caption: "Ginger identity"
    }
  ],
  video: [
    {
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRx1TQ3PfnhWmLUWcxrGj3atDCZVTVBKetMOWVVQ4ipIStW03pY",
      sources: [
        {
          src: "https://www.youtube.com/watch?v=9WXKojHjTZU",
          type: "video/mp4"
        }
      ],
      type: "video",
      caption: "Motion video",
      width: 800,
      height: 600
    }
  ],
  categories: [
    {
      id: 1,
      name: "Mobile App"
    },
    {
      id: 2,
      name: "Webdesign"
    },
    {
      id: 3,
      name: "Identity"
    }
  ]
});

export const getters = {
  projects: ctx => ctx.projects,
  categories: ctx => ctx.categories
};
