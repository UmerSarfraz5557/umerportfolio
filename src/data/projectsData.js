import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../assets";

const Store = {
  GOOGLE: "GOOGLE",
  APPLE: "APPLE",
};

const projectData = [
  {
    id: 1,
    title: "AI Proctor - Android & iOS",
    des: "AI Proctor is a mobile application designed for exam proctoring.It empowers educational institutions to administer online exams to their students using mobile devices. The application maintains the integrity of the examination process through features such as facial recognition, voice analysis, user activity tracking, real-time streaming, session recording, report generation, and a variety of other functionalities.",
    cover: projectOne,
    links: [
      {
        store: Store.GOOGLE,
        link: "https://play.google.com/store/apps/details?id=com.omarnasr.aiproctor",
      },
    ],
  },
  {
    id: 2,
    title: "Floota Satellital - Android & iOS",
    des: "Gadel, an innovative social media hub that revolutionizes online engagement. With Gadel user can unveil their creativity through effortless content sharing, engaging conversations, and captivating live streams. It has a uniquely inviting user interface, meticulously crafted to offer an intuitive and visually pleasing experience. Embracing the core value of free expression, Gadel empower it's users to share their thoughts respectfully, fostering an atmosphere of open dialogue.",
    cover: projectFive,
    links: [
      {
        store: Store.GOOGLE,
        link: "https://play.google.com/store/apps/details?id=com.gadel.seeuploadit",
      },
    ],
  },
  {
    id: 3,
    title: "Property Sale & Purchase - Android",
    des: "Razzaq Real estate is a propery sale & purchase app. Razzq Real Estate redefines property experiences. Seamlessly merging property buying, selling, and renting features, this app boasts a graceful UI that elegantly simplifies intricate real estate data.",
    cover: projectTwo,
    links: [
      {
        store: Store.GOOGLE,
        link: "https://play.google.com/store/apps/details?id=com.razzaq",
      },
    ],
  },
  {
    id: 4,
    title: "Gadel - Android & iOS",
    des: "Gadel, an innovative social media hub that revolutionizes online engagement. With Gadel user can unveil their creativity through effortless content sharing, engaging conversations, and captivating live streams. It has a uniquely inviting user interface, meticulously crafted to offer an intuitive and visually pleasing experience. Embracing the core value of free expression, Gadel empower it's users to share their thoughts respectfully, fostering an atmosphere of open dialogue.",
    cover: projectThree,
    links: [
      {
        store: Store.GOOGLE,
        link: "https://play.google.com/store/apps/details?id=com.gadel.seeuploadit",
      },
    ],
  },
  {
    id: 5,
    title: "Go Daala - Android",
    des: "Gadel, an innovative social media hub that revolutionizes online engagement. With Gadel user can unveil their creativity through effortless content sharing, engaging conversations, and captivating live streams. It has a uniquely inviting user interface, meticulously crafted to offer an intuitive and visually pleasing experience. Embracing the core value of free expression, Gadel empower it's users to share their thoughts respectfully, fostering an atmosphere of open dialogue.",
    cover: projectFour,
    links: [
      {
        store: Store.GOOGLE,
        link: "https://play.google.com/store/apps/details?id=com.gadel.seeuploadit",
      },
    ],
  },
 
];

export { projectData, Store };
