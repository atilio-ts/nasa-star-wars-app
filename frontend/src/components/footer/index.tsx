import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">© Atilio Villalba All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Social Links</h4>
          <p className="my-5"><a href="https://www.linkedin.com/in/ajvg94/">LinkedIn</a></p>
          <p className="my-5"><a href="https://github.com/ajvg94">Github</a></p>
          <p className="my-5"><a href="https://stackoverflow.com/users/11348054/ajvg94">StackOverflow</a></p>
          <p><a href="https://www.hackerrank.com/profile/ajvg94">HackerRank</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;