import React from "react";
import AboutProductStyle from "../styles/AboutProduct.module.css";

import List, { ListItem } from '../components/list'

export default function AboutPage() {
  return (
    <>
      <section className={AboutProductStyle.content}>
        <div className={AboutProductStyle.contentCenter}>
          <List>
            <ListItem image='/images/owner.jpg' header='The Owner' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio
                sed fermentum convallis, dolor lorem porta magna, eu consequat
                lorem magna a turpis. Vivamus ultrices elit risus, at egestas
                enim tempus non. Vivamus molestie lacinia dui in tincidunt.
                Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit
                ac vestibulum congue, ullamcorper mattis orci.'/>

            <ListItem image='/images/co-owner.png' header='The Co-Owner' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio
                sed fermentum convallis, dolor lorem porta magna, eu consequat
                lorem magna a turpis. Vivamus ultrices elit risus, at egestas
                enim tempus non. Vivamus molestie lacinia dui in tincidunt.
                Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit
                ac vestibulum congue, ullamcorper mattis orci.'/>
          </List>
        </div>
      </section>
    </>
  );
}
