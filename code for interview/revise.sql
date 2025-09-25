the main types of sql commands are
DDL data definition language(create,drop,truncate,alter)
DML data manipulation language (select ,insert ,update,delete)
DCL data control language (grant ,revoke)
TCL transaction control language(commit,rollback,savepoint)


CREATE TABLE users ( id serial, email text, is_deleted boolean default false );

update users set is_deleted=true where users.id not in (select MIN(id) from users where email is not null group by email);

📌 When to Use Each

Use COUNT when you need totals.

Use GROUP BY when you want totals per category.

Use HAVING when you want to filter those categories by aggregate values.

joins
a self join is a regular join but the table is joined with itself
self joins are powerful when you need to compare rows within the same table or find relationships among them.
example of self join
select column_name from table_name t1 as a join table_name t1 as b on a.common_field = b.common_field;

select column_name(s) from table1 as c  inner join table2 as p on c.column_name=p.column_name;