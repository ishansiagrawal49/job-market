import React from "react";

import {
  Column,
  Stack,
  Img,
  Row,
  Button,
  Text,
  Datepicker,
  Grid,
} from "components";

const OppurtunityPostingPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-poppins items-center justify-start mx-[auto] xl:pb-[118px] 2xl:pb-[133px] 3xl:pb-[159px] lg:pb-[94px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="bg-white_A700 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:px-[13px] xl:px-[16px] 2xl:px-[19px] 3xl:px-[22px] shadow-bs1 w-[100%]">
            <Stack className="absolute lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] inset-y-[0] left-[6%] my-[auto] w-[9%]">
              <Img
                src="images/img_image15.png"
                className="imageFifteen"
                alt="imageFifteen"
              />
            </Stack>
          </Stack>
          <Column className="justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[78%]">
            <Row className="items-center w-[80%]">
              <Column className="bg-white_A700 items-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs2 w-[60%]">
                <Column className="items-center justify-start mt-[1px] w-[17%]">
                  <Button className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]">
                    <Img
                      src="images/img_mail.svg"
                      className="flex items-center justify-center lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px]"
                      alt="mail"
                    />
                  </Button>
                  <Text className="columnmail" variant="body3">
                    Post Opportunity
                  </Text>
                </Column>
              </Column>
              <Column className="items-center lg:ml-[181px] xl:ml-[226px] 2xl:ml-[255px] 3xl:ml-[306px] w-[11%]">
                <Button className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]">
                  <Img
                    src="images/img_computer.svg"
                    className="flex items-center justify-center lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px]"
                    alt="computer"
                  />
                </Button>
                <Text className="columnmail" variant="body3">
                  Organization Details
                </Text>
              </Column>
            </Row>
            <Column className="bg-white_A700 items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius4 shadow-bs3 w-[100%]">
              <Column className="items-center justify-start lg:mb-[20px] xl:mb-[25px] 2xl:mb-[29px] 3xl:mb-[34px] w-[86%]">
                <Row className="items-center justify-between w-[100%]">
                  <Row className="items-center mt-[1px] w-[23%]">
                    <Button
                      className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_mail.svg"
                        className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px]"
                        alt="mail One"
                      />
                    </Button>
                    <Text className="rowmail_one" as="h2" variant="h2">
                      Post Opportunity
                    </Text>
                  </Row>
                  <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[1px] w-[25%]">
                    <Stack className="absolute lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] left-[0] w-[88%]">
                      <Stack className="absolute lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] left-[0] w-[82%]">
                        <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start left-[15%] my-[auto] w-[64%]">
                          <Row className="items-center justify-between w-[100%]">
                            <div className="bg-teal_600 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] w-[37%]"></div>
                            <div className="bg-teal_600 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] w-[37%]"></div>
                          </Row>
                        </Column>
                        <Text className="Group6357049" as="h1" variant="h1">
                          1
                        </Text>
                        <Text
                          className="absolute bg-teal_600 flex font-medium inset-x-[38%] items-center xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] rounded-radius50 text-white_A700 w-[40px]"
                          as="h1"
                          variant="h1"
                        >
                          2
                        </Text>
                        <Column className="absolute bg-teal_600 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start 3xl:px-[10px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] right-[0] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                          <Text className="columnthree" as="h1" variant="h1">
                            3
                          </Text>
                        </Column>
                      </Stack>
                      <div className="absolute bg-teal_600 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-y-[0] my-[auto] right-[0] w-[20%]"></div>
                    </Stack>
                    <Text className="Group6357052" as="h1" variant="h1">
                      4
                    </Text>
                  </Stack>
                </Row>
                <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[99%]">
                  <Text className="columnjobid" as="h4" variant="h4">
                    Employer assist
                  </Text>
                  <Column className="bg-white_A700 items-center justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] outline outline-[1px] outline-gray_400 lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius2 w-[100%]">
                    <Column className="items-center justify-start lg:mb-[17px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] w-[85%]">
                      <Column className="items-center justify-start w-[98%]">
                        <Text
                          className="font-normal leading-[normal] not-italic text-black_900 text-center w-[78%]"
                          as="h1"
                          variant="h1"
                        >
                          <span className="text-black_900 font-poppins lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                            If I do not show interest, decline each candidate
                            and{" "}
                          </span>
                          <span className="text-black_900 font-poppins font-medium lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                            automatically sent this message to all candidates
                            after
                          </span>
                          <span className="text-black_900 font-poppins lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                            .
                          </span>
                        </Text>
                        <Datepicker
                          className="placeholder:bg-transparent bg-transparent font-normal not-italic p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_501 text-gray_501 w-[100%]"
                          name="Group6356871"
                          placeholder="23/03/2022"
                        ></Datepicker>
                        <Column className="items-center justify-start lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
                          <Grid className="lg:gap-[42px] xl:gap-[53px] 2xl:gap-[60px] 3xl:gap-[72px] grid grid-cols-2 w-[100%]">
                            <Row className="items-start w-[100%]">
                              <Column className="bg-white_A700 lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-end outline outline-[1px] outline-gray_400 px-[2px] rounded-radius50 lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]">
                                <div className="bg-teal_600 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[1px] rounded-radius50 shadow-bs4 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                              </Column>
                              <Text
                                className="rowellipsenine"
                                as="h6"
                                variant="h6"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla mollis nibh non lacinia
                                blandit. Cras ferme.
                              </Text>
                            </Row>
                            <Row className="items-start w-[100%]">
                              <Column className="bg-white_A700 lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-end outline outline-[1px] outline-gray_400 px-[2px] rounded-radius50 lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]">
                                <div className="bg-teal_600 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[1px] rounded-radius50 shadow-bs4 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                              </Column>
                              <Text
                                className="rowellipsenine"
                                as="h6"
                                variant="h6"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla mollis nibh non lacinia
                                blandit. Cras ferme.
                              </Text>
                            </Row>
                            <Row className="items-start w-[100%]">
                              <Column className="bg-white_A700 lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-end outline outline-[1px] outline-gray_400 px-[2px] rounded-radius50 lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]">
                                <div className="bg-teal_600 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[1px] rounded-radius50 shadow-bs4 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                              </Column>
                              <Text
                                className="rowellipsenine"
                                as="h6"
                                variant="h6"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla mollis nibh non lacinia
                                blandit. Cras ferme.
                              </Text>
                            </Row>
                            <Row className="items-start w-[100%]">
                              <Column className="bg-white_A700 lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-end outline outline-[1px] outline-gray_400 px-[2px] rounded-radius50 lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]">
                                <div className="bg-teal_600 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[1px] rounded-radius50 shadow-bs4 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                              </Column>
                              <Text
                                className="rowellipsenine"
                                as="h6"
                                variant="h6"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla mollis nibh non lacinia
                                blandit. Cras ferme.
                              </Text>
                            </Row>
                          </Grid>
                        </Column>
                      </Column>
                      <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
                        <Text className="columnjobid" as="h4" variant="h4">
                          Write your own.
                        </Text>
                        <div className="bg-white_A700 lg:h-[125px] xl:h-[156px] 2xl:h-[176px] 3xl:h-[211px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] outline outline-[1px] outline-gray_301 rounded-radius2 w-[100%]"></div>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Row className="items-center justify-end ml-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[37%]">
              <Button
                className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[44%]"
                size="lg"
                variant="OutlineGray301"
              >
                Save draft
              </Button>
              <Button
                className="font-medium lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[52%]"
                size="lg"
                variant="FillTeal600"
              >
                Save and Next
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default OppurtunityPostingPage;
