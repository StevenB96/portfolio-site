import { CardItem } from "../types";

interface ImageCardProps {
  item: CardItem;
}

export function ImageCard({ item }: ImageCardProps) {
  const style = {
    backgroundImage: `url("${item.imageUrl}")`,
  };

  const content = (
    <>
      <div className="image-card__content">
        <h3 className="image-card__title">{item.title}</h3>
        <p className="image-card__text">{item.text}</p>
      </div>
    </>
  );

  if (item.redirectUrl) {
    const openInNewTab = item.redirectUrl.startsWith("http");

    return (
      <a
        className="image-card image-card--link"
        href={item.redirectUrl}
        style={style}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <article className="image-card" style={style}>
      {content}
    </article>
  );
}