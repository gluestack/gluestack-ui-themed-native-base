import React from 'react';

import { Link } from '@gluestack-ui/themed';

const LinkStory = () => {
  return (
    <Link
      isHovered
      href="https://ui.gluestack.io"
      _hover={{
        _text: {
          _light: {
            color: 'cyan.600',
          },
          color: 'cyan.400',
        },
      }}
      isExternal
    >
      Gluestack
    </Link>
  );
};

export default LinkStory;
