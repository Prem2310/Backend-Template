const express = require("express");
const supabase = require("../service/supabaseClient");
const { title } = require("process");
const router = express.Router();

router.post("/", async (req, res) => {
  const { title, description, category, date, time, contact } = req.body;
  if (!title || !description || !category || !date || !time || !contact) {
    res.status(400).json({ error: "Please fill all the fields" });
    return;
  }
  const { error } = await supabase.from("create_event").insert({
    title: title,
    description: description,
    category: category,
    date: date,
    time: time,
    contact: contact,
  });
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.status(200).json({ message: "Event created successfully" });
});
module.exports = router;
