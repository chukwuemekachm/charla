import * as React from 'react';
import styled from 'styled-components';

import Avatar from '../ui/Avatar';
import {
  WHITE,
  WHITE_SMOKE,
  CORN_FLOWER_BLUE,
  LIGHT_STEEL_BLUE,
} from 'styles/_colors';
import Button from '../ui/Button';

const avatarUrls = [
  'https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg',
  'https://randomuser.me/api/portraits/women/63.jpg',
  'https://randomuser.me/api/portraits/men/42.jpg',
  'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
];

function NavStrip() {
  return (
    <NavStrip.Wrapper>
      <NavStrip.Avatars>
        {
          avatarUrls.map(url => <Avatar src={url} key={url} />)
        }
        <span><i className="icon ion-md-add" /></span>
      </NavStrip.Avatars>
      <NavStrip.Title>Fitness App - A Simple  &amp; Clean</NavStrip.Title>
      <Button>In Progress</Button>
    </NavStrip.Wrapper>
  );
}

NavStrip.Wrapper = styled.div`
  background-color: ${WHITE};
  height: 59px;
  box-sizing: border-box;
  border: 1px solid ${WHITE_SMOKE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  border: 1px solid ${WHITE_SMOKE};
  flex: 1;
`;

NavStrip.Avatars = styled.div`
  display: flex;

  img {
    margin-right: 5px;

    &:hover {
      cursor: pointer;
    }
  }

  span {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${LIGHT_STEEL_BLUE};
    color: ${WHITE};
    box-sizing: border-box;

    &:hover {
      cursor: pointer;
    }
  }
`;

NavStrip.Title = styled.h5`
  color: ${CORN_FLOWER_BLUE};
`;

export default NavStrip;
