import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimiliarPosts } from '../services';


const PostWidget = ({ categories, slug }) => {
   const [relatedPosts, setRelatedPosts] = useState([]);

   useEffect(()=> {
    if(slug) {
        getSimiliarPosts(categories, slug)
            .then((result) => setRelatedPosts(result))
    } else {
        getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
   }, [slug])


    return (
        <div className="bg-white shadow-lg rounded-lg p-7 mb-7">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4"> 
                { slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
            {relatedPosts.map((post => (
                <div key={post.title} className="flex items-center w-full mb-4">
                    <div className="w-16 flex-none">
                        <img
                            alt={post.title}
                            height="50px"
                            width="50px"
                            className="align-middle rounded full"
                            src= {post.featuredImage.url}
                        />
                     </div>
                     <div className="flex-grow">
                        <p className="text-blac font-xs">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className="">
                            {post.title}
                        </Link>
                    </div>   
                </div>   
            )))}
        </div>
    )
}

export default PostWidget
