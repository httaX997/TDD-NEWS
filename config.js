const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=yItWxIjL#8Q1pXYdHElSAMNKyYK8rzi1sDqhSoio0yBi8kcL9nfo' : process.env.SESSION_ID,
    OWNER_NUMBER: '94779510013',
   // Put news sender jid below you need to send news
    hiru: '120363354095447928@g.us',
    lankadeepa: '120363354095447928@g.us',
    itn: '120363354095447928@g.us',
    bbc: '120363354095447928@g.us',
    gossiplankanews: '120363354095447928@g.us',
    dasathalankanews: '120363354095447928@g.us',
    siyatha: '120363354095447928@g.us',
    derana: '120363354095447928@g.us'
};

