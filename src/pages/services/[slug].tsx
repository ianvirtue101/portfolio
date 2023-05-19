import { fetchService, fetchServiceSlugs } from "../../lib/contentful";
import "../../styles/global.scss";

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
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <p>{props.detailedDescription}</p>
      <p>{props.priceInformation}</p>
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
