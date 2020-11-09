export const state = () => ({
  about:
    "We never underestimate any parts of each project as they're allessential to meeting the ultimate goal. you'll be engaged inwith our positive and enthusiastic attitude.",
  logos: [
    {
      id: 1,
      name: "readerscorner",
      link: "readerscorner.co",
      img:
        "http://readerscorner.co/storage/settings/May2019/S3fivD7C4Y2oXfnGaEsa.png"
    },
    {
      id: 2,
      name: "almomaiz hospital",
      link: "almomaizhospital.com",
      img:
        "http://almomaizhospital.com/storage/settings/October2020/A8rmJkiwnFJky7vpOIG0.png"
    },
    {
      id: 3,
      name: "eco racing",
      link: "eco-racing.com.eg",
      img: "http://eco-racing.com.eg/images/logo-hor.png"
    },
    {
      id: 4,
      name: "ealam badeel",
      link: "ealambadel.com",
      img:
        "http://ealambadel.com//storage/settings/October2020/Pbu1Yg3O6pnAjNPFD9Vv.png"
    }
  ],
  info: [
    {
      key: "logo",
      value: "https://esolve-eg.b-cdn.net/logolight.png"
    },
    {
      key: "phone",
      value: "01022052546"
    },
    {
      key: "email",
      value: "info@esolve-eg.com"
    },
    {
      key: "address",
      value: "11 Mokhtar Saeed, Al Golf ,Nasr City ,Cairo Governorate "
    }
  ],
  socials: [
    {
      key: "facebook-f",
      link: "https://www.facebook.com/pg/esolveeg"
    },
    {
      key: "behance",
      link: "https://www.behance.net/esolve"
    },
    {
      key: "instagram",
      link: "https://www.instagram.com/esolve.eg/"
    }
  ]
});

export const getters = {
  about: ctx => ctx.about,
  logos: ctx => ctx.logos,
  socials: ctx => ctx.socials,
  logo: ctx => ctx.info[0].value,
  contacts: ctx => {
    let info = [...ctx.info];
    info.shift();
    return info;
  }
};
