import React from "react";

import { Column, Stack, Img, Row, Button, Text, Input } from "components";
import { useNavigate } from "react-router-dom";

const OppurtunityPostingTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/oppurtunitypostingthree");
  }

  return (
    <>
      <Column className="bg-gray_50 font-poppins items-center justify-start mx-[auto] 2xl:pb-[109px] 3xl:pb-[130px] lg:pb-[77px] xl:pb-[96px] w-[100%]">
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
              <Column className="items-center justify-start lg:mb-[12px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] w-[86%]">
                <Row className="items-center justify-between w-[100%]">
                  <Row className="items-center mt-[1px] w-[23%]">
                    <Button
                      className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_group438.svg"
                        className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px]"
                        alt="Group438"
                      />
                    </Button>
                    <Text className="rowmail_one" as="h2" variant="h2">
                      Employer Details
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
                    <Text
                      className="absolute bg-teal_600 flex font-medium items-center xl:px-[11px] 2xl:px-[13px] 3xl:px-[15px] lg:px-[9px] right-[0] rounded-radius50 text-white_A700 w-[40px]"
                      as="h1"
                      variant="h1"
                    >
                      4
                    </Text>
                  </Stack>
                </Row>
                <Row className="items-start justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[99%]">
                  <Column className="items-center justify-start w-[49%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Column className="justify-start pt-[4px] w-[100%]">
                        <Column className="items-center justify-start w-[11%]">
                          <Text className="columnjobid" as="h4" variant="h4">
                            Name
                          </Text>
                        </Column>
                        <Input
                          className="placeholder:text-gray_501 Group6356762"
                          wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                          type="text"
                          name="Group6356762"
                          placeholder="Name"
                          size="md"
                        ></Input>
                      </Column>
                      <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                        <Text className="rowtrailingicon" as="h4" variant="h4">
                          Email ID
                        </Text>
                        <Row className="bg-white_A700 border-bw05 border-gray_401 border-solid items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:pl-[14px] xl:pl-[17px] 2xl:pl-[20px] 3xl:pl-[24px] rounded-radius4 w-[100%]">
                          <Text
                            className="not-italic text-gray_501 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Your email id here!
                          </Text>
                          <Img
                            src="images/img_close_44X44.svg"
                            className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                            alt="close"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Text className="rowtrailingicon" as="h4" variant="h4">
                        Mobile Number
                      </Text>
                      <Row className="bg-white_A700 border-bw05 border-gray_401 border-solid items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:pl-[14px] xl:pl-[17px] 2xl:pl-[20px] 3xl:pl-[24px] rounded-radius4 w-[100%]">
                        <Text
                          className="not-italic text-gray_501 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          !23456789
                        </Text>
                        <Img
                          src="images/img_close_44X44.svg"
                          className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                          alt="close One"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="justify-start mt-[3px] w-[49%]">
                    <Text className="columnjobid" as="h4" variant="h4">
                      Profile Picture
                    </Text>
                    <Row className="bg-white_A700 items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] outline outline-[1px] outline-gray_400 xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius4 w-[100%]">
                      <Column className="ml-[4px] w-[53%]">
                        <Input
                          className="placeholder:text-black_900 Group6356819"
                          wrapClassName="flex w-[100%]"
                          name="Group6356819"
                          placeholder="Upload from PC"
                          prefix={
                            <Img
                              src="images/img_upload.svg"
                              className="lg:w-[17px] lg:h-[18px] lg:ml-[7px] lg:mr-[14px] xl:w-[21px] xl:h-[22px] xl:ml-[8px] xl:mr-[17px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[10px] 2xl:mr-[20px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[12px] 3xl:mr-[24px] my-[auto]"
                              alt="upload"
                            />
                          }
                        ></Input>
                        <Text className="columngroup6356819" variant="body2">
                          JPG | Max 2 MB
                        </Text>
                      </Column>
                      <Img
                        src="images/img_rectangle136.png"
                        className="Rectangle1361"
                        alt="Rectangle136"
                      />
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Row className="items-center justify-end ml-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[49%]">
              <Button
                className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[52%]"
                size="lg"
                variant="OutlineGray301"
              >
                View Candidate View
              </Button>
              <Button
                className="common-pointer font-medium lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[45%]"
                onClick={handleNavigate7}
                size="lg"
                variant="FillTeal600"
              >
                Post Oppurtunity
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default OppurtunityPostingTwoPage;
