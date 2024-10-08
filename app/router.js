const { Router } = require("express");



// Create router
const router = Router();

const homeController = require("./controllers/homeController");
const presentationController = require("./controllers/presentationController");
const waitingOcoffeeController = require("./controllers/waitingOcoffeeController");
const waitingRecipesController = require("./controllers/waitingRecipesController");
const technoController = require("./controllers/technoController");



// Configure router
router.get("/", homeController.renderPortfolioPage);

// route aProposDeMoi
router.get("/presentation", presentationController.renderPresentationPage);
// route projet ocoffee en attente

router.get("/waitingOcoffee", waitingOcoffeeController.renderWaitingOcoffeePage);

// route projet recipes en attente

router.get("/waitingRecipes", waitingRecipesController.renderWaitingRecipesPage);

// route technologies
router.get("/techno", technoController.renderTechnoPage);

// Export router
module.exports = router;