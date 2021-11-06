import Head from 'next/head'

const posts = [
  { title: 'First post', 
    excerpt: 'first excerpt'  
  },
  { title: 'second post', 
    excerpt: 'second excerpt'  
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Ronnie's CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 col-span-1">
      {posts.map((post, index) => (
        <div>
          {post.title}
          {post.excerpt}
        </div>
      ))}
      </div>
        <div className="lg:col:span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            
          </div>
        </div>
    </div>
      
    </div>
  )
}
