 # School Finder API

A backend API to add and manage school data with location support.


📌 Add School API
The Add School API is used to collect and store school information in the database.  
Users can send school details such as school name, address, latitude, and longitude through the request body.
✅ Validates all required fields before storing data  
✅ Saves school information in the database  
✅ Returns proper success and error responses  
✅ Supports location-based school management



📍 List School API
The List School API is used to fetch and display all schools stored in the database based on user location.
Users send latitude and longitude through query parameters.  
The API validates the coordinates, fetches all school data from the database, and calculates the distance between the user and each school.
Schools are sorted from nearest to farthest distance for better location-based results.
✅ Fetches all school data from database  
✅ Validates latitude and longitude  
✅ Calculates nearest schools using distance logic  
✅ Returns distance in meters and kilometers  
✅ Sends clean formatted API responses  
✅ Handles server and validation errors properly



🚀 Conclusion
This project is a fully deployed backend API built for school management and location-based school searching.
The API is developed using Express.js and Node.js for backend server handling, MySQL for database management, and Prisma ORM for database queries and schema management.
The project supports adding school data, validating user input, storing records in the database, and finding nearest schools using latitude and longitude calculations.
The application is successfully deployed and live on Render.

