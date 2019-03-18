insert into users (username, password, first_name, last_name, email, phone)
values (${username}, ${password}, ${first_name}, ${last_name}, ${email}, ${phone})

returning id, username