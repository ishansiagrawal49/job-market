import React from "react";

import { Row, Img, Text, Stack } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-white_A700 items-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs1 w-[100%]">
          <Row className="items-start xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] w-[92%]">
            <Img
              src="images/img_menu.svg"
              className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] mt-[4px] w-[2%]"
              alt="menu"
            />
            <Img
              src="images/img_image15_20X132.png"
              className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[10%]"
              alt="imageFifteen"
            />
            <Text
              className="common-pointer font-poppins 3xl:ml-[1048px] lg:ml-[620px] xl:ml-[776px] 2xl:ml-[873px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rowtrailingicon"
              as="h2"
              variant="h2"
              onClick={props?.onPostopportunitClick}
            >
              Post opportunity
            </Text>
            <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
              <Img
                src="images/img_ellipse10.png"
                className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                alt="EllipseTen"
              />
              <Img
                src="images/img_clock.svg"
                className="absolute lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                alt="clock"
              />
            </Stack>
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header;
