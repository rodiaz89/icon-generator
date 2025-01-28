export const marker = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
        <g>
            <circle cx="16" cy="16" fill="{{__mode__}}" r="16"/>
        </g>
        <rect fill="{{__backgroundColor__}}" height="26" rx="13" width="26" x="3" y="3"/>
        {{__slot__}}
    </svg>
`;