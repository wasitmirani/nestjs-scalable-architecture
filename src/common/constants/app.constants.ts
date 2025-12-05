export const APP_CONSTANTS = {
    API_VERSION: 'v1',
    API_PREFIX: 'api',
    DEFAULT_PAGE_SIZE: 10,
    MAX_PAGE_SIZE: 100,
    DEFAULT_TIMEOUT_MS: 30000,
};

export const TODO_CONSTANTS = {
    MIN_TITLE_LENGTH: 1,
    MAX_TITLE_LENGTH: 255,
    MIN_DESCRIPTION_LENGTH: 0,
    MAX_DESCRIPTION_LENGTH: 2000,
};

export const ERROR_MESSAGES = {
    INVALID_INPUT: 'Invalid input provided',
    TODO_NOT_FOUND: 'Todo not found',
    INTERNAL_SERVER_ERROR: 'Internal server error',
};

export const SUCCESS_MESSAGES = {
    TODO_CREATED: 'Todo created successfully',
    TODO_UPDATED: 'Todo updated successfully',
    TODO_DELETED: 'Todo deleted successfully',
};