export interface CardProps {
  color: string;
  title: string;
  info: string[];
  url?: string;
}

export interface InfoCardProps {
  cards: CardProps[];
}
