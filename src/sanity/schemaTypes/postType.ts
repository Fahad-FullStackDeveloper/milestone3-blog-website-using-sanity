import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      description:
        "A brief summary of the post (recommended: 150-200 characters)",
    }),
    defineField({
      name: "category1",
      type: "string",
      title: "Category1",
      options: {
        list: [
          { title: "Design", value: "design" },
          { title: "Research", value: "research" },
          { title: "Presentation", value: "presentation" },
          { title: "Interface", value: "interface" },
          { title: "Product", value: "product" },
          { title: "Leadership", value: "leadership" },
          { title: "Frameworks", value: "frameworks" },
          { title: "Management", value: "management" },
          { title: "Software Development", value: "software development" },
          { title: "Productivity", value: "productivity" },
          { title: "Tools", value: "tools" },
          { title: "Saas", value: "saas" },
          { title: "Podcast", value: "podcast" },
          { title: "Customer Success", value: "customer success" },
        ],
      },
    }),
    defineField({
      name: "category2",
      type: "string",
      title: "Category2",
      options: {
        list: [
          { title: "Design", value: "design" },
          { title: "Research", value: "research" },
          { title: "Presentation", value: "presentation" },
          { title: "Interface", value: "interface" },
          { title: "Product", value: "product" },
          { title: "Leadership", value: "leadership" },
          { title: "Frameworks", value: "frameworks" },
          { title: "Management", value: "management" },
          { title: "Software Development", value: "software development" },
          { title: "Productivity", value: "productivity" },
          { title: "Tools", value: "tools" },
          { title: "Saas", value: "saas" },
          { title: "Podcast", value: "podcast" },
          { title: "Customer Success", value: "customer success" },
        ],
      },
    }),
    defineField({
      name: "category3",
      type: "string",
      title: "Category3",
      options: {
        list: [
          { title: "Design", value: "design" },
          { title: "Research", value: "research" },
          { title: "Presentation", value: "presentation" },
          { title: "Interface", value: "interface" },
          { title: "Product", value: "product" },
          { title: "Leadership", value: "leadership" },
          { title: "Frameworks", value: "frameworks" },
          { title: "Management", value: "management" },
          { title: "Software Development", value: "software development" },
          { title: "Productivity", value: "productivity" },
          { title: "Tools", value: "tools" },
          { title: "Saas", value: "saas" },
          { title: "Podcast", value: "podcast" },
          { title: "Customer Success", value: "customer success" },
        ],
      },
    }),
    
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
