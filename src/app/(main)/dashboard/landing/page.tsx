type Props = {};

function page({}: Props) {
  return (

    <div className="h-screen flex flex-col items-center justify-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_34%_50%_at_50%_0%,#000_70%,transparent_110%)] z-[-1]"></div>
      <h1 className="text-7xl font-black text-center">
        Fatima <br /> <span className="text-blue-700">Code</span>
      </h1>

      <p className="text-center w-[90%] md:w-[50%] py-5 text-gray-600 text-sm">
        At Fatima, we are dedicated to revolutionizing the landscape of
        education. We believe in the transformative power of learning and are
        committed to providing innovative solutions that inspire and empower
        individuals to achieve their full potential.
      </p>
      <h1 className="text-3xl font-black">Our Vision:</h1>
      <p className="text-center w-[90%] md:w-[50%] py-5 text-gray-600 text-sm">
        To be a global leader in redefining education, fostering creativity, and
        cultivating lifelong learners who thrive in a dynamic world.
      </p>
      <h1 className="text-3xl font-black">Our Mission:</h1>
      <p className="text-center w-[90%] md:w-[50%] py-5 text-gray-600 text-sm">
        To create a vibrant learning ecosystem that combines cutting-edge
        technology, personalized instruction, and collaborative experiences to
        nurture intellectual curiosity, critical thinking, and social
        responsibility.
      </p>
    </div>
  );
}

export default page;
