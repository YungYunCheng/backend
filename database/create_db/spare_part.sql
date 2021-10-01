create database inventory_dev;
use inventory_dev;

CREATE TABLE unit_list (
  uom_id int NOT NULL AUTO_INCREMENT,
  uom varchar(25) DEFAULT NULL,
  remarks varchar(25) DEFAULT NULL,
  created_by varchar(10) DEFAULT NULL,
  created_date  datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (uom_id)
);