select reviews.id, reviews.user_id, reviews.review, users.username
from reviews
join users user_id
on reviews.user_id = users.id
where reviews.id = $1
order by reviews.id asc