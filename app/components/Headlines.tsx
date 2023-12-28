import React from 'react'

const Headlines = ({data}: any) => {
  return (
    <section className="">
        <div className="grid xl:grid-cols-12 gap-4 mt-8 justify-center">
            {/* <div className="col-span-6">
                {data.slice(0,3).map((news:any) => (
                    // <Image
                    // <div className="border px-4 py-3 rounded-md bg-[#A6B695]" key={news.id}>

                    // </div>
                ))}
            </div> */}
        </div>
    </section>
  )
}

export default Headlines