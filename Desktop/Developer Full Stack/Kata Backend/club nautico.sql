create table SOCIOS (
	socio_id serial primary key,
	nombre varchar(120) not null,
	cedula varchar (120) not null,
	email varchar (120) unique not null,
	telefono varchar (11) not null
);

create table BARCO(
	barco_id serial primary key,
	numero_matricula varchar (120) not null,
	nombre varchar (120) not null,
	numero_amarre varchar (120) not null,
	cuota_mensual varchar (120) not null,
	socio_id int not null,
	foreign key (socio_id) references socios (socio_id)



);

create table PATRONES (
	Patron_id serial primary key,
	nombre varchar (120) not null,
	numero_Telefono varchar (120) not null,
	email varchar (120) unique not null,
	barco_id int not null,
	foreign key (barco_id) references BARCO(barco_id)
	
);

create table SALIDAS (
	salida_id serial primary key,
	fecha date not null,
	hora_salida time not null,
	destino varchar (120) not null,
	barco_id int not null,
	patron_id int not null,
	foreign key (barco_id)references BARCO (barco_id),
	foreign key (patron_id) references PATRONES (patron_id)


);