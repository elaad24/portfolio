import e_commerce1 from "./images/e_commerce/1.png";
import e_commerce2 from "./images/e_commerce/2.png";
import e_commerce3 from "./images/e_commerce/3.png";
import e_commerce4 from "./images/e_commerce/4.png";
import e_commerce5 from "./images/e_commerce/5.png";
import cash_register2 from "./images/cash_register/2.png";
import cash_register1 from "./images/cash_register/1.png";
import cash_register3 from "./images/cash_register/3.png";
import cash_register4 from "./images/cash_register/4.png";
import cash_register6 from "./images/cash_register/6.png";
import cash_register5 from "./images/cash_register/5.png";
import cash_register7 from "./images/cash_register/7.png";
import cash_register9 from "./images/cash_register/9.png";
import cash_register8 from "./images/cash_register/8.png";
import cash_register11 from "./images/cash_register/11.png";
import cash_register12 from "./images/cash_register/12.png";
import cash_register13 from "./images/cash_register/13.png";
import cash_register14 from "./images/cash_register/14.png";
import cash_register15 from "./images/cash_register/15.png";
import cash_register16 from "./images/cash_register/16.png";
import cash_register17 from "./images/cash_register/17.png";
import interview_project1 from "./images/interview_project/1.png";
import interview_project2 from "./images/interview_project/2.png";
import interview_project3 from "./images/interview_project/3.png";
import interview_project4 from "./images/interview_project/4.png";
import interview_project5 from "./images/interview_project/5.png";
import sms1 from "./images/sms/1.png";
import sms2 from "./images/sms/2.png";
import sms3 from "./images/sms/3.png";
import sms4 from "./images/sms/4.png";
import sms5 from "./images/sms/5.png";
import sms6 from "./images/sms/6.png";
import mardi_gra1 from "./images/mardi_gra/1.png";
import mardi_gra2 from "./images/mardi_gra/2.png";
import mardi_gra3 from "./images/mardi_gra/3.png";
import mardi_gra4 from "./images/mardi_gra/4.png";
import mardi_gra5 from "./images/mardi_gra/5.png";
import mardi_gra6 from "./images/mardi_gra/6.png";
import mardi_gra8 from "./images/mardi_gra/8.png";
import mardi_gra9 from "./images/mardi_gra/9.png";
import mardi_gra10 from "./images/mardi_gra/10.png";
import mardi_gra11 from "./images/mardi_gra/11.png";
import mardi_gra12 from "./images/mardi_gra/12.png";
import quiz1 from "./images/quiz/1.png";
import quiz2 from "./images/quiz/2.png";
import quiz3 from "./images/quiz/3.png";
import quiz4 from "./images/quiz/4.png";
import quiz6 from "./images/quiz/6.png";
import crypto_front1 from "./images/crypto_front/1.png";
import crypto_front2 from "./images/crypto_front/2.png";
import milk_and_honey1 from "./images/milk_and_honey/1.png";
import milk_and_honey2 from "./images/milk_and_honey/2.png";
import milk_and_honey3 from "./images/milk_and_honey/3.png";
import milk_and_honey4 from "./images/milk_and_honey/4.png";
import milk_and_honey5 from "./images/milk_and_honey/5.png";
import hang_man3 from "./images/hang_man/3.png";
import hang_man2 from "./images/hang_man/2.png";
import hang_man1 from "./images/hang_man/1.png";
import hang_man4 from "./images/hang_man/4.png";
import api1 from "./images/api/1.png";
import api2 from "./images/api/2.png";
import api3 from "./images/api/3.png";
import weather1 from "./images/weather/1.png";
import weather2 from "./images/weather/2.png";
import weather3 from "./images/weather/3.png";
import weather4 from "./images/weather/4.png";
import weather5 from "./images/weather/5.png";
import weather6 from "./images/weather/6.png";
import weather7 from "./images/weather/7.png";

export default {
  projects: [
    {
      name: "e_commerce",
      type: "full stack",
      technology: "react,redux,node.js,express.js,mongo-DB,responsive",
      project_link: "https://github.com/elaad24/fullstack_e_store-",
      images: [
        {
          title: "product page",
          text: "full profuct page , while product added to shopping cart ",
          image: e_commerce1,
        },
        {
          title: "add new product page",
          text: "seller page , when add new product to store",
          image: e_commerce2,
        },
        {
          title: "shoppng cart page",
          text: "user's shopping cart ",
          image: e_commerce3,
        },
        {
          title: "home page",
          text: "home page - to browse and see products  ",
          image: e_commerce4,
        },
        {
          title: "sing-in page",
          text: "sing up page - with error catching ",
          image: e_commerce5,
        },
      ],
    },
    {
      name: "cash register",
      type: "full stack",
      technology: "react,redux,next.js,Mysql",
      project_link: "https://github.com/elaad24/cashRegister",
      images: [
        {
          title: "store product interface",
          text: "cashier products imterface  ",
          image: cash_register2,
        },
        {
          title: "navigation page",
          text: "store main menu",
          image: cash_register1,
        },
        {
          title: "cash payment page - unpaid",
          text: "cashier cash intarfase before entering amount of money ",
          image: cash_register3,
        },
        {
          title: "cash payment page - paid",
          text: "cashier cash intarfase after entering amount of money",
          image: cash_register4,
        },
        {
          title: "credit payment page",
          text: " cashier credit card intarfase before paying",
          image: cash_register6,
        },
        {
          title: "store product interface -after transaction",
          text: "cashier product interface - showing the amount of change to return",
          image: cash_register5,
        },
        {
          title: "product data page",
          text: "admin product data table ",
          image: cash_register7,
        },
        {
          title: "edit product data",
          text: "edit item modal  - only admin can",
          image: cash_register9,
        },
        {
          title: "employees data page",
          text: "admin user data table",
          image: cash_register8,
        },
        {
          title: "employees time clock modal",
          text: "employees time clock interface to start / end shift",
          image: cash_register11,
        },
        {
          title: "employees start shift",
          text: "when employees start new shift  he get alert and approve ",
          image: cash_register12,
        },
        {
          title: "employees end shift ",
          text: "hen employees end shift he get alert and approve and data about the duration of the shift ",
          image: cash_register16,
        },
        {
          title: "time clock center page",
          text: "admin time clock center  ",
          image: cash_register13,
        },
        {
          title: "timeClock add shift",
          text: "admin add new shift modal",
          image: cash_register15,
        },
        {
          title: "timeClock edit shift",
          text: "admin update shift modal ",
          image: cash_register14,
        },
        {
          title: "store's stats from DB",
          text: "stats for the store that display the transactions and more ",
          image: cash_register17,
        },
      ],
    },
    {
      name: "interview project",
      type: "full stack",
      technology: "react,redux,node.js,express.js,Mysql,responsive",
      project_link: "https://github.com/elaad24/Whist-home-assignment",

      images: [
        {
          title: "product page",
          text: "home page - to browse and see products",
          image: interview_project1,
        },
        {
          title: "product + item in shopping cart ",
          text: "home page + products in shopping cart ",
          image: interview_project2,
        },
        {
          title: "item seles states ",
          text: "admin stats page - stats about the sales ",
          image: interview_project3,
        },
        {
          title: "product data page",
          text: "admin page - edit item date  ",
          image: interview_project4,
        },
        {
          title: "edit product data",
          text: "item edit modal - to cahnge data about the product",
          image: interview_project5,
        },
      ],
    },
    {
      name: "School system",
      type: "full stack",
      technology: "php,Mysql,responsive",
      project_link: "https://github.com/elaad24/PHP-school-management-system",
      images: [
        {
          title: "first page",
          text: "landing page - page for navigation and to send to log ing page ",
          image: sms1,
        },
        {
          title: "login page ",
          text: "ragular login page ",
          image: sms2,
        },
        {
          title: "strong user contact page ",
          text: "contact page for strong user - can see all the user contact  ",
          image: sms3,
        },
        {
          title: "strong user grades page",
          text: "grades page for strong user - can see all the user grades",
          image: sms4,
        },
        {
          title: "strong user add grades page",
          text: "add grade page - only strong user can accsess ",
          image: sms5,
        },
        {
          title: "admin page add user",
          text: "add user - only admin can do it ",
          image: sms6,
        },
      ],
    },
    {
      name: "Weather App",
      type: "front end",
      technology: "react, redux-toolkit , responsive, axios, bootstrap",
      project_link: "https://github.com/elaad24/PHP-school-management-system",
      images: [
        {
          title: "home page - classic ",
          text: "landing page - page in full width for desktops  -by defult dark mood off and temp in C ",
          image: weather1,
        },
        {
          title: "home page - dark mode and imperial units   ",
          text: "landing page - dark mode ON and temp in F - page in full width for desktops ",
          image: weather2,
        },

        {
          title: "searched for location page - like button clicked ",
          text: "after the user searched for specific location - like button clicked and temp in F - page in full width for desktops ",
          image: weather3,
        },
        {
          title: "responsive - searched for location page -dark mode ",
          text: "after the user searched for specific location and dark mood them is ON and location is liked ",
          image: weather4,
        },
        {
          title: "responsive - home page after units change to F ",
          text: "responsive after the use change the units the Toastify run  ",
          image: weather5,
        },
        {
          title: "searche bar & debounce - full page ",
          text: "when the user start type the auto complit start and the debounce  ",
          image: weather6,
        },

        {
          title: "home page  full width - after units change to F",
          text: "responsive after the use change the units the Toastify run",
          image: weather7,
        },
      ],
    },
    {
      name: "mardi_gra",
      type: "front end ",
      technology: "html5 , sass , vanila js , responsive ",
      project_link: "https://github.com/elaad24/html_css-mardi-gra-project",
      images: [
        {
          title: "opening video",
          text: "The opening video for the home page ",
          image: mardi_gra1,
        },
        {
          title: "links and warning",
          text: "importent links and covid-19 warning",
          image: mardi_gra2,
        },
        {
          title: "mayor letter",
          text: "mayor invitation for the parade ",
          image: mardi_gra3,
        },
        {
          title: "parallax effect and animations",
          text: "css effects and animation embedded trow the home page ",
          image: mardi_gra4,
        },
        {
          title: "attractions preview",
          text: "recomendations for hotles and attractions",
          image: mardi_gra5,
        },
        {
          title: "about page",
          text: "the about page ",
          image: mardi_gra6,
        },
        {
          title: "media page",
          text: "media page that is send the user to the target destination",
          image: mardi_gra8,
        },
        {
          title: "inside media category ",
          text: "photos library the is catecorise for every subject ",
          image: mardi_gra9,
        },
        {
          title: "store page ",
          text: "the store page that provides piclinks to their main site ",
          image: mardi_gra10,
        },
        {
          title: "FAQ page ",
          text: "frequently asked question page  ",
          image: mardi_gra11,
        },
        {
          title: "cantact us ",
          text: "cantact us form ",
          image: mardi_gra12,
        },
      ],
    },
    {
      name: "quiz game",
      type: "front end ",
      technology: "react, redux , responsive",
      project_link: "https://github.com/elaad24/trivia_game",
      images: [
        {
          title: "start page",
          text: "First page , set setting for the game ",
          image: quiz1,
        },
        {
          title: "quiz interface",
          text: "in game qestion - true/false , before user answer ",
          image: quiz2,
        },
        {
          title: "true answer interface",
          text: "in game qestion - multipule choice  , after user correct answer",
          image: quiz3,
        },
        {
          title: "false answer interface",
          text: "in game qestion - multipule choice  , after user incorrect answer",
          image: quiz4,
        },
        {
          title: "results page",
          text: "End game results page and game setting ",
          image: quiz6,
        },
      ],
    },
    {
      name: "milk & honey ",
      addition: "intervew mini project",
      type: "front end ",
      technology: "react, redux-toolkit , responsive",
      project_link: "https://github.com/elaad24/GKI_home-project-e-commerce",
      images: [
        {
          title: "landing page ",
          text: "home page and latest products ",
          image: milk_and_honey1,
        },
        {
          title: "product page - by category",
          text: "product page - order by category  ",
          image: milk_and_honey2,
        },
        {
          title: "contact us page",
          text: "contact us page with google map api ",
          image: milk_and_honey3,
        },
        {
          title: "shopping cart page ",
          text: "shopping cart page with the ability to delete / increse/decrese item quantity",
          image: milk_and_honey4,
        },
        {
          title: "product page ",
          text: "dynamic generated product page  ",
          image: milk_and_honey5,
        },
      ],
    },
    {
      name: "crypto front",
      addition: " intervew mini project",

      type: "front end ",
      technology: "react",
      images: [
        {
          title: "crypto data page",
          text: "display for random crypto coinse ",
          image: crypto_front1,
        },
        {
          title: "crypto data - highlight",
          text: "after user picked couple  crypto ",
          image: crypto_front2,
        },
      ],
    },

    {
      name: "hang man game",
      type: "front end ",
      technology: "react, javaScript , responsive",
      project_link: "https://github.com/elaad24/hangman_game",
      images: [
        {
          title: "start game",
          text: "inition of the game -before user answer",
          image: hang_man3,
        },
        {
          title: "lose in game",
          text: "the end of the game - the user lost ",
          image: hang_man2,
        },
        {
          title: "win in game",
          text: "the end of the game - the user win",
          image: hang_man1,
        },
        {
          title: "before game",
          text: "befor game inition",
          image: hang_man4,
        },
      ],
    },
    {
      name: "covid api",
      type: "back end ",
      technology: "node.js, express.js , mysql",
      project_link: "https://github.com/elaad24/covid-19-API",
      images: [
        {
          title: "get all data",
          text: "get all data from the api - url blank",
          image: api1,
        },
        {
          title: "get data by query string",
          text: "get specific data - by url param and querry sting ",
          image: api2,
        },
        {
          title: "get data by params",
          text: "get specific data - by url param ",
          image: api3,
        },
      ],
    },
  ],
};
