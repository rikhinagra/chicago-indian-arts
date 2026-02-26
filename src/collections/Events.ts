import type { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "program", "date", "venue"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { position: "sidebar" },
    },
    {
      name: "program",
      type: "select",
      required: true,
      options: [
        { label: "Chicago Indian Literature Festival", value: "literature" },
        { label: "Chicago Indian Fashion Week", value: "fashion" },
        { label: "Wildlife Photography & Visual Arts Festival", value: "photography" },
      ],
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "time",
      type: "text",
      required: true,
    },
    {
      name: "venue",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "registrationLink",
      type: "text",
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar" },
    },
  ],
};
