import express from 'express';
import path from 'path';
import { EventEmitter } from 'events';
import mysql from 'mysql2/promise';
import { configRouter } from './routes/config';
import cookieParser = require("cookie-parser");
import { questsRouter } from "./routes/quests";
import { rewardsRouter } from "./routes/rewards";
import { shopRouter } from "./routes/shop";
import { userRouter } from "./routes/user";

export class ApiServer {
    public events = new EventEmitter();
    options: ApiServerOptions;
    private app: express.Application;
    private connection?: mysql.Connection;

    constructor(options: ApiServerOptions) {
        this.options = options;
        this.app = express();
        this.app.use(cookieParser());
        this.app.use(express.urlencoded({extended: false}));
        this.app.set('view engine', 'ejs');
        this.app.set('views', path.join(__dirname, '..', '..', 'views'));
        this.app.use(express.static(path.join(__dirname, '..', '..', 'public')));
        this.app.set('server', this);
        this.addRoutes();
    }

    public start(port: number = 3000) {
        void this.connectToDatabase();
        this.app.listen(port, () => {
            this.events.emit('started');
        });
    }

    private async connectToDatabase() {
        this.connection = await mysql.createConnection({
            user: this.options.database.user,
            password: this.options.database.password,
            host: this.options.database.url,
            port: this.options.database.port,
            database: "zombsroyale"
        });
        this.app.set('connection', this.connection);
    }

    private addRoutes() {
        this.app.use('/api/config', configRouter);
        this.app.use('/api/quest', questsRouter);
        this.app.use('/api/reward', rewardsRouter);
        this.app.use('/api/shop', shopRouter);
        this.app.use('/', userRouter);
    }
}

interface ApiServerOptions {
    name?: string;
    database: ApiServerDatabaseOptions;
}

interface ApiServerDatabaseOptions {
    url: string;
    port: number;
    user: string;
    password: string;
}