import React from 'react';
import {FormattedMessage} from 'react-intl';
import defaultsDeep from 'lodash.defaultsdeep';

import {DeviceType} from '../../../device';

import esp8266IconURL from './esp8266.png';
import esp8266ConnectionIconURL from './esp8266-illustration.svg';
import esp8266ConnectionSmallIconURL from './esp8266-small.svg';

import arduinoBaseToolBox from '../baseToolbox/arduino';
import microPythonBaseToolBox from '../baseToolbox/microPython';

const esp8266 = {
    name: 'ESP8266',
    deviceId: 'esp8266',
    manufactor: 'espressif',
    learnMore: 'https://www.espressif.com/',
    typeList: [DeviceType.arduino, DeviceType.microPython],
    iconURL: esp8266IconURL,
    description: (
        <FormattedMessage
            defaultMessage="Low-cost Wi-Fi SOC control board."
            description="Description for the esp8266 device"
            id="gui.device.arduinoEsp8266.description"
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
    connectionIconURL: esp8266ConnectionIconURL,
    connectionSmallIconURL: esp8266ConnectionSmallIconURL,
    connectingMessage: (
        <FormattedMessage
            defaultMessage="Connecting"
            description="Message to help people connect to their device."
            id="gui.device.connectingMessage"
        />
    ),
    programLanguage: ['block', 'c', 'cpp', 'microPython'],
    tags: ['arduino'],
    helpLink: 'https://arduino-esp8266.readthedocs.io/en/3.0.0/index.html'
};

const arduinoEsp8266 = defaultsDeep({
    deviceId: 'arduinoEsp8266',
    type: DeviceType.arduino,
    baseToolBoxXml: arduinoBaseToolBox,
    programMode: ['upload'],
    hide: true
}, esp8266);

const microPythonEsp8266 = defaultsDeep({
    deviceId: 'microPythonEsp8266',
    type: DeviceType.microPython,
    baseToolBoxXml: microPythonBaseToolBox,
    programMode: ['upload'],
    hide: true
}, esp8266);

export {
    esp8266,
    arduinoEsp8266,
    microPythonEsp8266
};
