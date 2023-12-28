import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Tags from '../components/Tags'
import Headlines from '../components/Headlines'
// import { client } from '@sanity/lib/client'

const getPost = async () => {
    const query = `*[_type == "post"] {
        _id,
        title, 
        slug,
        publishedAt,
        excerpt,
        // body[],
        // author-> { // resolve author reference
        //   _id, 
        //   name,
        //   bio
        // },
        // tags[]-> {  // resolve tag references
        //   _id,
        //   name
        // }
      }`
    const data = await client.fetch(query)
    return data

}
export default async function Home() {

    const data = await getPost()
    console.log(data)
    // console.log('hello')
  return (
    <main className='pt-10'>
     <div className="text-center ">
        <p className="text-gray-500 font-semibold dark:text-gray-200 ">Welome to Our Blog</p>
        <h1 className="text-3xl md:text-5xl pt-4 font-bold max-w-2xl mx-auto">Being unique is better than being perfect</h1>
        <Tags />
        <Headlines data={data} />
     </div>
    </main>
  )
}
