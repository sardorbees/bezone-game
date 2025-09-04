import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/app.min.css'
import '../assets/css/style.css'
import Touner from '../touner/Touner';
import GameArea from '../game-area/GameArea'
import VideoArea from '../video-area/VideoArea';
import Match from '../match/Match';
import Company from '../company/Company';
function Main() {
    return (
        <div>
            <Touner />
            <GameArea />
            <VideoArea />
            <Match />
            <Company />
        </div>
    )
}
export default Main;