import nameToCode from './NameRef.json';
import codeToCoords from './CoordRef.json';

module.exports = nameToCoords;

const nameToCoords = {
    convert: function (name) {
        codeToCoords[nameToCode[name]];
    }
}