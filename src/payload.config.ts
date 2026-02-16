import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Events } from "./collections/Events";
import { Programs } from "./collections/Programs";
import { BlogPosts } from "./collections/BlogPosts";
import { TeamMembers } from "./collections/TeamMembers";
import { Speakers } from "./collections/Speakers";
import { Partners } from "./collections/Partners";
import { Testimonials } from "./collections/Testimonials";
import { Gallery } from "./collections/Gallery";
import { FormSubmissions } from "./collections/FormSubmissions";
import { SiteSettings } from "./globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " | Chicago Indian Arts Admin",
    },
  },
  collections: [
    Users,
    Media,
    Events,
    Programs,
    BlogPosts,
    TeamMembers,
    Speakers,
    Partners,
    Testimonials,
    Gallery,
    FormSubmissions,
  ],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "chicago-indian-arts-default-secret",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "mongodb://localhost:27017/chicago-indian-arts",
  }),
});
