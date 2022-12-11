import { Router } from 'express';

export const questsRouter = Router();

questsRouter.get('/available', async (req, res) => {
    res.json({
        "status": "success",
        "quests": [{
            "id": 5134,
            "name": "Play 2 Squad rounds",
            "stat_key": "mode_games_Squad",
            "required": 2,
            "reward": {"type": "star", "quantity": 5},
            "created": {"date": "2022-12-11 00:00:01.000000", "timezone_type": 3, "timezone": "UTC"},
            "ends": {"date": "2022-12-12 00:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
        }, {
            "id": 5135,
            "name": "Outlive 191 opponents",
            "stat_key": "survive",
            "required": 191,
            "reward": {"type": "star", "quantity": 5},
            "created": {"date": "2022-12-11 00:00:01.000000", "timezone_type": 3, "timezone": "UTC"},
            "ends": {"date": "2022-12-12 00:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
        }, {
            "id": 5136,
            "name": "Win one round \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
            "stat_key": "wins",
            "required": 1,
            "reward": {"type": "star", "quantity": 10},
            "created": {"date": "2022-12-11 00:00:01.000000", "timezone_type": 3, "timezone": "UTC"},
            "ends": {"date": "2022-12-12 00:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
        }]
    });
});