import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

// title, slug, thumbnail, thumbnailAlt, month, year, 
// company, companyLink (make <a> if link is not empty),
// role, roleDescription, projectDescription,
// moreInfoLink, embed (<video> or <a> or <object>)

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'thumbnailAlt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'month',
      type: 'string',
    }),
    defineField({
      name: 'year',
      type: 'number',
    }),
    defineField({
      name: 'company',
      type: 'string',
    }),
    defineField({
      name: 'companyLink',
      type: 'url',
      description: 'optional field - if empty, no link button will show'
    }),
    defineField({
      name: 'role',
      type: 'string',
      description: 'if multiple rows, separate by commas. Ex: Role 1, Role 2, Role 3'
    }),
    defineField({
      name: 'roleDescription',
      type: 'text',
    }),
    defineField({
      name: 'projectDescription',
      type: 'text',
    }),
    defineField({
      name: 'moreInfoLink',
      type: 'url',
      description: 'optional field - if empty, no link button will show'
    }),
    // add embed field. Embed type (YouTube video, video file, other hosted video?)
    // thumbnail image, thumbnail alt (optional)
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
  },
})
