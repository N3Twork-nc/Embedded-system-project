import styled from "styled-components";

export const Boxgardenname = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: var(--br-3xs);
  background-color: var(--white);
`;

export const Gardennamecontainer = styled.div`
  position: absolute;
  width: calc(100% - 810px);
  top: 10px;
  left: 830px;
  box-shadow: 0px 20px 70px rgba(86, 89, 146, 0.1);
  height: 53px;
  color: var(--primary);
  background-color: var(--white);
  border-radius:15px;
`;
export const Hour = styled.b`
  position: absolute;
  width: 76.52%;
  top: 24.53%;
  left: 11.36%;
  display: inline-block;
`;
export const Timecontainer = styled.div`
 position: absolute;
  height: 71.62%;
  width: 12.49%;
  top: 13.51%;
  right: 27.81%;
  bottom: 14.86%;
  left: 59.7%;
  background-color: var(--white);
  border-radius: 13px; 
`;
export const AvatarimageIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 12.91%;
  top: 0%;
  right: 87.09%;
  bottom: 0%;
  left: 0%;
  border-radius: 42px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
export const Hello = styled.span``;
export const NguynTrBo = styled.b``;
export const Nametext = styled.div`
  position: absolute;
  width: 100%;
  top: 0%;
  left: 0%;
  letter-spacing: 0.02em;
  display: inline-block;
`;
export const Locatetext = styled.div`
  position: absolute;
  width: 71.63%;
  top: 65.52%;
  left: 0%;
  font-size: var(--font-size-mid);
  letter-spacing: 0.02em;
  color: var(--primary);
  display: inline-block;
`;
export const ContainerInfoUser = styled.div`
  position: absolute;
  height: 78.38%;
  width: 84.34%;
  top: 6.76%;
  right: 0%;
  bottom: 14.86%;
  left: 15.66%;
`;
export const Userinfocontainer = styled.div`
  position: absolute;
  height: 100%;
  width: 54.97%;
  top: 0%;
  right: 45.03%;
  bottom: 0%;
  left: 0%;
  font-size: 27px;
`;
export const Maininforcontainer = styled.div`
position: absolute;
  width: calc(100% - 770px);
  top: 130px;
  right: 418.86px;
  left: 324.44px;
  height: 74px;
  color: var(--color-darkgreen-100);
`;

export const ModalContainer = styled.div`

    height: 200px;
    width: 200px;
    border-radius: 15px;
    border: 1px solid #B4E0A0;
    background-color: var(--white);
    font-size: 16px;
    align-items: center;
    justify-content: center;
    
`
export const GardenName = styled.div`
  font-size: 25px;
  font-weight: 1000;
  font-family: var(--font-roboto);
  color: var(--color-darkgreen-100);
  display: inline-block;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const GardenImageContainer = styled.img`
   height: 200px;
  width: 200px;
  border-radius: 15px;
`;
export const GardenContainer = styled.div`

  width: 300px;
  box-shadow: var(--shadow);
  background-color: var(--white);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

export const ButtonOptionContainer = styled.div`
   flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
`
export const ButtonOptionDelete = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 40px;
  &:hover {
  box-shadow: 0 0 5px 1px var(--main);
}
`
export const ButtonOptionEdit = styled.img`
  width: 35px;
  height: 35px;
  &:hover {
  box-shadow: 0 0 5px 1px var(--main);
}
`
export const ButtonOptionInfo = styled.img`
  width: 36px;
  height: 36px;
  &:hover {
  box-shadow: 0 0 5px 1px var(--main);
}
`
export const MoreIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const AllGardenContainer = styled.div`
  position: absolute;
  width: calc(100% - 250px);
  top: 230px;
  left: 380px;
  height: 140px;
  font-size: var(--font-size-11xl);
  color: var(--color-midnightblue);
  font-family: var(--footnote);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px; /* Khoảng cách giữa các Tempboxcontainer */
`;
export const M = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 500;
`;

export const Taskbar = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: #056c09;
`;
export const IconAboutUs = styled.img`
  position: absolute;
  height: 97.5%;
  width: 9.28%;
  top: 8.75%;
  right: 91.31%;
  bottom: -6.25%;
  left: -0.59%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
export const AboutUs = styled.div`
  position: absolute;
  width: 85.71%;
  top: 0%;
  left: 14.29%;
  font-weight: 600;
  display: inline-block;
`;
export const ItemAboutUs = styled.div`
  position: absolute;
  height: 1.65%;
  width: 76.64%;
  top: 27.05%;
  right: 4.74%;
  bottom: 71.3%;
  left: 18.61%;
`;
export const TtCKhu = styled.div`
  position: absolute;
  width: 85.71%;
  top: 4.76%;
  left: 14.29%;
  font-weight: 600;
  display: inline-block;
`;
export const IconAllGardern = styled.img`
  position: absolute;
  height: 92.86%;
  width: 10.23%;
  top: -5.95%;
  right: 90.36%;
  bottom: 13.1%;
  left: -0.59%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
export const ItemAllGardens = styled.div`
  position: absolute;
  height: 1.74%;
  width: 76.64%;
  top: 21.75%;
  right: 5.84%;
  bottom: 76.51%;
  left: 17.52%;
`;
export const Dashboard1 = styled.div`
  position: absolute;
  width: 73.45%;
  top: 0%;
  left: 26.55%;
  font-weight: 600;
  display: inline-block;
`;
export const DashboardIcon = styled.img`
  position: absolute;
  height: 102.5%;
  width: 19.9%;
  top: -6.25%;
  right: 81.2%;
  bottom: 3.75%;
  left: -1.1%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
export const ItemDashboard = styled.div`
  position: absolute;
  height: 1.65%;
  width: 41.24%;
  top: 16.29%;
  right: 41.24%;
  bottom: 82.05%;
  left: 17.52%;
`;
export const Plantaholic = styled.b`
  position: absolute;
  width: 45.18%;
  top: 7.2%;
  left: 34.38%;
  font-size: var(--font-size-xl);
  display: flex;
  font-family: var(--font-montserrat);
  align-items: center;
`;
export const LogoIcon = styled.img`
  position: absolute;
  height: 7.8%;
  width: 22.02%;
  top: 3.13%;
  right: 65.57%;
  bottom: 90.07%;
  left: 10.41%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
export const OfflineOrders1 = styled.b`
  position: relative;
  line-height: 150%;
`;
export const Icontext = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
export const ChevronDownIcon2 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
export const Navlist = styled.div`
  position: absolute;
  height: 1.99%;
  width: 70.44%;
  right: 10.95%;
  bottom: 5.3%;
  left: 18.61%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-50xl);
  font-size: var(--headline-size);
`;
export const Wrapper = styled.div`
  border-radius: var(--br-mid);
  background-color: var(--red);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-7xs-5);
`;
export const Indicator = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-10xs);
  text-align: center;
  font-size: var(--caption-medium-size);
  font-family: var(--footnote);
`;
export const Navlist1 = styled.div`
  position: absolute;
  height: 2.99%;
  width: 70.44%;
  right: 9.49%;
  bottom: 9.24%;
  left: 20.07%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-50xl);
  font-size: var(--headline-size);
`;
export const Taskbarcontainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 15.25%;
  top: 0;
  left: 0%;
  font-size: var(--font-size-mid);
  color: var(--white);
`;
export const Dashboard2 = styled.div`
  position: absolute;
  width: 28%;
  top: 10.53%;
  left: 0%;
  font-weight: 600;
  display: inline-block;
  font-family: roboto;
`;

export const Icongarden = styled.img`
  position: absolute;
  height: 100%;
  width: 18.18%;
  top: 0%;
  right: 81.82%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
export const TextAddGarden = styled.div`
  position: absolute;
  top: 16%;
  font-size: 23px;
  width: 47.92%;
  left: 35%;
  font-weight: 600;
  display: inline-block;
  color: var(--primary);
`;
export const Iconaddgarden = styled.img`
  position: absolute;
  height: 50%;
  width: 9.09%;
  top: 24%;
  right: -0.36%;
  bottom: 26%;
  left: 91.27%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  border-radius: 13px;
  background-color: var(--white);
/* CSS khi trỏ chuột vào */
&:hover {
  position: absolute;
  box-shadow: 0 0 5px 1px var(--main);
}
`;
export const Addgardenitems = styled.div`
  position: absolute;
  height: 65.79%;
  width: 79.25%;
  top: 19.74%;
  right: 12.97%;
  bottom: 14.47%;
  left: 7.78%;
  align-items: center;
  justify-content: center;

`;
export const AddgardenContainer = styled.div`
position: absolute;
  width: calc(100% - 1170px);
  top: 0px;
  right: 0px;
  left: 1140px;
  height: 76px;
  font-size: 18px;
  color: #2c3e50;
  font-family: var(--font-roboto);
  background-color: var(--white);
  border-radius: 15px;
`;
export const Webheadercontainer = styled.div`
    position: absolute;
  width: calc(100% - 339.5px);
  top: 36px;
  right: 15.07px;
  left: 324.44px;
  height: 76px;
  font-size: 40px;
  font-family: var(--footnote);
`;

export const DashboardRoot = styled.div`
  position: relative;
  background-color: #ebffe2;
  width: 100%;
  height: 2000px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-4xl);
  color: var(--primary);
  font-family: var(--font-roboto);
`;

export const CountGarden = styled.div`
  position: absolute;
  width: 15%;
  top: 0px;
  right: 0px;
  left: 850px;
  height: 76px;
  font-size: 18px;
  color: #2c3e50;
  font-family: var(--font-roboto);
  background-color: var(--white);
  border-radius: 15px;
`;
export const CountText = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
  font-size: 23px;
  width: 80%;
  font-weight: 600;
  display: inline-block;
  color: var(--primary);
`;