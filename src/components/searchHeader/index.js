import React, { useEffect, useState } from 'react';
import { Button, Col, Label } from 'reactstrap';
import PropTypes from 'prop-types';

import InfoText from '../infoText/index';

import './index.scss';

const SearchHeader = (props) => {
    const [val, setVal] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(props.error);
    }, [props.error]);

    const handleTyping = (event) => {
        setVal(event.target.value);
    }

    const validateLink = () => {
        const googleSong = val.match(/^https:\/\/play\.google\.com\/music\/m\/.+$/);
        const spotifySong = val.match(/^https:\/\/open\.spotify\.com\/track\/.+$/);
        console.log(googleSong + '\n' + spotifySong);
        if (!googleSong && !spotifySong) {
            return false;
        }
        return true;
    }

    const handleSubmitLink = () => {
        setError(null);
        if (validateLink()) {
            props.onClick(val);
        } else {
            setError('The link you have supplied is invalid. Please enter a valid link.')
        }
    }

    const disableButton = props.loading || !(val.length > 0)

    return (
        <div className="searchHeader">
            <Col md={{size: 8, offset: 2}} xs={{size: 10, offset: 1}}>
                <h1 className="title">CrossStream</h1>
                <InfoText placeholder="Enter streaming song link..." value={val} onChange={handleTyping} disabled={props.loading} className="search"/>
                <Button onClick={handleSubmitLink} disabled={disableButton} className="submit">Cross the Streams</Button>
            </Col>
            { error && 
                <Col>
                    <Label className="searchError">{error}</Label>
                </Col>
            }
        </div>
    );

}

SearchHeader.propTypes = {
    onClick: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default SearchHeader;