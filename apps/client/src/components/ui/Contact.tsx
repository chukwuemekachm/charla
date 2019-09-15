import * as React from 'react';
import styled from 'styled-components';

import {
  WHITE,
  WHITE_SMOKE,
  LIGHT_STEEL_BLUE,
  LIGHT_CORAL,
  LIGHT_SLATE_GRAY,
} from 'styles/_colors';
import Avatar from './Avatar';

const url = 'https://ultimatecourses.com/wp-content/themes/storefront-child/assets/images/authors/toddmotto@2x.jpg';

interface ContactProps {
  name: string;
  imageUrl: string;
  time: string;
  message: string;
  messageCount: number;
}

function Contact(props: ContactProps) {
  const { name, imageUrl, time, message, messageCount } = props;

  return (
    <Contact.Wrapper>
      <Contact.Aside>
        <Avatar src={imageUrl} />
      </Contact.Aside>
      <Contact.Main>
        <Contact.Header>
          <Contact.Title>{name}</Contact.Title>
          <Contact.Time>{time}</Contact.Time>
        </Contact.Header>
        <Contact.Body>
          <Contact.Description>{message}</Contact.Description>
          <Contact.Notification>{messageCount}</Contact.Notification>
        </Contact.Body>
      </Contact.Main>
    </Contact.Wrapper>
  );
}

Contact.Wrapper = styled.div`
  display: flex;
  width: 280px;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${WHITE};
  border: 1px solid ${WHITE_SMOKE};
`;

Contact.Aside = styled.aside`
  width: 17%;
  padding: 1%;
  box-sizing: border-box;
`;

Contact.Main = styled.main`
  width: 83%;
`;

Contact.Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 5px;
`;

Contact.Title = styled.h5`
  font-weight: 500;
`;

Contact.Time = styled.span`
  font-size: 11px;
  color: ${LIGHT_STEEL_BLUE};
`;

Contact.Body = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

Contact.Description = styled.p`
  width: calc(100% - 25px);
  font-size: 13px;
  color: ${LIGHT_SLATE_GRAY};
  line-height: 1.3;
`;

Contact.Notification = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: ${WHITE};
  background-color: ${LIGHT_CORAL};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 0.32em 2em rgba(153, 153, 153, .2);
`;

export default Contact;
