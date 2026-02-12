import type { CollectionConfig } from "payload";

export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "role", type: "text", required: true },
    { name: "bio", type: "textarea" },
    { name: "photo", type: "upload", relationTo: "media" },
    { name: "order", type: "number", admin: { position: "sidebar" } },
    {
      name: "socialLinks",
      type: "group",
      fields: [
        { name: "instagram", type: "text" },
        { name: "twitter", type: "text" },
        { name: "linkedin", type: "text" },
        { name: "website", type: "text" },
      ],
    },
  ],
};
