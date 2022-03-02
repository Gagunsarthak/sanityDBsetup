// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([

    /* Your types here! */
            {
              title:'Coins',
            name:'coins',
            type:'document',
            fields:[
            {
              title:'Name',
            name:'name',
            type:'string',
            },
            {
              title:'Symbol',
            name:'symbol',
            type:'string',
            },
            {
              title:'Contract Address',
              name:'contractAddress',
              type:'string',
            },
            {
              title:'USD price',
              name:'usdPrice',
              type:'string',
            },
            {
              title:'Logo',
              name:'logo',
              type:'image',
            }

]

},
//posts
{
  title:'Posts',
name:'posts',
type:'document',
fields:[
{
  title:'Title',
name:'title',
type:'string',
},
{
  title:'Description',
name:'description',
type:'string',
},
{
  title:'Post Type ', //social or contract
  name:'postType',
  type:'string',
},
{
  title:'Visibility ',//public or protected
  name:'visibility',
  type:'string',
},
{
  title:'Coins Offered',
  name:'coinsOffered',
  type:'string',
},
{
  title:'Post Id',
  name:'postId',
  type:'string',
},
{
  title:'Post Creator',
  name:'postCreator',
  type:'document',
  fields:[
    {
      title:'Creator Name',
      name:'creatorName',
      type:'string'
    },
    {
      title:'Creator ID',
      name:'creatorId',
      type:'string'
    }
  ]
},
{
  title:'Post Activity',
  name:'postActivity',
  type:'document',
  fields:[
    {
      title:'Referals',
      name:'referals',
      type:'string'
    },
    {
      title:'Pitches',
      name:'pitches',
      type:'string'
    },
    {
      title:'Likes',
      name:'likes',
      type:'string'
    }
  ]
},
{
  title:'Post Details',
  name:'postDetails',
  type:'document',
  fields:[
    {
      title:'Creation Date',
      name:'creationDate',
      type:'date'
    },
    {
      title:'Last Modified',
      name:'lastModified',
      type:'date'
    }
  ]
},
{
  title:'Attachments',
  name:'attachments',
  type:'string',
},
{
  title:'Thumbnail',
  name:'thumbnail',
  type:'image',
},
// {
//   title:'Logo',
//   name:'logo',
//   type:'image',
// }
// ,
{
  title:'Duration',
  name:'duration',
  type:'string',
},
{
  title:'Tags',
  name:'tags',
  type:'string',
},
{
  title:'Skills Required',
  name:'skillsRequired',
  type:'string',
},
{
  title:'Experience Required',
  name:'experienceRequired',
  type:'string',
},
]

}

  ]),
})
