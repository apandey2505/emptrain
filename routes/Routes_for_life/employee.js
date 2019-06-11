var express = require('express');
const router = express.Router;

import employee from '../../app/controllers/employee/employeeInfo'

//const employee

// this is for all the exployee routes
router.use('/', (req,res)=> res.send(" employee page"))
//router.use('/info', employee.Info)
//router.use('/employeeInsert')