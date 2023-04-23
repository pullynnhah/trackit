import { ThreeDots } from "react-loader-spinner";

export default function DotsLoader({ width, height }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius="9"
      color="#fff"
      ariaLabel="three-dots-loading"
    />
  );
}
