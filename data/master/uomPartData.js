import { db } from '../../database/database.js';

export async function getAll() {
  return db.execute(`SELECT * FROM unit_list`).then((result) => {
    return result[0];
  });
}

export async function getAllBySparePartCode(umo_code) {
  return db
    .execute(
      `
    SELECT * FROM unit_list
    WHERE umo_code=?
    `,
      [umo_code]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllByHsnCode(hsn_code) {
  return db
    .execute(
      `
    SELECT * FROM unit_list
    WHERE hsn_code=?
    `,
      [hsn_code]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllById(materialMasterId) {
  return db
    .execute(
      `
    SELECT * FROM unit_list
    WHERE material_master_id=?
    `,
      [materialMasterId]
    )
    .then((result) => {
      return result[0];
    });
}

// receiving as an object
// id => auto
// created_by => from frontend
export async function create(unit_list) {
  const {
    uom_id,
    uom,
    remarks,
    created_by,
    created_date,
  } = unit_list;

  return db
    .execute(
      `
  INSERT INTO unit_list (uom_id, uom, remarks, created_by, created_date)
  VALUES (?,?,?,?,?,?,?,?,?,?,?)
  `,
      [
        uom_id,
        uom,
        remarks,
        created_by,
        new Date(),
      ]
    )
    .then((result) => getAllById(result[0].insertId));
}

// getting a spare_part object
export async function update(id, uom_id) {
  const {
    uom_id,
    uom,
    remarks,
    created_by,
    created_date,
  } = uom_id;

  return db
    .execute(
      `
  Update unit_list
  SET 
  uom_id=?,
  uom=?,
  remarks=?,
  WHERE
    material_master_id=?
    `,
      [
        uom_id,
        uom,
        remarks,
        id,
      ]
    )
    .then(() => getAllById(id));
}
