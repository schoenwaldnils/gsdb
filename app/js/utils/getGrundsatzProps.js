import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function getGrundsatzProps(item) {
  return {
    id: item.sys.id,
    typ: item.fields.typ,
    name: item.fields.name,
    bibeltext: {
      stelle: item.fields.bibeltext && item.fields.bibeltext.fields.biblestelle,
      text: item.fields.bibeltext && item.fields.bibeltext.fields.text,
    },
    content: item.fields.content && documentToReactComponents(item.fields.content),
  };
}
