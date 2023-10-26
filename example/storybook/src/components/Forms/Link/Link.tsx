import React from 'react';

import { Link } from '@gluestack-ui/themed';

const LinkStory = () => {
  return (
    <Link href="https://ui.gluestack.io" _text={{
      color: "red.500"
    }}>
      Gluestack
    </Link >
  );
};

export default LinkStory;
