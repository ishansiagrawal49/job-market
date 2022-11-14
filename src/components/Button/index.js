import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder30: "rounded-radius30",
  icbCircleBorder20: "rounded-radius20",
  RoundedBorder4: "rounded-radius4",
  CircleBorder12: "rounded-radius12",
};
const variants = {
  icbFillTeal600: "bg-teal_600",
  icbFillGray200: "bg-gray_200",
  FillTeal600: "bg-teal_600 text-white_A700",
  FillTeal400: "bg-teal_400 text-white_A700",
  FillLightgreenA100: "bg-light_green_A100 text-black_900",
  FillGray101: "bg-gray_101 text-black_900",
  FillGray402: "bg-gray_402 text-black_900",
  OutlineGray400:
    "bg-teal_600 border border-gray_400 border-solid text-white_A700",
  OutlineGray400_1:
    "bg-white_A700 border border-gray_400 border-solid text-black_900",
  OutlineGray301:
    "bg-white_A700 border border-gray_301 border-solid text-teal_600",
  OutlineGray400_2:
    "bg-gray_300 border border-gray_400 border-solid text-black_900",
};
const sizes = {
  smIcn: "lg:p-[5px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  mdIcn: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "lg:p-[5px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  lg: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder30",
    "icbCircleBorder20",
    "RoundedBorder4",
    "CircleBorder12",
  ]),
  variant: PropTypes.oneOf([
    "icbFillTeal600",
    "icbFillGray200",
    "FillTeal600",
    "FillTeal400",
    "FillLightgreenA100",
    "FillGray101",
    "FillGray402",
    "OutlineGray400",
    "OutlineGray400_1",
    "OutlineGray301",
    "OutlineGray400_2",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder4",
  variant: "icbFillTeal600",
  size: "mdIcn",
};

export { Button };
