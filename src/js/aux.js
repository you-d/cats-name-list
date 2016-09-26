function genericCondition(target) {
		return (typeof target === undefined || target === null);
}

function checkStringTypeData(target) {
		return (typeof target !== 'string' || target === '');
}

function checkArrayTypeData(target) {
		return (!Array.isArray( target ) || target.length == 0);
}

export function checkLv1DataStructure(aDataRow) {
		if (genericCondition(aDataRow.gender) || checkStringTypeData(aDataRow.gender)) {
            return false;
    }
    if (genericCondition(aDataRow.pets) || checkArrayTypeData(aDataRow.pets)) {
        		return false;
    }

    return true;
}

export function checkLv2DataStructure(aDataRow) {
		if (genericCondition(aDataRow.name) || checkStringTypeData(aDataRow.name)) {
            return false;
    }
    if (genericCondition(aDataRow.type) || checkStringTypeData(aDataRow.type)) {
            return false;
    }
    return true;
}

export function itsACat(aDataRow) {
		if (genericCondition(aDataRow.type) || checkStringTypeData(aDataRow.type)) {
						return false;
		} else {
				if (aDataRow.type.toLowerCase().trim() === "cat") {
		        return true;
		    }
		}

    return false;
}
