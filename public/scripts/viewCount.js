import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const socket = io();

const isolateName = new RegExp ("(?<=method\/).*?(?=\/)");
const pageName = window.location.pathname.match(isolateName);

const camelize = s => s.replace(/-./g, x=>x[1].toUpperCase());
const camelName = camelize(pageName[0]);

console.log('test');

socket.emit("page", camelName);

socket.on("updatedViewCount", (viewCount) => {
  console.log(viewCount);
  document.querySelector(".viewcount-counter").innerHTML = viewCount[camelName];
});