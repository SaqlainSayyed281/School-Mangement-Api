const { getDistance } = require("geolib");

const sortSchoolsByDistance = (
  schools,
  userLatitude,
  userLongitude
) => {

  schools.forEach((school) => {

    school.distance = getDistance(
      {
        latitude: Number(userLatitude),
        longitude: Number(userLongitude),
      },
      {
        latitude: Number(school.latitude),
        longitude: Number(school.longitude),
      }
    );

  });

  schools.sort((a, b) => a.distance - b.distance);

  return schools;
};

module.exports = sortSchoolsByDistance
