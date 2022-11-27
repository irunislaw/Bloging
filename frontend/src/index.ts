import { BlogComponent } from "./components/Blog";
import sanitize from "sanitize-html";
import axios from "axios";

const blogsDiv = document.querySelector("#blogs") as HTMLDivElement;


blogsDiv.innerHTML += sanitize(BlogComponent("Eksperci biją na alarm 🔔 inflacja dabloons wymyka się z pod kontroli", "Inflacja dabloons wymyka się z pod kontroli, czy waluta wytrzyma kryzys?", "kalempster", "https://cdn.discordapp.com/avatars/363723925659713537/9b9e004e4f69c7d185820485cf60b072.png?size=4096", ["Ekonomia", "Technologia"], new Date()), { allowedAttributes: { "*": ["class", "style"] } });
blogsDiv.innerHTML += sanitize(BlogComponent("Eksperci biją na alarm 🔔 inflacja dabloons wymyka się z pod kontroli", "Inflacja dabloons wymyka się z pod kontroli, czy waluta wytrzyma kryzys?", "kalempster", "https://cdn.discordapp.com/avatars/363723925659713537/9b9e004e4f69c7d185820485cf60b072.png?size=4096", ["Ekonomia", "Technologia"], new Date()), { allowedAttributes: { "*": ["class", "style"] } });
blogsDiv.innerHTML += sanitize(BlogComponent("Eksperci biją na alarm 🔔 inflacja dabloons wymyka się z pod kontroli", "Inflacja dabloons wymyka się z pod kontroli, czy waluta wytrzyma kryzys?", "kalempster", "https://cdn.discordapp.com/avatars/363723925659713537/9b9e004e4f69c7d185820485cf60b072.png?size=4096", ["Ekonomia", "Technologia"], new Date()), { allowedAttributes: { "*": ["class", "style"] } });
blogsDiv.innerHTML += sanitize(BlogComponent("Eksperci biją na alarm 🔔 inflacja dabloons wymyka się z pod kontroli", "Inflacja dabloons wymyka się z pod kontroli, czy waluta wytrzyma kryzys?", "kalempster", "https://cdn.discordapp.com/avatars/363723925659713537/9b9e004e4f69c7d185820485cf60b072.png?size=4096", ["Ekonomia", "Technologia"], new Date()), { allowedAttributes: { "*": ["class", "style"] } });
blogsDiv.innerHTML += sanitize(BlogComponent("Eksperci biją na alarm 🔔 inflacja dabloons wymyka się z pod kontroli", "Inflacja dabloons wymyka się z pod kontroli, czy waluta wytrzyma kryzys?", "kalempster", "https://cdn.discordapp.com/avatars/363723925659713537/9b9e004e4f69c7d185820485cf60b072.png?size=4096", ["Ekonomia", "Technologia"], new Date()), { allowedAttributes: { "*": ["class", "style"] } });


