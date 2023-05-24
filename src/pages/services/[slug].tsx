import { fetchService, fetchServiceSlugs } from "../../lib/contentful";
import { useTheme } from "../../components/ThemeWrapper/ThemeWrapper";
import "../../styles/global.scss";
import "./slug.scss";

export default function ServicesPage(props: any) {
  if (props.error) {
    return (
      <div>
        <h1>An Error occurred: </h1>
        <h2>{props.error}</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="service-container">
        <h1 className="service-title">{props.title}</h1>
        <h2 className="service-description">{props.description}</h2>
        <p className="service-detailed-description">
          {props.detailedDescription}
        </p>
        <p className="service-price-information">{props.priceInformation}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await fetchServiceSlugs();

  return {
    fallback: false,
    paths: paths.map((slug) => ({ params: { slug } })),
  };
}

export async function getStaticProps(context: any) {
  const service = await fetchService(context.params.slug);

  return {
    props: service,
  };
}
