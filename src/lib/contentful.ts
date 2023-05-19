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

async function fetchServices() {
  const entries = await client.getEntries({
    content_type: "services",
  });

  if (entries.items.length > 0) {
    return entries.items.map((item) => item.fields);
  }

  throw new Error("No services found.");
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

  if (entries.items.length > 0) {
    return entries.items.map((item) => item.fields.slug);
  }

  throw new Error("No services found.");
}

export { fetchServices, fetchService, fetchServiceSlugs };
