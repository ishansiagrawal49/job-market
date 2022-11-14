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
  SelectBox,
  RadioGroup,
  Radio,
  Datepicker,
  Slider,
  List,
} from "components";
import { useNavigate } from "react-router-dom";

const OppurtunityPostingOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/oppurtunitypostingtwo");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef();
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <Column className="bg-gray_50 font-poppins items-center justify-start mx-[auto] xl:pb-[116px] 2xl:pb-[131px] 3xl:pb-[157px] lg:pb-[93px] w-[100%]">
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
                <Button
                  className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  variant="icbFillGray200"
                >
                  <Img
                    src="images/img_group437.svg"
                    className="flex items-center justify-center lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px]"
                    alt="Group437"
                  />
                </Button>
                <Text className="columnmail" variant="body3">
                  Organization Details
                </Text>
              </Column>
            </Row>
            <Column className="bg-white_A700 items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius4 shadow-bs3 w-[100%]">
              <Column className="justify-start lg:mb-[13px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] w-[86%]">
                <Row className="items-center justify-between w-[99%]">
                  <Row className="items-center w-[23%]">
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
                  <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[25%]">
                    <PagerIndicator
                      className="absolute h-[4px] inset-[0] justify-center m-[auto] w-[max-content]"
                      count={3}
                      activeCss="inline-block cursor-pointer w-[40px] h-[4px] bg-teal_600 relative"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer w-[40px] h-[4px] bg-gray_500 relative"
                      selectedWrapperCss="2xl:mx-[14px] 3xl:mx-[16px] inline-block lg:mx-[9px] xl:mx-[12px]"
                      unselectedWrapperCss="2xl:mx-[14px] 3xl:mx-[16px] inline-block lg:mx-[9px] xl:mx-[12px]"
                    />
                    <Text className="Group6357049" as="h1" variant="h1">
                      1
                    </Text>
                    <Row className="absolute inset-x-[28%] items-center justify-center w-[45%]">
                      <Text
                        className="bg-gray_500 flex font-medium items-center xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] rounded-radius50 text-white_A700 w-[40px]"
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
                <Row className="items-center justify-between lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[99%]">
                  <Column className="pt-[4px] w-[49%]">
                    <Column className="items-center justify-start w-[11%]">
                      <Text className="columnjobid" as="h4" variant="h4">
                        Job ID
                      </Text>
                    </Column>
                    <Input
                      className="placeholder:text-gray_501 Group6356762"
                      wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                      name="Group6356762"
                      placeholder="e. g. 12345"
                    ></Input>
                  </Column>
                  <Column className="pt-[3px] w-[49%]">
                    <Column className="items-center justify-start w-[15%]">
                      <Text className="columnjobid" as="h4" variant="h4">
                        Job Title
                      </Text>
                    </Column>
                    <Input
                      className="placeholder:text-gray_501 Group6356762"
                      wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                      name="Group6356762 One"
                      placeholder="e. g. Ux Designer"
                    ></Input>
                  </Column>
                </Row>
                <Row className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[94%]">
                  <Column className="justify-start w-[51%]">
                    <Text className="columnjobid" as="h2" variant="h2">
                      Opportunity Type
                    </Text>
                    <SelectBox
                      className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="Group6356767"
                      placeholder="Job"
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
                  <RadioGroup
                    selectedValue="Remote"
                    className="flex lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[42%]"
                    name="radiogroupremote"
                  >
                    <Radio
                      value="Remote"
                      className="font-normal mt-[1px] not-italic lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900"
                      inputClassName="h-[20px] mr-[5px] w-[20px]"
                      checked={true}
                      name="radiogroupremote"
                      label="Remote"
                      shape="CircleBorder10"
                    ></Radio>
                    <Radio
                      value="WorkfromOffice"
                      className="font-normal mb-[1px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] not-italic pb-[1px] lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900"
                      inputClassName="h-[20px] mr-[5px] w-[20px]"
                      checked={false}
                      name="radiogroupremote"
                      label="Work from Office"
                      variant="OutlineGray400_1"
                    ></Radio>
                  </RadioGroup>
                </Row>
                <Row className="items-center justify-between lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[99%]">
                  <Column className="w-[49%]">
                    <Text className="columnjobid" as="h2" variant="h2">
                      Number of positions{" "}
                    </Text>
                    <Text
                      className="bg-white_A700 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic outline outline-[1px] outline-gray_400 lg:pl-[14px] xl:pl-[17px] 2xl:pl-[20px] 3xl:pl-[24px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:py-[9px] rounded-radius4 text-gray_501 w-[452px]"
                      as="h5"
                      variant="h5"
                    >
                      01
                    </Text>
                  </Column>
                  <Column className="mt-[1px] w-[49%]">
                    <Text className="columnjobid" as="h2" variant="h2">
                      Application deadline
                    </Text>
                    <Datepicker
                      className="placeholder:bg-transparent bg-transparent font-normal not-italic p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_501 text-gray_501 w-[100%]"
                      name="Group6356871 One"
                      placeholder="23/03/2022"
                    ></Datepicker>
                  </Column>
                </Row>
                <Stack className="lg:h-[193px] xl:h-[242px] 2xl:h-[272px] 3xl:h-[326px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                  <Stack className="absolute lg:h-[181px] xl:h-[226px] 2xl:h-[255px] 3xl:h-[305px] top-[0] w-[100%]">
                    <Column className="absolute items-center justify-start top-[0] w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Slider
                          slidesToShow={2}
                          activeIndex={sliderState}
                          onSlideChanged={(e) => {
                            setsliderState(e?.item);
                          }}
                          ref={sliderRef}
                          className="w-[100%]"
                          items={[...Array(6)].map(() => (
                            <React.Fragment key={Math.random()}>
                              <Column className="justify-start">
                                <Text
                                  className="columnjobid"
                                  as="h2"
                                  variant="h2"
                                >
                                  Employment
                                </Text>
                                <SelectBox
                                  className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_501 w-[100%]"
                                  placeholderClassName="text-gray_501"
                                  name="Group6356767 One"
                                  placeholder="Full Time"
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
                            </React.Fragment>
                          ))}
                          Indicator={({ isActive }) => {
                            if (isActive) {
                              return <div className="" />;
                            }
                            return (
                              <div className="" role="button" tabIndex={0} />
                            );
                          }}
                        />
                        <Row className="items-center justify-end ml-[auto] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[52%]">
                          <Img
                            src="images/img_arrowdown.svg"
                            className="cursor-pointer 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[2%]"
                            onClick={() => sliderRef.current?.slidePrev()}
                            alt="arrowdown Two"
                          />
                          <Img
                            src="images/img_arrowdown.svg"
                            className="cursor-pointer 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[327px] xl:ml-[409px] 2xl:ml-[460px] 3xl:ml-[552px] w-[2%]"
                            onClick={() => sliderRef.current?.slideNext()}
                            alt="arrowdown Three"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Slider
                          slidesToShow={2}
                          activeIndex={sliderState1}
                          onSlideChanged={(e) => {
                            setsliderState1(e?.item);
                          }}
                          ref={sliderRef1}
                          className="w-[100%]"
                          items={[...Array(6)].map(() => (
                            <React.Fragment key={Math.random()}>
                              <Column className="justify-start">
                                <Text
                                  className="columnjobid"
                                  as="h2"
                                  variant="h2"
                                >
                                  Industry Type
                                </Text>
                                <SelectBox
                                  className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_501 w-[100%]"
                                  placeholderClassName="text-gray_501"
                                  name="Group6356767 Two"
                                  placeholder="Design"
                                  isSearchable={false}
                                  isMulti={false}
                                ></SelectBox>
                              </Column>
                            </React.Fragment>
                          ))}
                          Indicator={({ isActive }) => {
                            if (isActive) {
                              return <div className="" />;
                            }
                            return (
                              <div className="" role="button" tabIndex={0} />
                            );
                          }}
                        />
                        <Row className="items-center justify-end ml-[auto] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[52%]">
                          <Img
                            src="images/img_arrowdown.svg"
                            className="cursor-pointer 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[2%]"
                            onClick={() => sliderRef1.current?.slidePrev()}
                            alt="arrowdown Four"
                          />
                          <Img
                            src="images/img_arrowdown.svg"
                            className="cursor-pointer 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[327px] xl:ml-[409px] 2xl:ml-[460px] 3xl:ml-[552px] w-[2%]"
                            onClick={() => sliderRef1.current?.slideNext()}
                            alt="arrowdown Five"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Stack>
                  <Row className="absolute bottom-[0] items-start justify-between pt-[4px] w-[100%]">
                    <Column className="justify-start w-[49%]">
                      <Text className="columnjobid" as="h2" variant="h2">
                        Education
                      </Text>
                      <SelectBox
                        className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="Group6356871 Four"
                        placeholder="B-Tech(UG)"
                        isSearchable={false}
                        isMulti={false}
                        size="sm"
                      ></SelectBox>
                    </Column>
                    <Column className="justify-start mt-[2px] w-[49%]">
                      <Text className="columnjobid" as="h2" variant="h2">
                        Role Category
                      </Text>
                      <SelectBox
                        className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="Group6356767 Three"
                        placeholder="UI/Ux"
                        isSearchable={false}
                        isMulti={false}
                        size="sm"
                      ></SelectBox>
                    </Column>
                  </Row>
                </Stack>
                <List
                  className="gap-[0] min-h-[auto] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[36%]"
                  orientation="vertical"
                >
                  <Column className="justify-start 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]">
                    <Text className="columnjobid" as="h2" variant="h2">
                      Experience (Years)
                    </Text>
                    <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                      <Text className="rowgroup6356899" as="h4" variant="h4">
                        0
                      </Text>
                      <Text className="rowgroup6356899" as="h4" variant="h4">
                        2
                      </Text>
                    </Row>
                  </Column>
                  <Column className="justify-start 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]">
                    <Text className="columnjobid" as="h2" variant="h2">
                      CTC (LPA)
                    </Text>
                    <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                      <Text className="rowgroup6356899" as="h4" variant="h4">
                        0
                      </Text>
                      <Text
                        className="bg-white_A700 border-bw05 border-gray_401 border-solid font-normal not-italic 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:pt-[10px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] rounded-radius4 text-black_900 w-[157px]"
                        as="h4"
                        variant="h4"
                      >
                        1,00,000
                      </Text>
                    </Row>
                  </Column>
                </List>
                <Column className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columnjobid" as="h4" variant="h4">
                      Add skills
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_501 text-gray_501 w-[100%]"
                      wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                      name="Group6356801"
                      placeholder="e. g. Prototyping"
                    ></Input>
                  </Column>
                  <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[86%]">
                    <Input
                      className="placeholder:text-black_900 Group6357042"
                      wrapClassName="flex w-[32%]"
                      name="Group6357042"
                      placeholder="Adobe Photoshop"
                      suffix={
                        <Img
                          src="images/img_icon_action_delete24px.svg"
                          className="lg:w-[21px] lg:h-[22px] lg:ml-[21px] lg:mr-[9px] xl:w-[26px] xl:h-[27px] xl:ml-[26px] xl:mr-[12px] 2xl:w-[30px] 2xl:h-[31px] 2xl:ml-[30px] 2xl:mr-[14px] 3xl:w-[36px] 3xl:h-[37px] 3xl:ml-[36px] 3xl:mr-[16px] my-[auto]"
                          alt="icon/action/delete_24px"
                        />
                      }
                      shape="CircleBorder22"
                      variant="FillGray100"
                    ></Input>
                    <Input
                      className="placeholder:text-black_900 Group6357042"
                      wrapClassName="2xl:ml-[20px] 3xl:ml-[24px] flex lg:ml-[14px] w-[32%] xl:ml-[17px]"
                      name="Group6357043"
                      placeholder="Adobe Photoshop"
                      suffix={
                        <Img
                          src="images/img_icon_action_delete24px.svg"
                          className="lg:w-[21px] lg:h-[22px] lg:ml-[21px] lg:mr-[9px] xl:w-[26px] xl:h-[27px] xl:ml-[26px] xl:mr-[12px] 2xl:w-[30px] 2xl:h-[31px] 2xl:ml-[30px] 2xl:mr-[14px] 3xl:w-[36px] 3xl:h-[37px] 3xl:ml-[36px] 3xl:mr-[16px] my-[auto]"
                          alt="icon/action/delete_24px"
                        />
                      }
                      shape="CircleBorder22"
                      variant="FillGray100"
                    ></Input>
                    <Input
                      className="placeholder:text-black_900 Group6357042"
                      wrapClassName="2xl:ml-[20px] 3xl:ml-[24px] flex lg:ml-[14px] w-[32%] xl:ml-[17px]"
                      name="Group6357044"
                      placeholder="Adobe Photoshop"
                      suffix={
                        <Img
                          src="images/img_icon_action_delete24px.svg"
                          className="lg:w-[21px] lg:h-[22px] lg:ml-[21px] lg:mr-[9px] xl:w-[26px] xl:h-[27px] xl:ml-[26px] xl:mr-[12px] 2xl:w-[30px] 2xl:h-[31px] 2xl:ml-[30px] 2xl:mr-[14px] 3xl:w-[36px] 3xl:h-[37px] 3xl:ml-[36px] 3xl:mr-[16px] my-[auto]"
                          alt="icon/action/delete_24px"
                        />
                      }
                      shape="CircleBorder22"
                      variant="FillGray100"
                    ></Input>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Button
              className="common-pointer font-medium 3xl:ml-[1083px] lg:ml-[641px] xl:ml-[802px] 2xl:ml-[902px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[20%]"
              onClick={handleNavigate6}
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

export default OppurtunityPostingOnePage;
