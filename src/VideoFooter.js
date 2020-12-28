import React from 'react';
import './VideoFooter.css';
import { Avatar, Button } from '@material-ui/core'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import { Favorite,ModeComment,Send,MoreHoriz } from '@material-ui/icons';

function VideoFooter({channel,likes,shares,avatarSrc,song}) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <Avatar src={ avatarSrc } />
                <h3>
                    {channel} . <Button>Follow</Button>
                </h3>
            </div>
            <div className='videoFooter__ticker'>
                <MusicNoteIcon className='videoFooter__icon' 
                />
                <Ticker mode='smooth'>
                    {(index) => <>
                        <h1>{song}</h1>
                    </>}
                </Ticker>
            </div>
            <div className='videoFooter__actions'>
                <div className='videoFooter___actionsLeft'>
                    <Favorite fontSize='small'/>
                    <ModeComment fontSize='small'/>
                    <Send fontSize='small'/>
                    <MoreHoriz fontSize='small'/>
                </div>
                <div className='videoFooter__actionsRight'>
                    <div className='videoFooter__stat'>
                        <Favorite fontSize='small'/>
                        <p>{likes}</p>
                    </div>
                        <div className='videoFooter__stat'>
                            <ModeComment fontSize='small'/>
                            <p>{shares}</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
