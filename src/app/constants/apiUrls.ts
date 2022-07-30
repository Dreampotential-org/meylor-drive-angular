export const apiUrls = {
    // AUTH
    register: 'usersystem/user/register',
    login: 'usersystem/user/login',
    changePwd: 'usersystem/user/change-password',

    // USERS
    usersListing: 'usersystem/user-listing',
    deleteUser: 'usersystem/user-details/',
    updateUser: 'usersystem/user-details/',

    // PIPELINES
    pipelinesListing: 'api/pipeline/',
    createPipeline: 'api/pipeline/',
    updatePipeline: 'api/pipeline/',
    deletePipeline: 'api/pipeline/',
    
    // TASKS
    tasksLookup: 'tasks/',

    // SERVERS
    serversListing: 'server/',
    createServer: 'server/',
    updateServer: 'server/',
    deleteServer: 'server/',

    // KEY PAIR
    keyPairListing: 'api/key-pair/',
    createKeyPair: 'api/key-pair/',
    updateKeyPair: 'api/key-pair/',
    deleteKeyPair: 'api/key-pair/',
};
