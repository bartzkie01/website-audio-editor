const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

// Route handler for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Audio Editor website');
});

app.post('/upload', upload.single('file'), (req, res) => {
    // Process the uploaded file here
    console.log(req.file);
    res.json({ status: 'success', message: 'Audio uploaded successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
