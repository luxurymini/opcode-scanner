module.exports = pak => {
	let S_LOGIN = pak.prev('S_LOGIN');
	let hex = pak.data.toString('hex');

	return (
		pak.parse() &&
		pak.ownerId === S_LOGIN.parsed.cid &&
		hex.length === 150 &&
		/1$/gi.test(hex)
	);
};

/**
 * C_USE_ITEM
	uint64  ownerId === S_LOGIN.cid
	uint32  item
	uint32  id
	uint32  unk1
	uint32  unk2
	uint32  unk3
	uint32  unk4  # 1?
	uint32  unk5
	uint32  unk6
	uint32  unk7

	float   x
	float   y
	float   z
	int32   w

	uint32  unk8
	uint32  unk9
	uint16  unk10
	byte    unk11  # 1?

	4b00b6a3 e5270100 00800000 72000000 000000000000000000000000000000000100000000000000000000000000000000e41cc600b02c464f0685453a0b00000000000000000000000001
	4b00b6a3e52701000080000027110300000000000000000000000000000000000100000000000000000000000000000000e41cc600b02c464f0685453a0b00000000000000000000000001
 */