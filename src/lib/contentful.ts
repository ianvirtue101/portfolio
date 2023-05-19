import contentful from "contentful";
import { createClient } from "contentful";

if (
  !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
  !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
) {
  throw new Error("Contentful space ID and/or access token are missing");
}

const client = createClient({
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
  console.log(entries.items);
  return entries.items.map((item) => item.fields);
}

async function fetchService(slug: string) {
  const entry = await client.getEntries({
    content_type: "services",
    "fields.slug": slug,
  });

  if (entry.items.length > 0) {
    return entry.items[0].fields;
  }

  throw new Error(`Service with slug: ${slug} not found.`);
}

async function fetchServiceSlugs() {
  const entries = await client.getEntries({ content_type: "services" });

  if (entries.items) {
    const slugs = entries.items.map((item) => item.fields.slug);
    console.log(slugs);
    return slugs;
  }

  // It's good practice to handle potential empty states
  console.log("No items found");
  return [];
}

export { fetchServices, fetchService, fetchServiceSlugs };
