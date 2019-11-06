
const express = require('express');
const app = express();

// Express route
const signupExpressRoute = express.Router();

// User schema
let SignSchema = require('../model/signup.model');

// Get users
signupExpressRoute.route('/').get((req, res) => {
    SignSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Create user
signupExpressRoute.route('/create-admin').post((req, res, next) => {
    SignSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// Get single user
signupExpressRoute.route('/get-admin/:id').get((req, res) => {
    SignSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update user
signupExpressRoute.route('/update-admin/:id').put((req, res, next) => {
    SignSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Admin successfully updated!')
        }
    })
})

// Delete student
signupExpressRoute.route('/remove-Admin/:id').delete((req, res, next) => {
    SignSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = signupExpressRoute;
