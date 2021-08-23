import "./navbar.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { IconButton } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Multivitamin", "Protien", "Pregnancy", "Bundles"].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              style={{
                marginTop: "2%",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#142b6f",
              }}
            >
              <p style={{ margin: "1%" }}>{text}</p>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {[
          "Who we are",
          "Ingredients",
          "Our Clinical Study",
          "The Journal",
          "Account",
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            style={{
              marginTop: "2%",
              color: "#142b6f",
            }}
          >
            <p style={{ margin: "1%", letterSpacing: "1px" }}>
              {index === 4 ? (
                <AccountCircleIcon style={{ padding: "3%" }} />
              ) : (
                ""
              )}
              {text}
            </p>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <div>
        <div key={"left"}>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white  navbar-fixed-top navbar navbar-expand-md fixed-top">
        <div className="container-fluid ">
          <div
            className="collapse navbar-collapse container "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a
                  className="nav-link menu mr-3"
                  style={{ color: "#142b6f", cursor: "pointer" }}
                  onClick={toggleDrawer("left", true)}
                >
                  Menu
                </a>
              </li>
            </ul>
            <ul className="mr-auto navbar-nav mb-5 ">
              <li className="nav-item active ml-5 font-weight-bold">
                <a
                  className="nav-link ritual "
                  href="/"
                  style={{ color: "#142b6f" }}
                >
                  Ritual
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item active ">
                <a
                  className="nav-link who_we_are "
                  href="google.com"
                  style={{ color: "#142b6f" }}
                >
                  Who We Are
                </a>
              </li>

              {/* <li className="nav-item">{cart}</li> */}
            </ul>
            <ul className="navbar-nav ml-5">
              <MuiThemeProvider>
                <li className="nav-item active cartIcon">
                  <IconButton
                    aria-label="delete"
                    className="cartIcon"
                    style={{ margin: "0 2em" }}
                  >
                    <LocalMallIcon />
                  </IconButton>
                </li>
              </MuiThemeProvider>
              {/* <li className="nav-item">{cart}</li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
