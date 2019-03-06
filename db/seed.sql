create table users (
    id serial primary key,
    username varchar(30) not null,
    password text not null
);




create table reviews
(
    id serial primary key,
    user_id integer,
    review text
)

select * from reviews
join users 
on reviews.user_id = users.id


CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;