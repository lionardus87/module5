function logMsg(id, message) {
	const time = new Date().toLocaleString();
	console.log(`${time} [Caller ID: ${id}] ${message}`);
}
module.exports = { logMsg };
