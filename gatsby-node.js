// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const photosTemplate = require.resolve("./src/templates/photos.js")

  const allPhotos = await wrapper(
    graphql(`
      {
        photos: allPhotosYaml {
          nodes {
            slug
            images
          }
        }
      }
    `)
  )

  allPhotos.data.photos.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: photosTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`,
      },
    })
  })
}
