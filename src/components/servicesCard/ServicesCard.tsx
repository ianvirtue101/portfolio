import Link from "next/link";
import "./ServicesCard.scss";

const ServicesCard = ({ service }: any) => {
  const { title, description, priceInformation, slug } = service;

  console.log(service);

  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <p className="card__pricing">Pricing:{priceInformation}</p>
      <Link className="card__link" href={`/services/${slug}`} passHref>
        Learn More
      </Link>
    </div>
  );
};

export default ServicesCard;
