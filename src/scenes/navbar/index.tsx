import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Logo2 from "@/assets/Logo2.png";
import Logo3 from "@/assets/Logo3.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login");
  };
  const flexBetween = "flex items-center justify-around gap-10";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-blue-900 drop-shadow";

  return (
    <nav>
      {window.location.pathname != "/login" && (
        <>
          <div
            className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
          >
            <div className={`${flexBetween} mx-auto w-5/6`}>
              <div className={`${flexBetween} w-full gap-5`}>
                {/* LEFT SIDE */}
                <RouterLink to={"/"}>
                  {isTopOfPage ? (
                    <img alt="logo" src={Logo3} className="h-[14x] w-[120px]" />
                  ) : (
                    <img alt="logo" src={Logo2} className="h-[14x] w-[120px]" />
                  )}
                </RouterLink>

                {/* RIGHT SIDE */}
                {isAboveMediumScreens ? (
                  <div className={`${flexBetween} w-full`}>
                    {window.location.pathname == "/" && (
                      <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link
                          page="Home"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        <Link
                          page="Benefits"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        <Link
                          page="Our Classes"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        <Link
                          page="Contact Us"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      </div>
                    )}

                    <div className={`flex justify-end `}>
                      <SignedOut>
                        <div className={`${flexBetween}`}>
                          <button
                            className="text-gray-900"
                            onClick={handleSignInClick}
                          >
                            Sign In
                          </button>

                          <ActionButton setSelectedPage={setSelectedPage}>
                            Become a Member
                          </ActionButton>
                        </div>
                      </SignedOut>
                      <div className="absolute right-20 top-6">
                        <SignedIn>
                          <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    className="rounded-full bg-secondary-500 p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <Bars3Icon className="h-6 w-6 text-white" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* MOBILE MENU MODAL */}
          {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-blue-900 drop-shadow-xl">
              {/* CLOSE ICON */}
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <XMarkIcon className="h-6 w-6 text-gray-400" />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
