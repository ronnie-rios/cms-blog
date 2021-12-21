// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//any file inside is mapped to  /api/filename and is an endpoint instead of a page

import { GraphQLClient, gql } from "graphql";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function comments( req, res) {
  const { name, email, slug, comment } = req.body;
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`
    }
  })

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!){
      createComment(data: {name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } } ) { id }
    }
  `
  const result = await GraphQLClient.request(query, req.body)

  return res.status(200).send(result)
}