export const pin = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="37.1px" viewBox="0 0 32 37.1">
        
        <mask fill="rgb(255, 255, 255)" id="pin-mask">
            <path d="M16,0 C24.836556,0 32,7.20655761 32,16.0962969 C32,22.9166365 27.783464,28.7462241 21.8298087,31.0907205 L21.8427862,31.1024397 L15.9773623,36.9230769 L10.1044218,31.0949805 L10.126358,31.0733839 C4.19585062,28.7175843 0,22.8998864 0,16.0962969 C0,7.20655761 7.163444,0 16,0 Z"/>
        </mask>
        <g fill="{{__mode__}}" mask="url(#pin-mask)">
            <rect height="37.1" width="32"/>
        </g>
        <ellipse cx="16" cy="16.1" fill="{{__backgroundColor__}}" rx="13.2" ry="13.3"/>
        
        {{__slot__}}
    </svg>
`;