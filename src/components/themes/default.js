import { reversePalette } from 'styled-theme/composer';
// import { hex2rgba } from '../../utils/hex2rgba';

const theme = {};

theme.palette = {
    primary: [
        '#fff',
        '#af2f2f26',
        '#af2f2f33',
        '#5dc2af',
        '#4d4d4d',
        '#67c6b4',
        '#7bcdbe',
        '#000',
        '#cc9a9a'
    ],
    secondary: [
        '#eee9e6',
        '#333'
    ]
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
    primary: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

theme.sizes = {
    fontMedium: '14px',
    fontSizeBig: '24px',
    fontSizeExtra: '100px',
    radius: '3px',
    iconMedium: '10px'
};

export default theme;