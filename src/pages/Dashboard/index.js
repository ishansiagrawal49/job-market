import React from "react";

import { Column, Input, Img, Row, Text, List, Button } from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/dashboardone");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] xl:pb-[1185px] 2xl:pb-[1333px] 3xl:pb-[1600px] lg:pb-[947px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header
            className="w-[100%]"
            onPostopportunitClick={handleNavigate1}
          />
          <Column className="font-lato items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[88%]">
            <Column className="items-center justify-start w-[46%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_501 text-gray_501 w-[100%]"
                wrapClassName="flex w-[100%]"
                name="Content"
                placeholder="Skills"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer bg-teal_600 lg:w-[17px] lg:h-[18px] lg:mx-[22px] xl:w-[21px] xl:h-[22px] xl:mx-[27px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mx-[31px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mx-[37px] rounded-radius4 my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#939496"
                    />
                  ) : (
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer bg-teal_600 lg:w-[17px] lg:h-[18px] lg:mx-[22px] xl:w-[21px] xl:h-[22px] xl:mx-[27px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mx-[31px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mx-[37px] rounded-radius4 my-[auto]"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder6"
                size="smSrc"
                variant="srcOutlineBlack90021"
              ></Input>
            </Column>
            <Row className="font-poppins items-center justify-between lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
              <Column className="w-[32%]">
                <div className="bg-white_A700 lg:h-[176px] xl:h-[220px] 2xl:h-[248px] 3xl:h-[297px] rounded-radius4 shadow-bs2 w-[99%]"></div>
                <Text
                  className="font-medium lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] text-bluegray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Interactions
                </Text>
                <div className="bg-white_A700 lg:h-[201px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rounded-radius4 shadow-bs2 w-[99%]"></div>
              </Column>
              <Column className="w-[66%]">
                <Text
                  className="font-medium text-bluegray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Posted Oppurtunities
                </Text>
                <Column className="bg-white_A700 items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius4 shadow-bs2 w-[100%]">
                  <List
                    className="gap-[0] 3xl:mb-[117px] lg:mb-[69px] xl:mb-[87px] 2xl:mb-[98px] min-h-[auto] mt-[2px] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[100%]">
                      <Column className="items-center justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Column className="justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text
                              className="text-bluegray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Business Development Development (Art & CX)
                            </Text>
                            <Row className="items-center mt-[2px] w-[75%]">
                              <Column className="pr-[3px] py-[3px] w-[47%]">
                                <Text
                                  className="columnposted22jan"
                                  variant="body1"
                                >
                                  <span className="text-bluegray_400 font-poppins font-normal lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                                    Posted :
                                  </span>
                                  <span className="text-bluegray_900 font-poppins font-normal lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                                    {" "}
                                    22 Jan 2022
                                  </span>
                                </Text>
                              </Column>
                              <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[47%]">
                                <Text
                                  className="not-italic text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  <span className="text-bluegray_400 font-poppins font-normal lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                                    Deadline :
                                  </span>
                                  <span className="text-bluegray_900 font-poppins font-normal lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                                    {" "}
                                    22 Jan 2022
                                  </span>
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Button
                            className="font-medium lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[7%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="FillTeal400"
                          >
                            Job
                          </Button>
                          <Button
                            className="font-normal lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[8%]"
                            shape="CircleBorder12"
                            size="md"
                            variant="FillLightgreenA100"
                          >
                            Active
                          </Button>
                          <Button
                            className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[19%]"
                            size="sm"
                            variant="FillTeal600"
                          >
                            View Applicants(100)
                          </Button>
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] search"
                            alt="overflowmenu"
                          />
                        </Row>
                        <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <Row className="items-start justify-between py-[3px] w-[88%]">
                            <Row className="items-start justify-between w-[46%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="lightbulb"
                                alt="lightbulb"
                              />
                              <Row className="items-center justify-between mt-[1px] w-[88%]">
                                <Text className="Group216" variant="body2">
                                  Email Marketing
                                </Text>
                                <Button
                                  className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[25%]"
                                  shape="CircleBorder12"
                                  size="md"
                                  variant="FillGray101"
                                >
                                  MS-Excel
                                </Button>
                                <Text className="Group219" variant="body2">
                                  Google Ads
                                </Text>
                              </Row>
                            </Row>
                            <Row className="items-start justify-center mt-[1px] w-[29%]">
                              <Img
                                src="images/img_camera.svg"
                                className="camera"
                                alt="camera"
                              />
                              <Text className="rowcamera" as="h6" variant="h6">
                                ₹ 1,75,000 - 6,50,000 P.A.
                              </Text>
                            </Row>
                            <Text className="rowlightbulb" as="h6" variant="h6">
                              <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                Openings :{" "}
                              </span>
                              <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                3
                              </span>
                            </Text>
                          </Row>
                          <Img
                            src="images/img_search_bluegray_800.svg"
                            className="search"
                            alt="search"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[100%]">
                      <Column className="items-center justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] w-[99%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Column className="justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text
                              className="text-bluegray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Business Development Development (Art & CX)
                            </Text>
                            <Row className="items-center mt-[2px] w-[75%]">
                              <Column className="pr-[3px] py-[3px] w-[47%]">
                                <Text
                                  className="columnposted22jan"
                                  variant="body1"
                                >
                                  <span className="text-bluegray_400 font-poppins font-normal lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                                    Posted :
                                  </span>
                                  <span className="text-bluegray_900 font-poppins font-normal lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                                    {" "}
                                    22 Jan 2022
                                  </span>
                                </Text>
                              </Column>
                              <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[47%]">
                                <Text
                                  className="not-italic text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  <span className="text-bluegray_400 font-poppins font-normal lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                                    Deadline :
                                  </span>
                                  <span className="text-bluegray_900 font-poppins font-normal lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                                    {" "}
                                    22 Jan 2022
                                  </span>
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Text
                            className="bg-teal_400 font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] pb-[3px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius12 text-white_A700 w-[84px]"
                            variant="body2"
                          >
                            Internship
                          </Text>
                          <Button
                            className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[8%]"
                            shape="CircleBorder12"
                            size="md"
                            variant="FillGray402"
                          >
                            Closed
                          </Button>
                          <Button
                            className="font-medium lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[19%]"
                            size="sm"
                            variant="FillTeal600"
                          >
                            View Applicants(100)
                          </Button>
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="search"
                            alt="overflowmenu One"
                          />
                        </Row>
                        <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <Row className="items-start justify-between py-[3px] w-[88%]">
                            <Row className="items-start justify-between w-[46%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="lightbulb"
                                alt="lightbulb One"
                              />
                              <Row className="items-center justify-between mt-[1px] w-[88%]">
                                <Text className="Group216" variant="body2">
                                  Email Marketing
                                </Text>
                                <Button
                                  className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[25%]"
                                  shape="CircleBorder12"
                                  size="sm"
                                  variant="FillGray101"
                                >
                                  MS-Excel
                                </Button>
                                <Text className="Group219" variant="body2">
                                  Google Ads
                                </Text>
                              </Row>
                            </Row>
                            <Row className="items-start justify-center mt-[1px] w-[29%]">
                              <Img
                                src="images/img_camera.svg"
                                className="camera"
                                alt="camera One"
                              />
                              <Text className="rowcamera" as="h6" variant="h6">
                                ₹ 1,75,000 - 6,50,000 P.A.
                              </Text>
                            </Row>
                            <Text className="rowlightbulb" as="h6" variant="h6">
                              <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                Openings :{" "}
                              </span>
                              <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                3
                              </span>
                            </Text>
                          </Row>
                          <Img
                            src="images/img_search_bluegray_800.svg"
                            className="search"
                            alt="search One"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[100%]">
                      <Column className="items-center justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Column className="justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[52%]">
                            <Text
                              className="text-bluegray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Business Development Development (Art & CX)
                            </Text>
                            <Row className="items-center mt-[2px] w-[75%]">
                              <Column className="pr-[3px] py-[3px] w-[47%]">
                                <Text
                                  className="columnposted22jan"
                                  variant="body1"
                                >
                                  <span className="text-bluegray_400 font-poppins font-normal lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                                    Posted :
                                  </span>
                                  <span className="text-bluegray_900 font-poppins font-normal lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                                    {" "}
                                    22 Jan 2022
                                  </span>
                                </Text>
                              </Column>
                              <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[47%]">
                                <Text
                                  className="not-italic text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  <span className="text-bluegray_400 font-poppins font-normal lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                                    Deadline :
                                  </span>
                                  <span className="text-bluegray_900 font-poppins font-normal lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                                    {" "}
                                    22 Jan 2022
                                  </span>
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Button
                            className="font-medium lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[7%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="FillTeal400"
                          >
                            Job
                          </Button>
                          <Button
                            className="font-normal lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[8%]"
                            shape="CircleBorder12"
                            size="md"
                            variant="FillLightgreenA100"
                          >
                            Active
                          </Button>
                          <Button
                            className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[19%]"
                            size="sm"
                            variant="FillTeal600"
                          >
                            View Applicants(100)
                          </Button>
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] search"
                            alt="overflowmenu Two"
                          />
                        </Row>
                        <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <Row className="items-start justify-between py-[3px] w-[88%]">
                            <Row className="items-start justify-between w-[46%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="lightbulb"
                                alt="lightbulb Two"
                              />
                              <Row className="items-center justify-between mt-[1px] w-[88%]">
                                <Text className="Group216" variant="body2">
                                  Email Marketing
                                </Text>
                                <Button
                                  className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[25%]"
                                  shape="CircleBorder12"
                                  size="sm"
                                  variant="FillGray101"
                                >
                                  MS-Excel
                                </Button>
                                <Text className="Group219" variant="body2">
                                  Google Ads
                                </Text>
                              </Row>
                            </Row>
                            <Row className="items-start justify-center mt-[1px] w-[29%]">
                              <Img
                                src="images/img_camera.svg"
                                className="camera"
                                alt="camera Two"
                              />
                              <Text className="rowcamera" as="h6" variant="h6">
                                ₹ 1,75,000 - 6,50,000 P.A.
                              </Text>
                            </Row>
                            <Text className="rowlightbulb" as="h6" variant="h6">
                              <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                Openings :{" "}
                              </span>
                              <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                3
                              </span>
                            </Text>
                          </Row>
                          <Img
                            src="images/img_search_bluegray_800.svg"
                            className="search"
                            alt="search Two"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </List>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DashboardPage;
