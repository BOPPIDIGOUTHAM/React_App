 const ImageComponent = (props) => {
    const {src,width,height,alt }=props
    return <img 
    src={src}
      width={width} 
      height={height}
       alt={alt}/>

        
     
    
 };
export default ImageComponent;
