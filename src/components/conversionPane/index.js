import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

import SongInfo from '../songInfo/index';
import LinkList from '../linkList/index';

const ConversionPane = (props) => {
    console.log(props.conversionData);

    return (
        <Col md={{size: 8, offset: 2}} xs="12">
            { !props.loading && props.conversionData.songInfo && props.conversionData.links && 
                <div>
                    <SongInfo info={props.conversionData.songInfo} />
                    <LinkList links={props.conversionData.links}/>
                </div>
            }
            { props.loading && 
                <Loader type="Audio" color="#29c2c4" height={60} width={60} />
            }
        </Col>
    );

}

ConversionPane.propTypes = {
    conversionData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

export default ConversionPane;