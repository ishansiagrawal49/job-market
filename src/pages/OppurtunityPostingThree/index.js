import React from "react";

import {
  Column,
  Stack,
  Img,
  Row,
  Button,
  Text,
  PagerIndicator,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const OppurtunityPostingThreePage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/oppurtunityposting");
  }

  return (
    <>
      <Column className="bg-gray_50 font-poppins items-center justify-start mx-[auto] lg:pb-[49px] xl:pb-[61px] 2xl:pb-[69px] 3xl:pb-[82px] w-[100%]">
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
              <Column className="items-center justify-start lg:mb-[157px] xl:mb-[196px] 2xl:mb-[221px] 3xl:mb-[265px] w-[86%]">
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
                    <PagerIndicator
                      className="absolute h-[4px] inset-[0] justify-center m-[auto] w-[max-content]"
                      count={3}
                      activeCss="inline-block cursor-pointer w-[40px] h-[4px] bg-gray_500 relative"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer w-[40px] h-[4px] bg-teal_600 relative"
                      selectedWrapperCss="2xl:mx-[14px] 3xl:mx-[16px] inline-block lg:mx-[9px] xl:mx-[12px]"
                      unselectedWrapperCss="2xl:mx-[14px] 3xl:mx-[16px] inline-block lg:mx-[9px] xl:mx-[12px]"
                    />
                    <Text className="Group6357049" as="h1" variant="h1">
                      1
                    </Text>
                    <Row className="absolute inset-x-[28%] items-center justify-center w-[45%]">
                      <Text
                        className="bg-teal_600 flex font-medium items-center xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] rounded-radius50 text-white_A700 w-[40px]"
                        as="h1"
                        variant="h1"
                      >
                        2
                      </Text>
                      <Text
                        className="bg-gray_500 flex font-medium items-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] rounded-radius50 text-white_A700 w-[40px]"
                        as="h1"
                        variant="h1"
                      >
                        3
                      </Text>
                    </Row>
                    <Text className="Group6357052" as="h1" variant="h1">
                      4
                    </Text>
                  </Stack>
                </Row>
                <Column className="items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[99%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columnjobid" as="h4" variant="h4">
                      Job description (Minimum 3000 letters)
                    </Text>
                    <div className="bg-white_A700 xl:h-[121px] 2xl:h-[137px] 3xl:h-[164px] lg:h-[97px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] outline outline-[1px] outline-gray_400 rounded-radius2 w-[100%]"></div>
                  </Column>
                  <Column className="justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Text className="columnjobid" as="h4" variant="h4">
                      Responsibilities (Minimum 3000 letters)
                    </Text>
                    <div className="bg-white_A700 xl:h-[121px] 2xl:h-[137px] 3xl:h-[164px] lg:h-[97px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] outline outline-[1px] outline-gray_400 rounded-radius2 w-[100%]"></div>
                  </Column>
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                    <Text className="columnjobid" as="h4" variant="h4">
                      Desired candidate profile (Minimum 3000 letters)
                    </Text>
                    <div className="bg-white_A700 xl:h-[121px] 2xl:h-[137px] 3xl:h-[164px] lg:h-[97px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] outline outline-[1px] outline-gray_400 rounded-radius2 w-[100%]"></div>
                  </Column>
                  <Column className="justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Text className="columnjobid" as="h4" variant="h4">
                      Questions for Candidate (Optional){" "}
                    </Text>
                    <Column className="bg-white_A700 items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] outline outline-[1px] outline-gray_400 lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius2 w-[100%]">
                      <Row className="items-center lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[99%]">
                        <Input
                          className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
                          wrapClassName="w-[94%]"
                          name="GroupTwentyOne"
                          placeholder="Add Question 1"
                        ></Input>
                        <Img
                          src="images/img_plus.svg"
                          className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                          alt="plus"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-end w-[31%]">
                        <Text
                          className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] columnjobid"
                          as="h4"
                          variant="h4"
                        >
                          Your Desired Specific Category
                        </Text>
                        <Img
                          src="images/img_edit.svg"
                          className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] search"
                          alt="edit"
                        />
                      </Row>
                      <div className="bg-white_A700 xl:h-[121px] 2xl:h-[137px] 3xl:h-[164px] lg:h-[97px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] outline outline-[1px] outline-gray_400 rounded-radius2 w-[100%]"></div>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Button
              className="common-pointer font-medium 3xl:ml-[1083px] lg:ml-[641px] xl:ml-[802px] 2xl:ml-[902px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[20%]"
              onClick={handleNavigate5}
              size="lg"
              variant="FillTeal600"
            >
              Save and Next
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default OppurtunityPostingThreePage;
