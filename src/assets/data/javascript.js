import { v4 as uuidv4 } from 'uuid';
import projectBeatMonkey from '../images/project-beatMonkey.png';
import projectQuoteGen from '../images/project-quote-generator.png';
import projectWordBeater from '../images/project-wordBeater.png';

const javascriptProjects = [
  {
    id: uuidv4(),
    name: 'Quote Generator',
    desc:
      "Quote Genarator is small app that genarate some cool quote from server. You can request for new quote by clicking 'New Quote'. Also you can share your favourite quote on twitter profile. Project idea from a udemy course.",
    thumb: projectQuoteGen,
    live: 'https://quotegenarator.netlify.app/',
    github: 'https://github.com/mehedihsajib/quoteGenarator',
    target: '_black',
    alt: 'project',
    tech: ['css', 'javascript', 'forismatic'],
  },
  {
    id: uuidv4(),
    name: 'WordBeater',
    desc:
      "WordBeater is fun little game for test your typing speed. It you will give your few seconds and count number of word you've typed. Project idea from one of my favourite youtuber 'Traversy Media'.",
    thumb: projectWordBeater,
    live: 'https://wordbeatter.netlify.app/',
    github: 'https://github.com/mehedihsajib/wordBeater',
    target: '_black',
    alt: 'project',
    tech: ['css', 'javascript'],
  },

  {
    id: uuidv4(),
    name: 'BeatMonkey',
    desc:
      "This is a fun little Beat Maker which will make some beat with your mose click. I took this idea from one of my favourite youtuber 'Dev Ed'.",
    thumb: projectBeatMonkey,
    live: 'https://beatmonkey.netlify.app/',
    github: 'https://github.com/mehedihsajib/Beat-Monkey-with-Vanilla-JS',
    target: '_black',
    alt: 'project',
    tech: ['css', 'javascript'],
  },
];

export default javascriptProjects;
