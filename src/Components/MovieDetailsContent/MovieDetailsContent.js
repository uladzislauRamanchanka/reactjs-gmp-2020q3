import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import emptyImage from "../../images/no-image.png";

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
  const movie = useSelector((state) => state.movie.currentMovieDescription);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movie]);
  return (
    <Wrapper>
      <Image
        src={movie.poster_path || emptyImage}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = emptyImage;
        }}
      ></Image>
      <WrapperContent>
        <NameWrapper>
          {movie.title}
          <Rating>{movie.vote_average}</Rating>
        </NameWrapper>
        <ShortDescription>{movie.tagline || "Empty tagline"}</ShortDescription>
        <DurationReleaseWrapper>
          <div>{movie.release_date.slice(0, 4)}</div>
          <div>{movie.runtime || 0} min</div>
        </DurationReleaseWrapper>
        <Description>{movie.overview}</Description>
      </WrapperContent>
    </Wrapper>
  );
};

export default MovieDetailsContent;
