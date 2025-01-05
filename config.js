const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=KV1yhTpJ#dL03I-uTioTUW26br3Qu8oAkJoyZzD6wS6Y8EjXB560' : process.env.SESSION_ID,
    OWNER_NUMBER: '94711453361',
   // Put news sender jid below you need to send news
    hiru: '120363383902323952@g.us',
    lankadeepa: '120363383902323952@g.us',
    itn: '120363383902323952@g.us',
    bbc: '120363383902323952@g.us',
    gossiplankanews: '120363383902323952@g.us',
    dasathalankanews: '120363383902323952@g.us',
    siyatha: '120363383902323952@g.us',
    derana: '120363383902323952@g.us'
};

