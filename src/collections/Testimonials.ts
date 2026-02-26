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
        { label: "Chicago Indian Literature Festival", value: "literature" },
        { label: "Chicago Indian Fashion Week", value: "fashion" },
        { label: "Wildlife Photography & Visual Arts Festival", value: "photography" },
        { label: "General", value: "general" },
      ],
    },
  ],
};
