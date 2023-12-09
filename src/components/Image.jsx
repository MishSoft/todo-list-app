import { useEffect } from "react";
import { useState } from "react";

const headerImages = [
  "https://s3-alpha-sig.figma.com/img/6a9a/a261/87c71038638480240b581fd1875afe7e?Expires=1702252800&Signature=gHN4CvtNujV8I08JSWzwDD2oTemfhU5h8BdxPx2mYqsN8DV6JYG5GROkfi8ZUPEHSAQlySs8TPL~7bA4ReM0NwDA9PeVBH2NZES~scwCedrj1k4KRe6wBEc3vs07HZL~Kjeys0ApI1kxTCyU9COOASINxdH9uYe4Jocp77VXzNNqqvHoVm3Y39noHa1v0F-dwHJlmp-DzG2wQz78ZrI2iXEiV81clhpS0cOCwadMk8O~EcHDDfImqOa6eAUp6AHgZs6qDSbv40YEfrHadl1OiLw-YDCCAGsCjJkOIbNTnicpAMgSk76AAKIU~k7KFKWqZ2ySuZZYEFUBRw5QoM~jWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg",
  "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg",
];

function Image() {
  const [caughtImage, setCaughImage] = useState(headerImages[0]);

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex >= headerImages.length - 1) {
        currentIndex = 0;
        setCaughImage(headerImages[currentIndex]);
      } else {
        currentIndex++;
        setCaughImage(headerImages[currentIndex]);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [caughtImage]);

  return (
    <div
      className="image"
      style={{ backgroundImage: `url(${caughtImage})` }}
    ></div>
  );
}

export default Image;
