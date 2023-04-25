The project works as follows:

Firstly the backend is made to work using node index.js, which is responsible for starting the server, and also specify the middlewares to be used.

For every requirement, we have a file inside the routes directory, which contains the logic to the API that must be rendered according to our queries as mentioned.

The models directory contain the User model which has been used throughout to define the schema of our database.

The db directory contains the code used to link the mongodb database with our application.

In the database.js file, line 14-17 should be uncommented to load the data into the database.
The APIs can be accessed at:
http://localhost:5000/api/users1
http://localhost:5000/api/users2
http://localhost:5000/api/users3
http://localhost:5000/api/users4
http://localhost:5000/api/cities



In the frontend directory, we have a react app named users, inside which in the src directory, we have the index.js file, which is the entrypoint for our react app.
The index.js file calls the app.js file which contains the routing of our application.

To handle each route, we have components, one of them is being reused with different props in order to specify different functionalities.

The logic remains the same, just the API endpoint needs to be changed, so I have reused the Users component.

The Users component makes use of the User component which in turn renders every user in a tabular form using map function.

Same logic has been implemented within the Cities and City component.

The API endpoints are the ones which are already hosted on the backend.

The different queries can be accessed on:
http://localhost:3000/users1
http://localhost:3000/users2
http://localhost:3000/users3
http://localhost:3000/users4
http://localhost:3000/cities