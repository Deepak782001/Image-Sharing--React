import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import axios from "axios";
import "./ImageDisplay.css";

const ImageDisplay = () => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: {
              client_id: "bNdf1QtJsMVFZxflpm4FmtUVBl9OcKLW8ce732zxFQU",
              orientation: "landscape",
            },
          }
        );

        const { urls } = response.data;
        setImageURL(urls.regular);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchRandomImage();
  }, []);

  const shareText = "Check out this random image!";

  return (
    <div>
      {imageURL && <img src={imageURL} alt="Random " />}
      <div>
        <FacebookShareButton
          style={{
            textalign: "center",
            margin: "auto",
            display: "flex",
            border: "1px solid black",
            backgroundColor: "blue",
            color: "white",
            marginTop: "2%"
          }}
          url={imageURL}
          quote={shareText}
        >
          Share on Facebook
        </FacebookShareButton>
      </div>

      <div>
        <TwitterShareButton
          style={{
            textalign: "center",
            margin: "auto",
            display: "flex",
            border: "1px solid black",
            backgroundColor: "skyblue",
            color: "white",
            marginTop: "0.5%"
          }}
          url={imageURL}
          title={shareText}
        >
          Share on Twitter
        </TwitterShareButton>
      </div>

      <div>
        <WhatsappShareButton
          style={{
            textalign: "center",
            margin: "auto",
            display: "flex",
            border: "1px solid black",
            backgroundColor: "green",
            color: "white",
            marginTop: "0.5%"
          }}
          url={imageURL}
          title={shareText}
        >
          Share on WhatsApp
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ImageDisplay;
