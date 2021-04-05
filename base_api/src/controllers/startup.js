module.exports = app => {
    app.get('/startup', (req, res) => res.send('You are into startup controller ...'));

    app.post('/startup', (req, res) => {
        res.send(req.body);
    });
}