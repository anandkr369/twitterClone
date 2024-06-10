const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' }); // Setup multer for file uploads

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define the user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
    password: { type: String, required: true },
    tweets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tweet' }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tweet' }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

// Define the tweet schema
const tweetSchema = new mongoose.Schema({
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    media: { type: String },
    emoji: { type: String },
    createdAt: { type: Date, default: Date.now }
});

// Create the models
const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://anandkr369:Kumaranand369@cluster0.xgzq1qs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

connectDB();

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/signup', async (req, res) => {
    try {
        const { name, email, username, dob, password } = req.body;

        let existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ name, email, username, dob, password: hashedPassword });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/tweets', upload.single('media'), async (req, res) => {
    try {
        const { content, emoji } = req.body;
        const userId = "666489570a22a2589e9c74ac"; // replace with authenticated user context

        if (!content) {
            return res.status(400).json({ message: 'Content is required' });
        }

        const tweet = new Tweet({
            content,
            user: userId,
            media: req.file ? req.file.path : null,
            emoji
        });

        await tweet.save();

        // Update user's tweets array
        await User.findByIdAndUpdate(userId, { $push: { tweets: tweet._id } });

        res.status(201).json({ message: 'Tweet posted successfully', tweet });
    } catch (error) {
        console.error('Error posting tweet:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Middleware to authenticate and set req.userId
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) return res.sendStatus(403);
        req.userId = user.userId;
        next();
    });
};

// app.use(authenticateToken);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
