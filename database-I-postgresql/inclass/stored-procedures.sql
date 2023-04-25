CREATE FUNCTION NomeContato() RETURNS SETOF VARCHAR AS
        'SELECT Customers.contact_name FROM Orders
        INNER JOIN Customers ON Orders.customer_id = Customers.customer_id
        WHERE Orders.order_id = 10831;'
LANGUAGE SQL;

SELECT NomeContato()