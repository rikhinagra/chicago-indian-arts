import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "author",
  },
  fields: [
    { name: "quote", type: "textarea", required: true },
    { name: "author", type: "text", required: true },
    { name: "role", type: "text" },
    { name: "photo", type: "upload", relationTo: "media" },
    {
      name: "program",
      type: "select",
      options: [
        { label: "Vaarta", value: "vaarta" },
        { label: "Prasang", value: "prasang" },
        { label: "Varnam", value: "varnam" },
        { label: "General", value: "general" },
      ],
    },
  ],
};
