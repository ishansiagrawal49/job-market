import React from "react";

import { Column, Stack, Img, Row, Button, Text, SelectBox } from "components";
import { useNavigate } from "react-router-dom";

const PostoppurtunityTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/postoppurtunityone");
  }

  return (
    <>
      <Column className="bg-gray_50 font-poppins items-center justify-start mx-[auto] lg:pb-[305px] xl:pb-[382px] 2xl:pb-[430px] 3xl:pb-[516px] w-[100%]">
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
          <Row className="items-center justify-end ml-[auto] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[63%]">
            <Column className="items-center w-[9%]">
              <Button
                className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                variant="icbFillGray200"
              >
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
            <Column className="bg-white_A700 items-center lg:ml-[192px] xl:ml-[241px] 2xl:ml-[271px] 3xl:ml-[325px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs2 w-[61%]">
              <Column className="items-center justify-start mb-[1px] w-[20%]">
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
            </Column>
          </Row>
          <Column className="bg-white_A700 justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius4 shadow-bs3 w-[78%]">
            <Column className="justify-start lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[80%]">
              <Row className="items-center w-[28%]">
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
                  Organization Details
                </Text>
              </Row>
              <Row className="items-end justify-between lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[99%]">
                <Column className="justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[52%]">
                  <Text className="columnjobid" as="h2" variant="h2">
                    Organization name
                  </Text>
                  <SelectBox
                    className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_501 w-[100%]"
                    placeholderClassName="text-gray_501"
                    name="Group6356767"
                    placeholder="Job market"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="lg:w-[8px] lg:h-[8px] lg:mr-[21px] xl:w-[10px] xl:h-[9px] xl:mr-[26px] 2xl:w-[12px] 2xl:h-[11px] 2xl:mr-[30px] 3xl:w-[14px] 3xl:h-[13px] 3xl:mr-[36px]"
                        alt="arrow_down"
                      />
                    }
                    size="md"
                  ></SelectBox>
                </Column>
                <Button
                  className="common-pointer font-medium lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[29%]"
                  onClick={handleNavigate4}
                  size="lg"
                  variant="FillTeal600"
                >
                  Add Organization
                </Button>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PostoppurtunityTwoPage;
