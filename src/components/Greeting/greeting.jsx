import ImageList from "@material-ui/core/ImageList";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import greetImg from "../../assets/greeting/ritual.jpg";
import "./greeting.css";
import img1 from "../../assets/greeting/card1..jpg";
import img2 from "../../assets/greeting/card2.jpg";
import img3 from "../../assets/greeting/card1.jpg";
import img4 from "../../assets/greeting/card4.jpg";
import LabelIcon from "@material-ui/icons/Label";
import { useEffect, useState } from "react";
import { Button, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    margin: "2em 0",
    transition: "transform 0.15s ease-in-out",
  },

  title: {
    color: "#fff",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },

  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },

  btn: {
    margin: "15px 16px",
    padding: "2% 10%",
    color: "#fff",
    background: "#142b6f",
    borderRadius: "40px",
    fontSize: "0.4em",
    textTransform: "capitalize",
    outline: "none",
    border: "none",
    "&:hover": {
      color: "#142b6f",
      background: "#fff",
      border: "1px solid white",
    },
    "&:focus": {
      outline: "none",
      border: "none",
    },
    marginLeft: "10%",
    width: "10em",
  },
}));

const Greeting = () => {
  const classes = useStyles();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    if (fullScreen) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize("hook"));
    return function cleanup() {
      window.removeEventListener("resize", handleResize("cleanup"));
    };
  });

  const itemData = [
    {
      img: img1,
      title: "Shop Multivitamin ",
      author: "author",
      offer: "",
    },
    {
      img: img2,
      title: "Shop Protien",
      author: "author",
      offer: "New",
    },
    {
      img: img3,
      title: "Shop Pregnancy",
      author: "author",
      offer: "",
    },
    {
      img: img4,
      title: "Shop Bundles",
      author: "author",
      offer: "",
    },
  ];

  const itemData2 = [
    {
      img: "fa fa-globe",
      title: "Traceable Ingredients ",
      author: "author",
    },
    {
      img: "fa fa-ban",
      title: "Non-GMO",
      author: "author",
    },
    {
      img: "fa fa-check",
      title: "Third Party Tested",
      author: "author",
    },
    {
      img: "fa fa-pagelines",
      title: "Vegan",
      author: "author",
    },
    {
      img: "fa fa-tint",
      title: "No Artificial Flavors or Synthetic Fillers",
      author: "author",
    },
  ];

  return (
    <>
      <img src={greetImg} alt="img" className="greet_img" />
      <div className="main_greet" style={{ width: "100%" }}>
        <h1 className="greetContent">
          <div
            className="greet_content"
            style={{ marginLeft: "20%", width: "100%" }}
          >
            The future
          </div>
          <div className="greet_content">of health</div>
          <div
            className="greet_content"
            style={{
              fontWeight: "normal",
              marginLeft: "30%",
              width: "100%",
            }}
          >
            <em>— is clear.</em>
          </div>
          <Button variant="outlined" color="primary" className={classes.btn}>
            Shop All
          </Button>
        </h1>
      </div>
      <div className={classes.root}>
        <ImageList className={"imageList"} cols={isMobileView ? 1 : 4}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} className="zoom" />
              <ImageListItemBar
                title={item.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="greetingContent mx-auto font-weight-bold">
        <p>
          Daily essentials with good intentions — for living life or creating
          it.
        </p>
        <div className="mx-auto container ">
          <div className={classes.root}>
            <ImageList className={"imageList"} cols={isMobileView ? 2 : 5}>
              {itemData2.map((item) => (
                <ImageListItem key={item.img} className={classes.img}>
                  <i
                    alt={item.title}
                    className={item.img}
                    style={{ fontSize: "30px" }}
                  />

                  <div style={{ fontSize: "small" }}>{item.title}</div>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greeting;
