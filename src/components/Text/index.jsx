import React from "react";

const sizeClasses = {
  txtPoppinsMedium20Black900: "font-medium font-poppins",
  txtPoppinsMedium15WhiteA700: "font-medium font-poppins",
  txtPoppinsBold30: "font-bold font-poppins",
  txtPoppinsMedium20GreenA700: "font-medium font-poppins",
  txtPoppinsMedium25: "font-medium font-poppins",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsRegular30: "font-normal font-poppins",
  txtPoppinsMedium25Red600: "font-medium font-poppins",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtPoppinsMedium25Black90001: "font-medium font-poppins",
  txtPoppinsMedium25Blue700: "font-medium font-poppins",
  txtPoppinsMedium15Blue700: "font-medium font-poppins",
  txtPoppinsMedium15: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
