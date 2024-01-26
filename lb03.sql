create database ressourcen;
use ressourcen;

-- Gender --

CREATE TABLE IF NOT EXISTS gender(
    genderID INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    gender varchar(255) NOT NULL,
    abbrev varchar(255)
);

SELECT * FROM gender;

INSERT INTO gender (gender, abbrev) VALUES ('male', 'm');
INSERT INTO gender (gender, abbrev) VALUES ('female', 'f');

SELECT * FROM gender;


-- Address --

CREATE TABLE IF NOT EXISTS address (
addressID INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
street varchar(255),
code varchar(255),
town char(255)
);

SELECT * FROM address;


INSERT INTO address (street, code, town) VALUES ('Rudolfstrasse 28', '5312', 'Döttingen');
INSERT INTO address (street, code, town) VALUES ('Rebbergstrasse 15', '8113', 'Boppelsen');
INSERT INTO address (street, code, town) VALUES ('Bergstrasse 55', '6028', 'Herlisberg');
INSERT INTO address (street, code, town) VALUES ('Lehmweg 3', '6440', 'Brunnen');
INSERT INTO address (street, code, town) VALUES ('Rosenbergstrasse 41', '8400', 'Winterthur');
INSERT INTO address (street, code, town) VALUES ('Seefeldstrasse 11', '8008', 'Zurich');
INSERT INTO address (street, code, town) VALUES ('Steinweg 1', '8180', 'Bülach');
INSERT INTO address (street, code, town) VALUES ('Beelerstrasse 22', '8192', 'Glattfelden');
INSERT INTO address (street, code, town) VALUES ('Otelfingerstrasse 4', '8113', 'Boppelsen');
INSERT INTO address (street, code, town) VALUES ('Stockerstrasse 10', '8002', 'Zurich');

select * from address;


-- Personal --

CREATE TABLE IF NOT EXISTS personal (
personalID INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
email VARCHAR(255),
phonenumber VARCHAR(255)
);

select * from personal;

INSERT INTO personal (email, phonenumber) VALUES ('john.doe@example.com', '+1234567890');
INSERT INTO personal (email, phonenumber) VALUES ('alice.smith@example.com', '+9876543210');
INSERT INTO personal (email, phonenumber) VALUES ('bob.johnson@example.com', '+1122334455');
INSERT INTO personal (email, phonenumber) VALUES ('emily.davis@example.com', '+9988776655');
INSERT INTO personal (email, phonenumber) VALUES ('michael.taylor@example.com', '+5544332211');
INSERT INTO personal (email, phonenumber) VALUES ('sophia.clark@example.com', '+6677889900');
INSERT INTO personal (email, phonenumber) VALUES ('david.miller@example.com', '+1122334455');
INSERT INTO personal (email, phonenumber) VALUES ('olivia.brown@example.com', '+5544332211');
INSERT INTO personal (email, phonenumber) VALUES ('daniel.harris@example.com', '+6677889900');
INSERT INTO personal (email, phonenumber) VALUES ('ava.martin@example.com', '+9988776655');

select * from personal;


-- Login Table --

create table if not exists logintable (
    loginID INTEGER Primary Key AUTO_INCREMENT NOT NULL,
    username varchar(50),
    password varchar(20)
);

select * from logintable;

INSERT INTO logintable (username, password) VALUES ('john_doe', 'hashed_password_1');
INSERT INTO logintable (username, password) VALUES ('alice_smith', 'hashed_password_2');
INSERT INTO logintable (username, password) VALUES ('bob_johnson', 'hashed_password_3');
INSERT INTO logintable (username, password) VALUES ('emily_davis', 'hashed_password_4');
INSERT INTO logintable (username, password) VALUES ('michael_taylor', 'hashed_password_5');
INSERT INTO logintable (username, password) VALUES ('sophia_clark', 'hashed_password_6');
INSERT INTO logintable (username, password) VALUES ('david_miller', 'hashed_password_7');
INSERT INTO logintable (username, password) VALUES ('olivia_brown', 'hashed_password_8');
INSERT INTO logintable (username, password) VALUES ('daniel_harris', 'hashed_password_9');
INSERT INTO logintable (username, password) VALUES ('ava_martin', 'hashed_password_10');


select * from logintable;


-- User --

CREATE TABLE IF NOT EXISTS user (
    userID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    birthdate VARCHAR(255) NOT NULL,

    loginID INT,
    FOREIGN KEY (loginID) REFERENCES logintable(loginID) ,

    genderID INT,
    FOREIGN KEY (genderID) REFERENCES gender(genderID),

    addressID INT,
    FOREIGN KEY (addressID) REFERENCES address(addressID) ,

    personalID INT,
    FOREIGN KEY (personalID) REFERENCES personal(personalID)
    );

select * from user;


INSERT INTO user (name, surname, birthdate, genderID, loginID, addressID, personalID) VALUES ('John', 'Doe', '1990-05-15', 1, 1, 1, 1);
INSERT INTO user (name, surname, birthdate, genderID, loginID, addressID, personalID) VALUES ('Alice', 'Smith', '1985-08-22', 2, 2, 2, 2);
INSERT INTO user (name, surname, birthdate, genderID, loginID, addressID, personalID) VALUES ('Bob', 'Johnson', '1998-03-10', 1, 3, 3, 3);
INSERT INTO user (name, surname, birthdate, genderID, loginID, addressID, personalID) VALUES ('Emily', 'Davis', '1992-11-28', 2, 4, 4, 4);
INSERT INTO user (name, surname, birthdate, genderID, loginID, addressID, personalID) VALUES ('Michael', 'Taylor', '1980-07-03', 1, 5, 5, 5);
INSERT INTO user (name, surname, birthdate, genderID, loginID, addressID, personalID) VALUES ('Sophia', 'Clark', '1995-09-14', 2, 6, 6, 6);
INSERT INTO user (name, surname, birthdate, genderID, loginID, addressID, personalID) VALUES ('David', 'Miller', '1987-02-18', 1, 7, 7, 7);
INSERT INTO user (name, surname, birthdate, genderID, loginID, addressID, personalID) VALUES ('Olivia', 'Brown', '1993-06-25', 2, 8, 8, 8);
INSERT INTO user (name, surname, birthdate, genderID, loginID, addressID, personalID) VALUES ('Daniel', 'Harris', '1982-12-07', 1, 9, 9, 9);
INSERT INTO user (name, surname, birthdate, genderID, loginID, addressID, personalID) VALUES ('Ava', 'Martin', '1997-04-19', 2, 10, 10, 10);

select * from user;

-- Amount --

CREATE TABLE IF NOT EXISTS amount (
amountID INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
amount VARCHAR(255)
);

select * from amount;

INSERT INTO amount (amount) VALUES ('2');
INSERT INTO amount (amount) VALUES ('1');
INSERT INTO amount (amount) VALUES ('1');
INSERT INTO amount (amount) VALUES ('10');
INSERT INTO amount (amount) VALUES ('5');
INSERT INTO amount (amount) VALUES ('2');
INSERT INTO amount (amount) VALUES ('1');
INSERT INTO amount (amount) VALUES ('1');
INSERT INTO amount (amount) VALUES ('1');
INSERT INTO amount (amount) VALUES ('8');

select * from amount;


-- Date request --

CREATE TABLE IF NOT EXISTS daterequest (
daterequestID INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
date VARCHAR(255)
);

select * from daterequest;

INSERT INTO daterequest (date) VALUES ('03.01.2024');
INSERT INTO daterequest (date) VALUES ('12.01.2024');
INSERT INTO daterequest (date) VALUES ('23.02.2024');
INSERT INTO daterequest (date) VALUES ('15.01.2024');
INSERT INTO daterequest (date) VALUES ('20.03.2024');
INSERT INTO daterequest (date) VALUES ('27.01.2024');
INSERT INTO daterequest (date) VALUES ('27.01.2024');
INSERT INTO daterequest (date) VALUES ('06.01.2024');
INSERT INTO daterequest (date) VALUES ('18.02.2024');
INSERT INTO daterequest (date) VALUES ('22.01.2024');

select * from daterequest;


-- Category --

CREATE TABLE IF NOT EXISTS category (
categoryID INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
category VARCHAR(255),
item VARCHAR(255),

daterequestID INT,
FOREIGN KEY (daterequestID) REFERENCES daterequest(daterequestID),

amountID INT,
FOREIGN KEY (amountID) REFERENCES amount(amountID)
);

select * from category;

INSERT INTO category (category, item, daterequestID, amountID) VALUES ('Sportgeräte', 'Springseil', 1, 1);
INSERT INTO category (category, item, daterequestID, amountID) VALUES ('Fotografie', 'Kamera', 1, 1);
INSERT INTO category (category, item, daterequestID, amountID) VALUES ('Video', 'Gimbal', 1, 1);
INSERT INTO category (category, item, daterequestID, amountID) VALUES ('Computer', 'Maus', 1, 1);
INSERT INTO category (category, item, daterequestID, amountID) VALUES ('Computer', 'Adapter', 1, 1);
INSERT INTO category (category, item, daterequestID, amountID) VALUES ('Computer', 'Adapter', 1, 1);
INSERT INTO category (category, item, daterequestID, amountID) VALUES ('Sportgeräte', 'Basketball', 1, 1);
INSERT INTO category (category, item, daterequestID, amountID) VALUES ('Fotografie', 'Speicherkarte', 1, 1);
INSERT INTO category (category, item, daterequestID, amountID) VALUES ('Fotografie', 'Dauerlicht', 1, 1);
INSERT INTO category (category, item, daterequestID, amountID) VALUES ('Video', 'Objektiv', 1, 1);

select * from category;


-- Reservations --

CREATE TABLE IF NOT EXISTS reservations (
    reservationID INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    date VARCHAR(255),
    place VARCHAR(255),

    categoryID INT,
    FOREIGN KEY (categoryID) REFERENCES category(categoryID),

    userID INT,
    FOREIGN KEY (userID) REFERENCES user(userID)
    );

select * from reservations;

INSERT INTO reservations (date, place, userID, categoryID) VALUES ('03.10.2023', 'Horgen', 1, 1);
INSERT INTO reservations (date, place, userID, categoryID) VALUES ('12.10.2023', 'Horgen', 2, 2);
INSERT INTO reservations (date, place, userID, categoryID) VALUES ('23.11.2023', 'Boppelsen', 3, 3);
INSERT INTO reservations (date, place, userID, categoryID) VALUES ('15.09.2023', 'Winterthur', 4, 4);
INSERT INTO reservations (date, place, userID, categoryID) VALUES ('20.10.2023', 'Horgen', 5, 5);
INSERT INTO reservations (date, place, userID, categoryID) VALUES ('27.11.2023', 'Bülach', 6, 6);
INSERT INTO reservations (date, place, userID, categoryID) VALUES ('27.11.2023', 'Horgen', 7, 7);
INSERT INTO reservations (date, place, userID, categoryID) VALUES ('06.09.2023', 'Horgen', 8, 8);
INSERT INTO reservations (date, place, userID, categoryID) VALUES ('18.10.2023', 'Horgen', 9, 9);
INSERT INTO reservations (date, place, userID, categoryID) VALUES ('22.10.2023', 'Zürich', 10, 10);

select * from reservations;


select * from reservations
join user on user.userID = reservations.userID
join gender g on user.genderID = g.genderID
join address a on user.addressID = a.addressID
join personal p on user.personalID = p.personalID
join logintable l on user.loginID = l.loginID
join category c on reservations.categoryID = c.categoryID
join daterequest d on c.daterequestID = d.daterequestID
join amount a2 on c.amountID = a2.amountID;