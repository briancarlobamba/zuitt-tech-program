const txtFirstName = document.querySelector("#txt-first-name");
const txtLastName = document.querySelector("#txt-last-name");
const spanFullName = document.querySelector("#span-full-name");

txtFirstName.addEventListener("keyup", (event) => {
	spanFullName.innerHTML = txtFirstName.value + " " + txtLastName.value;
})

txtFirstName.addEventListener("keyup", (event) => {
	console.log(event.target);
	console.log(event.target.value);
})

txtLastName.addEventListener("keyup", (event) => {
	spanFullName.innerHTML = txtFirstName.value + " " + txtLastName.value;
})

txtLastName.addEventListener("keyup", (event) => {
	console.log(event.target);
	console.log(event.target.value);
})
