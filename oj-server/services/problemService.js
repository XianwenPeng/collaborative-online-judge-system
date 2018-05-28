
var ProblemModel = require("../models/problemModel");

var getProblems = function () {
  return new Promise ((resolve, reject) => {
    ProblemModel.find({}, function (err, problems) {
      if (err) {
        reject(err);
      } else {
        resolve(problems);
      }
    });
  });
}

var getProblem = function (problemId) {
  return new Promise ((resolve, reject) => {
    // console.log(problemId);
    ProblemModel.findOne({id: problemId}, function (err, problem) {
      if (err) {
        reject(err);
      } else {
        resolve(problem);
      }
    })
  });
}

var addProblem = function (newProblem) {
  return new Promise ((resolve, reject) => {
    ProblemModel.findOne({title: newProblem.title}, function (err, problem) {
      if (problem) {
        reject("Problem already exists.");
      } else {
        ProblemModel.count({}, function (err, num) {
          newProblem.id = num + 1;
          var mongoProblem = new ProblemModel(newProblem);
          mongoProblem.save();
          resolve(mongoProblem);
        });
      }
    })
  });
}

module.exports = {
  getProblems: getProblems,
  getProblem: getProblem,
  addProblem: addProblem
}
