insert into
ad_role(role_id, description, created_by, updated_by, created_at, updated_at)
values 
	(1, 'hospital admin', 1, 1, now(), now()),
    (2, 'department admin', 1, 1, now(), now()),
	(3, 'pharmacy admin', 1, 1, now(), now()),
	(4, 'ambulance admin', 1, 1, now(), now());

insert into
ad_menu(menu_id, description, link, parent_id, created_by, updated_by, created_at, updated_at)
values 
	(1, 'hospital', 'https://hospital', DEFAULT,1, 1, now(), now()),
    (2, 'department', 'https://department', DEFAULT, 1, 1, now(), now()),
    (3, 'pharmacy', 'https://pharmacy', DEFAULT, 1, 1, now(), now()),
    (4, 'ambulance', 'https://ambulance', DEFAULT, 1, 1, now(), now());