const express = require("express");
const supabase = require("../service/supabaseClient");
const router = express.Router();

router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("create_event").select();
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.status(200).json(data);
});

module.exports = router;
