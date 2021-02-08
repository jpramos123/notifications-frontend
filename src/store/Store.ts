import { initStore, restoreStore } from '@redhat-cloud-services/insights-common-typescript';
import { Middleware } from 'redux';

import { INITIAL_STATE as SNS_INITIAL_STATE, SavedNotificationScopeReducer } from './reducers/SavedNotificationScopeReducer';
import { NotificationAppState } from './types/NotificationAppState';

export const createStore = (...middleware: Middleware[]) => {
    return initStore(
        {
            savedNotificationScope: SNS_INITIAL_STATE
        } as NotificationAppState,
        {
            savedNotificationScope: SavedNotificationScopeReducer
        },
        ...middleware);
};

export const resetStore = () => restoreStore();
