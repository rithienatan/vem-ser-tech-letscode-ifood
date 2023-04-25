CREATE VIEW view_employees 
AS SELECT employee_id, last_name, first_name, title, city
FROM employees;

select * from view_employees;