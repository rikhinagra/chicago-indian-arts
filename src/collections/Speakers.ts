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
        { label: "Vaarta", value: "vaarta" },
        { label: "Prasang", value: "prasang" },
        { label: "Varnam", value: "varnam" },
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
