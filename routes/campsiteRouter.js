const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.get((req, res) => {
    const id = req.params.campsiteId;
    res.end(`Will send ${id} the campsite to you`);
})
.post((req, res) => {
    const id = req.params.campsiteId;
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description} to the id of: ${id}`);
})
.put((req, res) => {
    const id = req.params.campsiteId;
    res.statusCode = 201;
    res.end(`Will update campsite id: ${id}, with ${req.body.name} and description: ${req.body.description}`);
})
.delete((req, res) => {
    const id = req.params.campsiteId;
    res.end(`Deleting campsite: ${req.body.name}, with id: ${id}`);
});

module.exports = campsiteRouter;