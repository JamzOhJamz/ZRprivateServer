import { Router } from 'express';
import { ApiGetUserResponse } from "../models";

export const userRouter = Router();

// Handle legacy redirect
userRouter.get('/user/login/:provider', (req, res) => {
    res.cookie('csrf', req.query.csrf, { maxAge: 3600000 });
    res.redirect('/user/login')
});

// Show login page
userRouter.get('/user/login', (req, res) => {
    const server = req.app.get('server');
    res.render('login', { server_name: server.options.server_name });
});

// Submit login form
userRouter.post('/user/login', async (req, res) => {
    // Make sure username and password fields are given
    if (!req.body.username || !req.body.password) {
        return res.send('Missing username or password');
    }
    const db = await req.app.get('connection');
    // Find user with given username and password
    const [rows] = await db.execute('SELECT * FROM users WHERE username = ? AND password = ?', [req.body.username, req.body.password]);
    if (rows.length === 0) {
        return res.send('Invalid username or password');
    }
    const user = rows[0];
    // Generate a random token, 20 bytes and digest to hex
    const token = require('crypto').randomBytes(20).toString('hex');
    // Store token in database in the sessions table with 30 day expiry
    await db.execute('INSERT INTO sessions (user_id, guid, expires) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 30 DAY))', [user.id, token]);
    // Set cookie with token
    res.cookie('userKey', token, { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true });
    res.redirect('/user/validate');
});

// Validation page
userRouter.get('/user/validate', async (req, res) => {
    if (!req.cookies.userKey || !req.cookies.csrf) {
        return res.send('Something went wrong while attempting your login. Please try again.');
    }
    const session = req.cookies.userKey;
    const csrf = req.cookies.csrf;
    res.clearCookie('userKey');
    res.clearCookie('csrf');
    res.render('validate', { session, csrf });
});

// Get user from key
userRouter.get('/api/user/:userKey', async (req, res) => {
    const db = await req.app.get('connection');
    const [rows] = await db.execute('SELECT * FROM users WHERE id = (SELECT user_id FROM sessions WHERE guid = ?)', [req.params.userKey]);
    if (rows.length === 0) {
        const response: ApiGetUserResponse = {
            status: 'error',
            message: 'The supplied key has expired'
        };
        return res.json(response);
    }
    const user = rows[0];
    console.log(user);
});