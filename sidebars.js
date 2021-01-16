module.exports = {
    someSidebar: {
        'Getting Started': ['getting-started/introduction', 'getting-started/installation'],
        Configuration: ['annotations/index'],
        Security: [
            'security/index',
            'security/cors',
            'security/object-access-control',
            'security/fields-access-control',
            'security/fields-public-control',
            'security/query-complexity',
            'security/disable-introspection',
            'security/limit-query-depth',
        ],
        ['Fetching Data']: ['data-fetching/promise', 'data-fetching/query-batching'],
        Relay: ['relay/relay-helper'],
        Profiler: ['profiler/profiler'],
        Events: ['events/events'],
        Validation: ['validation/validation'],
        'Errors handling': ['errors-handling/errors-handling'],
    },
};
