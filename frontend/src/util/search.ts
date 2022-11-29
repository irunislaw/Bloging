import { globalBlogArray } from "../index";

const input = document.querySelector("#search") as HTMLInputElement;
const tagTitlCheckBox = document.querySelector("#switch") as HTMLInputElement;

export let search = () => {
    let value = input.value;
    console.log(value);
    console.log("siema");

    console.log(globalBlogArray);

    return globalBlogArray.filter((obj) => {

        if (!tagTitlCheckBox.checked)
            return obj.title.match(new RegExp(value, "gi"));

        for (const tag of obj.tags) {
            if(tag.match(new RegExp(value, "gi"))) return true;
        }
        return false;
    })

};
