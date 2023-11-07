import React from 'react';
import { Badge, GlobeIcon } from '@gluestack-ui/themed';

const BadgeStory = ({ text = 'New feature', ...props }: any) => {
  return (
    <Badge
      {...props}
      colorScheme="success"
      _icon={{ color: 'red.500' }}
      _text={{ color: 'red.500' }}
      startIcon={<GlobeIcon size="2xs" />}
    >
      {text}
    </Badge>
  );
};

export default BadgeStory;
