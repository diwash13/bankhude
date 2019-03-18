insert into reviews
(user_id, review)
values ($1, $2);

select reviews.id, reviews.user_id, reviews.review, users.username
from reviews 
join users
on reviews.user_id = users.id
order by reviews.id asc;