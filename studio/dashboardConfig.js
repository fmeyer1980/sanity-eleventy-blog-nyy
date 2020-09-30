export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f74ebb75d41cd0081f87470',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-nyy-studio',
                  apiId: '8da43b99-ba9d-4e99-83be-dd097c461f03'
                },
                {
                  buildHookId: '5f74ebb7ab8cdb0094a9a141',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-nyy',
                  apiId: 'd3c193f1-3f1d-4b8c-8de2-1a9c2fce7582'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fmeyer1980/sanity-eleventy-blog-nyy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-nyy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
