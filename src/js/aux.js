export function checkLv1DataStructure(aDataRow) {
		if (typeof aDataRow.gender === undefined ||
    		aDataRow.gender === null ||
        typeof aDataRow.gender !== 'string' ||
			  aDataRow.gender === '') {
            return false;
    }
    if (typeof aDataRow.pets === undefined ||
    		aDataRow.pets === null ||
				!Array.isArray( aDataRow.pets ) ||
				aDataRow.pets.length == 0) {
        		return false;
    }

    return true;
}

export function checkLv2DataStructure(aDataRow) {
		if (typeof aDataRow.name === undefined ||
    		aDataRow.name === null ||
        typeof aDataRow.name !== 'string' ||
				aDataRow.name === '') {
            return false;
    }
    if (typeof aDataRow.type === undefined ||
    		aDataRow.type === null ||
        typeof aDataRow.type !== 'string' ||
				aDataRow.type === '') {
            return false;
    }
    return true;
}

export function itsACat(aDataRow) {
		if (typeof aDataRow.type === undefined ||
				aDataRow.type === null ||
				typeof aDataRow.type !== 'string' ||
				aDataRow.type === '') {
						return false;
		} else {
				if (aDataRow.type.toLowerCase().trim() === "cat") {
		        return true;
		    }
		}

    return false;
}
