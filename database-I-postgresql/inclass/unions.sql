/*----- UNION -----*/
SELECT City FROM Customers
UNION
SELECT City FROM Suppliers;

/*----- UNION ALL -----*/
SELECT City FROM Customers
UNION ALL
SELECT City FROM Suppliers