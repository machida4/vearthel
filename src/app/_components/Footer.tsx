import { author } from '../lib/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="ms-auto">
        <p className="text-center">
          <small>
            © {currentYear} {author}. All rights reserved.
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
