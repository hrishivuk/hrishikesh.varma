import React from "react";

// Reusable component for each experience item
const ExperienceItem = ({ company, designation, years, description }) => {
  return (
    <div className="experience-item flex flex-col gap-1 p-2 md:p-8 md:pt-2">
      <h1 className="company text-lg md:text-2xl font-semibold text-whitePrimary/80">
        {company}
      </h1>
      <div className="flex flex-col md:flex-row gap-3 items-start justify-between">
        <p className="designation text-base md:text-lg font-semibold text-whitePrimary/60">
          {designation}
        </p>
        <p className="years text-base md:text-lg">{years}</p>
      </div>
      <div className="description">
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

// Reusable component for each resume section
const ResumeSection = ({ title, children }) => {
  return (
    <div>
      <div className="resume-section flex flex-col w-full">
        <h1 className="section-title text-xl md:text-3xl font-semibold py-4 md:p-8 md:pb-2">{title}</h1>
        <div className="section-content flex-1 flex flex-col">
          {children}
        </div>
      </div>
      <div className="h-px w-full bg-whitePrimary/5"></div>
    </div>
  );
};

const Resume = () => {
  return (
    <section className="max-w-7xl px-4 py-8 md:py-12 text-whitePrimary mx-auto" id="resume">
      <div className="resume">
        <h2 className="resume-heading font-bold text-3xl md:text-5xl mb-4 md:mb-6">Resume</h2>

        {/* Example of a Resume Section */}
        <ResumeSection title="Experience">
          <ExperienceItem
            company="Experion Technologies"
            designation="Associate Frontend Developer"
            years="May 2023 - Present"
            description="Developed responsive user interfaces using React.js, Angular, Tailwind CSS, and other key front end tools. Translated design concepts into functional components while adhering to industry standards for optimal user experiences."
          />
          <ExperienceItem
            company="Experion Technologies"
            designation="Intern"
            years="December 2022 - March 2023"
            description="Sharpened skills in HTML, CSS, and JavaScript, laying the foundation for my career in front end development. Hands-on experience with these technologies solidified my passion for creating intuitive and engaging user interfaces, shaping my career trajectory towards this field"
          />
          {/* Add more ExperienceItem components for additional experiences */}
        </ResumeSection>
        <ResumeSection title="Projects">
          <ExperienceItem
            company="College Web-App Development Project"
            description="Framework integration: Engaging in active discussions and communication with senior developers, I provided valuable insights into the implementation of essential frameworks required for the project. Layout Creation: Leveraging my design skills and technical proficiency, I played a key role in creating layouts for the project"
          />
          <ExperienceItem
            company="Logistics Management Project"
            description="Angular Development: As the project initiator, I embarked on building the logistics management application from the ground up using Angular. Implementation of Tailwind CSS: Recognizing the importance of sleek and responsive user interfaces, I integrated Tailwind CSS into the project to streamline styling and enhance the visual appeal of the application"
          />
        </ResumeSection>
        <ResumeSection title="Education">
          <ExperienceItem
            company="APJ Abdul Kalam Technological University (Kerala, India)"
            designation="Bachelors in Computer Science and Engineering"
            years="2018-2022"
            description="Got bachelors in Computer Science and Engineering from Adi Shankara Institute of Engineering and Technology in Kerala, India."
          />
          <ExperienceItem
            company="The Emirates National School, Sharjah (UAE)"
            designation="High School"
            years="2018 Passout"
          />
        </ResumeSection>
      </div>
    </section>
  );
};

export default Resume;
