const prisma = require("../config/prisma");
const sortSchoolsByDistance = require("../Utilis/location-helper");



exports.addSchool = async (req, res) => {
  try {

    const { name, address, latitude, longitude } = req.body;

    // Validation
    if (!name || !address || latitude == null || longitude == null) {
      return res.status(400).json({
        success: false,
        message: "Name, address, latitude and longitude are required"
      });
    }

    // Validate data types
    if (
      typeof name !== "string" ||
      typeof address !== "string" ||
      isNaN(latitude) ||
      isNaN(longitude)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid data types"
      });
    }

    // Add school to database
    const newSchool = await prisma.school.create({
      data: {
        name,
        address,
        latitude: Number(latitude),
        longitude: Number(longitude)
      }
    });

    // Final Response
    res.status(201).json({
      success: true,
      message: "School added successfully",
      schoolId: newSchool.id
    });

  } catch (err) {

    console.log("AddSchool API Error:", err.message);

    res.status(500).json({
      success: false,
      message: "Something went wrong while adding school",
      error: err.message
    });

  }
};



exports.listSchool = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    // validation
    if (!latitude || !longitude) {
      return res.status(400).json({
        message: "Latitude and Longitude are required",
      });
    }

    //fetch all school data
    const schools = await prisma.school.findMany();

    //Sort nearest schools
    const sortedSchools = sortSchoolsByDistance(schools, latitude, longitude);

    // clean response
    const formattedSchools = sortedSchools.map((school) => ({
      id: school.id,

      name: school.name,

      address: school.address,

      distanceInMeters: school.distance + " meters",

      distanceInKM: (school.distance / 1000).toFixed(2) + " KM",
    }));

    // Final Response
    res.status(200).json({
      message: "all school data fetch succesfully",
      success: true,

      totalSchools: formattedSchools.length,

      data: formattedSchools,
    });
  } catch (err) {
    console.log("ListSchool API Error:", err.message);

    res.status(500).json({
      success: false,

      message: "Something went wrong while fetching schools",

      error: err.message,
    });
  }
};
