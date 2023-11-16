import React from 'react';
import {
    AboutContents,
    AboutInner,
    AboutItem,
    AboutOuter,
    AboutTitle,
} from '../Home/About/About';
import { HiExternalLink } from 'react-icons/hi';
import { useRecoilValue } from 'recoil';
import { aboutState } from '../../atom';

export default function AboutInterview() {
    const aboutItem = useRecoilValue(aboutState);

    return (
        <AboutOuter>
            <AboutInner>
                <AboutTitle>Recent Interviews</AboutTitle>
                <AboutContents>
                    {aboutItem.slice(0, 3).map((item) => {
                        return (
                            <AboutItem>
                                <a href={item.url}>
                                    <p>
                                        {item.title}
                                        <HiExternalLink />
                                    </p>
                                    <h3>{item.content}</h3>
                                </a>
                            </AboutItem>
                        );
                    })}
                </AboutContents>
            </AboutInner>
        </AboutOuter>
    );
}
