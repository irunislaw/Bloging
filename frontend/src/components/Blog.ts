export const BlogComponent = (title: string, author: string, authorUrl: string, tags: string[], date: Date) => String.raw`
<div
    class="bg-gradient-to-tr from-rose-500 to-orange-500 m-6 w-5/6 rounded-lg shadow-lg duration-200 sm:bg-gradient-to-br md:from-black md:to-white md:w-1/3">
    <div class="px-10 pt-12  h-44 text-2xl whitespace-pre-wrap font-medium text-white">${title}</div>
    <div class="flex px-10 py-10 items-center">
        <div class="bg-center bg-cover aspect-square w-16 h-16 shadow-md rounded-full"
            style="background-image: url('${authorUrl}')">
        </div>
        <div>
            <div class="font-normal float-none text-white pl-6 text-lg"> ${author}</div>
            <div class="text-white pl-6 text-s text-light">${date.toDateString()} • ${tags.map((t) => " " + t)}</div>
        </div>
    </div>
</div>`;