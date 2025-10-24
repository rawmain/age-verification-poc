import React from 'react';
import {selectIsDebugModeEnabled} from '../../store/reducers/debug';
import {useAppSelector} from '../../store';

/**
 * This HOC allows to render the wrapped component only if the debug mode is enabled, otherwise returns null (nothing)
 */
export const withDebugEnabled =
  <P extends Record<string, unknown>>(
    WrappedComponent: React.ComponentType<P>
  ) =>
  (props: P) => {
    const isDebug = useAppSelector(selectIsDebugModeEnabled);
    if (!isDebug) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };
