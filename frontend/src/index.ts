import { BlogComponent } from "./components/Blog";
import sanitize from "sanitize-html";
import "./index.css";

const blogsDiv = document.querySelector("#blogs") as HTMLDivElement;


blogsDiv.innerHTML += sanitize(BlogComponent("Eksperci biją na alarm 🔔 inflacja dabloons wymyka się z pod kontroli", "kalempster", "https://cdn.discordapp.com/attachments/654788427669176320/1045484023058808842/Screenshot_2022-11-25-00-40-09-03.jpg", ["Ekonomia", "Technologia"], new Date()), { allowedAttributes: { "*": ["class"] } });
blogsDiv.innerHTML += sanitize(BlogComponent("Eksperci biją na alarm 🔔 inflacja dabloons wymyka się z pod kontroli", "kalempster", "https://cdn.discordapp.com/attachments/654788427669176320/1045484023058808842/Screenshot_2022-11-25-00-40-09-03.jpg", ["Ekonomia", "Technologia"], new Date()), { allowedAttributes: { "*": ["class"] } });
blogsDiv.innerHTML += sanitize(BlogComponent("Eksperci biją na alarm 🔔 inflacja dabloons wymyka się z pod kontroli", "kalempster", "https://cdn.discordapp.com/attachments/654788427669176320/1045484023058808842/Screenshot_2022-11-25-00-40-09-03.jpg", ["Ekonomia", "Technologia"], new Date()), { allowedAttributes: { "*": ["class"] } });
blogsDiv.innerHTML += sanitize(BlogComponent("Eksperci biją na alarm 🔔 inflacja dabloons wymyka się z pod kontroli", "kalempster", "https://cdn.discordapp.com/attachments/654788427669176320/1045484023058808842/Screenshot_2022-11-25-00-40-09-03.jpg", ["Ekonomia", "Technologia"], new Date()), { allowedAttributes: { "*": ["class"] } });
