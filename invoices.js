/**
 * @type {import('mongoose').Model}
 */

const Invoice = require("../models/Invoice.js");
const express = require("express");
const router = express.Router();

// get all invoices
router.get("/get-all", async (req,res) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices)
    } catch(error) {
        console.log(error);
    }
})

router.post("/add-invoice", async (req, res)=> {
    try {
        const newInvoice = new Invoice(req.body)
        await newInvoice.save();
        res.status(200).json("Item added successfully.");
    }
    catch (error) {
        res.status(400).json(error)
    }
})

router.put("/update-invoice", async (req,res) => {
    try {
        await Invoice.findOneAndUpdate({ _id: req.body._id }, req.body);
        res.status(200).json("Item updated successfully")
    } catch(error) {    
        console.log(error);
    }
})

router.delete("/delete-invoice", async (req,res) => {
    try {
        await Invoice.findOneAndDelete({ _id: req.body._id });
        res.status(200).json("Item deleted successfully")
    } catch(error) {    
        console.log(error);
    }
})

module.exports = router;