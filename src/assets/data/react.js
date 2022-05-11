import { v4 as uuidv4 } from 'uuid';
import projectCorona from '../images/project-corona.png';
import projectCredomReact from '../images/project-credom.avif';
import projectHisab from '../images/project-hisab.png';
import projectPizza from '../images/project-pizza.png';
import projectQuoteGen from '../images/project-quote-generator.png';
import projectWeatherApp from '../images/project-weatherApp.png';
import projectDustrix from '../images/react-project-dustrix.jpg';

const projectsReact = [
  {
    id: uuidv4(),
    name: 'Credom - React Template',
    desc:
      'Credom is a Consturction web template that I build for my a local client. This template is Approved on Themeforest.',
    thumb: projectCredomReact,
    live: 'https://themeforest.net/item/credom-construction-react-template/37461374',
    github: 'https://facebook.com/mehedihsajib00',
    target: '_black',
    alt: 'project',
    tech: ['sass', 'bootstrap', 'reactjs'],
    status: 'Approved On Themeforest',
  },
  {
    id: uuidv4(),
    name: 'Dustrix - React Template',
    desc:
      'Dustrix is a Consturction web template that I build for my a local client. He own a themeforest based small company. This template is Approved on Themeforest.',
    thumb: projectDustrix,
    live: 'https://themeforest.net/item/dustrix-construction-industry-react-template/34856534',
    github: 'https://facebook.com/mehedihsajib00',
    target: '_black',
    alt: 'project',
    tech: ['sass', 'bootstrap', 'reactjs'],
    status: 'Approved On Themeforest',
  },
  {
    id: uuidv4(),
    name: 'Hisab',
    desc:
      'Hisab is an admin dashboard where you can see user data, sales and product data with a chart.Also you can create new users and delete users and so on.',
    thumb: projectHisab,
    live: 'https://react-project-hisab.netlify.app/',
    github: 'https://github.com/mehedihsajib/Hisab-admin-dashboard',
    target: '_black',
    alt: 'project',
    tech: ['sass', 'mui', 'reactjs', 'chartjs'],
  },
  {
    id: uuidv4(),
    name: 'Corona',
    desc:
      'It is a COVID-19 Website that I converted to React Component from HTML Template for a local client. It has so many features like sticky nav, hamburger menu, carousel, accordion and so on.',
    thumb: projectCorona,
    live: 'https://react-template-corona.netlify.app/',
    github: 'https://github.com/mehedihsajib/react-template-Corona',
    target: '_black',
    alt: 'project',
    tech: ['css', 'bootstrap', 'react', 'react router'],
  },

  {
    id: uuidv4(),
    name: 'Pizza',
    desc:
      'Pizza is a simple landing page which I converted to React from a design. I took the design from a well known youtuber named Brian. This project has simple ui and side navbar also it is fully responsive',
    thumb: projectPizza,
    live: 'https://mehedi-react-pizza.netlify.app/',
    github: 'https://github.com/mehedihsajib/react-pizza-website',
    target: '_black',
    alt: 'project',
    tech: ['react', 'styled-components'],
  },

  {
    id: uuidv4(),
    name: 'Quote Generator',
    desc:
      "This is a very basic quote generator that generate famous quote randomly from a third party API called 'forismatic'. And also you can share the quote to your twitter profile.",
    thumb: projectQuoteGen,
    live: 'https://qutote-generator.netlify.app/',
    github: 'https://github.com/mehedihsajib/react-quote-generator',
    target: '_black',
    alt: 'project',
    tech: ['react', 'forismatic', 'axious'],
  },
  {
    id: uuidv4(),
    name: 'Get Weather',
    desc:
      'Through this app you can get weather report by searching the city name from all over the world. According to weather condition weather icon and image will be changed automatically.',
    thumb: projectWeatherApp,
    live: 'https://getweatherr.netlify.app/',
    github: 'https://github.com/mehedihsajib/react-weather-app',
    target: '_black',
    alt: 'project',
    tech: ['react', 'openweather', 'axious'],
  },
];

export default projectsReact;
