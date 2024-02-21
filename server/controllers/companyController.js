const companyService = require('../services/companyService');
const asyncHandler = require('../middleware/async');

exports.addCompany = asyncHandler(async (req, res, next) => {
  const company = await companyService.addCompany(req);
  res.status(200).json({
    success: true,
    data: company,
  });
});

exports.getCompanies = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

exports.followOrUnfollow = asyncHandler(async (req, res, next) => {
  await companyService.followOrUnfollow(req.user, req.params.companyUrl);
  res.status(200).json({
    success: true,
  });
});

exports.findCompanyByUrl = asyncHandler(async (req, res, next) => {
  const {company, vacancies} = await companyService.findCompanyByUrl(req.params.companyUrl);
  const isFollow = await companyService.isFollow(
    req.user,
    req.params.companyUrl
  );
  res.status(200).json({
    success: true,
    data: company,
    vacancies,
    isFollow,
  });
});
