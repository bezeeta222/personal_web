import React from 'react'

import './styles/resume.css'
import './styles/icon-colors.css'

const faceCount = () => {
  return (
    <span>
      ≈5·10<span style={{ verticalAlign: 'super', fontSize: '12px' }}>7</span>{' '}
      faces
    </span>
  )
}

const squareListType = { listStyleType: 'square', marginTop: 0 }

const works = [
  {
    company: 'Thuleen Sdn Bhd',
    position: 'Full Stack Software & Block Chain Engineer ',
    date: '2021 — Present',
    description: () => {
      return (
        <ul style={squareListType}>
          <li>
            Collaborating with managers to determine blockchain technology needs
            and envisaged functionalities.
          </li>
          <li>
            Applying the latest cryptology techniques to protect digital
            transaction data against cyberattacks and information hacks.
          </li>
          <li>
            Keeping up with current blockchain technologies and cryptography
            methods.
          </li>
          <li>
            develope using a react and express in the developement cycle
          </li>
        </ul>
      )
    },
    technologies: [
      { name: 'JavaScript', icon: 'fab fa-js-square' },
      { name: 'Node.js', icon: 'fab fa-node' },
      { name: 'Three.js', icon: 'fas fa-cubes' },
      { name: 'React.js', icon: 'fab fa-react' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'GCloud', icon: 'fab fa-google' },
      { name: 'Kubernetes', icon: 'fas fa-dharmachakra' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'MongoDB', icon: 'fab fa-mdb' },
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'Ubuntu', icon: 'fab fa-ubuntu' },
      { name: 'Git', icon: 'fab fa-git-square' },
      { name: 'Jira', icon: 'fab fa-jira' },
      { name: 'Confluence', icon: 'fab fa-confluence' },
      { name: 'ethereum', icon: 'fab fa-ethereum' },
    ],
  },
  {
    company: 'Bawallory Sdn Bhd',
    position: 'Full Stack Software  ',
    date: '2022 - current ',
    description: () => {
      return (
        <ul style={squareListType}>
          <li>
            Work with development teams and products managers to ideate software solutions
          </li>
          <li>
            	Develop and amnage well funtionings database and application
          </li>
          <li>
            	Write effective API

          </li>
          <li>
            	Test software to ensure responsive and efficiency
          </li>
          <li>
            	Troubleshoot, debug and upgrade software

          </li>
          <li>
            	Work with Back-end developers to integrate ui components with apis and databases

          </li>
          <li>
            	Gather and refine specifications and requirement based on technical requirement or ux design

          </li>
          <li>
            	Debug errors, troubleshoot issues and perform routine performance optimization

          </li>
          <li>
            	On-site Search engine opimization(SEO)

          </li>
          <li>
            	Stay plugged into emerging technologies and industry trends

          </li>

        </ul>
      )
    },
    technologies: [
      { name: 'JavaScript', icon: 'fab fa-js-square' },
      { name: 'Node.js', icon: 'fab fa-node' },
      { name: 'Three.js', icon: 'fas fa-cubes' },
      { name: 'React.js', icon: 'fab fa-react' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'GCloud', icon: 'fab fa-google' },
      { name: 'Kubernetes', icon: 'fas fa-dharmachakra' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'MongoDB', icon: 'fab fa-mdb' },
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'Ubuntu', icon: 'fab fa-ubuntu' },
      { name: 'Git', icon: 'fab fa-git-square' },
      { name: 'Jira', icon: 'fab fa-jira' },
      { name: 'Confluence', icon: 'fab fa-confluence' },
      { name: 'ethereum', icon: 'fab fa-ethereum' },
    ],
  },

]

const skills = [
  { name: 'Malay language', level: '100%', title: 'Native' },
  { name: 'English language', level: '80%', title: 'Intermediate' },
  { name: 'JavaScript', level: '100%', title: 'Expert' },
  { name: 'TypeScript', level: '80%', title: 'Advanced' },
  { name: 'Git', level: '80%', title: 'Advanced' },
  { name: 'React.js', level: '100%', title: 'Advanced' },
  { name: 'Google Cloud Platform', level: '65%', title: 'Intermediate' },
  { name: 'redux & redux saga', level: '60%', title: 'Intermediate' },
  { name: 'NodeJs & Express', level: '60%', title: 'Intermediate' },
  { name: 'Docker', level: '50%', title: 'Intermediate' },
  { name: 'Python', level: '40%', title: 'Beginner' },
  { name: 'Next.js', level: '30%', title: 'Beginner' },
  { name: 'Mysql', level: '80%', title: 'Advance' },
  { name: 'HardHat', level: '80%', title: 'Advance' },
  { name: 'Web3', level: '80%', title: 'Advance' },
]

export default function Resume() {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <div className="flex-row">
                <div>
                  <h3>UNIVERSITI TEKNOLOGY MARA(UiTM)</h3>
                  <p className="info">
                    <em className="date">2014 — 2018</em>

                    <span>&bull;</span>
                    DIPLOMA COMPUTER SAINS '&' MATHEMATIK
                  </p>
                  <p>
                    <strong>Program:</strong> DIPLOMA COMPUTER SAINS '&'
                    MATHEMATIK
                    <br />
                  </p>
                </div>
                <i
                  className="fas fa-3x fa-user-graduate success-color"
                  style={{ marginRight: '12px' }}
                />
              </div>
              <div className="flex-row">
                <div>
                  <h3>UNIVERSITI TEKNOLOGY MARA(UiTM)</h3> 
                  <p className="info">
                  <em className="date">2018 — 2022</em>

                    <span>&bull;</span>
                    BACHELOR OF COMPUTER SCIENCE (HONS.) NETCENTRIC COMPUTING
                  </p>
                </div>
                <i className="fas fa-3x fa-graduation-cap success-color" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {works.map((work, index) => {
            return (
              <div key={`work-${index}`} className="work-container">
                {work.company && <h3>{work.company}</h3>}
                <p className="info">
                  {work.position}
                  <span>&bull;</span>
                  <em className="date">{work.date}</em>
                </p>
                {work.description()}
                <div>
                  <strong>Technologies:</strong>
                  <div>
                    {work.technologies.map((it) => {
                      return (
                        <span key={`tech-${it.name}`} className="tech-item">
                          <i
                            title={it.name}
                            className={`fa-2x fa-fw ${it.icon}`}
                          />
                          {it.name}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="row awards">
        <div className="three columns header-col">
          <h1>
            <span>Key awards</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="flex-row">
            <ul style={squareListType}>
              <li>
                Finalist of international artificial intelligence programming
                contest Malaysia AI Cup 2020.
              </li>
              <li>
                Multi-time winner and top-3 in University and Regional students
                programming contests (from 2016 to 2019).
              </li>
            </ul>
            <i className="fas fa-3x fa-trophy" />
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="flex-row">
            <p>
              I am always interested in playing around with new technologies but
              these are the ones that I really want to mention here
            </p>
            <i className="fas fa-3x fa-brain" />
          </div>
          <div className="bars">
            <ul className="skills">
              {skills.map((skill) => {
                return (
                  <li key={skill.name}>
                    <span style={{ width: skill.level }} className="bar-expand">
                      <p className="skill-title">{skill.title}</p>
                    </span>
                    <em>{skill.name}</em>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
