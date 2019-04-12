INSERT INTO roles (name) VALUES ('Admin');
INSERT INTO roles (name) VALUES ('User');

-- INSERT INTO users (login, password, email, first_name, last_name, birthday, salary, role_id) VALUES('Artas','pass', 'Lorderon@gmail.com', 'Pasha', 'Barchenko', '1996-04-27', 2);
INSERT INTO users (birthday, email, first_name, last_name, login, password, salary, role_id) VALUES('1999-07-25','Tanya@gmail.com', 'Tanya', 'Barchenko', 'Tanya', 'pass', '4000', 1);
INSERT INTO users (birthday, email, first_name, last_name, login, password, salary, role_id) VALUES('1996-04-27','Artas@gmail.com', 'Pasha', 'Barchenko', 'Artas', 'pass', '2000', 2);
INSERT INTO users (birthday, email, first_name, last_name, login, password, salary, role_id) VALUES('1990-03-01','User@gmail.com', 'User', 'User', 'User', 'pass', '0', 2);