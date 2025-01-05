const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: "VAJIRA-MD=7c9BnLzL#TKA0leroxWNZ1yihpRFmAUv7LXqWKIpy-2LSnpvjwM0",
    OWNER_NUMBER: '94711453361',
   // Put news sender jid below you need to send news
    hiru: '120363190669566051@g.us',
    lankadeepa: '120363190669566051@g.us',
    itn: '120363190669566051@g.us',
    bbc: '120363190669566051@g.us',
    gossiplankanews: '120363190669566051@g.us',
    dasathalankanews: '120363190669566051@g.us',
    siyatha: '120363190669566051@g.us',
    derana: '120363190669566051@g.us'
};

