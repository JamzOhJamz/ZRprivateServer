import { Router } from 'express';

export const rewardsRouter = Router();

rewardsRouter.get('/tracks', (req, res) => {
    res.json({
        "status": "success", "tracks": [{
            "id": 74,
            "name": "Free Pass",
            "max_level": 100,
            "max_tier": 100,
            "cost_coins": 0,
            "cost_gems": 0,
            "cost_gems_per_tier": 20,
            "is_stock": true,
            "is_repeatable": false,
            "created": {"date": "2022-11-11 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"},
            "expires": {"date": "2022-12-23 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"},
            "season": 37,
            "tiers": [{
                "id": 5366,
                "track_id": 74,
                "tier": 2,
                "rewards": [{"type": "item", "itemSku": "emote-happy-stuntman"}]
            }, {"id": 5367, "track_id": 74, "tier": 3, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5368,
                "track_id": 74,
                "tier": 5,
                "rewards": [{"type": "item", "itemSku": "outfit-pastry-chef"}]
            }, {
                "id": 5369,
                "track_id": 74,
                "tier": 6,
                "rewards": [{"type": "pack", "packSku": "basic-chest"}]
            }, {"id": 5370, "track_id": 74, "tier": 7, "rewards": [{"type": "gems", "quantity": 3}]}, {
                "id": 5371,
                "track_id": 74,
                "tier": 8,
                "rewards": [{"type": "item", "itemSku": "spray-police-hat-badge"}]
            }, {
                "id": 5372,
                "track_id": 74,
                "tier": 10,
                "rewards": [{"type": "item", "itemSku": "emote-health-delivery-box"}]
            }, {"id": 5373, "track_id": 74, "tier": 11, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5374,
                "track_id": 74,
                "tier": 13,
                "rewards": [{"type": "item", "itemSku": "melee-trash-collecting-hammer"}]
            }, {
                "id": 5375,
                "track_id": 74,
                "tier": 16,
                "rewards": [{"type": "item", "itemSku": "spray-z-r-professions-logo"}]
            }, {
                "id": 5376,
                "track_id": 74,
                "tier": 18,
                "rewards": [{"type": "item", "itemSku": "outfit-plumber-kitty"}]
            }, {
                "id": 5377,
                "track_id": 74,
                "tier": 20,
                "rewards": [{"type": "item", "itemSku": "parachute-trash-recycler-chute"}]
            }, {"id": 5378, "track_id": 74, "tier": 21, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5379,
                "track_id": 74,
                "tier": 22,
                "rewards": [{"type": "item", "itemSku": "spray-mouth-and-teeth"}]
            }, {
                "id": 5380,
                "track_id": 74,
                "tier": 23,
                "rewards": [{"type": "item", "itemSku": "outfit-sport-mascot"}]
            }, {
                "id": 5381,
                "track_id": 74,
                "tier": 25,
                "rewards": [{"type": "item", "itemSku": "emote-stuntman-thumbs-up"}]
            }, {"id": 5382, "track_id": 74, "tier": 26, "rewards": [{"type": "gems", "quantity": 3}]}, {
                "id": 5383,
                "track_id": 74,
                "tier": 27,
                "rewards": [{"type": "item", "itemSku": "spray-megaphone"}]
            }, {
                "id": 5384,
                "track_id": 74,
                "tier": 28,
                "rewards": [{"type": "item", "itemSku": "backpack-garbage-bag"}]
            }, {
                "id": 5385,
                "track_id": 74,
                "tier": 30,
                "rewards": [{"type": "item", "itemSku": "emote-zombs-sheriff-badge"}]
            }, {
                "id": 5386,
                "track_id": 74,
                "tier": 31,
                "rewards": [{"type": "item", "itemSku": "outfit-lumbearjack"}]
            }, {
                "id": 5387,
                "track_id": 74,
                "tier": 32,
                "rewards": [{"type": "pack", "packSku": "basic-chest"}]
            }, {
                "id": 5388,
                "track_id": 74,
                "tier": 34,
                "rewards": [{"type": "item", "itemSku": "emote-stuntman-thumbs-down"}]
            }, {"id": 5389, "track_id": 74, "tier": 36, "rewards": [{"type": "gems", "quantity": 3}]}, {
                "id": 5390,
                "track_id": 74,
                "tier": 38,
                "rewards": [{"type": "item", "itemSku": "outfit-stuntman"}]
            }, {"id": 5391, "track_id": 74, "tier": 40, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5392,
                "track_id": 74,
                "tier": 42,
                "rewards": [{"type": "item", "itemSku": "melee-stuntman-cannon-hammer"}]
            }, {
                "id": 5393,
                "track_id": 74,
                "tier": 44,
                "rewards": [{"type": "item", "itemSku": "emote-ammo-delivery-box"}]
            }, {
                "id": 5394,
                "track_id": 74,
                "tier": 45,
                "rewards": [{"type": "item", "itemSku": "outfit-trash-collector-raccoon"}]
            }, {
                "id": 5395,
                "track_id": 74,
                "tier": 46,
                "rewards": [{"type": "pack", "packSku": "basic-chest"}]
            }, {
                "id": 5396,
                "track_id": 74,
                "tier": 47,
                "rewards": [{"type": "item", "itemSku": "backpack-stuntman-cannon-pack"}]
            }, {"id": 5397, "track_id": 74, "tier": 48, "rewards": [{"type": "gems", "quantity": 6}]}, {
                "id": 5398,
                "track_id": 74,
                "tier": 49,
                "rewards": [{"type": "item", "itemSku": "spray-blacksmith-anvil"}]
            }, {
                "id": 5399,
                "track_id": 74,
                "tier": 50,
                "rewards": [{"type": "item", "itemSku": "parachute-stuntman-cannon"}]
            }],
            "challenges": [],
            "evolutions": []
        }, {
            "id": 75,
            "name": "Battle Pass",
            "max_level": 100,
            "max_tier": 100,
            "cost_coins": 0,
            "cost_gems": 180,
            "cost_gems_per_tier": 20,
            "is_stock": false,
            "is_repeatable": false,
            "created": {"date": "2022-11-11 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"},
            "expires": {"date": "2022-12-23 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"},
            "season": 37,
            "tiers": [{
                "id": 5400,
                "track_id": 75,
                "tier": 1,
                "rewards": [{"type": "item", "itemSku": "outfit-zombs-sheriff-enforcer-i"}, {
                    "type": "item",
                    "itemSku": "spray-red-airplane"
                }, {"type": "pack", "packSku": "basic-chest"}, {"type": "item", "itemSku": "experience-boost-10"}]
            }, {"id": 5401, "track_id": 75, "tier": 2, "rewards": [{"type": "gems", "quantity": 6}]}, {
                "id": 5402,
                "track_id": 75,
                "tier": 3,
                "rewards": [{"type": "item", "itemSku": "outfit-electrician"}]
            }, {
                "id": 5403,
                "track_id": 75,
                "tier": 4,
                "rewards": [{"type": "item", "itemSku": "emote-happy-florist"}]
            }, {
                "id": 5404,
                "track_id": 75,
                "tier": 5,
                "rewards": [{"type": "item", "itemSku": "experience-boost-10"}]
            }, {
                "id": 5405,
                "track_id": 75,
                "tier": 6,
                "rewards": [{"type": "item", "itemSku": "melee-spymaster-scythe"}]
            }, {"id": 5406, "track_id": 75, "tier": 7, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5407,
                "track_id": 75,
                "tier": 8,
                "rewards": [{"type": "item", "itemSku": "backpack-farm-hay"}]
            }, {
                "id": 5408,
                "track_id": 75,
                "tier": 9,
                "rewards": [{"type": "item", "itemSku": "spray-zombie-force"}]
            }, {
                "id": 5409,
                "track_id": 75,
                "tier": 10,
                "rewards": [{"type": "item", "itemSku": "parachute-electricity-chute"}]
            }, {
                "id": 5410,
                "track_id": 75,
                "tier": 11,
                "rewards": [{"type": "item", "itemSku": "spray-hacker-screen"}]
            }, {"id": 5411, "track_id": 75, "tier": 12, "rewards": [{"type": "gems", "quantity": 6}]}, {
                "id": 5412,
                "track_id": 75,
                "tier": 13,
                "rewards": [{"type": "item", "itemSku": "emote-clown"}]
            }, {
                "id": 5413,
                "track_id": 75,
                "tier": 14,
                "rewards": [{"type": "item", "itemSku": "melee-electric-mace"}]
            }, {
                "id": 5414,
                "track_id": 75,
                "tier": 15,
                "rewards": [{"type": "item", "itemSku": "outfit-beekeeper"}]
            }, {"id": 5415, "track_id": 75, "tier": 16, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5416,
                "track_id": 75,
                "tier": 17,
                "rewards": [{"type": "item", "itemSku": "emote-confused-welder"}]
            }, {
                "id": 5417,
                "track_id": 75,
                "tier": 18,
                "rewards": [{"type": "item", "itemSku": "spray-taxi-car"}]
            }, {
                "id": 5418,
                "track_id": 75,
                "tier": 19,
                "rewards": [{"type": "item", "itemSku": "experience-boost-10"}]
            }, {
                "id": 5419,
                "track_id": 75,
                "tier": 20,
                "rewards": [{"type": "item", "itemSku": "outfit-dog-walker"}]
            }, {"id": 5420, "track_id": 75, "tier": 21, "rewards": [{"type": "gems", "quantity": 6}]}, {
                "id": 5421,
                "track_id": 75,
                "tier": 22,
                "rewards": [{"type": "item", "itemSku": "emote-f-b-i-protection-squad"}]
            }, {
                "id": 5422,
                "track_id": 75,
                "tier": 23,
                "rewards": [{"type": "experience", "quantity": 1000}]
            }, {
                "id": 5423,
                "track_id": 75,
                "tier": 24,
                "rewards": [{"type": "item", "itemSku": "spray-trashy-trash"}]
            }, {
                "id": 5424,
                "track_id": 75,
                "tier": 25,
                "rewards": [{"type": "item", "itemSku": "outfit-party-entertainer"}]
            }, {
                "id": 5425,
                "track_id": 75,
                "tier": 26,
                "rewards": [{"type": "item", "itemSku": "parachute-honeycomb"}]
            }, {
                "id": 5426,
                "track_id": 75,
                "tier": 27,
                "rewards": [{"type": "item", "itemSku": "backpack-aviator-rockets"}]
            }, {
                "id": 5427,
                "track_id": 75,
                "tier": 28,
                "rewards": [{"type": "item", "itemSku": "spray-tool-box"}]
            }, {
                "id": 5428,
                "track_id": 75,
                "tier": 29,
                "rewards": [{"type": "item", "itemSku": "spray-fishermans-boat"}]
            }, {
                "id": 5429,
                "track_id": 75,
                "tier": 30,
                "rewards": [{"type": "item", "itemSku": "melee-fisherman-spike"}]
            }, {"id": 5430, "track_id": 75, "tier": 31, "rewards": [{"type": "gems", "quantity": 6}]}, {
                "id": 5431,
                "track_id": 75,
                "tier": 32,
                "rewards": [{"type": "item", "itemSku": "emote-g-g-delivery-box"}]
            }, {
                "id": 5432,
                "track_id": 75,
                "tier": 33,
                "rewards": [{"type": "item", "itemSku": "experience-boost-10"}]
            }, {
                "id": 5433,
                "track_id": 75,
                "tier": 34,
                "rewards": [{"type": "item", "itemSku": "parachute-firefighter"}]
            }, {
                "id": 5434,
                "track_id": 75,
                "tier": 35,
                "rewards": [{"type": "item", "itemSku": "spray-spy-locator"}]
            }, {"id": 5435, "track_id": 75, "tier": 36, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5436,
                "track_id": 75,
                "tier": 37,
                "rewards": [{"type": "pack", "packSku": "basic-chest"}]
            }, {
                "id": 5437,
                "track_id": 75,
                "tier": 38,
                "rewards": [{"type": "item", "itemSku": "emote-happy-dog-walker"}]
            }, {
                "id": 5438,
                "track_id": 75,
                "tier": 39,
                "rewards": [{"type": "item", "itemSku": "outfit-sheep-farmer"}]
            }, {
                "id": 5439,
                "track_id": 75,
                "tier": 40,
                "rewards": [{"type": "item", "itemSku": "experience-boost-10"}]
            }, {"id": 5440, "track_id": 75, "tier": 41, "rewards": [{"type": "gems", "quantity": 6}]}, {
                "id": 5441,
                "track_id": 75,
                "tier": 42,
                "rewards": [{"type": "item", "itemSku": "backpack-puppy-pack"}]
            }, {"id": 5442, "track_id": 75, "tier": 43, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5443,
                "track_id": 75,
                "tier": 44,
                "rewards": [{"type": "pack", "packSku": "basic-chest"}]
            }, {
                "id": 5444,
                "track_id": 75,
                "tier": 45,
                "rewards": [{"type": "item", "itemSku": "emote-zombs-kisses"}]
            }, {
                "id": 5445,
                "track_id": 75,
                "tier": 46,
                "rewards": [{"type": "item", "itemSku": "experience-boost-10"}]
            }, {
                "id": 5446,
                "track_id": 75,
                "tier": 47,
                "rewards": [{"type": "item", "itemSku": "melee-puppy-walker-mace"}]
            }, {
                "id": 5447,
                "track_id": 75,
                "tier": 48,
                "rewards": [{"type": "item", "itemSku": "spray-smiley-cannon"}]
            }, {
                "id": 5448,
                "track_id": 75,
                "tier": 49,
                "rewards": [{"type": "pack", "packSku": "basic-chest"}]
            }, {
                "id": 5449,
                "track_id": 75,
                "tier": 50,
                "rewards": [{"type": "item", "itemSku": "outfit-stuntman-cannon"}]
            }, {"id": 5450, "track_id": 75, "tier": 51, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5451,
                "track_id": 75,
                "tier": 52,
                "rewards": [{"type": "gems", "quantity": 6}]
            }, {
                "id": 5452,
                "track_id": 75,
                "tier": 53,
                "rewards": [{"type": "item", "itemSku": "emote-serious-esport-gamer"}]
            }, {
                "id": 5453,
                "track_id": 75,
                "tier": 54,
                "rewards": [{"type": "pack", "packSku": "basic-chest"}]
            }, {
                "id": 5454,
                "track_id": 75,
                "tier": 55,
                "rewards": [{"type": "item", "itemSku": "outfit-spy"}]
            }, {
                "id": 5455,
                "track_id": 75,
                "tier": 56,
                "rewards": [{"type": "experience", "quantity": 1000}]
            }, {
                "id": 5456,
                "track_id": 75,
                "tier": 57,
                "rewards": [{"type": "item", "itemSku": "emote-pigeon-z-delivery"}]
            }, {"id": 5457, "track_id": 75, "tier": 58, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5458,
                "track_id": 75,
                "tier": 59,
                "rewards": [{"type": "gems", "quantity": 6}]
            }, {
                "id": 5459,
                "track_id": 75,
                "tier": 60,
                "rewards": [{"type": "item", "itemSku": "backpack-miner-drill"}]
            }, {
                "id": 5460,
                "track_id": 75,
                "tier": 61,
                "rewards": [{"type": "item", "itemSku": "spray-chainsaw-ownd"}]
            }, {
                "id": 5461,
                "track_id": 75,
                "tier": 62,
                "rewards": [{"type": "item", "itemSku": "melee-drill-mace"}]
            }, {
                "id": 5462,
                "track_id": 75,
                "tier": 63,
                "rewards": [{"type": "item", "itemSku": "experience-boost-10"}]
            }, {"id": 5463, "track_id": 75, "tier": 64, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5464,
                "track_id": 75,
                "tier": 65,
                "rewards": [{"type": "item", "itemSku": "backpack-beekeeper-bees"}]
            }, {
                "id": 5465,
                "track_id": 75,
                "tier": 66,
                "rewards": [{"type": "item", "itemSku": "spray-e-sports-mousepad"}]
            }, {"id": 5466, "track_id": 75, "tier": 67, "rewards": [{"type": "gems", "quantity": 6}]}, {
                "id": 5467,
                "track_id": 75,
                "tier": 68,
                "rewards": [{"type": "experience", "quantity": 1000}]
            }, {
                "id": 5468,
                "track_id": 75,
                "tier": 69,
                "rewards": [{"type": "item", "itemSku": "emote-scientist-thinker"}]
            }, {
                "id": 5469,
                "track_id": 75,
                "tier": 70,
                "rewards": [{"type": "item", "itemSku": "outfit-hacker-1"}]
            }, {
                "id": 5470,
                "track_id": 75,
                "tier": 71,
                "rewards": [{"type": "item", "itemSku": "backpack-fishermans-pack"}]
            }, {
                "id": 5471,
                "track_id": 75,
                "tier": 72,
                "rewards": [{"type": "item", "itemSku": "spray-emergency-ambulance"}]
            }, {
                "id": 5472,
                "track_id": 75,
                "tier": 73,
                "rewards": [{"type": "item", "itemSku": "experience-boost-10"}]
            }, {
                "id": 5473,
                "track_id": 75,
                "tier": 74,
                "rewards": [{"type": "item", "itemSku": "melee-flower-balloon-mace"}]
            }, {"id": 5474, "track_id": 75, "tier": 75, "rewards": [{"type": "gems", "quantity": 6}]}, {
                "id": 5475,
                "track_id": 75,
                "tier": 76,
                "rewards": [{"type": "item", "itemSku": "emote-bored-construction-pup"}]
            }, {
                "id": 5476,
                "track_id": 75,
                "tier": 77,
                "rewards": [{"type": "item", "itemSku": "parachute-miners-drill"}]
            }, {
                "id": 5477,
                "track_id": 75,
                "tier": 78,
                "rewards": [{"type": "item", "itemSku": "emote-sparky-eyed-electrician"}]
            }, {
                "id": 5478,
                "track_id": 75,
                "tier": 79,
                "rewards": [{"type": "item", "itemSku": "spray-beekeeper-bees"}]
            }, {
                "id": 5479,
                "track_id": 75,
                "tier": 80,
                "rewards": [{"type": "item", "itemSku": "outfit-fisherman"}]
            }, {
                "id": 5480,
                "track_id": 75,
                "tier": 81,
                "rewards": [{"type": "experience", "quantity": 1000}]
            }, {"id": 5481, "track_id": 75, "tier": 82, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5482,
                "track_id": 75,
                "tier": 83,
                "rewards": [{"type": "item", "itemSku": "spray-electric-gotcha"}]
            }, {
                "id": 5483,
                "track_id": 75,
                "tier": 84,
                "rewards": [{"type": "item", "itemSku": "backpack-electric-sparks"}]
            }, {
                "id": 5484,
                "track_id": 75,
                "tier": 85,
                "rewards": [{"type": "item", "itemSku": "spray-i-t-chip"}]
            }, {
                "id": 5485,
                "track_id": 75,
                "tier": 86,
                "rewards": [{"type": "item", "itemSku": "experience-boost-10"}]
            }, {
                "id": 5486,
                "track_id": 75,
                "tier": 87,
                "rewards": [{"type": "item", "itemSku": "melee-honeycomb-club"}]
            }, {"id": 5487, "track_id": 75, "tier": 88, "rewards": [{"type": "coins", "quantity": 50}]}, {
                "id": 5488,
                "track_id": 75,
                "tier": 89,
                "rewards": [{"type": "gems", "quantity": 6}]
            }, {
                "id": 5489,
                "track_id": 75,
                "tier": 90,
                "rewards": [{"type": "item", "itemSku": "outfit-ambulance"}]
            }, {
                "id": 5490,
                "track_id": 75,
                "tier": 91,
                "rewards": [{"type": "item", "itemSku": "spray-honey-rekt"}]
            }, {
                "id": 5491,
                "track_id": 75,
                "tier": 92,
                "rewards": [{"type": "experience", "quantity": 1000}]
            }, {
                "id": 5492,
                "track_id": 75,
                "tier": 93,
                "rewards": [{"type": "item", "itemSku": "parachute-spy-glider"}]
            }, {
                "id": 5493,
                "track_id": 75,
                "tier": 94,
                "rewards": [{"type": "item", "itemSku": "emote-zombs-detective"}]
            }, {
                "id": 5494,
                "track_id": 75,
                "tier": 95,
                "rewards": [{"type": "item", "itemSku": "spray-balloon-dog"}]
            }, {
                "id": 5495,
                "track_id": 75,
                "tier": 96,
                "rewards": [{"type": "item", "itemSku": "backpack-balloon-wings"}]
            }, {
                "id": 5496,
                "track_id": 75,
                "tier": 97,
                "rewards": [{"type": "item", "itemSku": "spray-k-o-delivery"}]
            }, {"id": 5497, "track_id": 75, "tier": 98, "rewards": [{"type": "gems", "quantity": 15}]}, {
                "id": 5498,
                "track_id": 75,
                "tier": 99,
                "rewards": [{"type": "item", "itemSku": "outfit-underground-miner"}]
            }, {
                "id": 5499,
                "track_id": 75,
                "tier": 100,
                "rewards": [{"type": "item", "itemSku": "parachute-police-chaser-i"}]
            }],
            "challenges": [{
                "id": 1602,
                "track_id": 75,
                "name": "Find and open 100 Wooden Crates",
                "stat_key": "destroy_BronzeChest|RegularChest",
                "required": 100,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-11-11 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1603,
                "track_id": 75,
                "name": "Destroy 10 Piles of Logs",
                "stat_key": "destroy_CourtyardLogs|BeachLogs|BeachLogs2|VillageLogs|MysticLogs1|MysticLogs2",
                "required": 10,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-11-11 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1604,
                "track_id": 75,
                "name": "Eliminate 20 opponents Duo mode",
                "stat_key": "mode_kills_Duo",
                "required": 20,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-11-11 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1605,
                "track_id": 75,
                "name": "Open 6 Gold Chests in a single round",
                "stat_key": "destroy_single_6_GoldChest",
                "required": 1,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-11-11 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1606,
                "track_id": 75,
                "name": "Destroy 35 Blossom Trees in Blossom Burbs \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "destroy_TreeCourtyard_zone_Blossom Burbs",
                "required": 35,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-11-11 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1607,
                "track_id": 75,
                "name": "Open 12 Gold Chests in Radical Reef \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "chests_zone_Radical Reef",
                "required": 12,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-11-11 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1608,
                "track_id": 75,
                "name": "Destroy 6 Barrels in Wild West \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "destroy_CourtyardBarrel_zone_Wild West",
                "required": 6,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-11-11 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1609,
                "track_id": 75,
                "name": "Destroy 12 Couches in Drifter District",
                "stat_key": "destroy_ApocCouch1|ApocCouch2|ApocCouch3|ApocCouch4_zone_Drifter District",
                "required": 12,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-11-18 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1610,
                "track_id": 75,
                "name": "Eliminate 100 opponents in Duo mode",
                "stat_key": "mode_kills_Duo",
                "required": 100,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-11-18 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1611,
                "track_id": 75,
                "name": "Destroy 10 parts of a Train",
                "stat_key": "destroy_TrainFront|TrainWagon|TrainPropane|TrainCoal",
                "required": 10,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-11-18 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1612,
                "track_id": 75,
                "name": "Find and open 20 Ammo Crates",
                "stat_key": "destroy_ChestAmmo",
                "required": 20,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-11-18 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1613,
                "track_id": 75,
                "name": "Get 8 Pistol eliminations \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "kills_type_Pistol",
                "required": 8,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-11-18 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1614,
                "track_id": 75,
                "name": "Destroy 15 Shells in Radical Reef \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "destroy_NautShellBlue|NautShellGreen|NautShellPink|NautShellPurple|NautShellRed|NautShellYellow_zone_Radical Reef",
                "required": 15,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-11-18 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1615,
                "track_id": 75,
                "name": "Eliminate 14 opponents in Wild West \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "kills_zone_Wild West",
                "required": 14,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-11-18 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1616,
                "track_id": 75,
                "name": "Get 4 eliminations with Goo Gun",
                "stat_key": "kills_name_GooGunWeapon",
                "required": 4,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-11-25 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1617,
                "track_id": 75,
                "name": "Get 2 RPG eliminations",
                "stat_key": "kills_name_RPGWeapon",
                "required": 2,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-11-25 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1618,
                "track_id": 75,
                "name": "Deal 1000 damage with Snipers",
                "stat_key": "damage_type_Sniper",
                "required": 1000,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-11-25 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1619,
                "track_id": 75,
                "name": "Deal 1000 damage with ARs",
                "stat_key": "damage_type_AR",
                "required": 1000,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-11-25 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1620,
                "track_id": 75,
                "name": "Destroy 14 Troughs in Faraway Farm \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "destroy_FarmLongWater_zone_Faraway Farm",
                "required": 14,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-11-25 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1621,
                "track_id": 75,
                "name": "Destroy 10 Bonfires in Menacing Magma \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "destroy_LavaBonfire1|LavaBonfire2",
                "required": 10,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-11-25 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1622,
                "track_id": 75,
                "name": "Get 2 eliminations with RPGs \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "kills_name_RPGWeapon",
                "required": 2,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-11-25 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1623,
                "track_id": 75,
                "name": "Destroy 50 Couches",
                "stat_key": "destroy_BeachLongCouch|CourtyardCouch|HauntedCouch|SpaceCouch",
                "required": 50,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-12-02 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1624,
                "track_id": 75,
                "name": "Use Portals 12 times",
                "stat_key": "portals",
                "required": 12,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-12-02 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1625,
                "track_id": 75,
                "name": "Open 10 Gold Chests in Space Base II",
                "stat_key": "chests_zone_Space Base II",
                "required": 10,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-12-02 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1626,
                "track_id": 75,
                "name": "Open 10 Gold Chests in Faraway Farm",
                "stat_key": "chests_zone_Faraway Farm",
                "required": 10,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-12-02 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1627,
                "track_id": 75,
                "name": "Get 6 eliminations with Airdrop weapons \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "kills_special_airdrop",
                "required": 6,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-12-02 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1628,
                "track_id": 75,
                "name": "Destroy the Strange Artifact in Space Base II \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "destroy_AlienCenterMiddle",
                "required": 1,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-12-02 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1629,
                "track_id": 75,
                "name": "Get 6 Scoped M4 eliminations \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "kills_name_ScopedM4Weapon",
                "required": 6,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-12-02 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1630,
                "track_id": 75,
                "name": "Eliminate 30 opponents in Duo mode",
                "stat_key": "mode_kills_Duo",
                "required": 30,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-12-09 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1631,
                "track_id": 75,
                "name": "Deal 1000 damage to opponents",
                "stat_key": "damage",
                "required": 1000,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-12-09 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1632,
                "track_id": 75,
                "name": "Open 10 Space Crates in Space Base II",
                "stat_key": "destroy_AlienCrate1|AlienCrate2|AlienLongCrate",
                "required": 10,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-12-09 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1633,
                "track_id": 75,
                "name": "Open 25 Gold Chests",
                "stat_key": "chests",
                "required": 25,
                "reward": {"type": "star", "quantity": 5},
                "created": {"date": "2022-12-09 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1634,
                "track_id": 75,
                "name": "Deal 1400 damage with Snipers \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "damage_type_Sniper",
                "required": 1400,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-12-09 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1635,
                "track_id": 75,
                "name": "Get 8 AR eliminations \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "kills_type_AR",
                "required": 8,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-12-09 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }, {
                "id": 1636,
                "track_id": 75,
                "name": "Deal 500 damage with Flamethrowers \u003Ccolor=#CD4251\u003E(Hard)\u003C\/color\u003E",
                "stat_key": "damage_name_FlamethrowerWeapon",
                "required": 500,
                "reward": {"type": "star", "quantity": 10},
                "created": {"date": "2022-12-09 08:00:00.000000", "timezone_type": 3, "timezone": "UTC"}
            }],
            "evolutions": [{
                "id": 304,
                "track_id": 75,
                "required_item_sku": "outfit-zombs-sheriff-enforcer-i",
                "name": "Reach Season Level 20",
                "stat_key": "season_level",
                "required": 20,
                "reward": {"type": "item", "itemSku": "outfit-zombs-sheriff-enforcer-i-i"}
            }, {
                "id": 305,
                "track_id": 75,
                "required_item_sku": "outfit-zombs-sheriff-enforcer-i-i",
                "name": "Reach Season Level 35",
                "stat_key": "season_level",
                "required": 35,
                "reward": {"type": "item", "itemSku": "outfit-zombs-sheriff-enforcer-i-i-i"}
            }, {
                "id": 306,
                "track_id": 75,
                "required_item_sku": "outfit-zombs-sheriff-enforcer-i-i-i",
                "name": "Reach Season Level 55",
                "stat_key": "season_level",
                "required": 55,
                "reward": {"type": "item", "itemSku": "outfit-zombs-sheriff-enforcer-i-v"}
            }, {
                "id": 307,
                "track_id": 75,
                "required_item_sku": "outfit-zombs-sheriff-enforcer-i-v",
                "name": "Reach Season Level 75",
                "stat_key": "season_level",
                "required": 75,
                "reward": {"type": "item", "itemSku": "outfit-zombs-sheriff-enforcer-v"}
            }, {
                "id": 308,
                "track_id": 75,
                "required_item_sku": "parachute-police-chaser-i",
                "name": "Get 50 eliminations",
                "stat_key": "kills",
                "required": 50,
                "reward": {"type": "item", "itemSku": "parachute-police-chaser-i-i"}
            }, {
                "id": 309,
                "track_id": 75,
                "required_item_sku": "parachute-police-chaser-i-i",
                "name": "Get 100 eliminations",
                "stat_key": "kills",
                "required": 50,
                "reward": {"type": "item", "itemSku": "parachute-police-chaser-i-i-i"}
            }, {
                "id": 310,
                "track_id": 75,
                "required_item_sku": "parachute-police-chaser-i-i-i",
                "name": "Get 175 eliminations",
                "stat_key": "kills",
                "required": 75,
                "reward": {"type": "item", "itemSku": "parachute-police-chaser-i-v"}
            }, {
                "id": 311,
                "track_id": 75,
                "required_item_sku": "parachute-police-chaser-i-v",
                "name": "Get 300 eliminations",
                "stat_key": "kills",
                "required": 125,
                "reward": {"type": "item", "itemSku": "parachute-police-chaser-v"}
            }]
        }]
    });
});