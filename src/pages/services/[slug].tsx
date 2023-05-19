import * as contentful from "contentful";

if (
  !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
  !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
) {
  throw new Error("Contentful space ID and/or access token are missing");
}

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function ServicesPage(props: any) {
  // console.log(props);
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
    </div>
  );
}

export async function getStaticPaths() {
  const services = await client.getEntries({
    content_type: "services",
  });

  const paths = services.items.map((service) => ({
    params: {
      slug: service.fields.slug,
    },
  }));

  console.log("paths: ", paths);

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context: any) {
  // Get data from headless CMS
  const service = await client.getEntries({
    content_type: "services",
    limit: 1,
    "fields.slug": context.params.slug,
  });

  // console.log("services: ", service);

  return {
    props: {
      error:
        !service.items.length && `No service with id: ${context.params.slug}`,
      ...service?.items?.[0]?.fields,
    },
  };
}
