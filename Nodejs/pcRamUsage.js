const os = require('os');

setInterval(() => {
const { platform, arch, totalmem, freemem } = os;
const tRam = totalmem() / 1024 / 1024;
const fRam = freemem() / 1024 / 1024;
const usage = (fRam / tRam) * 100;

exports.stats = {
	OS: platform(),
	Arch: arch(),
	totalRAM: parseInt(tRam),
	FreeRAM: parseInt(fRam),
	Usage: `${usage.toFixed(2)}%`
}}, 1000)
