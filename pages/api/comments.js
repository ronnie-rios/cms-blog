// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//any file inside is mapped to  /api/filename and is an endpoint instead of a page

export default function helloAPI(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
