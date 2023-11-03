import React from 'react';
import { Badge, GlobeIcon } from '@gluestack-ui/themed';

const BadgeStory = ({ text = 'New feature', ...props }: any) => {
  return (
    <Badge {...props} colorScheme="success" endIcon={<GlobeIcon size="2xs" />}>
      {text}
    </Badge>
  );
};

export default BadgeStory;
