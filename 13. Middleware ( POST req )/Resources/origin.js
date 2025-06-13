const port = process.env.PORT;
const http = require("http");

// Users
const users = [
    {
        id: 1,
        name: "Rohit",
    },
    {
        id: 2,
        name: "Rohan",
    },
    {
        id: 3,
        name: "Patil",
    },
];

// Middleware

// Log Middleware
const logM = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// JSON Middleware
const jsonM = (req, res, next) => {
    res.setHeader('Content-Type','application/json');
    next();
};

const userM = (req,res) => {
    res.statusCode = 200;
    res.write(JSON.stringify(users));
}

// Route Handler for GET/API/Users
const routeM = (req, res) => {
    res.statusCode = 200;
    const id = req.url.split("/")[3];
    const user = users.find((usr) => usr.id === parseInt(id));
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.write(JSON.stringify({ message: "User not found" }));
    }
};

// POST API handler for /API/Users
// Here we will have our middleware

// Error Middleware
const errorM = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "URL not found" }));
}

const serve = http.createServer((req, res) => {
    logM(req, res, () => {
        jsonM(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                userM(req,res);
            }
            else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                routeM(req,res);
            }
            else if(req.url === '/api/users' && req.method === 'POST') {
                // Here we will add our middleware
            }
            else {
                errorM(req,res);
            }
            res.end();
        });
    });
});

serve.listen(port, () => {
    console.log(`Started server at ${port}`);
});
