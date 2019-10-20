import { TRANSFORM } from '../../actions/action.types.js';

export const  = ({ dispatch, getState }) => next => action => {
	if (action.type.includes(TRANSFORM)) {
		debugger;
		switch (action.type) {
			case ``: {
				break;
			}
		}
	}
	next(action);
};

const mappings = {
	name: 'Naam / Omschrijving', // -> "D D F VAN EDE"
	iban: 'Rekening', // ->  "NL46INGB0701357983"
	date: 'Datum', // ->  "20190102"
	credited: 'Af Bij', // -> "Bij"
	amount: ' Bedrag (EUR)', // -> "720,64"
	memo: 'Mededelingen' // ->  "Naam: D D F VAN EDE Omschrijving: Huur jan/feb IBAN: NL15ABNA0490096379 Valutadatum: 02-01-2019"
};

const renameObjKeys = arrOfObjects => {
	return arrOfObjects.map(obj => {
		let creditedBool = obj['Af Bij'] === 'Bij' ? true : false;
		let transformedItem = {
			['name']: obj['Naam / Omschrijving'],
			['iban']: obj['Rekening'],
			['date']: obj['Datum'],
			['credited']: obj['Af Bij'],
			['amount']: obj['Bedrag (EUR)'],
			['meno']: obj['Mededelingen']
		};
		transformedItem.credited = creditedBool;
		return transformedItem;
	});
};
