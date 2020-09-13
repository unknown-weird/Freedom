module.exports.send = function (id, msg, client) {
    client.channels.get(id).send(msg)
};