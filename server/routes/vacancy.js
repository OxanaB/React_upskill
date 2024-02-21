const express = require("express");
const vacancyController = require("../controllers/vacancyController");
const isAuth = require("../middleware/isAuth");
const advancedResponse = require("../middleware/advancedResponse");
const Vacancy = require("../models/Vacancy");

const router = express.Router({ mergeParams: true });

router.route('/').get(isAuth, advancedResponse(Vacancy), vacancyController.getVacancies).post(isAuth, vacancyController.addVacancy)
router.route('/dashboard').get(isAuth, vacancyController.getFollowVacancies)
router.route('/:vacancyId').get(isAuth, vacancyController.getVacancy).delete(isAuth, vacancyController.deleteVacancy)

module.exports = router;
