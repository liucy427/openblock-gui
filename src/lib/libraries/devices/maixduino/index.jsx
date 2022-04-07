import React from 'react';
import {FormattedMessage} from 'react-intl';
import defaultsDeep from 'lodash.defaultsdeep';

import {DeviceType} from '../../../device';

import maixduinoIconURL from './maixduino.png';
import maixduinoConnectionIconURLL from './maixduino-illustration.svg';
import maixduinoConnectionSmallIconURL from './maixduino-small.svg';

import arduinoBaseToolBox from '../baseToolbox/arduino';
import microPythonBaseToolBox from '../baseToolbox/microPython';

const maixduino = {
    name: 'Maixduino',
    deviceId: 'maixduino',
    manufactor: 'sipeed',
    leanMore: 'https://maixduino.sipeed.com/',
    typeList: [DeviceType.arduino, DeviceType.microPython],
    iconURL: maixduinoIconURL,
    description: (
        <FormattedMessage
            defaultMessage="The K210 RISC-V board with ESP32 inside"
            description="Description for the maixduino device"
            id="gui.device.maixduino.description"
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
    connectionIconURL: maixduinoConnectionIconURLL,
    connectionSmallIconURL: maixduinoConnectionSmallIconURL,
    connectingMessage: (
        <FormattedMessage
            defaultMessage="Connecting"
            description="Message to help people connect to their device."
            id="gui.device.connectingMessage"
        />
    ),
    programLanguage: ['block', 'c', 'cpp', 'microPython'],
    tags: ['microPython'],
    helpLink: 'https://wiki.sipeed.com/soft/maixpy/en/develop_kit_board/maix_duino.html'
};

const arduinoMaixduino = defaultsDeep({
    deviceId: 'arduinoMaixduino',
    type: DeviceType.arduino,
    baseToolBoxXml: arduinoBaseToolBox,
    programMode: ['upload'],
    hide: true
}, maixduino);

const microPythonMaixduino = defaultsDeep({
    deviceId: 'microPythonMaixduino',
    type: DeviceType.microPython,
    baseToolBoxXml: microPythonBaseToolBox,
    programMode: ['upload'],
    hide: true
}, maixduino);

export {
    maixduino,
    arduinoMaixduino,
    microPythonMaixduino
};
