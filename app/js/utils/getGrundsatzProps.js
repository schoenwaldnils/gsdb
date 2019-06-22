export default function getGrundsatzProps(item) {
  return {
    id: item.sys.id,
    typ: item.fields.typ,
    name: item.fields.name,
    bibeltext: {
      stelle: item.fields.bibeltext && item.fields.bibeltext.fields.bibelstelle,
      text: item.fields.bibeltext && item.fields.bibeltext.fields.text,
    },
    content: item.fields.content,
  };
}
