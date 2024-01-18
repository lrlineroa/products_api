import db from "../database/models";

export const createInvoice = async (req, res) => {
  try {
    const { UserId, total, subtotal, taxes, invoice_items } = req.body;
    const result = await db.sequelize.transaction(async (t) => {
      let invoice = await db.Invoice.create({
        UserId,
        total,
        subtotal,
        taxes,
      },{transaction:t});
      for(let invoiceItemInfo of invoice_items){
        let invoiceItem=await db.Invoice_item.create({InvoiceId:invoice.id,...invoiceItemInfo},{transaction:t});  
      }
    });
    return res.status(200).json("Invoice Added successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error at creating invoice");
  }
};

export const getInvoices = async (req, res) => {
  try {
    let invoices = await db.Invoice.findAll({
      include: ["Products", "User"],
    });
    res.json(invoices);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error at retrieving invoices list");
  }
};

export const getInvoicesByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    let invoices = await db.Invoice.findAll({
      where:{
        UserId:user_id,
      },
      include: ["Products", "User"],
    });
    res.json(invoices);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error at retrieving invoices list");
  }
};

export const readOneInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    let invoice = await db.Invoice.findByPk(id);
    res.json(invoice);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error at retieving the invoice");
  }
};
