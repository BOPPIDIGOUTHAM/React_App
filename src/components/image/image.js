 const ImageComponent = (props) => {
  console.log(props,"prop");
    const {src,width,height,alt }=props
    return <img {...props} />

     
     };
export default ImageComponent;
