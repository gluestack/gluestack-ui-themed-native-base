import React, { forwardRef } from 'react';
import { Button } from '../Button';
// import { GenericComponentType } from '../../types';

type IButtonProps = React.ComponentProps<typeof Button>;

const IconButtonTemp = forwardRef(
  ({ icon, ...props }: IButtonProps & { icon: any }, ref?: any) => {
    return <Button {...props} leftIcon={icon} ref={ref} />;
  }
);

// export const IconButton = IconButtonTemp as GenericComponentType<typeof Button>;
// @ts-ignore
// export type IIconButtonComponentType<Button> = GenericComponentType<
//   Button,
//   { icon: any },
//   {
//     leftIcon?: any;
//     rightIcon?: any;
//     startIcon?: any;
//     endIcon?: any;
//   }
// >;

// export const IconButton = IconButtonTemp as IIconButtonComponentType<
//   typeof Button
// >;
export const IconButton = IconButtonTemp as any;
