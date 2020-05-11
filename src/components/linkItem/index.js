import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Button, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { Snackbar } from '@material/react-snackbar'

import './index.scss'

const LinkItem = (props) => {
    const [open, setOpen] = useState(false);

    const goodLink = props.link.link.includes('https');

    const serviceIcons = {
        'Google Play Music': faGooglePlay,
        'Spotify': faSpotify,
        'Youtube Search': faYoutube
    };

    const copyLink = () => {
        const hiddenInput = document.getElementById(`${props.link.service}_input`);
        hiddenInput.select();
        document.execCommand("copy");
        setOpen(true)
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    return (
        <>
            { goodLink &&
                <>
                    <Row className="linkItem">
                        <FontAwesomeIcon icon={serviceIcons[props.link.service]} />
                        <a href={props.link.link} target="_blank" rel="noopener noreferrer" className="serviceLink">{props.link.service} Link</a>
                        <Button onClick={copyLink}>
                            <FontAwesomeIcon icon={faCopy} />
                        </Button>
                    </Row>
                    <Row className="copyRow">
                        <input id={props.link.service + '_input'} value={props.link.link} className="hiddenInput" readOnly/>
                    </Row>
                    <Snackbar open={open} timeoutMs={4000} onClose={handleClose} message="Link copied to clipboard!" className="copiedSnackbar" />
                </>
            }
            { !goodLink && 
                <Row className="linkItem">
                    <FontAwesomeIcon icon={serviceIcons[props.link.service]} />
                    <Label>{props.link.service} Link was not found</Label>
                    <Button disabled>
                        <FontAwesomeIcon icon={faCopy} />
                    </Button>
                </Row>
            }
        </>
    )
}

LinkItem.propTypes = {
    link: PropTypes.object.isRequired
};

export default LinkItem;