// Imports
import { Navbar } from "react-daisyui";
import Brand from "../Brand/Brand";
import MainMenu from "../MainMenu/MainMenu";
import CartWidget from "../CartWidget/CartWidget";
import AvatarWidget from "../AvatarWidget/AvatarWidget";

const NavBar = (args) => {
    const { drawerId, brandTitle } = args;

    const cartData = {
        itemsQuantity: 8,
        total: 420.69,
    }

    return (
        <div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <Navbar {...args}>
                <Brand brandTitle={ brandTitle } />
                <MainMenu />
                <div className="flex-none">
                    <CartWidget drawerId={ drawerId } cartData={cartData} />
                    <AvatarWidget />
                </div>
            </Navbar>
      </div>
    )
}

export default NavBar;