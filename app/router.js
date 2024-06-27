const { Router } = require("express");



// Create router
const router = Router();

const homeController = require("./controllers/homeController");
const presentationController = require("./controllers/presentationController");

// Configure router
router.get("/", homeController.renderPortfolioPage);

// route aProposDeMoi
router.get("/presentation", presentationController.renderPresentationPage);

// Export router
module.exports = router;