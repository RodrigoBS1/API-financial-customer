var express = require('express');
var router = express.Router();
const fs = require('fs')

const NAMES_FILE = './data/names.json';

/* GET names listing. */
router.get('/', function(req, res, next) {
    fs.readFile(NAMES_FILE, 'utf8', (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file');
            return;
        }
        res.json(JSON.parse(data));
    })
  
});

// GET a name dy its Ids
router.get('/:id', (req, res) => {
    fs.readFile(NAMES_FILE, 'utf-8', (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file');
            return;
        }
        const names = JSON.parse(data)
        const name = names.find(name => name.id === req.params.id)
        if (!name) {
            res.status(404).send('Name not found')
            return;
        }
        res.json(name)
    })
})

// POST a new name
router.post('/', (req,res) => {
    fs.readFile(NAMES_FILE, 'utf-8', (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file');
            return;
        }
        const names = JSON.parse(data)
        const newNames = {
            id: (names.length + 1).toString(),
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address
        }
        names.push(newNames)
        fs.writeFile(NAMES_FILE, JSON.stringify
            (names), err => {
                if(err) {
                    console.error(err);
                    res.status(500).send('There was a problem writing the file');
                    return;
                }
                res.json(newNames)
            })
    })
})

module.exports = router;
