//<----------------mongoose--------------->
const mongoose = require("mongoose")
//<----------------dotenv--------------->
require('dotenv').config()


//<----------------connecting to mongodb--------------->
const connection  = mongoose.connect(process.env.mongoURL)


//<----------------exporting connection--------------->
module.exports = {connection}