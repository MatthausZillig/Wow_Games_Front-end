import styled, { css } from 'styled-components'

import { LogoProps } from './index'

export const Wrapper = styled.main<LogoProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`
