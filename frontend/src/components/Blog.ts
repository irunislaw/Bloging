export const BlogComponent = (title: string, author: string, authorUrl: string, tags: string[], date: Date) => String.raw`
<div
    class="bg-gradient-to-tr from-rose-500 to-orange-500 m-6 w-5/6 rounded-lg shadow-lg duration-200 sm:bg-gradient-to-br sm:from-black sm:to-white sm:w-1/3">
    <div class="px-10 pt-12  h-44 text-2xl whitespace-pre-wrap font-medium text-white">${title}</div>
    <div class="flex container px-10 py-10 mx-auto w ">
        <div
            class="bg-[url('${authorUrl}')] bg-center float left bg-cover w-16 h-16 min-w-fit min-h-fit shadow-md rounded-full">
        </div>
        <div class="w-96">
            <div class="font-normal float-none text-white pl-6 text-lg"> ${author}</div>
            <div class="text-white pl-6 text-s text-light">${date.toDateString()} • ${tags.map((t) => " " + t)}</div>
        </div>
    </div>
</div>`;