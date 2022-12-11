import { Router } from 'express';
import { ApiConfigAnnouncementType, ApiGetConfigResponse } from '../models';

export const configRouter = Router();

configRouter.get('/', async (req, res) => {
    const db = await req.app.get('connection');
    const sql = `SELECT \`key\`, value FROM globals WHERE \`key\` IN ('show_announcement', 'announcement_title', 'announcement_type', 'announcement_message', 'maintenance')`;
    const [rows] = await db.execute(sql);
    const globals = rows.reduce((acc: any, item: any) => {
        acc[item.key] = item.value;
        return acc;
    }, {});
    const response: ApiGetConfigResponse = {
        status: 'success',
        config: {
            version: 'cab92086d1439ecadb09bfc6b5ad83bd0b14f689',
            maintenance: globals.maintenance === '1',
            environment: 'prod',
            endpoint: 'zombsroyaler',
            regions: ['linode-singapore', 'linode-frankfurt', 'vultr-miami', 'vultr-la']
        },
        extras: {
            season_preview: {
                season: 37,
                current_day: 0,
                timer_ends: '1970-01-01 00:00:00'
            }
        }
    }
    if (globals.show_announcement === '1') {
        response.extras.announcement = {
            title: globals.announcement_title,
            type: globals.announcement_type as ApiConfigAnnouncementType,
            message: globals.announcement_message
        }
    }
    res.json(response);
});