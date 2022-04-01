import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../containers/modal.jsx';
import Box from '../box/box.jsx';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';

import {DeviceType} from '../../lib/device';

import arduinoIcon from './icon--arduino.svg';
import pythonIcon from './icon--python.svg';
import micropythonIcon from './icon--micropython.svg';

import styles from './device-type-modal.css';

const messages = defineMessages({
    deviceTypeTitle: {
        defaultMessage: 'Choose a Programming Language',
        description: 'Title for the modal where you choose a programming language.',
        id: 'gui.deviceTypeModal.deviceTypeTitle'
    }
});

const DeviceTypeModalComponent = props => (
    <Modal
        className={styles.modalContent}
        contentLabel={props.intl.formatMessage(messages.deviceTypeTitle)}
        onRequestClose={props.onCancel}
    >
        <Box className={styles.body}>
            <div className={styles.optionsRow}>
                {props.deviceTypeList.includes(DeviceType.arduino) ? (
                    <div
                        id={DeviceType.arduino}
                        className={styles.optionCard}
                        role="button"
                        tabIndex="0"
                        onClick={props.onItemSelected}
                    >
                        <img
                            className={styles.optionIcon}
                            src={arduinoIcon}
                        />
                        <div className={styles.optionTitle}>
                            <FormattedMessage
                                defaultMessage="Arduino"
                                description="Label for button of arduino programming language"
                                id="gui.deviceTypeModal.arduino"
                            />
                        </div>
                    </div>
                ) : null}
                {props.deviceTypeList.includes(DeviceType.python) ? (
                    <div
                        id={DeviceType.python}
                        className={styles.optionCard}
                        role="button"
                        tabIndex="1"
                        onClick={props.onItemSelected}
                    >
                        <img
                            className={styles.optionIcon}
                            src={pythonIcon}
                        />
                        <div className={styles.optionTitle}>
                            <FormattedMessage
                                defaultMessage="Python"
                                description="Label for button of python programming language"
                                id="gui.deviceTypeModal.python"
                            />
                        </div>
                    </div>
                ) : null}
                {props.deviceTypeList.includes(DeviceType.microPython) ? (
                    <div
                        id={DeviceType.microPython}
                        className={styles.optionCard}
                        role="button"
                        tabIndex="2"
                        onClick={props.onItemSelected}
                    >
                        <img
                            className={styles.optionIcon}
                            src={micropythonIcon}
                        />
                        <div className={styles.optionTitle}>
                            <FormattedMessage
                                defaultMessage="MicroPython"
                                description="Label for button of micro python programming language"
                                id="gui.deviceTypeModal.microPython"
                            />
                        </div>
                    </div>
                ) : null}
            </div>
            <Box className={styles.buttonRow}>
                <button
                    className={styles.cancelButton}
                    onClick={props.onCancel}
                >
                    <FormattedMessage
                        defaultMessage="Cancel"
                        description="Label for button to cancel chooseing a programming language"
                        id="gui.deviceTypeModal.cancel"
                    />
                </button>
            </Box>
        </Box>
    </Modal>
);

DeviceTypeModalComponent.propTypes = {
    deviceTypeList: PropTypes.arrayOf(PropTypes.string),
    onItemSelected: PropTypes.func.isRequired,
    intl: intlShape,
    onCancel: PropTypes.func.isRequired
};

export default injectIntl(DeviceTypeModalComponent);
