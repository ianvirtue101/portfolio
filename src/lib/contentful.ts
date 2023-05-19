import contentful from "contentful";

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

client
  .getEntries()
  .then((response) => console.log(response.items))
  .catch(console.error);

async function fetchServices() {
  const entries = await client.getEntries({
    content_type: "services",
  });
  return entries.items.map((item) => item.fields);
}

export { fetchServices };
