import FormData from "form-data";
import credentials from "./credentials.js";
import fetch from "node-fetch";

const formdata = new FormData();

/**
 * Uploads the given file to the Polar-S2
 * @param {String} fileName name of the file that you want to upload
 * @param {String} reference path where you want to store file
 * @param {File} file file object fetched from DOM
 * @example
 * file = document.getElementById("your-element-id").files[0];
 * add("filemame", "/path/to/store/file", file);
 */
const add = (fileName, reference, file) => {
	formdata.append("userId", credentials.userId);
	formdata.append("apiKey", credentials.apiKey);
	formdata.append("projectId", credentials.projectId);
	formdata.append("projectName", credentials.projectName);
	formdata.append("file", file, file.name);
	formdata.append("fileName", fileName);
	formdata.append("reference", reference);
	const requestOptions = {
		method: "POST",
		body: formdata,
		redirect: "follow",
	};

	fetch("http://13.90.95.93:3000/upload/uploadToBucket", requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));
};

export default add;
