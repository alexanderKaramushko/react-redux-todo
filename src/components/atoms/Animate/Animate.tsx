import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { createGlobalStyle } from 'styled-components';
import { Props } from './types';

const GlobalAnimation = createGlobalStyle`
     .expandRight-enter {
        width: 0;
    }

    .expandRight-enter-active {
        width: 100%;
    }

    .expandRight-enter-done {
        width: 100%;
    }

    .expandRight-exit {
        width: 100%;
    }
    
    .expandRight-exit-active {
        width: 0;
    }

    .fade-enter {
        opacity: 1;
    }

    .fade-enter-active {
        opacity: 0.5;
    }

    .fade-enter-done {
        opacity: 0.5;
    }

    .fade-exit {
        opacity: 0.5;
    }
    
    .fade-exit-active {
        opacity: 1;
    }
`;

const Animation = styled(CSSTransition)<Props>`
    transition-duration: ${({ timeout }) => `${timeout / 1000}s`};
`;

export const Animate = (props: Props) => {
    const { 
        condition, 
        duration, 
        animName, 
        children,
        appear
    } = props;

    return (
        <>
            <GlobalAnimation />
            <Animation
                in={condition}
                timeout={duration}
                classNames={animName}
                appear={appear}
            >
                {children}
            </Animation>
        </>
    );
};