// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Kullanıcı modelini ekleyin

// Kullanıcı girişi (login)
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Geçersiz e-posta veya şifre' });
    }

    // Kullanıcıyı doğruladıysak, JWT token oluştur
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET, // JWT Secret anahtarınız
      { expiresIn: '1h' } // Token'ın geçerlilik süresi
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Bir hata oluştu.' });
  }
};
