import { useState } from 'react'
import SidebarComponent from './react-pro-sidebar component/sidebar'
import { Navbar } from './react-pro-sidebar component/navbar'
import BsNav from './bs-navbar/bs-nav'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
       <div>
           <Navbar toggle = {toggle} setToggle = {setToggle} />
           <div className='d-flex'>
             <SidebarComponent toggle = {toggle}/>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Nulla id dolor eu ante venenatis pretium. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa eros vitae tortor. Integer id quam. Maecenas ut massa nec sapien auctor gravida in in velit. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.
             Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
             Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa eros vitae tortor. Integer id quam. Maecenas ut massa nec sapien auctor gravida in in velit. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.
      
             Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa eros vitae tortor. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui.
      
             Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.
      
             Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa eros vitae tortor.
      
             Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa eros vitae tortor. Integer id quam. Maecenas ut massa nec sapien auctor gravida in in velit. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.
           </div>
           </div>
      
          Bootstrap Navbar
          {/* <BsNav /> */}
    </>
  )
}

export default App
