import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  admin: {
    group: "Settings",
  },
  fields: [
    {
      name: "siteTitle",
      type: "text",
      defaultValue: "Chicago Indian Arts",
    },
    {
      name: "siteDescription",
      type: "textarea",
    },
    {
      name: "contactEmail",
      type: "email",
    },
    {
      name: "contactPhone",
      type: "text",
    },
    {
      name: "socialMedia",
      type: "group",
      fields: [
        { name: "instagram", type: "text" },
        { name: "facebook", type: "text" },
        { name: "twitter", type: "text" },
        { name: "linkedin", type: "text" },
      ],
    },
  ],
};
