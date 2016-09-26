export function checkLv1DataStructure(aDataRow) {
		if (typeof aDataRow.gender === undefined ||
    		aDataRow.gender === null ||
        typeof aDataRow.gender !== 'string') {
            return false;
    }
    if (typeof aDataRow.pets === undefined ||
    		aDataRow.pets === null ||
        typeof aDataRow.pets !== 'object') {
        		return false;
    }

    return true;
}

export function checkLv2DataStructure(aDataRow) {
		if (typeof aDataRow.name === undefined ||
    		aDataRow.name === null ||
        typeof aDataRow.name !== 'string') {
            return false;
    }
    if (typeof aDataRow.type === undefined ||
    		aDataRow.type === null ||
        typeof aDataRow.type !== 'string') {
            return false;
    }
    return true;
}

export function itsACat(aDataRow) {
		if (aDataRow.type.toLowerCase().trim() === "cat") {
        return true;
    }

    return false;
}
