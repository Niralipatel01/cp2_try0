import React from "react";

import { Img, Text, Line, SelectBox, Button } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const EKYCScanIDCardAddimagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[241px]">
            <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] mt-[4px] w-[50%]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[492px] md:w-[100%] sm:w-[100%] w-[88%]">
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[71%]"
                  onClick={() => navigate("/dashboardone")}
                >
                  <Img
                    src="images/img_grid_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="grid"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dashboard
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[66%]"
                  onClick={() => navigate("/customer")}
                >
                  <Img
                    src="images/img_user.svg"
                    className="h-[20px] w-[20px]"
                    alt="user"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Customer
                  </Text>
                </div>
                <div className="flex flex-row gap-[34px] items-center justify-between mt-[32px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-end justify-start w-[auto]">
                    <Img
                      src="images/img_sort.svg"
                      className="h-[20px] mb-[2px] w-[20px]"
                      alt="sort"
                    />
                    <Text
                      className="font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Message
                    </Text>
                  </div>
                  <Text
                    className="bg-red_600 flex font-bold h-[24px] items-center justify-center rounded-radius50 text-center text-white_A700 w-[24px]"
                    variant="body1"
                  >
                    3
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[32px] md:w-[100%] sm:w-[100%] w-[39%]"
                  onClick={() => navigate("/filemanagementdefault")}
                >
                  <Img
                    src="images/img_folder.svg"
                    className="h-[20px] w-[20px]"
                    alt="folder"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    File
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-start justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[63%]"
                  onClick={() => navigate("/calendermonth")}
                >
                  <Img
                    src="images/img_calendar.svg"
                    className="h-[20px] w-[20px]"
                    alt="calendar"
                  />
                  <Text
                    className="font-medium mt-[3px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Calender
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-end justify-start mt-[34px] md:w-[100%] sm:w-[100%] w-[46%]"
                  onClick={() => navigate("/shippinginfo")}
                >
                  <Img
                    src="images/img_trash.svg"
                    className="h-[20px] mb-[2px] w-[20px]"
                    alt="trash"
                  />
                  <Text
                    className="font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Shop
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[43%]"
                  onClick={() => navigate("/cartproductlist")}
                >
                  <Img
                    src="images/img_mail_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="mail"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Cart
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[13px] items-end justify-start mt-[31px] md:w-[100%] sm:w-[100%] w-[62%]"
                  onClick={() => navigate("/settings")}
                >
                  <div className="bg-white_A700 flex flex-col h-[26px] items-center justify-start p-[3px] w-[26px]">
                    <div className="bg-deep_orange_300 h-[20px] rounded-radius50 w-[20px]"></div>
                  </div>
                  <Text
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_51 flex-1 md:h-[100%] sm:h-[100%] h-[953px] mb-[71px] w-[100%]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] sm:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex flex-col items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[35px] items-center justify-start mb-[72px] mt-[15px] w-[100%]">
                <div className="flex flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-poppins mb-[2px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    eKYC
                  </Text>
                  <Text
                    className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Setting/
                    </span>
                    <span className="text-bluegray_800 text-[16px]"> eKYC</span>
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[32px] sm:px-[20px] rounded-radius4 shadow-bs w-[100%]">
                  <div className="flex flex-col items-center justify-start mb-[16px] mt-[20px] w-[100%]">
                    <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[29%]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Scan ID Card
                      </Text>
                      <Text
                        className="font-normal leading-[22.00px] not-italic text-bluegray_400 text-center w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Please ensure that the image that you uploaded is clear
                        and not blurred
                      </Text>
                    </div>
                    <SelectBox
                      className="font-medium mt-[24px] text-[16px] text-bluegray_800 text-left md:w-[100%] sm:w-[100%] w-[31%]"
                      placeholderClassName="text-bluegray_800"
                      name="group One"
                      placeholder="ID Card"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_900.svg"
                          className="h-[6px] mr-[24px] w-[11px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder4"
                      size="lg"
                      variant="OutlineIndigo51_1"
                    ></SelectBox>
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-between mt-[40px] w-[100%]">
                      <div className="border-2 border-dashed border-indigo_51 flex md:flex-1 sm:flex-1 flex-col items-center justify-start p-[34px] sm:px-[20px] rounded-radius4 md:w-[100%] sm:w-[100%] w-[auto]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col items-end justify-end p-[27px] sm:px-[20px] rounded-radius16 w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group16071.png')",
                          }}
                        >
                          <Button
                            className="flex h-[54px] items-center justify-center mb-[3px] mt-[180px] w-[54px]"
                            shape="icbCircleBorder28"
                            size="xlIcn"
                            variant="icbOutlineBlack9000c"
                          >
                            <Img
                              src="images/img_trash_54X54.svg"
                              className="h-[24px]"
                              alt="trash One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="h-[359px] md:h-[auto] sm:h-[auto] relative sm:w-[100%] w-[auto]">
                        <Img
                          src="images/img_image6.png"
                          className="h-[291px] m-[auto] object-cover rounded-radius16 w-[86%]"
                          alt="imageSix"
                        />
                        <div className="absolute border-2 border-dashed border-indigo_51 flex flex-col h-[max-content] inset-[0] items-end justify-center m-[auto] p-[64px] sm:px-[20px] md:px-[40px] rounded-radius4 w-[100%]">
                          <Button
                            className="flex h-[54px] items-center justify-center mt-[177px] w-[54px]"
                            shape="icbCircleBorder28"
                            size="xlIcn"
                            variant="icbOutlineBlack9000c"
                          >
                            <Img
                              src="images/img_trash_54X54.svg"
                              className="h-[24px]"
                              alt="trash Two"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer font-bold min-w-[270px] mt-[58px] text-[14px] text-center text-white_A700 w-[auto]"
                      onClick={() => navigate("/ekycintroductionsteptwo")}
                      shape="CircleBorder24"
                      size="4xl"
                      variant="FillDeeporange300"
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EKYCScanIDCardAddimagePage;
