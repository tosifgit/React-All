import React from 'react'

function Side() {
  return (
    <div>
        {/*sidebar start*/}
  <aside>
    <div id="sidebar" className="nav-collapse ">
      {/* sidebar menu start*/}
      <ul className="sidebar-menu" id="nav-accordion">
        <p className="centered"><a href="profile.html"><img src="assets/img/ui-sam.jpg" className="img-circle" width={60} /></a></p>
        <h5 className="centered">Marcel Newman</h5>
        <li className="mt">
          <a className="active" href="index.html">
            <i className="fa fa-dashboard" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="sub-menu">
          <a href="javascript:;">
            <i className="fa fa-desktop" />
            <span>UI Elements</span>
          </a>
          <ul className="sub">
            <li><a href="general.html">General</a></li>
            <li><a href="buttons.html">Buttons</a></li>
            <li><a href="panels.html">Panels</a></li>
          </ul>
        </li>
        <li className="sub-menu">
          <a href="javascript:;">
            <i className="fa fa-cogs" />
            <span>Components</span>
          </a>
          <ul className="sub">
            <li><a href="calendar.html">Calendar</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="todo_list.html">Todo List</a></li>
          </ul>
        </li>
        <li className="sub-menu">
          <a href="javascript:;">
            <i className="fa fa-book" />
            <span>Extra Pages</span>
          </a>
          <ul className="sub">
            <li><a href="blank.html">Blank Page</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="lock_screen.html">Lock Screen</a></li>
          </ul>
        </li>
        <li className="sub-menu">
          <a href="javascript:;">
            <i className="fa fa-tasks" />
            <span>Forms</span>
          </a>
          <ul className="sub">
            <li><a href="form_component.html">Form Components</a></li>
          </ul>
        </li>
        <li className="sub-menu">
          <a href="javascript:;">
            <i className="fa fa-th" />
            <span>Data Tables</span>
          </a>
          <ul className="sub">
            <li><a href="basic_table.html">Basic Table</a></li>
            <li><a href="responsive_table.html">Responsive Table</a></li>
          </ul>
        </li>
        <li className="sub-menu">
          <a href="javascript:;">
            <i className=" fa fa-bar-chart-o" />
            <span>Charts</span>
          </a>
          <ul className="sub">
            <li><a href="morris.html">Morris</a></li>
            <li><a href="chartjs.html">Chartjs</a></li>
          </ul>
        </li>
      </ul>
      {/* sidebar menu end*/}
    </div>
  </aside>
  {/*sidebar end*/}
    </div>
  )
}

export default Side