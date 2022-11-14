import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray400: "bg-white_A700 outline outline-[1px] outline-gray_400",
  FillGray100: "bg-gray_100",
  OutlineGray401: "bg-white_A700 border-bw05 border-gray_401 border-solid",
  srcOutlineBlack90021: "bg-white_A700 shadow-bs",
};
const shapes = {
  RoundedBorder2: "rounded-radius2",
  CircleBorder22: "rounded-radius22",
  srcRoundedBorder6: "rounded-radius6",
};
const sizes = {
  sm: "lg:pb-[5px] xl:pb-[7px] pb-[8px] 3xl:pb-[9px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[8px] lg:px-[5px] xl:px-[7px] px-[8px] 3xl:px-[9px]",
  md: "lg:p-[9px] xl:px-[11px] px-[13px] 3xl:px-[15px] xl:py-[12px] py-[14px] 3xl:py-[16px]",
  lg: "pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pt-[11px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px]",
  smSrc: "lg:p-[10px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder2",
    "CircleBorder22",
    "srcRoundedBorder6",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGray400",
    "FillGray100",
    "OutlineGray401",
    "srcOutlineBlack90021",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder2",
  variant: "OutlineGray400",
  size: "lg",
};

export { Input };
