import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';

import queryString from 'query-string';

import './index.scss'
import SearchHeader from '../searchHeader';
import ConversionPane from '../conversionPane';

const Layout = (props) => {
    // Setting up state
    const [conversionData, setConversionData] = useState({});
    const [loading, setLoading] = useState(false);


    // Setting class vars
    let deepLink = ''

    // empty array as second arg makes this only run on mount
    useEffect(() => {
        const queryParams = queryString.parse(window.location.search);
        if (queryParams.song) {
            deepLink = queryParams.song;
            submitLink(deepLink);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Either called by the effect above or when a user clicks 'cross the streams'
    const submitLink = (link) => {
        setLoading(true);

        const linkType = link.includes('google') ? 'Google Play Music' : 'Spotify';

        axios({
            method: 'get',
            url: 'https://crossstream.ca/song/'+link
        }).then((resp) => {
            console.log(resp);

            // updating the url if we get a success
            if (deepLink.length === 0) {
                console.log('replaced');
                window.history.replaceState(null, null, ('?song='+link));
            }

            // Need to put the link that was originally used into the array
            resp.data.links.unshift({service: linkType, link});
            setConversionData(resp.data);
            setLoading(false);
        }).catch((err) => {
            console.log('error', err);
            // setLinks(// Error message here);
            setLoading(false);
        })
    }
    
    return (
        <Container className="layout">
            <SearchHeader onClick={submitLink} loading={loading} />
            <ConversionPane conversionData={conversionData} loading={loading} />
        </Container>
    )
}

export default Layout;