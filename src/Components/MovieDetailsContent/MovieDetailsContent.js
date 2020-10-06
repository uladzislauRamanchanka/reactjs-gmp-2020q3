import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 25px 40px 40px;
`;
const Image = styled.img`
  flex-grow: 0;
  object-fit: cover;
  height: 250px;
`;
const WrapperContent = styled.div`
  flex-grow: 1;
  margin-left: 60px;
`;
const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  color: #fff;
`;

const Rating = styled.div`
  margin-left: 20px;
  display: inline-block;
  height: 45px;
  width: 50px;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  line-height: 45px;
  color: green;
`;
const ShortDescription = styled.div`
  color: #fff;
  padding: 10px 0;
`;
const DurationReleaseWrapper = styled.div`
  display: flex;
  margin: 5px 0;
  color: #f65261;
  font-size: 18px;
  > * {
    margin-right: 20px;
  }
`;
const Description = styled.div`
  color: #fff;
  margin: 10px 0;
`;
const MovieDetailsContent = (props) => {
  const images = [
    {
      id: 1,
      url:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9d8e73e436b536a7c81644c6e9877c7a_1c9d0f90-9991-4326-8f37-3dd980abeacf_480x.progressive.jpg?v=1573590262",
      name: "Pulp Fiction",
      year: 2018,
      genre: "Drama, Biography, Music",
      filmDuration: 154,
      rating: 4.3,
      shortDesctiption: "Oscar Winning Movie",
      description:
        "Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
    },
  ];

  return (
    <Wrapper>
      <Image src={images[0].url}></Image>
      <WrapperContent>
        <NameWrapper>
          {images[0].name}
          <Rating>{images[0].rating}</Rating>
        </NameWrapper>
        <ShortDescription>{images[0].shortDesctiption}</ShortDescription>
        <DurationReleaseWrapper>
          <div>{images[0].year}</div>
          <div>{images[0].filmDuration} min</div>
        </DurationReleaseWrapper>
        <Description>{images[0].description}</Description>
      </WrapperContent>
    </Wrapper>
  );
};

export default MovieDetailsContent;
