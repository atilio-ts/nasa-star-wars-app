type Props = {
  image: string;
};

const Picture = ({ image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};
  
export default Picture;