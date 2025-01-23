export const marker = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 53" width="45px" height="48px">
        <g>
            <circle cx="24" cy="23" fill="{{__mode__}}" r="16"/>
        </g>
        <rect fill="{{__backgroundColor__}}" height="26" rx="13" width="26" x="11" y="10"/>
        {{__slot__}}
    </svg>
`;