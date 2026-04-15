interface TopNavProps {
  sections: {
    id: string;
    label: string;
  }[];
}

export function TopNav({ sections }: TopNavProps) {
  return (
    <nav className="top-nav">
      <div className="top-nav__inner">
        {sections.map((section) => (
          <a key={section.id} className="top-nav__link" href={`#${section.id}`}>
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
