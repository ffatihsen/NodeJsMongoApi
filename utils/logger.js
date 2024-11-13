// utils/logger.js
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Log dosyasını oluşturma (dosya yolu)
const logStream = fs.createWriteStream(path.join(__dirname, 'logs/app.log'), { flags: 'a' });

// Morgan ile HTTP isteklerini loglama
const requestLogger = morgan('combined', { stream: logStream }); // Logları dosyaya yazdırmak için 'combined' formatını kullanıyoruz

// İsteğe bağlı olarak konsola log yazmak isterseniz
const consoleLogger = morgan('dev'); // 'dev' formatı, kısa ve renkli loglar verir

module.exports = { requestLogger, consoleLogger };
