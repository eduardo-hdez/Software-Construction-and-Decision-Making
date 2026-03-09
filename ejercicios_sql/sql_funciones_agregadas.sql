/* El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado. */

SELECT Nombre, SUM(Sueldo) as 'Ingresos Totales'
FROM Elenco
GROUP BY Nombre
GROUP BY Nombre
ORDER BY SUM(Sueldo) DESC

/* El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's. */

SELECT nomestudio, SUM(presupuesto) as 'Monto total destinado'
FROM Pelicula
WHERE año BETWEEN 1980 AND 1989
GROUP BY nomestudio
ORDER BY SUM(presuspuesto) DESC

/* Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones de dolares por película. */

SELECT Elenco.nombre, AVG(Elenco.sueldo) as 'Sueldo promedio'
FROM Elenco, Actor
WHERE Elenco.nombre = Actor.nombre AND Actor.sexo = 'masculino'
GROUP BY Elenco.nombre
HAVING AVG(Elenco.sueldo) > 5000000
ORDER BY AVG(Elenco.sueldo) DESC

/* Título y año de producción de las películas con menor presupuesto. 
(Por ejemplo, la película de Titanic se ha producido en varias veces 
entre la lista de películas estaría la producción de Titanic y el año 
que fue filmada con menor presupuesto). */

SELECT Pelicula.titulo, Pelicula.año, MIN(Pelicula.presupuesto) as 'Presupuesto minimo'
FROM Pelicula
GROUP BY Pelicula.titulo
ORDER BY MIN(Pelicula.presupuesto) DESC

/* Mostrar el sueldo de la actriz mejor pagada. */

SELECT MAX(Elenco.sueldo) as 'Mejor pago'
FROM Elenco, Actor
WHERE Elenco.nombre = Actor.nombre AND Actor.sexo = 'femenino'