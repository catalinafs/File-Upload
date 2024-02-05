const validateImage = (req, res, next) => {
    const file = req.file;

    console.log(file)
    if (!file) {
        return res.status(400).json({ error: 'No file provided' });
    }

    if (!file.mimetype.startsWith('image')) {
        return res.status(400).json({ error: 'Not an image file' });
    }

    if (file.size > 700 * 1024) {
        return res.status(400).json({ error: 'File size exceeds 700KB' });
    }

    next();
};

module.exports = validateImage;