import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
});

export default async (type) => {
  let entries;

  try {
    entries = await client.getEntries({
      content_type: type,
      limit: 1000,
    }).catch((error) => {
      throw new Error(error);
    });
  } catch (error) {
    throw new Error(error);
  }

  return entries;
};
