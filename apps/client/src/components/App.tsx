import * as React from 'react';
import GlobalCSS from 'styles/_global.css';
import Layout from './Layout';

export default function App() {
  return (
    <React.Fragment>
      <GlobalCSS />
      {/* <Contact
        imageUrl='https://ultimatecourses.com/wp-content/themes/storefront-child/assets/images/authors/toddmotto@2x.jpg'
        name="Todd Motto"
        time="8:23 pm"
        messageCount={5}
        message="This example is when you run into someone. This is..."
      />
      <Contact
        imageUrl='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb'
        name="Sasha Ho"
        time="8:23 pm"
        messageCount={5}
        message="This example is when you run into someone. This is..."
      />
      <Contact
        imageUrl='https://randomuser.me/api/portraits/women/44.jpg'
        name="June Cha"
        time="8:23 pm"
        messageCount={5}
        message="This example is when you run into someone. This is..."
      />
      <Contact
        imageUrl='https://pbs.twimg.com/profile_images/974603248119222272/N5PLzyan.jpg'
        name="Nykyta Korotkevych"
        time="8:23 pm"
        messageCount={5}
        message="This example is when you run into someone. This is..."
      />
      <Contact
        imageUrl='https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82'
        name="Carys Metz"
        time="8:23 pm"
        messageCount={5}
        message="This example is when you run into someone. This is..."
      />
      <Contact
        imageUrl='https://pbs.twimg.com/profile_images/516590507808419840/V40yR78I.jpeg'
        name="Paweł Kuna"
        time="8:23 pm"
        messageCount={5}
        message="This example is when you run into someone. This is..."
      /> */}
      <Layout />
    </React.Fragment>
  );
}
