import React from 'react';
import { Badge, GlobeIcon } from '@gluestack-ui/themed';

const BadgeStory = ({ text = 'New feature', ...props }: any) => {
  return (
    <Badge
      leftIcon={GlobeIcon}
      endIcon={GlobeIcon}
      {...props}
      sx={{
        _icon: {
          h: 16,
          w: 16,
        },
      }}
    >
      {text}
    </Badge>
  );
};

export default BadgeStory;
