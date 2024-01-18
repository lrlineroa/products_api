---
description: Real world examples of content published using GitBook.
---

# Instrucciónes Ejecución de la API

Esta Api contiene la información del reto propuesto.

### Prerequisitos

- Tener node instalado preferiblemente la versión v18.16.0.

- Tener un motor de MySQL corriendo en el puerto 3306.

- Tener una base de datos llamada products_api_development para que la API pueda funcionar.


- Correr las migraciones según esta [guía](https://sequelize.org/docs/v6/other-topics/migrations/) de migraciones de sequelize y correrlo sobre la carpeta **server\database**

- Correr los seeds según esta [guía](https://sequelize.org/docs/v6/other-topics/migrations/) de migraciones de sequelize y correrlo sobre la carpeta **server\database**


### Pasos

- Instalar las dependencias con yarn, ejecutando el comando ***yarn*** en la raíz del proyecto.

- Correr los archivos de migración y semillas (seed) como se explicó en un paso anterior.

- Renombrar el archivo **.env.example** o hacer una copia a **.env**

- Ejecutar el comando ***yarn watch:dev*** en la raíz del proyecto.

- Visitar el [inicio](http://localhost:3000) del proyecto.

- (Opcional) si queremos generar la documentación estática podemos correr el comando ***yarn documentation*** en la raíz del proyecto.


