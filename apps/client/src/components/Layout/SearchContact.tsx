import * as React from 'react';
import styled from 'styled-components';
import { WHITE, WHITE_SMOKE, LIGHT_STEEL_BLUE } from 'styles/_colors';

function SearchContact() {
  return (
    <SearchContact.Wrapper>
      <SearchContact.Title>Your Contacts</SearchContact.Title>
      <SearchContact.Icons>
        <SearchContact.Input type="text" />
        <SearchContact.Icon>
          <i className="icon ion-md-search" />
        </SearchContact.Icon>
        <SearchContact.Icon>
          <i className="icon ion-md-add" />
        </SearchContact.Icon>
      </SearchContact.Icons>
    </SearchContact.Wrapper>
  );
}

SearchContact.Wrapper = styled.div`
  background-color: ${WHITE};
  width: 280px;
  height: 59px;
  box-sizing: border-box;
  border: 1px solid ${WHITE_SMOKE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

SearchContact.Title = styled.h5``;

SearchContact.Icons = styled.div`
  display: flex;
`;

SearchContact.Input = styled.input`
  position: relative;
  left: 30px;
  width: 60px;
  background-color: transparent;
  border: none;
  padding-right: 25px;

  &:focus {
    outline: none;
  }
`;

SearchContact.Icon = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${LIGHT_STEEL_BLUE};

  &:hover {
    background-color: ${WHITE_SMOKE};
    cursor: pointer;
  }

  i {
    font-size: 20px;
  }
`;

export default SearchContact;
