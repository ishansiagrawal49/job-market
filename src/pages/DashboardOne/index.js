import React from "react";

import { Column, Input, Img, Row, Text, Button, List, Stack } from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const DashboardOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/viewcandidateview");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] lg:pb-[54px] xl:pb-[67px] 2xl:pb-[76px] 3xl:pb-[91px] w-[100%]">
        <Header className="w-[100%]" onPostopportunitClick={handleNavigate} />
        <Column className="font-lato items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[87%]">
          <Column className="items-center justify-start w-[47%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_501 text-gray_501 w-[100%]"
              wrapClassName="flex w-[100%]"
              name="Content"
              placeholder="Applicant Skills/Name"
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
          <Column className="font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] w-[100%]">
            <Column className="bg-cyan_50 items-center justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius4 w-[100%]">
              <Row className="items-start mb-[1px] w-[100%]">
                <Column className="justify-start w-[33%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Business Development Development (Art & CX)
                  </Text>
                  <Row className="items-center mt-[2px] w-[75%]">
                    <Column className="pr-[3px] py-[3px] w-[47%]">
                      <Text className="columnposted22jan" variant="body1">
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
                  className="font-medium lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[4%]"
                  shape="CircleBorder12"
                  size="sm"
                  variant="FillTeal400"
                >
                  Job
                </Button>
                <Row className="items-start justify-center 3xl:ml-[112px] lg:ml-[66px] xl:ml-[83px] 2xl:ml-[94px] mt-[1px] py-[3px] w-[48%]">
                  <Row className="items-start justify-evenly w-[52%]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className="lightbulb"
                      alt="lightbulb"
                    />
                    <Row className="items-center justify-between mt-[1px] w-[91%]">
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
                  <Row className="items-center justify-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[1px] w-[29%]">
                    <Img
                      src="images/img_camera.svg"
                      className="camera"
                      alt="camera"
                    />
                    <Text className="ml-[4px] columnjobid" variant="body2">
                      ₹ 1,75,000 - 6,50,000 P.A.
                    </Text>
                  </Row>
                  <Text
                    className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-bluegray_400 w-[auto]"
                    variant="body2"
                  >
                    <span className="text-bluegray_400 font-poppins lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                      Openings :{" "}
                    </span>
                    <span className="text-black_900 font-poppins lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                      3
                    </span>
                  </Text>
                </Row>
                <Text
                  className="bg-light_green_A100 flex font-normal items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius50 text-black_900 w-[22px]"
                  variant="body2"
                >
                  A
                </Text>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] search"
                  alt="overflowmenu"
                />
              </Row>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group24.svg')" }}
            >
              <Row className="items-start justify-between lg:mb-[338px] xl:mb-[423px] 2xl:mb-[476px] 3xl:mb-[571px] w-[98%]">
                <Column className="justify-start pt-[1px] w-[28%]">
                  <Row className="items-center w-[23%]">
                    <Img
                      src="images/img_filter.svg"
                      className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:w-[14px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                      alt="filter"
                    />
                    <Text
                      className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Filters
                    </Text>
                  </Row>
                  <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Column className="justify-start rounded-radius4 w-[100%]">
                        <Text className="columntitle" as="h5" variant="h5">
                          Skills
                        </Text>
                        <Input
                          className="font-inter font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_401 text-gray_401 tracking-ls1 w-[100%]"
                          wrapClassName="2xl:mt-[5px] 3xl:mt-[6px] flex lg:mt-[3px] w-[100%] xl:mt-[4px]"
                          name="SourceFormsSt"
                          placeholder="e.g. Pune"
                          suffix={
                            <Img
                              src="images/img_close.svg"
                              className="lg:w-[17px] lg:h-[18px] lg:ml-[24px] lg:mr-[5px] xl:w-[21px] xl:h-[22px] xl:ml-[31px] xl:mr-[7px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[35px] 2xl:mr-[8px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[42px] 3xl:mr-[9px] my-[auto]"
                              alt="close"
                            />
                          }
                          size="sm"
                          variant="OutlineGray401"
                        ></Input>
                      </Column>
                      <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius4 w-[100%]">
                        <Text className="columntitle" as="h5" variant="h5">
                          Location{" "}
                        </Text>
                        <Input
                          className="font-inter font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_401 text-gray_401 tracking-ls1 w-[100%]"
                          wrapClassName="2xl:mt-[5px] 3xl:mt-[6px] flex lg:mt-[3px] w-[100%] xl:mt-[4px]"
                          name="SourceFormsSt One"
                          placeholder="e.g. amazon"
                          suffix={
                            <Img
                              src="images/img_close.svg"
                              className="lg:w-[17px] lg:h-[18px] lg:ml-[24px] lg:mr-[5px] xl:w-[21px] xl:h-[22px] xl:ml-[31px] xl:mr-[7px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[35px] 2xl:mr-[8px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[42px] 3xl:mr-[9px] my-[auto]"
                              alt="close"
                            />
                          }
                          size="sm"
                          variant="OutlineGray401"
                        ></Input>
                      </Column>
                    </Column>
                    <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius4 w-[54%]">
                      <Button
                        className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[55%]"
                        size="lg"
                        variant="OutlineGray400"
                      >
                        Apply{" "}
                      </Button>
                      <Text
                        className="font-medium lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] text-bluegray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Clear all
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="justify-start w-[66%]">
                  <Row className="items-end w-[30%]">
                    <Text
                      className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      100 applicant
                    </Text>
                    <Row className="items-center justify-evenly lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[39%]">
                      <Img
                        src="images/img_trailingicon.svg"
                        className="search"
                        alt="trailingicon"
                      />
                      <Text className="rowtrailingicon" as="h6" variant="h6">
                        Select all
                      </Text>
                    </Row>
                  </Row>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[97%]"
                    orientation="vertical"
                  >
                    <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius4 w-[100%]">
                      <Column className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] my-[1px] w-[69%]">
                        <Column className="justify-start w-[61%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            Sourav Funde
                          </Text>
                          <Row className="items-start mt-[3px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Pune, Maharastra
                            </Text>
                            <Text
                              className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] text-black_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              <span className="text-gray_700 font-poppins font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                Applyed on
                              </span>
                              <span className="text-black_900 font-poppins font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                {" "}
                                : 22 Jan 2022
                              </span>
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[63%]">
                          <Img
                            src="images/img_lightbulb.svg"
                            className="lightbulb"
                            alt="lightbulb One"
                          />
                          <Row className="items-center justify-between xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] mt-[1px] w-[88%]">
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
                        <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                          <Text
                            className="font-poppins mt-[3px] Experience"
                            as="h6"
                            variant="h6"
                          >
                            Question 1
                          </Text>
                          <Text
                            className="font-lato font-normal leading-[133.50%] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic text-gray_700 w-[81%]"
                            variant="body2"
                          >
                            <span className="text-gray_700 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nulla mollis nibh non lacinia blandit. Cras
                              fermentum mi nec nibh porta dolor sit amet,
                              consectetur adipiscing elit.{" "}
                            </span>
                            <span className="text-teal_400 font-semibold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              View all Q&A
                            </span>
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center my-[1px] w-[14%]">
                        <Button
                          className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                          size="md"
                          variant="FillTeal600"
                        >
                          View Profile
                        </Button>
                        <Img
                          src="images/img_rectangle136.png"
                          className="2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[89px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius4 2xl:w-[100px] 3xl:w-[120px] lg:w-[71px] xl:w-[88px]"
                          alt="Rectangle136"
                        />
                      </Column>
                    </Row>
                    <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius4 w-[100%]">
                      <Column className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] my-[1px] w-[69%]">
                        <Column className="justify-start w-[61%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            Sourav Funde
                          </Text>
                          <Row className="items-start mt-[3px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Pune, Maharastra
                            </Text>
                            <Text
                              className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] text-black_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              <span className="text-gray_700 font-poppins font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                Applyed on
                              </span>
                              <span className="text-black_900 font-poppins font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                {" "}
                                : 22 Jan 2022
                              </span>
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[63%]">
                          <Img
                            src="images/img_lightbulb.svg"
                            className="lightbulb"
                            alt="lightbulb Two"
                          />
                          <Row className="items-center justify-between xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] mt-[1px] w-[88%]">
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
                        <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                          <Text
                            className="font-poppins mt-[3px] Experience"
                            as="h6"
                            variant="h6"
                          >
                            Question 1
                          </Text>
                          <Text
                            className="font-lato font-normal leading-[133.50%] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic text-gray_700 w-[81%]"
                            variant="body2"
                          >
                            <span className="text-gray_700 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nulla mollis nibh non lacinia blandit. Cras
                              fermentum mi nec nibh porta dolor sit amet,
                              consectetur adipiscing elit.{" "}
                            </span>
                            <span className="text-teal_400 font-semibold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              View all Q&A
                            </span>
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center my-[1px] w-[14%]">
                        <Button
                          className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                          size="md"
                          variant="FillTeal600"
                        >
                          View Profile
                        </Button>
                        <Img
                          src="images/img_rectangle136.png"
                          className="2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[89px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius4 2xl:w-[100px] 3xl:w-[120px] lg:w-[71px] xl:w-[88px]"
                          alt="Rectangle136 One"
                        />
                      </Column>
                    </Row>
                  </List>
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[351px] xl:mt-[439px] 2xl:mt-[494px] 3xl:mt-[593px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius4 w-[97%]">
                    <Stack className="lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] w-[100%]">
                      <Column className="absolute items-end justify-start right-[0] top-[0] w-[12%]">
                        <Img
                          src="images/img_pngegg921.png"
                          className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[57%]"
                          alt="pngegg921"
                        />
                        <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Button
                            className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                            size="md"
                            variant="FillTeal600"
                          >
                            Quick apply
                          </Button>
                          <Button
                            className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[99%]"
                            size="md"
                            variant="OutlineGray400_1"
                          >
                            Save
                          </Button>
                        </Column>
                      </Column>
                      <Column className="absolute justify-start right-[0] w-[100%]">
                        <Column className="justify-start pb-[1px] pr-[1px] w-[42%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Business Development (Art & CX)
                          </Text>
                          <Text
                            className="font-medium mb-[1px] mt-[4px] text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            TATA Automobiles
                          </Text>
                        </Column>
                        <Row className="items-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] pt-[2px] w-[71%]">
                          <Column className="items-center justify-start mt-[1px] w-[15%]">
                            <Text className="Experience" as="h6" variant="h6">
                              Experience
                            </Text>
                            <Text
                              className="font-normal lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-bluegray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              0-4 Years
                            </Text>
                          </Column>
                          <Column className="justify-start lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] mt-[1px] w-[11%]">
                            <Text className="Experience" as="h6" variant="h6">
                              CTC
                            </Text>
                            <Text
                              className="font-normal lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-bluegray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              0-4 L/Y
                            </Text>
                          </Column>
                          <Column className="justify-start lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] mt-[1px] w-[17%]">
                            <Text className="Experience" as="h6" variant="h6">
                              Employment
                            </Text>
                            <Text
                              className="font-normal lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-bluegray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Full Time
                            </Text>
                          </Column>
                          <Column className="justify-start lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[27%]">
                            <Text className="Experience" as="h6" variant="h6">
                              Location
                            </Text>
                            <Text
                              className="font-normal xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-bluegray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Pune, Maharastra
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[64%]">
                          <Text
                            className="font-medium mt-[1px] text-gray_700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            <span className="text-gray_700 font-poppins font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                              Posted{" "}
                            </span>
                            <span className="text-gray_700 font-poppins font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                              :{" "}
                            </span>
                            <span className="text-black_900 font-poppins font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                              3 days ago
                            </span>
                          </Text>
                          <Text
                            className="font-medium lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] text-black_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            <span className="text-gray_700 font-poppins font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                              Job applicants
                            </span>
                            <span className="text-black_900 font-poppins font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                              {" "}
                              : 223
                            </span>
                          </Text>
                          <Text
                            className="font-medium lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] text-black_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            <span className="text-gray_700 font-poppins font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                              Apply by
                            </span>
                            <span className="text-black_900 font-poppins font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                              {" "}
                              : 22 Jan 2022
                            </span>
                          </Text>
                        </Row>
                        <Row className="items-end justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                          <Column className="justify-end lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[75%]">
                            <Row className="items-start mr-[auto] w-[76%]">
                              <Text
                                className="mt-[1px] Experience"
                                as="h6"
                                variant="h6"
                              >
                                key Skills
                              </Text>
                              <Text
                                className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] not-italic text-bluegray_900 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Automation Testing , Manual Testing , Java
                              </Text>
                            </Row>
                            <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                              <Text
                                className="font-poppins mt-[4px] Experience"
                                as="h6"
                                variant="h6"
                              >
                                Job description
                              </Text>
                              <Text
                                className="font-lato font-medium leading-[133.50%] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] text-gray_700 w-[76%]"
                                variant="body2"
                              >
                                <span className="text-gray_700 font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nulla mollis nibh non lacinia
                                  blandit. Cras fermentum mi nec nibh porta
                                </span>
                                <span className="text-gray_700 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                                  .....
                                </span>
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-center justify-between lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] py-[3px] w-[16%]">
                            <Column className="items-center mb-[1px] w-[85%]">
                              <Text
                                className="font-medium text-teal_600 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                View Details
                              </Text>
                            </Column>
                            <Img
                              src="images/img_arrowdown_10X11.svg"
                              className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[10%]"
                              alt="arrowdown"
                            />
                          </Row>
                        </Row>
                      </Column>
                    </Stack>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DashboardOnePage;
