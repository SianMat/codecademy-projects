"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.Classroom, {
        foreignKey: "classroom_id",
        as: "classroom",
      });
      Student.belongsTo(models.Course, {
        through: "StudentCourse",
        as: "courses",
        foreignKey: "student_id",
      });
    }
  }
  Student.init(
    {
      classroom_id: DataTypes.INTEGER,
      student_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
