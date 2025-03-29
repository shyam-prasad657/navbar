import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './sidebar.css';
import { MdAddIcCall } from 'react-icons/md';

export default function SidebarComponent({toggle}) {
    return (
        <Sidebar collapsed = {toggle} width = '270px' collapsedWidth = '80px'>
            <div className = 'sidebar-container'>
            <Menu>
            <SubMenu label="Charts" icon = {<MdAddIcCall />}>
            <MenuItem > Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem icon = {<MdAddIcCall />}> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
            </Menu>
            </div>
        </Sidebar>
    )
}