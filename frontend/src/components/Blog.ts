import { getLocale } from "../util/getLocale"

export const BlogComponent = (id: string, title: string, shortContent: string, author: string, authorUrl: string, tags: string[], date: Date, likes: number, views: number) => {

    return String.raw`
<div class="blog bg-gradient-to-tr py-10 from-rose-500 gap-10 flex flex-col justify-between to-orange-500 rounded-sm shadow-lg duration-200 w-full"
    onclick="addView('${id}')">
    <div>
        <div class="px-10 text-2xl whitespace-pre-wrap font-medium text-white uppercase">${title}</div>
        <div class="px-10 whitespace-pre-wrap text-white">${shortContent}</div>
    </div>

    <div class="flex px-5 items-center justify-between">
        <div class="flex">
        <div class="bg-center bg-cover self-center aspect-square w-16 h-16 shadow-md rounded-full"
            style="background-image: url('${authorUrl}')">
        </div>
        <div class="flex flex-col justify-between">
            <div class="font-normal float-none text-white text-lg"> ${author}</div>
            <div class="text-white text-s text-light flex justify-between">
                <div class="flex">
                    ${Intl.DateTimeFormat(getLocale(), {
                 dateStyle:
                     "long"
                    }).format(date)} • ${tags.map((t) => " " + t)}
                </div>
                
            </div>
        </div>
        </div>
       
        <div class="flex self-end gap-2 text-white">
                    <div>
                        👀 ${views}
                    </div>
                    <div>
                        ❤ ${likes}
                    </div>
            </div>
    </div>

</div>
</div>`}