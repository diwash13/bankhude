delete from reviews
where id=$1;

select reviews.id, reviews.user_id, reviews.review, users.username
from reviews 
join users user_id
on reviews.user_id = users.id
order by reviews.id asc;