import { Rule } from "sanity";

export const post = {
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters"),
    },
    {
        name: 'mainImage', 
        type: 'url',
        title: 'Main image',
        options: {
            hotspot: true
        }
      },
      {
        name: "body",
        title: "Body",
        type: "array",
        of: [
          { name: 'img',type: "block" },
          {
            name: "urlImg",
            type: "object",
            fields: [
              {
                name: "url",
                type: "url",
                title: "URL"
              },
              {
                 name: "alt",
                 type: "string",
                 title: "Alt Text" 
              }
            ]
          }
        ]
      },
    {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'}
      },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    },
  ],
};