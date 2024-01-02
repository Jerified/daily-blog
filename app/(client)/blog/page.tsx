import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import PostCard from '@/app/components/PostCard'
// import PostCard from './PostCard'

const getPost = async () => {
    const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title, 
        slug,
        publishedAt,
        excerpt,
        mainImage,
        body[],
        author-> {
          _id, 
          name,
          authorUrl,
          bio
        },
        tags[]-> {
          _id,
          name
        }
      } `
    const data = await client.fetch(query)
    console.log(data)
    return data
}

export const revalidate = 1;

const RecentPost = async () => {
     const data = await getPost()
    console.log(data)
    return (
        <section className="max-w-5xl mx-auto pt-12 w-full">
           <PostCard data={data} />
        </section>
    )
}

export default RecentPost