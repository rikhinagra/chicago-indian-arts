import type { CollectionConfig } from "payload";

export const Gallery: CollectionConfig = {
  slug: "gallery",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "images",
      type: "array",
      fields: [
        { name: "image", type: "upload", relationTo: "media", required: true },
        { name: "caption", type: "text" },
      ],
    },
    {
      name: "program",
      type: "select",
      options: [
        { label: "Chicago Indian Literature Festival", value: "literature" },
        { label: "Chicago Indian Fashion Week", value: "fashion" },
        { label: "Wildlife Photography & Visual Arts Festival", value: "photography" },
        { label: "Community", value: "community" },
      ],
    },
    { name: "year", type: "number" },
  ],
};
