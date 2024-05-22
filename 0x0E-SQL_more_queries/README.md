Here are some additional SQL queries with explanations:

1. SELECT:
    - Retrieves data from a database table.
    - Example: SELECT * FROM customers; ( Retrieves all data from the "customers" table)

2. FROM:
    - Specifies the table(s) to retrieve data from.
    - Example: SELECT * FROM customers, orders; (Retrieves data from both the "customers" and "orders" tables)

3. WHERE:
    - Filters data based on conditions.
    - Example: SELECT * FROM customers WHERE country='USA'; (Retrieves data from the "customers" table where the "country" column is 'USA')

4. AND:
    - Combines multiple conditions in a WHERE clause.
    - Example: SELECT * FROM customers WHERE country='USA' AND age>18; (Retrieves data from the "customers" table where the "country" column is 'USA' and the "age" column is greater than 18)

5. OR:
    - Combines multiple conditions in a WHERE clause.
    - Example: SELECT * FROM customers WHERE country='USA' OR age>18; (Retrieves data from the "customers" table where the "country" column is 'USA' or the "age" column is greater than 18)

6. ORDER BY:
    - Sorts data in ascending or descending order.
    - Example: SELECT * FROM customers ORDER BY name ASC; (Retrieves data from the "customers" table sorted in ascending order by the "name" column)

7. LIMIT:
    - Limits the number of rows returned.
    - Example: SELECT * FROM customers LIMIT 5; (Retrieves only the first 5 rows from the "customers" table)

8. JOIN:
    - Combines data from multiple tables.
    - Example: SELECT * FROM customers JOIN orders ON (link unavailable)=orders.customer_id; (Retrieves data from both the "customers" and "orders" tables where the "id" column in "customers" matches the "customer_id" column in "orders")

9. GROUP BY:
    - Groups data based on one or more columns.
    - Example: SELECT country, AVG(age) FROM customers GROUP BY country; (Retrieves the average "age" for each unique "country" in the "customers" table)

10. HAVING:
    - Filters grouped data based on conditions.
    - Example: SELECT country, AVG(age) FROM customers GROUP BY country HAVING AVG(age)>18; (Retrieves the average "age" for each unique "country" in the "customers" table where the average age is greater than 18)
