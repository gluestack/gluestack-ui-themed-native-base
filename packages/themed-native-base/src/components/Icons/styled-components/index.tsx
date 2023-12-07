import React, { forwardRef } from 'react';
import { default as Root } from './Root';
import { createIcon } from '@gluestack-ui/icon';
import { usePropResolution } from '../../../hooks/usePropResolution';

type IParameterTypes = Omit<Parameters<typeof createIcon>[0], 'Root'>;

/*
  Flag prop only to be used internally, when props are already resolved
  pass flag = true in that case
*/
const createIconNB = (props: IParameterTypes, flag: boolean = false) => {
  const Icon = createIcon({ Root, ...props });
  // return Icon;
  //
  // @ts-ignore
  type ISize = React.ComponentProps<typeof Icon>['size'];
  type IProps = Omit<React.ComponentProps<typeof Icon>, 'size'> & {
    size?: ISize | number;
  };
  //
  const CreatedIcon = forwardRef(({ ...propsIcon }: IProps, ref?: any) => {
    const resolvedProps = usePropResolution(propsIcon, flag);
    return <Icon {...resolvedProps} ref={ref} />;
  });
  return CreatedIcon;
};

export { createIconNB as createIcon };

export { default as Root } from './Root';
export { StyledIcon } from './Root';
