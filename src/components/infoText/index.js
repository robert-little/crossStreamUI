import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, PopoverHeader, PopoverBody, UncontrolledPopover } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import './index.scss';

const InfoText = (props) => {
    return (
        <div className={`infoText ${props.className}`}>
            <Input placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="search" disabled={props.loading} id="infoInput" />
            <FontAwesomeIcon icon={faInfoCircle} className="infoIcon" id="info" />
            <UncontrolledPopover placement="bottom" trigger="focus" target="info" popperClassName="infoPopover">
                <PopoverHeader>What is CrossStream</PopoverHeader>
                <PopoverBody>
                    CrossStream is a service to allow users to convert song links from supported streaming services.
                    Only song links are supported, meaning album and playlist links will not work.
                    <br/>
                    <br/>
                    Supported services
                    <br/>
                    <ul>
                        <li>Google Play Music</li>
                        <Label className="exampleLink">ex: play.google.com/music/m/(song id)</Label>
                        <li>Spotify</li>
                        <Label className="exampleLink">ex: open.spotify.com/track/(song id)</Label>
                    </ul>
                </PopoverBody>
            </UncontrolledPopover>
        </div>
    );
}

InfoText.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    loading: PropTypes.bool,
    className: PropTypes.string
}

export default InfoText;
