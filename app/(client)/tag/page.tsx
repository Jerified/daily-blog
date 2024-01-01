import React from 'react'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'

const getAllTags = async () => {
    const tagsQuery = `*[_type == "post"] | order (postCount desc) | group(tagName) {
        "tagName": tags[0] -> name,
        "postCount": count(*[_type == "post" && references(^._id)])}`
    const data = await client.fetch(tagsQuery)
    console.log(data);
}

export const revalidate = 1

const page = async () => {
    await getAllTags()
    // const tags = await getAllTags()
    // console.log(tags)

    return (
        <div>a</div>
    )
}

export default page