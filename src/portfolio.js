const header = {
  homepage: '',
  title: 'Thapa',
}

const about = {
  name: 'Priya Thapa',
  role: ' Software Engineer',
 
  resume: 'https://example.com/',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [

  {
    name: 'Link Alumni',
    description:
      'A webapplication that gathers information from alumni of SEMO and stores them in a databse which is only accessible by authorized faculties of the university.',
    stack: ['ASP.NET Core','C#', 'HTML', 'CSS', 'MySQL'],
    sourceCode: 'https://github.com/pthapa4s/LinkAlumni',
    livePreview: 'https://linkalumni20221127203158.azurewebsites.net/',
  },
  {
    name: 'Weather Application',
    description:
      'A webapplication that gives you the weather information by accessing your current location.',
    stack: ['HTML','CSS','JavaScript','Weather API'],
    sourceCode: 'https://github.com/pthapa4s/WeatherApplication',
    livePreview: 'https://pthapa4s.github.io/WeatherApplication/',
  },

]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'C++',
  'C#',
  'React',
  'ASP.NET Core',
  'Entity Framework',
  'Bootstrap',
  'Kendo UI',
  'MySQL',
  'Git',
]

const contact = {
  email: 'thapapriyaa@gmail.com',
}

export { header, about, projects, skills, contact }
