import React from "react";

import { Column, Stack, Img, Row, Text, Line, Button } from "components";

const ViewCandidateViewPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-poppins items-center justify-start mx-[auto] lg:pb-[45px] xl:pb-[56px] 2xl:pb-[64px] 3xl:pb-[76px] w-[100%]">
        <Stack className="bg-white_A700 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:px-[13px] xl:px-[16px] 2xl:px-[19px] 3xl:px-[22px] shadow-bs1 w-[100%]">
          <Stack className="absolute lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] inset-y-[0] left-[6%] my-[auto] w-[9%]">
            <Img
              src="images/img_image15.png"
              className="imageFifteen"
              alt="imageFifteen"
            />
          </Stack>
        </Stack>
        <Stack className="lg:h-[1033px] xl:h-[1292px] 2xl:h-[1454px] 3xl:h-[1744px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[87%]">
          <Stack
            className="absolute bg-cover bg-repeat lg:h-[1033px] xl:h-[1292px] 2xl:h-[1454px] 3xl:h-[1744px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group6357039.svg')" }}
          >
            <Img
              src="images/img_union.svg"
              className="absolute xl:h-[1248px] 2xl:h-[1403px] 3xl:h-[1684px] lg:h-[997px] inset-y-[0] my-[auto] right-[2%] w-[63%]"
              alt="Union"
            />
          </Stack>
          <Column className="absolute justify-start left-[2%] top-[1%] w-[91%]">
            <Row className="items-center w-[73%]">
              <Img
                src="images/img_pngegg921.png"
                className="lg:h-[45px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] lg:w-[44px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                alt="pngegg921"
              />
              <Column className="items-center lg:ml-[270px] xl:ml-[338px] 2xl:ml-[380px] 3xl:ml-[456px] w-[13%]">
                <Text
                  className="font-medium text-bluegray_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Job details
                </Text>
                <Line className="bg-cyan_400 h-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rotate-[1deg] w-[100%]" />
              </Column>
              <Text
                className="font-normal lg:ml-[54px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] not-italic text-gray_300 w-[auto]"
                as="h1"
                variant="h1"
              >
                Culture
              </Text>
              <Text
                className="font-normal 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] not-italic text-gray_300 w-[auto]"
                as="h1"
                variant="h1"
              >
                Jobs
              </Text>
            </Row>
            <Row className="items-start justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
              <Column className="justify-start w-[28%]">
                <Column className="justify-start w-[96%]">
                  <Column className="justify-start w-[99%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Business Development (Art & CX)
                    </Text>
                    <Text
                      className="font-medium text-bluegray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      TATA Automobiles
                    </Text>
                  </Column>
                  <Row className="items-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[55%]">
                    <Img
                      src="images/img_location.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] mb-[1px] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                      alt="location"
                    />
                    <Text
                      className="font-normal ml-[4px] mt-[2px] not-italic text-gray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Mumbai,Maharastra
                    </Text>
                  </Row>
                </Column>
                <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[72%]">
                  <Img
                    src="images/img_trash.svg"
                    className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="trash"
                  />
                  <Text
                    className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] columnjobid"
                    as="h6"
                    variant="h6"
                  >
                    2 to 4 year(s) of experience
                  </Text>
                </Row>
                <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
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
                    <Row className="items-center justify-end ml-[auto] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
                      <Text
                        className="bg-gray_101 font-normal not-italic lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] py-[3px] rounded-radius12 text-black_900 w-[185px]"
                        variant="body2"
                      >
                        English Proficiency (Spoken)
                      </Text>
                      <Button
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[25%]"
                        shape="CircleBorder12"
                        size="md"
                        variant="FillGray101"
                      >
                        10 more
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Row className="items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[63%]">
                  <Img
                    src="images/img_camera.svg"
                    className="camera"
                    alt="camera"
                  />
                  <Text className="rowcamera" as="h6" variant="h6">
                    ₹ 1,75,000 - 6,50,000 P.A.
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[85%]">
                  <Text
                    className="font-medium text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Openings :{" "}
                    </span>
                    <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      3
                    </span>
                  </Text>
                  <Text
                    className="font-medium lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] mt-[1px] text-black_900 w-[auto]"
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
                <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[93%]">
                  <Text
                    className="font-medium mt-[1px] text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      posted :{" "}
                    </span>
                    <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      3 days ago
                    </span>
                  </Text>
                  <Text
                    className="font-medium lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Job applicants :{" "}
                    </span>
                    <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      223
                    </span>
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[90%]">
                  <Text
                    className="font-medium text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Employment :{" "}
                    </span>
                    <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Full time
                    </span>
                  </Text>
                  <Text
                    className="font-medium lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Joining :{" "}
                    </span>
                    <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      23 Oct
                    </span>
                  </Text>
                </Row>
                <Button
                  className="font-medium lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[60%]"
                  size="lg"
                  variant="FillTeal600"
                >
                  Apply now{" "}
                </Button>
              </Column>
              <Column className="justify-end mt-[3px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[61%]">
                <Column className="justify-start w-[89%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Job description
                  </Text>
                  <Text className="description5" as="h6" variant="h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla mollis nibh non lacinia blandit. Cras fermentum mi nec
                    nibh porta, ut auctor dui commodo. In a vulputate dui. Ut
                    imperdiet ante enim, quis consequat sem auctor ut. Fusce in
                    commodo nisi.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla mollis nibh non lacinia blandit. Cras
                    fermentum mi nec nibh porta, ut auctor dui commodo. In a
                    vulputate dui. Ut imperdiet ante enim, quis consequat sem
                    auctor ut. Fusce in commodo nisi.{" "}
                  </Text>
                </Column>
                <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[89%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Responsibilities
                  </Text>
                  <Text className="description5" as="h6" variant="h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla mollis nibh non lacinia blandit. Cras fermentum mi nec
                    nibh porta, ut auctor dui commodo. In a vulputate dui. Ut
                    imperdiet ante enim, quis consequat sem auctor ut. Fusce in
                    commodo nisi.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla mollis nibh non lacinia blandit. Cras
                    fermentum mi nec nibh porta, ut auctor dui commodo. In a
                    vulputate dui. Ut imperdiet ante enim, quis consequat sem
                    auctor ut. Fusce in commodo nisi.{" "}
                  </Text>
                </Column>
                <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[89%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Requirements
                  </Text>
                  <Text className="description5" as="h6" variant="h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla mollis nibh non lacinia blandit. Cras fermentum mi nec
                    nibh porta, ut auctor dui commodo. In a vulputate dui. Ut
                    imperdiet ante enim, quis consequat sem auctor ut. Fusce in
                    commodo nisi.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla mollis nibh non lacinia blandit. Cras
                    fermentum mi nec nibh porta, ut auctor dui commodo. In a
                    vulputate dui. Ut imperdiet ante enim, quis consequat sem
                    auctor ut. Fusce in commodo nisi.{" "}
                  </Text>
                </Column>
                <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[89%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Desired Candidate profile
                  </Text>
                  <Text className="description5" as="h6" variant="h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla mollis nibh non lacinia blandit. Cras fermentum mi nec
                    nibh porta, ut auctor dui commodo. In a vulputate dui. Ut
                    imperdiet ante enim, quis consequat sem auctor ut. Fusce in
                    commodo nisi.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla mollis nibh non lacinia blandit. Cras
                    fermentum mi nec nibh porta, ut auctor dui commodo. In a
                    vulputate dui. Ut imperdiet ante enim, quis consequat sem
                    auctor ut. Fusce in commodo nisi.{" "}
                  </Text>
                </Column>
                <Text
                  className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-black_900 w-[18%]"
                  as="h4"
                  variant="h4"
                >
                  Role
                  <br />
                  UI / UX Designer
                </Text>
                <Text
                  className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-black_900 w-[16%]"
                  as="h4"
                  variant="h4"
                >
                  Industry Type
                  <br />
                  Design
                </Text>
                <Text
                  className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-black_900 w-[29%]"
                  as="h4"
                  variant="h4"
                >
                  Functional Area
                  <br />
                  UX, Design & Architecture
                </Text>
                <Text
                  className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-black_900 w-[24%]"
                  as="h4"
                  variant="h4"
                >
                  Employment Type
                  <br />
                  Full Time, Permanent
                </Text>
                <Text
                  className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-black_900 w-[16%]"
                  as="h4"
                  variant="h4"
                >
                  Role Category
                  <br />
                  UI / UX
                </Text>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Education
                  </Text>
                  <Text
                    className="xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] Experience"
                    as="h6"
                    variant="h6"
                  >
                    <span className="text-gray_700 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      UG :{" "}
                    </span>
                    <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      B.Tech/B.E. in Computers, B.Des. in Any Specialization
                    </span>
                  </Text>
                  <Text
                    className="font-normal leading-[normal] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-gray_700 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    <span className="text-gray_700 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      PG :{" "}
                    </span>
                    <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      M.Des. in Any Specialization, MCM in Computers and
                      Management, MCA in Computers, M.Tech in Computers,
                      MS/M.Sc(Science) in Computers
                    </span>
                  </Text>
                  <Text
                    className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] Experience"
                    as="h6"
                    variant="h6"
                  >
                    <span className="text-gray_700 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Doctorate :{" "}
                    </span>
                    <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Ph.D/Doctorate in Computers
                    </span>
                  </Text>
                </Column>
                <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[69%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Key Skills
                  </Text>
                  <Row className="items-center justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                    <Text
                      className="bg-gray_300 border border-gray_400 border-solid font-normal not-italic pb-[3px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius14 text-black_900 w-[142px]"
                      as="h6"
                      variant="h6"
                    >
                      Email Marketing
                    </Text>
                    <Text
                      className="bg-gray_300 border border-gray_400 border-solid font-normal not-italic lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] py-[3px] rounded-radius14 text-black_900 w-[224px]"
                      as="h6"
                      variant="h6"
                    >
                      English Proficiency (Spoken)
                    </Text>
                    <Button
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[19%]"
                      shape="CircleBorder12"
                      size="md"
                      variant="OutlineGray400_2"
                    >
                      MS-Excel
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Row>
            <Button
              className="font-medium lg:ml-[316px] xl:ml-[395px] 2xl:ml-[445px] 3xl:ml-[534px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[15%]"
              size="lg"
              variant="FillTeal600"
            >
              Apply{" "}
            </Button>
          </Column>
        </Stack>
        <Column className="items-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] 3xl:px-[109px] lg:px-[64px] xl:px-[80px] 2xl:px-[91px] w-[100%]">
          <Column className="bg-white_A700 items-center justify-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius8 shadow-bs5 w-[69%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius4 w-[98%]">
              <Img
                src="images/img_ellipse1.png"
                className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                alt="EllipseOne"
              />
              <Column className="lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[32%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Sanskruti Wagh
                  </Text>
                  <Text
                    className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] Experience"
                    as="h6"
                    variant="h6"
                  >
                    Hiring Manager at Shades of Web
                  </Text>
                </Column>
                <Row className="items-start mt-[4px] pr-[1px] pt-[1px] w-[84%]">
                  <Img
                    src="images/img_mail_20X20.svg"
                    className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="mail"
                  />
                  <Text className="rowmail" as="h6" variant="h6">
                    Asuhadiuh@gmail.com
                  </Text>
                </Row>
                <Row className="items-start mt-[4px] w-[87%]">
                  <Img
                    src="images/img_location_20X20.svg"
                    className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="location One"
                  />
                  <Text className="rowmail" as="h6" variant="h6">
                    PUNE, Maharashtra, India
                  </Text>
                </Row>
              </Column>
            </Row>
          </Column>
          <Row className="items-center justify-end lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[35%]">
            <Button
              className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[41%]"
              size="lg"
              variant="OutlineGray301"
            >
              Save draft
            </Button>
            <Button
              className="font-medium lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[55%]"
              size="lg"
              variant="FillTeal600"
            >
              Post Oppurtunity
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ViewCandidateViewPage;
