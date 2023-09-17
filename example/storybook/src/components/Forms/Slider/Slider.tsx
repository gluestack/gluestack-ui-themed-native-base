import React from 'react';
import { Slider, Box } from '@gluestack-ui/themed';

const SliderStory = ({
  value: valueProp = 60,
  ...props
}: {
  value: number;
  props: any;
}) => {
  const [sliderValue, setSliderValue] = React.useState(0);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  React.useEffect(() => {
    handleChange(valueProp);
  }, [valueProp]);

  return (
    <Box w={200} h={200}>
      <Slider
        mt="$4"
        value={sliderValue}
        onChange={(value: any) => {
          handleChange(value);
        }}
        {...props}
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  );
};

export default SliderStory;
