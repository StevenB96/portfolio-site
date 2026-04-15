import { PersonInfo } from "../types";

interface ProfileHeroProps {
  person: PersonInfo;
}

export function ProfileHero({ person }: ProfileHeroProps) {
  const phoneHref = `tel:${person.phone.replace(/\s+/g, "")}`;

  return (
    <header id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__eyebrow">Last updated in {person.lastUpdated}</div>

        <h1 className="hero__title">{person.name}</h1>

        <p className="hero__headline">{person.headline}</p>

        <div className="hero__chips">
          <span className="chip">{person.location}</span>
          <a className="chip" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <a className="chip" href={phoneHref}>
            {person.phone}
          </a>
        </div>

        <div className="hero__links">
          {person.links.map((link) => (
            <a
              key={link.label}
              className="hero__link"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}