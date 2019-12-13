export default {
  name: 'telenorFacebook',
  title: 'Telenor Facebook – Open Graph Tags',
  type: 'document',
  fields: [
    {
      name: 'ogTitle',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Site Name',
      name: 'ogSiteName',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'ogUrl',
      type: 'url',
    },
    {
      title: 'Description',
      name: 'ogDescription',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'ogImageUrl',
      type: 'string',
    },
  ],
};
