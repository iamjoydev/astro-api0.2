import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "backend", "data");
const usersFile = path.join(dataPath, "users.json");
const dailyFile = path.join(dataPath, "daily.json");

export const getStatus = (req, res) => {
  try {
    const stats = fs.existsSync(dailyFile) ? fs.statSync(dailyFile) : null;
    res.json({
      lastUpdated: stats ? stats.mtime : null,
      cacheSize: stats ? stats.size : 0
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const refreshData = (req, res) => {
  // Placeholder for regenerate logic
  res.json({ success: true, message: "Regeneration triggered" });
};

export const listUsers = (req, res) => {
  try {
    if (!fs.existsSync(usersFile)) fs.writeFileSync(usersFile, "[]");
    const users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addUser = (req, res) => {
  try {
    const { id, key } = req.body;
    let users = [];
    if (fs.existsSync(usersFile)) users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    users.push({ id, key });
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    let users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    users = users.filter(u => u.id !== id);
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};