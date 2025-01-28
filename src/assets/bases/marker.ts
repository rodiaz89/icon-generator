export const marker = `
    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="53px" viewBox="0 0 48 53">
        <g>
            <circle cx="24" cy="23" fill="{{__mode__}}" r="16"/>
        </g>
        <rect fill="{{__backgroundColor__}}" height="26" rx="13" width="26" x="11" y="10"/>
        {{__slot__}}
    </svg>
`;