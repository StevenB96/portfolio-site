import { useMemo } from "react";
import { CardItem, ActionLink } from "../types";

interface ImageCardProps {
  item: CardItem;
}

export function ImageCard({ item }: ImageCardProps) {
  const style = item.imageUrl
    ? { backgroundImage: `url(${item.imageUrl})` }
    : undefined;

  const links = useMemo<ActionLink[]>(() => {
    if (item.links?.length) {
      return item.links.filter((link) => Boolean(link.url));
    }

    if (item.redirectUrl) {
      return [{ label: "Open", url: item.redirectUrl }];
    }

    return [];
  }, [item.links, item.redirectUrl]);

  return (
    <article className="image-card" style={style}>
      <div className="image-card__content">
        <h3 className="image-card__title">{item.title}</h3>
        <p className="image-card__text">{item.text}</p>

        {links.length > 0 && (
          <div className="image-card__actions">
            {links.map((link) => {
              const openInNewTab = /^https?:\/\//i.test(link.url);

              return (
                <a
                  key={`${item.id}-${link.label}-${link.url}`}
                  className="image-card__action"
                  href={link.url}
                  target={openInNewTab ? "_blank" : undefined}
                  rel={openInNewTab ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}