import type { CollectionConfig } from "payload";

export const FormSubmissions: CollectionConfig = {
  slug: "form-submissions",
  admin: {
    defaultColumns: ["type", "email", "status", "createdAt"],
  },
  fields: [
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Contact", value: "contact" },
        { label: "Registration", value: "registration" },
        { label: "Donation", value: "donation" },
        { label: "Media Accreditation", value: "media" },
        { label: "Newsletter", value: "newsletter" },
      ],
    },
    { name: "email", type: "email" },
    { name: "data", type: "json" },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "Reviewed", value: "reviewed" },
        { label: "Approved", value: "approved" },
        { label: "Rejected", value: "rejected" },
      ],
      admin: { position: "sidebar" },
    },
  ],
  timestamps: true,
};
