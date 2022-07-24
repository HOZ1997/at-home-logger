
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "role" INT  NOT NULL DEFAULT 1
);


CREATE TABLE "inventory" (
  "id" serial primary key,
  "item" varchar not null,
  "category_id" int not null,
  "location_id" int not null,
  "status_id" int not null,
  "package_id" int not null,
  "notes" text,
  "reorder" boolean default false,
  "donated" boolean default false,
  "date" date not null default CURRENT_DATE,
  "user_id" int not null
); 

CREATE TABLE "category" (
  "id" serial primary key,
  "category_name" varchar(255) NOT NULL);

INSERT INTO "category" ("category_name") VALUES ('family mementos');
INSERT INTO "category" ("category_name") VALUES ('movies');
INSERT INTO "category" ("category_name") VALUES ('books');
INSERT INTO "category" ("category_name") VALUES ('toys');
INSERT INTO "category" ("category_name") VALUES ('personal care');
INSERT INTO "category" ("category_name") VALUES ('pets');
INSERT INTO "category" ("category_name") VALUES ('household supplies');
INSERT INTO "category" ("category_name") VALUES ('clothing');
INSERT INTO "category" ("category_name") VALUES ('electronics');
INSERT INTO "category" ("category_name") VALUES ('clothing'); 
INSERT INTO "category" ("category_name") VALUES ('grocery'); 


  CREATE TABLE "location" (
  "id" serial primary key,
  "location_name" varchar(255) NOT NULL)

INSERT INTO "location" ("location_name") VALUES ('under stairs');
INSERT INTO "location" ("location_name") VALUES ('pantry');
INSERT INTO "location" ("location_name") VALUES ('master');
INSERT INTO "location" ("location_name") VALUES ('guest');
INSERT INTO "location" ("location_name") VALUES ('laundry');
INSERT INTO "location" ("location_name") VALUES ('garage');
INSERT INTO "location" ("location_name") VALUES ('living room');
INSERT INTO "location" ("location_name") VALUES ('kitchen');
INSERT INTO "location" ("location_name") VALUES ('br 1');
INSERT INTO "location" ("location_name") VALUES ('br 2');



  CREATE TABLE "packaging" (
  "id" serial primary key,
  "packaging_name" varchar(255) NOT NULL);


INSERT INTO "packaging" ("packaging_name") VALUES ('item');
INSERT INTO "packaging" ("packaging_name") VALUES ('bag');
INSERT INTO "packaging" ("packaging_name") VALUES ('box');


CREATE TABLE "status" (
  "id" serial primary key,
  "status_name" varchar(255) NOT NULL); 
  

INSERT INTO "status" ("status_name") VALUES ('pending donate');
INSERT INTO "status" ("status_name") VALUES ('pending dispose');
INSERT INTO "status" ("status_name") VALUES ('long term - heather');
INSERT INTO "status" ("status_name") VALUES ('long term - family');
INSERT INTO "status" ("status_name") VALUES ('backstock');
INSERT INTO "status" ("status_name") VALUES ('family review');
INSERT INTO "status" ("status_name") VALUES ('1 year hold');


 INSERT INTO "inventory" ("item", "category_id", "location_id", "status_id", "package_id", "notes", "user_id")VALUES ('soap', 1, 1, 1, 1, 'may need to reorder soon', 1 ); 


 