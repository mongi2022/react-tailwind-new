import { FormattedMessage, useIntl } from "react-intl";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "../parts/Sidebar.css";

const Sidebar = () => {
  const intl = useIntl();
  return (
    <div className="sidebar">
      <ProSidebar>
        <Menu>
          <SubMenu
            title={intl.formatMessage({ id: "theme1" })}
            style={{ fontSize: 20 }}
          >
            <MenuItem>
              <Link to="/affichagenor/numerolo">
                <FormattedMessage id="sidebar.theme1" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/astro">
                <FormattedMessage id="sidebar.theme2" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/tarm">
                <FormattedMessage id="sidebar.theme3" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/tri">
                <FormattedMessage id="sidebar.theme4" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/bell">
                <FormattedMessage id="sidebar.theme5" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/ora g">
                <FormattedMessage id="sidebar.theme6" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/orac b">
                <FormattedMessage id="sidebar.theme7" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/j 32">
                <FormattedMessage id="sidebar.theme8" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/ref n">
                <FormattedMessage id="sidebar.theme9" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/chir">
                <FormattedMessage id="sidebar.theme10" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/mouv l">
                <FormattedMessage id="sidebar.theme11" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/int rev">
                <FormattedMessage id="sidebar.theme12" />
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            title={intl.formatMessage({ id: "theme2" })}
            style={{ fontSize: 20 }}
          >
            <MenuItem>
              <Link to="/affichagenor/int num">
                <FormattedMessage id="sidebar.theme13" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/int tar">
                <FormattedMessage id="sidebar.theme14" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/cul gen">
                <FormattedMessage id="sidebar.theme15" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/int astro">
                <FormattedMessage id="sidebar.theme16" />
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            title={intl.formatMessage({ id: "theme3" })}
            style={{ fontSize: 20 }}
          >
            <MenuItem>
              <Link to="/affichagenor/com">
                <FormattedMessage id="sidebar.theme17" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/coch">
                <FormattedMessage id="sidebar.theme18" />
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            title={intl.formatMessage({ id: "theme4" })}
            style={{ fontSize: 20 }}
          >
            <MenuItem>
              <Link to="/affichagenor/nat hum">
                <FormattedMessage id="sidebar.theme19" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/Boudd">
                <FormattedMessage id="sidebar.theme20" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/affichagenor/autr">
                <FormattedMessage id="sidebar.theme21" />
              </Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};
export default Sidebar;
