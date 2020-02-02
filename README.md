# Proyecto Node Sequelize y PostgreSql

Hola este es un mini proyecto en donde se utiliza Express como framework para node, Sequelize y con base de datos PostgreSql

## Estructura del proyecto

En el proyecto tiene orientación modelos y controladores las vistas se pueden implementar directamente con html y css puro o con algún framework de JS, los endpoints ya están realizados. Ahora un pequeño desglose de como esta estructurado el proyecto:
 
###  Carpeta controllers
**- Project.Controllers.Js:**  En este apartado se encuentra toda la lógica un pequeño crud para insertar, borrar y modificar los proyectos que se encuentran, se utiliza sequelize como **ORM** para poder hacer las distintos querys contra PostgreSQL .

**- Task.Controllers.Js:** En este apartado se encuentra el **CRUD** correspondiente a task o las tareas, con el se puede insertar, borrar y  filtrar por el tipo de proyecto pasando la id asignada. También lleva sequelize como **ORM**.

### Carpeta Models
**-Project.js:** es el modelo de la base de datos directamente es como está estructurado la base de datos aquí contendrá todos los campos como se encuentran en base de datos. Se utiliza Sequelize para esto y utilizando distintos tipos de métodos que integra se puede realizar las consultas que se necesitan.
**-Task.js:** es el modelo de la base de datos directamente es como está estructurado la base de datos aquí contendrá todos los campos como se encuentran en base de datos. Se utiliza Sequelize para esto y utilizando distintos tipos de métodos que integra se puede realizar las consultas que se necesitan.
### Carpeta Routers
**-Project.js:** Son los endpoint para los proyectos.
**-Task.js:** Son los endpoints para las tareas.

### Carpeta Database
**-database.js** Aquí se encuentra la conexión de base de datos en este caso postgres con el proyecto

### Carpeta SQL 
**db.sql** Aquí estan las consultas para crear las tablas y algunos insert para testear las tablas.
