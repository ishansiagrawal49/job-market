import React from "react";

import {
  Column,
  Stack,
  Img,
  Row,
  Button,
  Text,
  Input,
  SelectBox,
  List,
} from "components";
import { useNavigate } from "react-router-dom";

const PostoppurtunityPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/dashboard");
  }

  return (
    <>
      <Column className="bg-gray_50 font-poppins items-center justify-start mx-[auto] lg:pb-[169px] xl:pb-[212px] 2xl:pb-[239px] 3xl:pb-[286px] w-[100%]">
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
          <Column className="bg-white_A700 justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs3 w-[78%]">
            <Row className="items-center lg:ml-[49px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] w-[23%]">
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
            <Column className="items-center justify-start lg:mb-[20px] xl:mb-[25px] 2xl:mb-[29px] 3xl:mb-[34px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] mx-[auto] w-[86%]">
              <Stack className="lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                <Row className="absolute items-start justify-between top-[0] w-[100%]">
                  <Column className="justify-start lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[49%]">
                    <Column className="items-center justify-start w-[34%]">
                      <Text className="columnjobid" as="h4" variant="h4">
                        Organization name
                      </Text>
                    </Column>
                    <Input
                      className="placeholder:text-gray_501 Group6356762"
                      wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                      name="Group6356762"
                      placeholder="e. g. Job market"
                    ></Input>
                  </Column>
                  <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[49%]">
                    <Text className="columnjobid" as="h4" variant="h4">
                      Organization Logo
                    </Text>
                    <Row className="bg-white_A700 items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] outline outline-[1px] outline-gray_400 xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius4 w-[100%]">
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
                <Column className="absolute bottom-[0] justify-start left-[0] w-[49%]">
                  <Text className="columnjobid" as="h2" variant="h2">
                    Location
                  </Text>
                  <SelectBox
                    className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_501 w-[100%]"
                    placeholderClassName="text-gray_501"
                    name="Group6356767"
                    placeholder="E. g. Pune"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="lg:w-[8px] lg:h-[8px] lg:mr-[21px] xl:w-[10px] xl:h-[9px] xl:mr-[26px] 2xl:w-[12px] 2xl:h-[11px] 2xl:mr-[30px] 3xl:w-[14px] 3xl:h-[13px] 3xl:mr-[36px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </Column>
              </Stack>
              <Column className="justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                <Text className="columnjobid" as="h4" variant="h4">
                  Organization description
                </Text>
                <div className="bg-white_A700 lg:h-[143px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] outline outline-[1px] outline-gray_400 rounded-radius2 w-[100%]"></div>
              </Column>
              <Column className="justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                <Text className="columnjobid" as="h4" variant="h4">
                  Organization Culture
                </Text>
                <div className="bg-white_A700 lg:h-[143px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] outline outline-[1px] outline-gray_400 rounded-radius2 w-[100%]"></div>
              </Column>
              <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <List
                  className="lg:gap-[12px] xl:gap-[15px] 2xl:gap-[17px] 3xl:gap-[20px] grid grid-cols-2 min-h-[auto] pt-[3px] w-[100%]"
                  orientation="horizontal"
                >
                  <Column className="justify-start mt-[2px] w-[100%]">
                    <Text className="columnjobid" as="h4" variant="h4">
                      Snaps
                    </Text>
                    <Column className="bg-white_A700 items-center justify-end lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] outline outline-[1px] outline-gray_400 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[100%]">
                      <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                        <Input
                          className="placeholder:text-black_900 Group6356819"
                          wrapClassName="flex w-[52%]"
                          name="Group6356819 One"
                          placeholder="Upload from PC"
                          prefix={
                            <Img
                              src="images/img_upload.svg"
                              className="lg:w-[17px] lg:h-[18px] lg:ml-[7px] lg:mr-[14px] xl:w-[21px] xl:h-[22px] xl:ml-[8px] xl:mr-[17px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[10px] 2xl:mr-[20px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[12px] 3xl:mr-[24px] my-[auto]"
                              alt="upload"
                            />
                          }
                        ></Input>
                        <Row className="items-center justify-between lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
                          <Stack className="bg-bluegray_100 xl:h-[120px] 2xl:h-[135px] 3xl:h-[161px] lg:h-[96px] outline outline-[1px] outline-gray_201 lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] xl:w-[119px] 2xl:w-[134px] 3xl:w-[160px] lg:w-[95px]">
                            <Img
                              src="images/img_icon_action_delete24px.svg"
                              className="iconactiondel"
                              alt="iconactiondel"
                            />
                          </Stack>
                          <Stack className="bg-bluegray_100 xl:h-[120px] 2xl:h-[135px] 3xl:h-[161px] lg:h-[96px] outline outline-[1px] outline-gray_201 lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] xl:w-[119px] 2xl:w-[134px] 3xl:w-[160px] lg:w-[95px]">
                            <Img
                              src="images/img_icon_action_delete24px.svg"
                              className="iconactiondel"
                              alt="iconactiondel One"
                            />
                          </Stack>
                          <Stack className="bg-bluegray_100 xl:h-[120px] 2xl:h-[135px] 3xl:h-[161px] lg:h-[96px] outline outline-[1px] outline-gray_201 lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] xl:w-[119px] 2xl:w-[134px] 3xl:w-[160px] lg:w-[95px]">
                            <Img
                              src="images/img_icon_action_delete24px.svg"
                              className="iconactiondel"
                              alt="iconactiondel Two"
                            />
                          </Stack>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Text className="columnjobid" as="h4" variant="h4">
                      Videos
                    </Text>
                    <Column className="bg-white_A700 items-center justify-end 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] outline outline-[1px] outline-gray_400 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[100%]">
                      <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                        <Input
                          className="placeholder:text-black_900 Group6356819"
                          wrapClassName="flex w-[52%]"
                          name="Group6356819 Two"
                          placeholder="Upload from PC"
                          prefix={
                            <Img
                              src="images/img_upload.svg"
                              className="lg:w-[17px] lg:h-[18px] lg:ml-[7px] lg:mr-[14px] xl:w-[21px] xl:h-[22px] xl:ml-[8px] xl:mr-[17px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[10px] 2xl:mr-[20px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[12px] 3xl:mr-[24px] my-[auto]"
                              alt="upload"
                            />
                          }
                        ></Input>
                        <Row className="items-center justify-between lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
                          <Stack className="bg-bluegray_100 xl:h-[120px] 2xl:h-[135px] 3xl:h-[161px] lg:h-[96px] outline outline-[1px] outline-gray_201 lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] xl:w-[119px] 2xl:w-[134px] 3xl:w-[160px] lg:w-[95px]">
                            <Img
                              src="images/img_icon_action_delete24px.svg"
                              className="iconactiondel"
                              alt="iconactiondel One"
                            />
                          </Stack>
                          <Stack className="bg-bluegray_100 xl:h-[120px] 2xl:h-[135px] 3xl:h-[161px] lg:h-[96px] outline outline-[1px] outline-gray_201 lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] xl:w-[119px] 2xl:w-[134px] 3xl:w-[160px] lg:w-[95px]">
                            <Img
                              src="images/img_icon_action_delete24px.svg"
                              className="iconactiondel"
                              alt="iconactiondel One One"
                            />
                          </Stack>
                          <Stack className="bg-bluegray_100 xl:h-[120px] 2xl:h-[135px] 3xl:h-[161px] lg:h-[96px] outline outline-[1px] outline-gray_201 lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] xl:w-[119px] 2xl:w-[134px] 3xl:w-[160px] lg:w-[95px]">
                            <Img
                              src="images/img_icon_action_delete24px.svg"
                              className="iconactiondel"
                              alt="iconactiondel Two One"
                            />
                          </Stack>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </List>
              </Column>
            </Column>
          </Column>
          <Button
            className="common-pointer font-medium lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[18%]"
            onClick={handleNavigate2}
            size="lg"
            variant="FillTeal600"
          >
            Save Organization
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default PostoppurtunityPage;
