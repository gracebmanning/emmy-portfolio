import { defineArrayMember } from 'sanity';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
        name: 'bio',
        title: 'Bio',
        type: 'array',
        of: [
          defineArrayMember({
            type: 'block',
            // Styles let you define what blocks can be marked up as. The default
            // set corresponds with HTML tags, but you can set any title or value
            // you want, and decide how you want to deal with it where you want to
            // use your content.
            styles: [
              {title: 'Normal', value: 'normal'},
              {title: 'H1', value: 'h1'},
              {title: 'H2', value: 'h2'},
              {title: 'H3', value: 'h3'},
              {title: 'H4', value: 'h4'},
              {title: 'Quote', value: 'blockquote'},
            ],
            lists: [{title: 'Bullet', value: 'bullet'}],
            // Marks let you mark up inline text in the Portable Text Editor
            marks: {
              // Decorators usually describe a single property – e.g. a typographic
              // preference or highlighting
              decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'},
              ],
              // Annotations can be any object structure – e.g. a link or a footnote.
              annotations: [
                {
                  title: 'URL',
                  name: 'link',
                  type: 'object',
                  fields: [
                    {
                      title: 'URL',
                      name: 'href',
                      type: 'url',
                    },
                  ],
                },
              ],
            },
          }),
        ],
    },
    {
        name: 'resume',
        title: 'Resumé',
        type: 'file',
        description: 'PDF only',
        options: {
            accept: 'application/pdf'
        }

    }
  ]
}