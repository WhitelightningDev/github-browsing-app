const express = require('express');
const axios = require('axios');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());

app.get('/api/github/user/:username/repos', async (req, res) => {
    try {
        const { username } = req.params;
        const { page = 1, per_page = 10 } = req.query;
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
            params: { page, per_page }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/github/repos/:owner/:repo/commits', async (req, res) => {
    try {
        const { owner, repo } = req.params;
        const { page = 1, per_page = 5 } = req.query;
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`, {
            params: { page, per_page }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
