import { v4 as uuidv4 } from 'uuid';
import projectCredom from '../images/html-project-credom.png';
import projectAppri from '../images/project-appri.png';
import ProjectBuildPro from '../images/project-buildPro.png';
import projectLogio from '../images/project-logio.png';
import projectTrillo from '../images/projectTrillo.png';

const htmlProjects = [
  {
    id: uuidv4(),
    name: 'Credom - HTML Template',
    desc:
      'This is one of my Approved item on Themeforest that I build for on of my local client. Credom is a contruction web template.',
    thumb: projectCredom,
    live: 'https://themeforest.net/item/credom-construction-html-template/35522468',
    github: 'https://facebook.com/mehedihsajib00',
    target: '_black',
    alt: 'project',
    tech: ['sass', 'bootstrap', 'jquery'],
    status: 'Approved On Themeforest',
  },
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
    name: 'Appri',
    desc:
      "Trillo is a mobile app landing page with modern and clean looking design. I didn't do design part. I've convert this design to Code.",
    thumb: projectAppri,
    live: 'https://appriapp.netlify.app/',
    github: 'https://github.com/mehedihsajib/appriApp',
    target: '_black',
    alt: 'project',
    tech: ['bootstrap', 'sass', 'jquery'],
  },

  {
    id: uuidv4(),
    name: 'Trillo',
    desc:
      "Trillo is hotel booking service website. I've tried to clone this website from a udemy course. So you might seen this somewhere",
    thumb: projectTrillo,
    live: 'https://projecttrilllo.netlify.app/',
    github: 'https://github.com/mehedihsajib/Trillo--A-Travel-web-app-UI-with-SASS.git',
    target: '_black',
    alt: 'project',
    tech: ['html', 'sass'],
  },
];

export default htmlProjects;
