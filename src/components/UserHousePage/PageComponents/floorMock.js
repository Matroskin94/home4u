import { UNIT_TYPES } from '../../../constants/constants';

const floorMock = {
    floorNumber: 1,
    floorUnits: [
        {
            unitName: 'Температура в квартире',
            unitType: UNIT_TYPES.THERMOMETER,
            isFavorite: false,
            temperature: {
                value: 22,
                average: 21,
                units: '\u00B0С'
            },
            humidity: {
                value: 78,
                average: 75,
                units: '%'
            },
            pressure: {
                value: 768,
                average: 760,
                units: 'мм. рт. ст'
            }
        }, {
            unitName: 'Освещение в прихожей',
            unitType: UNIT_TYPES.LIGHT_BULB,
            isFavorite: false,
            isOn: true
        }, {
            unitName: 'Камера подъезда',
            unitType: UNIT_TYPES.CAMERA,
            isFavorite: false,
            isOn: false
        }
    ]
};

export default floorMock;
