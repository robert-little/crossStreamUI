import React from 'react';
import PropTypes from 'prop-types';

import './index.scss'

const SongInfo = (props) => {
    return (
        <div className="songInfo">
            <img src={props.info.albumArt} width="90" className="thumbnail" alt="album art"/>
            <h3>{props.info.name} by {props.info.artist}</h3>
        </div>
    );
}

SongInfo.propTypes = {
    info: PropTypes.object.isRequired
};

export default SongInfo;