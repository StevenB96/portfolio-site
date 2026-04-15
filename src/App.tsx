import { CardGrid } from "./components/CardGrid";
import { InfoTile } from "./components/InfoTile";
import { ProfileHero } from "./components/ProfileHero";
import { Section } from "./components/Section";
import { TopNav } from "./components/TopNav";
import { usePortfolioData } from "./hooks/usePortfolioData";

const navSections = [
  { id: "top", label: "Banner" },
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "courses", label: "Courses" },
  { id: "languages", label: "Languages" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

function App() {
  const data = usePortfolioData();

  const contactItems = [
    {
      id: "email",
      title: "Email",
      text: data.person.email,
      redirectUrl: `mailto:${data.person.email}`,
    },
    {
      id: "phone",
      title: "Phone",
      text: data.person.phone,
      redirectUrl: `tel:${data.person.phone.replace(/\s+/g, "")}`,
    },
    {
      id: "location",
      title: "Location",
      text: data.person.location,
    },
    ...data.person.links.map((link) => ({
      id: link.label.toLowerCase(),
      title: link.label,
      text: link.text,
      redirectUrl: link.url,
    })),
  ];

  return (
    <div className="app-shell">
      <ProfileHero person={data.person} />
      <TopNav sections={navSections} />
      <main className="main-content">
        <Section
          id="summary"
          title="Summary"
          subtitle="A concise overview of strengths, experience, and current focus."
        >
          <div className="info-panel">
            <p>{data.summary}</p>
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience"
          subtitle="Professional roles, delivery highlights, mentoring, and engineering impact."
        >
          <CardGrid items={data.experience} />
        </Section>

        <Section
          id="education"
          title="Education"
          subtitle="Academic background and research experience."
        >
          <CardGrid items={data.education} />
        </Section>

        <Section
          id="skills"
          title="Skills"
          subtitle="Frameworks, databases, cloud, DevOps, methodologies, and AI."
        >
          <CardGrid items={data.skills} />
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="Selected portfolio work across web, AI, ETL, cloud, and observability."
        >
          <CardGrid items={data.projects} />
        </Section>

        <Section
          id="certifications"
          title="Certifications"
          subtitle="Professional learning across AWS, IBM, architecture, Linux, and agile."
        >
          <div className="tile-grid">
            {data.certifications.map((item) => (
              <InfoTile
                key={item.id}
                title={item.title}
                text={item.text}
                redirectUrl={item.redirectUrl}
              />
            ))}
          </div>
        </Section>

        <Section
          id="courses"
          title="Courses"
          subtitle="Formal upskilling in cloud and full stack development."
        >
          <CardGrid items={data.courses} />
        </Section>

        <Section
          id="languages"
          title="Languages"
          subtitle="Spoken language levels."
        >
          <div className="tile-grid">
            {data.languages.map((item) => (
              <InfoTile
                key={item.id}
                title={item.title}
                text={item.text}
                redirectUrl={item.redirectUrl}
              />
            ))}
          </div>
        </Section>

        <Section
          id="interests"
          title="Interests"
          subtitle="Activities outside of work."
        >
          <div className="tile-grid">
            {data.interests.map((item) => (
              <InfoTile
                key={item.id}
                title={item.title}
                text={item.text}
                redirectUrl={item.redirectUrl}
              />
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="Quick links for getting in touch."
        >
          <div className="tile-grid">
            {contactItems.map((item) => (
              <InfoTile
                key={item.id}
                title={item.title}
                text={item.text}
                redirectUrl={item.redirectUrl}
              />
            ))}
          </div>
        </Section>

        <p className="footer-note">
          Built in React + TypeScript with dynamic JSON loading and default CV fallback content.
        </p>
      </main>
    </div>
  );
}

export default App;