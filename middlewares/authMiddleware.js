// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware: Kullanıcı kimliğini doğrulama
const authenticate = (req, res, next) => {
  const token = req.header('Authorization');

  // Token bulunamadığında hata döner
  if (!token) {
    return res.status(401).json({ message: 'Erişim reddedildi: Token bulunamadı.' });
  }

  try {
    // Token'ı doğrula
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Kullanıcı bilgisini req.user'a ekleyelim (diğer route'lar için kullanılabilir)
    req.user = decoded;

    // Bir sonraki middleware ya da route handler'a geç
    next();
  } catch (err) {
    return res.status(400).json({ message: 'Geçersiz token.' });
  }
};

module.exports = authenticate;
