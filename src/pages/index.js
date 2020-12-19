import React from "react";
import Layout from '../components/layout';
import ImgHotel from "../components/imgHotel";
import HomeContent from "../components/homeContent";
import Room from '../components/room'
import useRooms from '../hooks/use-rooms';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
////////////////////////////////////////////////////

const RoomList = styled.ul `
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  text-align: justify;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {

  const rooms = useRooms();

  return (
    <Layout>
      <ImgHotel/>
      <HomeContent/>

      <h2
        css={css `
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Our rooms!</h2>

      <RoomList>
        {rooms.map(room => (
          <Room
            key={room.id}
            room={room}
          />
        ))}
      </RoomList>
    </Layout>
  )
}

export default IndexPage
