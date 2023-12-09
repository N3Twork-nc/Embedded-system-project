import React, {useState} from 'react'
import * as styles from './styleDashboard'

const Dashboard = () => {
  
  const Click = () => {
    window.location.href = "https://www.google.com";
  }
  return (
    <styles.DashboardRoot>
    {/* Header */}
      <styles.Maininforcontainer>
        {/* Chọn vườn */}
        <styles.Gardennamecontainer>
          <styles.Dropdownicon alt="" src="/chevron-right.svg" />
          <styles.Dropdownlist>Vườn xà lách</styles.Dropdownlist>
        </styles.Gardennamecontainer>

        <styles.Timecontainer>
          <styles.Hour>10:00 PM</styles.Hour>
        </styles.Timecontainer>

      {/* Info người dùng */}
        <styles.Userinfocontainer>

          <styles.AvatarimageIcon alt="" src="/avatarimage@2x.png" />

          <styles.ContainerInfoUser>          
            <styles.Nametext>
              <styles.Hello>Hello,</styles.Hello>
              <styles.NguynTrBo> Nguyễn Trà Bảo Ngân</styles.NguynTrBo>
            </styles.Nametext>

            <styles.Locatetext>Dĩ An, Bình Dương</styles.Locatetext>
          </styles.ContainerInfoUser>
        </styles.Userinfocontainer>

      </styles.Maininforcontainer>

      {/* Các chỉ số khu vườn */}
      <styles.Mainparametercontainer>
        {/* Đất */}
        <styles.Soilboxcontainer>
          <styles.Boxgardenname />
          <styles.Itemsoil>
            <styles.Soiltext>65%</styles.Soiltext>
            <styles.Iconsoil alt="" src="/iconsoil@2x.png" />
          </styles.Itemsoil>
          <styles.Soiltitle>Độ ẩm đất</styles.Soiltitle>
        </styles.Soilboxcontainer>
        {/* Không khí */}
        <styles.Airboxcontainer>
          <styles.Boxgardenname />
          <styles.Itemair>
            <styles.Airtext>65%</styles.Airtext>
            <styles.Iconair alt="" src="/iconair@2x.png" />
          </styles.Itemair>
          <styles.Airtitle>Độ ẩm không khí</styles.Airtitle>
        </styles.Airboxcontainer>
        {/* Ánh sáng */}
        <styles.Lightboxcontainer>
          <styles.Boxgardenname />
          <styles.Itemlight>
            <styles.Lighttext>65%</styles.Lighttext>
            <styles.Iconlight alt="" src="/iconlight@2x.png" />
            <styles.Lighttitle>Ánh sáng</styles.Lighttitle>
          </styles.Itemlight>
        </styles.Lightboxcontainer>
        {/* Nhiệt độ */}
        <styles.Tempboxcontainer>
          <styles.Boxgardenname />
          <styles.Itemtemp>
            <styles.Temptext>30°C</styles.Temptext>
            <styles.Icontemp alt="" src="/icontemp@2x.png" />
          </styles.Itemtemp>
          <styles.Temptitle>Nhiệt độ</styles.Temptitle>
        </styles.Tempboxcontainer>
      </styles.Mainparametercontainer>

      
    
      <styles.Taskbarcontainer>
        <styles.Taskbar />
        <styles.ItemAboutUs>
          <styles.IconAboutUs alt="" src="/icon-about-us.svg" />
          <styles.AboutUs>About us</styles.AboutUs>
        </styles.ItemAboutUs>
        <styles.ItemAllGardens>
          <styles.TtCKhu>Tất cả khu vườn</styles.TtCKhu>
          <styles.IconAllGardern alt="" src="/icon-all-gardern.svg" />
        </styles.ItemAllGardens>
        <styles.ItemDashboard>
          <styles.Dashboard1>Dashboard</styles.Dashboard1>
          <styles.DashboardIcon alt="" src="/dashboard.svg" />
        </styles.ItemDashboard>
        <styles.Plantaholic>Plantaholic</styles.Plantaholic>
        <styles.LogoIcon alt="" src="/logo@2x.png" />
        <styles.Navlist>
          <styles.Icontext>
            <styles.MoreIcon alt="" src="/info.svg" />
            <styles.OfflineOrders1>Help Center</styles.OfflineOrders1>
          </styles.Icontext>
          <styles.ChevronDownIcon2 alt="" src="/chevrondown1.svg" />
        </styles.Navlist>
        <styles.Navlist1>
          <styles.Icontext>
            <styles.MoreIcon alt="" src="/logout.svg" />
            <styles.OfflineOrders1>Log out</styles.OfflineOrders1>
          </styles.Icontext>
          <styles.Indicator>
            <styles.Wrapper>
              <styles.M>2</styles.M>
            </styles.Wrapper>
          </styles.Indicator>
        </styles.Navlist1>
      </styles.Taskbarcontainer>

      <styles.Webheadercontainer>
        <styles.Dashboard2>Dashboard</styles.Dashboard2>
        <styles.AddgardenContainer>
          <styles.Addgardenitems>
            <styles.Icongarden alt="" src="/icongarden.svg" />
            <styles.TextAddGarden onClick={Click}>Thêm vườn</styles.TextAddGarden>
            <styles.Iconaddgarden alt="" src="/add.png" />
          </styles.Addgardenitems>
        </styles.AddgardenContainer>
      </styles.Webheadercontainer>


      <styles.Imagecontainer>
        <styles.Boxaddgarden />
        <styles.ImageGardenIcon alt="" src="/image-garden@2x.png" />
        <styles.Headerimagecontainer>
          <styles.ButtoneditIcon alt="" src="/buttonedit@2x.png" />
          <styles.Imagetitle>Hình ảnh</styles.Imagetitle>
        </styles.Headerimagecontainer>
      </styles.Imagecontainer>
      <styles.Controllercontainer>
        <styles.Boxgardenname />
        <styles.Controltitle>Điều khiển</styles.Controltitle>
        <styles.Turnlightcontainer>
          <styles.Boxwater />
          <styles.Lightcontainer>
            <styles.Boxlighttext>
              <styles.Buttonlight>
                <styles.On>On</styles.On>
                <styles.ButtonlightChild alt="" src="/rectangle-16.svg" />
                <styles.ButtonlightItem />
              </styles.Buttonlight>
              <styles.Textlight>Bật tắt đèn</styles.Textlight>
            </styles.Boxlighttext>
            <styles.Lighticon alt="" src="/lighticon.svg" />
          </styles.Lightcontainer>
        </styles.Turnlightcontainer>
        <styles.Turnwatercontainer>
          <styles.Boxwater />
          <styles.Wateringcontainer>
            <styles.Boxwatertext>
              <styles.Buttonlight>
                <styles.On1>On</styles.On1>
                <styles.ButtonlightChild alt="" src="/rectangle-161.svg" />
                <styles.ButtonlightItem />
              </styles.Buttonlight>
              <styles.Textlight>Tưới nước</styles.Textlight>
            </styles.Boxwatertext>
            <styles.Wateringicon alt="" src="/lighticon.svg" />
          </styles.Wateringcontainer>
        </styles.Turnwatercontainer>
        <styles.Boxadddevices>
          <styles.Adddevicetext>Thêm thiết bị</styles.Adddevicetext>
          <styles.Addbutton>
            <styles.Iconadddevice/>
          </styles.Addbutton>
          <styles.Boxdevice />
        </styles.Boxadddevices>
      </styles.Controllercontainer>

        {/* Biểu đồ nhiệt độ */}
      <styles.TempGraph>
   
      </styles.TempGraph>

      {/* Biểu đồ độ ẩm */}
      <styles.HumiGraph>
     
      </styles.HumiGraph>

    </styles.DashboardRoot>

  );
};

export default Dashboard;
