import Link from "next/link";

const ServicesCard = ({ service }: any) => {
  const { title, description, priceInformation, slug } = service;

  console.log(service);

  return (
    <div className="card">
      <h1>Title</h1>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Pricing:{priceInformation}</p>
      <Link href={`/services/${slug}`} passHref>
        Learn More
      </Link>
    </div>
  );
};

export default ServicesCard;
