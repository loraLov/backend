const {Router} = require('express');
const {getMeal, saveMeals, editMeal, deleteMeal} = require('./MealController');
const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.delete('/deleteMeal', deleteMeal);
router.put('/editMeal', editMeal);



module.exports = router;