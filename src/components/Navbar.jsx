import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuTogger = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a Job" },
  ]
  return (
    <header className='max-w-scree-2xl container mx-auto xl:px-24 px-4'>
      <nav className='flex justify-between items-center py-4'>
        <a href="/" className='flex item-center gap-2 text-2xl text-black'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAyVBMVEX///8BLliAgIDo6OkkJCMLDCF5eXnx8fHW1taMjIx9fX2ZmZmrq6t0dHQAIVHR0dEAJVMAAEMAHU8AKVXY2+DIyMgAAD/39/fe3t4AADq0ucVWXXkyTW4AADcAF0y0tLRDRmkAEkpGUG8ADEhcZH5+iJwAADOhoaFsbGwAAC2dprS+vr6Mlqd/gZRoc4rN09rBxMwiNVwAACeQj58wQ2dSUW4eP2YPNl0zNVwhMV1yfZNMYX4+VXNXaoOsrrgiJ1QAAAA1NVReXl7HMbA/AAALY0lEQVR4nO2cC5eauhbH0dxjQAUJD4OMwiAyWqQ8Tjkzra+ec7//h7pJRMHRqTPt7Zg5K7+12tVBmO6/2dnZ2SSRJIFAIBAIBAKBQCAQCAQCgUDAAxjjW5vwfwBmbvzly2fCly+xm4Fb2/PzWG6S3pWmFwQe+ROYxXT2Oc4+ZBu5q7tH3dDN1hFTN4ximsbw1qa9FfevUmsKqQVpxTT5UHLyzTfjmRLdC0OEUOjppm6W8a0tfDVw9f20UXQ0mTyukmQXJ8lqjCbIM8bZra18He5XrynFRMMyPjEdxGOEJsmt7HsDOAn0ppSguNRDQPz0MOa+58BV0IxfWhmzUAxlv6e0CUrPH0B2yTU0zocdkKJmX2GtgqGtqKra7XbbbfJXR1WVJaB6kq9cdxywamgx9RkxFjv9jtrpdpmWiq6qzh0iJ0s5VgNWYUOLGRE3olLaitLr9RSl3RDUUfvkUxhbt7b5JWDS0KK3yFhCHEyZ+7YDIARAtv250pDTtaGEc16jgNvo+6ZJtAB/vnSad9A4cJTTpY2DORWTlVrdMGhHXGxpn5sKlkrnIKfTcy78Hh6A26ChhQyJQL4ceh2/fWwcXtXsGoEsTEmsAi8l+9hWOFeDv9UDv/54ZTiUazVzHkfOuNEww/za3U7taX3+ZmvQrCNZkF63Tz4OoG37Hcx7G42GMYPLIyGNbBhUwH4d0rhztKdGw6wujR24211K8j6vaaY2RA1vTWON6h5jXEy4nEWnJ/mL9jld3pqmkcgY28u2KeqA9Hv1OaSNVM6apjG3RLu3hCc47/DWa8Cw7v7a29L6QYc4Glcjp1tnMtqsEcswvAbod3jzs8ioM5nGlB/6vWsoHRrP+jzlzmu90WXqy/JC7VyBhemuwlOnGdf932ukMoBML18BmYFy1Gnw41GM2WrmZUB+Db6iyjez/QxYHMXoP1GqBL3F4DdY9ZOAb7WY6dtLFI7CrZizlpH7NpaW/ZfptVWexPzIzeBcbUPQ/lFE40pMo8+Y5XMxuL9QID7LyerUjMCTGKkRzcyzWSakhQ0wuMihGsBRaJY2jTzz6pT5hIHKZps8DZrbumKG4jfN6WUmhqsMIPbqeWZ0xTBgN1iywkbH56mokdVzs2sDDRlUzgIAV/1fwo0605VO49TV2boSwFP/l6SyTpvD5Ic+gwfzw2A5r0IZXzOAk0qTtnl1QuPsxXS58jIyljT9zH31U/vuz12FdlvHM2P9GuOA7DjLDhtkOGsYScobTRO8omnwvK2wKTN3PYaAN/W4qU2vNg32D2XNrsJXKGPkjZomurb6gmjhuG5O7NvWFRrToGPNyxEaHt+ddbtcDf5HTl41F/St+UvOBuZ1nZnDtzPSacuQiFbS4fGiBzVeApLOz6WWk4yGRrQtubTsnVdd7PrdeVv1b2Doa8hGJ2JaxpZ86YOusmwGXuA3VzXQqizmbcBkNLvMXs0YsyrSoj1fDmRZtv1eR+3Ur2XIZJqEApdLPyv11nM1BS0HyIraUdXF4jjfrzysQ8d96+JLtpsD0XMtdFkmS6AHyumSJopCYwN2N1w6mZQPz8W0TDTNqRywXzlXaVJ6Ph30cbaZculjkrTyLoghrhakOVupAR3bp3MY35aZZ8EsHa5ubPMLwPxkiWnzB89b76zTlScYWO5s+JXT5cBWVMdl3TCeisbyJpJ3Ds1tnGeWRd//W1aWx6k5CWdvK0m9FzBfV2HZNEJjnEa73cxrpgPkOgqfpuuUsN08egihO07X0FtJa2+5qT2mX3asi1i7WeCdLjk3Nc3wPEPTSdNNv/C5NhPns2qhvPktyq1j37DitIW0880AeqjdJXxKkUBcHhxKn516DsjjtT4M630aphagcJO4FqcBOUuLw8BvFmffN7YyN9k+sg00QaA9zaJdbvHZV4ixu2ntSN7lSAtZ/CLQaAY5bROJrmJuhGBjfWtzfgm31Jsrf3l1n9eAo+YGhtbo1YU/DgFPJ1pQemuDfoH408nsRdNubdDPAzankxcTcbs94RrYNU8SL/rm79Y2/SzgZOsSG2G2/A4fPwS74+datJLDYvFrAMk37VQKybg+ZlTGeeqd1WC86EMOlyRDDp5LIR3mQ0YyK9WfuxjJ+0s+Z7/XcEfnUy1Te9t6DG5wL5T5vJTPKt5VLojRph/TyS6JMVsfdug/F+OtPmaHkS6I0X5ibSkvPBdjFrvrD/HKczFadGuLfoFnYrS/PmQaU3Eqxiw+alRmnIrRPsIRGC/jjnTtiDe7tTm/Rj69q/nr40ZlBrSa3NoagUAgEAi45y2H3nCYVkdjypb+E7ubAGlrNvzDNb28iY65QNZi97mVhKRlIDNln2Zb9itWNM/OH8d7dFbXsZ4eq4x1PX56BzFp4BmaN5XoeV8TT/uuBX/SaRksPc0wPDQ6bP/PHnTN8MJRQF+hAw0Z5FbE3kFn99WtY0jSVcMgiaphPFAxMEJetRfy3pu8g5hdFCWhOaVahuY6dpN7c0TUwLExTpLtk3dYAJeNWuskWhf0AjA1fbtzo8LTyNw6mxqbJIrGuh5J2SpalcYmilb0Mcs0W8a+xHOvD99BDOUTFeMijVmQ3ZsTQMQEn9lBc4+Vo2WTgp6bFWlaJq20kE2q8zKcWUQMW4IOAo29+gQzFO1bE8eoVQR7X3xfMSBFlUfsdGIcHHupA7IUHY7M2IuR4laYw696uL+4C73dQQzer6iVLCJm37FA6c0SzXTfX4w1RtXyUPDdWBMx2uN2O9aOlfNs8rRvGS/LiqBa5Ze3wpiKiQCwcqSzq7UYd9SKrQ1i7f3OYsqDd8DvxoYEAJ0eV+rdHRbzEjGr3E3G4RhkRViVbrInRMUY43S11Y3CPRWzCaYWTEJWTnhnN1ujvXdL+XfyxRM3u3Pd3epbUDUNCQAGQkNU7DD4qpX7i64XUjfTNYQMc7wvtB3FZCOzTOLURPSkivcRAysxOEEFe4GBU/MhpwGAOk22GVZfMxEzns3ShK6Xner7s6dAGhI3zKbedpcgs4p7RzFbT0ejCYnhY+udxOQr19ohPaUny4VlbMEsaqGpxAIAmT7H5cFniJtFdOUSe8jTSheAbKUH5FMWAPA2bCUnYkBokhAdRWlBj6q51xGg8/HfWb7Gs2E5eySdmo7/BSpm6UYblhYdNPVyNrsrtcO+zH0AqIhRWMxmUy+knrmPZpZXBYuDmAgVLj2thUTENZDuTXN2d3eX/tbqQr4ePTzozEycp+HDw4PGUhioT8gHD6PisHQ0+7uxoQnn49HDZPKUsIHpnz9oPHA/PbDYbt39QcMi/POh6ljJ8E9X+of9uk9ff29tEQzc/LAuGVq5Wy3mwwOb7oGv/QLnJ6d+A9k9PAcHtlM9Qe/AWc6+DXtgHf6HHEgZ+3X2gMPsVCAQnOIsZShBh/VWYNugusb2Y7C/6V6M/X4MuisQD/anAznkU5k+RX/g5a2789+54ksO2/wqtxVlQf6xVJU23RDXZyfiLBQJt5f0Xtxbkvsxua6QZwYLpa0AqV/dzAP2AmIsOfR4UtwjRvmqBBcy22fq9BS6Wbnb7mO2fUnC8yWQVSKmR+sHgzkG5LH+HHITg3Ff6Q32YgBtHmchOR1Mhg4oLXtLevBCx24ve5UYZd5bEDHd+dyRBsqy3wOS355zc3YecJy5QsTIpIF6PoR9RQLqANuKA4jpbR9LCyB3Di3TdwZUjAJIbxm059T7+j3H4aVp5LY/p32G2Ekk9fu0dZZKf96H9nzg2KRTqA759vc7aOc2UYolX/F9m7gZuQVUP3CCvBxgmqbQPOUQzWR6PLNDuxHJSegp2fvLEglbmBju2LYtkzCGIUlq6A/cnWkgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEgh8A/kVI//kXIf3xL+J/oswnQebqHKgAAAAASUVORK5CYII="
          width={30} height={30} alt="" /><span>Job Portal</span></a>

        {/* nav items for large devices */}

        <ul className='hidden md:flex gap-12'>
          {
            navItems.map(({ path, title }) => {
              <li key={path} className='text-base text-primary'>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }>
                  {title}
                </NavLink>
              </li>
            })}
          <li>MLLn</li>
        </ul>
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className='py-2 px-5 border rounded'> Log in</Link>
          <Link to="/sign-up" className='py-2 px-5 border bg-blue text-white rounded'> Sing up</Link>
        </div>
        {/* mobile menu */}
        <div className='md:hidden block'>
          <button onClick={handleMenuTogger}>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5 text-primary' /> : <FaBars className='w-5 h-5 text-primary' />
            }
          </button>

        </div>
      </nav>
      {/* naveItems for mobile */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
          {
            navItems.map(({ path, title }) => {
              <li key={path} className='text-base text-white first:text-white py-1'>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }>
                  {title}
                </NavLink>
              </li>
            })
          }
          <li className='text-white py-1'> <Link to="/login" > Log in</Link></li>
        </ul>
      </div>

    </header>
  )
}

export default Navbar