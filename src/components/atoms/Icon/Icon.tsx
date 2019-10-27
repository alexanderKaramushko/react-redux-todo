import { palette, size } from 'styled-theme';
import styled, { css } from 'styled-components';
import { IconProps } from './types';

const Icon = styled.div<IconProps>`
    width: ${({ width }) => `${width}px` || size('iconMedium')};
    height: ${({ height }) => `${height}px` || size('iconMedium')};

    & > svg {
        width: 100%;
        height: 100%;
        fill: ${({ secondary }) => 
            (secondary && palette('primary', 8))
            || palette('primary', 4)
        };
    }

    ${({ rounded }) => 
        rounded && css`
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid ${palette('primary', 4)};

            & > svg {
                width: 60%;
                height: 60%;
            }
        `
    }

    ${({ active }) => 
        active && css`
            border-color: ${palette('primary', 6)};

            & > svg {
                fill: ${palette('primary', 6)};
            }
        `
    }
`;

export default Icon;