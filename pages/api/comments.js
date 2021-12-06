// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//any file inside is mapped to  /api/filename and is an endpoint instead of a page

import { GraphQLClient } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function comments( req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.}`
    }
  })
}