import React, {useState, useEffect } from 'react';
import * as styles from './styleDashboard';
import Plotly from 'plotly.js-dist';

const Dashboard = () => {
  const [tempYArray, setTempYArray] = useState([1, 2, 4, 5, 6, 4, 8, 9, 10, 9, 10, 9, 8, 10, 12, 8, 6, 5, 8, 7, 7, 7, 7, 9, 10, 9, 10, 9, 8, 10, 12]);
  const [humidYArray, setHumidYArray] = useState([2, 3, 5, 6, 7, 5, 9, 10, 11, 10, 11, 10, 9, 11, 13, 9, 7, 6, 9, 8, 8, 8, 8, 10, 11, 10, 11, 10, 9, 11, 13]);
  const [lightYArray, setLightYArray] = useState([2, 3, 5, 6, 7, 5, 9, 10, 11, 10, 11, 10, 9, 11, 13, 9, 7, 6, 9, 8, 8, 8, 8, 10, 11, 10, 11, 10, 9, 11, 13]);
  const [selectedTempRange, setSelectedTempRange] = useState('24h');
  const [selectedHumidRange, setSelectedHumidRange] = useState('24h');
  const [selectedLightRange, setSelectedLightRange] = useState('24h');

  useEffect(() => {
    const tempXData = generateXData(selectedTempRange);
    const humidXData = generateXData(selectedHumidRange);
    const lightXData = generateXData(selectedLightRange);

    const tempData = [{
      x: tempXData,
      y: tempYArray,
      mode: "lines"
    }];

    const humidData = [{
      x: humidXData,
      y: humidYArray,
      mode: "lines"
    }];
    const lightData = [{
      x: lightXData,
      y: lightYArray,
      mode: "lines"
    }];

    const tempLayout = {
      xaxis: {
        range: [1, tempXData.length],
        title: "Thời gian",
        tickvals: tempXData,
        ticktext: tempXData.map(value => value.toString())
      },
      yaxis: { range: [5, 16], title: "Giá trị nhiệt độ °C" },
      title: "Biểu đồ nhiệt độ"
    };

    const humidLayout = {
      xaxis: {
        range: [1, humidXData.length],
        title: "Thời gian",
        tickvals: humidXData,
        ticktext: humidXData.map(value => value.toString())
      },
      yaxis: { range: [0, 15], title: "Độ ẩm (%)" },
      title: "Biểu đồ độ ẩm"
    };
    const lightLayout = {
      xaxis: {
        range: [1, lightXData.length],
        title: "Thời gian",
        tickvals: lightXData,
        ticktext: lightXData.map(value => value.toString())
      },
      yaxis: { range: [0, 15], title: "Ánh sáng" },
      title: "Biểu đồ cường độ ánh sáng"
    };

    Plotly.newPlot("tempChart", tempData, tempLayout);
    Plotly.newPlot("humidChart", humidData, humidLayout);
    Plotly.newPlot("lightChart", lightData, lightLayout);
  }, [tempYArray, humidYArray, lightYArray, selectedTempRange, selectedHumidRange,selectedLightRange]);

  const handleTempDropdownChange = (event) => {
    setSelectedTempRange(event.target.value);
  };

  const handleHumidDropdownChange = (event) => {
    setSelectedHumidRange(event.target.value);
  };
  const handleLightDropdownChange = (event) => {
    setSelectedLightRange(event.target.value);
  };


  const generateXData = (selected) => {
    switch (selected) {
      case '24h':
        return Array.from({ length: 24 }, (_, i) => i + 1);
      case '7d':
        return generateDateRange(7);
      case '30d':
        return generateDateRange(30);
      default:
        return Array.from({ length: 24 }, (_, i) => i + 1);
    }
  };

  const generateDateRange = (daysAgo) => {
    const dates = [];
    const currentDate = new Date();

    for (let i = daysAgo - 1; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`; // Format: dd/mm
      dates.push(formattedDate);
    }

    return dates;
  };
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
        <styles.Dropdown1Container>
          <select
            value={selectedTempRange}
            onChange={handleTempDropdownChange}
            style={{
              padding: '4px',
              fontSize: '18px',
              fontWeight: 'bold',
              border: '1px solid #056C09',
              borderRadius: '4px',
              backgroundColor: '#EBFFE2'
            }}
          >
            <option value="24h">24h qua</option>
            <option value="7d">7 ngày qua</option>
            <option value="30d">30 ngày qua</option>
          </select>
        </styles.Dropdown1Container>
        <div id="tempChart" style={{ height: '450px', width: '100%' }}></div>
      </styles.TempGraph>

      {/* Biểu đồ độ ẩm */}
      <styles.HumiGraph>
        <styles.Dropdown2Container>
          <select
            value={selectedHumidRange}
            onChange={handleHumidDropdownChange}
            style={{
              padding: '4px',
              fontSize: '18px',
              fontWeight: 'bold',
              border: '1px solid #056C09',
              borderRadius: '4px',
              backgroundColor: '#EBFFE2'
            }}
          >
            <option value="24h">24h qua</option>
            <option value="7d">7 ngày qua</option>
            <option value="30d">30 ngày qua</option>
          </select>
        </styles.Dropdown2Container>
        <div id="humidChart" style={{ height: '450px', width: '100%' }}></div>
      </styles.HumiGraph>
      
       {/* Biểu đồ ánh sáng */}
       <styles.LightGraph>
        <styles.Dropdown3Container>
          <select
            value={selectedLightRange}
            onChange={handleLightDropdownChange}
            style={{
              padding: '4px',
              fontSize: '18px',
              fontWeight: 'bold',
              border: '1px solid #056C09',
              borderRadius: '4px',
              backgroundColor: '#EBFFE2'
            }}
          >
            <option value="24h">24h qua</option>
            <option value="7d">7 ngày qua</option>
            <option value="30d">30 ngày qua</option>
          </select>
        </styles.Dropdown3Container>
        <div id="lightChart" style={{ height: '450px', width: '100%' }}></div>
      </styles.LightGraph>
      
    </styles.DashboardRoot>

  );
};

export default Dashboard;