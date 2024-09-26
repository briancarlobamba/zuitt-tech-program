// Add solution



//No need to add app.listen and port number variable.


else if (request.url == "/updateCourse" && request.method === "PUT") {

		console.log(request.method);

		response.writeHead(200, {"Content-Type": "text/plain"});

		response.end("Update a course to our resources");


//Do not modify
//Make sure to save the server in variable called app
if(require.main === module){
    app.listen(4000, () => console.log(`Server running at port 4000`));
}

module.exports = app;