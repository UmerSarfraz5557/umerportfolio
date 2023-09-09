import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../assets";

const Store = {
  GOOGLE: "GOOGLE",
  APPLE: "APPLE",
};

const projectData = [
  {
    id: 1,
    title: "AI Proctor - Exam Proctoring Soloution",
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
    title: "Flota Satellital - Fleet Management/Tracking",
    des: "An innovative fleet management app, tailored for optimizing vehicular operations. This cutting-edge application empowers administrators with an interactive map display showcasing vehicle routes, while offering comprehensive vehicle insights and control. With features like real-time on/off toggles and dynamic route playback, administrators can effortlessly navigate through fleet activities. What sets it apart is the array of customizable UI formats, demonstrating advanced user interface design.",
    cover: projectFive,
    links: [],
  },
  {
    id: 3,
    title: "Razzaq - Property Sale & Purchase",
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
    title: "Marca De Choferes - Employee Tracking",
    des: "The Ultimate App for Tracking and monitoring employees: Streamline work activity tracking with Marca De Choferes – an elegant, user-friendly app tailored for truck drivers. Effortlessly log work, break times, and status with its intuitive interface. Enjoy offline and online functionality for use anywhere. Stay compliant and efficient while on the road. Elevate your trucking experience with Marca De Choferes. Your journey, simplified.",
    cover: projectSix,
    links: [
      
    ],
  },
  {
    id: 5,
    title: "Gadel - Social Media",
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
    id: 6,
    title: "Go Daala - Truck Hailing App",
    des: "Go Daala - solution for hassle-free heavy load transportation. With it's sleek and intuitive app, moving massive loads from point A to B has never been smoother. It's top-notch user interface ensures effortless navigation, while integrated maps provide real-time tracking and optimized routes. Go Daala connects you with a network of reliable and specialized truck drivers.",
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
