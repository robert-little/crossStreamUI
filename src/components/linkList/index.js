import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

import LinkItem from '../linkItem/index';

// import './index.scss'

const LinkList = (props) => {
    const linkItems = [];
    if (props.links.length > 0) {
        props.links.forEach((serviceLink) => {
            linkItems.push(
                <LinkItem link={serviceLink} key={serviceLink.service} />
            )
        })
    }

    return (
        <Col xl={{size: 8, offset: 2}} md={{size: 10, offset: 1}} xs="12">
            {linkItems}
        </Col>
    )
}

LinkList.propTypes = {
    links: PropTypes.array.isRequired
};

export default LinkList;