# google-drive-links
Get a list of public links of a shared Google Drive folder.

# Usage

Add a module script to your page:

```html
<script src="app.js" type="module"></script>
```

Import the Drive object from the module:

```javascript
import { Drive } from "drive.js";
```

Set your Google Drive API key (read more at the API [Quickstart guide](https://developers.google.com/drive/api/v3/quickstart/js)):

```javascript
Drive.Key = "< YOUR_API_KEY >";
```

*You don't need to authenticate a user to run these queries. An oAuth key is not required nor used. Only an API key is required.*

Call the GetFiles(id, fields) function:

```javascript
Drive.GetFiles(folderID);
```

The default value for the fields property is "files(id,webContentLink)"; only returns the internal id and public facing link to the file. More examples are in the [Google Drive API docs](https://developers.google.com/drive/api/v3/performance#partial-response).

Listen for the loadedFilesList event and process the files:

```javascript
document.addEventListener("loadedFilesList", (e) => {
    e.detail.files.forEach((f) => {
        console.log(f);
    });
});
```

Example output:

*Using default settings*

```javascript
{
    "files": [
        {
            "id": "INTERNAL_FILE_ID",
            "webContentLink": "PUBLIC_LINK_TO_FILE"
        }
    ]
}
```
