import React, { Component } from 'react';
import { Navbar, ListGroup } from 'react-bootstrap';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { GoHome, GoMail, GoNote, GoGraph } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiBookmark } from 'react-icons/fi';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <nav className="sidebar">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Navbar.Brand href="/home">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/944px-Twitter_Bird.svg.png"
                    width="55px"
                    height="55px"
                    className="d-inline-block align-top"
                    alt="Main logo link to home"
                  />
                  <br />
                  <br />
                </Navbar.Brand>
              </ListGroup.Item>

              <ListGroup.Item>
                <Link to="/home">
                  <div className="flexSidebars">
                    <GoHome size={40} />
                    <p className="sidebarTopics">Home</p>
                  </div>
                </Link>
              </ListGroup.Item>

              <ListGroup.Item>
                <Link to="/notifications">
                  <div className="flexSidebars">
                    <IoMdNotificationsOutline size={40} />
                    <p className="sidebarTopics">Notifications</p>
                  </div>
                </Link>
              </ListGroup.Item>

              <ListGroup.Item>
                <Link to="/messages">
                  <div className="flexSidebars">
                    <GoMail size={40} />
                    <p className="sidebarTopics">Messages</p>
                  </div>
                </Link>
              </ListGroup.Item>

              <ListGroup.Item>
                <Link to="/bookmarks">
                  <div className="flexSidebars">
                    <FiBookmark size={40} />
                    <p className="sidebarTopics">Bookmarks</p>
                  </div>
                </Link>
              </ListGroup.Item>

              <ListGroup.Item>
                <Link to="/lists">
                  <div className="flexSidebars">
                    <GoNote size={40} />
                    <p className="sidebarTopics">Lists</p>
                  </div>
                </Link>
              </ListGroup.Item>

              <ListGroup.Item>
                <div className="flexSidebars">
                  <FaRegUserCircle size={40} />
                  <Link to="/profile">
                    <p className="sidebarTopics">Profile</p>
                  </Link>
                </div>
              </ListGroup.Item>

              <ListGroup.Item>
                <div className="flexSidebars">
                  <GoGraph size={40} />
                  <Link to="/analytics">
                    <p className="sidebarTopics">Analytics</p>
                  </Link>
                </div>
              </ListGroup.Item>

              <button className="tweetBtn" type="button">
                Tweet
              </button>
            </ListGroup>
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
