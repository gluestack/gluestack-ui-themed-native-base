import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { Root } from './styled-components';
import { createImage } from '@gluestack-ui/image';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';
import { Text } from '../Text';

const AccessibleImage = createImage({ Root });

export const ImageTemp = forwardRef(
  (
    {
      source,
      src,
      fallbackElement,
      alt,
      fallbackSource,
      ignoreFallback,
      _alt,
      ...props
    }: any,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    const altResolvedProps = usePropResolution(_alt);

    const finalSource: any = useRef(null);
    const getSource = useCallback(() => {
      if (source) {
        finalSource.current = source;
      } else if (src) {
        finalSource.current = { uri: src };
      }
      return finalSource.current;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [source?.uri, src]);

    const [renderedSource, setSource] = useState(getSource());
    const [alternate, setAlternate] = useState(false);
    const [fallbackSourceFlag, setfallbackSourceFlag] = useState(true);

    React.useEffect(() => {
      setSource(getSource());
      return () => {
        finalSource.current = null;
      };
    }, [source?.uri, src, getSource]);

    const onImageLoadError = useCallback(
      (event: any) => {
        props.onError && props.onError(event);
        console.warn(event.nativeEvent.error);
        if (
          !ignoreFallback &&
          fallbackSource &&
          fallbackSource !== renderedSource &&
          fallbackSourceFlag
        ) {
          setfallbackSourceFlag(false);
          setSource(fallbackSource);
        } else {
          setAlternate(true);
        }
      },
      [
        fallbackSource,
        fallbackSourceFlag,
        ignoreFallback,
        props,
        renderedSource,
      ]
    );

    if (typeof alt !== 'string') {
      console.warn('Please pass alt prop to Image component');
    }

    if (alternate) {
      if (fallbackElement) {
        if (React.isValidElement(fallbackElement)) {
          return fallbackElement;
        }
      } else return <Text {...altResolvedProps}>{alt}</Text>;
    }

    return (
      <AccessibleImage
        alt={alt}
        source={renderedSource}
        accessibilityLabel={alt}
        onError={onImageLoadError}
        {...resolvedProps}
        ref={ref}
      />
    );
  }
);

export type IImageComponentType<Image> = GenericComponentType<Image>;

export const Image = ImageTemp as IImageComponentType<typeof AccessibleImage>;
