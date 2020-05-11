import React, { useState } from 'react';
import { Button, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import InfoText from '../infoText/index';

import './index.scss';

const SearchHeader = (props) => {
    const [val, setVal] = useState('');

    const handleTyping = (event) => {
        setVal(event.target.value);
    }

    const handleSubmitLink = () => {
        props.onClick(val);
    }

    const disableButton = props.loading | !(val.length > 0)

    return (
        <div className="searchHeader">
            <Col md={{size: 8, offset: 2}} xs={{size: 10, offset: 1}}>
                <h1 className="title">CrossStream</h1>
                <InfoText placeholder="Enter streaming song link..." value={val} onChange={handleTyping} disabled={props.loading} className="search"/>
                <Button onClick={handleSubmitLink} disabled={disableButton} className="submit">Cross the Streams</Button>
            </Col>
        </div>
    );

}

SearchHeader.propTypes = {
    onClick: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default SearchHeader;