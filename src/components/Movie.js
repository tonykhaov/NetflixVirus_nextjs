import Link from "next/link";
import styled from "styled-components";

const IMG_PATH = "http://image.tmdb.org/t/p/w185/";

function Movie({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`} as={`/movie/${movie.id}`}>
      <ImgStyled src={`${IMG_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
  );
}

export const ImgStyled = styled.img`
  box-shadow: 0 0 6px black;
  cursor: pointer;
  transition: box-shadow 0.1s linear;
  &:hover,
  &:focus {
    box-shadow: 0 0 3px black;
  }
`;

export default Movie;