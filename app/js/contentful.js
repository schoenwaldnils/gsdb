import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
});

export const getEntries = async (type) => {
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

export const getEntry = async (id) => {
  try {
    const entries = await client.getEntries({
      'sys.id': id,
      include: 10,
    }).catch((error) => {
      throw new Error(error);
    });

    return entries.items[0];
  } catch (error) {
    throw new Error(error);
  }
};
