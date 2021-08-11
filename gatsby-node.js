const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMicrocmsCreditCard(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
							name
              createdAt
							creditCardId
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  result.data.allMicrocmsCreditCard.edges.forEach((post, index) => {
    createPage({
      path: post.node.creditCardId,
      component: path.resolve('./src/templates/creditCard.js'),
      context: {
        slug: post.node.creditCardId,
      },
    });
  });
};