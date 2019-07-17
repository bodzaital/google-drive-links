import { Drive } from "../src/drive.js";

let key = new URL(window.location.href).searchParams.get("key");
let id = new URL(window.location.href).searchParams.get("folderID");

if (id !== null && key !== null) {
	document.getElementById("key").value = key;
	document.getElementById("folderID").value = id;

	Drive.Key = key;
	Drive.GetFiles(id);
}

document.addEventListener("loadedFilesList", (e) => {
	let r = "";
	e.detail.files.forEach((f) => {
		r += `${f.id} -> ${f.webContentLink}\n`;
	});
	document.getElementById("result").innerText = r;
});