import { Menu } from "react-daisyui";

const MainMenu = (args) => {
    return (
        <div className="flex-none">
          <Menu horizontal className="p-0">
            <Menu.Item>
              <a>Nosotros</a>
            </Menu.Item>
            <Menu.Item tabIndex={0}>
              <a>
                Mezclas
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <Menu className="p-2 bg-base-100">
                <Menu.Item>
                  <a>De "La Casa"</a>
                </Menu.Item>
                <Menu.Item>
                  <a>De "Los Altos"</a>
                </Menu.Item>
                <Menu.Item>
                  <a>De "Cerro Brujo"</a>
                </Menu.Item>
                <Menu.Item>
                  <a>Del "Soconusco"</a>
                </Menu.Item>
                <Menu.Item>
                  <a>De "Jaltenango"</a>
                </Menu.Item>
              </Menu>
            </Menu.Item>
            <Menu.Item>
              <a>Registrarme</a>
            </Menu.Item>
          </Menu>
        </div>
    )
}

export default MainMenu;