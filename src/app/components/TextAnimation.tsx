import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We are team of professionals',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        // 'Web Developer',
        // 1000,
        // 'Node.Js Developer',
        // 1000,
        // 'UI Engineer',
        // 1000
      ]}
      speed={50}
      className="text-[16.2px] md:text-[23px] text-[#eeb84b] font-bold h-10"
      repeat={Infinity}
    />
  );
};

export default TextAnimation