# Використовуємо офіційний образ Node.js як базовий
FROM node:18-alpine

# Встановлюємо робочий каталог для додатку
WORKDIR /app

# Копіюємо файл package.json
COPY package.json ./

# Встановлюємо залежності
RUN npm install --legacy-peer-deps

# Копіюємо решту файлів додатку
COPY . .

# Будуємо додаток
RUN npm run build

# Запускаємо додаток
CMD ["npm", "start"]