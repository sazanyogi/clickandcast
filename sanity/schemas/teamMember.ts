import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "role", title: "Role / Title", type: "string" }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 3 }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "whatsapp", title: "WhatsApp Number (e.g. 1234567890)", type: "string" }),
    defineField({ name: "portfolioUrl", title: "Personal Portfolio URL", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
