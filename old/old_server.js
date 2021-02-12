const http = require('http');

const old_server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body>');
        res.write('<h3>Welcome</h3>');
        res.write('<form action="/createUser" method="post">');
        res.write('<input type="text" name="username">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

    }
    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body>' +
            '<ul><li>User 1</li><li>User 2</li></ul>' +
            '</body>');
        res.write('</html>');
        return res.end();
    }
    // Send a HTML response with some "Page not found text"
    if(url === '/createUser'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

old_server.listen(3000);
