require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const API = process.env.API_KEY;
const URL = process.env.SUPABASE_URL;

const supabase = createClient(URL, API);
console.log("Supabase client created");

module.exports = supabase;
