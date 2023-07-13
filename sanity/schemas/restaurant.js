import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule)=>Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule)=>Rule.max(200)
    }),
    defineField({
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Address of the restaurant',
      type: 'string',
      validation: (Rule)=>Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating for the restaurant between (1-5)',
      type: 'number',
      validation: (Rule)=>Rule.required().min(1).max(5).error('Enter between 1 to 5')
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule)=>Rule.required(),
      type: 'reference',
      to: [{type : 'category'}]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}] }]
    }),
  ]
})
