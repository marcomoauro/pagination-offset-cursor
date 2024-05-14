create table customers
(
    id         bigint unsigned auto_increment primary key,
    name       varchar(100)                        not null,
    age        int                                 not null,
    city       varchar(100)                        not null,
    created_at timestamp default CURRENT_TIMESTAMP not null,
    updated_at timestamp default CURRENT_TIMESTAMP not null
);