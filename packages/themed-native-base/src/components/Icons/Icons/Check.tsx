import { createIcon } from '../styled-components';

export const CheckIcon = createIcon({
  viewBox: '0 0 24 24',
  d: 'M8.53115 15.1856L3.96198 10.744L2 12.6512L8.53115 19L22 5.9072L20.038 4L8.53115 15.1856Z',
});

export const CheckCircleIcon = createIcon({
  viewBox: '0 0 24 24',
  d: 'M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM7.17719 11.2464L9.91869 13.9114L16.8228 7.2L18 8.34432L9.91869 16.2L6 12.3907L7.17719 11.2464Z',
});

CheckIcon.displayName = 'CheckIcon';
CheckCircleIcon.displayName = 'CheckCircleIcon';

// export { CheckIcon, CheckCircleIcon };
