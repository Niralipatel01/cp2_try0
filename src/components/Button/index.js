import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder4: "rounded-radius4",
  icbCircleBorder24: "rounded-radius24",
  icbCircleBorder20: "rounded-radius20",
  icbCircleBorder28: "rounded-radius28",
  icbCircleBorder16: "rounded-radius16",
  icbCircleBorder31: "rounded-radius31",
  icbCircleBorder40: "rounded-radius40",
  icbRoundedBorder6: "rounded-radius6665",
  RoundedBorder4: "rounded-radius4",
  CircleBorder24: "rounded-radius24035",
  CircleBorder28: "rounded-radius28",
  CircleBorder20: "rounded-radius20",
  RoundedBorder10: "rounded-radius10",
};
const variants = {
  icbOutlineIndigo51: "border border-indigo_51 border-solid",
  icbFillWhiteA700: "bg-white_A700",
  icbFillGray101: "bg-gray_101",
  icbFillYellow50: "bg-yellow_50",
  icbFillGray102: "bg-gray_102",
  icbFillGray52: "bg-gray_52",
  icbFillGray51: "bg-gray_51",
  icbFillRed52: "bg-red_52",
  icbOutlineGreen700: "border-2 border-green_700 border-solid",
  icbOutlineBlack9000c: "bg-white_A700 shadow-bs",
  icbOutlineWhiteA700:
    "bg-deep_orange_300 outline outline-[4px] outline-white_A700",
  icbOutlineBluegray400:
    "bg-white_A700 outline outline-[0.9px] outline-bluegray_400",
  icbOutlineDeeporange300:
    "bg-white_A700 outline outline-[0.9px] outline-deep_orange_300",
  icbOutlineBluegray800:
    "bg-white_A700 outline outline-[0.9px] outline-bluegray_800",
  icbFillDeeporange300: "bg-deep_orange_300",
  FillGray103: "bg-gray_103 text-indigo_401",
  OutlineBluegray200:
    "bg-white_A700 border border-bluegray_200 border-solid shadow-bs text-bluegray_800",
  FillDeeporange300: "bg-deep_orange_300 text-white_A700",
  FillGray51: "bg-gray_51",
  FillWhiteA700: "bg-white_A700 text-deep_orange_300",
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  OutlineIndigo51: "border border-indigo_51 border-solid text-bluegray_800",
  FillIndigo401: "bg-indigo_401 text-white_A700",
  FillRed51: "bg-red_51 text-deep_orange_300",
  FillBlack90066: "bg-black_900_66 text-white_A700",
  FillRed600: "bg-red_600 text-white_A700",
  FillGreen700: "bg-green_700 text-white_A700",
  FillAmber300: "bg-amber_300 text-bluegray_800",
  OutlineBluegray900:
    "border border-bluegray_900 border-solid text-bluegray_900",
  FillRed40019: "bg-red_400_19 text-red_600",
  FillIndigo40019: "bg-indigo_400_19 text-indigo_401",
  FillDeeporange50: "bg-deep_orange_50 text-deep_orange_300",
};
const sizes = {
  smIcn: "p-[2px]",
  mdIcn: "p-[6px]",
  lgIcn: "p-[10px]",
  xlIcn: "p-[13px]",
  "2xlIcn": "p-[18px]",
  "3xlIcn": "p-[26px] sm:px-[20px]",
  sm: "py-[2px]",
  md: "p-[6px]",
  lg: "pl-[8px] py-[8px]",
  xl: "pr-[11px] py-[11px]",
  "2xl": "p-[11px]",
  "3xl": "p-[14px]",
  "4xl": "p-[17px]",
  "5xl": "pl-[17px] py-[17px]",
  "6xl": "p-[21px] sm:px-[20px]",
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
      } ${sizes[size] || ""} `}
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
    "icbRoundedBorder4",
    "icbCircleBorder24",
    "icbCircleBorder20",
    "icbCircleBorder28",
    "icbCircleBorder16",
    "icbCircleBorder31",
    "icbCircleBorder40",
    "icbRoundedBorder6",
    "RoundedBorder4",
    "CircleBorder24",
    "CircleBorder28",
    "CircleBorder20",
    "RoundedBorder10",
  ]),
  variant: PropTypes.oneOf([
    "icbOutlineIndigo51",
    "icbFillWhiteA700",
    "icbFillGray101",
    "icbFillYellow50",
    "icbFillGray102",
    "icbFillGray52",
    "icbFillGray51",
    "icbFillRed52",
    "icbOutlineGreen700",
    "icbOutlineBlack9000c",
    "icbOutlineWhiteA700",
    "icbOutlineBluegray400",
    "icbOutlineDeeporange300",
    "icbOutlineBluegray800",
    "icbFillDeeporange300",
    "FillGray103",
    "OutlineBluegray200",
    "FillDeeporange300",
    "FillGray51",
    "FillWhiteA700",
    "FillBluegray900",
    "OutlineIndigo51",
    "FillIndigo401",
    "FillRed51",
    "FillBlack90066",
    "FillRed600",
    "FillGreen700",
    "FillAmber300",
    "OutlineBluegray900",
    "FillRed40019",
    "FillIndigo40019",
    "FillDeeporange50",
  ]),
  size: PropTypes.oneOf([
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
    "3xlIcn",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
