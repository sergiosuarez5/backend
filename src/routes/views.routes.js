import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render(filePath);
});
router.get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts");
});

export default router;
