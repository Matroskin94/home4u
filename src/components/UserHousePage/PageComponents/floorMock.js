import { UNIT_TYPES } from '../../../constants/constants';

const floorMock = {
	floorNumber: 1,
	floorUnits: [
		{
			unitName: 'Температура в квартире',
			unitType: UNIT_TYPES.THERMOMETER,
			isFavorite: false,
			temperature: 22,
			humidity: 80
		}, {
			unitName: 'Освещение в прихожей',
			unitType: UNIT_TYPES.LIGHT_BULB,
			isFavorite: false,
			isOn: false
		}
	]
};

export default floorMock;
