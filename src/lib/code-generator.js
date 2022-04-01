import 'openblock-blocks/arduino_compressed';
import 'openblock-blocks/python_compressed';

const getGeneratorNameFromDeviceType = deviceType => {
    if (deviceType === 'arduino') {
        return 'Arduino';
    } else if (deviceType === 'microbit') {
        return 'Python';
    }
    return 'null';
};

export {
    getGeneratorNameFromDeviceType
};
