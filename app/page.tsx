const experiences = [
  {
    period: "Nov 2023 - May 2026",
    company: "Atlantian",
    role: "Analyst Coach",
    points: [
      "Contributed to transforming a semi-professional team into a professional competitive team.",
      "Created and continuously updated the team’s “Meta-gamebook”, forecasting champion and item power shifts in upcoming patches to support early preparation.",
      "Produced analytical reports to support individual development and group learning strategies.",
      "Mentored 10+ learners in critical thinking, qualitative analysis and reflective practice; developed a structured Meta-gamebook as a learning and forecasting tool.",
    ],
  },
  {
    period: "Feb 2021 - Sep 2023",
    company: "Say Yes House",
    role: "Account Coordinator",
    points: [
      "Contributed to the development of client communication plans by connecting client objectives with audience needs, key messages, and content directions.",
      "Collaborated with the Content team to translate client briefs into structured communication tasks and content deliverables.",
      "Facilitated communication between clients and internal teams by clarifying requirements, consolidating feedback, and coordinating revisions throughout the development process.",
      "Supported recurring communication projects and maintained consistent project execution through timeline tracking, stakeholder coordination, and quality follow-up.",
    ],
  },
  {
    period: "Mar 2016 - Oct 2018",
    company: "Nexus Consultant",
    role: "Lead Consultant",
    points: [
      "Developed educational consulting programs for parents, applying analytical frameworks to identify and support learner growth.",
      "Conducted individualized guidance, learning plans and progress evaluation to support long-term learner growth.",
      "Trained juniors in analytical thinking, instructional skills and learner-centered approaches.",
      "Maintained ongoing academic-style follow-ups to refine learning pathways based on observed outcomes.",
    ],
  },
];

const skills = [
  "Information Simplification",
  "High Adaptability",
  "AI Literacy",
  "Analytical Thinking",
  "Public Relations",
  "Personalized Consulting",
  "Team Management",
  "Project Coordination",
  "Training Development",
  "Mentoring & Guidance",
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Back to top">NTS<span>.</span></a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> Public Relations · Coaching · Education</p>
          <h1>Nguyễn<br /><em>Tuấn Sơn</em></h1>
          <p className="intro">
            A Public Relations postgraduate creating thoughtful learning experiences
            where academic theory meets practical application.
          </p>
          <div className="heroActions">
            <a className="textLink" href="mailto:nguyentuanson3275@gmail.com">
              Let&apos;s talk <span aria-hidden="true">Email</span>
            </a>
          </div>
        </div>
        <div className="portraitWrap" aria-label="Portrait of Nguyễn Tuấn Sơn">
          <div className="blueBlob" />
          <div className="portraitFrame">
            <img src="/nguyen-tuan-son.png" alt="Nguyễn Tuấn Sơn" />
          </div>
          <div className="metric metricOne">
            <span className="metricIcon iconCommunication" aria-hidden="true"><i /></span>
            <strong>Strategic<br />Communication</strong>
          </div>
          <div className="metric metricTwo">
            <span className="metricIcon iconCoaching" aria-hidden="true"><i /><i /><i /></span>
            <strong>Analytical<br />Coaching</strong>
          </div>
          <div className="metric metricThree">
            <span className="metricIcon iconAi" aria-hidden="true">✦</span>
            <strong>AI<br />Literacy</strong>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <p className="sectionLabel">01 / Profile</p>
        <div>
          <h2>Teaching with clarity.<br />Leading with <em>empathy.</em></h2>
          <p>
            I am committed to student-centered teaching that connects academic theory
            with practical application, helping learners build strategic thinking,
            professional communication skills and the competencies needed in the
            communication industry.
          </p>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="sectionHead">
          <p className="sectionLabel">02 / Experience</p>
          <h2>Professional<br /><em>journey</em></h2>
        </div>
        <div className="timeline">
          {experiences.map((item, index) => (
            <article className="job" key={item.company}>
              <div className="jobMeta">
                <span className="jobNumber">0{index + 1}</span>
                <time>{item.period}</time>
              </div>
              <div className="jobBody">
                <h3>{item.company}</h3>
                <p className="role">{item.role}</p>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="details" id="education">
        <div className="educationCard">
          <p className="sectionLabel light">03 / Education</p>
          <h2>Academic<br /><em>foundation</em></h2>
          <div className="degree">
            <span>2024 - 2026</span>
            <h3>Master of Arts in Public Relations</h3>
            <p>HCMC University of Economics and Finance · GPA 3.33</p>
          </div>
          <div className="degree">
            <span>2019 - 2023</span>
            <h3>Bachelor in Communication Technology</h3>
            <p>HCMC University of Economics and Finance · GPA 3.54</p>
          </div>
          <div className="language"><strong>TOEIC 790</strong><span>English proficiency</span></div>
        </div>
        <div className="skillsCard">
          <p className="sectionLabel">04 / Expertise</p>
          <h2>Skills &<br /><em>strengths</em></h2>
          <div className="skillCloud">
            {skills.map((skill, index) => <span className={index < 3 ? "featured" : ""} key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="sectionLabel light">Get in touch</p>
          <h2>Let&apos;s create<br />meaningful <em>impact.</em></h2>
        </div>
        <div className="contact">
          <a href="mailto:nguyentuanson3275@gmail.com">nguyentuanson3275@gmail.com <span>Email</span></a>
          <a href="tel:+84776780759">+84 776 780 759 <span>Phone</span></a>
        </div>
        <p className="copyright">© 2026 Nguyễn Tuấn Sơn</p>
      </footer>
    </main>
  );
}
