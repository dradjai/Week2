-- 2. Create a new file petstore.sql. --Done
-- Create a pet store database, with 2 mySQL tables, pets and owners. --Done
-- Each table should have at least 3 properties. --Done
-- Insert one pet and one owner into appropriate tables. --Done
-- 3. Run a query in your terminal to print all of the data in the pets table.

create table owners(
  ownerId int auto_increment primary key,
  firstName varchar(20) not null,
  lastName varchar(20) not null,
  email varchar(30) not null,
  phoneNumber varchar(30),
  createDate TimeStamp default current_timestamp

);

create table pets(
  petId int auto_increment primary key,
  petType varchar(20) not null,
  petName varchar(20) not null,
  petAge int not null,
  ownerId int not null,
  foreign key (ownerId) references owners(ownerId)

);

insert into owners(firstName, lastName, email, phoneNumber) 
values ('David', 'Radjai', 'david@gmail.com', '555-555-5555'),
('Mike', 'Jones', 'mike@yahoo.com', '222-222-2222');

insert into pets(petType, petName, petAge, ownerId) 
values ('Jack Russell', 'Casper', 15, 1),
('Boxer', 'Lucky', 7, 1);



