export default function CarouselCard({ game }) {
  return (
    <li className="carousel-item">
      <div className="carousel-background">
        <img
          className="carousel-hidden-image"
          src={game.imageUrl}
          alt={game.title}
        />
      </div>
    </li>
  );
}
