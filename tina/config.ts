import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "/assets",
      publicFolder: "/",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "/_posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
          label: "Published",
          name: "published",
          type: "boolean",
          },
        ],
      },
      {
        name: "robots",
        label: "Robot Profiles",
        path: "/_robots",
        fields: [
          {
            name: 'year',
            label: 'Year',
            type: 'number',
          },
          {
            name: 'robotName',
            label: 'Robot Name',
            type: 'string',
          },
          {
            name: 'game',
            label: 'Game Name',
            type: 'string',
          },
          {
            name: 'thumbnail',
            label: 'Thumbnail Image',
            type: 'image',
          },
          {
            name: 'metatitle',
            label: 'Meta Title',
            type: 'string',
          },
          {
            name: 'metadesc',
            label: 'Meta Description',
            type: 'string',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Write Up",
            isBody: true,
          },
          {
            label: "Published",
            name: "published",
            type: "boolean",
            },
        ],
      },

    ],
  },
});
