import { CardItem } from "../types";
import { ImageCard } from "./ImageCard";

interface CardGridProps {
  items: CardItem[];
}

export function CardGrid({ items }: CardGridProps) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <ImageCard key={item.id} item={item} />
      ))}
    </div>
  );
}