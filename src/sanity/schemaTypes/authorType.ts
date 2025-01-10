import { UserIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "Name of the author",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          // Styles let you define what blocks can be marked up as. The default
          // set corresponds with HTML tags, but you can set any title or value
          styles: [{ title: "Normal", value: "normal" }, { title: "H1", value: "h1" }],
          lists: [],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      // subtitle: "bio",
      subtitle: "slug.current",
      description: "bio",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title,
        media,
      };
    },
  },
});
