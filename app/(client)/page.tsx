import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Tags from '../components/Tags'
import Headlines from '../components/Headlines'
import Articles from '../components/Articles'
import RecentPost from '../components/RecentPost'

// import { client } from '@sanity/lib/client'

const getPost = async () => {
    const query = `*[_type == "post"] {
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
      }`
    const data = await client.fetch(query)
    return data

}

export const revalidate = 1;
console.log(revalidate)

export default async function Home() {
    const data = await getPost()
    console.log(data)
  return (
    <main className='max-w-6xl mx-auto pt-10'>
     <div className="text-center">
        <p className="text-gray-500 font-semibold dark:text-gray-200 ">Welome to Our Blog</p>
        <h1 className="text-3xl md:text-5xl pt-4 font-bold max-w-2xl mx-auto">Being <span className='text-[#73AB84]'>unique</span> is better than being <span className='text-[#73AB84]'>perfect</span></h1>
        <Tags />
        <Headlines data={data} />
        <Articles data={data} />
        <RecentPost data={data} />
     </div>
    </main>
  )
}
