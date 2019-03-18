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

create table services (
    service_id serial primary key,
    service varchar(200),
    img text,
    price text,
    info text
)

create table cart 
(
    cart_id serial primary key,
    user_id int,
    service_id int
)



insert into services (service, img, price)
values (
     'EyeBrow Waxing', 'https://www.udcin.com/wp-content/uploads/2017/11/c6c5ac_acd669b2cc69400eb01c2faee344def1mv2.png', '$19.99', 'detail of eyebrow waxing'
),

('Brazillian Waxing', 'http://www.michelleranae.com/wp-content/uploads/2011/09/Luxury-Bikini-3.jpg', '$49.99', 'detail of brazillian waxing'),

('Lip Waxing', 'https://bellezzaspava.com/wp-content/uploads/2014/11/lip-waxing.jpg', '$9.99', 'detail of lip waxing'),

('Underarm Waxing', 'https://www.udcin.com/wp-content/uploads/2017/11/b683b7a24200169392c85371dae73d9c-underarm-waxing-body-waxing.jpg', '$19.99', 'detail of underarm waxing'),

('Full-Leg Waxing', 'http://product.vnailpro.com/wp-content/uploads/2018/07/Full-Leg-Waxing.png', '$39.99', 'detail of full leg waxing'),

('Eyebrow Threading', 'https://s3.r29static.com//bin/entry/43c/x,80/1694595/image.jpg', '$19.99', 'detail of eyebrow threading'),

('Lip Threading', 'https://cdn.shopify.com/s/files/1/0085/9701/2539/products/Upperlip_large.jpg?v=1536212991', '$9.99', 'detail of lip threading'),

('Full-Face Threading', 'https://2.bp.blogspot.com/-VKSmdD2Tt60/WD36NbbaZOI/AAAAAAAAAAw/PQev-vpOiNoc4N6mGqLQfUUVe3fGMwK3wCPcB/s320/facial%2B4.jpg', '$39.99', 'detail of full face threading'),

('MakeUp Application', 'http://www.dermstore.com/blog/wp-content/uploads/2017/06/main-makeup-artist-applying-bridal-makeup.jpg', 'Call for Consultation / Pricing', 'detail of makeup')