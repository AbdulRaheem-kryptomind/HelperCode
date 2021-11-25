import React from "react";
import styles from "./genericInput.module.scss";

const GenericInput = ({
  label,
  placeholder,
  type,
  withRightIcon,
  name,
  icon,
  onChange,
  disabled,
  color
}) => {
  return (
    <div className={styles.wrapper}>
      {label.length >0&&<label className={styles.label}>{label}</label>}
      <div className={styles.inputContainer} style={{background:`${color?.length?color:""}`}}>
        {icon && (
          <div className={styles.imgContainer}>
            <img className={styles.leftIcon} src={icon} alt={"leftIcon"} />
          </div>
        )}
        <input
          type={type}
          name={name}
          className={styles.input}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          style={{background:`${color?.length?color:""}`}}
        />
        {withRightIcon && (
          <img className={styles.withRightIcon} src={withRightIcon} alt={"rightIcon"} />
        )}
      </div>
    </div>
  );
};

export default GenericInput;
