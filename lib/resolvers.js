"use strict";

const courses = [
  {
    _id: "Msd1",
    title: "La concha de tu hermana",
    teacher: " la concha de tu vieja",
    description: "hijo de un container lleno de putas",
    topic: " wtf",
  },
  {
    _id: "Msd3",
    title: "La concha de tu hermana 2",
    teacher: " la concha de tu vieja",
    description: "hijo de un container lleno de putas",
    topic: " wtf",
  },
  {
    _id: "Msd4",
    title: "La concha de tu hermana 3",
    teacher: " la concha de tu vieja",
    description: "hijo de un container lleno de putas",
    topic: " wtf",
  },
];

module.exports = {
  Query: {
    getCourses: () => {
      return courses;
    },
    getCourse: (root, args) => {
      const course = courses.filter((course) => course._id === args.id);
      return course.pop();
    },
  },
};
