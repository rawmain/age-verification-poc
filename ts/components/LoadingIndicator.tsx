import * as React from 'react';
import {LoadingSpinner, WithTestID} from '@pagopa/io-app-design-system';
import i18next from 'i18next';

export type LoadingIndicator = WithTestID<
  Exclude<
    React.ComponentProps<typeof LoadingSpinner>,
    'size' | 'color' | 'duration'
  >
>;

/**
 * Loading indicator component which renders a loading spinner with 48 size.
 */
export const LoadingIndicator = ({
  accessibilityHint = i18next.t('loadingSpinnerAccessibility.hint', {
    ns: 'global'
  }),
  accessibilityLabel = i18next.t('loadingSpinnerAccessibility.label', {
    ns: 'global'
  }),
  testID = 'LoadingIndicator'
}: LoadingIndicator) => (
  <LoadingSpinner
    size={48}
    accessibilityHint={accessibilityHint}
    accessibilityLabel={accessibilityLabel}
    testID={testID}
  />
);
