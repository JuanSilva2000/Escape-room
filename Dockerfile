FROM node:18

# Crear el directorio de la aplicación dentro del contenedor
WORKDIR /app

# Copiar los archivos de la carpeta raíz al contenedor
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar todo el código de la aplicación al contenedor
COPY . .
EXPOSE 3000
# Especificar el comando que se ejecutará cuando inicie el contenedor
CMD ["node", "src/app.js"]

