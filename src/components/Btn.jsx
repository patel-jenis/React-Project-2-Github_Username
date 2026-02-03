import domtoimage from "dom-to-image";

const Btn = ({ title, url }) => {

  const download = () => {
    domtoimage.toPng(document.getElementById("card"))
      .then((dataUrl) => {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "card.png";
        a.click();
      });
  };

  if (title === "Download Card") {
    return (
      <a onClick={download} className={`btn btn-darks`} >
        {title}
      </a>
    );
  }

  return <a href={url} target="_blank" className={`btn btn-darks`}>{title}</a>;
};


export default Btn