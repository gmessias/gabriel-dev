const SocialMediaNav: React.FC = () => {
    return (
      <nav>
          <ul className={"flex justify-center space-x-4 md:space-x-6 lg:space-x-8 p-4"}>
              <li>
                  <a
                      className={"text-white hover-accent transition duration-300"}
                      href={"https://www.linkedin.com/in/gmessiasp"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                  ><i className={"fab fa-linkedin fa-2x"}></i></a>
              </li>
              <li>
                  <a
                      className={"text-white hover-accent transition duration-300"}
                      href={"https://github.com/gmessias"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                  ><i className={"fab fa-github fa-2x"}></i></a>
              </li>
              <li>
                  <a
                      className={"text-white hover-accent transition duration-300"}
                      href={"mailto:gmessiasp@gmail.com"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                  ><i className={"fas fa-envelope fa-2x"}></i></a>
              </li>
          </ul>
      </nav>
    );
}

export default SocialMediaNav;