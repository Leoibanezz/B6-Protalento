--Ejercicios En clase--
/*Ejercicio #1*/
select * from actor where first_name='Julia';
/*Ejercicio #2*/
select * from actor where first_name='Cuba'or first_name = 'Cameron' or first_name = 'Chris';
/*Ejercicio #3*/
select * from customer where first_name ='Jamie';
/*Ejercicio #4*/
select amount, payment_date from payment where amount < 1;
/*Ejercicio #5*/
select customer_id from customer order by store_id desc limit 3;
/*Ejercicio #6*/
SELECT rating, COUNT(rating) FROM film WHERE rating='PG' OR rating = 'PG-13' OR rating='NC-17'GROUP BY rating;
--Ejercicios de TAREA--
select film_id,title from film;
-------------------------------
select * from film limit 5;
-------------------------------
select film_id from film where film_id <4 ;
-------------------------------
select * from actor where first_name in ('Angela','Angelina','Audrey');
select * from actor where first_name = 'Angela' or first_name = 'Angelina' or first_name ='Audrey';
-------------------------------
select last_update from store;
-------------------------------
select country_id from city order by country_id;
select city from city order by city;
-------------------------------
select count(distinct customer_id) as total_clientes from rental;
-------------------------------
select count(*) AS total_duplicados 
from (select last_name FROM customer group by last_name having count(last_name) > 1) as ver
-------------------------------
SELECT film_id, COUNT(*) AS cantidad_actores
FROM film_actor
GROUP BY film_id
ORDER BY cantidad_actores DESC
LIMIT 1;
-------------------------------
select actor_id count (*) as cantidad_de_peliculas from film group by actor_id order by actor_id desc limit 1;
