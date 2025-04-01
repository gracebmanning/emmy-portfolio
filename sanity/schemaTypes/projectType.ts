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
      name: "month",
      type: "string",
      options: {
        list: [
          { title: "January", value: "January" },
          { title: "February", value: "February" },
          { title: "March", value: "March" },
          { title: "April", value: "April" },
          { title: "May", value: "May" },
          { title: "June", value: "June" },
          { title: "July", value: "July" },
          { title: "August", value: "August" },
          { title: "September", value: "September" },
          { title: "October", value: "October" },
          { title: "November", value: "November" },
          { title: "December", value: "December" },
        ],
        layout: "dropdown",
        direction: "vertical"
      }
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
      description: 'Optional field - if empty, no link button will show'
    }),
    defineField({
      name: 'role',
      type: 'string',
      description: 'If multiple roles, separate by semicolons. Ex: Role 1; Role 2; Role 3'
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
      description: 'Optional field - if empty, no link button will show'
    }),
    defineField({
      name: "embedType",
      type: "string",
      options: {
        list: [
          { title: "Video File", value: "1" },
          { title: "YouTube Link", value: "2" },
          { title: "Other Video Link", value: "3" }
        ],
        layout: "radio",
        direction: "horizontal"
      }
    }),
    defineField({
      name: 'videoFile',
      type: 'file',
      hidden: ({document}) => !(document?.embedType === "1"),
    }),
    defineField({
      name: 'youtubeLink',
      type: 'url',
      hidden: ({document}) => !(document?.embedType === "2"),
    }),
    defineField({
      name: 'otherVideoLink',
      type: 'url',
      hidden: ({document}) => !(document?.embedType === "3"),
    }),
    defineField({
      name: 'videoThumbnail',
      type: 'image',
      hidden: ({document}) => !(document?.embedType === "3"),
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'videoThumbnailAlt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
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
