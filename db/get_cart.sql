select cart.cart_id, cart.user_id, cart.service_id, services.service, users.username, services.img, services.price
from cart
join users on cart.user_id = users.id
join services on cart.service_id = services.service_id