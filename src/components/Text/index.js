import React from "react";
const variantClasses = {
  h1: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  h2: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  h3: "font-medium lg:text-[12px] xl:text-[15px] text-[17px] 3xl:text-[20px]",
  h4: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  h5: "font-normal lg:text-[10px] xl:text-[13px] text-[15px] 3xl:text-[18px]",
  h6: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body1: "font-normal xl:text-[11px] text-[13px] 3xl:text-[15px] lg:text-[9px]",
  body2: "xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
  body3: "font-normal text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
