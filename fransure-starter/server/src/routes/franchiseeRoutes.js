import { Router } from "express";
import { pool } from "../config/db.js";
import { verifyToken, requireRole } from "../middleware/auth.js";

const router = Router();

// GET /api/franchisees - Franchisor only: list all franchisees
router.get("/", verifyToken, requireRole("franchisor"), async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM franchisees ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching franchisees" });
  }
});

// GET /api/franchisees/me - Franchisee: view own record
router.get("/me", verifyToken, requireRole("franchisee"), async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM franchisees WHERE user_id = $1", [req.user.id]);
    res.json(result.rows[0] || null);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching your record" });
  }
});

export default router;
