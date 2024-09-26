const txtFirstName = document.querySelector("#txt-first-name");

const spanFullName = document.querySelector("#span-full-name");

document.getElementById("txt-first-name");
document.getElementsByTagName("input");

txtFirstName.addEventListener("keyup", (event) => {
	spanFullName.innerHTML = txtFirstName.value;
})

txtFirstName.addEventListener("keyup", (event) => {
	console.log(event.target);
	console.log(event.target.value);
})