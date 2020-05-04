export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eafe8f0e0d614b3a23ed9c3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7deio1b7',
                  apiId: '08ece4a7-34cb-4a32-8eb2-2288be3a2a9c'
                },
                {
                  buildHookId: '5eafe8f050cfcd59453450ec',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ddv45r4m',
                  apiId: '5b9861ef-765c-41e6-9d68-82ff347794fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/johnoscott/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ddv45r4m.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
