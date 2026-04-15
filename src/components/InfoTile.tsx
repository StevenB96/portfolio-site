interface InfoTileProps {
  title: string;
  text?: string;
  redirectUrl?: string;
}

export function InfoTile({ title, text, redirectUrl }: InfoTileProps) {
  const content = (
    <>
      <h3 className="info-tile__title">{title}</h3>
      {text && <p className="info-tile__text">{text}</p>}
    </>
  );

  if (redirectUrl) {
    const openInNewTab = redirectUrl.startsWith("http");

    return (
      <a
        className="info-tile info-tile--link"
        href={redirectUrl}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return <article className="info-tile">{content}</article>;
}