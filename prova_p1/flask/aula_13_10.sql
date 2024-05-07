use aula_13_10;

create table setor (
id int auto_increment primary key,
nome varchar(50) not null
);

create table funcionarios(
id int auto_increment PRIMARY KEY,
nome varchar(50) not null,
sobrenome varchar(50) not null,
data_de_admissao date not null,
status_funcionario BOOL not null,
id_setor int,
foreign key (id_setor) references setor(id)
);

select * from setor;
select * from cargos;

update cargos
set id_setor = 2
where id = 4;

alter table funcionarios add column cargo varchar(50) not null;
alter table funcionarios drop column cargo;

create table cargos(
id int auto_increment primary key,
nome varchar(50),
id_setor int,
foreign key (id_setor) references setor(id)
);

alter table cargos modify column nome varchar(50) not null;

alter table funcionarios add column id_cargo int;
alter table funcionarios add foreign key (id_cargo) references cargos(id);