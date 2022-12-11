
export interface ApiResponse {
    status: string;
    message?: string;
}
export interface ApiGetConfigResponse extends ApiResponse {
    config?: ApiConfig;
    extras: ApiConfigExtras;
}

export interface ApiConfig {
    version: string;
    maintenance?: boolean;
    update_required?: boolean;
    disable_udp?: boolean;
    environment: string;
    endpoint: string;
    regions: string[];
}

export interface ApiConfigExtras {
    announcement?: ApiConfigAnnouncement;
    season_preview?: ApiConfigSeasonPreview;
}

export interface ApiConfigAnnouncement {
    title: string;
    type: ApiConfigAnnouncementType;
    message: string;
}

export interface ApiConfigSeasonPreview {
    season: number;
    current_day: number;
    timer_ends: string;
}

export enum ApiConfigAnnouncementType {
    Info = 'info',
    Warning = 'warning',
    Danger = 'danger'
}

export interface ApiGetUserResponse extends ApiResponse {
    user?: ApiUser;
    rewards?: ApiUserReward[];
}

export interface ApiUser {
    avatar: string;
    clans: ApiUserClan[];
    coins: number;
    email: string;
    encryptedKey: string;
    experience: number;
    friend_code: string;
    gems: number;
    iaps: ApiUserIapTransaction[];
    id: number;
    identifier: string;
    key: string;
    level: number;
    licenses: ApiUserLicense[];
    name: string;
    nextLevelRewards: ApiUserReward[];
    packs: ApiUserPack[];
    progression: ApiUserProgression;
    provider: string;
    status: string;
    subscription: ApiUserSubscription[];
}

export interface ApiUserReward {
    duplicateItemId: number;
    itemId: number;
    itemSku: string;
    packId: number;
    packSku: string;
    quantity: number;
    type: string;
}

export interface ApiUserClan {
    clan_id: number;
    id: number;
}

export interface ApiUserIapTransaction {
    cost_dollars: number;
    iap_id: number;
    id: number;
    user_id: number;
}

export interface ApiUserLicense {
    id: number;
    item_id: number;
    quantity: number;
    user_id: number;
}

export interface ApiUserPack {
    id: number;
    pack_id: number;
    quantity: number;
    user_id: number;
}

export interface ApiUserProgression {
    currentExperience: number;
    requiredExperience: number;
    rewards: ApiUserUpcomingReward[];
}

export interface ApiUserUpcomingReward {
    level: number;
}

export interface ApiUserSubscription {
    iap_id: number;
    id: number;
    user_id: number;
}