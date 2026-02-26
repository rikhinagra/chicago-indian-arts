import type { CollectionConfig } from "payload";

export const Speakers: CollectionConfig = {
  slug: "speakers",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "title", type: "text", required: true },
    { name: "bio", type: "textarea" },
    { name: "photo", type: "upload", relationTo: "media" },
    {
      name: "program",
      type: "select",
      options: [
        { label: "Chicago Indian Literature Festival", value: "literature" },
        { label: "Chicago Indian Fashion Week", value: "fashion" },
        { label: "Wildlife Photography & Visual Arts Festival", value: "photography" },
      ],
    },
    {
      name: "socialLinks",
      type: "group",
      fields: [
        { name: "instagram", type: "text" },
        { name: "twitter", type: "text" },
        { name: "website", type: "text" },
      ],
    },
  ],
};
