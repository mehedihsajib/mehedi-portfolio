import { v4 as uuidv4 } from 'uuid';
import ProjectBuildPro from '../images/project-buildPro.png';
import projectLogio from '../images/project-logio.png';
import projectPizza from '../images/project-pizza.png';
import projectQuoteGen from '../images/project-quote-generator.png';
import projectWeatherApp from '../images/project-weatherApp.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Logio',
    desc:
      "Logio is a transportation company website. It has approx 20 pages. I've converted these PSD to HTML in arround one month. It was a task of my recent remote internship",
    thumb: projectLogio,
    live: 'https://project-logio.netlify.app/',
    github: 'https://github.com/mehedihsajib/Logio',
    target: '_black',
    alt: 'project',
    tech: ['sass', 'bootstrap', 'jquery'],
  },
  {
    id: uuidv4(),
    name: 'Build Pro',
    desc:
      "BuildPro is a construction company website. It has 3 pages. I've converted these PSD to HTML. It was a another task befoter getting the intership",
    thumb: ProjectBuildPro,
    live: 'https://project-buildpro.netlify.app/',
    github: 'https://github.com/mehedihsajib/buildPro',
    target: '_black',
    alt: 'project',
    tech: ['sass', 'bootstrap', 'jquery'],
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
  {
    id: uuidv4(),
    name: 'Pizza',
    desc:
      'Pizza is a simple landing page which I converted to React from from a design. I took the design from a well known youtuber named Brian. This project has simple ui and side navbar also it is fully responsive',
    thumb: projectPizza,
    live: 'https://mehedi-react-pizza.netlify.app/',
    github: 'https://github.com/mehedihsajib/react-pizza-website',
    target: '_black',
    alt: 'project',
    tech: ['react', 'styled-components'],
  },
];

export default projects;
