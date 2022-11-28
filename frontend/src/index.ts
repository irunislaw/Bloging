import { BlogComponent } from "./components/Blog";
import axios from "axios";
import { Blog } from "./interfaces/Blog";
import { sanitize } from "./util/sanitize";
//loading
const loader = document.querySelector('.preload')as HTMLDivElement;
const emoji = loader?.querySelector('.emoji')as HTMLDivElement;

const emojis = ["🕐", "🕜", "🕑","🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢",  "🕗", "🕣", "🕘", "🕤", "🕙",  "🕥", "🕚", "🕦",  "🕛", "🕧"];

const interval = 125;

const loadEmojis = (arr:Array<string>) => {
    setInterval(() => {
      emoji.innerText = arr[Math.floor(Math.random() * arr.length)];
      //console.log(Math.floor(Math.random() * arr.length))
    }, interval);
}

const init = () => {
  loadEmojis(emojis);
}
init();


const blogsDiv = document.querySelector("#blogs") as HTMLDivElement;
const errorDiv = document.querySelector("#error") as HTMLDivElement;
const compose = (...fns:any[]) => (x:any[]) => fns.reduce((acc, fn) => fn(acc), x);
const sortByDate =(list:Array<Blog>) => list.sort( (a,b)=>{
  let date1 = new Date(a.updatedAt);
  let date2 = new Date(b.updatedAt);
  return date1.getTime() - date2.getTime()
});
const composeSortByDate =compose(sortByDate);

(async () => {
  try {
    await fetch(
      "https://bloggingbackend.onrender.com/api/v1/blogs/get-blogs",
      {}
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        let blogSorted = composeSortByDate(data);
        loader.style.display = "none"
        for (const blog of blogSorted) {
          
          blogsDiv.innerHTML += sanitize(
            BlogComponent(
              blog._id,
              blog.title,
              blog.shortContent,
              blog.authorName,
              blog.authorImage,
              blog.tags,
              blog.updatedAt,
            )
          );
        }
      });
    




  } catch (error) {
    
    blogsDiv.style.display = "none"
    errorDiv.style.display = "flex";
    errorDiv.innerHTML += sanitize(
      String.raw`<div class="flex flex-col justify-center items-center min-h-[calc(100vh-11.5rem)] gap-5">
            <div class="text-9xl">🤔</div>
            <div class="text-3xl text-white w-10/12 md:w-1/2 text-center ">Hmm, coś poszło nie tak podczas ładownia blogów, spróbuj ponownie później</div>
        </div>`
    );
   
  }
})();
