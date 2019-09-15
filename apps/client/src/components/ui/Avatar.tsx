import * as React from 'react';
import styled from 'styled-components';

interface AvatarProps {
  src: string;
  height?: number;
  width?: number;
}

function Avatar(props: AvatarProps) {
  const { src, height = 30, width = 30 } = props;

  return <Avatar.Image src={src} height={height} width={width} />
}

Avatar.Image = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  vertical-align: middle;
  border-radius: 50%;
`;

export default Avatar;
