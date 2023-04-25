/*----- INNER JOIN -----*/
SELECT Orders.order_id, Customers.contact_name
FROM Orders
INNER JOIN Customers ON Orders.customer_id = Customers.customer_id;

SELECT o.order_id, c.contact_name
FROM Orders AS o
INNER JOIN Customers AS c ON o.customer_id = c.customer_id;

/*----- LEFT JOIN -----*/
SELECT o.order_id, c.contact_name
FROM Orders AS o
LEFT JOIN Customers AS c ON o.customer_id = c.customer_id;

/*----- RIGHT JOIN -----*/
SELECT o.order_id, c.contact_name
FROM Orders AS o
RIGHT JOIN Customers AS c ON o.customer_id = c.customer_id;

/*----- FULL JOIN -----*/
SELECT o.order_id, c.contact_name
FROM Orders AS o
FULL JOIN Customers AS c ON o.customer_id = c.customer_id;