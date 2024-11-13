
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routes = require("./routes"); // Tüm rotaları içe aktarıyoruz
dotenv.config();
const { requestLogger, consoleLogger } = require('./utils/logger');


const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ limit: '2mb', extended: true }));

connectDB();




// Morgan'ı global middleware olarak ekleyelim
app.use(requestLogger); // Tüm HTTP isteklerini dosyaya logla
app.use(consoleLogger); // Tüm HTTP isteklerini konsola logla (geliştirme aşaması için)







// Tek bir çağrı ile tüm rotaları dahil ediyoruz
app.use("/api", routes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});
