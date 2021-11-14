import { Card, Typography } from "@mui/material";
import styled from "styled-components";
import theme from "themes/main";

export const ProfileCard = styled(Card)`
  box-shadow: ${theme.shadows[0]};
  &:hover{
    box-shadow: ${theme.shadows[1]};
  }
`;

export const CardTextTypography = styled(Typography)`
  display: -webkit-box;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: 'break-word';
  text-overflow: 'ellipsis';                      
`
