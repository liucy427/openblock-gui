import React from 'react';
import {FormattedMessage} from 'react-intl';
import defaultsDeep from 'lodash.defaultsdeep';

import {DeviceType} from '../../../device';

import esp32IconURL from './esp32.png';
import esp32ConnectionIconURLL from './esp32-illustration.svg';
import esp32ConnectionSmallIconURL from './esp32-small.svg';

import arduinoBaseToolBox from '../baseToolbox/arduino';
import microPythonBaseToolBox from '../baseToolbox/microPython';

const esp32 = {
    name: 'ESP32',
    deviceId: 'esp32',
    manufactor: 'espressif',
    learnMore: 'https://www.espressif.com/',
    typeList: [DeviceType.arduino, DeviceType.microPython],
    iconURL: esp32IconURL,
    description: (
        <FormattedMessage
            defaultMessage="Wi-Fi & Bluetooth control board with rich functions."
            description="Description for the esp32 device"
            id="gui.device.arduinoEsp32.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '115200',
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: esp32ConnectionIconURLL,
    connectionSmallIconURL: esp32ConnectionSmallIconURL,
    connectingMessage: (
        <FormattedMessage
            defaultMessage="Connecting"
            description="Message to help people connect to their device."
            id="gui.device.connectingMessage"
        />
    ),
    programLanguage: ['block', 'c', 'cpp', 'microPython'],
    tags: ['arduino', 'microPython'],
    helpLink: 'https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32/hw-reference/esp32/get-started-devkitc.html'
};

const arduinoEsp32 = defaultsDeep({
    deviceId: 'arduinoEsp32',
    type: DeviceType.arduino,
    baseToolBoxXml: arduinoBaseToolBox,
    programMode: ['upload'],
    hide: true
}, esp32);

const microPythonEsp32 = defaultsDeep({
    deviceId: 'microPythonEsp32',
    type: DeviceType.microPython,
    baseToolBoxXml: microPythonBaseToolBox,
    programMode: ['upload'],
    hide: true
}, esp32);

export {
    esp32,
    arduinoEsp32,
    microPythonEsp32
};
