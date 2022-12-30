import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "",
  dataset: "production",
  apiVersion: 2021 - 11 - 16,
  useCdn: true,
  token: "",
});
