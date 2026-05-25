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
✅ Improves location-based school searching experience




🚀 Conclusion
A backend API for managing and finding nearby schools using location-based distance calculation. Built with Node.js, Express.js, MySQL, and Prisma ORM.
