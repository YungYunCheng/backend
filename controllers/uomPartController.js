import * as uomPartData from '../data/master/uomPartData.js';

export async function getAllUOM(req, res, next) {
  const uom_code = req.query.uom_code;
  const hsn_code = req.query.hsn_code;

  // exculde when hsn_code && spare_part_code exist for now
  let UOM;
  if (uom_code) {
    uomPart = await uomPartData.getAllByUOMCode(uom_code);
  } else if (hsn_code) {
    uomPart = await uomPartData.getAllByHsnCode(hsn_code);
  } else {
    uomPart = await uomPartData.getAll();
  }

  return res.status(200).json(uomPart);
}

export async function getById(req, res, next) {
  const { id } = req.params;
  const uomPart = await uomPartData.getAllById(id);

  if (uomPart) {
    res.status(200).json(uomPart);
  } else {
    res.status(404).json({ message: `UOM Part not Found` });
  }
}

export async function postUOM(req, res) {
  const { uomPart } = req.body;
  const uomPart = await uomPartData.create(uomPart);
  res.status(201).json(uomPart);
}

export async function updateUOM(req, res) {
  const { id } = req.params;
  const { uomPart } = req.body;
  console.log(uomPart);
  const sparePart = await uomPartData.update(id, uomPart);
  if (uomPart) {
    res.status(200).json(uomPart);
  } else {
    res.status(404).json({ message: `UOM Part not Found` });
  }
}
