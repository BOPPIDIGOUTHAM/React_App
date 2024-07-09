import"./button.css";
import styles from "./button.modules.css";
 const ButtonComponent=(prop)=>{
  const buttonStyle={color:"red",backgroundColor:"green"};
const{text,bgColor,onPress,width,height}=prop
return(
    <button
    onClick={onPress}
    className={styles.Buttoncss}
    style={{backgroundColor:bgColor,height:height, width:width}}
    >
        {text}
    </button>
)

};
export default ButtonComponent;