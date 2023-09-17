const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="ms-auto">
        <p className="text-center">
          <small>© {currentYear} Machida EARTH. All rights reserved.</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
