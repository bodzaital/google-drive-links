var Drive = {
	Key: null,

	/**
	 * Queries the Google Drive API for a list of files.
	 * Set your API key (Drive.Key field) before calling.
	 * @param {string} folderId The folder's public id.
	 * @param {string} fields The paths of the fields you want included in the response.
	 * See https://developers.google.com/drive/api/v3/performance#partial-response.
	 */
	GetFiles: (folderId, fields = "files(id,webContentLink)") => {
		if (Drive.Key === null) {
			console.log("Missing API key.");
			return;
		}

		let ajax = new XMLHttpRequest();
		ajax.open("GET", `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${Drive.Key}&fields=${fields}`);
		ajax.addEventListener("load", AjaxLoadEventHandler);
		ajax.send();
	}
};

function AjaxLoadEventHandler() {
	if (this.status !== 200) {
		console.log(this.responseText);
		return;
	}

	let loadedEvent = new CustomEvent("loadedFilesList", { detail: JSON.parse(this.responseText) });
	document.dispatchEvent(loadedEvent);
}

export { Drive };