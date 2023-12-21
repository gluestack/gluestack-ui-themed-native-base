/* eslint-disable react-hooks/rules-of-hooks */
import { useToken as useTokenStyle } from '@gluestack-style/react';

export const useToken = (tokenScale: string, token: string | string[]) => {
  return typeof token === 'string' || typeof token === 'number'
    ? (useTokenStyle(tokenScale, String(token)) as any)
    : token &&
        (token.map((singleToken) =>
          useTokenStyle(tokenScale, singleToken)
        ) as Array<any>);
};
