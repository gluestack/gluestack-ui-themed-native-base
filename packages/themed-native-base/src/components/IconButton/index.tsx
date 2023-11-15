import React, { forwardRef } from 'react';
import { Button } from '../Button';
import { GenericComponentType } from '../../types';

const IconButtonTemp = forwardRef(
  ({ icon, variant = 'ghost', ...props }: any, ref?: any) => {
    return <Button variant={variant} {...props} leftIcon={icon} ref={ref} />;
  }
);

// export const IconButton = IconButtonTemp as GenericComponentType<typeof Button>;
// @ts-ignore
export type IIconButtonComponentType<Button> = GenericComponentType<
  Button,
  { icon: any },
  {
    leftIcon?: any;
    rightIcon?: any;
    startIcon?: any;
    endIcon?: any;
  }
>;

export const IconButton = IconButtonTemp as IIconButtonComponentType<
  typeof Button
>;
