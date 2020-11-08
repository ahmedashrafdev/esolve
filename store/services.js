export const state = () => ({
  services: [
    {
      id: 1,
      first: "Website",
      second: "Development"
    },
    {
      id: 2,
      first: "Product",
      second: "Photography"
    },
    {
      id: 3,
      first: "Mobile App",
      second: "Development"
    }
  ],
  services2: [
    {
      id: 1,
      first: "Search Engine",
      second: "Optimization"
    },
    {
      id: 2,
      first: "Ecommerce",
      second: "Strategies"
    },
    {
      id: 3,
      first: "Business",
      second: "Solutions"
    }
  ]
});

export const getters = {
  services: ctx => ctx.services,
  services2: ctx => ctx.services2
};
