"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https:'],
                    'img-src': ["'self'", 'data:', 'blob:', 'https:'],
                    'media-src': ["'self'", 'data:', 'blob:', 'https:'],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    {
        name: 'strapi::cors',
        config: {
            enabled: true,
            headers: '*',
            // Allow Angular portal in dev and production
            origin: [
                'http://localhost:4200',
                'http://localhost:4201',
                /^https?:\/\/.*\.estecharat\.com$/,
                /^https?:\/\/.*\.2mdopinion\.com$/,
                'https://estecharat.com',
                'https://2mdopinion.com',
            ],
        },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
exports.default = config;
