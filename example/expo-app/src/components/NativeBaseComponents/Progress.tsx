import React from "react";
import { Progress } from "@gluestack-ui/themed-native-base";

export const Example = () => {
  return (
    <Progress
      aria-label="progressBar1"
      w="80%"
      value={60}
      bg="white"
      colorScheme="lightBlue"
    />
  );
};
