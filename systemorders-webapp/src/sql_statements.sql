create table resources (
    resource    varchar(20)     not null,
    primary key (resource)
);

create table operations (
    operation   varchar(20)     not null,
    primary key (operation)
);

create table permissions (
    resc        varchar(20),
    oprt        varchar(20),
    foreign key (resc) references resources (resource),
    foreign key (oprt) references operations (operation),
    primary key (resc, oprt)
);

create table roles (
    role    varchar(20),
    primary key (role)
);

create table rolepermissions (
    role        varchar(20),
    oprt        varchar(20),
    resc        varchar(20),
    foreign key (role) references roles (role),
    foreign key (oprt, resc) references permissions (oprt, resc),
    primary key (role, oprt, resc)
);

insert into resources values
    ('users'), ('orders');

insert into operations values
    ('create'), ('read'), ('update'), ('delete'),
    ('verify'), ('quote'), ('approve'), ('delivered');

insert into permissions (oprt, resc) values
    ('create', 'orders'), ('read', 'users'), ('read', 'orders'),
    ('update', 'users'), ('update', 'orders'), ('delete', 'users'),
    ('delete', 'orders'), ('verify', 'users'), ('verify', 'orders'),
    ('quote', 'users'), ('quote', 'orders'), ('approve', 'users'),
    ('approve', 'orders'), ('delivered', 'users'), ('delivered', 'orders');

insert into roles values
    ('user'), ('support'), ('helpdesk'), ('admin');

insert into rolepermissions (role, oprt, resc) values
    ('user','create','orders'), ('user','read','users'), ('user','read','orders'),
    ('user','update','users'), ('user','update','orders'), ('user','delete','users'),
    ('user','delete','orders'), ('user','verify','orders'), ('user','quote','orders'),
    ('user','approve','orders'), ('user','delivered','orders'), ('user','create','users'),
    ('support','create','orders'), ('support','read','users'), ('support','read','orders'),
    ('support','update','users'), ('support','update','orders'), ('support','delete','users'),
    ('support','delete','orders'), ('support','verify','orders'), ('support','quote','orders'),
    ('support','approve','orders'), ('support','delivered','orders'), ('support','create','users'),
    ('helpdesk','create','orders'), ('helpdesk','read','users'), ('helpdesk','read','orders'),
    ('helpdesk','update','users'), ('helpdesk','update','orders'), ('helpdesk','delete','users'),
    ('helpdesk','delete','orders'), ('helpdesk','verify','orders'), ('helpdesk','quote','orders'),
    ('helpdesk','approve','orders'), ('helpdesk','delivered','orders'), ('helpdesk','create','users'),
    ('admin','create','orders'), ('admin','read','users'), ('admin','read','orders'),
    ('admin','update','users'), ('admin','update','orders'), ('admin','delete','users'),
    ('admin','delete','orders'), ('admin','verify','orders'), ('admin','quote','orders'),
    ('admin','approve','orders'), ('admin','delivered','orders'), ('admin','create','users');

SELECT role FROM rolepermissions WHERE oprt='operation' AND resc='resource';

create table orders (
    orderid     int,
    userid      int             not null,
    status      varchar(10)     not null,
    fecha       datetime        not null,
    processor   varchar(30)     not null,
    memory      int             not null,
    harddisk    int             not null,
    operatingsystem varchar(30) not null,
    type        varchar(15)     not null,
    dateneeded  date            not null,
    provider    varchar(20),
    price       float,
    acquisitiontype varchar(20),
    gmaccepted  boolean,
    gmdetails   text,
    finalpersonid int,
    datearrived date,
    clientsentto varchar(30),
    primary key (orderid),
    foreign key (userid) references employee (userid)
);
