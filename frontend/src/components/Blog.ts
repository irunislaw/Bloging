import { getLocale } from "../util/getLocale"

export const BlogComponent = (id: number ,title: string, shortContent: string, author: string, authorUrl: string, tags: string[], date: string) => {
   let addview = async (id:number) =>{
   
        await fetch("https://bloggingbackend.onrender.com/api/v1/blogs/add-view",
        {
            method:"POST",
            body: JSON.stringify(id)
        })
        .then((res)=>console.log(res))
        .catch((res)=>console.log(res))
   }
    return String.raw`
<div
    class="blog bg-gradient-to-tr py-10 from-rose-500 gap-10 flex flex-col justify-between to-orange-500 rounded-lg shadow-lg duration-200 w-full" onclick=addview({${id}})>
    <div>
        <div class="px-10 text-2xl whitespace-pre-wrap font-medium text-white uppercase">${title}</div>
        <div class="px-10 whitespace-pre-wrap text-white">${shortContent}</div>
    </div>

    <div class="flex px-10 items-center">
        <div class="bg-center bg-cover aspect-square w-16 h-16 shadow-md rounded-full"
            style="background-image: url('${authorUrl}')">
        </div>
        <div>
            <div class="font-normal float-none text-white pl-6 text-lg"> ${author}</div>
            <div class="text-white pl-6 text-s text-light">${Intl.DateTimeFormat(getLocale(), {dateStyle: "long"}).format(Date.parse(date))} • ${tags.map((t) => " " + t)}</div>
        </div>
    </div>
</div>`}