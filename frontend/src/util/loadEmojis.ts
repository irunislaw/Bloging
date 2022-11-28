import { emoji } from "../index";

export const emojis = [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛",
];
const interval = 70;
export const loadEmojis = (arr: string[]) => {
    let index = 0;
    setInterval(() => {
        if (index > emojis.length - 1)
            index = 0;
        emoji.innerText = arr[index];
        index++;
    }, interval);
};
