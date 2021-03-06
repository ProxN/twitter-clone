import styled, {
  alignItems,
  justifyContent,
  css,
  flexDirection,
  getSpace,
  compose,
  width,
  margin,
  marginTop,
  marginBottom,
  MarginProps,
  MarginTopProps,
  MarginBottomProps,
  FlexDirectionProps,
  WidthProps,
} from '@xstyled/styled-components';

export interface SpaceBaseProps
  extends MarginProps,
    MarginTopProps,
    MarginBottomProps,
    FlexDirectionProps,
    WidthProps {
  /** if "true", set flex-wrap:wrap */
  $wrap?: boolean;

  /** horizontal space */
  hSize?: number;

  /** vertical   space */
  vSize?: number;
}

const SpaceSystem = compose(
  margin,
  marginTop,
  marginBottom,
  alignItems,
  justifyContent,
  flexDirection,
  width
);

export const SpaceContainer = styled.div.withConfig({
  shouldForwardProp: (prop, validate) =>
    validate(prop) && !SpaceSystem.meta.props.includes(prop),
})<SpaceBaseProps>`
  display: flex;
  ${({ $wrap }) => $wrap && css({ flexWrap: $wrap ? 'wrap' : 'nowrap' })}
  ${SpaceSystem};

  & > :not(style) ~ :not(style) {
    ${({ flexDirection: direction, hSize }) => {
      if (!hSize) return css``;
      if (direction === 'column') {
        return css`
          margin-top: ${getSpace(hSize)};
          margin-inline: 0;
          margin-bottom: 0;
        `;
      }

      return css`
        margin-inline-end: 0;
        margin-top: 0;
        margin-bottom: 0;
        margin-inline-start: ${getSpace(hSize)};
      `;
    }}
  }
`;
